(function(){function ready(f){if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',f)}else{f()}}
ready(function(){
try{
var links=document.querySelectorAll('a.nav-dropdown-link-7');
var blog=null,podcast=null,gi=null;
links.forEach(function(a){var t=a.textContent.trim();
if(t==='Blog'&&!blog)blog=a;else if(t==='Podcast'&&!podcast)podcast=a;else if(t==='Get Involved'&&!gi)gi=a;});
if(podcast){podcast.innerHTML=podcast.innerHTML.replace('Podcast','Unboxed Podcast');}
if(gi&&gi.getAttribute('href')==='#'){gi.setAttribute('href','/get-involved');}
if(blog){var col=blog.parentNode;
[['Resources','/resources']].forEach(function(it){
var n=document.createElement('a');n.className='nav-dropdown-link-7 w-dropdown-link';n.href=it[1];
n.textContent='\u00a0\u00a0\u00a0\u00a0 '+it[0];col.insertBefore(n,blog);});}
}catch(e){}

// Remove FAQ from More nav. Passive support content, not outcome-oriented.
try{document.querySelectorAll('a.nav-dropdown-link-7').forEach(function(a){if(a.textContent.trim()==='FAQ'&&a.parentNode)a.parentNode.removeChild(a);});}catch(e){}
try{
var css=".hmc-footer { background: #0a0a0a; color: #fff; font-family: Inter, -apple-system, sans-serif; padding: 72px 64px 0; } .hmc-footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr; gap: 48px; padding-bottom: 64px; border-bottom: 1px solid rgba(255,255,255,.08); } .hmc-footer-brand-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; text-decoration: none; } .hmc-footer-brand-logo img { width: 40px; height: 40px; border-radius: 10px; } .hmc-footer-brand-name { font-size: 13px; font-weight: 800; color: #fff; letter-spacing: .04em; text-transform: uppercase; } .hmc-footer-brand-desc { font-size: 13px; color: rgba(255,255,255,.6); line-height: 1.7; margin: 0 0 24px; max-width: 260px; } .hmc-footer-donate { display: inline-flex; align-items: center; gap: 14px; background: #2333df; color: #fff; border: 1px solid #0f0f0f; border-radius: 100px; padding: 12px 22px; font-size: 16px; line-height: 1.2em; font-weight: 400; letter-spacing: normal; text-transform: capitalize; text-decoration: none; transition-duration: .3s; } .hmc-footer-donate:hover { opacity: 1; color: #fff; } .hmc-btn-clip { position: relative; display: inline-block; overflow: hidden; line-height: 1.2em; vertical-align: bottom; } .hmc-btn-t { display: block; transition: transform .3s ease; } .hmc-btn-t2 { position: absolute; left: 0; top: 100%; width: 100%; } .hmc-footer-donate:hover .hmc-btn-t { transform: translateY(-100%); } .hmc-bar-btn { border: 1px solid rgba(255,255,255,.55); gap: 14px; text-transform: capitalize; font-size: 14px; font-weight: 400; letter-spacing: normal; padding: 8px 20px; } .hmc-bar-btn:hover { color: #fff; opacity: 1; background: rgba(255,255,255,.15); } .hmct-cta:hover { color: #fff; opacity: 1; } .hmc-btn-clip { position: relative; display: inline-block; overflow: hidden; line-height: 1.2em; vertical-align: bottom; } .hmc-btn-label { display: block; transition: transform .3s ease; white-space: nowrap; } .hmc-btn-label-alt { position: absolute; left: 0; top: 100%; width: 100%; } .hmc-bar-btn:hover .hmc-btn-label { transform: translateY(-100%); } .hmc-footer-donate-dot { width: 6px; height: 6px; border-radius: 50%; background: #fff; flex-shrink: 0; } .hmc-footer-col-title { font-size: 10px; font-weight: 800; letter-spacing: .15em; text-transform: uppercase; color: rgba(255,255,255,.5); margin: 0 0 20px; } .hmc-footer-links { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; } .hmc-footer-links a { font-size: 13px; font-weight: 500; text-decoration: none; transition: color .2s; display: flex; align-items: center; gap: 6px; } .hmc-footer-social { display: flex; gap: 10px; margin-top: 20px; } .hmc-footer-social a { width: 34px; height: 34px; border-radius: 50%; background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.1); display: flex; align-items: center; justify-content: center; text-decoration: none; transition: background .2s, color .2s; } .hmc-footer-social a:hover { background: #233dff; border-color: #233dff; } .hmc-footer-bottom { display: flex; align-items: center; justify-content: space-between; padding: 24px 0; gap: 16px; flex-wrap: wrap; } .hmc-footer-legal { font-size: 11px; color: rgba(255,255,255,.5); margin: 0; } .hmc-footer-legal a { text-decoration: none; } .hmc-footer-status { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 600; color: rgba(255,255,255,.25); } .hmc-footer-status-dot { width: 6px; height: 6px; border-radius: 50%; background: #12c06b; } @media (max-width: 1024px) { .hmc-footer { padding: 56px 32px 0; } .hmc-footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; } } @media (max-width: 640px) { .hmc-footer { padding: 48px 24px 0; } .hmc-footer-grid { grid-template-columns: 1fr; gap: 32px; } .hmc-footer-bottom { flex-direction: column; align-items: flex-start; } } .primary-dark-button-6 .clip-13, .secondary-light-button .clip-13 { position: relative; overflow: hidden; } .primary-dark-button-6 .button-text-15, .secondary-light-button .button-text-15 { transition: transform .3s ease; } .primary-dark-button-6:hover .button-text-15, .secondary-light-button:hover .button-text-15 { transform: translateY(-100%); }";
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
var FHTML="<footer class=\"hmc-footer\" role=\"contentinfo\"> <div class=\"hmc-footer-grid\"> <div> <a href=\"https://www.healthmatters.clinic\" class=\"hmc-footer-brand-logo\" aria-label=\"Health Matters Clinic\"> <img src=\"https://cdn.prod.website-files.com/67359e6040140078962e8a54/690707bad1dd547278086592_Untitled%20(256%20x%20256%20px)-2.png\" alt=\"HMC\" /> <span class=\"hmc-footer-brand-name\">Health Matters Clinic</span> </a> <p class=\"hmc-footer-brand-desc\"> A Los Angeles-based 501(c)(3) nonprofit advancing health equity through community wellness events, mental health education, primary care screenings, and digital wellness tools across LA County. </p> <a href=\"https://www.healthmatters.clinic/donate\" class=\"hmc-footer-donate\"> <span class=\"hmc-footer-donate-dot\"></span><span class=\"hmc-btn-clip\"><span class=\"hmc-btn-t\">Support Our Mission</span><span class=\"hmc-btn-t hmc-btn-t2\">Support Our Mission</span></span> </a> <div class=\"hmc-footer-social\" aria-label=\"Social media links\"> <a href=\"https://www.healthmatters.clinic\" title=\"Website\" aria-label=\"HMC Website\"> <svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"/></svg> </a> <a href=\"https://www.instagram.com/healthmatters.clinic\" title=\"Instagram\" aria-label=\"HMC Instagram\"> <svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\"/><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"/><line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"/></svg> </a> <a href=\"https://www.linkedin.com/company/healthmattersclinic\" title=\"LinkedIn\" aria-label=\"HMC LinkedIn\"> <svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z\"/><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"/><circle cx=\"4\" cy=\"4\" r=\"2\"/></svg> </a> <a href=\"https://www.youtube.com/@healthmatters.clinic\" title=\"YouTube\" aria-label=\"HMC YouTube\"> <svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z\"/><polygon points=\"9.75 15.02 15.5 12 9.75 8.98 9.75 15.02\" fill=\"currentColor\" stroke=\"none\"/></svg> </a> </div> </div> <div> <p class=\"hmc-footer-col-title\">Resources</p> <ul class=\"hmc-footer-links\"> <li><a href=\"https://www.healthmatters.clinic\">Home</a></li> <li><a href=\"https://eventfinder.healthmatters.clinic\">Event Finder</a></li> <li><a href=\"https://www.healthmatters.clinic/resources/resourcedirectory\">Resource Directory</a></li> <li><a href=\"https://www.healthmatters.clinic/resources/checkyourself\">Check Yourself</a></li> <li><a href=\"https://calmkit.healthmatters.clinic\">CalmKit</a></li> </ul> </div> <div> <p class=\"hmc-footer-col-title\">Programs</p> <ul class=\"hmc-footer-links\"> <li><a href=\"https://www.healthmatters.clinic/programs/unstoppable\">Unstoppable</a></li> <li><a href=\"https://www.healthmatters.clinic/initiatives\">Initiatives</a></li> <li><a href=\"https://www.healthmatters.clinic/events\">Events</a></li> <li><a href=\"https://www.healthmatters.clinic/programs\">All Programs</a></li> </ul> </div> <div> <p class=\"hmc-footer-col-title\">Get Involved</p> <ul class=\"hmc-footer-links\"> <li><a href=\"https://volunteer.healthmatters.clinic\">Volunteer Portal</a></li> <li><a href=\"https://volunteer.healthmatters.clinic/tour\">Take the Tour</a></li> <li><a href=\"https://volunteer.healthmatters.clinic/board\">Advisory Board</a></li> <li><a href=\"https://partner.healthmatters.clinic\">Partner Portal</a></li> <li><a href=\"https://www.healthmatters.clinic/donate\">Donate</a></li> </ul> </div> <div> <p class=\"hmc-footer-col-title\">Organization</p> <ul class=\"hmc-footer-links\"> <li><a href=\"https://www.healthmatters.clinic/about-us\">About Us</a></li> <li><a href=\"https://www.healthmatters.clinic/contact-us\">Contact</a></li> <li><a href=\"https://www.healthmatters.clinic/blog\">Blog</a></li> <li><a href=\"https://www.healthmatters.clinic/podcast\">Unboxed Podcast</a></li> <li><a href=\"https://www.healthmatters.clinic/shop\">Shop</a></li> <li><a href=\"mailto:media@healthmatters.clinic\">Press</a></li> </ul> </div> </div> <div class=\"hmc-footer-bottom\"> <p class=\"hmc-footer-legal\"> &copy; 2026 Health Matters Clinic. All rights reserved. 501(c)(3) Nonprofit. &nbsp;&nbsp; <a href=\"https://www.healthmatters.clinic/privacy-policy\">Privacy</a> &nbsp;&middot;&nbsp; <a href=\"https://www.healthmatters.clinic/terms\">Terms</a> &nbsp;&middot;&nbsp; <a href=\"https://www.healthmatters.clinic/cookies\">Cookies</a> </p> </div> </footer>";
function mkFoot(){
  var h=document.createElement('div');h.innerHTML=FHTML;var nf=h.firstElementChild;
  // -webkit-text-fill-color set here alongside color: a Webflow-side rule (source
  // not isolable from this stylesheet) sets -webkit-text-fill-color:transparent on
  // these links, which paints the glyphs regardless of the color property above.
  // getComputedStyle(a).color reports the intended white correctly, but the actual
  // rendered text was invisible against the black footer. Confirmed by temporarily
  // swapping the footer to a white background: the "invisible" text painted solid
  // black, proving it was a real fill-color override, not a screenshot artifact.
  nf.querySelectorAll('.hmc-footer-links a').forEach(function(a){
    a.style.setProperty('color','rgba(255,255,255,.85)','important');
    a.style.setProperty('-webkit-text-fill-color','rgba(255,255,255,.85)','important');
    a.onmouseover=function(){this.style.setProperty('color','#fff','important');this.style.setProperty('-webkit-text-fill-color','#fff','important');};
    a.onmouseout=function(){this.style.setProperty('color','rgba(255,255,255,.85)','important');this.style.setProperty('-webkit-text-fill-color','rgba(255,255,255,.85)','important');};
  });
  nf.querySelectorAll('.hmc-footer-legal a').forEach(function(a){
    a.style.setProperty('color','rgba(255,255,255,.55)','important');
    a.style.setProperty('-webkit-text-fill-color','rgba(255,255,255,.55)','important');
  });
  nf.querySelectorAll('.hmc-footer-social a').forEach(function(a){
    a.style.setProperty('color','rgba(255,255,255,.6)','important');
    a.style.setProperty('-webkit-text-fill-color','rgba(255,255,255,.6)','important');
  });
  return nf;
}
function findOF(){
  var sels=['footer.footer','div.footer','section.footer','.footer-wrap','.footer-section','.site-footer','footer[class]','footer'];
  for(var i=0;i<sels.length;i++){
    var el=document.querySelector(sels[i]);
    if(el&&el.parentNode&&!el.classList.contains('hmc-footer'))return el;
  }
  return null;
}
var nf=mkFoot();var of=findOF();
if(of&&of.parentNode){of.parentNode.replaceChild(nf,of);}
else{
  document.body.appendChild(nf);
  setTimeout(function(){
    var of2=findOF();
    if(of2&&of2.parentNode){var nf2=mkFoot();of2.parentNode.replaceChild(nf2,of2);if(nf.parentNode)nf.parentNode.removeChild(nf);}
  },400);
}
}catch(e){}
});})();
(function(){function ready(f){if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',f)}else{f()}}
ready(function(){try{
var st=document.createElement('style');
/* Mobile menu scrolling. The Webflow nav is data-collapse="medium", so the
   overlay menu applies below 991px. Webflow ships .w-nav-overlay with
   overflow:hidden and no height cap, so the expanded dropdowns pushed the rest
   of the nav past the bottom of the screen with no way to reach it. The overlay
   is made the single scroll container: the inner .w-nav-menu and the injected
   dropdown lists are explicitly left unclipped so the scroll never gets trapped
   in a child. Height uses 100dvh, not 100vh, because mobile Safari's collapsing
   toolbar makes vh taller than the visible viewport. --hmc-nav-h is measured at
   runtime below and falls back to 76px if that measurement cannot run. */
st.textContent='.hmcdd{position:relative;display:inline-block}.hmcdd>.nav-dropdown-list{display:none;position:absolute;top:100%;left:0;width:250px;z-index:999;background:#fff;border:1px solid rgba(0,0,0,.18);border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,.04);padding:20px}.hmcdd:hover>.nav-dropdown-list{display:block}.hmcdd>.nav-dropdown-list .nav-dropdown-link-wrapper{align-items:flex-start}@media(max-width:991px){.hmcdd{display:block}.hmcdd>.nav-dropdown-list{display:block;position:static;width:auto;background:transparent;border:0;border-radius:0;box-shadow:none;padding:0 0 6px 14px}'
+'.w-nav-overlay{max-height:calc(100vh - var(--hmc-nav-h,76px));max-height:calc(100dvh - var(--hmc-nav-h,76px));overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain}'
+'.w-nav-overlay .w-nav-menu{max-height:none;overflow:visible;padding-bottom:32px}'
+'.hmcdd>.nav-dropdown-list,.hmcdd>.nav-dropdown-list .nav-dropdown-link-wrapper{max-height:none;overflow:visible}'
+'}';
document.head.appendChild(st);

/* Measure the real distance from the top of the viewport to the bottom of the
   nav bar, so the menu is capped to the space actually left below it. Uses
   bottom rather than height because an announcement bar can sit above the nav
   and push it down, and the overlay is positioned at the nav's bottom edge.
   Remeasured when the burger is tapped, since that is the moment the value has
   to be right, and on resize and orientation change. */
try{
  var setNavH=function(){
    var nav=document.querySelector('.w-nav');
    if(!nav)return;
    var r=nav.getBoundingClientRect();
    var h=Math.round(r.bottom>0?r.bottom:r.height);
    if(h>0&&h<400)document.documentElement.style.setProperty('--hmc-nav-h',h+'px');
  };
  setNavH();
  window.addEventListener('resize',setNavH);
  window.addEventListener('orientationchange',setNavH);
  document.addEventListener('click',function(e){
    if(e.target&&e.target.closest&&e.target.closest('.w-nav-button'))setTimeout(setNavH,0);
  },true);
}catch(e){}
function dd(label,items){
var links=document.querySelectorAll('a.nav-link-2');
Array.prototype.forEach.call(links,function(a){
if(a.textContent.trim()!==label)return;
if(a.parentNode.classList&&a.parentNode.classList.contains('hmcdd'))return;
var wrap=document.createElement('div');wrap.className='hmcdd';
a.parentNode.insertBefore(wrap,a);wrap.appendChild(a);
var list=document.createElement('nav');list.className='nav-dropdown-list primary-bg';
var inner=document.createElement('div');inner.className='nav-dropdown-link-wrapper';
items.forEach(function(it){var l=document.createElement('a');l.className='nav-dropdown-link-7 w-dropdown-link';l.href=it[1];l.textContent='\u00a0\u00a0\u00a0\u00a0 '+it[0];inner.appendChild(l)});
list.appendChild(inner);wrap.appendChild(list);
});}
/* Program nav items point at the standalone program sites, not the internal CMS
   pages. The old Street Medicine entry used the slug /programs/street-medical-outreach,
   which is not the published slug and returned a hard 404 on every HMC surface
   this script injects into. The real CMS slug is street-medicine-outreach, but
   the standalone site smo.healthmatters.clinic is the intended destination, so
   the slug is out of the loop entirely now. Lists are short on purpose. Anything
   trimmed is still published and still reachable through All Programs and All
   Initiatives, which are kept as the last item in each list. */
dd('Programs',[['Unstoppable','https://unstoppable.healthmatters.clinic'],['Street Medicine','https://smo.healthmatters.clinic'],['All Programs','/programs']]);
dd('Initiatives',[['2026 ASICS LA Marathon','/initiatives/2026-asics-la-marathon'],['Disaster Relief','https://relief.healthmatters.clinic'],['All Initiatives','/initiatives']]);

// New top-level nav item: "Partner With Us". Inserted after Events rather than
// wrapping an existing link, since no such link exists in the native nav yet.
// the only prior partner touchpoint on the site was a CTA button buried inside
// a promo popup widget, not a persistent nav item.
try{
  if(!document.querySelector('.hmcdd-partner')){
    var eventsLink=null;
    document.querySelectorAll('a.nav-link-2').forEach(function(a){
      if(a.textContent.trim()==='Events'&&!eventsLink)eventsLink=a;
    });
    if(eventsLink&&eventsLink.parentNode){
      var pLink=document.createElement('a');
      pLink.className='nav-link-2 w-nav-link';
      pLink.href='/partners';
      pLink.textContent='Partner With Us';
      eventsLink.parentNode.insertBefore(pLink,eventsLink.nextSibling);
      dd('Partner With Us',[
        ['Community Organizations','/partners'],
        ['Funders and Sponsors','/funders'],
        ['Employers and Corporate','/corporate-partnerships'],
        ['Our Impact','/impact'],
        ['Partner Portal Login','https://partner.healthmatters.clinic']
      ]);
      var pWrap=pLink.closest('.hmcdd');
      if(pWrap)pWrap.classList.add('hmcdd-partner');
    }
  }
}catch(e){}
}catch(e){}});})();

;(function(){
  /* The announcement bar is injected by the Webflow custom code block, so its
     button is not in this script's own markup. Give it the two label copies the
     roll-up needs. Only text nodes are wrapped, so the dot stays put. The tools
     popup CTA keeps its arrow and is deliberately left alone. */
  function ready(f){
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', f);
    else f();
  }
  function rollup(){
    document.querySelectorAll('.hmc-bar-btn').forEach(function(b){
      if (b.getAttribute('data-hmc-btn') === 'on') return;
      b.setAttribute('data-hmc-btn','on');
      var texts = [];
      for (var i=0;i<b.childNodes.length;i++){
        var n = b.childNodes[i];
        if (n.nodeType === 3 && n.nodeValue.trim()) texts.push(n);
      }
      texts.forEach(function(node){
        var t = node.nodeValue.trim();
        var clip = document.createElement('span'); clip.className='hmc-btn-clip';
        var a = document.createElement('span'); a.className='hmc-btn-label'; a.textContent=t;
        var c = document.createElement('span'); c.className='hmc-btn-label hmc-btn-label-alt';
        c.textContent=t; c.setAttribute('aria-hidden','true');
        clip.appendChild(a); clip.appendChild(c);
        node.parentNode.replaceChild(clip, node);
      });
    });
  }
  ready(function(){
    rollup();
    if (window.MutationObserver) {
      new MutationObserver(rollup).observe(document.documentElement, {childList:true, subtree:true});
    }
  });
})();
