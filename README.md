# HMC Unstoppable

Standalone landing page for the Health Matters Clinic Unstoppable program. ASICS Move Her Mind-inspired layout. Static HTML + assets, no build step.

## Sections

A. Hero (rotating photo carousel)
B. Mission slider
C. Intro Stories carousel
D. Stories grid + article overlay
E. Share Your Story (form posts to `volunteer.healthmatters.clinic/api/public/unstoppable-stories`)
F. Resources & Products (filterable)
G. The Report
H. Supporters
I. Footer + FAQ

## Deploy

Push to `main`. The GitHub Actions workflow at `.github/workflows/deploy.yml` publishes everything in the repo root to GitHub Pages.

1. Create the GitHub repo (e.g. `TEAMHMC/Unstoppable`)
2. Settings → Pages → Source: **GitHub Actions**
3. Push to `main` — workflow runs, page goes live at `https://teamhmc.github.io/Unstoppable/`
4. Embed in Webflow with an iframe:
   ```html
   <iframe id="unstoppable-frame" src="https://teamhmc.github.io/Unstoppable/" style="width:100%;border:0;display:block" loading="lazy" title="HMC Unstoppable"></iframe>
   ```

## Webflow custom code (paste once, in the page's Before-`</body>` slot)

The iframe auto-detects that it's embedded, hides its own footer/FAQ, and posts
its scrollHeight to the parent on load + resize + image-load + DOM changes. The
parent just needs this listener to resize the iframe so there is no nested
scroll:

```html
<script>
(function(){
  window.addEventListener('message', function(e){
    if (!e || !e.data || e.data.type !== 'hmcEmbedHeight') return;
    if (e.data.source !== 'unstoppable') return;
    var f = document.getElementById('unstoppable-frame');
    if (!f) return;
    var h = parseInt(e.data.height, 10);
    if (h > 0) f.style.height = h + 'px';
  }, false);
})();
</script>
```

No origin check is included so the same listener works for both
`teamhmc.github.io` and any future custom domain. If you tighten it, gate on
`e.origin === 'https://teamhmc.github.io'`.

## Asset paths

All assets are referenced with relative paths (`./photos/...`, `./unstoppable-logo.png`, etc.) so the page works at any subpath.
