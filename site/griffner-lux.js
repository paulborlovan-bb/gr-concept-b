/* griffner.com, Feinschliff-Ebene für alle Seiten. Keine Texte, kein Gelb.
   1. Feld: Das Logo-Feld als Haarlinie (5:4, horizontal geteilt) atmet in leeren Flächen und gleitet
      zwischen Ankern [data-amb]. Hilfslinien wie auf einem Plan. Farbe folgt dem Raum (Weiß auf Schwarz, Schwarz auf Weiß).
   2. Korn: feines, lebendiges Filmkorn über der ganzen Seite.
   3. Bilder [data-lux]: öffnen sich wie ein Vorhang von unten und bewegen sich beim Scrollen leicht im Rahmen.
   Mit reduzierter Bewegung: Feld steht still, kein Puls, kein Korn-Flimmern, Bilder ohne Vorhang und Parallaxe. */
(function () {
  if (window.__griffnerLux) return; window.__griffnerLux = 1;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const easeOut = x => 1 - Math.pow(1 - x, 3);

  /* ---------- Korn ----------
     overlay: reines Schwarz und Weiß bleiben unberührt, Korn liegt nur in Fotos und Mitteltönen. */
  function grain() {
    const n = 160, c = document.createElement('canvas'); c.width = c.height = n;
    const g = c.getContext('2d'), d = g.createImageData(n, n);
    for (let i = 0; i < d.data.length; i += 4) { const v = Math.random() * 255 | 0; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; }
    g.putImageData(d, 0, 0);
    const el = document.createElement('div');
    el.setAttribute('aria-hidden', 'true');
    el.style.cssText = `position:fixed;inset:-50%;z-index:3;pointer-events:none;opacity:.14;mix-blend-mode:overlay;background:url(${c.toDataURL()});background-size:${n}px ${n}px`;
    document.body.appendChild(el);
    if (!reduce) el.animate(
      [0, 1, 2, 3, 4, 5].map(i => ({ transform: `translate(${(i * 37) % 100 - 50}px,${(i * 61) % 100 - 50}px)` })),
      { duration: 700, iterations: Infinity, easing: 'steps(6)' });
  }

  /* ---------- Feld ---------- */
  function field() {
    const cv = document.createElement('canvas');
    cv.setAttribute('aria-hidden', 'true');
    cv.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:0;pointer-events:none';
    const ctx = cv.getContext('2d');
    let dpr = 1, W = 0, H = 0;
    const size = () => { dpr = Math.min(2, devicePixelRatio || 1); W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; };
    size(); addEventListener('resize', size);

    // Direkt über der Raumfläche [data-bgl], unter allen Inhalten. Die Seite baut ihre Module später auf, daher bei Bedarf neu einhängen.
    const mount = () => {
      const bgl = document.querySelector('[data-bgl]');
      if (bgl && cv.previousElementSibling !== bgl) bgl.after(cv);
    };
    mount();

    const cur = { x: 0, y: 0, w: 0, a: 0 };
    let last = performance.now(), t0 = last;

    const inkOf = () => {
      const bgl = document.querySelector('[data-bgl]');
      const m = bgl && getComputedStyle(bgl).backgroundColor.match(/[\d.]+/g);
      if (!m) return { rgb: '255,255,255', base: .2 };
      const L = (m[0] * .2126 + m[1] * .7152 + m[2] * .0722) / 255;
      return L > .5 ? { rgb: '0,0,0', base: .2 } : { rgb: '255,255,255', base: .26 };
    };

    // Ein Weg statt Einzelauftritte: alle Anker der Seite bilden eine Route von oben nach unten.
    // Die Scrollposition bestimmt, wo das Feld auf dieser Route ist. Es verweilt an jedem Anker
    // und gleitet dazwischen weiter, ohne zu verschwinden.
    const anchors = () => {
      const out = [];
      document.querySelectorAll('[data-amb]').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.width < 40 || r.height < 30) return;
        out.push({ x: r.left + r.width / 2, y: r.top + r.height / 2, w: Math.min(r.width, r.height * 1.25) * .72 });
      });
      return out.sort((p, q) => p.y - q.y);
    };
    const smooth = (a, b, x) => { const u = Math.max(0, Math.min(1, (x - a) / (b - a))); return u * u * (3 - 2 * u); };
    const pick = () => {
      const L = anchors(), yc = H / 2;
      if (!L.length) return null;
      let i = -1; L.forEach((p, k) => { if (p.y <= yc) i = k; });
      if (i === -1) { const B = L[0]; return { ...B, a: smooth(H * 1.1, H * .55, B.y), next: null, s: 0 }; }          // vor der ersten Station
      if (i === L.length - 1) { const A = L[i]; return { ...A, a: smooth(-H * .6, H * .45, A.y), next: null, s: 1 }; } // nach der letzten Station
      const A = L[i], B = L[i + 1], D = B.y - A.y, t = (yc - A.y) / D;
      const s = smooth(.14, .86, t), f = Math.sin(Math.PI * s);
      const y = Math.max(H * .14, Math.min(H * .86, yc + (s - t) * D));
      return { x: A.x + (B.x - A.x) * s, y, w: (A.w + (B.w - A.w) * s) * (1 - .4 * f), a: 1 - .72 * f, next: B, s }; // unterwegs leise, an den Stationen voll
    };

    const line = (x0, y0, x1, y1) => { ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke(); };
    const rect = (cx, cy, w, h) => ctx.strokeRect(Math.round(cx - w / 2) + .5, Math.round(cy - h / 2) + .5, Math.round(w), Math.round(h));

    const frame = now => {
      requestAnimationFrame(frame);
      mount();
      const dt = Math.min(.05, (now - last) / 1000); last = now;
      const t = (now - t0) / 1000;
      const tg = pick();
      const k = reduce ? 1 : 1 - Math.exp(-dt * 7);
      if (tg) {
        if (cur.a < .02) { cur.x = tg.x; cur.y = tg.y; cur.w = tg.w; }
        cur.x += (tg.x - cur.x) * k; cur.y += (tg.y - cur.y) * k; cur.w += (tg.w - cur.w) * k;
      }
      cur.a += ((tg ? tg.a : 0) - cur.a) * k;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      if (cur.a < .01 || document.documentElement.dataset.menu === 'open') return;

      const ink = inkOf(), A = cur.a * ink.base;
      const breathe = reduce ? 1 : 1 + .014 * Math.sin(t * Math.PI * 2 / 7);
      const w = cur.w * breathe, h = w * .8, cx = cur.x, cy = cur.y;
      const x0 = cx - w / 2, x1 = cx + w / 2, y0 = cy - h / 2, y1 = cy + h / 2, ov = Math.max(10, w * .07);
      ctx.lineWidth = 1;
      const s = a => { ctx.strokeStyle = `rgba(${ink.rgb},${a})`; };

      // Hilfslinien wie Achsen auf einem Plan: laufen vom Feld aus und blenden aus, bevor sie Inhalte kreuzen
      const guide = (ax, ay, bx, by, a) => {
        const g = ctx.createLinearGradient(ax, ay, bx, by);
        g.addColorStop(0, `rgba(${ink.rgb},${a})`); g.addColorStop(1, `rgba(${ink.rgb},0)`);
        ctx.strokeStyle = g; line(ax, ay, bx, by);
      };
      const gy = Math.round(cy) + .5, gx0 = Math.round(x0) + .5, gx1 = Math.round(x1) + .5, reachX = w * 1.3, reachY = h * 1.4;
      guide(x0, gy, x0 - reachX, gy, A * .45); guide(x1, gy, x1 + reachX, gy, A * .45);
      guide(gx0, y0, gx0, y0 - reachY, A * .35); guide(gx0, y1, gx0, y1 + reachY, A * .35);
      guide(gx1, y0, gx1, y0 - reachY, A * .35); guide(gx1, y1, gx1, y1 + reachY, A * .35);

      // Untere Hälfte leicht gefüllt: Echo des Connectors (oben 50 %, unten voll)
      ctx.fillStyle = `rgba(${ink.rgb},${A * .16})`; ctx.fillRect(x0, cy, w, h / 2);
      ctx.fillStyle = `rgba(${ink.rgb},${A * .06})`; ctx.fillRect(x0, y0, w, h / 2);

      // Feld mit Überständen an den Ecken, wie skizziert
      s(A); rect(cx, cy, w, h);
      line(x0 - ov, Math.round(y0) + .5, x0, Math.round(y0) + .5); line(x1, Math.round(y0) + .5, x1 + ov, Math.round(y0) + .5);
      line(x0 - ov, Math.round(y1) + .5, x0, Math.round(y1) + .5); line(x1, Math.round(y1) + .5, x1 + ov, Math.round(y1) + .5);
      line(Math.round(x0) + .5, y0 - ov, Math.round(x0) + .5, y0); line(Math.round(x1) + .5, y0 - ov, Math.round(x1) + .5, y0);
      line(Math.round(x0) + .5, y1, Math.round(x0) + .5, y1 + ov); line(Math.round(x1) + .5, y1, Math.round(x1) + .5, y1 + ov);
      s(A * .8); line(x0, Math.round(cy) + .5, x1, Math.round(cy) + .5);

      // Puls: ein Feld öffnet sich ruhig nach außen und verklingt (ein Takt, kein Flackern)
      if (!reduce) {
        const ph = (t / 5.6) % 1, sc = 1 + .24 * easeOut(ph);
        s(A * .75 * (1 - ph) * (1 - ph)); rect(cx, cy, w * sc, h * sc);
      }

      // Route: gestrichelte Linie zur nächsten Station und ein Fadenkreuz dort, sobald sie im Bild ist
      const nx = tg && tg.next;
      if (nx && nx.y < H * 1.05 && tg.s < .98) {
        const ra = A * .5 * Math.min(1, (H * 1.05 - nx.y) / (H * .4));
        ctx.setLineDash([2, 6]); s(ra); line(cx, cy, nx.x, nx.y); ctx.setLineDash([]);
        const m = 7; s(ra * 1.4); line(nx.x - m, Math.round(nx.y) + .5, nx.x + m, Math.round(nx.y) + .5); line(Math.round(nx.x) + .5, nx.y - m, Math.round(nx.x) + .5, nx.y + m);
      }
    };
    requestAnimationFrame(frame);
  }

  /* ---------- Bilder ---------- */
  function images() {
    // Sichtbarkeit selbst prüfen: ein IntersectionObserver hält ein ganz abgeschnittenes Element für unsichtbar und löst nie aus.
    const seen = new WeakSet(), live = new Set();
    const scan = () => {
      document.querySelectorAll('[data-lux]').forEach(f => {
        if (seen.has(f)) return; seen.add(f);
        if (reduce) return;
        f.style.clipPath = 'inset(100% 0 0 0)';
        f.style.transition = (f.style.transition ? f.style.transition + ',' : '') + 'clip-path 1600ms cubic-bezier(0.22,1,0.36,1)';
        f.__luxOpen = false; live.add(f);
      });
    };
    const loop = () => {
      requestAnimationFrame(loop);
      scan();
      if (reduce) return;
      const H = innerHeight, W = innerWidth;
      live.forEach(f => {
        if (!f.isConnected) { live.delete(f); return; }
        const r = f.getBoundingClientRect();
        if (!f.__luxOpen && r.top < H * .9 && r.bottom > 0 && r.left < W && r.right > 0 && r.width > 0) {
          f.__luxOpen = true; f.style.clipPath = 'inset(0 0 0 0)';
        }
        // React kann das style-Attribut neu schreiben: Zustand dann wiederherstellen
        if (f.__luxOpen && f.style.clipPath !== 'inset(0px)' && f.style.clipPath !== 'inset(0 0 0 0)') f.style.clipPath = 'inset(0 0 0 0)';
        if (r.bottom < -100 || r.top > H + 100) return;
        const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - H / 2) / (H / 2 + r.height / 2)));
        const ty = (-p * r.height * .045).toFixed(1);
        f.querySelectorAll('img').forEach(img => { img.style.scale = '1.1'; img.style.translate = `0 ${ty}px`; });
      });
    };
    loop();
  }

  const go = () => { grain(); field(); images(); };
  if (document.body) go(); else addEventListener('DOMContentLoaded', go);
})();
