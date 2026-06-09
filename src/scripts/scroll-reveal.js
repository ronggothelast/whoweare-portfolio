/**
 * Scroll Reveal Module
 * Uses IntersectionObserver for performant viewport detection.
 * Respects prefers-reduced-motion.
 */

const SELECTOR = '.reveal';
const THRESHOLD = 0.1;
const ROOT_MARGIN = '0px 0px -40px 0px';

function init() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const elements = document.querySelectorAll(SELECTOR);

  if (prefersReduced) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: THRESHOLD, rootMargin: ROOT_MARGIN }
  );

  elements.forEach(el => observer.observe(el));
}

export { init };
