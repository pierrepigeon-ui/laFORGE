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
   (sommaire()), la liste complète des paliers d'un axe (listePaliers()) ; le Système en deux engrenages ; le sablier parmi les objets manipulés.
   (1.5, 05/11/2026) les sélecteurs lisibles : dans la teinte de leur notion (lavande, bleu), une carte repliable par facette ou par niveau,
   avec sa phrase d'aide ; plus de codes visibles (info-bulle) ; « Jeu abstrait (aucun thème) » en tête ; le sujet en familles pesées,
   les sous-sujets en simples coches (poids 2) ; « Niveau de réalisme » ; le matériel ne se saisit plus que dans « Décrire le jeu ».
   (1.6, 06/11/2026) le sélecteur des mécaniques : « Les plus courants » en tête (les 15 mécanismes et combinaisons les plus affectés,
   comptés en direct), des sous-groupes par famille d'origine dans « Mécanisme », les lignes en ordre alphabétique partout.
   (1.7, 08/11/2026) les info-bulles des sélecteurs : définition, exemples et nom anglais de chaque mécanisme (définition des thèmes),
   au survol, au focus clavier et au toucher d'un « ⓘ » ; un seul gestionnaire pour toutes les info-bulles maison des pages (une seule ouverte,
   fermée quand la souris sort, quand le focus part, à Échap, au défilement, au toucher ailleurs).
   (1.8, 08/11/2026) le prix en douze tranches, quatre groupes de trois nommés (GROUPES_PRIX, textePrix()) ; le sommaire collant
   commence par le bandeau du jeu (vignette, nom, sous-fiche), toujours visible au défilement.
   (1.9, 09/11/2026) les libellés des catégories de mécaniques, définis ici seulement : « Hasard et information », « Parole et communication »,
   « Grands systèmes », et le nouveau niveau « Ordre du tour » (simple coche, à part sur la fiche comme la fin de partie) ; l'ordre des catégories
   dans le sélecteur ; les tags juste après le niveau de réalisme, actifs seulement en alternatif ou fantastique ; « Guerre » et ses échelles
   (precisionsSujet() : « Guerre (échelles opérationnelle et tactique) »), avec son aide dans le sélecteur. */
