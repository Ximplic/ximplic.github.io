// Lightweight interactions for the single-page site

document.addEventListener('DOMContentLoaded', () => {
  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // logo spin when visible
  const logo = document.querySelector('.logo');
  if(logo){
    const obsLogo = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting) logo.classList.add('spin');
        else logo.classList.remove('spin');
      });
    }, {threshold: 0.2});
    obsLogo.observe(logo);
  }

  // reveal-on-scroll
  const reveals = document.querySelectorAll('.reveal');
  const ro = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold: 0.12});
  reveals.forEach(r => ro.observe(r));

  // memory-grid demo
  const grid = document.getElementById('memoryGrid');
  if(grid){
    const cols = 8, rows = 4;
    for(let i=0;i<cols*rows;i++){
      const cell = document.createElement('div');
      cell.className = 'memory-cell';
      grid.appendChild(cell);
    }
    const cells = Array.from(grid.children);
    function pulsePattern(){
      const count = 6 + Math.floor(Math.random()*8);
      cells.forEach(c => c.classList.remove('on'));
      for(let i=0;i<count;i++){
        const idx = Math.floor(Math.random()*cells.length);
        const c = cells[idx];
        c.classList.add('on');
        setTimeout(()=> c.classList.remove('on'), 600 + Math.random()*900);
      }
    }
    const interval = setInterval(pulsePattern, 1100);
    window.addEventListener('beforeunload', () => clearInterval(interval));
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const a = btn.nextElementSibling;
      const open = a.style.display === 'block';
      // close all
      document.querySelectorAll('.faq-a').forEach(x => x.style.display = 'none');
      // toggle selected
      a.style.display = open ? 'none' : 'block';
    });
  });

  // Contact form submission (demo)
  const contactBtn = document.getElementById('contactBtn');
  if(contactBtn){
    contactBtn.addEventListener('click', () => {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const interest = document.getElementById('interest').value;
      if(!name || !email){
        contactBtn.textContent = 'Please add name & email';
        setTimeout(()=> contactBtn.textContent = 'Send request', 1600);
        return;
      }
      contactBtn.disabled = true;
      contactBtn.textContent = 'Sending…';
      // Replace this with real POST to your API or marketing tool.
      setTimeout(()=> {
        contactBtn.textContent = 'Sent ✓';
      }, 900);
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if(href.length > 1){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    });
  });
});