/* ============================================================
   HMC Unstoppable - Immersive scroll layer
   Lenis (smooth scroll) + GSAP ScrollTrigger (parallax / reveals / pinning)
   ------------------------------------------------------------
   Design notes:
   - This layer ENHANCES the existing site. The lightweight hmc-parallax.js
     (progress bar, kinetic marquee) and the carousels keep working on their own.
   - It is fully disabled when:
       * prefers-reduced-motion is set, OR
       * the page is embedded in an iframe (Webflow), to avoid nested smooth-scroll
         fighting the parent scroll and breaking the auto-height postMessage.
   - All GSAP libs must already be present (loaded via pinned CDN in index.html).
     If a lib is missing the script no-ops gracefully.
   ============================================================ */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var embedded = window.parent !== window;
  var hasLibs = !!(window.gsap && window.ScrollTrigger);

  // Reveal helper used in the non-motion fallback path so content never stays hidden.
  function revealAll() {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.style.opacity = '';
      el.style.transform = '';
    });
  }

  if (reduce || embedded || !hasLibs) {
    revealAll();
    return;
  }

  document.documentElement.classList.add('hmc-immersive');

  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- 1. Lenis smooth scroll, synced to ScrollTrigger ---------- */
  if (window.Lenis) {
    var lenis = new window.Lenis({
      duration: 1.05,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      smoothWheel: true,
      smoothTouch: false // keep native touch scrolling on mobile for performance
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(function (time) {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // In-page anchor links should use Lenis so smooth-scroll feels consistent.
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      a.addEventListener('click', function (e) {
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: 0, duration: 1.1 });
      });
    });

    window.__hmcLenis = lenis;
  }

  /* ---------- 2. HERO: layered parallax + type drift on scroll ---------- */
  (function heroParallax() {
    var hero = document.getElementById('top');
    if (!hero) return;
    var carousel = hero.querySelector('.hero-carousel');
    var content = hero.querySelector('.hero-content');
    var word = hero.querySelector('[data-hero-word]');
    var brand = hero.querySelector('.hero-brand');

    // Background drifts slower than the page (depth).
    if (carousel) {
      gsap.to(carousel, {
        yPercent: 16,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
      });
    }
    // Oversized wordmark drifts up and fades slightly as you leave the hero.
    if (word) {
      gsap.to(word, {
        yPercent: -22,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
      });
    }
    // Copy + CTAs lift gently and fade so the hero feels like it lifts away.
    if (content) {
      gsap.to(content, {
        y: -60,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom 30%', scrub: true }
      });
    }
    if (brand) {
      gsap.to(brand, {
        y: -30,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
      });
    }
    // Intro flourish: wordmark scales in from slightly oversized on first paint.
    if (word) {
      gsap.from(word, { scale: 1.08, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.1 });
    }
  })();

  /* ---------- 3. Staggered reveals (replaces flat fade-ins) ---------- */
  // Opt content in without touching markup: tag the major typographic + card blocks.
  var revealSelectors = [
    '.mission-eyebrow', '.stories-head', '.case-study-block',
    '.share-head', '.share-portrait', '.submit-block',
    '.resources-head', '.resource-card',
    '.digital-companion-head', '.dc-card',
    '.impact-stat', '.impact-source',
    '.report-inner > div', '.report-cover-wrap',
    '.supporters-head', '.supporter-cell',
    '.facilitator-head', '.attend-banner', '.facilitator-card'
  ];
  revealSelectors.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      el.setAttribute('data-reveal', '');
    });
  });

  // Batch reveals with a subtle stagger per group for a cohesive premium cadence.
  gsap.utils.toArray('[data-reveal]').forEach(function (el) {
    gsap.set(el, { y: 40, opacity: 0 });
  });
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    onEnter: function (batch) {
      gsap.to(batch, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        stagger: 0.08, overwrite: true
      });
    },
    once: true
  });

  /* ---------- 4. Image parallax inside framed media ---------- */
  // Case-study photos and the report cover photo drift within their frames.
  gsap.utils.toArray('.case-study-image img').forEach(function (img) {
    gsap.fromTo(img, { yPercent: -8 }, {
      yPercent: 8, ease: 'none',
      scrollTrigger: { trigger: img.closest('.case-study-block') || img, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });
  var reportPhoto = document.querySelector('.report-cover-photo');
  if (reportPhoto) {
    gsap.fromTo(reportPhoto, { backgroundPositionY: '40%' }, {
      backgroundPositionY: '60%', ease: 'none',
      scrollTrigger: { trigger: reportPhoto.closest('.report') || reportPhoto, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  }

  /* ---------- 5. Oversized section titles drift on scroll ---------- */
  // Gives the big italic display type the "kinetic depth" of the reference sites.
  var driftTitles = [
    '.stories-title', '.share-title', '.resources-title',
    '.digital-companion-title', '.report-title', '.supporters-title',
    '.facilitator-title'
  ];
  driftTitles.forEach(function (sel) {
    var el = document.querySelector(sel);
    if (!el) return;
    gsap.fromTo(el, { x: -24 }, {
      x: 24, ease: 'none',
      scrollTrigger: {
        trigger: el.closest('section') || el,
        start: 'top bottom', end: 'bottom top', scrub: true
      }
    });
  });

  /* ---------- 6. Impact metrics: count-up + accent line draw ---------- */
  document.querySelectorAll('.impact-num').forEach(function (el) {
    var raw = (el.textContent || '').trim();
    var m = raw.match(/^(\d+)(%?)$/);
    if (!m) return; // skip non-numeric (e.g. "LACDMH")
    var end = parseInt(m[1], 10);
    var suffix = m[2] || '';
    var obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: function () {
        gsap.to(obj, {
          v: end, duration: 1.4, ease: 'power2.out',
          onUpdate: function () { el.textContent = Math.round(obj.v) + suffix; }
        });
      }
    });
  });

  /* ---------- 7. Live Unstoppable CTA: background depth ---------- */
  var liveBg = document.querySelector('.live-cta-bg');
  if (liveBg) {
    gsap.fromTo(liveBg, { yPercent: -10 }, {
      yPercent: 10, ease: 'none',
      scrollTrigger: { trigger: '.live-cta', start: 'top bottom', end: 'bottom top', scrub: true }
    });
  }

  /* ---------- 8. Keep ScrollTrigger honest after async layout shifts ---------- */
  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  // Images loading in (lazy) change document height; refresh once they settle.
  var refreshTimer;
  document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
    img.addEventListener('load', function () {
      clearTimeout(refreshTimer);
      refreshTimer = setTimeout(function () { ScrollTrigger.refresh(); }, 200);
    });
  });
})();
