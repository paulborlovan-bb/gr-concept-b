// GRIFFNER Haus, gemeinsame Geometrie für Weg-Film und Gregor-Film. Lokale Koordinaten: Mitte x 0, Boden y 0, Front +z.
export function houseParts(T, o = [0, 0, 0]) {
  const V = (x, y, z) => new T.Vector3(x, y, z), QZ = a => new T.Quaternion().setFromAxisAngle(V(0, 0, 1), a);
  const DARK = new T.Color('#4A4843'), WOOD = new T.Color('#CFC3B3'); // DARK war #2E2E2C: auf Schwarz zu dunkel
  const G = 3.2, gy = G / 2, ey = G + 1.6, rk = x => ey + 6 - Math.abs(x), s2 = Math.SQRT1_2;
  const parts = [];
  const put = (c, k, x, y, z, sx, sy, sz, q) => parts.push({ c, k, p: V(x + o[0], y + o[1], z + o[2]), s: V(sx, sy, sz), q: q || new T.Quaternion() });
  for (let z = -15.8; z <= 5.81; z += .5) { put(WOOD, 'g', -5.7, gy, z, .3, G, .14); put(WOOD, 'g', 5.7, gy, z, .3, G, .14); }
  for (let x = -5.5; x <= 5.51; x += .5) put(WOOD, 'g', x, gy, -15.7, .14, G, .3);
  for (let x = -5.5; x <= 5.51; x += .5) if (x < -3.9 || x > 3.9) put(WOOD, 'g', x, gy, 5.9, .14, G, .3);
  for (let z = -15.5; z <= 9.51; z += 1) { put(DARK, 'u', -6.05, G + .8, z, .2, 1.6, .96); put(DARK, 'u', 6.05, G + .8, z, .2, 1.6, .96); }
  for (let x = -5.4; x <= 5.41; x += .6) if (x < -2.7 || x > 2.7) { const h = rk(x) - .15 - (G + .8); put(WOOD, 's', x, G + .8 + h / 2, 7.2, .14, h, .3); }
  put(DARK, 'b', -3 - s2 * .3, ey + 3 + s2 * .3, 9.85, 9, .5, .4, QZ(Math.PI / 4));
  put(DARK, 'b', 3 + s2 * .3, ey + 3 + s2 * .3, 9.85, 9, .5, .4, QZ(-Math.PI / 4));
  put(DARK, 'b', 0, G + .4, 9.8, 12.2, .8, .4);
  for (let i = 0; i < 43; i++) {
    const z = -15.7 + i * .6;
    put(DARK, 'r', -3 - s2 * .08, ey + 3 + s2 * .08, z, 8.9, .12, .52, QZ(Math.PI / 4));
    put(DARK, 'r', 3 + s2 * .08, ey + 3 + s2 * .08, z, 8.9, .12, .52, QZ(-Math.PI / 4));
  }
  const at = (x, y, z) => V(x + o[0], y + o[1], z + o[2]);
  return {
    parts, WOOD, DARK, G, ey,
    body: { pos: at(0, G / 2, -4.9), size: V(11, G, 21.4) },
    upper: { pos: at(0, G, -16), depth: 23 },
    win: { pos: at(0, 6, 7.08), size: V(5, 4, .06) },
    light: at(0, 6.5, 9.5)
  };
}
// Flachdach-Entwurf für den Weg-Film: Holzsockel, auskragender dunkler Riegel, dünne Dachplatte.
export function houseFlat(T, o = [0, 0, 0]) {
  const V = (x, y, z) => new T.Vector3(x, y, z);
  const DARK = new T.Color('#4A4843'), WOOD = new T.Color('#CFC3B3'); // DARK war #2E2E2C: auf Schwarz zu dunkel
  const G = 3.2, U = 3, top = G + U;
  const parts = [];
  const put = (c, k, off, x, y, z, sx, sy, sz) => parts.push({ c, k, off: V(off[0], off[1], off[2]), p: V(x + o[0], y + o[1], z + o[2]), s: V(sx, sy, sz), q: new T.Quaternion() });
  for (let z = -4.8; z <= 4.81; z += .5) { put(WOOD, 'g', [-3, 0, 0], -7, G / 2, z, .3, G, .44); put(WOOD, 'g', [3, 0, 0], 7, G / 2, z, .3, G, .44); }
  for (let x = -6.75; x <= 6.76; x += .5) put(WOOD, 'g', [0, 0, -3], x, G / 2, -5, .44, G, .3);
  for (let x = -6.75; x <= 6.76; x += .5) if (x < -4.1 || x > 3.1) put(WOOD, 'g', [0, 0, 3], x, G / 2, 5, .44, G, .3);
  for (let z = -5.25; z <= 5.26; z += .5) { put(DARK, 'u', [-3, 1.5, 0], -4.05, G + U / 2, z, .12, U, .48); put(DARK, 'u', [3, 1.5, 0], 11.05, G + U / 2, z, .12, U, .48); }
  for (let x = -3.75; x <= 10.76; x += .5) { put(DARK, 'u', [0, 1.5, -3], x, G + U / 2, -5.55, .48, U, .12); if (x < 4.1 || x > 7.9) put(DARK, 'u', [0, 1.5, 3], x, G + U / 2, 5.55, .48, U, .12); }
  for (let x = 7.2; x <= 10.81; x += .4) put(WOOD, 's', [0, -1.5, 0], x, G - .05, 0, .36, .08, 10.9);
  for (let z = 5.6; z <= 8.41; z += .35) put(WOOD, 'b', [0, 0, 3], -2, .06, z, 10, .12, .3);
  for (let x = -4.3; x <= 11.31; x += .6) put(DARK, 'r', [0, 3, 0], x, top + .18, 0, .58, .36, 12.2);
  const at = (x, y, z) => V(x + o[0], y + o[1], z + o[2]);
  return {
    parts, WOOD, DARK, G, top,
    body: { pos: at(0, G / 2, 0), size: V(13.6, G, 9.6) },
    upper: { pos: at(3.5, G, 0), size: V(15, U, 11) },
    win: { pos: at(6, G + U / 2, 5.62), size: V(3.5, 2.8, .06) },
    light: at(6, G + U / 2, 8.5)
  };
}
export function upperGeometry(T, depth) {
  const sh = new T.Shape(); sh.moveTo(-6, 0); sh.lineTo(6, 0); sh.lineTo(6, 1.6); sh.lineTo(0, 7.6); sh.lineTo(-6, 1.6); sh.lineTo(-6, 0);
  return new T.ExtrudeGeometry(sh, { depth, bevelEnabled: false });
}
