/* =====================================================================
   Flamme Bleue — glyphes des codes (1.1, 13/10/2026)
   Un petit dessin par type de code, à côté du code en lettres :
   - projet (3 valeurs) en arc : éclat (trois voisines), la valeur du milieu en haut de l'arc ;
     coin (deux alliées et leur ennemie commune), les alliées aux bouts, l'ennemie sous le sommet ;
   - radical (X.yz) : X en secteur de 72° orienté comme W sur la rosace, y et z en petits disques de part et d'autre ;
   - spécialiste (XY.z) : X et Y en secteurs de 60° posés à plat, pointe contre pointe, z en petit disque entre eux ;
   - généraliste (XY/z) : X et Y en secteurs de 60° pointés à gauche et à droite (nœud papillon couché),
     z en secteur pointillé plus court, centré dessous ;
   - style (X.y) : X en secteur de 60° au côté droit vertical, y en petit disque à droite ;
   - tempérament (X/y) : X en secteur de 60° au côté droit vertical, y en secteur miroir pointillé (absente).
   Les autres codes (valeur, motivation, trait, anti-valeur) gardent leurs pastilles rondes : glyphe() rend null.
   Usage : FLAMME_GLYPHES.glyphe(code, { W:"#FFFFFF", … }) → chaîne SVG, ou null.
   ===================================================================== */
(function (racine) {
  const ORDRE = ["W", "U", "B", "R", "G"];
  const DEFAUT = { W: "#FFFFFF", U: "#0055FF", B: "#111111", R: "#F00000", G: "#00D900" };
  const BORD = "#8892A0";
  const allie = (a, b) => { const d = Math.abs(ORDRE.indexOf(a) - ORDRE.indexOf(b)); return d === 1 || d === 4; };
  const f2 = n => n.toFixed(2);

  function glyphe(code, teintes) {
    const T = c => (teintes && teintes[c]) || DEFAUT[c];
    const trait = c => T(c).toUpperCase() === "#FFFFFF" ? BORD : T(c);       // contour lisible pour le blanc
    const rond = (c, x, y, r = 4.6) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${T(c)}" stroke="${BORD}" stroke-width="1"/>`;
    const creux = (c, x, y, r = 3.4) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${trait(c)}" stroke-width="1.3" stroke-dasharray="2 1.6"/>`;
    const secteur = (c, cx, cy, R, a1, a2, absent) => {
      const r = d => d * Math.PI / 180, p = d => [cx + R * Math.cos(r(d)), cy + R * Math.sin(r(d))];
      const [x1, y1] = p(a1), [x2, y2] = p(a2);
      const d = `M${cx} ${cy} L${f2(x1)} ${f2(y1)} A${R} ${R} 0 0 1 ${f2(x2)} ${f2(y2)} Z`;
      return absent ? `<path d="${d}" fill="none" stroke="${trait(c)}" stroke-width="1.3" stroke-dasharray="2 1.6" stroke-linejoin="round"/>`
                    : `<path d="${d}" fill="${T(c)}" stroke="${BORD}" stroke-width="1" stroke-linejoin="round"/>`;
    };
    const svg = (w, h, contenu) => `<svg class="g" width="${f2(w * 1.3)}" height="${f2(h * 1.3)}" viewBox="0 0 ${w} ${h}" aria-hidden="true">${contenu}</svg>`;
    let m;

    if (/^[WUBRG]{3}$/.test(code)) {                                     // projet
      const L = [...code], autres = x => L.filter(y => y !== x);
      const centre = L.find(x => autres(x).every(y => allie(x, y))), ennemi = L.find(x => autres(x).every(y => !allie(x, y)));
      const arc = `<path d="M2 15 Q17 -2 32 15" fill="none" stroke="currentColor" stroke-width="1.4" opacity=".3"/>`;
      if (centre) { const [g, d] = autres(centre); return svg(34, 20, arc + rond(g, 6, 11.1) + rond(centre, 17, 6.5) + rond(d, 28, 11.1)); }
      if (ennemi) { const [g, d] = autres(ennemi); return svg(34, 20, arc + rond(g, 6, 11.1) + rond(d, 28, 11.1) + rond(ennemi, 17, 12.4)); }
      return null;
    }
    if ((m = code.match(/^([WUBRG])\.([wubrg])([wubrg])$/))) {          // radical
      const [, x, y, z] = m;
      return svg(34, 20, secteur(x, 17, 17, 14, -126, -54) + rond(y.toUpperCase(), 4.5, 12, 3.4) + rond(z.toUpperCase(), 29.5, 12, 3.4));
    }
    if ((m = code.match(/^([WUBRG])([WUBRG])([./])([wubrg])$/))) {      // spécialiste, généraliste
      const [, x, y, s, z] = m, Z = z.toUpperCase();
      if (s === ".") return svg(34, 20, secteur(x, 17, 17.5, 14, 180, 240) + secteur(y, 17, 17.5, 14, -60, 0) + rond(Z, 17, 8.3, 3.4));
      // généraliste : nœud papillon couché (secteurs pointés à gauche et à droite), l'absente en secteur pointillé plus court dessous
      return svg(34, 20, secteur(x, 17, 8.5, 14, 150, 210) + secteur(y, 17, 8.5, 14, -30, 30) + secteur(Z, 17, 10.1, 10, 60, 120, true));
    }
    if ((m = code.match(/^([WUBRG])\.([wubrg])$/))) {                   // style
      const [, x, y] = m;
      return svg(29, 20, secteur(x, 15, 17.5, 14, -150, -90) + rond(y.toUpperCase(), 22.6, 10.5, 3.4));
    }
    if ((m = code.match(/^([WUBRG])\/([wubrg])$/))) {                   // tempérament : l'absente en secteur miroir pointillé
      const [, x, y] = m, ecart = 2.6;
      return svg(30.5, 20, secteur(x, 14, 17.5, 14, -150, -90) + secteur(y.toUpperCase(), 14 + ecart, 17.5, 14, -90, -30, true));
    }
    return null;
  }
  const api = { VERSION: { numero: "1.1", date: "2026-10-13 23:22" }, glyphe };
  if (typeof module !== "undefined" && module.exports) module.exports = api; else racine.FLAMME_GLYPHES = api;
})(typeof window !== "undefined" ? window : globalThis);
