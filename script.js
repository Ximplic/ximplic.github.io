/* Ximplic — minimal site interactions (reduced-motion aware) */
(function () {
  'use strict';

  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* footer year */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* mobile nav toggle */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') menu.classList.remove('open');
    });
  }

  /* nav dropdowns — click toggle (touch) + outside close, supports multiple */
  var dropdowns = [].slice.call(document.querySelectorAll('.nav-dd'));
  var closeAll = function (except) {
    dropdowns.forEach(function (d) {
      if (d === except) return;
      var m = d.querySelector('.nav-dd-menu');
      var b = d.querySelector('.nav-dd-btn');
      if (m) m.classList.remove('open');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  };
  dropdowns.forEach(function (d) {
    var btn = d.querySelector('.nav-dd-btn');
    var menu = d.querySelector('.nav-dd-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      closeAll(d);
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  if (dropdowns.length) {
    document.addEventListener('click', function (e) {
      dropdowns.forEach(function (d) {
        if (!d.contains(e.target)) {
          var m = d.querySelector('.nav-dd-menu');
          var b = d.querySelector('.nav-dd-btn');
          if (m) m.classList.remove('open');
          if (b) b.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  /* hero compute-array pulse (one decorative element, hero only) */
  var array = document.getElementById('array');
  if (array) {
    for (var i = 0; i < 64; i++) {
      var c = document.createElement('div');
      c.className = 'cell';
      array.appendChild(c);
    }
    var cells = array.querySelectorAll('.cell');
    function pulse() {
      cells.forEach(function (cell) {
        cell.classList.toggle('hot', Math.random() < 0.26);
      });
    }
    pulse();
    if (!reduce) setInterval(pulse, 1200);
  }

  /* contact form — async submit to Formspree with inline status */
  var form = document.getElementById('contactForm');
  if (form) {
    var statusEl = document.getElementById('formStatus');
    var sendBtn = document.getElementById('sendBtn');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (statusEl) { statusEl.style.color = ''; statusEl.textContent = 'Sending…'; }
      if (sendBtn) { sendBtn.disabled = true; }
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          if (statusEl) statusEl.textContent = 'Thanks — we’ll be in touch shortly.';
        } else {
          if (statusEl) { statusEl.style.color = '#0B1220'; statusEl.textContent = 'Something went wrong. Email info@ximplic.com instead.'; }
        }
      }).catch(function () {
        if (statusEl) { statusEl.style.color = '#0B1220'; statusEl.textContent = 'Network error. Email info@ximplic.com instead.'; }
      }).finally(function () {
        if (sendBtn) sendBtn.disabled = false;
      });
    });
  }

  /* accordion (single-open per .acc group) */
  document.querySelectorAll('.acc').forEach(function (group) {
    group.querySelectorAll('.acc-head').forEach(function (h) {
      h.addEventListener('click', function () {
        var row = h.parentElement;
        var open = row.classList.contains('open');
        group.querySelectorAll('.acc-row').forEach(function (r) { r.classList.remove('open'); });
        if (!open) row.classList.add('open');
      });
    });
  });

  /* faq (independent toggle) */
  document.querySelectorAll('.faq .faq-q').forEach(function (q) {
    q.addEventListener('click', function () { q.parentElement.classList.toggle('open'); });
  });

  /* duplicate marquee track for seamless loop */
  document.querySelectorAll('.marquee-track').forEach(function (t) {
    t.innerHTML += t.innerHTML;
  });

  /* subtle scroll reveal */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            var el = en.target;
            var sibs = [].slice.call(el.parentElement.children)
              .filter(function (n) { return n.classList.contains('reveal'); });
            var i = sibs.indexOf(el);
            if (i > 0) el.style.transitionDelay = Math.min(i, 6) * 0.07 + 's';
            el.classList.add('in');
            io.unobserve(el);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      reveals.forEach(function (el) { io.observe(el); });
    }
  }

  /* subnav scrollspy */
  var subnav = document.querySelector('.subnav');
  if (subnav) {
    var links = [].slice.call(subnav.querySelectorAll('a'));
    var targets = links
      .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
      .filter(Boolean);
    if (targets.length && 'IntersectionObserver' in window) {
      var setActive = function (id) {
        links.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      };
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
      }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
      targets.forEach(function (t) { spy.observe(t); });
    }
  }

  /* parallax backdrop — moves slower than content */
  var siteBg=document.querySelector('.site-bg');
  if(siteBg && !reduce){
    var bgTick=false;
    var moveBg=function(){ siteBg.style.transform='translate3d(0,'+(window.scrollY*0.14)+'px,0)'; bgTick=false; };
    window.addEventListener('scroll',function(){ if(!bgTick){requestAnimationFrame(moveBg);bgTick=true;} },{passive:true});
    moveBg();
  }


  /* product subnav: glassy when pinned */
  var subBar=document.querySelector('.subnav');
  if(subBar){
    var subTick=false;
    var chkStuck=function(){ subBar.classList.toggle('stuck', subBar.getBoundingClientRect().top<=80); subTick=false; };
    window.addEventListener('scroll',function(){ if(!subTick){requestAnimationFrame(chkStuck);subTick=true;} },{passive:true});
    chkStuck();
  }


  /* nav reacts to scroll */
  var navEl=document.querySelector('header.nav');
  if(navEl){
    var navTick=false;
    var chkNav=function(){ navEl.classList.toggle('scrolled', window.scrollY>56); navTick=false; };
    window.addEventListener('scroll',function(){ if(!navTick){requestAnimationFrame(chkNav);navTick=true;} },{passive:true});
    chkNav();
  }


  /* animated aurora backdrop (canvas) */
  var fx=document.querySelector('.bg-fx');
  if(fx && fx.getContext && !reduce){
    var ctx=fx.getContext('2d');
    var DPR=Math.min(window.devicePixelRatio||1,1.5), W=0, H=0;
    var sizeFx=function(){ W=fx.clientWidth; H=fx.clientHeight; fx.width=Math.max(1,W*DPR); fx.height=Math.max(1,H*DPR); ctx.setTransform(DPR,0,0,DPR,0,0); };
    sizeFx(); window.addEventListener('resize',sizeFx,{passive:true});
    var blobs=[
      {x:.80,y:.10,r:.46,c:'92,179,161',a:.11,sx:0.7,sy:0.5,p:0.0},
      {x:.18,y:.66,r:.52,c:'92,179,161',a:.07,sx:0.5,sy:0.8,p:2.1},
      {x:.52,y:1.04,r:.58,c:'74,150,150',a:.06,sx:0.6,sy:0.4,p:4.2}
    ];
    var last=0;
    var frame=function(ts){
      requestAnimationFrame(frame);
      if(document.hidden || ts-last<33) return; last=ts;
      var s=ts/1000;
      ctx.clearRect(0,0,W,H);
      ctx.globalCompositeOperation='lighter';
      for(var i=0;i<blobs.length;i++){
        var b=blobs[i];
        var cx=(b.x+Math.sin(s*0.05*b.sx+b.p)*0.07)*W;
        var cy=(b.y+Math.cos(s*0.05*b.sy+b.p)*0.07)*H;
        var rad=b.r*Math.max(W,H)*0.9;
        var g=ctx.createRadialGradient(cx,cy,0,cx,cy,rad);
        g.addColorStop(0,'rgba('+b.c+','+b.a+')');
        g.addColorStop(1,'rgba('+b.c+',0)');
        ctx.fillStyle=g; ctx.beginPath(); ctx.arc(cx,cy,rad,0,6.2832); ctx.fill();
      }
    };
    requestAnimationFrame(frame);
  }

})();
