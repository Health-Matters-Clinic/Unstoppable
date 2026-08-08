#!/usr/bin/env python3
"""HMC production audit.

Checks the classes of bug that do not announce themselves: a capability the
browser silently refuses, or an asset that quietly 404s. Both were shipped
undetected and were only found by a human clicking the thing.

  python3 scripts/hmc-audit.py              # all checks
  python3 scripts/hmc-audit.py --check embed
  python3 scripts/hmc-audit.py --check links

Exit code is 1 if anything fails, so this can gate CI or run on a schedule.
"""
import argparse, concurrent.futures as cf, re, sys, urllib.request, urllib.error, urllib.parse

SURFACES = [
    "https://www.healthmatters.clinic/",
    "https://www.healthmatters.clinic/events",
    "https://www.healthmatters.clinic/resources/eventfinder",
    "https://www.healthmatters.clinic/resources/resourcedirectory",
    "https://www.healthmatters.clinic/resources/checkyourself",
    "https://www.healthmatters.clinic/resources/calmkit",
    "https://www.healthmatters.clinic/partners",
    "https://www.healthmatters.clinic/funders",
    "https://www.healthmatters.clinic/impact",
    "https://eventfinder.healthmatters.clinic/",
    "https://calmkit.healthmatters.clinic/",
    "https://unstoppable.healthmatters.clinic/",
    "https://partner.healthmatters.clinic/",
    "https://hub.healthmatters.clinic/",
]

# Browser features that are permission-policy gated inside a cross-origin
# iframe. If the embedded app calls one and the parent iframe does not
# delegate it, the call fails silently. This is the share-button bug.
GATED = {
    "web-share":      [r"navigator\.share\s*\("],
    "clipboard-write":[r"navigator\.clipboard", r"clipboard\.writeText"],
    "geolocation":    [r"navigator\.geolocation"],
    "camera":         [r"getUserMedia\s*\([^)]*video"],
    "microphone":     [r"getUserMedia\s*\([^)]*audio"],
    "screen-wake-lock":[r"wakeLock\.request"],
    "fullscreen":     [r"requestFullscreen\s*\("],
}

TIMEOUT = 25
UA = {"User-Agent": "HMC-Audit/1.0"}
failures = []

def get(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
        return r.status, r.read().decode("utf8", "ignore")

def status_of(url):
    try:
        req = urllib.request.Request(url, headers=UA, method="HEAD")
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            return r.status
    except urllib.error.HTTPError as e:
        if e.code in (403, 405):          # some CDNs refuse HEAD
            try:
                return get(url)[0]
            except Exception as e2:
                return getattr(e2, "code", 0)
        return e.code
    except Exception:
        return 0

def check_embeds():
    """Every gated API an embedded app calls must be delegated by its iframe."""
    print("\n== iframe permission delegation ==")
    seen = set()
    for page in SURFACES:
        try:
            _, html = get(page)
        except Exception as e:
            print(f"  ?  {page} unreachable ({e})"); continue
        for tag in re.findall(r"<iframe\b[^>]*>", html, re.I):
            src = re.search(r'src="([^"]+)"', tag)
            if not src:
                continue                   # src set by script; checked at source
            src = urllib.parse.urljoin(page, src.group(1))
            if urllib.parse.urlparse(src).netloc == urllib.parse.urlparse(page).netloc:
                continue                   # same origin, policy does not apply
            if src in seen:
                continue
            seen.add(src)
            allow = re.search(r'allow="([^"]*)"', tag)
            allow = allow.group(1) if allow else ""
            try:
                _, inner = get(src)
                for js in re.findall(r'src="([^"]+\.js[^"]*)"', inner)[:6]:
                    try: inner += get(urllib.parse.urljoin(src, js))[1]
                    except Exception: pass
            except Exception as e:
                print(f"  ?  {src} unreachable ({e})"); continue
            for feat, pats in GATED.items():
                if any(re.search(p, inner) for p in pats) and feat not in allow:
                    msg = f'{src} calls {feat} but its iframe on {page} omits allow="{feat}"'
                    failures.append(msg); print(f"  FAIL {msg}")
    print("  (no findings)" if not failures else "")

def check_links():
    """Every script, stylesheet and image referenced must actually resolve."""
    print("\n== asset and link integrity ==")
    assets = {}
    for page in SURFACES:
        try:
            _, html = get(page)
        except Exception as e:
            print(f"  ?  {page} unreachable ({e})"); continue
        for m in re.finditer(r'(?:src|href)="(https?://[^"]+\.(?:js|css|png|jpg|jpeg|svg|webp|ico))"', html):
            assets.setdefault(m.group(1), page)
    print(f"  checking {len(assets)} unique assets")
    with cf.ThreadPoolExecutor(max_workers=12) as ex:
        for (url, page), code in zip(assets.items(), ex.map(status_of, assets)):
            if code >= 400 or code == 0:
                msg = f"{url} -> {code or 'unreachable'} (referenced by {page})"
                failures.append(msg); print(f"  FAIL {msg}")

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", choices=["embed", "links", "all"], default="all")
    a = ap.parse_args()
    if a.check in ("embed", "all"): check_embeds()
    if a.check in ("links", "all"): check_links()
    print(f"\n{'FAILED: ' + str(len(failures)) + ' finding(s)' if failures else 'PASS: no findings'}")
    sys.exit(1 if failures else 0)
