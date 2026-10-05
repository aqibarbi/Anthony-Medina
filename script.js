/* Small, dependency-free enhancements. The page still reads fine without them. */
(() => {
  const root = document.documentElement;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

  /* 1. Theme toggle (initial theme is set by the inline script in <head>) */
  const toggle = $('.theme-toggle');
  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    toggle?.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  };
  applyTheme(root.dataset.theme || 'light');
  toggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch { /* storage blocked, ignore */ }
  });

  /* 2. Mark the current section in the toolbar */
  const links = $$('.nav a[href^="#"]').filter((a) => a.hash.length > 1);
  const byHash = new Map(links.map((a) => [a.hash, a]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return;
      links.forEach((a) => a.removeAttribute('aria-current'));
      byHash.get(`#${target.id}`)?.setAttribute('aria-current', 'true');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main > section[id]').forEach((s) => { if (byHash.has(`#${s.id}`)) spy.observe(s); });

  /* 3. Live size labels on frames, like a design tool */
  const sizer = new ResizeObserver((entries) => {
    entries.forEach(({ target, contentRect }) => {
      const { width, height } = contentRect;
      target.dataset.label = `${target.dataset.name}, ${Math.round(width)} × ${Math.round(height)}`;
    });
  });
  $$('.frame[data-name]').forEach((el) => sizer.observe(el));

  /* 4. Hero parallax: pointer position becomes two CSS variables */
  const hero = $('.hero');
  const stage = $('.stage');
  if (hero && stage && matchMedia('(hover: hover)').matches) {
    const clamp = (n) => Math.max(-1, Math.min(1, n));
    let frame;
    hero.addEventListener('pointermove', (e) => {
      if (reduceMotion.matches) return;
      const r = stage.getBoundingClientRect();
      const x = clamp(((e.clientX - r.left) / r.width - 0.5) * 2);
      const y = clamp(((e.clientY - r.top) / r.height - 0.5) * 2);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        stage.style.setProperty('--px', x.toFixed(3));
        stage.style.setProperty('--py', y.toFixed(3));
      });
    });
    hero.addEventListener('pointerleave', () => {
      stage.style.setProperty('--px', 0);
      stage.style.setProperty('--py', 0);
    });
  }
})();
