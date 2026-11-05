/* PRISME — les sélecteurs de mécanismes et de thèmes, partagés par jeu.html et decrire.html.
   (1.0, 30/10/2026) déplacés de jeu.html 2.5 sans changer leur comportement : entonnoir, simples coches,
   défauts Compétitif et Partie indépendante, remarques. Le fichier injecte ses styles et crée ses fenêtres.
   À charger AVANT le script de la page ; il s'appuie sur ce que la page définit : sb, $, esc, NIVEAUX.
   La page lit avec lireMecanismes() / lireThemes(), ouvre avec ouvrirSelecteur() / ouvrirSelecteurThemes(),
   et met dans M.apres / TH.apres ce qu'il faut redessiner après un enregistrement (reçoit l'erreur de relecture, ou null).
   (1.1, 31/10/2026) les modes de jeu en trois sous-groupes (Contre qui, À combien, Dans la durée) ; facettes « Le joueur incarne »
   et « Atmosphère », le sujet avant le cadre.
   (1.2, 01/11/2026) le sous-groupe « À combien » s'appelle « Solo » ; les aides en italique.
   (1.3, 02/11/2026) les pictogrammes du matériel et des familles d'axes (PICTOS, picto()) ; le matériel en deux groupes
   (« Ce que les joueurs manipulent », « Ce qui les accueille »), partagé avec decrire.html.
   (1.4, 05/11/2026) ce qui est commun aux pages, chargé aussi par evaluation.html : une couleur par notion (NOTIONS), le sommaire collant
   (sommaire()), la liste complète des paliers d'un axe (listePaliers()) ; le Système en deux engrenages ; le sablier parmi les objets manipulés. */
const SELECTEURS_VERSION = "1.4";
(function(){
  const st = document.createElement("style");
  st.textContent = `
.m-code{font-size:12px;color:var(--muted);margin-left:6px;font-variant-numeric:tabular-nums}
.m-niv{font-size:11px;border:1px solid var(--line);border-radius:999px;padding:0 7px;color:var(--muted);margin-left:6px;white-space:nowrap}
.en{font-style:italic;font-weight:400;color:var(--muted)}
dialog.fenetre{width:min(780px,94vw);max-height:90vh;border:1px solid var(--line);border-radius:16px;padding:22px;background:var(--panel);color:var(--ink)}
dialog.fenetre::backdrop{background:rgba(15,20,30,.45)}
dialog.fenetre h2{font:600 22px/1.25 var(--serif);margin:0 0 4px}
dialog.fenetre .question{font:italic 15px var(--serif);color:var(--muted);margin:0 0 12px}
details.t-facette{border-bottom:1px solid var(--line)}
details.t-facette > summary{cursor:pointer;padding:9px 2px;font-size:14.5px}
details.t-facette .t-ignore{display:none} details.t-facette.grise .t-ignore{display:inline}
details.t-facette.grise > .m-ligne{opacity:.45}
.m-ligne.t-sous > div:first-child{padding-left:22px}
.m-compteur{font-size:14px;margin:0 0 10px}
.m-filtres{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:0 0 10px;font-size:14px}
.m-filtres input[type=search],.m-filtres select{font:14px var(--sans);padding:6px 9px;border:1px solid var(--line);border-radius:8px;background:var(--paper);color:var(--ink)}
.m-filtres input[type=search]{flex:1 1 200px}
.m-choix{max-height:50vh;overflow:auto;border-top:1px solid var(--line)}
.m-ligne{display:grid;grid-template-columns:1fr auto;gap:4px 12px;align-items:center;border-bottom:1px solid var(--line);padding:7px 2px}
.m-ligne.affecte{background:var(--paper)}
.m-poids{display:flex;gap:3px}
.m-poids button{font:500 12.5px var(--sans);padding:4px 8px;border:1px solid var(--line);border-radius:6px;background:var(--panel);color:var(--ink);cursor:pointer;white-space:nowrap}
.m-poids button[aria-pressed=true]{background:var(--ink);color:var(--panel);border-color:var(--ink)}
.m-rem{grid-column:1 / -1;font:13.5px var(--sans);padding:4px 8px;border:1px solid var(--line);border-radius:6px;background:var(--panel);color:var(--ink)}
.m-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:12px 0 0}
.m-etat{font-size:13.5px} .m-etat.err{color:var(--err)}
.legende{font-size:13px;font-style:italic;color:var(--muted);margin:0 0 10px} .legende .info{border-bottom:1px dotted var(--trait);cursor:help}
h3.m-etape{font:600 15px var(--sans);margin:14px 2px 4px} .m-choix > h3.m-etape:first-child{margin-top:10px}
h4.m-sg{font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin:10px 2px 2px}
svg.picto{flex:none;vertical-align:-5px;margin-right:6px;color:var(--muted)}
.m-masques{font-size:13px;font-style:italic;color:var(--muted);margin:0 0 8px}
.m-manque{display:block;font-size:12.5px;color:var(--warn)}
.m-coche{display:flex;gap:6px;align-items:center;font-size:13px;color:var(--muted);cursor:pointer;white-space:nowrap}
.m-coche input{width:18px;height:18px;margin:0;cursor:pointer}
.m-recherche{width:100%;box-sizing:border-box;font:15px var(--sans);padding:9px 12px;margin:0 0 10px;border:1.5px solid var(--trait);border-radius:10px;background:var(--paper);color:var(--ink)}
.m-aide{grid-column:1 / -1;font-size:12px;font-style:italic;color:var(--muted);margin:-2px 0 0}
@media (max-width:760px){ .m-ligne{grid-template-columns:1fr} .m-poids button{flex:1;padding:5px 2px} }
/* (1.4) une couleur par notion, la même sur toutes les pages : fond très pâle du cadre, bordure un ton plus soutenu, titre dans la teinte foncée */
.notion-sable{--n-fond:#FBF6EC;--n-bord:#EADFC8;--n-titre:#6B4E16;--n-fort:#F2E6CB}
.notion-vert{--n-fond:#EEF7F4;--n-bord:#CFE7DF;--n-titre:#1F5E4D;--n-fort:#DAEEE7}
.notion-lavande{--n-fond:#F3F0FA;--n-bord:#DDD5F0;--n-titre:#4B3A7A;--n-fort:#E6E0F5}
.notion-bleu{--n-fond:#EEF3FD;--n-bord:#D3DFF7;--n-titre:#16308F;--n-fort:#DCE6FA}
.notion-peche{--n-fond:#FDF2EC;--n-bord:#F3D9C9;--n-titre:#8A3A12;--n-fort:#F7DDCC}
.notion-neutre{--n-fond:var(--panel);--n-bord:var(--line);--n-titre:var(--ink);--n-fort:var(--neutre)}
@media (prefers-color-scheme: dark){
  .notion-sable{--n-fond:#29231A;--n-bord:#4A3F2A;--n-titre:#EBCB8E;--n-fort:#433826}
  .notion-vert{--n-fond:#16271F;--n-bord:#2B4A3F;--n-titre:#9FD9C5;--n-fort:#244136}
  .notion-lavande{--n-fond:#211D31;--n-bord:#3E3560;--n-titre:#CBBDF3;--n-fort:#352E52}
  .notion-bleu{--n-fond:#18213A;--n-bord:#2E3D6B;--n-titre:#B9CCFF;--n-fort:#28365E}
  .notion-peche{--n-fond:#2C1C15;--n-bord:#5A3524;--n-titre:#F5BFA0;--n-fort:#4A2D20} }
.notion{background:var(--n-fond)!important;border-color:var(--n-bord)!important}
.notion .n-titre{color:var(--n-titre)}
/* (1.4) le sommaire collant, sous l'en-tête : une pastille par cadre, dans sa couleur ; le cadre visible en évidence ; « ↑ Haut » à droite */
.sommaire{position:sticky;top:var(--som-top, var(--ent-h, 0px));z-index:18;display:flex;align-items:center;gap:10px;padding:8px 0;background:var(--paper)}
.som-pastilles{flex:1;min-width:0;display:flex;gap:6px;overflow-x:auto;scrollbar-width:thin;padding:2px}
.sommaire .som-p{flex:none;padding:5px 12px;border-radius:999px;border:1px solid var(--n-bord);background:var(--n-fond);color:var(--n-titre);font:600 13px var(--sans);text-decoration:none;white-space:nowrap}
.sommaire .som-p:hover{border-color:var(--n-titre);color:var(--n-titre)}
.sommaire .som-p.actif{background:var(--n-titre);border-color:var(--n-titre);color:var(--panel)}
.sommaire .som-haut{flex:none;min-height:34px;padding:0 12px;border:1px solid var(--trait);border-radius:8px;background:var(--panel);color:var(--ink);font:500 13px var(--sans);cursor:pointer;white-space:nowrap}
.sommaire .som-haut:hover{border-color:var(--ink)}
@media (max-width:599px){ .sommaire{position:static} }
/* (1.4) la liste complète des paliers d'un axe, à côté des trapèzes ; le palier choisi en évidence (une demi-valeur : ses deux voisins) */
.paliers{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:1px;flex:1 1 300px;min-width:0;max-width:600px}
.paliers button{display:flex;gap:10px;align-items:baseline;width:100%;text-align:left;border:0;background:none;padding:3px 8px;border-radius:6px;font:13px/1.4 var(--sans);color:var(--muted);cursor:pointer}
.paliers button b{flex:none;min-width:2.4em;font-weight:600;font-variant-numeric:tabular-nums;color:var(--ink)}
.paliers button:not(:disabled):hover{background:rgba(127,127,127,.12)}
.paliers button.choisi{background:#F3D9C9;color:var(--ink);font-weight:700} .paliers button.choisi b{font-weight:800}
@media (prefers-color-scheme: dark){ .paliers button.choisi{background:#5A3524} }
.paliers button:disabled{cursor:default}`;
  document.head.appendChild(st);
})();
// une fenêtre de sélecteur, créée au premier appel ; Échap vaut « Annuler »
function fenetre(id, etat){
  let d = document.getElementById(id);
  if (!d){
    d = document.createElement("dialog"); d.className = "fenetre"; d.id = id; d.setAttribute("aria-labelledby", id + "-titre");
    d.innerHTML = `<div id="${id}-corps"></div>`; document.body.appendChild(d);
    d.addEventListener("cancel", () => { etat.brouillon = null; });
  }
  return d;
}

