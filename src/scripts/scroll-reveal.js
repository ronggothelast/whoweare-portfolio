const SEL = '.rv';
const OBS_OPTS = { threshold: 0.1, rootMargin: '0px 0px -30px 0px' };

export function initReveal() {
  const els = document.querySelectorAll(SEL);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) { els.forEach(e => e.classList.add('rv--in')); return; }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('rv--in');
        obs.unobserve(e.target);
      }
    });
  }, OBS_OPTS);

  els.forEach(e => obs.observe(e));
}
