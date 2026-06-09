export function initNav() {
  const btn = document.getElementById('burger');
  const menu = document.getElementById('mnav');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('mnav--open');
    const icon = btn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
    btn.setAttribute('aria-expanded', menu.classList.contains('mnav--open'));
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('mnav--open');
      const icon = btn.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-xmark');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Active link
  const secs = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.hdr__link');
  let ticking = false;

  function update() {
    let cur = '';
    secs.forEach(s => {
      if (scrollY >= s.offsetTop - 120) cur = s.id;
    });
    links.forEach(l => {
      l.classList.toggle('hdr__link--on', l.getAttribute('href') === '#' + cur);
    });
    ticking = false;
  }

  addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
}