const SELECTEURS_VERSION = "1.9";
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
/* (1.8) le bandeau du jeu, en tête du sommaire : petite vignette, nom, sous-fiche */
.som-jeu{flex:none;display:flex;align-items:center;gap:8px;max-width:min(280px,45vw);padding-right:10px;border-right:1px solid var(--line)}
.som-jeu img,.som-jeu .som-vide{flex:none;width:28px;height:34px;border-radius:4px;object-fit:cover;background:var(--neutre)}
.som-jeu span{display:flex;flex-direction:column;min-width:0;line-height:1.2}
.som-jeu b{font:600 14px var(--serif);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.som-jeu small{font-size:11.5px;color:var(--muted)}
@media (max-width:599px){ .sommaire{position:static} }
/* (1.4) la liste complète des paliers d'un axe, à côté des trapèzes ; le palier choisi en évidence (une demi-valeur : ses deux voisins) */
.paliers{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:1px;flex:1 1 300px;min-width:0;max-width:600px}
.paliers button{display:flex;gap:10px;align-items:baseline;width:100%;text-align:left;border:0;background:none;padding:3px 8px;border-radius:6px;font:13px/1.4 var(--sans);color:var(--muted);cursor:pointer}
.paliers button b{flex:none;min-width:2.4em;font-weight:600;font-variant-numeric:tabular-nums;color:var(--ink)}
.paliers button:not(:disabled):hover{background:rgba(127,127,127,.12)}
.paliers button.choisi{background:#F3D9C9;color:var(--ink);font-weight:700} .paliers button.choisi b{font-weight:800}
@media (prefers-color-scheme: dark){ .paliers button.choisi{background:#5A3524} }
.paliers button:disabled{cursor:default}
/* (1.5) les sélecteurs : une carte repliable par facette ou par niveau, dans la teinte de la notion ; lignes aérées, filet léger, ligne choisie sur fond teinté */
details.sel-carte{border:1px solid var(--n-bord);border-radius:12px;margin:0 0 10px;background:var(--panel);overflow:hidden}
details.sel-carte > summary{list-style:none;cursor:pointer;padding:11px 14px;display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 10px;background:var(--n-fond)}
details.sel-carte > summary::-webkit-details-marker{display:none}
details.sel-carte > summary::after{content:"▸";margin-left:auto;color:var(--n-titre)} details.sel-carte[open] > summary::after{content:"▾"}
details.sel-carte > summary b{font:600 16px var(--sans);color:var(--n-titre)}
details.sel-carte .sel-aide{order:3;flex-basis:100%;font-size:13px;font-style:italic;color:var(--muted)}
details.sel-carte .m-ligne{padding:10px 14px;border-bottom:1px solid var(--filet, var(--line))}
details.sel-carte .m-ligne:last-child{border-bottom:0}
details.sel-carte .m-ligne.affecte{background:var(--n-fond)}
details.sel-carte h4.m-sg{margin:12px 14px 2px}
.m-ligne .m-nom{cursor:default}
.m-choix{border-top:0}
.sel-abstrait{display:flex;align-items:center;gap:10px;margin:0 0 10px;padding:10px 14px;border:1px solid var(--n-bord);border-radius:12px;background:var(--n-fond);font-weight:600;color:var(--n-titre);cursor:pointer}
.sel-abstrait input{width:18px;height:18px;margin:0;cursor:pointer}
.t-famille{border-bottom:1px solid var(--filet, var(--line))} .t-famille:last-child{border-bottom:0}
.t-famille > .m-ligne{border-bottom:0!important}
.t-sous-cases{display:flex;flex-wrap:wrap;gap:4px 18px;padding:0 14px 12px 36px}
.t-sous-case{display:flex;align-items:center;gap:7px;min-height:30px;font-size:14px;cursor:pointer}
.t-sous-case input{width:17px;height:17px;margin:0;cursor:pointer}
.t-sous-case:has(input:checked){font-weight:600}
.t-aide-fam{margin:-4px 14px 8px 36px;font-size:13px;font-style:italic;color:var(--muted)}   /* (1.9) l'aide sous une famille de sujet (Guerre) */
/* (1.7) les info-bulles des sélecteurs : un « ⓘ » à droite du nom ; la bulle, placée par le script sous la ligne (au-dessus faute de place),
   ne s'affiche que quand le gestionnaire l'ouvre (classe bulle-ouverte) */
.m-i{display:inline-block;margin-left:6px;padding:0 2px;color:var(--accent);font-style:normal;font-weight:400;cursor:help;border-radius:4px}
.t-sous-hote{display:inline-flex;align-items:center}
.info > .bulle.bulle-sel{position:fixed;left:0;top:0;z-index:60;background:var(--ink);color:var(--panel);font:400 12.5px/1.45 var(--sans);font-style:normal;padding:7px 10px;border-radius:8px;width:max-content;max-width:min(360px,86vw);white-space:normal;text-align:left;box-shadow:0 4px 14px rgba(0,0,0,.15)}
.info:not(.bulle-ouverte) > .bulle.bulle-sel{display:none!important}
.info.bulle-ouverte > .bulle.bulle-sel{display:block!important}`;
  document.head.appendChild(st);
})();

/* ---- (1.7) les info-bulles maison, pour toutes les pages qui chargent ce fichier ----
   Un hôte est un élément .info (ou un trapèze .echelle button) qui contient une .bulle ; la page n'affiche que la bulle de l'hôte
   qui porte la classe « bulle-ouverte ». Une seule ouverte à la fois. Ouverture : survol à la souris, focus au clavier, toucher.
   Fermeture : la souris sort de l'hôte, le focus le quitte, Échap, la page (ou une liste) défile, un toucher ailleurs ou un second toucher. */
const BULLES = { ouverte:null, depuis:0, figee:false, x:0, y:0 };   // figee : après un défilement, rien ne s'ouvre avant que la souris bouge
const hoteBulle = el => { const h = el?.closest?.(".info, .echelle button"); return h && h.querySelector(".bulle") ? h : null; };
function fermerBulle(){ const h = BULLES.ouverte; BULLES.ouverte = null; h?.classList.remove("bulle-ouverte"); }
function ouvrirBulle(h, clavier = false){
  if (BULLES.ouverte === h) return;
  fermerBulle(); BULLES.ouverte = h; BULLES.depuis = clavier ? performance.now() : 0; h.classList.add("bulle-ouverte");
  // une bulle « fixe » (dans une liste qui défile) : sous l'hôte, au-dessus s'il n'y a pas la place, sans sortir de l'écran
  const b = h.querySelector(".bulle");
  if (getComputedStyle(b).position === "fixed"){
    const r = h.getBoundingClientRect(), m = 8, w = b.offsetWidth, ht = b.offsetHeight;
    const top = r.bottom + 6 + ht > innerHeight - m && r.top - ht - 6 >= m ? r.top - ht - 6 : r.bottom + 6;
    b.style.top = top + "px"; b.style.left = Math.max(m, Math.min(r.left, innerWidth - w - m)) + "px";
  }
}
// la souris : ouvre en entrant, ferme en sortant (passer de l'hôte à sa bulle, qui est dedans, ne ferme pas)
document.addEventListener("pointerover", e => { if (e.pointerType !== "mouse" || BULLES.figee) return; const h = hoteBulle(e.target); if (h) ouvrirBulle(h); });
// après un défilement, le navigateur signale l'élément arrivé sous la souris immobile : il ne s'ouvre qu'une fois la souris bougée
document.addEventListener("pointermove", e => { if (e.pointerType !== "mouse") return;
  if (BULLES.figee && (e.clientX !== BULLES.x || e.clientY !== BULLES.y)){ BULLES.figee = false; const h = hoteBulle(e.target); if (h) ouvrirBulle(h); }
  BULLES.x = e.clientX; BULLES.y = e.clientY; });
document.addEventListener("pointerout", e => { const h = BULLES.ouverte;
  if (e.pointerType === "mouse" && h && h.contains(e.target) && !h.contains(e.relatedTarget)) fermerBulle(); });
// le clavier : le focus visible ouvre (un clic, qui donne aussi le focus, n'ouvre rien de plus que le survol) ; le focus qui part ferme
document.addEventListener("focusin", e => { const h = hoteBulle(e.target); if (h && e.target.matches(":focus-visible")) ouvrirBulle(h, true); });
document.addEventListener("focusout", e => { const h = BULLES.ouverte; if (h && h.contains(e.target) && !h.contains(e.relatedTarget)) fermerBulle(); });
// Échap ferme d'abord la bulle (une fenêtre ouverte dessous reste ouverte : un second Échap la ferme)
document.addEventListener("keydown", e => { if (e.key === "Escape" && BULLES.ouverte){ e.preventDefault(); fermerBulle(); } }, true);
// le défilement, de la page ou d'une liste, ferme ; sauf dans l'instant qui suit une ouverture au clavier (le focus fait parfois défiler jusqu'à l'élément)
addEventListener("scroll", () => { if (BULLES.ouverte && performance.now() - BULLES.depuis <= 250) return; fermerBulle(); BULLES.figee = true; }, { capture:true, passive:true });
// le toucher : un toucher sur un hôte ouvre sa bulle, un second la ferme ; un toucher ailleurs ferme
document.addEventListener("pointerup", e => { if (e.pointerType === "mouse") return;
  const h = hoteBulle(e.target); if (!h || h === BULLES.ouverte) fermerBulle(); else ouvrirBulle(h); }, true);
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
// (1.9) l'ordre du sélecteur : mode de jeu, ordre du tour, fin de partie, mécanisme, hasard et information, grands systèmes, déroulement,
// parole et communication, mise en place, plateau et formes, gestes de base (le matériel se coche dans « Le contenu et le matériel »)
const NIVEAUX_MECA = { materiel:"Matériel", aspect:"Mode de jeu", ordre_tour:"Ordre du tour", fin_de_partie:"Fin de partie", mecanisme:"Mécanisme",
  hasard:"Hasard et information", assemblage:"Grands systèmes", structure:"Déroulement", parole:"Parole et communication", mise_en_place:"Mise en place",
  support:"Plateau et formes", geste:"Gestes de base", hors_modele:"Hors modèle" };
// (1.5) la phrase d'aide de chaque niveau, sous son titre dans le sélecteur
const AIDES_NIVEAUX = { geste:"Les actions élémentaires des joueurs : piocher, poser, payer…", mecanisme:"Les règles qui organisent les choix des joueurs.",
  hasard:"D'où vient l'incertitude que les joueurs ne maîtrisent pas : le hasard, et ce qu'ils ignorent (l'information cachée).",
  assemblage:"Des mécanismes qui forment ensemble un grand système reconnaissable.", ordre_tour:"Dans quel ordre les joueurs agissent.",
  aspect:"La forme de la partie : contre qui, en solo, dans la durée.", structure:"Comment s'enchaînent les tours, les manches, les phases.",
  fin_de_partie:"Ce qui déclenche la fin de la partie.", mise_en_place:"Ce qui change d'une partie à l'autre avant de commencer.",
  support:"La forme de l'espace de jeu.", parole:"La place que le jeu laisse à la parole et à la communication entre joueurs.", hors_modele:"Hors de la nomenclature PRISMEmechanics." };
// un nom et son anglais : « nom (name) », l'anglais en italique et en gris
const bilingue = (fr, en) => esc(fr) + (en ? ` <span class="en">(${esc(en)})</span>` : "");
// (1.7) l'info-bulle d'une ligne de sélecteur : la définition, les exemples s'il y en a, le nom anglais (et le code, en petit) ;
// le « ⓘ », à droite du nom, la rend atteignable au clavier et au toucher ; une ligne sans définition n'a ni « ⓘ » ni bulle
const iBulle = (nom, def, ex, en, code) => def ? `<span class="m-i" tabindex="0" role="button" aria-label="${esc(nom)} : ${esc(def)}${ex ? ` Exemples : ${esc(ex)}.` : ""}">ⓘ</span>`
  + `<span class="bulle bulle-sel" aria-hidden="true">${esc(def)}${ex ? `<br><b>Exemples :</b> ${esc(ex)}` : ""}${en || code ? `<br><i>${[en, code].filter(Boolean).map(esc).join(" · ")}</i>` : ""}</span>` : "";
// l'hôte de la bulle : avec une définition, la classe « info » ; sans, le code reste en info-bulle du navigateur
const hoteNom = (def, code) => def ? ` info"` : `" title="${esc(code)}"`;
const legendeDML = `<p class="legende"><span class="info" tabindex="0" aria-label="D déplacement : un composant change de zone (piocher, poser, payer). M modification : il change d'état sur place (lancer, retourner, incliner). L lecture : une règle lit la situation (majorité, série complète, fin de partie).">D déplacement · M modification · L lecture<span class="bulle" aria-hidden="true">D : un composant change de zone (piocher, poser, payer).<br>M : il change d'état sur place (lancer, retourner, incliner).<br>L : une règle lit la situation (majorité, série complète, fin de partie).</span></span></p>`;
// (2.3) simples coches : pour ces niveaux le poids n'a pas de sens ; cochée = une ligne de poids 2, sans remarque
const COCHE = ["materiel", "geste", "aspect", "ordre_tour", "fin_de_partie"];   // (1.9) l'ordre du tour aussi
const estCoche = l => COCHE.includes(l?.niveau);
// (2.5) la carte Mécanique : en tête la fin de partie (le mode de jeu est monté dans la carte d'identité) ; en bas, en petit, le matériel et les gestes
// (1.9) en tête, l'ordre du tour puis la fin de partie
const CARTE_TETE = [["ordre_tour", NIVEAUX_MECA.ordre_tour], ["fin_de_partie", NIVEAUX_MECA.fin_de_partie]], CARTE_BAS = [["materiel", "Matériel"], ["geste", "Gestes"]];
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
// (1.8) le prix en douze tranches : quatre groupes de trois, sans libellé par tranche, seul le groupe est nommé ;
// les montants sont dans prisme_reglages (prix_A_max … prix_K_max) ; L : au-delà de prix_K_max
const GROUPES_PRIX = [["sur un coup de tête", "ABC"], ["on vérifie le budget", "DEF"], ["les grandes occasions", "GHI"], ["les pièces de collection", "JKL"]];
const groupePrix = g => GROUPES_PRIX.find(([, L]) => L.includes(g || "?"))?.[0] || null;
// le montant d'une tranche ; reglages : { cle: valeur } ; court : « ≤ 200 € » / « > 800 € », sinon « jusqu'à 200 € » / « plus de 800 € »
function montantPrix(g, reglages, court = false){
  const v = reglages?.["prix_" + (g === "L" ? "K" : g) + "_max"];
  if (v == null || v === "" || Number.isNaN(Number(v))) return "";
  const e = String(Number(v)).replace(".", ",");
  return g === "L" ? `${court ? ">" : "plus de"} ${e} €` : `${court ? "≤" : "jusqu'à"} ${e} €`;
}
// la gamme en clair, la même partout : « G · jusqu'à 200 € · les grandes occasions »
const textePrix = (g, reglages) => g ? [g, montantPrix(g, reglages), groupePrix(g) || "gamme inconnue"].filter(Boolean).join(" · ") : "";
// le sommaire collant : el reçoit une pastille par cadre ({ id, nom, notion, ouvrir(cadre) facultatif }) et le bouton « ↑ Haut » ;
// (1.8) jeu ({ image, nom, sousFiche }), facultatif : le bandeau du jeu en tête, pour que son nom reste visible au défilement
const SOM = { el:null, cadres:[] };
const hauteurCollee = () => { const el = SOM.el; if (!el) return 0;
  const cs = getComputedStyle(el); return cs.position === "sticky" ? parseFloat(cs.top) + el.offsetHeight : parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ent-h")) || 0; };
function allerA(cadre){ scrollTo({ top: cadre.getBoundingClientRect().top + scrollY - hauteurCollee() - 10, behavior:"smooth" }); }
function sommaire(el, cadres, jeu){
  Object.assign(SOM, { el, cadres });
  el.classList.add("sommaire"); el.setAttribute("aria-label", "Sommaire de la page");
  const bandeau = jeu ? `<div class="som-jeu">${jeu.image ? `<img src="${esc(jeu.image)}" alt="" onerror="this.replaceWith(Object.assign(document.createElement('span'), { className:'som-vide' }))">` : `<span class="som-vide"></span>`}
    <span><b title="${esc(jeu.nom)}">${esc(jeu.nom)}</b>${jeu.sousFiche ? `<small>${esc(jeu.sousFiche)}</small>` : ""}</span></div>` : "";
  el.innerHTML = bandeau + `<div class="som-pastilles">${cadres.map(c => `<a href="#${esc(c.id)}" class="som-p notion-${NOTIONS[c.notion] || "neutre"}" data-som="${esc(c.id)}">${esc(c.nom)}</a>`).join("")}</div>
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
  const [l, a, rq, fr] = await Promise.all([
    sb.from("prisme_mecanismes").select("code,nom,nom_en,niveau,sous_groupe,categorie,statut,fusion_vers,famille_recolte,ordre,definition,exemples").order("ordre"),   // (1.7) les exemples, pour l'info-bulle
    sb.from("prisme_jeux_mecanismes").select("mecanisme,poids,remarque").eq("jeu", code),
    sb.from("prisme_mecanismes_requis").select("mecanisme,requis"),
    M.ecrit ? frequencesMecanismes() : {}]);
  if (l.error || a.error) return (l.error || a.error).message;
  M.frequences = fr;
  M.lignes = l.data || [];
  // sans les requis, le sélecteur propose tout (comme « Tout afficher »)
  if (rq.error) console.warn("PRISME : requis des mécanismes illisibles, le sélecteur propose toutes les lignes", rq.error.message);
  M.requis = {}; (rq.data || []).forEach(r => (M.requis[r.mecanisme] ||= []).push(r.requis));
  M.affectes = Object.fromEntries((a.data || []).map(x => [x.mecanisme, { poids:x.poids, remarque:x.remarque || "" }]));
  return null;
}
// (1.6) combien de jeux ont chaque mécanisme, compté en direct dans prisme_jeux_mecanismes (lu par pages de 1000) ; {} si illisible
async function frequencesMecanismes(){
  const N = {};
  try {
    for (let debut = 0; ; debut += 1000){
      const { data, error } = await sb.from("prisme_jeux_mecanismes").select("jeu,mecanisme").order("jeu").order("mecanisme").range(debut, debut + 999);
      if (error) throw error;
      data.forEach(x => N[x.mecanisme] = (N[x.mecanisme] || 0) + 1);
      if (data.length < 1000) return N;
    }
  } catch (e){ console.warn("PRISME : fréquence des mécanismes illisible, pas de groupe « Les plus courants »", e.message); return {}; }
}
// (1.6) l'ordre alphabétique du nom français, sans tenir compte des accents ni de la casse
const alphaMeca = (a, b) => String(a.nom || "").localeCompare(String(b.nom || ""), "fr", { sensitivity:"base" });
// (1.6) les sous-groupes de « Mécanisme » : par famille d'origine (famille_recolte), dans l'ordre alphabétique ; sans famille, « Autres », en dernier
const parFamilleRecolte = L => { const F = [...new Set(L.map(l => l.famille_recolte).filter(Boolean))].sort((a, b) => a.localeCompare(b, "fr", { sensitivity:"base" }));
  return [...F.map(f => [f, L.filter(l => l.famille_recolte === f)]), ["Autres", L.filter(l => !l.famille_recolte)]].filter(([, G]) => G.length); };
const COURANTS = 15;
const aideMeca = `<p class="question">Ce dont le jeu est fait, selon la nomenclature PRISMEmechanics. Le matériel, les gestes, le mode de jeu, l'ordre du tour et la fin de partie se cochent ; le reste se pèse : majeur (le jeu repose dessus), secondaire, marginal.</p>`;
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
  // (1.5) le matériel ne se saisit plus ici, mais dans « Le contenu et le matériel » (decrire.html) ; l'entonnoir s'appuie toujours sur ce qui y est coché.
  // Les niveaux, dans l'ordre des libellés ; un niveau inconnu va en fin de liste
  const ordre = [...Object.keys(NIVEAUX_MECA), ...new Set(proposees.map(l => l.niveau).filter(n => n && !(n in NIVEAUX_MECA)))]
    .filter(n => n !== "materiel" && proposees.some(l => l.niveau === n));
  const niveaux = Object.fromEntries(ordre.map(n => [n, NIVEAUX_MECA[n] || n]));
  const familles = [...new Set(proposees.map(l => l.famille_recolte).filter(Boolean))].sort((a, b) => a.localeCompare(b, "fr"));
  dialogue().classList.add("notion-bleu");   // (1.5) la teinte des mécaniques
  $("#m-dialogue-corps").innerHTML = `<h2 id="m-dialogue-titre">Mécanismes</h2>
    <input type="search" class="m-recherche" id="m-q" placeholder="Chercher un mécanisme…" aria-label="Chercher un mécanisme">
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
  // (1.6) les plus courants : les 15 mécanismes et grands systèmes les plus affectés, du plus au moins fréquent ; ils restent aussi dans leur catégorie
  const F = M.frequences || {};
  const courants = proposees.filter(l => (l.niveau === "mecanisme" || l.niveau === "assemblage") && F[l.code]).sort((a, b) => F[b.code] - F[a.code] || alphaMeca(a, b)).slice(0, COURANTS);
  ouverts.add("courants");   // la carte des plus courants est dépliée par défaut
  const lister = () => {
    const q = norm($("#m-q").value.trim()), niv = $("#m-niv").value, fam = $("#m-fam").value, seuls = $("#m-seuls").checked, tout = $("#m-tout").checked;
    const acquis = acquisDe(M.brouillon);
    const garde = l => (!q || norm(l.code + " " + l.nom + " " + (l.nom_en || "")).includes(q)) && (!fam || l.famille_recolte === fam) && (!seuls || M.brouillon[l.code]);
    let masques = 0;
    // (1.5) une carte par niveau, sa phrase d'aide sous le titre ; une ligne affectée reste toujours visible
    const visible = l => tout || M.brouillon[l.code] || !requisManquants(l.code, acquis).length;
    // (1.6) en tête, « Les plus courants » (sans filtre de niveau)
    const C = niv ? [] : courants.filter(l => garde(l) && visible(l));
    const tete = C.length ? `<details class="t-facette sel-carte" data-niveau="courants"${q || seuls || ouverts.has("courants") ? " open" : ""}><summary><b>Les plus courants</b> <span class="discret">${C.length} mécanisme${C.length > 1 ? "s" : ""}</span><span class="sel-aide">Les mécanismes et grands systèmes les plus souvent affectés aux jeux de PRISME ; ils restent aussi à leur place, plus bas.</span></summary>${C.map(l => ligneChoix(l, acquis)).join("")}</details>` : "";
    const groupes = tete + ordre.filter(n => !niv || n === niv).map(n => {
      const tous = proposees.filter(l => l.niveau === n), L = tous.filter(garde).sort(alphaMeca);   // (1.6) en ordre alphabétique
      const vis = L.filter(l => tout || M.brouillon[l.code] || !requisManquants(l.code, acquis).length);
      masques += L.length - vis.length;
      if (!vis.length) return "";
      const nb = tous.filter(l => M.brouillon[l.code]).length;
      return `<details class="t-facette sel-carte" data-niveau="${esc(n)}"${q || seuls || ouverts.has(n) ? " open" : ""}><summary><b>${esc(niveaux[n])}</b> <span class="discret">${vis.length} proposé${vis.length > 1 ? "s" : ""}${nb ? ` · ${nb} choisi${nb > 1 ? "s" : ""}` : ""}</span>${AIDES_NIVEAUX[n] ? `<span class="sel-aide">${esc(AIDES_NIVEAUX[n])}</span>` : ""}</summary>${n === "aspect"
        ? parSousGroupe(vis).map(([t, G]) => `<h4 class="m-sg">${esc(t)}</h4>${G.map(l => ligneChoix(l, acquis)).join("")}`).join("")
        : n === "mecanisme" ? parFamilleRecolte(vis).map(([t, G]) => `<h4 class="m-sg">${esc(t)}</h4>${G.map(l => ligneChoix(l, acquis)).join("")}`).join("")   // (1.6) sous-groupes
        : vis.map(l => ligneChoix(l, acquis)).join("")}</details>`;
    }).join("");
    $("#m-choix").innerHTML = groupes || `<p class="discret">Aucun mécanisme ne correspond à ces filtres.</p>`;
    $("#m-masques").textContent = masques ? `${masques} ligne${masques > 1 ? "s" : ""} masquée${masques > 1 ? "s" : ""} : ${masques > 1 ? "elles supposent" : "elle suppose"} un matériel (à cocher dans « Le contenu et le matériel ») ou un mécanisme non coché (« tout afficher » pour les voir).` : "";
  };
  $("#m-choix").addEventListener("toggle", e => { if (e.target.matches?.("details")) e.target.open ? ouverts.add(e.target.dataset.niveau) : ouverts.delete(e.target.dataset.niveau); }, true);
  ["#m-q", "#m-niv", "#m-fam", "#m-seuls", "#m-tout"].forEach(s => $(s).addEventListener("input", lister));
  $("#m-choix").addEventListener("click", e => {
    const b = e.target.closest("[data-p], [data-coche]"); if (!b) return;
    const c = b.closest(".m-ligne").dataset.code, coche = b.matches("[data-coche]"), p = coche ? (b.checked ? 2 : 0) : +b.dataset.p;
    if (p) M.brouillon[c] = { poids:p, remarque: coche ? "" : M.brouillon[c]?.remarque || "" }; else delete M.brouillon[c];
    // un choix peut faire apparaître ou disparaître des lignes : on redessine, sans perdre la place ni le focus
    // (1.6) une ligne peut figurer deux fois (« Les plus courants » et sa catégorie) : le focus revient dans la carte cliquée
    const boite = $("#m-choix"), haut = boite.scrollTop, carte = b.closest("details")?.dataset.niveau;
    lister(); compter(); boite.scrollTop = haut;
    boite.querySelector(`${carte ? `details[data-niveau="${CSS.escape(carte)}"] ` : ""}.m-ligne[data-code="${CSS.escape(c)}"] ${coche ? "[data-coche]" : `[data-p="${p}"]`}`)?.focus({ preventScroll:true });
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
  // (1.5) ni code ni badge de niveau (la carte le dit) : le code reste en info-bulle
  // (1.7) la définition, les exemples et le nom anglais en info-bulle, avec un « ⓘ » à droite du nom
  const nom = `<div class="m-nom${hoteNom(l.definition, l.code)}>${prof ? "↳ " : ""}${l.niveau === "materiel" ? picto(l.code, 20) : ""}${bilingue(l.nom, l.nom_en)}${iBulle(l.nom, l.definition, l.exemples, l.nom_en, l.code)}${manque.length ? `<span class="m-manque">suppose : ${esc(manque.join(", "))} (non coché)</span>` : ""}</div>`;
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
  Object.entries(M.brouillon).forEach(([c, v]) => { const l = ligneMeca(c); if (l?.niveau === "materiel") return;   // (1.5) le matériel se compte dans « Décrire le jeu »
    estCoche(l) ? coches++ : n[v.poids]++; });
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
// (1.5) la facette realisme s'intitule « Niveau de réalisme » ; (1.9) les tags la suivent immédiatement
const FACETTES = { sujet:"Sujet", cadre:"Cadre", periode:"Période", realisme:"Niveau de réalisme", tag:"Tags du fantastique", role:"Le joueur incarne", lieu:"Lieu", ton:"Atmosphère", reference:"Référence culturelle et géographique" };
// (1.5) la phrase d'aide de chaque facette, sous son titre dans le sélecteur
const AIDES_FACETTES = { sujet:"De quoi parle le jeu : une famille porte le poids, ses sous-sujets la précisent.", cadre:"Le monde dans lequel le jeu se déroule.",
  periode:"L'époque évoquée.", realisme:"À quel point ce monde ressemble au nôtre.", role:"Qui ou quoi le joueur incarne.", lieu:"Où se passe le jeu.",
  ton:"L'atmosphère de la partie.", tag:"Les motifs du fantastique présents dans le jeu.", reference:"La culture ou la région dont le jeu s'inspire." };
// (1.5) le sujet en familles : la famille (sans parent) porte le poids ; un sous-sujet est une simple coche, enregistrée en poids 2
const estSousSujet = l => l?.facette === "sujet" && !!l.parent;
const sousSujetsDe = c => TH.lignes.filter(l => l.parent === c);
const FACETTES_CARTE = ["sujet", "role", "ton", "lieu", "tag", "reference"];   // (2.5) sous le titre ; le sujet n'y garde que ses valeurs non majeures
const ABSTRAIT = "CAD-ABSTRAIT", FACETTES_TEMPS = ["periode", "realisme"];   // un jeu abstrait n'a ni période ni réalisme
// (1.9) les tags ne valent que pour un monde alternatif ou fantastique : grisés sinon, et leurs choix retirés à l'enregistrement
const REALISMES_TAGS = ["REA-ALTERE", "REA-FANTASTIQUE"];
const tagsActifs = choisis => !choisis[ABSTRAIT] && REALISMES_TAGS.some(c => choisis[c]);
const facetteIgnoree = (f, choisis) => (!!choisis[ABSTRAIT] && FACETTES_TEMPS.includes(f)) || (f === "tag" && !tagsActifs(choisis));
// (1.9) « Guerre » (SUJ-CONFLIT) : ses sous-sujets sont des échelles, accordées avec le mot (« échelles opérationnelle et tactique »)
const GUERRE = "SUJ-CONFLIT", AIDE_GUERRE = "Choisis l'échelle du conflit : de la grande stratégie (des empires) à la subtactique (quelques combattants).";
const ECHELLES = { "SUJ-CONFLIT-GRANDE-STRATEGIE":"de grande stratégie", "SUJ-CONFLIT-OPERATIONNEL":"opérationnelle" };
const enListe = L => L.length > 1 ? L.slice(0, -1).join(", ") + " et " + L.at(-1) : L.join("");
const minusInit = t => t.charAt(0).toLowerCase() + t.slice(1);
// les précisions d'une famille de sujet, d'après ses sous-sujets cochés (affectes : { code: { remarque } }) ; une remarque ancienne posée
// sur un sous-sujet le suit : « Construction (aménager, terraformer : son manoir) » ; Guerre : « (échelle tactique) » ; rien sans sous-sujet
function precisionsSujet(l, affectes){
  const S = TH.lignes.filter(s => s.parent === l.code && affectes[s.code]); if (!S.length) return "";
  const rem = s => affectes[s.code].remarque ? " : " + affectes[s.code].remarque : "";
  if (l.code === GUERRE) return ` (échelle${S.length > 1 ? "s" : ""} ${enListe(S.map(s => (ECHELLES[s.code] || minusInit(s.libelle)) + rem(s)))})`;
  return ` (${S.map(s => minusInit(s.libelle) + rem(s)).join(", ")})`;
}
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
  dialogueThemes().classList.add("notion-lavande");   // (1.5) la teinte des thèmes
  TH.brouillon = Object.fromEntries(Object.entries(TH.affectes).map(([c, v]) => [c, { ...v }]));
  $("#t-dialogue-corps").innerHTML = `<h2 id="t-dialogue-titre">Thèmes</h2>
    <p class="question">Décrire de quoi parle le jeu, pas le juger : la qualité du thème se note dans l'évaluation (axe THÈME).</p>
    <p class="m-compteur" id="t-compteur"></p>
    <label class="sel-abstrait"><input type="checkbox" id="t-abstrait"${TH.brouillon[ABSTRAIT] ? " checked" : ""}> Jeu abstrait (aucun thème)</label>
    <div class="m-filtres"><input type="search" id="t-q" placeholder="Chercher un thème" aria-label="Chercher un thème">
      <label><input type="checkbox" id="t-seuls"> n'afficher que les thèmes affectés</label></div>
    <div class="m-choix" id="t-choix"></div>
    <p class="m-actions"><button class="btn plein" type="button" id="t-enregistrer">Enregistrer</button><button class="btn" type="button" id="t-annuler">Annuler</button><span class="m-etat" id="t-etat"></span></p>`;
  const ouverts = new Set(Object.keys(TH.affectes).map(c => ligneTheme(c)?.facette));
  const lister = () => {
    const q = norm($("#t-q").value.trim()), seuls = $("#t-seuls").checked;
    const trouve = l => !q || norm(l.code + " " + l.libelle + " " + (l.libelle_en || "")).includes(q);
    $("#t-choix").innerHTML = Object.entries(FACETTES).map(([f, nom]) => {
      // « Abstrait » est la case du haut, plus une ligne du cadre
      const tous = themesRanges(f).filter(l => l.code !== ABSTRAIT);
      let corps = "";
      if (f === "sujet"){
        // (1.5) une petite carte par famille : ses boutons de poids, puis ses sous-sujets en cases, visibles quand la famille a un poids
        corps = tous.filter(l => !l.parent).map(fam => {
          const S = sousSujetsDe(fam.code), choisie = !!TH.brouillon[fam.code];
          if (!(trouve(fam) || S.some(trouve)) || (seuls && !choisie && !S.some(s => TH.brouillon[s.code]))) return "";
          const vus = S.filter(s => TH.brouillon[s.code] || (choisie && (trouve(fam) || trouve(s))) || (q && trouve(s)));
          // (1.9) Guerre : l'aide sur les échelles, sous la famille
          return `<div class="t-famille">${ligneChoixTheme(fam)}${fam.code === GUERRE ? `<p class="t-aide-fam">${esc(AIDE_GUERRE)}</p>` : ""}${vus.length ? `<div class="t-sous-cases" role="group" aria-label="Sous-sujets de ${esc(fam.libelle)}">${vus.map(s =>
            // (1.7) la définition en info-bulle, le « ⓘ » hors de l'étiquette (le toucher ne coche pas la case)
            `<span class="t-sous-hote${hoteNom(s.definition, s.code)}><label class="t-sous-case"><input type="checkbox" data-sous="${esc(s.code)}"${TH.brouillon[s.code] ? " checked" : ""}> ${bilingue(s.libelle, s.libelle_en)}</label>${iBulle(s.libelle, s.definition, null, s.libelle_en, s.code)}</span>`).join("")}</div>` : ""}</div>`;
        }).join("");
      } else corps = tous.filter(l => trouve(l) && (!seuls || TH.brouillon[l.code])).map(ligneChoixTheme).join("");
      if (!corps) return "";
      const nbValeurs = f === "sujet" ? tous.filter(l => !l.parent).length : tous.length;
      return `<details class="t-facette sel-carte" data-facette="${f}"${q || seuls || ouverts.has(f) ? " open" : ""}><summary><b>${esc(nom)}</b> <span class="discret">${nbValeurs} ${f === "sujet" ? "famille" : "valeur"}${nbValeurs > 1 ? "s" : ""}<span data-nb></span></span><span class="t-ignore discret"> · ${f === "tag" ? "seulement pour un monde alternatif ou fantastique" : "ignoré : le jeu est abstrait"}</span>${AIDES_FACETTES[f] ? `<span class="sel-aide">${esc(AIDES_FACETTES[f])}</span>` : ""}</summary>${corps}</details>`;
    }).join("") || `<p class="discret">Aucun thème ne correspond à cette recherche.</p>`;
    griser();
  };
  // redessiner sans perdre la place ni le focus
  const relister = selecteur => { const boite = $("#t-choix"), haut = boite.scrollTop; lister(); compterThemes(); boite.scrollTop = haut; if (selecteur) boite.querySelector(selecteur)?.focus(); };
  $("#t-choix").addEventListener("toggle", e => { if (e.target.matches?.("details")) e.target.open ? ouverts.add(e.target.dataset.facette) : ouverts.delete(e.target.dataset.facette); }, true);
  ["#t-q", "#t-seuls"].forEach(s => $(s).addEventListener("input", lister));
  // (1.5) « Jeu abstrait » : grise la période et le niveau de réalisme (leurs choix sont retirés à l'enregistrement)
  $("#t-abstrait").addEventListener("change", e => { if (e.target.checked) TH.brouillon[ABSTRAIT] = { poids: TH.brouillon[ABSTRAIT]?.poids || 3, remarque:"" }; else delete TH.brouillon[ABSTRAIT]; relister(); });
  $("#t-choix").addEventListener("click", e => {
    const b = e.target.closest("[data-p]"); if (!b) return;
    const c = b.closest(".m-ligne").dataset.code, p = +b.dataset.p;
    if (p) TH.brouillon[c] = { poids:p, remarque: TH.brouillon[c]?.remarque || "" };
    else { delete TH.brouillon[c]; sousSujetsDe(c).forEach(s => delete TH.brouillon[s.code]); }   // une famille retirée emporte ses sous-sujets
    relister(`.m-ligne[data-code="${CSS.escape(c)}"] [data-p="${p}"]`);
  });
  $("#t-choix").addEventListener("change", e => {
    const x = e.target.closest("[data-sous]"); if (!x) return;
    const s = ligneTheme(x.dataset.sous);
    // cocher un sous-sujet sans sa famille donne d'office la famille en « secondaire »
    if (x.checked){ TH.brouillon[s.code] = { poids:2, remarque: TH.affectes[s.code]?.remarque || "" }; if (!TH.brouillon[s.parent]) TH.brouillon[s.parent] = { poids:2, remarque:"" }; }
    else delete TH.brouillon[s.code];
    relister(`[data-sous="${CSS.escape(s.code)}"]`);
  });
  $("#t-choix").addEventListener("input", e => { if (e.target.matches(".m-rem")) TH.brouillon[e.target.closest(".m-ligne").dataset.code].remarque = e.target.value; });
  $("#t-annuler").addEventListener("click", () => { TH.brouillon = null; dialogueThemes().close(); });
  $("#t-enregistrer").addEventListener("click", enregistrerThemes);
  lister(); compterThemes();
  dialogueThemes().showModal();
}
function ligneChoixTheme(l){
  const v = TH.brouillon[l.code], p = v?.poids || 0;
  // (1.5) le code n'est plus affiché : il reste en info-bulle ; (1.7) la définition aussi, avec un « ⓘ » à droite du nom
  return `<div class="m-ligne${p ? " affecte" : ""}" data-code="${esc(l.code)}"><div class="m-nom${hoteNom(l.definition, l.code)}>${bilingue(l.libelle, l.libelle_en)}${iBulle(l.libelle, l.definition, null, l.libelle_en, l.code)}</div>
    <div class="m-poids" role="group" aria-label="Poids de ${esc(l.libelle)}">${[[0, "—"], [1, POIDS[1]], [2, POIDS[2]], [3, POIDS[3]]].map(([n, t]) =>
      `<button type="button" data-p="${n}" aria-pressed="${p === n}"${n ? "" : ' title="absent"'}>${esc(t)}</button>`).join("")}</div>
    ${p ? `<input class="m-rem" type="text" placeholder="Remarque (facultative)" aria-label="Remarque, visible sur la fiche entre parenthèses" value="${esc(v.remarque)}"><span class="m-aide">Visible sur la fiche, entre parenthèses</span>` : ""}</div>`;
}
// Abstrait coché (poids quelconque) : Période et Réalisme grisées, leurs choix ignorés à l'enregistrement ;
// (1.9) les tags grisés tant que ni « Alternatif » ni « Fantastique » n'est choisi
function griser(){
  document.querySelectorAll("#t-choix details.t-facette").forEach(d => {
    const off = facetteIgnoree(d.dataset.facette, TH.brouillon);
    d.classList.toggle("grise", off); d.querySelectorAll("button, input").forEach(x => x.disabled = off);
    // (1.5) le sujet compte ses familles ; Abstrait n'est plus compté dans le cadre (c'est la case du haut)
    const n = themesRanges(d.dataset.facette).filter(l => TH.brouillon[l.code] && l.code !== ABSTRAIT && !estSousSujet(l)).length;
    d.querySelector("[data-nb]").textContent = n ? ` · ${n} choisi${n > 1 ? "s" : ""}` : "";
  });
}
function compterThemes(){
  const n = { 3:0, 2:0, 1:0 }, abstrait = !!TH.brouillon[ABSTRAIT]; let sous = 0;
  Object.entries(TH.brouillon).forEach(([c, v]) => { const l = ligneTheme(c);
    if (c === ABSTRAIT || facetteIgnoree(l?.facette, TH.brouillon)) return;
    if (estSousSujet(l)) sous++; else n[v.poids]++; });
  $("#t-compteur").textContent = (abstrait ? "Jeu abstrait · " : "") + [3, 2, 1].map(p => `${n[p]} ${n[p] > 1 ? POIDS_PLURIEL[p] : POIDS[p]}`).join(" · ")
    + (sous ? ` · ${sous} sous-sujet${sous > 1 ? "s" : ""}` : "");
}
async function enregistrerThemes(){
  const avant = TH.affectes, apres = { ...TH.brouillon }, etat = $("#t-etat");
  // un jeu abstrait : les périodes et le réalisme sont retirés (supprimés en base s'il y en avait) ;
  // (1.9) sans « Alternatif » ni « Fantastique », les tags aussi
  Object.keys(apres).forEach(c => { if (facetteIgnoree(ligneTheme(c)?.facette, TH.brouillon)) delete apres[c]; });
  // (1.5) un sous-sujet ne fait que préciser : poids 2 (une remarque déjà saisie est gardée) ; sa famille est toujours enregistrée avec lui
  Object.keys(apres).forEach(c => { const l = ligneTheme(c); if (!estSousSujet(l)) return;
    apres[c] = { poids:2, remarque: apres[c].remarque || "" }; if (!apres[l.parent]) apres[l.parent] = { poids:2, remarque:"" }; });
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
