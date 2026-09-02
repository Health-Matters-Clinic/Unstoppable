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


  // ── September campaign section ─────────────────────────────────────────────
  //
  // Sits directly after Start Here, per the campaign plan. Three pillars, in the
  // order the campaign runs them: know where you are, then reach somebody, then
  // build something that helps. 988 closes the block rather than opening it,
  // because leading a whole section with a crisis line tells people this is only
  // for emergencies, which is the belief the campaign exists to argue with.
  var SEPT_CSS = [
    '#hmc-september-mount{margin:56px 0}',
    '#hmc-september-mount .sep{position:relative;overflow:hidden;border-radius:28px;background:#233DFF;color:#fff;padding:clamp(40px,6vw,72px) clamp(24px,5vw,64px)}',
    '#hmc-september-mount .sep-eyebrow{font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#F9C74F;margin:0 0 18px}',
    '#hmc-september-mount .sep-title{font-size:clamp(30px,5vw,60px);line-height:1.05;font-weight:700;letter-spacing:-.02em;margin:0 0 20px;max-width:16ch}',
    '#hmc-september-mount .sep-title em{font-style:italic}',
    '#hmc-september-mount .sep-intro{max-width:60ch;font-size:clamp(15px,1.5vw,18px);line-height:1.6;color:rgba(255,255,255,.86);margin:0 0 40px}',
    '#hmc-september-mount .sep-grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));margin:0 0 36px}',
    '#hmc-september-mount .sep-card{background:rgba(255,255,255,.10);border:1px solid rgba(255,255,255,.18);border-radius:18px;padding:24px;display:flex;flex-direction:column;gap:10px}',
    '#hmc-september-mount .sep-card h4{margin:0;font-size:17px;font-weight:700;letter-spacing:-.01em}',
    '#hmc-september-mount .sep-card p{margin:0;font-size:14px;line-height:1.55;color:rgba(255,255,255,.8);flex:1}',
    '#hmc-september-mount .sep-card a{margin-top:6px;align-self:flex-start;display:inline-flex;align-items:center;gap:9px;background:#fff;color:#233DFF;font-size:14px;font-weight:700;padding:11px 22px;border-radius:100px;text-decoration:none;transition:transform .18s}',
    '#hmc-september-mount .sep-card a::before{content:"";width:6px;height:6px;border-radius:50%;background:#233DFF;flex:none}',
    '#hmc-september-mount .sep-card a:hover{transform:translateY(-1px)}',
    '#hmc-september-mount .sep-988{display:flex;flex-wrap:wrap;align-items:center;gap:22px;background:#000;border-radius:18px;padding:20px 24px}',
    '#hmc-september-mount .sep-988 img{width:104px;height:104px;border-radius:12px;object-fit:cover;flex:none}',
    '#hmc-september-mount .sep-988 div{flex:1;min-width:220px}',
    '#hmc-september-mount .sep-988 strong{display:block;font-size:16px;margin-bottom:6px}',
    '#hmc-september-mount .sep-988 p{margin:0;font-size:14px;line-height:1.55;color:rgba(255,255,255,.75)}',
    '@media (max-width:600px){#hmc-september-mount .sep-988 img{width:72px;height:72px}}'
  ].join('\n');

  var SEPT_HTML =
    '<div class="sep">' +
      '<p class="sep-eyebrow">September 2026 &middot; Suicide Prevention &amp; Recovery Month</p>' +
      '<h3 class="sep-title">Check yourself. Check in. <em>Move forward.</em></h3>' +
      '<p class="sep-intro">Mental wellness is not only something to think about in a crisis. Knowing where you are, staying connected to people, and finding practices that help all count. Start with one.</p>' +
      '<div class="sep-grid">' +
        '<div class="sep-card"><h4>Check yourself.</h4><p>How are you, really? Take about three minutes to see where you are at. Free, private, English and Spanish.</p><a href="https://www.healthmatters.clinic/resources/checkyourself">Start a check-in</a></div>' +
        '<div class="sep-card"><h4>Check in.</h4><p>You do not have to do it alone. Find events, workshops, and community happening across Los Angeles and online.</p><a href="https://eventfinder.healthmatters.clinic">Find an event</a></div>' +
        '<div class="sep-card"><h4>Move forward.</h4><p>Practical tools for the moments when you need to pause, reset, move, or simply keep going.</p><a href="https://calmkit.healthmatters.clinic">Explore CalmKit</a></div>' +
      '</div>' +
      '<div class="sep-988">' +
        '<img src="https://cdn.prod.website-files.com/67359e6040140078962e8a54/6956f6b4bd127ad3dd889d4e_Screenshot%202026-01-01%20at%204.35.14%E2%80%AFPM.png" alt="Call 988, the Suicide and Crisis Lifeline" loading="lazy">' +
        '<div><strong>You do not have to be at your worst to reach out.</strong>' +
        '<p>Call or text <strong>988</strong> any time, free and confidential. Text HOME to 741741. If someone is in immediate danger, call 911.</p></div>' +
      '</div>' +
    '</div>';

  function mountSeptember() {
    var el = document.getElementById('hmc-september-mount');
    if (!el || el.getAttribute('data-sep') === 'on') return;
    el.setAttribute('data-sep', 'on');
    if (!document.getElementById('hmc-sep-style')) {
      var st = document.createElement('style');
      st.id = 'hmc-sep-style';
      st.textContent = SEPT_CSS;
      document.head.appendChild(st);
    }
    el.innerHTML = SEPT_HTML;
  }

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

  function boot() { mount(); mountSeptember(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