/* ---- les mécanismes du jeu (nomenclature PRISMEmechanics, 28/10/2026) ---- */
// libellés : un seul endroit pour changer un mot
const POIDS = { 3:"majeur", 2:"secondaire", 1:"marginal" };   // (2.5) « secondaire » au lieu de « présent » ; valeurs en base inchangées
const POIDS_PLURIEL = { 3:"majeurs", 2:"secondaires", 1:"marginaux" };
// les niveaux, dans l'ordre d'affichage (29/10/2026 : le niveau « paramètre » n'existe plus)
const NIVEAUX_MECA = { materiel:"Matériel", geste:"Gestes de base", mecanisme:"Mécanisme", hasard:"Hasard", assemblage:"Combinaison", aspect:"Mode de jeu", structure:"Déroulement", fin_de_partie:"Fin de partie", mise_en_place:"Mise en place", support:"Plateau et formes", parole:"Parole", hors_modele:"Hors modèle" };
// un nom et son anglais : « nom (name) », l'anglais en italique et en gris
const bilingue = (fr, en) => esc(fr) + (en ? ` <span class="en">(${esc(en)})</span>` : "");
const legendeDML = `<p class="legende"><span class="info" tabindex="0" aria-label="D déplacement : un composant change de zone (piocher, poser, payer). M modification : il change d'état sur place (lancer, retourner, incliner). L lecture : une règle lit la situation (majorité, série complète, fin de partie).">D déplacement · M modification · L lecture<span class="bulle" aria-hidden="true">D : un composant change de zone (piocher, poser, payer).<br>M : il change d'état sur place (lancer, retourner, incliner).<br>L : une règle lit la situation (majorité, série complète, fin de partie).</span></span></p>`;
// (2.3) simples coches : pour ces niveaux le poids n'a pas de sens ; cochée = une ligne de poids 2, sans remarque
const COCHE = ["materiel", "geste", "aspect", "fin_de_partie"];
const estCoche = l => COCHE.includes(l?.niveau);
// (2.5) la carte Mécanique : en tête la fin de partie (le mode de jeu est monté dans la carte d'identité) ; en bas, en petit, le matériel et les gestes
const CARTE_TETE = [["fin_de_partie", "Fin de partie"]], CARTE_BAS = [["materiel", "Matériel"], ["geste", "Gestes"]];
// modes par défaut, comme la base pour tout nouveau jeu : sans mode de jeu, Compétitif (2.4) ; sans partie indépendante, campagne ni legacy, Partie indépendante (2.5)
const COMPETITIF = "STR-22", PARTIE_INDEPENDANTE = "STR-26", FORMATS = ["STR-26", "STR-13", "STR-05"];
// (1.1) les modes de jeu, rangés selon prisme_mecanismes.sous_groupe ; « Autres » seulement s'il en reste sans sous-groupe
const SOUS_GROUPES = { contre_qui:"Contre qui", a_combien:"Solo", duree:"Dans la durée" };
const parSousGroupe = L => [...Object.entries(SOUS_GROUPES).map(([g, t]) => [t, L.filter(l => l.sous_groupe === g)]),
  ["Autres", L.filter(l => !(l.sous_groupe in SOUS_GROUPES))]].filter(([, G]) => G.length);
