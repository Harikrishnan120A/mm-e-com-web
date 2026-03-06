/* ================================================
   COMPONENTS.JS — Render functions for every section
   ================================================ */

function renderGrain(){
  return '<div class="grain"></div>';
}

function renderPreloader(){
  return '<div class="preloader" id="preloader">'
    +'<span class="preloader-mark">'+SITE.tagline+'</span>'
    +'<span class="preloader-name">'+SITE.name+'</span>'
    +'<div class="preloader-bar"></div>'
    +'</div>';
}

function renderScrollProgress(){
  return '<div class="scroll-progress" id="scrollProgress"></div>';
}

function renderCursors(){
  return '<div class="cursor-dot" id="cursorDot"></div>'
    +'<div class="cursor-ring" id="cursorRing"></div>';
}

function renderToastWrap(){
  return '<div class="toast-wrap" id="toastWrap"></div>';
}

function renderModal(){
  return '<div class="modal-overlay" id="modalOverlay">'
    +'<div class="modal" id="modal">'
      +'<button class="modal-close" id="modalClose" aria-label="Close">'+ICONS.close+'</button>'
      +'<div class="modal-image" id="modalImage"></div>'
      +'<div class="modal-content">'
        +'<h3 class="modal-name" id="modalName"></h3>'
        +'<p class="modal-price" id="modalPrice"></p>'
        +'<p class="modal-desc" id="modalDesc"></p>'
        +'<ul class="modal-specs" id="modalSpecs"></ul>'
        +'<button class="modal-add-btn" id="modalAdd">Add to Cart</button>'
      +'</div>'
    +'</div>'
    +'</div>';
}

function renderCartDrawer(){
  return '<div class="cart-overlay" id="cartOverlay"></div>'
    +'<div class="cart-drawer" id="cartDrawer">'
      +'<div class="cart-header">'
        +'<span class="cart-title">Cart</span>'
        +'<button class="cart-close" id="cartClose" aria-label="Close cart">'+ICONS.close+'</button>'
      +'</div>'
      +'<div class="cart-items" id="cartItems">'
        +'<p class="cart-empty" id="cartEmpty">Nothing here yet.<br>Good things take precision.</p>'
      +'</div>'
      +'<div class="cart-footer" id="cartFooter" style="display:none">'
        +'<div class="cart-total">'
          +'<span class="cart-total-label">Total</span>'
          +'<span class="cart-total-amount" id="cartTotal">&#8377;0</span>'
        +'</div>'
        +'<button class="cart-checkout-btn" id="checkoutBtn">Checkout</button>'
      +'</div>'
    +'</div>';
}

function renderMobileMenu(){
  var html='<div class="mobile-menu" id="mobileMenu">';
  MOBILE_LINKS.forEach(function(l){
    html+='<a href="'+l.href+'" class="mm-link">'+l.label+'</a>';
  });
  html+='</div>';
  return html;
}

function renderNavbar(){
  var linksHtml='';
  NAV_LINKS.forEach(function(l){
    linksHtml+='<li><a href="'+l.href+'">'+l.label+'</a></li>';
  });

  return '<nav class="navbar" id="navbar">'
    +'<div class="nav-logo-group">'
      +'<a href="#" class="nav-logo">'+SITE.name+'</a>'
      +'<span class="nav-abbr">'+SITE.abbr+'</span>'
    +'</div>'
    +'<div class="nav-right">'
      +'<ul class="nav-links">'+linksHtml+'</ul>'
      +'<button class="cart-btn" id="cartOpen" aria-label="Cart">'
        +ICONS.cart
        +'<span class="cart-count" id="cartCount">0</span>'
      +'</button>'
      +'<button class="mobile-btn" id="mobileBtn" aria-label="Menu">'
        +'<span></span><span></span><span></span>'
      +'</button>'
    +'</div>'
    +'</nav>';
}

function renderNavSpacer(){
  return '<div class="nav-spacer"></div>';
}

function renderHero(){
  var linesHtml='';
  HERO.headingLines.forEach(function(line){
    linesHtml+='<span class="line">'+line+'</span>';
  });

  return '<section class="hero" id="hero">'
    +'<div class="hero-text">'
      +'<p class="hero-eyebrow" id="heroEye">'+HERO.eyebrow+'</p>'
      +'<h1 class="hero-heading" id="heroHeading">'+linesHtml+'</h1>'
      +'<p class="hero-sub" id="heroSub">'+HERO.sub+'</p>'
      +'<div class="hero-cta-group" id="heroCtaGroup">'
        +'<a href="'+HERO.cta.href+'" class="hero-cta">'+HERO.cta.label+'</a>'
        +'<a href="'+HERO.ctaGhost.href+'" class="hero-cta-ghost">'+HERO.ctaGhost.label+'</a>'
      +'</div>'
    +'</div>'
    +'<div class="hero-image">'
      +'<div class="hero-visual">'
        +'<div class="hero-float hero-float-1" id="hf1"></div>'
        +'<div class="hero-float hero-float-2" id="hf2"></div>'
        +'<div class="hero-visual-inner" id="heroVisual">'+HERO.svg+'</div>'
      +'</div>'
    +'</div>'
    +'</section>';
}

function renderMarquee(){
  var spans='';
  // Duplicate for seamless loop
  var items=MARQUEE_ITEMS.concat(MARQUEE_ITEMS);
  items.forEach(function(t){
    spans+='<span>'+t+'</span>';
  });

  return '<div class="marquee" aria-hidden="true">'
    +'<div class="marquee-track" id="marqueeTrack">'+spans+'</div>'
    +'</div>';
}

