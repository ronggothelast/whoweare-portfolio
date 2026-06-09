/**
 * Navigation Module
 * - Mobile menu toggle
 * - Active nav link tracking on scroll
 * - Smooth scroll with offset for sticky header
 */

const HEADER_HEIGHT = 72;

function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('is-open');
    const icon = toggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
    toggle.setAttribute(
      'aria-expanded',
      menu.classList.contains('is-open')
    );
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      const icon = toggle.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-xmark');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initActiveLinkTracking() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  if (!sections.length || !navLinks.length) return;

  let ticking = false;

  function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - HEADER_HEIGHT - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const isActive = href === `#${current}`;
      link.classList.toggle('nav__link--active', isActive);
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateActiveLink);
      ticking = true;
    }
  }, { passive: true });
}

function init() {
  initMobileMenu();
  initActiveLinkTracking();
}

export { init };
