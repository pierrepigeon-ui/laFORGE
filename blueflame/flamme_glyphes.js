/* =====================================================================
   Flamme Bleue — glyphes des codes (2.0, 14/10/2026) — « système C »
   Un petit dessin par type de code, à côté du code en lettres :
   - valeur (W) : un disque plein ;
   - anti-valeur (/w) : un disque pointillé barré ;
   - absences composées (/wu, /wbg, du Détail) : une ligne de disques pointillés barrés ;
   - trait (WWu) : une gélule de la valeur, cerclée de sa couleur, avec le disque de la voisine
     du côté où elle se trouve sur la roue (WWg à gauche, WWu à droite) ;
   - motivation (WU) et projet (GWU) : la mini-rosace — chaque valeur à sa place sur la roue
     (W en haut, puis U, B, R, G dans le sens des aiguilles), cercle en filigrane ;
   - style (X.y) : X en secteur de 60° au côté droit vertical, y en petit disque à droite ;
   - tempérament (X/y) : X en secteur de 60° au côté droit vertical, y en disque pointillé barré ;
   - radical (X.yz) : X en secteur de 72° orienté comme W sur la rosace, y et z en petits disques ;
   - spécialiste (XY.z) : X et Y en secteurs de 60° posés à plat, légèrement écartés, z en petit disque entre eux ;
   - généraliste (XY/z) : X et Y en secteurs de 60° pointés à gauche et à droite (nœud papillon), z en disque pointillé barré dessous.
   Les trois glyphes de profil sont cadrés dans la même boîte.
   Usage : FLAMME_GLYPHES.glyphe(code, { W:"#FFFFFF", … }) → chaîne SVG, ou null si le code est inconnu.
   ===================================================================== */
