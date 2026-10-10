// Automatisch erzeugt aus U1Film.dc.html durch tools/export-films.py. Nicht von Hand bearbeiten.
const cl = x => Math.max(0, Math.min(1, x));
const seg = (t, a, b) => cl((t - a) / (b - a));
const eio = x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
const eo = x => 1 - Math.pow(1 - x, 3);
const lerp = (a, b, t) => a + (b - a) * t;
const CAM = [
  [0, [-52, 13, 27], [-36, 3, 0]],
  [.14, [-28, 11, 25], [-36, 3, 0]],
  [.24, [-12, 13, 26], [0, 0, 0]],
  [.34, [8, 15, 22], [0, 0, -2]],
  [.43, [14, 15, 42], [40, 8, -4]],
  [.5, [20, 13, 44], [42, 9, -4]],
  [.6, [0, 40, 76], [0, 3, 0]],
  [.74, [14, 24, 54], [26, 4, 0]],
  [.88, [20, 11, 34], [37, 4, 0]],
  [1, [23, 8.5, 29], [38, 4.5, 0]]
];
const crv = (K, t, j) => {
  let i = 0; while (i < K.length - 2 && t > K[i + 1][0]) i++;
  const u = cl((t - K[i][0]) / (K[i + 1][0] - K[i][0]));
  const P0 = K[Math.max(0, i - 1)][j], P1 = K[i][j], P2 = K[i + 1][j], P3 = K[Math.min(K.length - 1, i + 2)][j];
  return [0, 1, 2].map(c => .5 * (2 * P1[c] + (-P0[c] + P2[c]) * u + (2 * P0[c] - 5 * P1[c] + 4 * P2[c] - P3[c]) * u * u + (-P0[c] + 3 * P1[c] - 3 * P2[c] + P3[c]) * u * u * u));
};
const ZA = -36, ZB = 0, ZC = 36;

class Film {
  state = {};
  setState(o, cb) { this.state = { ...this.state, ...o }; if (cb) cb(); }
  t = 0;
  componentDidMount() { this.boot(); }
  componentWillUnmount() { this.stop && this.stop(); }

