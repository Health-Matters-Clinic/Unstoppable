/* HMC shared button enhancer.

   Builds the two label copies the roll-up needs, so apps do not have to
   restructure every button by hand. Only text nodes are wrapped, which
   leaves icons, dots and any other element children exactly where they are.

   Usage: give a button `hmc-btn` plus `hmc-btn-primary` or `hmc-btn-secondary`.
   To adopt buttons that already have their own class names, set
   `window.HMC_BUTTON_SELECTOR` to an extra CSS selector before this loads. */
(function () {
  var SELECTOR = '.hmc-btn';

  function enhance(el) {
    if (el.getAttribute('data-hmc-btn') === 'on') return;
    el.setAttribute('data-hmc-btn', 'on');

    // Add the dot unless the button already has one or opts out.
    if (el.getAttribute('data-hmc-dot') !== 'off' && !el.querySelector('.hmc-btn-dot')) {
      var dot = document.createElement('span');
      dot.className = 'hmc-btn-dot';
      dot.setAttribute('aria-hidden', 'true');
      el.insertBefore(dot, el.firstChild);
    }

    // Wrap each non-empty text node in the clip structure. Collected first
    // because the DOM is mutated while iterating.
    var texts = [];
    for (var i = 0; i < el.childNodes.length; i++) {
      var n = el.childNodes[i];
      if (n.nodeType === 3 && n.nodeValue.trim()) texts.push(n);
    }

    texts.forEach(function (node) {
      var label = node.nodeValue.trim();
      var clip = document.createElement('span');
      clip.className = 'hmc-btn-clip';

      var a = document.createElement('span');
      a.className = 'hmc-btn-label';
      a.textContent = label;

      // Duplicate is decorative; hidden so the label is not announced twice.
      var b = document.createElement('span');
      b.className = 'hmc-btn-label hmc-btn-label-alt';
      b.textContent = label;
      b.setAttribute('aria-hidden', 'true');

      clip.appendChild(a);
      clip.appendChild(b);
      node.parentNode.replaceChild(clip, node);
    });
  }

  function run() {
    var sel = SELECTOR;
    if (window.HMC_BUTTON_SELECTOR) sel += ',' + window.HMC_BUTTON_SELECTOR;
    document.querySelectorAll(sel).forEach(enhance);
  }

  function start() {
    run();
    // Most HMC surfaces render client-side, so catch buttons added later.
    if (window.MutationObserver) {
      new MutationObserver(function () { run(); })
        .observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
