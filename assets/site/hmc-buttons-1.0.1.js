/* HMC shared button enhancer.

   Sets a data attribute holding the button's label. The stylesheet renders it
   as an overlay copy that slides up on hover, which is how the roll-up works
   without a Webflow interaction.

   Deliberately attribute-only. These surfaces are React apps; injecting or
   replacing child nodes that React owns makes React throw NotFoundError the
   next time it re-renders a button whose label changes, such as a submitting
   or busy state. Writing an attribute is safe: if React overwrites it on
   re-render, the observer below simply re-applies it.

   Usage: `class="hmc-btn hmc-btn-primary"` or `hmc-btn-secondary`.
   Opt a button out of the hover copy with `data-hmc-norollup`.
   Extra selectors can be adopted via `window.HMC_BUTTON_SELECTOR`. */
(function () {
  var SELECTOR = '.hmc-btn';

  function label(el) {
    // Visible text only; ignore the overlay itself and any icon markup.
    var t = '';
    el.childNodes.forEach(function (n) { if (n.nodeType === 3) t += n.nodeValue; });
    return t.trim();
  }

  function enhance(el) {
    if (el.hasAttribute('data-hmc-norollup')) return;
    var text = label(el);
    // Buttons that are icon-only have nothing to roll.
    if (!text) { el.removeAttribute('data-hmc-label'); return; }
    if (el.getAttribute('data-hmc-label') !== text) el.setAttribute('data-hmc-label', text);
  }

  function run() {
    var sel = SELECTOR;
    if (window.HMC_BUTTON_SELECTOR) sel += ',' + window.HMC_BUTTON_SELECTOR;
    document.querySelectorAll(sel).forEach(enhance);
  }

  function start() {
    run();
    if (window.MutationObserver) {
      // Coalesce bursts so a re-rendering app does not re-run this per mutation.
      var queued = false;
      new MutationObserver(function () {
        if (queued) return;
        queued = true;
        requestAnimationFrame(function () { queued = false; run(); });
      }).observe(document.body, { childList: true, subtree: true, characterData: true });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
