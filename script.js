(function() {
  const container = document.getElementById('stars');
  for (let i = 0; i < 120; i++) {
    const s = document.createElement('div');
    const size = Math.random() * 2 + 0.5;
    s.className = 'star';
    s.style.cssText = `width:${size}px;height:${size}px;top:${Math.random()*100}%;left:${Math.random()*100}%;--dur:${2+Math.random()*4}s;--delay:${Math.random()*5}s;--min-op:${0.05+Math.random()*0.1};--max-op:${0.4+Math.random()*0.5};`;
    container.appendChild(s);
  }
})();
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 30); }, { passive: true });
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  const y = window.scrollY + 90;
  sections.forEach(sec => { if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) { navAs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + sec.id)); } });
}, { passive: true });
const ham = document.getElementById('hamburger');
const mNav = document.getElementById('mobileNav');
ham.addEventListener('click', () => { ham.classList.toggle('open'); mNav.classList.toggle('open'); });
document.querySelectorAll('.m-link').forEach(a => { a.addEventListener('click', () => { ham.classList.remove('open'); mNav.classList.remove('open'); }); });
const ro = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } }); }, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
const bo = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.width = e.target.getAttribute('data-width') + '%'; bo.unobserve(e.target); } }); }, { threshold: 0.4 });
document.querySelectorAll('.skill-bar-fill').forEach(b => bo.observe(b));
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');
form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  setTimeout(() => { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message'; form.reset(); successMsg.style.display = 'block'; setTimeout(() => { successMsg.style.display = 'none'; }, 5000); }, 1500);
});
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