  async boot() {
    const T = this.T = await import('https://cdn.jsdelivr.net/npm/three@0.162.0/build/three.module.js');
    const FX = await import(new URL('site/griffner-film.js', document.baseURI).href);
    const HM = await import(new URL('site/griffner-house.js', document.baseURI).href);
    if (this.dead) return;
    const host = this.host = document.querySelector('[data-ustage]');
    if (!host) return;
    if (window.__ufilmStop) window.__ufilmStop();
    this.stop = window.__ufilmStop = () => { this.dead = true; cancelAnimationFrame(this.raf); if (this.ro) this.ro.disconnect(); if (this.r) { this.r.dispose(); this.r.domElement.remove(); } };
    host.querySelectorAll('canvas').forEach(c => c.remove());
    const V = (x, y, z) => new T.Vector3(x, y, z);

    const r = this.r = new T.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    r.setPixelRatio(Math.min(1.5, window.devicePixelRatio || 1));
    r.toneMapping = T.NoToneMapping;
    r.shadowMap.enabled = true; r.shadowMap.type = T.PCFSoftShadowMap;
    r.domElement.style.cssText = 'display:block;width:100%;height:100%';
    host.appendChild(r.domElement);

    const scene = this.scene = new T.Scene();
    scene.background = new T.Color('#000000');
    scene.fog = new T.Fog(0x000000, 60, 170);
    const cam = this.cam = new T.PerspectiveCamera(32, 16 / 9, .5, 600);

    this.hemi = new T.HemisphereLight(0x9aa6b4, 0x050505, .35); scene.add(this.hemi);
    const key = this.key = new T.DirectionalLight(0xe6ecf2, .3);
    key.position.set(10, 60, 40); key.target.position.set(ZC, 0, 0); key.castShadow = true; key.shadow.mapSize.set(2048, 2048);
    Object.assign(key.shadow.camera, { left: -70, right: 70, top: 40, bottom: -40, near: 1, far: 200 });
    key.shadow.bias = -0.0004; key.shadow.normalBias = .02; scene.add(key, key.target);
    this.spots = [ZA, ZB, ZC].map(x => {
      const s = new T.SpotLight(0xf2efe9, 0, 0, x === ZC ? .6 : .42, .75, 0);
      s.position.set(x - 4, 34, 16); s.target.position.set(x, 0, 0); s.castShadow = x !== ZA; s.shadow.mapSize.set(1024, 1024);
      scene.add(s, s.target); return s;
    });

    const ground = new T.Mesh(new T.PlaneGeometry(600, 400).rotateX(-Math.PI / 2), new T.MeshStandardMaterial({ color: '#141413', roughness: 1 }));
    ground.receiveShadow = true; scene.add(ground);

    const HP = this.HP = HM.houseFlat(T, [ZC, 0, 0]);

    const wf = [], L3 = (a, b) => wf.push(a[0], a[1], a[2], b[0], b[1], b[2]);
    const box3 = (cx, cy, cz, sx, sy, sz) => {
      const x0 = cx - sx / 2, x1 = cx + sx / 2, y0 = cy - sy / 2, y1 = cy + sy / 2, z0 = cz - sz / 2, z1 = cz + sz / 2;
      [[x0, z0, x1, z0], [x1, z0, x1, z1], [x1, z1, x0, z1], [x0, z1, x0, z0]].forEach(q => { L3([q[0], y0, q[1]], [q[2], y0, q[3]]); L3([q[0], y1, q[1]], [q[2], y1, q[3]]); L3([q[0], y0, q[1]], [q[0], y1, q[1]]); });
    };
    const flat = (x1, z1, x2, z2) => L3([x1, .04, z1], [x2, .04, z2]);
    const arc = (cx, cz, rr, a0, a1) => { const n = 12; for (let i = 0; i < n; i++) { const a = a0 + (a1 - a0) * i / n, b = a0 + (a1 - a0) * (i + 1) / n; flat(cx + rr * Math.cos(a), cz + rr * Math.sin(a), cx + rr * Math.cos(b), cz + rr * Math.sin(b)); } flat(cx, cz, cx + rr * Math.cos(a1), cz + rr * Math.sin(a1)); };
    flat(-7.2, -5.2, 7.2, -5.2); flat(7.2, -5.2, 7.2, 5.2); flat(7.2, 5.2, -7.2, 5.2); flat(-7.2, 5.2, -7.2, -5.2);
    flat(-1, -4.9, -1, 1.2); flat(-6.9, 1.2, -1, 1.2); arc(-1.15, 2.2, 1, Math.PI / 2, Math.PI); arc(-3.2, 1.35, .9, 0, Math.PI / 2);
    for (let k = 0; k < 8; k++) flat(3.6, -4.4 + k * .4, 6.4, -4.4 + k * .4);
    flat(-7.2, 8.4, 7.2, 8.4); flat(-7.45, 8.65, -6.95, 8.15); flat(6.95, 8.65, 7.45, 8.15);
    box3(0, 1.6, 0, 14, 3.2, 10); box3(3.5, 4.7, 0, 15, 3, 11); box3(3.5, 6.38, 0, 16.2, .36, 12.2);
    for (let x = -4; x <= 11; x += 2.5) L3([x, 3.2, -5.5], [x, 6.2, -5.5]);
    for (let x = -4; x <= 11; x += 2.5) L3([x, 3.2, 5.5], [x, 6.2, 5.5]);
    L3([4.25, 3.9, 5.5], [7.75, 3.9, 5.5]); L3([4.25, 6.7, 5.5], [7.75, 6.7, 5.5]);
    const wg = new T.BufferGeometry(); wg.setAttribute('position', new T.Float32BufferAttribute(wf, 3));
    this.wMat = new T.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 });
    this.wire = new T.LineSegments(wg, this.wMat); this.wireN = wf.length / 3; this.wire.position.x = ZA; scene.add(this.wire);

    const parts = HP.parts, N = parts.length;
    const order = parts.map((q, i) => i).sort((a, b) => 'gusbr'.indexOf(parts[a].k) - 'gusbr'.indexOf(parts[b].k) || a - b);
    const MAXW = 30; let cx = 0, cz = 0, rowD = 0;
    const lay = [];
    order.forEach(i => {
      const q = parts[i], s = q.s, dims = [s.x, s.y, s.z], mi = dims.indexOf(Math.min(...dims));
      let FQ = new T.Quaternion(), fw, fd;
      if (mi === 0) { FQ.setFromAxisAngle(V(0, 0, 1), Math.PI / 2); fw = s.y; fd = s.z; }
      else if (mi === 2) { FQ.setFromAxisAngle(V(1, 0, 0), Math.PI / 2); fw = s.x; fd = s.y; }
      else { fw = s.x; fd = s.z; }
      if (fw > fd) { const tq = new T.Quaternion().setFromAxisAngle(V(0, 1, 0), Math.PI / 2); FQ = tq.multiply(FQ); const t = fw; fw = fd; fd = t; }
      if (cx + fw > MAXW) { cx = 0; cz += rowD + .8; rowD = 0; }
      lay[i] = { x: cx + fw / 2, z: cz + fd / 2, y: Math.min(...dims) / 2 + .02, FQ };
      cx += fw + .12; rowD = Math.max(rowD, fd);
    });
    const depth = cz + rowD;
    this.P = parts.map((q, i) => {
      const l = lay[i], rank = order.indexOf(i);
      return { ...q, S: V(ZB - MAXW / 2 + l.x, l.y, -depth / 2 + l.z), SQ: l.FQ, st: .6 + (rank / N) * .2, h: 5 + ((i * 37) % 11) * .5 };
    });
    this.scanD = depth;
    this.wood = new T.MeshStandardMaterial({ color: 0xffffff, roughness: .65 });
    const box = new T.BoxGeometry(1, 1, 1);
    this.inst = new T.InstancedMesh(box, this.wood, N);
    this.inst.castShadow = true; this.inst.receiveShadow = true; this.inst.frustumCulled = false; scene.add(this.inst);
    this.P.forEach((q, i) => this.inst.setColorAt(i, q.c));
    this.scan = new T.Mesh(new T.BoxGeometry(.1, .02, depth + 2), new T.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .85 }));
    this.scan.position.set(ZB - MAXW / 2, .06, 0); scene.add(this.scan);

    const conc = new T.MeshStandardMaterial({ color: '#8C8C88', roughness: .95 });
    const slab = new T.Mesh(new T.BoxGeometry(14.4, .3, 10.4), conc); slab.position.set(ZC, .15, 0); slab.castShadow = slab.receiveShadow = true; scene.add(slab);
    const cm = new T.MeshStandardMaterial({ color: '#6A6A66', roughness: .8 });
    const crane = this.crane = new T.Group(); crane.position.set(ZC + 13, 0, -10); scene.add(crane);
    const mast = new T.Mesh(new T.BoxGeometry(.7, 19, .7), cm); mast.position.y = 9.5; mast.castShadow = true; crane.add(mast);
    const jib = this.jib = new T.Group(); jib.position.y = 19; crane.add(jib);
    const arm = new T.Mesh(new T.BoxGeometry(28, .55, .55), cm); arm.position.x = -11; arm.castShadow = true; jib.add(arm);
    const cw = new T.Mesh(new T.BoxGeometry(2.2, 1.6, 1.4), cm); cw.position.set(5.5, -.9, 0); jib.add(cw);
    const cg = new T.BufferGeometry().setFromPoints([V(0, 0, 0), V(0, -1, 0)]);
    this.cable = new T.Line(cg, new T.LineBasicMaterial({ color: 0x8c8c88 })); this.cable.position.x = -18; jib.add(this.cable);
    this.hook = new T.Mesh(new T.BoxGeometry(.5, .5, .5), cm); jib.add(this.hook);
    this.jib.rotation.y = .5;

    const dark = new T.MeshStandardMaterial({ color: 0x0b0b0b, roughness: .5, transparent: true, opacity: 0 });
    this.body = new T.Mesh(box, dark); this.body.position.copy(HP.body.pos); this.body.scale.copy(HP.body.size); scene.add(this.body);
    this.upper = new T.Mesh(box, dark); this.upper.position.set(HP.upper.pos.x, HP.upper.pos.y + HP.upper.size.y / 2, HP.upper.pos.z); this.upper.scale.copy(HP.upper.size); scene.add(this.upper);
    this.dark = dark;
    this.plate = new T.Mesh(box, new T.MeshStandardMaterial({ color: 0x000000, emissive: 0xffb200, emissiveIntensity: 1 }));
    this.plate.position.copy(HP.win.pos); scene.add(this.plate);
    this.warm = new T.PointLight(0xffb200, 0, 40, 1.4); this.warm.position.copy(HP.light); scene.add(this.warm);

    this.m4 = new T.Matrix4(); this.vp = V(0, 0, 0); this.q = new T.Quaternion();
    FX.upgrade(T, r, scene, { env: .14, rim: .9 });

    const fit = () => { const w = host.clientWidth || 1, h = host.clientHeight || 1; r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); this.last = -1; };
    this.ro = new ResizeObserver(fit); this.ro.observe(host); fit();
    window.__ufilm = { seek: p => { this.t = p; this.manual = true; this.last = -1; this.draw(p); }, auto: () => { this.manual = false; } };

    this.prev = performance.now();
    const loop = now => {
      if (this.dead) return;
      const dt = Math.min(.064, (now - this.prev) / 1000); this.prev = now;
      const pin = this.pin || (this.pin = host.closest('[data-merge]'));
      if (pin && !this.manual) {
        const rc = pin.getBoundingClientRect(), vh = innerHeight;
        if (rc.bottom < -50 || rc.top > vh + 50) { this.raf = requestAnimationFrame(loop); return; }
        const target = cl(-rc.top / Math.max(1, rc.height - vh));
        this.t += (target - this.t) * Math.min(1, dt * 5);
        if (Math.abs(target - this.t) < .0005) this.t = target;
      } else if (!pin && !this.manual) this.t = (this.t + dt / 26) % 1.06;
      const p = Math.min(1, this.t);
      if (p !== this.last) { this.last = p; this.draw(p); }
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  }

  draw(p) {
    const T = this.T, { P, m4, vp, q } = this;
    const zA = seg(p, 0, .06) * (1 - seg(p, .18, .26)), zB = seg(p, .16, .24) * (1 - seg(p, .36, .42)), zC = seg(p, .34, .42);
    const all = seg(p, .5, .6);
    this.spots[0].intensity = 2.6 * Math.max(zA, all * (1 - seg(p, .6, .7)));
    this.spots[1].intensity = 2.6 * Math.max(zB, all * (1 - seg(p, .74, .84)));
    this.spots[2].intensity = 2.6 * Math.max(zC, all);
    this.key.intensity = 1.6 * eio(seg(p, .78, .95));
    this.hemi.intensity = .35 + .25 * eio(seg(p, .78, .95));

    this.wire.geometry.setDrawRange(0, Math.floor(this.wireN * eio(seg(p, .01, .14)) / 2) * 2);
    const mv = eio(seg(p, .55, .68));
    this.wire.position.set(lerp(ZA, ZC, mv), Math.sin(Math.PI * mv) * 4, 0);
    this.wMat.opacity = .25 + .75 * (1 - eio(seg(p, .8, .9))) - .25 * seg(p, .88, .95);

    const sk = seg(p, .25, .36);
    this.scan.visible = sk > 0 && sk < 1;
    this.scan.position.x = lerp(-15, 15, sk);
    for (let i = 0; i < P.length; i++) {
      const o = P[i], u = eio(seg(p, o.st, o.st + .07)), arc = Math.sin(Math.PI * u);
      vp.copy(o.S).lerp(o.p, u); vp.y += arc * o.h;
      q.copy(o.SQ).slerp(o.q, u);
      const appear = eo(seg(p, .17 + (i / P.length) * .08, .2 + (i / P.length) * .08));
      m4.compose(vp, q, o.s.clone().multiplyScalar(Math.max(.0001, appear))); this.inst.setMatrixAt(i, m4);
    }
    this.inst.instanceMatrix.needsUpdate = true;

    this.jib.rotation.y = lerp(.5, -.35, eio(seg(p, .58, .72))) + Math.sin(seg(p, .62, .86) * Math.PI * 2) * .12;
    const hk = 4 + Math.sin(seg(p, .6, .84) * Math.PI * 3) * 3;
    this.hook.position.set(-18, -11 + hk, 0); this.cable.scale.y = 11 - hk;

    const d = eio(seg(p, .82, .92)); this.dark.opacity = d; this.body.visible = this.upper.visible = d > 0;
    const w = eo(seg(p, .9, .97)); this.plate.visible = w > 0; this.plate.scale.set(this.HP.win.size.x * w, this.HP.win.size.y * w, this.HP.win.size.z);
    this.warm.intensity = 30 * eio(seg(p, .93, 1));

    const cp = crv(CAM, p, 1), tp = crv(CAM, p, 2);
    this.cam.position.set(cp[0], cp[1], cp[2]);
    this.cam.lookAt(tp[0], tp[1], tp[2]);
    this.r.render(this.scene, this.cam);
  }

  renderVals() { return {}; }
}

export function mount() { const f = new Film(); f.componentDidMount(); return f; }
