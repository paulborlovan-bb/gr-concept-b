// GRIFFNER Film-Szenen, gemeinsame Bildqualität für Weg-Film, Gregor-Film und U1-Film.
// Ändert keine Bewegung und keine Farben der Räume, nur wie das Licht gerechnet wird.

// Einfacher Studioraum als Umgebungslicht: weiche Reflexionen statt flacher Flächen.
function studioEnvironment(T, r) {
  const room = new T.Scene();
  const box = new T.BoxGeometry(1, 1, 1);
  const shell = new T.Mesh(box, new T.MeshBasicMaterial({ color: 0x8a8a86, side: T.BackSide }));
  shell.scale.set(40, 20, 40); shell.position.y = 8; room.add(shell);
  const floor = new T.Mesh(new T.PlaneGeometry(40, 40), new T.MeshBasicMaterial({ color: 0x55554f }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -1.9; room.add(floor);   // Boden etwas dunkler als die Wände, wie ein Horizont
  const panel = (w, h, x, y, z, ry, rx, k) => {
    const m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshBasicMaterial({ color: new T.Color(k, k, k), side: T.DoubleSide }));
    m.position.set(x, y, z); m.rotation.set(rx || 0, ry || 0, 0); room.add(m);
  };
  panel(24, 24, 0, 17.9, 0, 0, Math.PI / 2, 2.2);   // Deckenlicht, groß und weich
  panel(14, 8, -19.9, 9, 0, Math.PI / 2, 0, 1.4);   // seitliches Fenster
  panel(10, 6, 0, 7, -19.9, 0, 0, .9);              // Gegenlicht
  const pm = new T.PMREMGenerator(r);
  const tex = pm.fromScene(room, .04).texture;
  pm.dispose();
  return tex;
}

// Weicher Lichtkegel am Boden: gibt dem Haus eine Bühne, damit dunkle Bauteile nicht im schwarzen Grund verschwinden.
function floorGlow(T, { x = 0, y = .002, z = 0, radius = 30, color = '#fff6e8', strength = .16 } = {}) {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d'), grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grd.addColorStop(0, `rgba(255,255,255,${strength})`);
  grd.addColorStop(.45, `rgba(255,255,255,${strength * .45})`);
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 256, 256);
  const tex = new T.CanvasTexture(c); tex.colorSpace = T.SRGBColorSpace;
  const m = new T.Mesh(new T.PlaneGeometry(radius * 2, radius * 2).rotateX(-Math.PI / 2),
    new T.MeshBasicMaterial({ map: tex, color, transparent: true, depthWrite: false, toneMapped: false }));
  m.position.set(x, y, z); m.renderOrder = -1;
  return m;
}

// Nach dem Aufbau der Szene, vor dem ersten Bild aufrufen.
// env: Stärke des Umgebungslichts (Tag ca. .35, Nacht ca. .12).
// rim: Gegenlicht von hinten oben, zeichnet die Kanten dunkler Bauteile gegen den schwarzen Grund.
// floor: Optionen für den Lichtkegel am Boden (siehe floorGlow) oder weglassen.
export function upgrade(T, r, scene, { env = .3, maxRatio = 2, rim = 0, rimPos = [50, 40, -70], floor = null } = {}) {
  if (rim) { const l = new T.DirectionalLight(0xf2f4f8, rim); l.position.set(...rimPos); scene.add(l); }
  if (floor) scene.add(floorGlow(T, floor));
  r.setPixelRatio(Math.min(maxRatio, window.devicePixelRatio || 1));
  // Neutral hält Grundfarben fast unverändert und rundet nur Spitzlichter ab, damit helle Flächen nicht weiß ausbrennen.
  r.toneMapping = T.NeutralToneMapping ?? T.ACESFilmicToneMapping;
  r.toneMappingExposure = 1;
  scene.environment = studioEnvironment(T, r);

  const maxTex = Math.min(4096, r.capabilities.maxTextureSize);
  const aniso = r.capabilities.getMaxAnisotropy();
  scene.traverse(o => {
    if (o.isLight && o.castShadow && o.shadow) {
      const s = Math.min(maxTex, o.shadow.mapSize.x * 2);
      o.shadow.mapSize.set(s, s);
    }
    const mats = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
    for (const m of mats) {
      // Linien, Scanner und Markengelb bleiben exakt wie gestaltet.
      const brandYellow = m.emissive && m.emissive.getHex() === 0xffb200;
      if (m.isLineBasicMaterial || m.isMeshBasicMaterial || brandYellow) m.toneMapped = false;
      if (m.isMeshStandardMaterial && !brandYellow) m.envMapIntensity = env;
      for (const k of ['map', 'roughnessMap', 'bumpMap']) if (m[k]) { m[k].anisotropy = aniso; m[k].needsUpdate = true; }
    }
  });
}

// Holzlattung als feine Textur: Lamellen mit Fuge, leichte Maserung, scharf auch im flachen Winkel.
export function slats(T, r, base, gap, len) {
  const W = 512, H = 32, P = 128, F = 16;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d');
  x.fillStyle = base; x.fillRect(0, 0, W, H);
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < W; i++) {
    const v = rnd();
    x.fillStyle = v > .5 ? `rgba(255,255,255,${(v - .5) * .09})` : `rgba(0,0,0,${(.5 - v) * .11})`;
    x.fillRect(i, 0, 1, H);
  }
  for (let i = 0; i < W / P; i++) {
    const x0 = i * P;
    x.fillStyle = gap; x.fillRect(x0, 0, F, H);
    x.fillStyle = 'rgba(0,0,0,.18)'; x.fillRect(x0 + F, 0, 3, H);        // Schattenkante an der Fuge
    x.fillStyle = 'rgba(255,255,255,.08)'; x.fillRect(x0 + P - 3, 0, 3, H); // Lichtkante der Lamelle
  }
  const tx = new T.CanvasTexture(c);
  tx.colorSpace = T.SRGBColorSpace; tx.wrapS = tx.wrapT = T.RepeatWrapping;
  tx.repeat.set(Math.max(1, len / 2), 1);
  tx.anisotropy = r.capabilities.getMaxAnisotropy();
  return tx;
}