function renderPhilosophy(){
  return '<section class="philosophy reveal" id="philosophy">'
    +'<div class="phil-inner">'
      +'<p class="phil-label">'+PHILOSOPHY.label+'</p>'
      +'<p class="phil-text">'+PHILOSOPHY.text+'</p>'
      +'<p class="phil-sub">'+PHILOSOPHY.sub+'</p>'
      +'<div class="phil-verse">'
        +PHILOSOPHY.verse
        +'<span class="phil-verse-ref">'+PHILOSOPHY.verseRef+'</span>'
      +'</div>'
    +'</div>'
    +'</section>';
}

function renderServices(){
  var cardsHtml='';
  SERVICES.forEach(function(s){
    cardsHtml+='<div class="service-card reveal">'
      +'<div class="service-icon">'+s.icon+'</div>'
      +'<h3 class="service-name">'+s.name+'</h3>'
      +'<p class="service-desc">'+s.desc+'</p>'
      +'</div>';
  });

  return '<section class="services reveal" id="work">'
    +'<div class="services-header">'
      +'<p class="section-label">What We Make</p>'
    +'</div>'
    +'<div class="services-grid">'+cardsHtml+'</div>'
    +'</section>';
}

function renderProducts(){
  return '<section class="products" id="objects">'
    +'<div class="section-header reveal">'
      +'<p class="section-label">Featured Objects</p>'
      +'<p class="section-count">'+PRODUCTS.length+' Objects</p>'
    +'</div>'
    +'<div class="products-grid" id="productsGrid"></div>'
    +'</section>';
}

function renderStats(){
  var items='';
  STATS.forEach(function(s){
    var attrs='data-count="'+s.count+'" data-dec="'+s.dec+'"';
    if(s.text) attrs+=' data-text="'+s.text+'"';
    var initial=s.text?'-':'0';
    items+='<div class="stat">'
      +'<p class="stat-num" '+attrs+'>'+initial+'</p>'
      +'<p class="stat-label">'+s.label+'</p>'
      +'</div>';
  });

  return '<div class="stats reveal">'+items+'</div>';
}

function renderProcess(){
  var specsHtml='';
  PROCESS.specs.forEach(function(s){
    specsHtml+='<li><span class="spec-k">'+s.k+'</span><span class="spec-v">'+s.v+'</span></li>';
  });

  return '<section class="process" id="process" style="border-top:none">'
    +'<div class="process-inner">'
      +'<div>'
        +'<p class="section-label reveal">Process &amp; Material</p>'
        +'<h2 class="process-heading reveal">'+PROCESS.heading+'</h2>'
      +'</div>'
      +'<div>'
        +'<p class="process-body reveal">'+PROCESS.body+'</p>'
        +'<ul class="process-specs reveal">'+specsHtml+'</ul>'
      +'</div>'
    +'</div>'
    +'</section>';
}

function renderNewsletter(){
  return '<section class="newsletter reveal" id="contact">'
    +'<p class="nl-label">Stay Updated</p>'
    +'<h2 class="nl-heading">New objects, quietly announced.</h2>'
    +'<form class="nl-form" id="nlForm">'
      +'<input type="email" class="nl-input" placeholder="Email address" required aria-label="Email address">'
      +'<button type="submit" class="nl-submit">Join</button>'
    +'</form>'
    +'<p class="nl-note">No noise. Only occasional releases.</p>'
    +'<p class="nl-thanks" id="nlThanks">Noted \u2014 we\u2019ll be in touch.</p>'
    +'</section>';
}

function renderFooter(){
  var navItems='';
  FOOTER_NAV.forEach(function(l){
    navItems+='<li><a href="'+l.href+'">'+l.label+'</a></li>';
  });

  var connectItems='';
  FOOTER_CONNECT.forEach(function(l){
    connectItems+='<li><a href="'+l.href+'" target="_blank" rel="noopener">'+l.label+'</a></li>';
  });

  var studioItems='';
  FOOTER_STUDIO.forEach(function(s){
    studioItems+='<li><a href="#">'+s+'</a></li>';
  });

  return '<footer class="footer">'
    +'<div class="footer-brand">'
      +'<p class="footer-logo">'+SITE.name+'</p>'
      +'<p class="footer-tagline">Clarity over complexity.<br>Intent over decoration.<br>Process over shortcuts.</p>'
    +'</div>'
    +'<div class="footer-col">'
      +'<p class="footer-col-title">Navigate</p>'
      +'<ul>'+navItems+'</ul>'
    +'</div>'
    +'<div class="footer-col">'
      +'<p class="footer-col-title">Connect</p>'
      +'<ul>'+connectItems+'</ul>'
    +'</div>'
    +'<div class="footer-col">'
      +'<p class="footer-col-title">Studio</p>'
      +'<ul>'+studioItems+'</ul>'
    +'</div>'
    +'<div class="footer-bottom">'
      +'<ul class="footer-social">'
        +'<li><a href="'+SITE.instagram+'" aria-label="Instagram" target="_blank" rel="noopener">'+ICONS.instagram+'</a></li>'
      +'</ul>'
      +'<p class="footer-copy">'+SITE.copyright+'</p>'
    +'</div>'
    +'</footer>';
}

function renderBackToTop(){
  return '<button class="back-top" id="backTop" aria-label="Back to top">'+ICONS.arrowUp+'</button>';
}

/* ===== MASTER BUILD ===== */
function buildPage(){
  document.body.innerHTML=
    renderGrain()
    +renderPreloader()
    +renderScrollProgress()
    +renderCursors()
    +renderToastWrap()
    +renderModal()
    +renderCartDrawer()
    +renderMobileMenu()
    +renderNavbar()
    +renderNavSpacer()
    +renderHero()
    +renderMarquee()
    +renderPhilosophy()
    +renderServices()
    +renderProducts()
    +renderStats()
    +renderProcess()
    +renderNewsletter()
    +renderFooter()
    +renderBackToTop();
}
