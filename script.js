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

  /* scroll reveal — Motion (motion.dev), Framer-style spring + sibling stagger */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    var revealAll = function () {
      document.documentElement.classList.remove('anim');
      reveals.forEach(function (el) { el.classList.add('in'); });
    };
    if (reduce) {
      revealAll();
    } else {
      /* arm hidden initial state (CSS `.anim .reveal`), then animate in */
      document.documentElement.classList.add('anim');
      var fallback = setTimeout(revealAll, 1600); /* CDN blocked/slow → never leave content hidden */
      import('https://cdn.jsdelivr.net/npm/motion@11/+esm').then(function (motion) {
        clearTimeout(fallback);
        var animate = motion.animate, inView = motion.inView;

        /* scroll reveal: spring + sibling stagger (slow-in/out, run once) */
        reveals.forEach(function (el) {
          inView(el, function () {
            if (el.classList.contains('in')) return;
            var sibs = [].slice.call(el.parentElement.children)
              .filter(function (n) { return n.classList.contains('reveal'); });
            var i = Math.max(0, sibs.indexOf(el));
            el.classList.add('in');
            animate(el,
              { opacity: [0, 1], transform: ['translateY(24px)', 'translateY(0px)'] },
              { duration: 0.6, delay: Math.min(i, 6) * 0.06, type: 'spring', stiffness: 90, damping: 18, mass: 0.9 }
            );
          }, { margin: '0px 0px -8% 0px', amount: 0.12 });
        });

        /* gesture polish (Disney principles → tactile spring motion) */
        var spr = function (s, d) { return { type: 'spring', stiffness: s, damping: d }; };
        /* buttons — appeal (hover lift) + anticipation/squash (press) */
        document.querySelectorAll('.btn').forEach(function (b) {
          b.addEventListener('pointerenter', function () { animate(b, { scale: 1.04 }, spr(380, 16)); });
          b.addEventListener('pointerleave', function () { animate(b, { scale: 1 }, spr(380, 20)); });
          b.addEventListener('pointerdown', function () { animate(b, { scale: 0.95 }, { duration: 0.12 }); });
          b.addEventListener('pointerup', function () { animate(b, { scale: 1.04 }, spr(500, 14)); });
        });
        /* cards — appeal (subtle hover lift, secondary to the CSS color shift) */
        document.querySelectorAll('.pillar:not(.soon),.uc-card,.ic,.news-item,.jstep,.person').forEach(function (c) {
          c.addEventListener('pointerenter', function () { animate(c, { transform: 'translateY(-5px)' }, spr(210, 20)); });
          c.addEventListener('pointerleave', function () { animate(c, { transform: 'translateY(0px)' }, spr(210, 24)); });
        });
        /* hero chip — gentle continuous float (idle appeal) */
        var fig = document.querySelector('.hero-fig .fig-chip');
        if (fig) animate(fig, { transform: ['translateY(0px)', 'translateY(-10px)', 'translateY(0px)'] },
          { duration: 6, repeat: Infinity, ease: 'easeInOut' });
      }).catch(revealAll);
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


  /* animated backdrop (canvas): soft glow + flowing dotted particle waves */
  var fx=document.querySelector('.bg-fx');
  if(fx && fx.getContext && !reduce){
    var ctx=fx.getContext('2d');
    var DPR=Math.min(window.devicePixelRatio||1,1.5), W=0, H=0;
    var sizeFx=function(){ W=fx.clientWidth; H=fx.clientHeight; fx.width=Math.max(1,W*DPR); fx.height=Math.max(1,H*DPR); ctx.setTransform(DPR,0,0,DPR,0,0); };
    sizeFx(); window.addEventListener('resize',sizeFx,{passive:true});
    var LINES=5, last=0;
    var frame=function(ts){
      requestAnimationFrame(frame);
      if(document.hidden || ts-last<33) return; last=ts;
      var s=ts/1000;
      ctx.clearRect(0,0,W,H);
      /* one soft glow for depth */
      var gx=W*0.7, gy=H*0.18, gr=Math.max(W,H)*0.5;
      var g=ctx.createRadialGradient(gx,gy,0,gx,gy,gr);
      g.addColorStop(0,'rgba(43,232,165,.07)'); g.addColorStop(1,'rgba(43,232,165,0)');
      ctx.globalCompositeOperation='lighter'; ctx.fillStyle=g;
      ctx.beginPath(); ctx.arc(gx,gy,gr,0,6.2832); ctx.fill();
      /* flowing dotted waves, centered band, fading at edges */
      var step=Math.max(13, W/120), baseY=H*0.6;
      for(var l=0;l<LINES;l++){
        var amp=H*0.045*(1+l*0.18);
        var by=baseY+(l-(LINES-1)/2)*H*0.022;
        var freq=(1.1+l*0.18)/W*6.2832;
        var ph=s*0.22+l*0.7;
        for(var x=0;x<=W;x+=step){
          var y=by+Math.sin(x*freq+ph)*amp+Math.sin(x*freq*0.5-ph*0.7)*amp*0.45;
          var d=Math.abs(x-W*0.5)/(W*0.5);
          var a=(1-d)*(1-d)*0.55*(0.6+0.4*Math.sin(s*0.6+l));
          if(a<0.02) continue;
          ctx.beginPath(); ctx.arc(x,y,1.4,0,6.2832);
          ctx.fillStyle='rgba(43,232,165,'+a.toFixed(3)+')'; ctx.fill();
        }
      }
    };
    requestAnimationFrame(frame);
  }

})();
