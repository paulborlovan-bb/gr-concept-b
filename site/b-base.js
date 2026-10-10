/* Version B, gemeinsamer Rahmen für Startseite und Unterseiten.
   Eine Quelle für: Leiste mit Menü, Vollbild-Menü (wie Version A), Footer, Links zwischen den B-Seiten,
   weiches Scrollen, Text- und Bild-Freilegung und das gelbe Feld (Connector) auf den Unterseiten.
   Copy kommt ausschließlich aus site/content.js. */
(function () {
  const C = window.GRIFFNER_CONTENT;
  const get = p => p.split('.').reduce((o, k) => (o == null ? o : o[k]), C);
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const TODAY = '2026-10-23'; // wie Version A: simuliertes Startdatum, in Produktion Serverdatum
  const HOME = 'GRIFFNER%20Startseite%20B.html';
  const isHome = /Startseite%20B\.html$|Startseite B\.html$|\/$|index\.html$/.test(location.pathname);

  /* ---------- Links: Seiten der Prototyp-Fassung zeigen in Version B auf die B-Seiten ---------- */
  const PAGES = {
    'GRIFFNER Startseite.dc.html': 'GRIFFNER Startseite B.html',
    'GRIFFNER Startseite v2.dc.html': 'GRIFFNER Startseite B.html',
    'GRIFFNER Kontakt.dc.html': 'GRIFFNER Kontakt B.html',
    'GRIFFNER News.dc.html': 'GRIFFNER News B.html',
    'GRIFFNER News Beitrag.dc.html': 'GRIFFNER News Beitrag B.html',
    'GRIFFNER Karriere.dc.html': 'GRIFFNER Karriere B.html',
    'GRIFFNER Job.dc.html': 'GRIFFNER Job B.html',
    'GRIFFNER Ueber GRIFFNER.dc.html': 'GRIFFNER Ueber GRIFFNER B.html'
  };
  const HASH = { '#positionierung': '#haltung' };   // Anker der Prototyp-Startseite, die in Version B anders heißen
  const bHref = h => {
    if (!h || /^(https?:|mailto:|tel:|javascript:)/.test(h)) return h;
    const m = h.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/); if (!m) return h;
    let [, path, q = '', hash = ''] = m;
    let file = decodeURIComponent(path);
    if (HASH[hash]) hash = HASH[hash];
    if (PAGES[file]) file = PAGES[file];
    if (!file && hash && !isHome && hash.length > 1 && !document.getElementById(hash.slice(1))) file = 'GRIFFNER Startseite B.html'; // Sprung auf die Startseite
    return (file ? file.replace(/ /g, '%20') : '') + q + hash;
  };
  const fixLinks = (root = document) => $$('a[href]', root).forEach(a => { const h = a.getAttribute('href'), n = bHref(h); if (n !== h) a.setAttribute('href', n); });

  /* ---------- Copy einsetzen ---------- */
  const fill = (root = document) => {
    $$('[data-c]', root).forEach(el => { el.textContent = get(el.dataset.c) ?? ''; if (el.hasAttribute('data-arrow')) el.innerHTML = `<span>${esc(el.textContent)}</span><span>→</span>`; });
    $$('[data-href]', root).forEach(el => el.setAttribute('href', bHref(get(el.dataset.href) || '#')));
    $$('img[data-src]', root).forEach(el => el.src = get(el.dataset.src));
  };

  /* ---------- Leiste links und Vollbild-Menü ---------- */
  const shell = () => {
    if (!$('#mnu')) document.body.insertAdjacentHTML('afterbegin', `
<aside class="rail" aria-label="Menü">
  <button class="rail-btn" id="mBtn" aria-expanded="false" aria-controls="mnu"><span class="glyph" aria-hidden="true"><i></i><i></i></span><span class="info vt">${esc(C.header.menu)}</span></button>
  <span class="rail-prog" aria-hidden="true"><i id="railProg"></i></span>
</aside>
<div class="mnu" id="mnu" role="dialog" aria-label="Menü" aria-hidden="true">
  <div class="mnu-main">
    <div>
      <nav class="mnu-nav" id="mnuNav" aria-label="Hauptmenü"></nav>
      <a class="mnu-season info" id="mnuSeason" href="#kapitel" data-mfoot></a>
    </div>
    <figure class="mnu-fig" aria-hidden="true"><div class="mnu-img" id="mnuImg"></div><figcaption class="info mnu-cap" id="mnuCap"></figcaption></figure>
  </div>
  <div class="mnu-foot info" data-mfoot><div class="links" id="mnuLinks"></div><span>${esc(C.footer.place)}</span><img src="assets/logo/griffner-claim-weiss.svg" alt="built different"></div>
</div>`);
    menu();
  };
  const menu = () => {
    const M = C.menu;
    const mItems = M.items.map(it => ({ ...it, soon: !!(it.opens && TODAY < it.opens) }));
    $('#mnuNav').innerHTML = mItems.map((it, i) => `<a class="mnu-it${it.soon ? ' soon' : ''}" href="${esc(it.soon ? '#' : bHref(it.href))}" data-i="${i}"${it.soon ? ' aria-disabled="true"' : ''}><span class="m"><span data-mi>${esc(it.label)}</span></span><span class="info note">${it.soon ? esc(M.comingPrefix + ' ' + it.date) : ''}</span></a>`).join('');
    $('#mnuImg').innerHTML = mItems.map(it => `<img src="${esc(it.img)}" alt="" loading="lazy">`).join('');
    $('#mnuLinks').innerHTML = M.links.map(([l, h]) => `<a href="${esc(bHref(h))}">${esc(l)}</a>`).join('');
    const S = C.season;
    if (S && TODAY <= S.hideAfter) {
      const op = S.chapters.filter(c => c.iso <= TODAY), curC = op[op.length - 1] || S.chapters[0], nx = S.chapters.find(c => c.iso > TODAY);
      $('#mnuSeason').innerHTML = `<span>${esc(S.bar.replace('{nr}', curC.nr))}</span><span>${nx ? esc(S.next.replace('{title}', nx.title).replace('{date}', nx.date)) : ''}</span><span>→</span>`;
      $('#mnuSeason').setAttribute('href', bHref('#kapitel'));
    } else $('#mnuSeason').remove();
    const body = document.body, btn = $('#mBtn'), mnu = $('#mnu'), mNav = $('#mnuNav'), mImgs = $$('#mnuImg img'), mCap = $('#mnuCap');
    const pick = i => { mImgs.forEach((im, k) => im.classList.toggle('on', k === i)); mCap.textContent = mItems[i].sub || ''; };
    pick(0);
    let mOpen = false;
    const setMenu = open => {
      if (open === mOpen) return; mOpen = open;
      btn.setAttribute('aria-expanded', open); mnu.setAttribute('aria-hidden', !open);
      const L = window.__lenis;
      if (open) {
        body.classList.add('menu-open'); document.documentElement.style.overflow = 'hidden'; if (L) L.stop();
        if (reduce) return;
        const E = 'cubic-bezier(.65,0,.15,1)', O = 'cubic-bezier(.22,1,.36,1)';
        mnu.animate([{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)' }], { duration: 900, easing: E });
        $$('[data-mi]', mnu).forEach((el, i) => el.animate([{ transform: 'translateY(110%)' }, { transform: 'translateY(0)' }], { duration: 1200, delay: 450 + i * 80, easing: O, fill: 'backwards' }));
        $('#mnuImg').animate([{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)' }], { duration: 1300, delay: 650, easing: E, fill: 'backwards' });
        $$('[data-mfoot], .mnu-cap', mnu).forEach(el => el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 900, delay: 1200, easing: O, fill: 'backwards' }));
      } else {
        document.documentElement.style.overflow = ''; if (L) L.start();   // sofort, damit ein Sprung aus dem Menü scrollen kann
        const fin = () => { if (!mOpen) { body.classList.remove('menu-open'); mNav.classList.remove('hov'); } };
        if (reduce) return fin();
        mnu.animate([{ clipPath: 'inset(0 0 0% 0)' }, { clipPath: 'inset(0 0 100% 0)' }], { duration: 700, easing: 'cubic-bezier(.65,0,.35,1)' }).onfinish = fin;
      }
    };
    $$('.mnu-it', mNav).forEach(a => {
      const i = +a.dataset.i, it = mItems[i], note = $('.note', a);
      const on = () => { mNav.classList.add('hov'); $$('.mnu-it', mNav).forEach(x => x.classList.toggle('on', x === a)); pick(i); if (it.soon) note.textContent = 'Öffnet am ' + it.date; };
      const off = () => { if (it.soon) note.textContent = M.comingPrefix + ' ' + it.date; };
      a.addEventListener('mouseenter', on); a.addEventListener('focus', on); a.addEventListener('mouseleave', off); a.addEventListener('blur', off);
      a.addEventListener('click', e => { if (it.soon) { e.preventDefault(); return; } setMenu(false); });
    });
    mNav.addEventListener('mouseleave', () => mNav.classList.remove('hov'));
    mnu.addEventListener('click', e => { const a = e.target.closest('a'); if (a && !a.closest('.mnu-it')) setMenu(false); });
    btn.addEventListener('click', () => setMenu(!mOpen));
    addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
    GB.setMenu = setMenu;
  };

  /* ---------- Footer ---------- */
  const LOGO_WM = 'M25.6175,943.7201c0,11.20975 3.53369,20.21351 10.65137,27.03844c7.15581,6.86148 17.16066,10.74236 30.87103,10.74236c4.96815,0 8.50697,-0.8061 12.3691,-1.96933l0,-42.46217h24.9939l0,57.77744l-1.226,0.90146c-6.02352,4.42902 -21.12992,9.8111 -36.9165,9.8111c-20.21738,0 -37.18365,-6.8534 -48.50981,-17.79528c-11.35724,-10.9719 -17.85059,-26.86115 -17.85059,-44.04402c0,-18.28634 7.01257,-35.0372 19.08935,-46.58802c12.04754,-11.52285 29.94264,-18.68108 51.01265,-18.68108c13.2843,0 26.20787,3.04911 33.95395,7.42282l1.53825,0.86855l0,25.04651l-4.45708,-2.28646c-7.71088,-3.95564 -19.01914,-7.46063 -30.09972,-7.46063c-14.73455,0 -25.71753,4.16415 -33.58926,11.64783c-7.83912,7.45268 -11.83064,17.42693 -11.83064,30.03047z M205.21355,966.00257c-3.38938,0.35155 -6.23481,0.58183 -10.71755,0.58183c-7.65244,0 -10.69508,-0.3876 -14.8635,-0.99759v37.47819h-25.3057l0,-123.055h46.717c15.87667,0.06529 28.81055,3.90787 37.29433,10.86786c8.5691,7.02999 13.32017,17.93298 13.32017,30.54854c0,9.38225 -2.39398,17.82267 -6.66033,24.32575c-4.27781,6.52054 -9.10355,10.24684 -15.53701,13.6009l27.13716,43.71195h-28.74392zM218.55349,937.7964c4.91627,-3.75645 6.8637,-8.60615 6.8637,-16.0582c0,-5.99161 -1.27187,-9.96813 -5.14359,-13.16941c-4.03263,-3.33434 -10.22514,-5.18466 -20.78881,-5.12389h-19.8523v39.26481c4.00979,0.61469 7.50415,0.90749 14.7076,0.90749c11.61829,0 19.15071,-1.95248 24.2134,-5.8208z M324.29349,880.01l0,123.055h-24.9939v-123.055z M402.85289,903.7567v22.2438l41.1576,0l0,23.7467l-41.1576,0v53.3178h-25.3057l0,-123.055l68.3341,0l0,23.7467z M516.80159,903.7567v22.2438l41.1576,0l0,23.7467l-41.1576,0v53.3178h-25.3057l0,-123.055l68.3341,0l0,23.7467z M715.09218,1003.6886h-7.41239l-77.24131,-73.84446l0,73.22086h-24.9939l0,-123.8345h7.08819l77.40961,72.97777l0,-72.19827l25.1498,0z M849.77558,1003.065h-82.0533l0,-123.055l80.4943,0l0,23.7467l-56.124,0v22.2438l53.3178,0v23.7467l-53.3178,0v29.5711l57.683,0z M948.61543,966.00257c-3.38938,0.35155 -6.23481,0.58183 -10.71755,0.58183c-7.65244,0 -10.69508,-0.3876 -14.8635,-0.99759v37.47819h-25.3057l0,-123.055h46.717c15.87667,0.06529 28.81055,3.90787 37.29433,10.86786c8.5691,7.02999 13.32017,17.93298 13.32017,30.54854c0,9.38225 -2.39398,17.82267 -6.66033,24.32575c-4.27781,6.52054 -9.10355,10.24684 -15.53701,13.6009l27.13716,43.71195h-28.74392zM961.95537,937.7964c4.91627,-3.75645 6.8637,-8.60615 6.8637,-16.0582c0,-5.99161 -1.27187,-9.96813 -5.14359,-13.16941c-4.03263,-3.33434 -10.22514,-5.18466 -20.78881,-5.12389h-19.8523v39.26481c4.00979,0.61469 7.50415,0.90749 14.7076,0.90749c11.61829,0 19.15071,-1.95248 24.2134,-5.8208z';
  const wmSvg = `<svg viewBox="0 878.45 1000 127.11" aria-hidden="true"><path fill="currentColor" d="${LOGO_WM}"/></svg>`;
  const footer = () => {
    let ft = $('#ft');
    if (!ft) { document.body.insertAdjacentHTML('beforeend', `<footer class="dark pad" id="ft" style="padding-bottom:0;position:relative" data-label="GRIFFNER"><span class="dockpt" data-dock="box" data-dock-hide="1" aria-hidden="true" style="left:50%;top:0;width:1px;height:1px"></span><div class="ft-cols" id="ftCols"></div><div class="ft-wm" aria-label="GRIFFNER">${wmSvg}</div><div class="ft-bot info"><span>${esc(C.footer.place)}</span><span id="ftLegal" style="display:flex;gap:24px"></span></div></footer>`); ft = $('#ft'); }
    $('#ftCols').innerHTML = C.footer.cols.map(c => `<div><p class="info">${esc(c.title)}</p><ul>${c.links.map(l => `<li><a href="${esc(bHref(l.href))}">${esc(l.label)}</a></li>`).join('')}</ul></div>`).join('')
      + `<div><p class="info">Griffen</p><ul>${C.footer.address.map(a => `<li>${esc(a)}</li>`).join('')}</ul></div>`;
    $('#ftLegal').innerHTML = C.footer.legal.map(l => `<a href="#">${esc(l)}</a>`).join('');
  };

  /* ---------- Header der Unterseiten: Logo (Feld + Wortmarke), Projekt starten ---------- */
  const header = () => {
    document.body.insertAdjacentHTML('afterbegin', `
<div class="conn" id="conn" aria-hidden="true"><span></span><span></span></div>
<header class="hdr" id="hdr">
  <span></span>
  <a class="logo" id="logo" href="${HOME}" aria-label="GRIFFNER Startseite"><span class="slot" id="logoSlot"></span><span class="wm" id="logoWm" style="opacity:1">${wmSvg}</span></a>
  <a class="side r info lnk" href="${bHref(HOME + '#kontakt')}">${esc(C.header.cta)}</a>
</header>`);
  };

  /* ---------- Weiches Scrollen, Fortschritt in der Leiste ---------- */
  const scroll = () => {
    gsap.registerPlugin(ScrollTrigger);
    let lenis = null;
    if (!reduce && window.Lenis) {
      lenis = new Lenis({ duration: 1.25, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
      window.__lenis = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(t => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
      document.addEventListener('click', e => { const a = e.target.closest('a[href^="#"]'); if (!a || a.getAttribute('href').length < 2) return; const t = document.querySelector(a.getAttribute('href')); if (!t) return; e.preventDefault(); lenis.scrollTo(t, { duration: 1.8, offset: -40 }); });
      if (location.hash) { const t = document.querySelector(location.hash); if (t) setTimeout(() => lenis.scrollTo(t, { immediate: true, offset: -40 }), 120); }
    }
    const prog = $('#railProg');
    if (prog) ScrollTrigger.create({ start: 0, end: 'max', onUpdate: s => { prog.style.height = (s.progress * 100).toFixed(2) + '%'; } });
    return lenis;
  };

  /* ---------- Freilegen: Textzeilen und Blöcke aus der Maske, Bilder als Vorhang ---------- */
  const reveal = (root = document) => {
    if (reduce) return;
    const ease = 'expo.out';
    $$('[data-rv]:not([data-rvd])', root).forEach(el => {
      el.dataset.rvd = 1;
      const ln = $$('.ln > span', el);
      if (ln.length) gsap.from(ln, { yPercent: 105, duration: 1.4, ease, stagger: .08, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
      else gsap.from(el, { y: 36, opacity: 0, clipPath: 'inset(0% 0% 100% 0%)', duration: 1.5, ease, clearProps: 'clipPath', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });
    $$('[data-lux]:not([data-rvd])', root).forEach(el => { el.dataset.rvd = 1; gsap.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease, scrollTrigger: { trigger: el, start: 'top 92%', once: true } }); });
  };

  /* ---------- Connector auf den Unterseiten: ruht im Logo, gleitet von Andockpunkt zu Andockpunkt ----------
     Andockpunkte wie auf der Startseite: data-dock="edge" (Bildkante, data-dock-x/-edge/-w), "box" (genaue Fläche), "rect" (Formularfläche, wird gelb). */
  const connector = () => {
    const conn = $('#conn'), cTop = conn.firstElementChild, slot = $('#logoSlot'), logoEl = $('#logo'), hdrEl = $('#hdr'), ctaEl = $('#hdr .r');
    const sm = (a, b, x) => { const u = Math.max(0, Math.min(1, (x - a) / (b - a))); return u * u * (3 - 2 * u); };
    const glideEase = t => 1 - Math.pow(1 - t, 4), GLIDE = reduce ? 0 : 1300;
    const dockRect = el => {
      const r = el.getBoundingClientRect(), t = el.dataset.dock;
      if (t === 'edge') {
        const share = parseFloat(el.dataset.dockW || .14), w = Math.min(Math.max(r.width * share, r.width / 12), r.width / 5, innerWidth / 5), h = w * .8;
        const cx = el.dataset.dockX === 'end' ? r.right - w / 2 : r.left + r.width * parseFloat(el.dataset.dockX || .72);
        return { x: cx - w / 2, y: (el.dataset.dockEdge === 'top' ? r.top : r.bottom) - h / 2, w, h, top: .5 };
      }
      return { x: r.left, y: r.top, w: r.width, h: r.height, top: el.dataset.dockSolid ? 1 : .5 };
    };
    const pickDock = () => {
      if (scrollY < innerHeight * .2) return null;            // oben ruht das Feld im Logo
      let act = null; const lim = innerHeight * .5;
      $$('[data-dock]').forEach(d => { if (d.offsetParent === null && d.dataset.dock !== 'box') return; const trg = d.dataset.dockTrigger ? document.getElementById(d.dataset.dockTrigger) : d.closest('section, footer'); if (trg && trg.getBoundingClientRect().top <= lim) act = d; });
      return act;
    };
    let cur = null, from = null, t0 = 0, mode = '';
    conn.style.opacity = '1';
    gsap.ticker.add(() => {
      const sv = scrollY / innerHeight;
      logoEl.style.transform = `translateY(${(-sm(.12, .5, sv) * 170).toFixed(1)}px)`;   // das Logo gleitet nach oben hinaus, das Feld bleibt
      let tgt, key, hide = false;
      const act = pickDock();
      if (!act) { const r = slot.getBoundingClientRect(); tgt = { x: r.left, y: r.top, w: r.width, h: r.height, top: 1 }; key = 'logo'; }
      else { tgt = dockRect(act); key = (act.dataset.dockId || (act.dataset.dockId = Math.random().toString(36).slice(2))) + ':' + (act.dataset.dockKey || ''); hide = !!act.dataset.dockHide; }
      const now = performance.now();
      if (key !== mode) { from = cur || tgt; t0 = now; mode = key; }
      const k = GLIDE ? glideEase(Math.min(1, (now - t0) / GLIDE)) : 1, L = (a, b) => a + (b - a) * k;
      cur = { x: L(from.x, tgt.x), y: L(from.y, tgt.y), w: L(from.w, tgt.w), h: L(from.h, tgt.h), top: L(from.top, tgt.top) };
      conn.style.transform = `translate3d(${cur.x.toFixed(2)}px,${cur.y.toFixed(2)}px,0)`;
      conn.style.width = cur.w.toFixed(2) + 'px'; conn.style.height = cur.h.toFixed(2) + 'px';
      cTop.style.opacity = cur.top.toFixed(3);
      conn.style.opacity = hide ? '0' : '1';
      $$('.stage').forEach(st => st.classList.toggle('filled', reduce || (act === st && k >= 1)));   // erst das Feld, dann die Fläche, dann das Formular
      const cta = ctaEl.getBoundingClientRect(), hit = q => q.right > cta.left && q.left < cta.right && q.bottom > cta.top && q.top < cta.bottom;
      hdrEl.classList.toggle('on-yellow', (!hide && hit({ left: cur.x, right: cur.x + cur.w, top: cur.y, bottom: cur.y + cur.h })) || $$('.stage.filled').some(st => hit(st.getBoundingClientRect())));
    });
  };

  /* ---------- Claim „built different“ als Pfad (nie als Text) ---------- */
  const claimPath = () => fetch('assets/logo/griffner-claim-maske.svg').then(r => r.text()).then(t => (t.match(/\sd="([^"]+)"/) || [])[1] || '').catch(() => '');

  /* ---------- Zeilen-Helfer ---------- */
  const lines = arr => arr.map(t => `<span class="ln"><span>${esc(t)}</span></span>`).join('');

  /* ---------- Unterseite starten ---------- */
  const page = (build, motion) => {
    document.body.classList.add('sub');
    header(); shell(); footer();
    fill(); if (build) build(); fixLinks();
    scroll(); connector(); reveal();
    if (motion && !reduce) motion();
    addEventListener('load', () => ScrollTrigger.refresh());
  };

  const GB = window.GB = { C, get, esc, $, $$, reduce, TODAY, HOME, bHref, fixLinks, fill, shell, menu, footer, header, scroll, reveal, connector, claimPath, lines, page, wmSvg };
})();
