/* ================================================
   APP.JS — Build page & initialize all behavior
   ================================================ */
(function(){
  'use strict';

  /* ===== BUILD THE DOM ===== */
  buildPage();

  /* ===== UTILITIES ===== */
  function scrollTo(y,dur){
    dur=dur||800;var s=window.scrollY,d=y-s,t0=null;
    function ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
    function step(t){if(!t0)t0=t;var p=Math.min((t-t0)/dur,1);window.scrollTo(0,s+d*ease(p));if(p<1)requestAnimationFrame(step)}
    requestAnimationFrame(step);
  }

  /* ===== PRELOADER ===== */
  var preloader=document.getElementById('preloader');
  function dismissPreloader(){preloader.classList.add('done');setTimeout(initHero,200)}
  if(document.fonts&&document.fonts.ready){
    document.fonts.ready.then(function(){setTimeout(dismissPreloader,600)});
  }else{window.addEventListener('load',function(){setTimeout(dismissPreloader,600)})}

  /* ===== CURSOR ===== */
  var dotEl=document.getElementById('cursorDot'),ringEl=document.getElementById('cursorRing');
  var mx=-100,my=-100,dx=-100,dy=-100,rx=-100,ry=-100;
  var fine=window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  if(fine){
    document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY});
    (function loop(){
      dx+=(mx-dx)*.22;dy+=(my-dy)*.22;rx+=(mx-rx)*.1;ry+=(my-ry)*.1;
      dotEl.style.transform='translate('+dx+'px,'+dy+'px)';
      ringEl.style.transform='translate('+rx+'px,'+ry+'px)';
      requestAnimationFrame(loop);
    })();
    var hSel='a,button,.product-card,.service-card,input';
    document.addEventListener('mouseover',function(e){if(e.target.closest(hSel)){dotEl.classList.add('active');ringEl.classList.add('active')}});
    document.addEventListener('mouseout',function(e){if(e.target.closest(hSel)){dotEl.classList.remove('active');ringEl.classList.remove('active')}});
  }

  /* ===== NAVBAR ===== */
  var nav=document.getElementById('navbar'),lastSY=0,nt=false;
  window.addEventListener('scroll',function(){if(!nt){requestAnimationFrame(function(){
    var sy=window.scrollY;nav.classList.toggle('scrolled',sy>50);
    if(sy>300&&sy>lastSY+5)nav.classList.add('hidden');
    else if(sy<lastSY-5||sy<80)nav.classList.remove('hidden');
    lastSY=sy;nt=false});nt=true}});

  /* Anchor scroll */
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href^="#"]');
    if(a){var id=a.getAttribute('href');if(id==='#')return;
    var el=document.querySelector(id);if(el){e.preventDefault();
    scrollTo(el.getBoundingClientRect().top+window.scrollY-60,800);closeMM()}}});

  /* Mobile menu */
  var mmBtn=document.getElementById('mobileBtn'),mm=document.getElementById('mobileMenu'),mmOpen=false;
  function openMM(){mmOpen=true;mmBtn.classList.add('open');mm.classList.add('open');document.body.classList.add('locked')}
  function closeMM(){mmOpen=false;mmBtn.classList.remove('open');mm.classList.remove('open');document.body.classList.remove('locked')}
  mmBtn.addEventListener('click',function(){mmOpen?closeMM():openMM()});
  document.querySelectorAll('.mm-link').forEach(function(l){l.addEventListener('click',closeMM)});

  /* Scroll progress */
  var prog=document.getElementById('scrollProgress');
  window.addEventListener('scroll',function(){
    prog.style.width=(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100)+'%'});

  /* Back to top */
  var btt=document.getElementById('backTop');
  window.addEventListener('scroll',function(){btt.classList.toggle('show',window.scrollY>500)});
  btt.addEventListener('click',function(){scrollTo(0,700)});

  /* ===== HERO ===== */
  var heading=document.getElementById('heroHeading');
  var lines=heading.querySelectorAll('.line');
  heading.innerHTML='';
  lines.forEach(function(line){
    var le=document.createElement('span');le.className='line';
    line.textContent.trim().split(/\s+/).forEach(function(w){
      var wr=document.createElement('span');wr.className='word';
      var inn=document.createElement('span');inn.className='word-inner';
      inn.textContent=w;wr.appendChild(inn);le.appendChild(wr)});
    heading.appendChild(le)});

  function initHero(){
    document.getElementById('heroEye').classList.add('in');
    heading.querySelectorAll('.word-inner').forEach(function(w,i){
      w.style.transitionDelay=(.12+i*.1)+'s';
      requestAnimationFrame(function(){w.classList.add('in')})});
    document.getElementById('heroSub').classList.add('in');
    document.getElementById('heroCtaGroup').classList.add('in');
    document.getElementById('heroVisual').classList.add('in');
    document.getElementById('hf1').classList.add('in');
    document.getElementById('hf2').classList.add('in');
  }

  /* ===== BUILD GRID ===== */
  var grid=document.getElementById('productsGrid');
  PRODUCTS.forEach(function(p,i){
    var c=document.createElement('div');c.className='product-card';c.dataset.pid=p.id;
    c.style.setProperty('--i',i);
    c.innerHTML=
      '<div class="product-image" style="background:'+p.bg+'">'+
        '<div class="product-image-inner">'+(p.img?'<img src="'+p.img+'" alt="'+p.name+'">':p.svg)+'</div>'+
        '<span class="product-micro">'+p.material+' \u00b7 '+p.finish+'</span>'+
        '<span class="product-quick">View Details</span>'+
      '</div>'+
      '<div class="product-body">'+
        '<div class="product-top"><span class="product-name">'+p.name+'</span><span class="product-price">\u20b9'+p.price+'</span></div>'+
        '<p class="product-desc">'+p.tagline+'</p>'+
        '<button class="product-add" data-id="'+p.id+'">Add to Cart</button>'+
      '</div>';
    grid.appendChild(c)});

  /* ===== OBSERVERS ===== */
  var revObs=new IntersectionObserver(function(ents){
    ents.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');revObs.unobserve(en.target)}})},{threshold:.1});
  document.querySelectorAll('.reveal').forEach(function(el){revObs.observe(el)});

  var cardObs=new IntersectionObserver(function(ents){
    ents.forEach(function(en){if(en.isIntersecting){
      var i=parseInt(en.target.style.getPropertyValue('--i'))||0;
      setTimeout(function(){en.target.classList.add('in')},i*80);
      cardObs.unobserve(en.target)}})},{threshold:.06});
  document.querySelectorAll('.product-card').forEach(function(c){cardObs.observe(c)});

  /* Stat counter */
  var statObs=new IntersectionObserver(function(ents){
    ents.forEach(function(en){if(en.isIntersecting){
      en.target.querySelectorAll('.stat-num[data-count]').forEach(function(el){
        var txt=el.dataset.text;if(txt){el.textContent=txt;return}
        var end=parseFloat(el.dataset.count),dec=parseInt(el.dataset.dec)||0,dur=1400,t0=null;
        function step(t){if(!t0)t0=t;var p=Math.min((t-t0)/dur,1);
          var ease=1-Math.pow(1-p,3);el.textContent=(end*ease).toFixed(dec);
          if(p<1)requestAnimationFrame(step)}
        requestAnimationFrame(step)});
      statObs.unobserve(en.target)}})},{threshold:.3});
  document.querySelectorAll('.stats').forEach(function(s){statObs.observe(s)});

  /* ===== MODAL ===== */
  var mOvl=document.getElementById('modalOverlay'),mImg=document.getElementById('modalImage'),
      mNam=document.getElementById('modalName'),mPri=document.getElementById('modalPrice'),
      mDes=document.getElementById('modalDesc'),mSpc=document.getElementById('modalSpecs'),
      mAdd=document.getElementById('modalAdd'),mCls=document.getElementById('modalClose'),curProd=null;

  function openModal(p){
    curProd=p;
    if(p.img){mImg.innerHTML='<img src="'+p.img+'" alt="'+p.name+'" style="width:100%;height:100%;object-fit:cover">'}
    else{mImg.innerHTML='<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:'+p.bg+'">'+p.svg+'</div>';var sv=mImg.querySelector('svg');if(sv)sv.style.width='50%'}
    mNam.textContent=p.name;mPri.textContent='\u20b9'+p.price;mDes.textContent=p.desc;
    mSpc.innerHTML='';
    Object.keys(p.specs).forEach(function(k){
      var li=document.createElement('li');
      li.innerHTML='<span class="spec-k">'+k+'</span><span class="spec-v">'+p.specs[k]+'</span>';
      mSpc.appendChild(li)});
    mOvl.classList.add('open');document.body.classList.add('locked');
  }
  function closeModal(){mOvl.classList.remove('open');document.body.classList.remove('locked');curProd=null;mAdd.style.display=''}

  grid.addEventListener('click',function(e){
    if(e.target.closest('.product-add'))return;
    var card=e.target.closest('.product-card');
    if(card){var p=PRODUCTS.find(function(x){return x.id===card.dataset.pid});if(p)openModal(p)}});
  mCls.addEventListener('click',closeModal);
  mOvl.addEventListener('click',function(e){if(e.target===mOvl)closeModal()});
  mAdd.addEventListener('click',function(){if(curProd){addToCart(curProd);closeModal()}});

  /* ===== CART ===== */
  var cart=JSON.parse(localStorage.getItem('mm_cart')||'[]');
  var cntEl=document.getElementById('cartCount'),ciEl=document.getElementById('cartItems'),
      ceEl=document.getElementById('cartEmpty'),cfEl=document.getElementById('cartFooter'),
      ctEl=document.getElementById('cartTotal'),cdEl=document.getElementById('cartDrawer'),
      coEl=document.getElementById('cartOverlay'),twEl=document.getElementById('toastWrap');

  function save(){localStorage.setItem('mm_cart',JSON.stringify(cart))}

  function renderCart(){
    var tot=0,n=0;ciEl.querySelectorAll('.cart-item').forEach(function(el){el.remove()});
    if(!cart.length){ceEl.style.display='';cfEl.style.display='none'}
    else{ceEl.style.display='none';cfEl.style.display='';
      cart.forEach(function(it,i){
        tot+=it.price*it.qty;n+=it.qty;
        var pr=PRODUCTS.find(function(x){return x.id===it.id});
        var d=document.createElement('div');d.className='cart-item';
        d.innerHTML=
          '<div class="cart-item-thumb">'+(pr?(pr.img?'<img src="'+pr.img+'" alt="'+pr.name+'">':pr.svg):'')+'</div>'+
          '<div><p class="cart-item-name">'+it.name+'</p><p class="cart-item-price">\u20b9'+it.price+'</p></div>'+
          '<div class="cart-item-actions">'+
            '<div class="cart-item-qty"><button data-a="d" data-i="'+i+'">\u2212</button><span>'+it.qty+'</span><button data-a="u" data-i="'+i+'">+</button></div>'+
            '<button class="cart-item-remove" data-a="r" data-i="'+i+'">Remove</button></div>';
        ciEl.appendChild(d);
        var ts=d.querySelector('.cart-item-thumb svg');if(ts)ts.style.width='50%'});
      ctEl.textContent='\u20b9'+tot}
    cntEl.textContent=n;save()
  }

  function addToCart(p){
    var ex=cart.find(function(c){return c.id===p.id});
    if(ex)ex.qty++;else cart.push({name:p.name,price:p.price,id:p.id,qty:1});
    renderCart();toast(p.name+' added');
    cntEl.classList.remove('pulse');void cntEl.offsetWidth;cntEl.classList.add('pulse');
  }

  function openCart(){cdEl.classList.add('open');coEl.classList.add('open');document.body.classList.add('locked')}
  function closeCart(){cdEl.classList.remove('open');coEl.classList.remove('open');document.body.classList.remove('locked')}

  grid.addEventListener('click',function(e){
    var b=e.target.closest('.product-add');
    if(b){e.stopPropagation();var p=PRODUCTS.find(function(x){return x.id===b.dataset.id});if(p)addToCart(p)}});

  ciEl.addEventListener('click',function(e){
    var b=e.target.closest('[data-a]');if(!b)return;
    var i=parseInt(b.dataset.i),a=b.dataset.a;
    if(a==='u')cart[i].qty++;
    else if(a==='d'){cart[i].qty--;if(cart[i].qty<1)cart.splice(i,1)}
    else if(a==='r')cart.splice(i,1);
    renderCart()});

  document.getElementById('cartOpen').addEventListener('click',openCart);
  document.getElementById('cartClose').addEventListener('click',closeCart);
  coEl.addEventListener('click',closeCart);
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeCart();closeModal()}});
  document.getElementById('checkoutBtn').addEventListener('click',function(){toast('Checkout coming soon')});

  /* WhatsApp order */
  document.getElementById('waCheckoutBtn').addEventListener('click',function(){
    if(!cart.length)return;
    var msg='Hi, I\u2019d like to order from Minimalist Merchants:%0A%0A';
    var tot=0;
    cart.forEach(function(it,i){
      var line=(i+1)+'. '+it.name+' \u00d7 '+it.qty+' \u2014 \u20b9'+(it.price*it.qty);
      msg+=encodeURIComponent(line)+'%0A';
      tot+=it.price*it.qty;
    });
    msg+='%0ATotal: \u20b9'+tot+'%0A%0APlease confirm availability and shipping details.';
    window.open('https://wa.me/'+SITE.whatsapp+'?text='+msg,'_blank');
  });

  /* Policy links */
  document.addEventListener('click',function(e){
    var link=e.target.closest('.policy-link');
    if(link){e.preventDefault();var key=link.dataset.policy;
    if(POLICIES[key]){
      mNam.textContent=link.textContent;mPri.textContent='';
      mDes.textContent=POLICIES[key];mSpc.innerHTML='';
      mImg.innerHTML='<div style=\"width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--surface)\"><p style=\"font-size:2.4rem;opacity:.12\">'+SITE.name.charAt(0)+'</p></div>';
      mAdd.style.display='none';
      mOvl.classList.add('open');document.body.classList.add('locked')}}});


  renderCart();

  /* Toast */
  function toast(msg){
    var t=document.createElement('div');t.className='toast';
    t.innerHTML=ICONS.check+msg;
    twEl.appendChild(t);
    setTimeout(function(){t.classList.add('out');setTimeout(function(){t.remove()},250)},2400)}

  /* Newsletter */
  document.getElementById('nlForm').addEventListener('submit',function(e){
    e.preventDefault();this.style.display='none';
    document.getElementById('nlThanks').classList.add('show');
    toast('You\u2019re on the list')});
})();
