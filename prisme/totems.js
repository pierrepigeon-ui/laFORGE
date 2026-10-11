/* PRISME — totems des tempéraments et emblèmes des styles : lecture de la bibliothèque (prisme/bibliotheque/) et affichage.
   Méthode commune avec Flamme Bleue : catalogue.json + un SVG par code, couleurs en currentColor.
   BIB_VERSION est ajouté à chaque appel : l'incrémenter à chaque changement d'images (sinon le cache ressort les anciennes). */
const BIB_VERSION = 3;
const TOTEMS = { catalogue:null, svg:{}, emb:{} };
const TOTEMS_CREDIT = `Totems : icônes de Lorc, Delapouite et contributeurs, <a href="https://game-icons.net" target="_blank" rel="noopener">game-icons.net</a>, licence <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener">CC BY 3.0</a>.`;
const interieurSVG = t => t.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");

// charge le catalogue et toutes les images (une seule fois) ; ne lève jamais d'erreur : sans images, les pages s'affichent sans
async function chargerTotems(){
  if (TOTEMS.catalogue) return TOTEMS;
  try {
    const cat = await (await fetch(`bibliotheque/catalogue.json?v=${BIB_VERSION}`)).json();
    TOTEMS.catalogue = cat;
    const lire = (liste, dest) => Promise.all(Object.entries(liste || {}).map(async ([code, v]) => {
      try { dest[code] = interieurSVG(await (await fetch(`bibliotheque/${v.fichier}?v=${BIB_VERSION}`)).text()); } catch (e){ /* image absente : ignorée */ }
    }));
    await Promise.all([lire(cat.totems, TOTEMS.svg), lire(cat.styles, TOTEMS.emb)]);
  } catch (e){ TOTEMS.catalogue = { totems:{}, styles:{} }; }
  return TOTEMS;
}
// le totem d'un tempérament (code W/u), en SVG ; couleur : n'importe quelle couleur CSS ; titre : texte au survol
function totemSVG(code, couleur, opts = {}){
  const s = TOTEMS.svg[code]; if (!s) return "";
  const v = TOTEMS.catalogue?.totems?.[code], cls = opts.cls ? ` class="${opts.cls}"` : "";
  const titre = opts.titre ?? v?.nom ?? "";
  const approche = v?.statut === "approché" ? `<text x="500" y="500" text-anchor="end" font-size="64" opacity=".7">≈</text>` : "";
  return `<svg viewBox="0 0 512 512"${cls} color="${couleur}" fill="currentColor" role="img" aria-label="${String(titre).replace(/"/g, "&quot;")}"${opts.attrs ? " " + opts.attrs : ""}>${titre ? `<title>${titre}</title>` : ""}${s}${approche}</svg>`;
}
// l'emblème d'un style (code W.u), en SVG ; mêmes options que totemSVG
function emblemeSVG(code, couleur, opts = {}){
  const s = TOTEMS.emb[code]; if (!s) return "";
  const v = TOTEMS.catalogue?.styles?.[code], cls = opts.cls ? ` class="${opts.cls}"` : "";
  const titre = opts.titre ?? v?.nom ?? "";
  return `<svg viewBox="0 0 512 512"${cls} color="${couleur}" fill="currentColor" role="img" aria-label="${String(titre).replace(/"/g, "&quot;")}"${opts.attrs ? " " + opts.attrs : ""}>${titre ? `<title>${titre}</title>` : ""}${s}</svg>`;
}
