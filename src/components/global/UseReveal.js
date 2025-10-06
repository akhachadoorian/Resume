import { useEffect } from 'react';

export function useReveal(selector = '.reveal', options = {}) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll(selector).forEach(el => el.classList.add('is-inview'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-inview');
          io.unobserve(entry.target);
        }
      });
    }, { root: null, threshold: 0.12, rootMargin: '0px 0px -8% 0px', ...options });

    const els = document.querySelectorAll(selector);
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector, options]);
}