// une remarque, visible entre parenthèses à la suite du nom
const remVisible = r => r ? ` <span class="rem">(${esc(r)})</span>` : "";
const norm = s => String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
// (1.4) un engrenage au trait : la roue, le moyeu, des dents en rayons (le Système en a deux, un grand et un petit, imbriqués)
const engrenage = (cx, cy, r, R, n, dec = 0) => `<circle cx="${cx}" cy="${cy}" r="${r}"/><circle cx="${cx}" cy="${cy}" r="${(r * .38).toFixed(2)}"/>`
  + [...Array(n).keys()].map(i => { const a = dec + i * 2 * Math.PI / n, c = Math.cos(a), s = Math.sin(a), f = v => v.toFixed(2);
    return `<path d="M${f(cx + r * c)} ${f(cy + r * s)} L${f(cx + R * c)} ${f(cy + R * s)}"/>`; }).join("");
// (1.3) les pictogrammes, au trait, dans une grille de 24 : le matériel (par code) et les familles d'axes (par code de chapitre)
const PICTOS = {
  "MAT-CARTES": `<rect x="3" y="5" width="11" height="15" rx="2"/><rect x="10" y="3" width="11" height="15" rx="2"/>`,
  "MAT-MAIN": `<path d="M6 19 L4 8 L10 6 Z"/><path d="M9 19 L9 5 L15 5 L15 19"/><path d="M18 19 L20 8 L14 6"/>`,
  "MAT-DES": `<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1.2"/><circle cx="15" cy="15" r="1.2"/><circle cx="12" cy="12" r="1.2"/>`,
  "MAT-TUILES": `<path d="M12 3 L20 7.5 L20 16.5 L12 21 L4 16.5 L4 7.5 Z"/>`,
  "MAT-PIONS": `<circle cx="12" cy="7" r="3"/><path d="M9 21 L10.5 11 L13.5 11 L15 21 Z"/><path d="M7 21 H17"/>`,
  "MAT-MEEPLES": `<path d="M12 3 a3 3 0 1 1 0.01 0 M5 11 L9 10 L8 21 H11 L12 16 L13 21 H16 L15 10 L19 11 L17 8 H7 Z"/>`,
  "MAT-OUVRIERS": `<path d="M12 4 a2.5 2.5 0 1 1 0.01 0 M6 12 L9.5 10 L9 21 H11.5 L12 16 L12.5 21 H15 L14.5 10 L18 12"/><path d="M17 4 L20 7 M18.5 5.5 L15 9"/>`,
  "MAT-FIGURINES": `<circle cx="12" cy="5" r="2.5"/><path d="M12 8 V15 M8 11 H16 M12 15 L9 21 M12 15 L15 21"/>`,
  "MAT-JETONS": `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/>`,
  "MAT-MARQUEURS": `<path d="M12 3 L20 7.5 L12 12 L4 7.5 Z M4 7.5 V16.5 L12 21 V12 M20 7.5 V16.5 L12 21"/>`,
  "MAT-PLATEAU": `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3 V21 M15 3 V21 M3 9 H21 M3 15 H21"/>`,
  "MAT-PLATEAU-JOUEUR": `<rect x="4" y="7" width="16" height="11" rx="2"/><path d="M8 11 H11 M13 11 H16 M8 14 H16"/>`,
  "MAT-FEUILLE": `<path d="M6 3 H15 L19 7 V21 H6 Z"/><path d="M9 11 H16 M9 14 H16 M9 17 H13"/>`,
  "MAT-SAC": `<path d="M8 7 Q12 3 16 7 L19 19 Q12 22 5 19 Z"/><path d="M8 7 H16"/>`,
  "MAT-SABLIER": `<path d="M6 3 H18 M6 21 H18 M7 3 Q7 10 12 12 Q17 10 17 3 M7 21 Q7 14 12 12 Q17 14 17 21"/>`,
  "MAT-ECRAN": `<path d="M3 6 L9 4 V18 L3 20 Z M9 4 L15 6 V20 L9 18 M15 6 L21 4 V18 L15 20"/>`,
  SYS: engrenage(9.3, 9.3, 4.4, 6.7, 8) + engrenage(17.4, 17.4, 2.6, 4.2, 6, Math.PI / 6),
  EXP: `<path d="M12 20 C5 15 3 11 5 8 C7 5 10.5 6 12 8.5 C13.5 6 17 5 19 8 C21 11 19 15 12 20 Z"/>`,
  EDI: `<path d="M3 7.5 L12 3 L21 7.5 L12 12 Z M3 7.5 V16.5 L12 21 V12 M21 7.5 V16.5 L12 21"/>` };
// un pictogramme en SVG en ligne, de la couleur du texte ; rien si le code n'en a pas
const picto = (code, t = 22) => PICTOS[code] ? `<svg class="picto" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">${PICTOS[code]}</svg>` : "";
// (1.3) le matériel en deux groupes, dans cet ordre ; une rubrique inconnue va dans « Autre matériel »
// (1.4) le sablier parmi les objets manipulés
const GROUPES_MATERIEL = [["Ce que les joueurs manipulent", ["MAT-CARTES", "MAT-DES", "MAT-TUILES", "MAT-PIONS", "MAT-JETONS", "MAT-MARQUEURS", "MAT-SABLIER"]],
  ["Ce qui les accueille", ["MAT-PLATEAU", "MAT-PLATEAU-JOUEUR", "MAT-FEUILLE", "MAT-SAC", "MAT-ECRAN"]]];
const rangerMateriel = racines => [...GROUPES_MATERIEL.map(([t, C]) => [t, C.map(c => racines.find(l => l.code === c)).filter(Boolean)]),
  ["Autre matériel", racines.filter(l => !GROUPES_MATERIEL.some(([, C]) => C.includes(l.code)))]].filter(([, G]) => G.length);