(function (racine) {
  const ORDRE = ["W", "U", "B", "R", "G"];
  const DEFAUT = { W: "#FFFFFF", U: "#0055FF", B: "#111111", R: "#F00000", G: "#00D900" };
  const ANGLE = { W: -90, U: -18, B: 54, R: 126, G: 198 };        // place de chaque valeur sur la rosace
  const BORD = "#8892A0";
  const f2 = n => n.toFixed(2);
  // boîtes englobantes des glyphes de profil (x, y, largeur, hauteur), pour les cadrer pareil
  const BOITE = { radical: [1.1, 3, 31.8, 14], specialiste: [2, 4.9, 30, 12.6], generaliste: [3, 1.5, 28, 17.6] };

  function glyphe(code, teintes) {
    const T = c => (teintes && teintes[c]) || DEFAUT[c];
    const blanc = c => T(c).toUpperCase() === "#FFFFFF";
    const trait = c => blanc(c) ? BORD : T(c);                                  // contour lisible pour le blanc
    const rond = (c, x, y, r = 4.6) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${T(c)}" stroke="${BORD}" stroke-width="1"/>`;
    const barre = (c, x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${trait(c)}" stroke-width="1.3" stroke-dasharray="2 1.5"/>`
      + `<line x1="${f2(x - r * .72)}" y1="${f2(y + r * .72)}" x2="${f2(x + r * .72)}" y2="${f2(y - r * .72)}" stroke="${trait(c)}" stroke-width="1.2"/>`;
    const secteur = (c, cx, cy, R, a1, a2) => {
      const r = d => d * Math.PI / 180, p = d => [cx + R * Math.cos(r(d)), cy + R * Math.sin(r(d))];
      const [x1, y1] = p(a1), [x2, y2] = p(a2);
      return `<path d="M${f2(cx)} ${f2(cy)} L${f2(x1)} ${f2(y1)} A${R} ${R} 0 0 1 ${f2(x2)} ${f2(y2)} Z" fill="${T(c)}" stroke="${BORD}" stroke-width="1" stroke-linejoin="round"/>`;
    };
    const svg = (w, h, contenu, vb) => `<svg class="g" width="${f2(w * 1.3)}" height="${f2(h * 1.3)}" viewBox="${vb || `0 0 ${w} ${h}`}" aria-hidden="true">${contenu}</svg>`;
    const profil = (famille, contenu) => {                                         // même boîte (34 × 20) pour les trois familles
      const [x, y, w, h] = BOITE[famille], W = 34, H = 20, k = Math.min(W / (w + 1.4), H / (h + 1.4));
      const vw = W / k, vh = H / k;
      return svg(W, H, contenu, [x + w / 2 - vw / 2, y + h / 2 - vh / 2, vw, vh].map(f2).join(" "));
    };
    let m;

    if (/^[WUBRG]$/.test(code)) return svg(14, 20, rond(code, 7, 10, 5.4));                        // valeur
    if ((m = code.match(/^\/([wubrg]+)$/))) {                                                     // anti-valeur, absences composées
      const L = [...m[1].toUpperCase()];
      if (L.length === 1) return svg(16, 20, barre(L[0], 8, 10, 6));
      return svg(L.length * 11 + 2, 20, L.map((c, i) => barre(c, 6.5 + i * 11, 10, 4.6)).join(""));
    }
    if ((m = code.match(/^([WUBRG])\1([wubrg])$/))) {                                             // trait
      const X = m[1], V = m[2].toUpperCase(), gauche = ORDRE[(ORDRE.indexOf(X) + 4) % 5] === V, L = 26, r = 5, y0 = 5;
      return svg(30, 20, `<rect x="2" y="${y0}" width="${L}" height="${2 * r}" rx="${r}" fill="${T(X)}" stroke="${trait(X)}" stroke-width="1.6"/>`
        + `<circle cx="${gauche ? 2 + r : 2 + L - r}" cy="${y0 + r}" r="${r - .5}" fill="${T(V)}" stroke="${trait(X)}" stroke-width="1.4"/>`);
    }
    if (/^[WUBRG]{2,3}$/.test(code)) {                                                            // motivation, projet : mini-rosace
      let s = `<circle cx="10" cy="10" r="8.6" fill="none" stroke="currentColor" stroke-width=".8" opacity=".22"/>`;
      ORDRE.forEach(c => { if (code.includes(c)) s += secteur(c, 10, 10, 8.6, ANGLE[c] - 36, ANGLE[c] + 36); });
      return svg(20, 20, s);
    }
    if ((m = code.match(/^([WUBRG])\.([wubrg])([wubrg])$/))) {                                   // radical
      const [, x, y, z] = m;
      return profil("radical", secteur(x, 17, 17, 14, -126, -54) + rond(y.toUpperCase(), 4.5, 12, 3.4) + rond(z.toUpperCase(), 29.5, 12, 3.4));
    }
    if ((m = code.match(/^([WUBRG])([WUBRG])\.([wubrg])$/))) {                                   // spécialiste
      const [, x, y, z] = m;
      return profil("specialiste", secteur(x, 16, 17.5, 14, 180, 240) + secteur(y, 18, 17.5, 14, -60, 0) + rond(z.toUpperCase(), 17, 8.3, 3.4));
    }
    if ((m = code.match(/^([WUBRG])([WUBRG])\/([wubrg])$/))) {                                   // généraliste
      const [, x, y, z] = m;
      return profil("generaliste", secteur(x, 17, 8.5, 14, 150, 210) + secteur(y, 17, 8.5, 14, -30, 30) + barre(z.toUpperCase(), 17, 15.2, 3.9));
    }
    if ((m = code.match(/^([WUBRG])\.([wubrg])$/))) {                                            // style
      const [, x, y] = m;
      return svg(29, 20, secteur(x, 15, 17.5, 14, -150, -90) + rond(y.toUpperCase(), 22.6, 10.5, 3.4));
    }
    if ((m = code.match(/^([WUBRG])\/([wubrg])$/))) {                                            // tempérament
      const [, x, y] = m;
      return svg(29, 20, secteur(x, 14, 17.5, 14, -150, -90) + barre(y.toUpperCase(), 22, 10.5, 4.6));
    }
    return null;
  }
  const api = { VERSION: { numero: "2.0", date: "2026-10-14 20:49" }, glyphe };
  if (typeof module !== "undefined" && module.exports) module.exports = api; else racine.FLAMME_GLYPHES = api;
})(typeof window !== "undefined" ? window : globalThis);
