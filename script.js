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
            en.target.classList.add('in');
            io.unobserve(en.target);
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
})();