// les sous-rubriques, sous leur rubrique, dans cet ordre ; les autres suivent dans l'ordre de la nomenclature
const ORDRE_SOUS_MATERIEL = ["MAT-MAIN", "MAT-MEEPLES", "MAT-OUVRIERS", "MAT-FIGURINES"];
const rangSous = l => { const i = ORDRE_SOUS_MATERIEL.indexOf(l.code); return i < 0 ? 99 : i; };
const rangerSous = L => [...L].sort((a, b) => rangSous(a) - rangSous(b));

/* ---- (1.4) commun aux pages : notions, sommaire, paliers ---- */
// une couleur par notion (classe notion-<couleur>, plus « notion » sur un cadre pour en prendre le fond et la bordure)
const NOTIONS = { bref:"sable", prix:"sable", contenu:"vert", theme:"lavande", meca:"bleu", axes:"peche" };
const notion = n => "notion notion-" + (NOTIONS[n] || "neutre");
// le sommaire collant : el reçoit une pastille par cadre ({ id, nom, notion, ouvrir(cadre) facultatif }) et le bouton « ↑ Haut »
const SOM = { el:null, cadres:[] };
const hauteurCollee = () => { const el = SOM.el; if (!el) return 0;
  const cs = getComputedStyle(el); return cs.position === "sticky" ? parseFloat(cs.top) + el.offsetHeight : parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ent-h")) || 0; };
function allerA(cadre){ scrollTo({ top: cadre.getBoundingClientRect().top + scrollY - hauteurCollee() - 10, behavior:"smooth" }); }
function sommaire(el, cadres){
  Object.assign(SOM, { el, cadres });
  el.classList.add("sommaire"); el.setAttribute("aria-label", "Sommaire de la page");
  el.innerHTML = `<div class="som-pastilles">${cadres.map(c => `<a href="#${esc(c.id)}" class="som-p notion-${NOTIONS[c.notion] || "neutre"}" data-som="${esc(c.id)}">${esc(c.nom)}</a>`).join("")}</div>
    <button type="button" class="som-haut" title="Revenir en haut de la page">↑ Haut</button>`;
  if (!el.dataset.pret){
    el.dataset.pret = "1";
    el.addEventListener("click", e => {
      if (e.target.closest(".som-haut")){ scrollTo({ top:0, behavior:"smooth" }); return; }
      const a = e.target.closest("[data-som]"); if (!a) return;
      e.preventDefault();
      const c = document.getElementById(a.dataset.som); if (!c) return;
      SOM.cadres.find(x => x.id === a.dataset.som)?.ouvrir?.(c);
      allerA(c);
    });
    let prevu = false;
    addEventListener("scroll", () => { if (!prevu){ prevu = true; requestAnimationFrame(() => { prevu = false; majSommaire(); }); } }, { passive:true });
    addEventListener("resize", majSommaire);
  }
  majSommaire();
}
// le cadre visible : le dernier dont le haut est passé sous le sommaire
function majSommaire(){
  if (!SOM.el) return;
  const lim = hauteurCollee() + 40; let vu = null;
  SOM.cadres.forEach(c => { const el = document.getElementById(c.id); if (el && el.offsetParent !== null && el.getBoundingClientRect().top <= lim) vu = c.id; });
  if (!vu && SOM.cadres.length) vu = SOM.cadres[0].id;
  SOM.el.querySelectorAll("[data-som]").forEach(a => { const ici = a.dataset.som === vu; a.classList.toggle("actif", ici); ici ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current"); });
}
// le libellé d'un palier (P : { valeur: libellé }) ; une demi-valeur se dit « entre » ses deux voisins
// (le point final et la majuscule initiale d'un palier rédigé en phrase s'effacent dans « entre … et … »)
const milieuPalier = t => t.replace(/\.$/, "").replace(/^\p{Lu}(?!\p{Lu})/u, c => c.toLowerCase());
function libelleDePalier(P, v){
  if (v == null) return "";
  const x = Math.round(v * 2) / 2;
  return x % 1 === 0 ? P[x] || "" : P[x - .5] && P[x + .5] ? `entre ${milieuPalier(P[x - .5])} et ${milieuPalier(P[x + .5])}` : "";
}
// tous les paliers d'un axe, du plus bas au plus haut, chacun précédé de sa valeur (texte(x) l'écrit) ; le choisi en évidence,
// une demi-valeur met en évidence ses deux paliers encadrants ; un clic choisit la valeur (la page écoute « .paliers button »).
// Hors de l'ordre de tabulation : au clavier, les flèches sur les trapèzes font la même chose.
function listePaliers(P, v, texte = x => String(x).replace(".", ","), ro = ""){
  const V = Object.keys(P).map(Number).filter(x => !Number.isNaN(x)).sort((a, b) => a - b); if (!V.length) return "";
  const r = v == null ? null : Math.round(v * 2) / 2, choisis = r == null ? [] : r % 1 === 0 ? [r] : [r - .5, r + .5];
  return `<ol class="paliers">${V.map(x => `<li><button type="button" data-v="${x}" tabindex="-1" class="${choisis.includes(x) ? "choisi" : ""}"${ro}><b>${esc(texte(x))}</b><span>${esc(P[x])}</span></button></li>`).join("")}</ol>`;
}

const M = { jeu:null, user:null, role:null, ecrit:false, lignes:[], requis:{}, affectes:{}, brouillon:null, apres:null };   // affectes : { code: { poids, remarque } } ; requis : { code: [codes requis] }

// lit la nomenclature, les requis et les mécanismes du jeu dans M ; renvoie le message d'erreur, ou null
async function lireMecanismes(code, user, role){
  Object.assign(M, { jeu:code, user, role, ecrit: NIVEAUX[role] >= NIVEAUX.evaluateur, brouillon:null });
  const [l, a, rq] = await Promise.all([
    sb.from("prisme_mecanismes").select("code,nom,nom_en,niveau,sous_groupe,categorie,statut,fusion_vers,famille_recolte,ordre,definition").order("ordre"),
    sb.from("prisme_jeux_mecanismes").select("mecanisme,poids,remarque").eq("jeu", code),
    sb.from("prisme_mecanismes_requis").select("mecanisme,requis")]);
  if (l.error || a.error) return (l.error || a.error).message;
  M.lignes = l.data || [];
  // sans les requis, le sélecteur propose tout (comme « Tout afficher »)
  if (rq.error) console.warn("PRISME : requis des mécanismes illisibles, le sélecteur propose toutes les lignes", rq.error.message);
  M.requis = {}; (rq.data || []).forEach(r => (M.requis[r.mecanisme] ||= []).push(r.requis));
  M.affectes = Object.fromEntries((a.data || []).map(x => [x.mecanisme, { poids:x.poids, remarque:x.remarque || "" }]));
  return null;
}
const aideMeca = `<p class="question">Ce dont le jeu est fait, selon la nomenclature PRISMEmechanics. Le matériel, les gestes, le mode de jeu et la fin de partie se cochent ; le reste se pèse : majeur (le jeu repose dessus), secondaire, marginal.</p>`;
const ligneMeca = c => M.lignes.find(l => l.code === c);
const badgesMeca = l => `<span class="m-code">${esc(l.code)}</span>${l.niveau ? `<span class="m-niv">${esc(NIVEAUX_MECA[l.niveau] || l.niveau)}</span>` : ""}`;
const fusionMeca = l => { if (l.statut !== "fusionner") return ""; const cible = l.fusion_vers ? ligneMeca(l.fusion_vers) : null;
  return `<span class="m-fusion">→ ${esc(cible?.nom || l.fusion_vers || "ligne fusionnée")}</span>`; };
const parPoids = p => M.lignes.filter(l => M.affectes[l.code]?.poids === p && !estCoche(l));   // les simples coches sont à part
// ce qui est acquis : les lignes cochées et, de proche en proche, ce que supposent les matériels cochés (cocher « Ouvriers » vaut « Pions ») ;
// un mécanisme coché ne vaut pas pour son requis : « Relance » cochée sans « Dés » reste signalée « suppose : Dés (non coché) »
function acquisDe(choisis){
  const a = new Set(Object.keys(choisis)), pile = [...a].filter(c => ligneMeca(c)?.niveau === "materiel");
  while (pile.length) (M.requis[pile.pop()] || []).forEach(r => { if (!a.has(r)){ a.add(r); if (ligneMeca(r)?.niveau === "materiel") pile.push(r); } });
  return a;
}
const requisManquants = (c, acquis) => (M.requis[c] || []).filter(r => !acquis.has(r));

// le sélecteur, pour l'évaluateur, l'éditeur et le propriétaire : dans une fenêtre (2.0)
// saisie en entonnoir (2.2) : d'abord le matériel, puis le reste par niveau, seulement les lignes dont les requis sont acquis
const dialogue = () => fenetre("m-dialogue", M);
function ouvrirSelecteur(){
  dialogue();   // la fenêtre, créée au premier appel
  M.brouillon = Object.fromEntries(Object.entries(M.affectes).map(([c, v]) => [c, { ...v }]));
  modesParDefaut(M.brouillon);
  // proposées : tout sauf hors modèle, écartées et fusionnées ; une ligne déjà affectée reste proposée pour pouvoir la retirer
  const proposees = M.lignes.filter(l => M.affectes[l.code] || (l.niveau !== "hors_modele" && l.statut !== "ecarter" && l.statut !== "fusionner"));
  const opt = (o, tous) => `<option value="">${esc(tous)}</option>` + Object.entries(o).map(([c, t]) => `<option value="${esc(c)}">${esc(t)}</option>`).join("");
  const materiel = proposees.filter(l => l.niveau === "materiel");
  // (2.3) sous-rubriques : un matériel qui en suppose un autre (Ouvriers → Pions) se range sous lui
  const parentDe = l => (M.requis[l.code] || []).find(r => materiel.some(m => m.code === r));
  const racines = materiel.filter(l => !parentDe(l)), enfants = c => rangerSous(materiel.filter(l => parentDe(l) === c));
  // les niveaux de l'étape 2, dans l'ordre des libellés ; un niveau inconnu va en fin de liste
  const ordre = [...Object.keys(NIVEAUX_MECA), ...new Set(proposees.map(l => l.niveau).filter(n => n && !(n in NIVEAUX_MECA)))]
    .filter(n => n !== "materiel" && proposees.some(l => l.niveau === n));
  const niveaux = Object.fromEntries(ordre.map(n => [n, NIVEAUX_MECA[n] || n]));
  const familles = [...new Set(proposees.map(l => l.famille_recolte).filter(Boolean))].sort((a, b) => a.localeCompare(b, "fr"));
  $("#m-dialogue-corps").innerHTML = `<h2 id="m-dialogue-titre">Mécanismes</h2>
    <input type="search" class="m-recherche" id="m-q" placeholder="Chercher un mécanisme, un matériel, un code…" aria-label="Chercher un code ou un nom">
    ${aideMeca}
    <p class="m-compteur" id="m-compteur"></p>
    <div class="m-filtres">
      <select id="m-niv" aria-label="Niveau">${opt(niveaux, "Tous les niveaux")}</select>
      <select id="m-fam" aria-label="Famille d'origine">${opt(Object.fromEntries(familles.map(f => [f, f])), "Toutes les familles d'origine")}</select>
      <label><input type="checkbox" id="m-seuls"> n'afficher que les mécanismes affectés</label>
      <label title="Montre aussi les lignes dont le matériel ou le mécanisme requis n'est pas coché (pour un jeu atypique)"><input type="checkbox" id="m-tout"> tout afficher</label></div>
    ${legendeDML}
    ${ligneMeca(COMPETITIF) || ligneMeca(PARTIE_INDEPENDANTE) ? `<p class="m-masques">${[ligneMeca(COMPETITIF) && `Sans autre mode de jeu coché, le jeu est enregistré « ${esc(ligneMeca(COMPETITIF).nom)} »`,
      ligneMeca(PARTIE_INDEPENDANTE) && `sans campagne ni legacy, « ${esc(ligneMeca(PARTIE_INDEPENDANTE).nom)} »`].filter(Boolean).join(" ; ").replace(/^s/, "S")}.</p>` : ""}
    <p class="m-masques" id="m-masques" role="status"></p>
    <div class="m-choix" id="m-choix"></div>
    <p class="m-actions"><button class="btn plein" type="button" id="m-enregistrer">Enregistrer</button><button class="btn" type="button" id="m-annuler">Annuler</button><span class="m-etat" id="m-etat"></span></p>`;
  // (2.4) tous les groupes repliés, sauf ceux qui ont déjà une ligne choisie ; une recherche déplie ceux qui ont un résultat
  const ouverts = new Set(Object.keys(M.brouillon).map(c => ligneMeca(c)?.niveau));
  const lister = () => {
    const q = norm($("#m-q").value.trim()), niv = $("#m-niv").value, fam = $("#m-fam").value, seuls = $("#m-seuls").checked, tout = $("#m-tout").checked;
    const acquis = acquisDe(M.brouillon);
    const garde = l => (!q || norm(l.code + " " + l.nom + " " + (l.nom_en || "")).includes(q)) && (!fam || l.famille_recolte === fam) && (!seuls || M.brouillon[l.code]);
    // étape 1, toujours en tête : le matériel du jeu ; une sous-rubrique n'apparaît, indentée, que si sa rubrique est cochée
    let masques = 0;
    const arbre = (L, prof, parent) => prof > 4 ? "" : L.map(l => {
      const vu = garde(l) && (!parent || tout || M.brouillon[l.code] || M.brouillon[parent]);
      if (garde(l) && !vu) masques++;
      return (vu ? ligneChoix(l, acquis, prof) : "") + arbre(enfants(l.code), prof + 1, l.code);
    }).join("");
    // (1.3) en deux groupes, comme dans « Le contenu et le matériel »
    let h = `<h3 class="m-etape">1. Le matériel du jeu</h3>` + (rangerMateriel(racines).map(([t, G]) => { const a = arbre(G, 0, null); return a ? `<h4 class="m-sg">${esc(t)}</h4>${a}` : ""; }).join("")
      || `<p class="discret">Aucun matériel ne correspond à ces filtres.</p>`);
    // étape 2 : le reste, par niveau ; une ligne affectée reste toujours visible
    const groupes = ordre.filter(n => !niv || n === niv).map(n => {
      const tous = proposees.filter(l => l.niveau === n), L = tous.filter(garde);
      const vis = L.filter(l => tout || M.brouillon[l.code] || !requisManquants(l.code, acquis).length);
      masques += L.length - vis.length;
      if (!vis.length) return "";
      const nb = tous.filter(l => M.brouillon[l.code]).length;
      return `<details class="t-facette" data-niveau="${esc(n)}"${q || seuls || ouverts.has(n) ? " open" : ""}><summary><b>${esc(niveaux[n])}</b> <span class="discret">${vis.length} proposé${vis.length > 1 ? "s" : ""}${nb ? ` · ${nb} choisi${nb > 1 ? "s" : ""}` : ""}</span></summary>${n === "aspect"
        ? parSousGroupe(vis).map(([t, G]) => `<h4 class="m-sg">${esc(t)}</h4>${G.map(l => ligneChoix(l, acquis)).join("")}`).join("")
        : vis.map(l => ligneChoix(l, acquis)).join("")}</details>`;
    }).join("");
    h += `<h3 class="m-etape">2. Le reste, par niveau</h3>` + (groupes || `<p class="discret">Aucun mécanisme ne correspond à ces filtres.</p>`);
    $("#m-choix").innerHTML = h;
    $("#m-masques").textContent = masques ? `${masques} ligne${masques > 1 ? "s" : ""} masquée${masques > 1 ? "s" : ""} : ${masques > 1 ? "elles supposent" : "elle suppose"} un matériel ou un mécanisme non coché (« tout afficher » pour les voir).` : "";
  };
  $("#m-choix").addEventListener("toggle", e => { if (e.target.matches?.("details")) e.target.open ? ouverts.add(e.target.dataset.niveau) : ouverts.delete(e.target.dataset.niveau); }, true);
  ["#m-q", "#m-niv", "#m-fam", "#m-seuls", "#m-tout"].forEach(s => $(s).addEventListener("input", lister));
  $("#m-choix").addEventListener("click", e => {
    const b = e.target.closest("[data-p], [data-coche]"); if (!b) return;
    const c = b.closest(".m-ligne").dataset.code, coche = b.matches("[data-coche]"), p = coche ? (b.checked ? 2 : 0) : +b.dataset.p;
    if (p) M.brouillon[c] = { poids:p, remarque: coche ? "" : M.brouillon[c]?.remarque || "" }; else delete M.brouillon[c];
    // un choix peut faire apparaître ou disparaître des lignes : on redessine, sans perdre la place ni le focus
    const boite = $("#m-choix"), haut = boite.scrollTop;
    lister(); compter(); boite.scrollTop = haut;
    boite.querySelector(`.m-ligne[data-code="${CSS.escape(c)}"] ${coche ? "[data-coche]" : `[data-p="${p}"]`}`)?.focus();
  });
  $("#m-choix").addEventListener("input", e => { if (e.target.matches(".m-rem")) M.brouillon[e.target.closest(".m-ligne").dataset.code].remarque = e.target.value; });
  $("#m-annuler").addEventListener("click", () => { M.brouillon = null; dialogue().close(); });
  $("#m-enregistrer").addEventListener("click", enregistrerMecanismes);
  lister(); compter();
  dialogue().showModal();
}
function ligneChoix(l, acquis, prof = 0){
  const v = M.brouillon[l.code], p = v?.poids || 0;
  const manque = requisManquants(l.code, acquis).map(r => ligneMeca(r)?.nom || r);
  const retrait = prof ? ` style="padding-left:${22 * prof}px"` : "";   // une sous-rubrique du matériel, en retrait sous sa rubrique
  const nom = `<div>${prof ? "↳ " : ""}${l.niveau === "materiel" ? picto(l.code, 20) : ""}${bilingue(l.nom, l.nom_en)}${badgesMeca(l)}${manque.length ? `<span class="m-manque">suppose : ${esc(manque.join(", "))} (non coché)</span>` : ""}</div>`;
  // simple coche : une case, sans poids ni remarque
  if (estCoche(l)) return `<div class="m-ligne${p ? " affecte" : ""}" data-code="${esc(l.code)}"${retrait}>${nom}
    <label class="m-coche"><input type="checkbox" data-coche${p ? " checked" : ""} aria-label="${esc(l.nom)} : dans le jeu"> dans le jeu</label></div>`;
  return `<div class="m-ligne${p ? " affecte" : ""}" data-code="${esc(l.code)}"${retrait}>${nom}
    <div class="m-poids" role="group" aria-label="Poids de ${esc(l.nom)}">${[[0, "—"], [1, POIDS[1]], [2, POIDS[2]], [3, POIDS[3]]].map(([n, t]) =>
      `<button type="button" data-p="${n}" aria-pressed="${p === n}"${n ? "" : ' title="absent"'}>${esc(t)}</button>`).join("")}</div>
    ${p ? `<input class="m-rem" type="text" placeholder="Remarque (facultative)" aria-label="Remarque, visible sur la fiche entre parenthèses" value="${esc(v.remarque)}"><span class="m-aide">Visible sur la fiche, entre parenthèses</span>` : ""}</div>`;
}
// le compteur : les lignes à poids (« 3 majeurs · 1 secondaire »), puis les simples coches (« 4 cochés »)
function compter(){
  const n = { 3:0, 2:0, 1:0 }; let coches = 0;
  Object.entries(M.brouillon).forEach(([c, v]) => estCoche(ligneMeca(c)) ? coches++ : n[v.poids]++);
  const L = [3, 2, 1].filter(p => n[p]).map(p => `${n[p]} ${n[p] > 1 ? POIDS_PLURIEL[p] : POIDS[p]}`);
  if (coches) L.push(`${coches} coché${coches > 1 ? "s" : ""}`);
  $("#m-compteur").textContent = L.join(" · ") || "Rien n'est encore choisi.";
}
// aucun mode de jeu : Compétitif ; aucun de partie indépendante, campagne, legacy : Partie indépendante ; un jeu qui a déjà ces modes n'est pas touché
function modesParDefaut(choisis){
  const coche = c => { if (ligneMeca(c)?.niveau === "aspect") choisis[c] = { poids:2, remarque:"" }; };
  if (!Object.keys(choisis).some(c => ligneMeca(c)?.niveau === "aspect")) coche(COMPETITIF);
  if (!FORMATS.some(c => choisis[c])) coche(PARTIE_INDEPENDANTE);
}
async function enregistrerMecanismes(){
  modesParDefaut(M.brouillon);
  const avant = M.affectes, apres = M.brouillon, etat = $("#m-etat");
  const maintenant = new Date().toISOString();
  const majs = Object.entries(apres).filter(([c, v]) => !avant[c] || avant[c].poids !== v.poids || avant[c].remarque.trim() !== v.remarque.trim())
    .map(([c, v]) => ({ jeu:M.jeu, mecanisme:c, poids:v.poids, remarque: v.remarque.trim() || null, modifie_le:maintenant, modifie_par:M.user.id }));
  const sup = Object.keys(avant).filter(c => !apres[c]);
  if (!majs.length && !sup.length){ M.brouillon = null; dialogue().close(); return; }
  $("#m-enregistrer").disabled = true; etat.className = "m-etat discret"; etat.textContent = "Enregistrement…";
  const r1 = majs.length ? await sb.from("prisme_jeux_mecanismes").upsert(majs, { onConflict:"jeu,mecanisme" }) : {};
  const r2 = !r1.error && sup.length ? await sb.from("prisme_jeux_mecanismes").delete().eq("jeu", M.jeu).in("mecanisme", sup) : {};
  const err = r1.error || r2.error;
  if (err){ $("#m-enregistrer").disabled = false; etat.className = "m-etat err"; etat.textContent = "Rien n'a pu être enregistré : " + err.message; return; }
  dialogue().close();
  // relire la base : la page montre ce qui y est vraiment
  const e2 = await lireMecanismes(M.jeu, M.user, M.role); M.apres?.(e2);
}

/* ---- les thèmes du jeu (nomenclature PRISMEthemes, 29/10/2026) : même modèle que les mécanismes ---- */
// facettes, dans l'ordre d'affichage ; la carte montre le cadre en tête, puis les facettes descriptives
// (1.1) le sujet avant le cadre ; « Le joueur incarne » (facette role) et « Atmosphère » (facette ton), codes en base inchangés
const FACETTES = { sujet:"Sujet", cadre:"Cadre", periode:"Période", realisme:"Réalisme", role:"Le joueur incarne", lieu:"Lieu", ton:"Atmosphère", tag:"Tags du fantastique", reference:"Référence culturelle et géographique" };
const FACETTES_CARTE = ["sujet", "role", "ton", "lieu", "tag", "reference"];   // (2.5) sous le titre ; le sujet n'y garde que ses valeurs non majeures
const ABSTRAIT = "CAD-ABSTRAIT", FACETTES_TEMPS = ["periode", "realisme"];   // un jeu abstrait n'a ni période ni réalisme
const TH = { jeu:null, user:null, role:null, ecrit:false, lignes:[], affectes:{}, brouillon:null, apres:null };

// lit la nomenclature et les thèmes du jeu dans TH ; renvoie le message d'erreur, ou null
async function lireThemes(code, user, role){
  Object.assign(TH, { jeu:code, user, role, ecrit: NIVEAUX[role] >= NIVEAUX.evaluateur, brouillon:null });
  const [l, a] = await Promise.all([
    sb.from("prisme_themes").select("code,facette,libelle,libelle_en,parent,definition,ordre").order("ordre"),
    sb.from("prisme_jeux_themes").select("theme,poids,remarque").eq("jeu", code)]);
  if (l.error || a.error) return (l.error || a.error).message;
  TH.lignes = l.data || [];
  TH.affectes = Object.fromEntries((a.data || []).map(x => [x.theme, { poids:x.poids, remarque:x.remarque || "" }]));
  return null;
}
const ligneTheme = c => TH.lignes.find(l => l.code === c);
// les valeurs d'une facette, chaque parent suivi de ses sous-items
function themesRanges(facette){
  const L = TH.lignes.filter(x => x.facette === facette), codes = new Set(L.map(x => x.code));
  return L.filter(x => !x.parent || !codes.has(x.parent)).flatMap(x => [x, ...L.filter(y => y.parent === x.code)]);
}
// les valeurs affectées d'une facette, de la plus lourde à la plus légère, puis dans l'ordre de la nomenclature
const affectesDe = facette => TH.lignes.filter(l => l.facette === facette && TH.affectes[l.code]).sort((x, y) => TH.affectes[y.code].poids - TH.affectes[x.code].poids || x.ordre - y.ordre);

// le sélecteur, pour l'évaluateur, l'éditeur et le propriétaire : en fenêtre, comme celui des mécanismes
const dialogueThemes = () => fenetre("t-dialogue", TH);
function ouvrirSelecteurThemes(){
  dialogueThemes();
  TH.brouillon = Object.fromEntries(Object.entries(TH.affectes).map(([c, v]) => [c, { ...v }]));
  $("#t-dialogue-corps").innerHTML = `<h2 id="t-dialogue-titre">Thèmes</h2>
    <p class="question">Décrire de quoi parle le jeu, pas le juger : la qualité du thème se note dans l'évaluation (axe THÈME).</p>
    <p class="m-compteur" id="t-compteur"></p>
    <div class="m-filtres"><input type="search" id="t-q" placeholder="Chercher un code ou un libellé" aria-label="Chercher un code ou un libellé">
      <label><input type="checkbox" id="t-seuls"> n'afficher que les thèmes affectés</label></div>
    <div class="m-choix" id="t-choix"></div>
    <p class="m-actions"><button class="btn plein" type="button" id="t-enregistrer">Enregistrer</button><button class="btn" type="button" id="t-annuler">Annuler</button><span class="m-etat" id="t-etat"></span></p>`;
  const ouverts = new Set(Object.keys(TH.affectes).map(c => ligneTheme(c)?.facette));
  const lister = () => {
    const q = norm($("#t-q").value.trim()), seuls = $("#t-seuls").checked;
    $("#t-choix").innerHTML = Object.entries(FACETTES).map(([f, nom]) => {
      const tous = themesRanges(f), L = tous.filter(l => (!q || norm(l.code + " " + l.libelle + " " + (l.libelle_en || "")).includes(q)) && (!seuls || TH.brouillon[l.code]));
      if (!L.length) return "";
      const n = tous.filter(l => TH.brouillon[l.code]).length;
      return `<details class="t-facette" data-facette="${f}"${q || seuls || ouverts.has(f) ? " open" : ""}><summary><b>${esc(nom)}</b> <span class="discret">${tous.length} valeur${tous.length > 1 ? "s" : ""}<span data-nb>${n ? ` · ${n} choisi${n > 1 ? "s" : ""}` : ""}</span></span><span class="t-ignore discret"> · ignoré : le jeu est abstrait</span></summary>${L.map(ligneChoixTheme).join("")}</details>`;
    }).join("") || `<p class="discret">Aucun thème ne correspond à cette recherche.</p>`;
    griser();
  };
  $("#t-choix").addEventListener("toggle", e => { if (e.target.matches?.("details")) e.target.open ? ouverts.add(e.target.dataset.facette) : ouverts.delete(e.target.dataset.facette); }, true);
  ["#t-q", "#t-seuls"].forEach(s => $(s).addEventListener("input", lister));
  $("#t-choix").addEventListener("click", e => {
    const b = e.target.closest("[data-p]"); if (!b) return;
    const ligne = b.closest(".m-ligne"), c = ligne.dataset.code, p = +b.dataset.p;
    if (p) TH.brouillon[c] = { poids:p, remarque: TH.brouillon[c]?.remarque || "" }; else delete TH.brouillon[c];
    ligne.outerHTML = ligneChoixTheme(ligneTheme(c));
    compterThemes(); griser();
  });
  $("#t-choix").addEventListener("input", e => { if (e.target.matches(".m-rem")) TH.brouillon[e.target.closest(".m-ligne").dataset.code].remarque = e.target.value; });
  $("#t-annuler").addEventListener("click", () => { TH.brouillon = null; dialogueThemes().close(); });
  $("#t-enregistrer").addEventListener("click", enregistrerThemes);
  lister(); compterThemes();
  dialogueThemes().showModal();
}
function ligneChoixTheme(l){
  const v = TH.brouillon[l.code], p = v?.poids || 0;
  return `<div class="m-ligne${p ? " affecte" : ""}${l.parent ? " t-sous" : ""}" data-code="${esc(l.code)}"><div>${bilingue(l.libelle, l.libelle_en)}<span class="m-code">${esc(l.code)}</span></div>
    <div class="m-poids" role="group" aria-label="Poids de ${esc(l.libelle)}">${[[0, "—"], [1, POIDS[1]], [2, POIDS[2]], [3, POIDS[3]]].map(([n, t]) =>
      `<button type="button" data-p="${n}" aria-pressed="${p === n}"${n ? "" : ' title="absent"'}>${esc(t)}</button>`).join("")}</div>
    ${p ? `<input class="m-rem" type="text" placeholder="Remarque (facultative)" aria-label="Remarque, visible sur la fiche entre parenthèses" value="${esc(v.remarque)}"><span class="m-aide">Visible sur la fiche, entre parenthèses</span>` : ""}</div>`;
}
// Abstrait coché (poids quelconque) : Période et Réalisme grisées, leurs choix ignorés à l'enregistrement
function griser(){
  const abstrait = !!TH.brouillon[ABSTRAIT];
  document.querySelectorAll("#t-choix details.t-facette").forEach(d => {
    const off = abstrait && FACETTES_TEMPS.includes(d.dataset.facette);
    d.classList.toggle("grise", off); d.querySelectorAll("button, input").forEach(x => x.disabled = off);
    const n = themesRanges(d.dataset.facette).filter(l => TH.brouillon[l.code]).length;
    d.querySelector("[data-nb]").textContent = n ? ` · ${n} choisi${n > 1 ? "s" : ""}` : "";
  });
}
function compterThemes(){
  const n = { 3:0, 2:0, 1:0 }, abstrait = !!TH.brouillon[ABSTRAIT];
  Object.entries(TH.brouillon).forEach(([c, v]) => { if (!(abstrait && FACETTES_TEMPS.includes(ligneTheme(c)?.facette))) n[v.poids]++; });
  $("#t-compteur").textContent = [3, 2, 1].map(p => `${n[p]} ${n[p] > 1 ? POIDS_PLURIEL[p] : POIDS[p]}`).join(" · ");
}
async function enregistrerThemes(){
  const avant = TH.affectes, apres = { ...TH.brouillon }, etat = $("#t-etat");
  // un jeu abstrait : les périodes et le réalisme sont retirés (supprimés en base s'il y en avait)
  if (apres[ABSTRAIT]) Object.keys(apres).forEach(c => { if (FACETTES_TEMPS.includes(ligneTheme(c)?.facette)) delete apres[c]; });
  // l'horodatage (modifie_le, modifie_par) est tenu par la base
  const majs = Object.entries(apres).filter(([c, v]) => !avant[c] || avant[c].poids !== v.poids || avant[c].remarque.trim() !== v.remarque.trim())
    .map(([c, v]) => ({ jeu:TH.jeu, theme:c, poids:v.poids, remarque: v.remarque.trim() || null }));
  const sup = Object.keys(avant).filter(c => !apres[c]);
  if (!majs.length && !sup.length){ TH.brouillon = null; dialogueThemes().close(); return; }
  $("#t-enregistrer").disabled = true; etat.className = "m-etat discret"; etat.textContent = "Enregistrement…";
  const r1 = majs.length ? await sb.from("prisme_jeux_themes").upsert(majs, { onConflict:"jeu,theme" }) : {};
  const r2 = !r1.error && sup.length ? await sb.from("prisme_jeux_themes").delete().eq("jeu", TH.jeu).in("theme", sup) : {};
  const err = r1.error || r2.error;
  if (err){ $("#t-enregistrer").disabled = false; etat.className = "m-etat err"; etat.textContent = "Rien n'a pu être enregistré : " + err.message; return; }
  dialogueThemes().close();
  // relire la base : la page montre ce qui y est vraiment
  const e2 = await lireThemes(TH.jeu, TH.user, TH.role); TH.apres?.(e2);
}
