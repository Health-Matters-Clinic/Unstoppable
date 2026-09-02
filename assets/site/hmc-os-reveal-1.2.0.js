/**
 * HMC OS reveal, rendered into #hmc-os-mount on the homepage.
 *
 * Lives in a hosted file rather than as Webflow elements because the section is a
 * deliberate break from the page around it: black ground, gradient wordmark, staged
 * scroll reveal. Built out of the page's inherited classes it came out as a
 * full-bleed blue button under flat black type, which is the opposite of a debut.
 * Webflow owns one empty div; everything visual is here, versioned and diffable.
 *
 * Does nothing at all on pages without the mount, so it is safe site-wide.
 */
(function () {
  var CSS = [
    '#hmc-os-mount .hmcos{position:relative;overflow:hidden;border-radius:28px;background:#000;padding:clamp(56px,9vw,120px) clamp(24px,5vw,72px);text-align:center;isolation:isolate}',
    '#hmc-os-mount .hmcos::before{content:"";position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse 70% 55% at 50% 42%,#1b2a86 0%,rgba(20,28,90,.55) 38%,rgba(0,0,0,0) 72%)}',
    '#hmc-os-mount .hmcos>*{position:relative;z-index:1}',
    '#hmc-os-mount .hmcos-eyebrow{font-size:12px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:#F9C74F;margin:0 0 26px}',
    '#hmc-os-mount .hmcos-mark{font-size:clamp(56px,12vw,148px);line-height:.92;font-weight:600;letter-spacing:-.03em;margin:0 0 28px;background:linear-gradient(100deg,#fff 12%,#c3ccff 52%,#7d8dff 96%);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}',
    '#hmc-os-mount .hmcos-mark sup{font-size:.2em;letter-spacing:0;vertical-align:super;color:#9aa8ff;-webkit-text-fill-color:#9aa8ff}',
    '#hmc-os-mount .hmcos-line{font-size:clamp(26px,4.4vw,52px);line-height:1.12;font-weight:500;letter-spacing:-.02em;color:#fff;margin:0 0 26px}',
    '#hmc-os-mount .hmcos-body{max-width:52ch;margin:0 auto 40px;font-size:clamp(15px,1.5vw,19px);line-height:1.65;color:rgba(255,255,255,.72)}',
    '#hmc-os-mount .hmcos-cta{display:inline-flex;align-items:center;gap:11px;background:#233DFF;color:#fff;font-size:15px;font-weight:700;padding:16px 34px;border-radius:100px;text-decoration:none;width:auto;box-shadow:0 10px 34px rgba(35,61,255,.42);transition:transform .2s,box-shadow .2s,background .2s}',
    '#hmc-os-mount .hmcos-cta::before{content:"";width:7px;height:7px;border-radius:50%;background:#fff;flex:none}',
    '#hmc-os-mount .hmcos-cta:hover{background:#1a2fd4;transform:translateY(-2px);box-shadow:0 14px 40px rgba(35,61,255,.5)}',
    '#hmc-os-mount .hmcos-rise{opacity:0;transform:translateY(26px);transition:opacity .9s cubic-bezier(.2,.7,.3,1),transform .9s cubic-bezier(.2,.7,.3,1)}',
    '#hmc-os-mount .hmcos.is-in .hmcos-rise{opacity:1;transform:none}',
    '#hmc-os-mount .hmcos.is-in .hmcos-rise:nth-child(2){transition-delay:.10s}',
    '#hmc-os-mount .hmcos.is-in .hmcos-rise:nth-child(3){transition-delay:.22s}',
    '#hmc-os-mount .hmcos.is-in .hmcos-rise:nth-child(4){transition-delay:.34s}',
    '#hmc-os-mount .hmcos.is-in .hmcos-rise:nth-child(5){transition-delay:.46s}',
    '@media (prefers-reduced-motion:reduce){#hmc-os-mount .hmcos-rise{opacity:1;transform:none;transition:none}}'
  ].join('\n');

  var HTML =
    '<div class="hmcos">' +
      '<p class="hmcos-eyebrow hmcos-rise">Health Matters Clinic presents</p>' +
      '<p class="hmcos-mark hmcos-rise">HMC OS<sup>&trade;</sup></p>' +
      '<p class="hmcos-line hmcos-rise">Your next step starts here.</p>' +
      '<p class="hmcos-body hmcos-rise">Care, programs, events, tools, training, partnerships. None of it stands alone. HMC OS is the system that connects it, built to carry you from wherever you&rsquo;re starting to wherever you need to go next.</p>' +
      '<a class="hmcos-cta hmcos-rise" href="https://os.healthmatters.clinic">Step inside HMC OS</a>' +
    '</div>';



  function mount() {
    var el = document.getElementById('hmc-os-mount');
    if (!el || el.getAttribute('data-hmcos') === 'on') return;
    el.setAttribute('data-hmcos', 'on');

    if (!document.getElementById('hmcos-style')) {
      var st = document.createElement('style');
      st.id = 'hmcos-style';
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    el.innerHTML = HTML;

    var box = el.firstElementChild;
    // Reveal on scroll, but fall straight to visible where IntersectionObserver is
    // missing. A section that never animates in beats one that never appears.
    if (!('IntersectionObserver' in window)) { box.classList.add('is-in'); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { box.classList.add('is-in'); io.disconnect(); }
      });
    }, { threshold: 0.25 });
    io.observe(box);
  }

  function boot() { mount(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
