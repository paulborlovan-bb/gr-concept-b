/* griffner.com, gemeinsame Laufzeit-Helfer für alle Module. Kein Styling, keine Texte. */
(function () {
  if (window.GW) return;
  const bez = (x1, y1, x2, y2) => {
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
    const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
    const sx = t => ((ax * t + bx) * t + cx) * t, sy = t => ((ay * t + by) * t + cy) * t, dx = t => (3 * ax * t + 2 * bx) * t + cx;
    return x => {
      if (x <= 0) return 0; if (x >= 1) return 1;
      let t = x;
      for (let i = 0; i < 6; i++) { const d = dx(t); if (Math.abs(d) < 1e-6) break; t -= (sx(t) - x) / d; }
      return sy(Math.min(1, Math.max(0, t)));
    };
  };
  const root = () => getComputedStyle(document.documentElement);
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const GW = {
    clamp,
    token: n => root().getPropertyValue(n).trim(),
    ms(n) { const v = GW.token(n); return v.endsWith('ms') ? parseFloat(v) : parseFloat(v) * 1000 || 0; },
    reduce: matchMedia('(prefers-reduced-motion: reduce)').matches,
    fine: matchMedia('(pointer: fine)').matches,
    seg: (p, a, b) => clamp((p - a) / (b - a)),
    E(p, a, b) { return GW.ease(GW.seg(p, a, b)); },
    win(p, a, b, f = .025) { return Math.min(GW.E(p, a, a + f), 1 - GW.E(p, b - f, b)); },
    lerp: (a, b, t) => a + (b - a) * t,
    hex(h) { h = h.trim(); if (h.startsWith('rgb')) return h.match(/[\d.]+/g).slice(0, 3).map(Number); const n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; },
    mix: (a, b, t) => [0, 1, 2].map(i => a[i] + (b[i] - a[i]) * t),
    css: c => `rgb(${c.map(v => Math.round(v)).join(',')})`,
    ink(c) { const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }; const L = .2126 * f(c[0]) + .7152 * f(c[1]) + .0722 * f(c[2]); return (1.05 / (L + .05)) > ((L + .05) / .05) ? '#FFFFFF' : '#000000'; },
    ready(fn) {
      const t = () => {
        if (window.gsap && window.ScrollTrigger && window.GRIFFNER_CONTENT) { if (!GW._reg) { gsap.registerPlugin(ScrollTrigger); GW._reg = 1; } fn(); }
        else setTimeout(t, 40);
      };
      t();
    },
    reveal(scope) {
      if (!scope || !window.gsap) return;
      if (!window.ScrollTrigger) return setTimeout(() => GW.reveal(scope), 60);
      if (!GW._reg) { gsap.registerPlugin(ScrollTrigger); GW._reg = 1; }
      scope.querySelectorAll('[data-reveal]:not([data-rv])').forEach(el => {
        el.setAttribute('data-rv', '1');
        if (GW.reduce) return;
        // Text wird zusätzlich aus einer Maske freigelegt (Bilder haben ihren eigenen Vorhang in griffner-lux.js)
        const mask = !el.querySelector('img') && !el.matches('img');
        gsap.fromTo(el, { opacity: 0, y: (parseFloat(GW.token('--rise-web')) || 24) * (mask ? 1.6 : 1), ...(mask ? { clipPath: 'inset(0% 0% 100% 0%)' } : {}) }, {
          opacity: 1, y: 0, ...(mask ? { clipPath: 'inset(0% 0% 0% 0%)', clearProps: 'clipPath' } : {}),
          duration: GW.ms('--dur-small') / 1000 * (mask ? 1.9 : 1.4), ease: GW.ease,
          delay: (parseFloat(el.dataset.reveal) || 0) / 1000,
          scrollTrigger: { trigger: el, start: 'top 86%', once: true }
        });
      });
    },
    /* Intro: Preloader und Hero teilen sich die Startfläche des Felds */
    introDone: false,
    fieldStart() { const vw = innerWidth, vh = innerHeight, w = Math.min(vw * .28, vh * .42), h = w * .8; return { x: (vw - w) / 2, y: vh / 2 - w * .06 - h / 2, w, h }; },
    loaderDone(detail) { GW.loaderFinished = true; dispatchEvent(new CustomEvent('griffner:loader', { detail })); },
    onLoader(fn) { if (GW.loaderFinished) fn(); else addEventListener('griffner:loader', fn, { once: true }); },
    finishIntro() { GW.introDone = true; dispatchEvent(new Event('griffner:intro')); },
    onIntro(fn) { if (GW.introDone) fn(); else addEventListener('griffner:intro', fn, { once: true }); },
    /* Kapitel-Logik nach simuliertem Datum (ISO) */
    today() { return document.documentElement.dataset.simDate || '2026-10-23'; },
    isOpen(iso) { return !iso || GW.today() >= iso; },
    fill: (s, o) => String(s).replace(/\{(\w+)\}/g, (_, k) => o[k] ?? '')
  };
  GW.ease = bez(...(GW.token('--ease').match(/[\d.]+/g) || [.22, 1, .36, 1]).map(Number));
  window.GW = GW;
})();
