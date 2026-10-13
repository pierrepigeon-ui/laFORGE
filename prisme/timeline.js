/* PRISME — timeline du jeu : jalons, durées, flow, α β γ ω, durée de vie.
   Module partagé par l'encyclopédie et l'outil d'évaluation. Méthode arrêtée le 08/10/2026 (jeu d'essai : Heat) ; modèle à 12 paires le 11/10/2026 ;
   formules refaites phase par phase le 12/10/2026 avec trois jeux de référence (Gloomhaven, Heat, Flip 7). L'unité est la session. */
const TIMELINE_VERSION = { numero:"3.3", date:"2026-10-13 17:00" };   // à incrémenter à chaque livraison

const JALONS = [
  { n:0, nom:"identifié", quoi:"Le jeu est connu de loin : critique, vitrine, recommandation." },
  { n:1, nom:"ouvert", quoi:"La boîte est ouverte : on découvre le matériel et les règles." },
  { n:2, nom:"jouable", quoi:"La mise en place est faite, les règles sont lues : on peut lancer la partie." },
  { n:3, nom:"compris", quoi:"Une première partie a eu lieu, même hésitante." },
  { n:4, nom:"maîtrisé", quoi:"Les règles sont intégrées, la partie est fluide." },
  { n:5, nom:"exploré", quoi:"Les stratégies principales sont connues et utilisées." },
  { n:6, nom:"révélé", quoi:"Tout le contenu a été vu : modules, cartes, scénarios." },
  { n:7, nom:"archivé", quoi:"Le jeu entre en routine : classique régulier ou souvenir qui s'efface." }
];
const SOUSPHASES = [
  { nom:"Préparation", de:0, phase:"I", quoi:"La promesse du jeu : on se projette, on l'achète, on l'emprunte.", duree:"palier de prix / 4 (prix de la fiche : 0 sous 20 €, puis 20, 40, 70, 120, 200 €)" },
  { nom:"Accès", de:1, phase:"I", quoi:"La porte d'entrée pratique : boîte, matériel, organisation des règles.", duree:"(POID1 + MAN1) / 5" },
  { nom:"Premiers pas", de:2, phase:"II", quoi:"La première mise en mouvement, avec des allers-retours au livret.", duree:"1 + T / 10, T = 0,6 × POID1 × (1 − DOC2 / 4)" },
  { nom:"Expérimentations", de:3, phase:"II", quoi:"On rejoue, on apprend en jouant : le jeu devient intelligible.", duree:"2^(moy(POID1, EXIG1, VAR1, T, 5 − ART2b) − 1)" },
  { nom:"Rôdage", de:4, phase:"III", quoi:"La pratique standard : on ne lutte plus contre les règles.", duree:"2^(moy(PROF, EXIG1, POID1) − 1)" },
  { nom:"Aguerrissement", de:5, phase:"III", quoi:"La mise à l'épreuve : plans avancés, contre-stratégies, finesses.", duree:"2^(moy(PROF, EXIG, VAR1) + 0,1 − 1) ; le 0,1 est un bonus de confrontation" },
  { nom:"Habitude", de:6, phase:"IV", quoi:"Le jeu est pleinement connu et tourne à vitesse de croisière.", duree:"2^(moy(VAR, MAN2) − 1)" },
  { nom:"Souvenir", de:7, phase:"IV", quoi:"La vie longue : pilier du répertoire, ou jeu rangé qu'on ressort par nostalgie.", duree:"sans fin : la courbe se prolonge en pointillés jusqu'au plancher de nostalgie" }
];
const PHASES = { I:"Entrée", II:"Apprentissage", III:"Maîtrise et profondeur", IV:"Maturité" };
// coefficient de projection : avant la première session, le joueur se projette dans le jeu au lieu de le vivre (jalons 0 à 7)
const R_REGIME = [0, .6, .8, 1, 1, 1, 1, 1];
const ESTOMPE = .95;          // à partir du jalon 4, VAR perd 5 % par session ; la charge (POID1, MAN1) monte sur la même courbe
const K_FRICTION = 3;         // F = √(somme des carrés / 3) : chaque gêne ajoutée fait monter F
const TERMES = {
  1:{ s:"MAT, ART2a, promesse = max(THEM1, RYT1, MAN2)", f:"POID1, 5 − ART2b" },
  2:{ s:"MAT, ART2a, promesse, SYS", f:"0,75 × POID1, 0,75 × (5 − ART2b), M / 2 (M = MAN1 × L)" },
  3:{ s:"SYS, PROF, MECA2, VAR × 2, EXP sans parole, EDI sans documentation", f:"apprentissage, 5 − ART2b, manipulation au-delà de l'attendu" },
  4:{ s:"SYS, PROF × 2, MECA2, VAR × 2, EXIG × 2, EXP, EDI", f:"apprentissage, 5 − ART2b, 5 − MAN2" },
  5:{ s:"MECA, EXIG, THEM, LIEN, MAT, VAR estompé", f:"POID1 × g, MAN1 × g, 5 − VAR, (5 − ART2b) / 2" },
  6:{ s:"les termes du jalon 5 (l'horloge avance)", f:"les termes du jalon 5" },
  7:{ s:"les termes du jalon 5 (l'horloge avance)", f:"les termes du jalon 5" }
};
// notes utilisées : axes (avec chiffre) et notes retenues de paires (sans chiffre)
// LIEN (sans chiffre) est la note de la paire ; VAL1 (palier de prix) vient du prix de la fiche, pas d'un axe
const TIMELINE_AXES = ["POID1","POID2","PROF1","VAR1","MECA1a","MECA2","EXIG1","EXIG2","RYT1","RYT2","MAN1","MAN2","THEM1","THEM2b","LIEN1","LIEN1b","LIEN1c","LIEN2a","LIEN2b","MAT1","ART1","ART2a","ART2b","DOC1","DOC2"];
const TIMELINE_PAIRES = ["POID","PROF","VAR","EXIG","RYT","MAN","THEM","LIEN","MAT","ART","DOC"];   // MECA : sa note est MECA2
const PLANCHER_SEUIL = 3;     // marque = max(0, max(THEM, MECA) − 3) : seul un thème ou des mécaniques qui ont vraiment marqué laissent une nostalgie
const CLASSES_VIE = [[10, "éphémère"], [Infinity, "durable"]];   // une durée de vie infinie (le plancher n'est jamais atteint) : un classique

/* ---- les moteurs de PRISMEplayer vus par le jeu (revue du 08/10/2026, v2 du 10/10/2026) ----
   nourrit : paires dont la réussite compte pour ce moteur dans la rosace (surface « réussite » ; 2 = ++, 1 = +) ; trait : à quel point le jeu est tourné vers ce moteur (axes 1, 0 à 5) ;
   rejet : le moteur fui gêne dès le jalon 1 (séance du 13/10/2026). Ce que chaque moteur change dans la timeline : courbeBrute et MOTEURS_TIMELINE. */
const MOTEURS_JEU = {
  U:{ nourrit:{ EXIG:2, PROF:2, POID:1, DOC:1, MECA:1 }, rejet:1, elan:null,
      trait:n => moyT(n.EXIG1, n.PROF1, n.POID1), traitTxt:"moy(EXIG1, PROF1, POID1)" },
  B:{ nourrit:{ LIEN:2, MECA:2, PROF:1 }, rejet:1, elan:null,
      trait:n => moyT(n.LIEN1, n.MECA1a == null ? null : 5 - n.MECA1a), traitTxt:"moy(LIEN1, 5 − MECA1a) : la compétition, peu de hasard" },
  R:{ nourrit:{ RYT:2, MECA:2, LIEN:1, THEM:1, MAT:1, ART:1 }, rejet:1, elan:null,
      trait:n => moyT(n.RYT1, n.VAR1, n.THEM1), traitTxt:"moy(RYT1, VAR1, THEM1) : ça bouge, ça change, ça raconte" },
  W:{ nourrit:{ LIEN:3, DOC:1 }, rejet:1, elan:null,
      trait:n => moyT(n.THEM1, n.MAT1, n.ART1), traitTxt:"moy(THEM1, MAT1, ART1) : le thème et les sens" },
  G:{ nourrit:{ VAR:2, PROF:1, THEM:1, LIEN:1, RYT:1 }, rejet:1, elan:null,
      trait:n => moyT(n.VAR1, n.PROF1), traitTxt:"moy(VAR1, PROF1) : de la matière pour s'exprimer" }
};
// ce que chaque moteur change dans la timeline (séance du 13/10/2026) — pour l'encyclopédie
const MOTEURS_TIMELINE = {
  W:{ aime:"THEM, MAT, ART2a dès la boîte ; la communauté (la durée de vie du jeu, sur la courbe noire) dès la première session", gene:"RYT2 ou LIEN raté (sous 3)", temps:"aucune durée ne change" },
  U:{ aime:"le système entier dès la lecture des règles (PROF, MECA, EXIG comptés double) ; LIEN2a ; DOC2 quand elle est bonne", gene:"ART2b raté ; LIEN2b raté là où la parole a sa place ; DOC2 ratée (comptée trois fois)", temps:"apprend 1,5 fois plus vite (Accès, Premiers pas, Expérimentations) ; qui le fuit, 1,5 fois plus lentement" },
  B:{ aime:"LIEN1, la compétition ; LIEN2b, la politique, là où la parole a sa place", gene:"le coût d'effort : règles, manuels, logistique, hasard (toléré), renouvellement, attente", temps:"ne se lasse pas de gagner : VAR ne compte plus dans sa stimulation à partir du jalon 5" },
  R:{ aime:"la promesse jusqu'au jalon 3 ; ART ; des règles courtes et bien écrites ; PROF ; VAR (double) ; des trucs cools à manipuler (MAN2, MAT) ; l'immersion (THEM2b)", gene:"une promesse de volume décevante (POID2) ; de l'exigence sans gratification (EXIG2) ; attendre (RYT1) ; un thème plaqué", temps:"VAR compte double : il sent davantage l'usure" },
  G:{ aime:"PROF, VAR, EXIG, RYT, THEM, dès la première session", gene:"MAN2 ou LIEN raté (sous 3)", temps:"VAR s'use moins vite pour lui (3 % par session au lieu de 5 %)" }
};
function moyT(...a){ a = a.filter(v => v != null && !Number.isNaN(v)); return a.length ? a.reduce((s, v) => s + v, 0) / a.length : null; }
// un profil : le dominant (×1) et le second (×½) jouent sur la courbe, le moteur fui gêne (geneRejet) ; les deux autres ne jouent plus (13/10/2026)
// d'un code de style à sa lecture : "W.b/u" → { dom:"W", second:"B", autres:["R","G"], rejet:"U" }
function prDeStyle(code){
  const dom = code[0], second = code[2].toUpperCase(), rejet = code[4].toUpperCase();
  return { dom, second, rejet, autres: [..."WUBRG"].filter(c => c !== dom && c !== second && c !== rejet) };
}
const geneRejet = (n, pr) => { if (!pr) return 0; const t = MOTEURS_JEU[pr.rejet].trait(n); return t == null ? 0 : Math.max(0, t - 2) / 3; };   // 0 à 1

/* n : { code: valeur } ; une valeur absente (paire sans objet) est retirée des moyennes. pr : profil (facultatif) → courbe vue par ce joueur.
   Formules de la séance du 12/10/2026 (journal « timeline_seance_12-10 ») :
   flow = élan + 2 × r × (S − F) ; élan d'achat = E₀ / (1 + n), E₀ = 0,5 + 0,25 × palier de prix, n = sessions jouées depuis le jalon 2 ;
   r = coefficient de projection (0,6 au jalon 1, 0,8 au jalon 2, 1 ensuite) ; S = moyenne (pondérée) ; F = √(somme des carrés / 3).
   À partir du jalon 4, le flow ne remonte plus. Après le jalon 7, la courbe descend jusqu'au plancher de nostalgie.
   Courbes de profil (séance du 13/10/2026, journal « moteurs_seance_13-10 ») : goûts du dominant (×1) et du second (×½), rejet du moteur fui,
   vitesse d'apprentissage (Décrypter), usure de VAR (Rayonner, Triompher) ; puis centrage (la moyenne des 60 profils est la courbe noire)
   et garde-fou (d'un jalon à l'autre, au plus 0,5 d'écart à la variation de la courbe noire). */
const ok_ = v => v != null && !Number.isNaN(v);
const moy_ = (...a) => { a = a.filter(ok_); return a.length ? a.reduce((s, v) => s + v, 0) / a.length : null; };
const inv_ = v => ok_(v) ? 5 - v : null;
const sous3_ = x => ok_(x) ? Math.max(0, 3 - x) * 5 / 3 : null;      // « raté » : ce qui tombe sous 3 gêne, ce qui est attendu ne coûte rien
const au2_ = x => ok_(x) ? Math.max(0, x - 2) * 5 / 3 : null;        // « beaucoup » (axe 1) : au-delà de 2
// le coût d'effort (prototype) : ce qu'il faut investir pour jouer — règles, manuels, logistique, hasard toléré, renouvellement, attente ;
// moyenne quadratique, sur 5. C'est la gêne du Triomphant ; affiché aussi dans l'en-tête de la fiche.
function coutEffort(n, jusqua = 7){
  const L = [au2_(n.POID1), au2_(n.DOC1)].concat(jusqua >= 2 ? [au2_(n.MAN1)] : [])
    .concat(jusqua >= 3 ? [ok_(n.MECA1a) ? n.MECA1a / 2 : null, au2_(n.VAR1), sous3_(n.RYT1)] : []).filter(ok_);
  return L.length ? Math.sqrt(L.reduce((t, v) => t + v * v, 0) / L.length) : null;
}

// la courbe brute (avant centrage et garde-fou) ; ctx : { vieNoire } pour les profils
function courbeBrute(n, pr, ctx = {}){
  const ok = ok_, moy = moy_, inv = inv_, q = v => Math.round(v * 4) / 4;
  const k = { W:0, U:0, B:0, R:0, G:0 }; if (pr){ k[pr.dom] = 1; k[pr.second] = .5; }
  const vit = pr && pr.rejet === "U" ? 1 / 1.5 : 1 + .5 * k.U;          // le Décrypteur apprend plus vite ; qui le fuit, plus lentement
  const tauxVAR = .05 - .02 * k.G;                                      // le Rayonnant use VAR moins vite
  const MECA = ok(n.MECA) ? n.MECA : n.MECA2;                           // MÉCANIQUE est indépendante : sa note est MECA2
  const SYS = moy(n.POID, n.PROF, MECA, n.VAR, n.EXIG), EXP = moy(n.RYT, n.MAN, n.THEM, n.LIEN), EDI = moy(n.MAT, n.ART, n.DOC);
  // T, la gêne d'apprentissage (durée des Premiers pas) : ce qu'il y a à apprendre, tempéré par la documentation (DOC2 est un écart)
  const T = ok(n.POID1) ? .6 * n.POID1 * (1 - (n.DOC2 ?? 0) / 4) : 0;
  const d = [ (n.VAL1 ?? 0) / 4, q(((n.POID1 ?? 0) + (n.MAN1 ?? 0)) / 5 / vit), q((1 + T / 10) / vit),
    q(2 ** ((moy(n.POID1, n.EXIG1, n.VAR1, T, inv(n.ART2b)) ?? 0) - 1) / vit), q(2 ** ((moy(n.PROF, n.EXIG1, n.POID1) ?? 0) - 1)),
    q(2 ** ((moy(n.PROF, n.EXIG, n.VAR1) ?? 0) + .1 - 1)), q(2 ** ((moy(n.VAR, n.MAN2) ?? 0) - 1)) ];
  const N = [0]; d.forEach((v, i) => N.push(N[i] + v));
  const x = [0]; d.forEach((v, i) => x.push(x[i] + Math.log2(1 + v)));
  const E0 = .5 + .25 * (n.VAL1 ?? 0);
  const lassitude = Nj => 1 + .1 * Math.log2(1 + Nj);
  const depuis = (Nj, j0) => Math.max(0, Nj - N[j0]);
  // la promesse de la boîte : le meilleur de ce qu'elle annonce (thème, rythme, manipulation)
  const prom = Math.max(...[n.THEM1, n.RYT1, n.MAN2].filter(ok));
  const parole = (n.LIEN1c ?? 0) >= 2;                                   // la parole ne compte que si le jeu lui laisse de la place
  const vieN = ctx.vieNoire == null ? 50 : Math.min(ctx.vieNoire, 50), communaute = 5 * Math.log2(1 + vieN) / Math.log2(51);
  const gene = pr ? geneRejet(n, pr) * 5 : 0;
  const termes = (j, Nj) => {
    const nS = depuis(Nj, 2), m = depuis(Nj, 4), c = (1 - tauxVAR) ** m, g = 1 - ESTOMPE ** m;
    const app = ok(n.POID1) ? n.POID1 * (1 - (n.DOC2 ?? 0) / 4) / (1 + nS * vit) : null;   // ce qui reste à apprendre ; s'éteint de lui-même
    const VARj = ok(n.VAR) ? (j >= 5 ? n.VAR * c : n.VAR) : null;
    let S, F;
    if (j === 1){ S = [[n.MAT], [n.ART2a], [prom]]; F = [n.POID1, inv(n.ART2b)]; }
    else if (j === 2){ S = [[n.MAT], [n.ART2a], [prom], [SYS]];
      F = [ok(n.POID1) ? .75 * n.POID1 : null, ok(n.ART2b) ? .75 * (5 - n.ART2b) : null, ok(n.MAN1) ? n.MAN1 * lassitude(Nj) / 2 : null]; }
    else if (j === 3){ S = [[SYS], [n.PROF], [n.MECA2], [n.VAR, 2], [moy(n.RYT2, n.MAN2, n.THEM, n.LIEN2a)], [moy(n.MAT, n.ART)]];
      F = [app, inv(n.ART2b), ok(n.MAN2) ? Math.max(0, 3 - n.MAN2) * 5 / 3 : null]; }          // une charge attendue ne coûte rien
    else if (j === 4){ S = [[SYS], [n.PROF, 2], [n.MECA2], [n.VAR, 2], [n.EXIG, 2], [EXP], [EDI]];
      F = [app, inv(n.ART2b), inv(n.MAN2)]; }
    else { S = [[MECA], [n.EXIG], [n.THEM], [n.LIEN], [n.MAT], [VARj, 1 - k.B]];             // le Triomphant ne se lasse pas : VAR hors de S
      F = [ok(n.POID1) ? n.POID1 * g : null, ok(n.MAN1) ? n.MAN1 * g : null, inv(n.VAR), ok(n.ART2b) ? (5 - n.ART2b) / 2 : null]; }
    // les goûts des moteurs : un terme de plus dans S (pondéré par le moteur), une gêne de plus dans F (× √poids)
    const aime = (km, v, w = 1) => { if (km && ok(v)) S.push([v, km * w]); };
    const gene_ = (km, v, fois = 1) => { if (km && ok(v) && v > 0) for (let i = 0; i < fois; i++) F.push(v * Math.sqrt(km)); };
    if (k.W){ aime(k.W, n.THEM); aime(k.W, n.MAT); aime(k.W, n.ART2a);                       // Rassembler : rassemblé par le thème, les sens, la durée
      if (j >= 3){ aime(k.W, communaute); gene_(k.W, sous3_(n.RYT2)); gene_(k.W, sous3_(n.LIEN)); } }
    if (k.U){ if (j >= 2){ aime(k.U, n.POID); aime(k.U, n.PROF, 2); aime(k.U, MECA, 2); aime(k.U, VARj); aime(k.U, n.EXIG, 2);   // Décrypter : le système
        if ((n.DOC2 ?? 0) > 0) aime(k.U, 2.5 + 1.25 * n.DOC2); gene_(k.U, sous3_(n.ART2b)); if ((n.DOC2 ?? 0) < 0) gene_(k.U, -n.DOC2 / 2 * 5, 3); }
      if (j >= 3){ aime(k.U, n.LIEN2a); if (parole) gene_(k.U, sous3_(n.LIEN2b)); } }
    if (k.B){ aime(k.B, n.LIEN1); if (j >= 3 && parole) aime(k.B, n.LIEN2b);                  // Triompher : gagner, à bon compte
      gene_(k.B, coutEffort(n, j)); }
    if (k.R){ if (j <= 3) aime(k.R, prom); aime(k.R, n.ART);                                    // S'enflammer : la promesse, l'intensité
      if (j >= 2){ aime(k.R, moy(inv(n.DOC1), 2.5 + 1.25 * (n.DOC2 ?? 0))); if ((n.POID2 ?? 0) < 0) gene_(k.R, -n.POID2 / 2 * 5); }
      if (j >= 3){ aime(k.R, n.PROF); aime(k.R, VARj, 2); aime(k.R, moy(n.MAN2, n.MAT)); if ((n.THEM1 ?? 0) >= 2) aime(k.R, n.THEM2b);
        if ((n.EXIG2 ?? 0) < 0) gene_(k.R, (n.EXIG1 ?? 0) * -n.EXIG2 / 2); gene_(k.R, sous3_(n.RYT1)); if ((n.THEM1 ?? 0) >= 2) gene_(k.R, sous3_(n.THEM2b)); } }
    if (k.G && j >= 3){ aime(k.G, n.PROF); aime(k.G, VARj); aime(k.G, n.EXIG); aime(k.G, n.RYT); aime(k.G, n.THEM);   // Rayonner : s'exprimer
      gene_(k.G, sous3_(n.MAN2)); gene_(k.G, sous3_(n.LIEN)); }
    // le rejet : bloqué avant de jouer (1), toléré à la première session (½), puis de plus en plus résistant (+10 % par session, au plus 1,5)
    if (gene > 0){ const n3 = N[3] - N[2], kr = j <= 2 ? 1 : j === 3 ? .5 : Math.min(1.5, .5 + .1 * (nS - n3)); F.push(gene * kr); }
    let sw = 0, sv = 0; S.forEach(([v, w]) => { const ww = w ?? 1; if (ok(v) && ww > 0){ sw += ww; sv += ww * v; } });
    const s = sw ? sv / sw : 0, f = Math.sqrt(F.filter(ok).reduce((t, v) => t + v * v, 0) / K_FRICTION);
    const r = R_REGIME[Math.min(j, 7)], el = E0 / (1 + nS);
    return { s, f, el, r, brut: el + 2 * r * (s - f), L: lassitude(Nj), m, g, estompe: c };
  };
  const det = [null], brut = [0];
  for (let j = 1; j <= 7; j++){
    const t = termes(j, N[j]);
    if (j >= 5 && t.brut > brut[j - 1]){ t.retenu = true; t.brut = brut[j - 1]; }       // à partir du jalon 4, le flow ne remonte plus
    det.push(t); brut.push(t.brut);
  }
  const marque = Math.max(0, Math.max(n.THEM ?? 0, MECA ?? 0) - PLANCHER_SEUIL);
  return { d, N, x, brut, det, marque, brutLoinBrut: Nk => termes(7, Nk).brut, SYS, EXP, EDI, E0, T, vit };
}

// α, β, γ, ω, plancher, durée de vie… d'une courbe brute (noire ou de profil)
function analyseCourbe(cb){
  const { N, x, brut, marque } = cb;
  const purge = brut.findIndex((v, j) => j >= 1 && v < 0);
  const y = brut.map((v, j) => purge > 0 && j >= purge ? 0 : Math.min(10, Math.max(0, v)));
  let alpha = 1; for (let j = 2; j <= 7; j++) if (y[j] > y[alpha]) alpha = j;
  // β : début du déclin final, le jalon d'où le flow ne fait plus que baisser (une variation de moins de 0,05 est un plateau) ;
  // γ : l'arrivée au plancher de nostalgie, en sessions (null : jamais, un classique) ; ω : abandon (purge), à la place de γ
  const fin = purge > 0 ? purge : 7, PLATEAU = .05;
  let beta = null; const omega = purge > 0 ? purge : null;
  const baisse = j => y[j] < y[j - 1] - PLATEAU;
  let jb = fin; while (jb >= 1 && !baisse(jb)) jb--;                    // un plateau final ne compte pas
  for (; jb >= 1 && baisse(jb); jb--) beta = jb - 1;
  if (beta === 0) beta = null;
  // Souvenir : la marque laissée (thème ou mécaniques) ; le plancher de nostalgie arrête la chute sans jamais relever la courbe
  const plancher = purge > 0 ? null : Math.min(marque, brut[7]);
  const brutLoin = Nk => Math.min(cb.brutLoinBrut(Nk), brut[7]);
  const yLoin = Nk => purge > 0 ? 0 : Math.min(10, Math.max(0, Math.max(brutLoin(Nk), plancher)));
  const xLoin = Nk => x[7] + Math.log2((1 + Nk) / (1 + N[7]));
  const perte = (yLoin(N[7] * 4 + 3) - yLoin(N[7])) / (xLoin(N[7] * 4 + 3) - x[7]);
  // durée de vie : sessions jusqu'à l'abandon (le flow passe sous 0) ou jusqu'à l'arrivée au plancher de nostalgie ; null = jamais (un classique)
  let vie = null, xVie = null;
  const coupe = (j, seuil) => { const t = (brut[j - 1] - seuil) / (brut[j - 1] - brut[j]); vie = N[j - 1] + t * (N[j] - N[j - 1]); xVie = x[j - 1] + t * (x[j] - x[j - 1]); };
  if (purge > 0) coupe(purge, 0);
  else if (brut[4] <= marque){ vie = N[4]; xVie = x[4]; }
  else {
    for (let j = 5; j <= 7 && vie == null; j++) if (brut[j] <= marque) coupe(j, marque);
    if (vie == null && brutLoin(1e7) <= marque){
      let a = N[7], b = 1e7; for (let i = 0; i < 80; i++){ const mid = Math.sqrt((1 + a) * (1 + b)) - 1; brutLoin(mid) > marque ? a = mid : b = mid; }
      vie = b; xVie = xLoin(b);
    }
  }
  const gamma = purge > 0 ? null : vie, sousPhaseGamma = gamma == null ? null : gamma > N[7] ? 7 : Math.max(0, N.findIndex(v => v >= gamma - 1e-9) - 1);
  const classe = vie == null ? "classique" : CLASSES_VIE.find(([s]) => vie < s)[1];
  return { ...cb, y, alpha, beta, gamma, sousPhaseGamma, omega, purge: purge > 0 ? purge : null, perte, vie, xVie, classe, plancher, yLoin, xLoin };
}

// le centrage d'un jeu : l'écart moyen des 60 profils à la courbe noire, jalon par jalon (mis en cache)
const CENTRAGES = new Map();
function centrageJeu(n, noire){
  const cle = JSON.stringify(n); if (CENTRAGES.has(cle)) return CENTRAGES.get(cle);
  const md = [0, 0, 0, 0, 0, 0, 0, 0];
  PROFILS.forEach(code => { const b = courbeBrute(n, prDeStyle(code), { vieNoire: noire.vie }).brut; for (let j = 1; j <= 7; j++) md[j] += (b[j] - noire.brut[j]) / PROFILS.length; });
  CENTRAGES.set(cle, md); return md;
}

function flowJeu(n, pr){
  const noire = analyseCourbe(courbeBrute(n));
  if (!pr) return noire;
  const cb = courbeBrute(n, pr, { vieNoire: noire.vie }), md = centrageJeu(n, noire);
  // centrage, puis garde-fou : d'un jalon à l'autre, l'écart à la variation de la courbe noire est d'au plus 0,5 ; un flow négatif est un abandon
  const brut = [0]; let fini = null;
  for (let j = 1; j <= 7; j++){
    if (fini != null){ brut.push(fini); continue; }
    const dN = noire.brut[j] - noire.brut[j - 1], v = Math.min(brut[j - 1] + dN + .5, Math.max(brut[j - 1] + dN - .5, cb.brut[j] - md[j]));
    brut.push(v); if (v < 0) fini = v;
  }
  const decalage = brut[7] - noire.brut[7];
  return analyseCourbe({ ...cb, brut, marque: noire.marque, brutLoinBrut: Nk => noire.brutLoinBrut(Nk) + decalage });
}

/* Graphique SVG : phases en bandes, jalons numérotés (nom au survol), α β γ ω, plancher de nostalgie, durée de vie, pointillés. */
function courbeSVG(c, titre, ref){
  const e = s => String(s ?? "").replace(/[&<>"']/g, k => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[k]));
  const f = (v, k = 2) => Number(v).toFixed(k).replace(".", ",");
  const W = 760, H = 372, g = 46, dr = 16, h0 = 46, b = 64;
  const xFin = Math.max(c.x[7] + 4, Math.min(c.x[7] + 9, c.xVie ? c.xVie + 1.5 : 0));
  const yMax = Math.max(5, Math.ceil(c.y[c.alpha] + 1));
  const X = v => g + v / xFin * (W - g - dr), Y = v => H - b - v / yMax * (H - b - h0);
  let s = `<svg class="courbe" viewBox="0 0 ${W} ${H}" role="img" aria-label="Courbe du flow${titre ? " de " + e(titre) : ""}">`;
  [["I", 0, 2], ["II", 2, 4], ["III", 4, 6], ["IV", 6, null]].forEach(([p, a, z], i) => {
    const x1 = X(c.x[a]), x2 = z == null ? X(xFin) : X(c.x[z]);
    s += `<rect x="${x1}" y="${h0}" width="${x2 - x1}" height="${H - b - h0}" class="bande${i % 2}"><title>Phase ${p} : ${e(PHASES[p])}</title></rect><text x="${(x1 + x2) / 2}" y="${h0 - 28}" class="phase">${p}</text>`;
  });
  s += `<text x="${W / 2}" y="${H - 6}" class="gl" style="text-anchor:middle">Phases : ${Object.entries(PHASES).map(([k, v]) => k + " " + e(v)).join(" · ")}</text>`;
  for (let v = 0; v <= yMax; v++) s += `<line x1="${g}" x2="${W - dr}" y1="${Y(v)}" y2="${Y(v)}" class="grille"/><text x="${g - 8}" y="${Y(v) + 4}" class="gy">${v}</text>`;
  s += `<text x="4" y="${h0 - 8}" class="gy" style="text-anchor:start">jalon</text><text x="12" y="${Y(yMax / 2)}" class="gy" style="text-anchor:middle" transform="rotate(-90 12 ${Y(yMax / 2)})">flow</text>`;
  s += `<text x="4" y="${H - b + 30}" class="gy" style="text-anchor:start">sessions</text>`;
  if (c.plancher != null && c.plancher > 0) s += `<line x1="${X(c.x[7])}" x2="${W - dr}" y1="${Y(c.plancher)}" y2="${Y(c.plancher)}" class="demi"/><text x="${W - dr - 4}" y="${Y(c.plancher) - 5}" class="gl" style="text-anchor:end">plancher de nostalgie</text>`;
  if (c.xVie != null){ const xd = X(Math.min(c.xVie, xFin)), yv = c.purge ? 0 : c.plancher ?? 0;
    s += `<line x1="${xd}" x2="${xd}" y1="${Y(yv)}" y2="${H - b}" class="demi"/><text x="${Math.min(Math.max(xd, g + 60), W - dr - 80)}" y="${H - b + 34}" class="gl">durée de vie ≈ ${texteSessions(c.vie)}</text>`; }
  if (ref) s += `<polyline class="ref" points="${ref.x.map((v, j) => `${X(v)},${Y(ref.y[j])}`).join(" ")}"><title>Flow pour tous</title></polyline><text x="${X(ref.x[7]) + 6}" y="${Y(ref.y[7]) + 4}" class="gl" style="text-anchor:start">pour tous</text>`;
  const fin = c.omega ?? 7, pts = j => `${X(c.x[j])},${Y(c.y[j])}`;   // trait plein sur tous les jalons calculés (jusqu'à l'abandon s'il y a purge)
  s += `<polyline class="trait" points="${[...Array(fin + 1).keys()].map(pts).join(" ")}"/>`;
  if (!c.purge){
    const loin = [...Array(8 - fin).keys()].map(k => pts(fin + k));
    for (let xv = c.x[7] + .05; xv <= xFin + 1e-9; xv += .05){ const Nk = (1 + c.N[7]) * 2 ** (xv - c.x[7]) - 1; loin.push(`${X(xv)},${Y(c.yLoin(Nk))}`); }
    s += `<polyline class="pointille" points="${loin.join(" ")}"/>`;
  } else s += `<text x="${X(c.x[c.omega]) + 10}" y="${Y(0) - 10}" class="gl fort" style="text-anchor:start">ω abandon</text>`;
  let dernierNum = 0, dernierS = -1;
  for (let j = 0; j <= 7; j++){
    const info = `Jalon ${j} : ${JALONS[j].nom} — ${texteSessions(c.N[j])}, flow ${f(c.y[j])}`;
    const point = c.omega != null && j > c.omega ? "" : `<circle cx="${X(c.x[j])}" cy="${Y(c.y[j])}" r="${j === c.alpha ? 6 : 4}" class="${j === c.alpha ? "pt alpha" : "pt"}"/>`;
    const lisible = j === 0 || X(c.x[j]) - X(c.x[dernierNum]) >= 14;   // numéros trop serrés (jalons très courts) : on saute
    if (lisible) dernierNum = j;
    const lisibleS = dernierS < 0 || X(c.x[j]) - X(c.x[dernierS]) >= 26;  // sessions cumulées sous le jalon
    if (lisibleS) dernierS = j;
    s += `<g><title>${e(info)}</title>${point}${lisible ? `<text x="${X(c.x[j])}" y="${h0 - 8}" class="gx">${j}</text>` : ""}${lisibleS ? `<line x1="${X(c.x[j])}" x2="${X(c.x[j])}" y1="${H - b}" y2="${H - b + 4}" class="axe-l"/><text x="${X(c.x[j])}" y="${H - b + 16}" class="gs">${courtSessions(c.N[j])}</text>` : ""}</g>`;
  }
  if (!c.purge){ let der = X(c.x[dernierS]);                            // repères ronds dans le Souvenir
    [50, 100, 200, 500, 1000, 2000, 5000].forEach(v => { if (v <= c.N[7]) return; const xv = X(c.xLoin(v)); if (xv > W - dr || xv - der < 30) return; der = xv;
      s += `<line x1="${xv}" x2="${xv}" y1="${H - b}" y2="${H - b + 4}" class="axe-l"/><text x="${xv}" y="${H - b + 16}" class="gs">${v}</text>`; }); }
  s += `<text x="${X(c.x[c.alpha])}" y="${Y(c.y[c.alpha]) - 12}" class="gl fort">α ${f(c.y[c.alpha])}</text>`;
  if (c.beta != null) s += c.beta === c.alpha ? `<text x="${X(c.x[c.beta]) + 12}" y="${Y(c.y[c.beta]) + 16}" class="gl fort" style="text-anchor:start">β</text>`
    : `<text x="${X(c.x[c.beta]) + 10}" y="${Y(c.y[c.beta]) - 12}" class="gl fort">β</text>`;
  if (c.gamma != null && c.xVie <= xFin) s += `<text x="${X(c.xVie)}" y="${Y(c.plancher ?? 0) - 12}" class="gl fort">γ</text>`;
  s += `<line x1="${g}" x2="${W - dr}" y1="${H - b}" y2="${H - b}" class="axe-l"/>`;
  return s + `</svg>`;
}

// sessions cumulées, en court, pour l'axe : « ¼ », « 4¼ », « 30 »
function courtSessions(v){
  if (v >= 20) return String(Math.round(v));
  const qv = Math.round(v * 4) / 4, e = Math.floor(qv), fr = ["", "¼", "½", "¾"][Math.round((qv - e) * 4)];
  return (e || !fr ? String(e) : "") + fr;
}
// sessions au quart près : « ¼ de session », « 2 sessions ¾ » ; au-delà de 20, à l'unité ; au-delà de 100, à la dizaine
function texteSessions(v){
  if (v == null) return "∞";
  if (v >= 100) return Math.round(v / 10) * 10 + " sessions";
  if (v >= 20) return Math.round(v) + " sessions";
  const qv = Math.round(v * 4) / 4, e = Math.floor(qv), fr = ["", "¼", "½", "¾"][Math.round((qv - e) * 4)];
  if (!e) return fr ? fr + " de session" : "0 session";
  return e + " session" + (e > 1 ? "s" : "") + (fr ? " " + fr : "");
}

/* Phrase de synthèse, en texte simple (bandeau, récapitulatif, export). */
function syntheseTimeline(c){
  const f = (v, k = 2) => Number(v).toFixed(k).replace(".", ",").replace("-", "−");
  const purge = c.omega != null;
  const chute = purge ? `déclin dès le jalon ${c.beta ?? c.alpha} (β), abandon au jalon ${c.omega} (ω)` : c.beta == null ? "pas de déclin" : `déclin dès le jalon ${c.beta} (β)`;
  const vie = c.vie == null ? `pas de γ : ne descend jamais jusqu'à son plancher de nostalgie (${f(c.marque)}), un classique`
    : purge ? `durée de vie ≈ ${texteSessions(c.vie)}, jusqu'à l'abandon (${c.classe})`
    : `γ : au plancher de nostalgie (${f(c.plancher)}) après ≈ ${texteSessions(c.vie)}, puis rangé et ressorti par nostalgie (${c.classe})`;
  return `α ${f(c.y[c.alpha])} au jalon ${c.alpha} (${JALONS[c.alpha].nom}, après ${texteSessions(c.N[c.alpha])}) · ${chute} · ${vie}`;
}

/* Styles du graphique, injectés une fois (les couleurs viennent des variables de la page). */
(function(){
  const css = `.courbe-box{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:10px 12px;margin:12px 0}
.courbe-box figcaption{font-size:13px;color:var(--muted);margin-top:4px}
svg.courbe{width:100%;height:auto;display:block;font-family:inherit}
svg.courbe .bande0{fill:var(--paper)} svg.courbe .bande1{fill:color-mix(in srgb, var(--accent) 7%, var(--panel))}
svg.courbe .phase{font-size:12px;fill:var(--muted);text-anchor:middle;font-weight:600}
svg.courbe .grille{stroke:var(--line);stroke-width:1} svg.courbe .axe-l{stroke:var(--ink);stroke-width:1.2}
svg.courbe .gy{font-size:12px;fill:var(--muted);text-anchor:end} svg.courbe .gx{font-size:12.5px;fill:var(--ink);text-anchor:middle;font-weight:600}
svg.courbe .gs{font-size:11.5px;fill:var(--muted);text-anchor:middle;font-variant-numeric:tabular-nums}
svg.courbe .gl{font-size:12px;fill:var(--muted);text-anchor:middle} svg.courbe .gl.fort{fill:var(--ink);font-weight:600;font-size:13px}
svg.courbe .trait{fill:none;stroke:var(--ink);stroke-width:2.5;stroke-linejoin:round}
svg.courbe .pointille{fill:none;stroke:var(--ink);stroke-width:2;stroke-dasharray:5 5}
svg.courbe .demi{stroke:var(--warn);stroke-width:1.2;stroke-dasharray:2 4}
svg.courbe .ref{fill:none;stroke:var(--muted);stroke-width:1.5;stroke-dasharray:1 3;opacity:.9}
svg.courbe .pt{fill:var(--panel);stroke:var(--ink);stroke-width:2} svg.courbe .pt.alpha{fill:var(--ink)}`;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
})();

/* ---------------- le spectromètre : le jeu vu par chacun des 60 styles ---------------- */
// note finale vue par un profil (séance du 13/10/2026) : tirée de sa courbe — la note pour tous, plus la moitié de l'écart moyen de sa courbe
// à la courbe noire sur les jalons 1 à 7 (le flow est sur 10, la note sur 5). Centrée par construction : la note et la courbe racontent la même histoire.
function noteProfil(paires, n, pr){
  const parChap = {};
  paires.forEach(p => { if (p.note == null) return; (parChap[p.chap] ??= []).push(p.note); });
  const ch = Object.values(parChap).map(L => L.reduce((a, b) => a + b, 0) / L.length); if (!ch.length) return null;
  const base = ch.reduce((a, b) => a + b, 0) / ch.length;
  if (!pr) return base;
  const noire = flowJeu(n), c = flowJeu(n, pr); let ec = 0;
  for (let j = 1; j <= 7; j++) ec += (c.y[j] - noire.y[j]) / 7;
  return Number.isFinite(ec) ? Math.min(5, Math.max(0, base + ec / 2)) : base;
}
// ce que le jeu offre à chaque moteur (trait) et ce qu'il réussit pour lui (moyenne des paires qu'il aime, pondérée)
function spectreMoteurs(paires, n){
  return Object.fromEntries(Object.entries(MOTEURS_JEU).map(([m, def]) => {
    let sw = 0, sv = 0; paires.forEach(p => { const l = def.nourrit[p.code]; if (l && p.note != null){ sw += l; sv += l * p.note; } });
    return [m, { trait: def.trait(n), reussite: sw ? sv / sw : null }];
  }));
}
// ---- les profils : un tempérament A/e et un style A.b ; le code complet A.b/e réunit les deux (60 profils) ----
const PROFILS = (() => { const O = "WUBRG", L = []; for (const a of O) for (const e of O) if (e !== a) for (const b of O) if (b !== a && b !== e) L.push(`${a}.${b.toLowerCase()}/${e.toLowerCase()}`); return L; })();
const temperamentDe = code => code[0] + "/" + code[4];   // R.u/b → R/b
const styleDe = code => code.slice(0, 3);                  // R.u/b → R.u
// les profils (codes complets) couverts par un code : profil R.u/b, tempérament R/b, style R.u, moteur R
const stylesDe = code => PROFILS.filter(c => code.length === 5 ? c === code : code.includes("/") ? c[0] === code[0] && c[4] === code[2]
  : code.includes(".") ? c.slice(0, 3) === code : c[0] === code);
// les tempéraments significatifs d'un profil : affinité de X/y = (score X − moyenne des 5) × (moyenne − score Y), les deux écarts positifs ;
// on garde ceux qui atteignent un tiers du premier, quatre au plus ; le tempérament du classement passe toujours en tête
function facettes(scores, principal){
  const S = scores || {}, C = "WUBRG".split("").filter(c => S[c] != null);
  if (C.length < 5) return [{ code:principal, aff:1, part:1 }];
  const m = C.reduce((t, c) => t + Number(S[c]), 0) / 5, L = [];
  C.forEach(a => C.forEach(e => { const h = Number(S[a]) - m, b = m - Number(S[e]); if (a !== e && h > 0 && b > 0) L.push({ code:a + "/" + e.toLowerCase(), aff:h * b }); }));
  L.sort((x, y) => (y.code === principal) - (x.code === principal) || y.aff - x.aff);
  const max = Math.max(...L.map(x => x.aff), 1e-9);
  return (L.length ? L : [{ code:principal, aff:1 }]).filter((x, i) => i === 0 || x.aff >= max / 3 - 1e-9).slice(0, 4).map(x => ({ ...x, part: x.aff / max }));
}

// pl : { moteurs, temperaments, styles } (tables PRISMEplayer : 20 tempéraments A/e, 20 styles A.b)
// lignes : une par profil (60) ; st : { code, nom, second } (nom = « tempérament (style) ») ; moteurs : regroupement moteur › tempérament › profils
function spectrometre(n, paires, pl){
  const base = flowJeu(n), noteBase = noteProfil(paires, n, null);
  const T = Object.fromEntries(pl.temperaments.map(t => [t.code, t])), S = Object.fromEntries(pl.styles.map(x => [x.code, x])), M = Object.fromEntries(pl.moteurs.map(m => [m.code, m]));
  const lignes = PROFILS.map(code => {
    const pr = prDeStyle(code), t = T[temperamentDe(code)], sty = S[styleDe(code)], c = flowJeu(n, pr), note = noteProfil(paires, n, pr), gene = geneRejet(n, pr);
    const st = { code, second: pr.second, nom: `${t?.nom || temperamentDe(code)} (${sty?.nom || styleDe(code)})`, style: sty };
    return { st, temperament:t, moteur:M[pr.dom], pr, c, note, gene,
      decroche: c.omega ?? c.beta };
  }).sort((a, b) => (b.note ?? -1) - (a.note ?? -1));
  const resume = L => ({ note: L.reduce((s, l) => s + (l.note ?? 0), 0) / L.length, alpha: L.reduce((s, l) => s + l.c.y[l.c.alpha], 0) / L.length, lignes:L });
  const moteurs = pl.moteurs.map(m => ({ m, ...resume(lignes.filter(l => l.pr.dom === m.code)),
      temperaments: pl.temperaments.filter(t => t.moteur === m.code).map(t => ({ t, ...resume(lignes.filter(l => l.temperament?.code === t.code)) })).sort((x, y) => y.note - x.note) }))
    .sort((x, y) => y.note - x.note);
  return { base, noteBase, lignes, moteurs, spectre: spectreMoteurs(paires, n) };
}

/* Petits graphes du spectromètre : un par moteur dominant, une courbe par tempérament (moyenne de ses trois profils),
   dans la couleur du moteur qu'il fuit ; la courbe pour tous en pointillé gris. r : résultat de spectrometre ; coul(m) : couleur d'un moteur. */
function courbesParMoteur(r, pl, coul){
  const e = s => String(s ?? "").replace(/[&<>"']/g, k => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[k]));
  const f = v => Number(v).toFixed(2).replace(".", ",");
  const M = Object.fromEntries(pl.moteurs.map(m => [m.code, m])), xs = r.base.x;
  // chaque tempérament a ses propres jalons (le Décrypteur apprend plus vite, qui le fuit plus lentement) : moyenne des x et des y de ses profils
  const series = pl.temperaments.map(t => { const L = r.lignes.filter(l => l.temperament?.code === t.code), nb = L.length || 1;
    const y = xs.map((_, j) => L.reduce((s, l) => s + l.c.y[j], 0) / nb), x = xs.map((_, j) => L.reduce((s, l) => s + l.c.x[j], 0) / nb);
    return { t, y, x, alpha: Math.max(...y), note: L.reduce((s, l) => s + (l.note ?? 0), 0) / nb }; });
  const yMax = Math.max(5, Math.ceil(Math.max(...series.map(x => x.alpha), ...r.base.y)));
  const W = 360, H = 200, g = 30, dr = 10, h0 = 14, b = 24, xFin = Math.max(xs[7], ...series.map(x => x.x[7])) + 1;
  const X = v => g + v / xFin * (W - g - dr), Y = v => H - b - v / yMax * (H - b - h0);
  const ligne = (y, cls, style, x = xs) => `<polyline class="${cls}" style="${style || ""}" points="${x.map((v, j) => `${X(v).toFixed(1)},${Y(y[j]).toFixed(1)}`).join(" ")}"/>`;
  return `<div class="pm-grille">${pl.moteurs.map(m => {
    const S = series.filter(x => x.t.moteur === m.code);
    let svg = `<svg class="pm" viewBox="0 0 ${W} ${H}" role="img" aria-label="Courbes des tempéraments de ${e(m.nom)}">`;
    [[0, 2], [2, 4], [4, 6], [6, null]].forEach(([a, z], i) => { const x1 = X(xs[a]), x2 = z == null ? X(xFin) : X(xs[z]); svg += `<rect x="${x1}" y="${h0}" width="${x2 - x1}" height="${H - b - h0}" class="bande${i % 2}"/>`; });
    for (let v = 0; v <= yMax; v++) svg += `<line x1="${g}" x2="${W - dr}" y1="${Y(v)}" y2="${Y(v)}" class="grille"/><text x="${g - 5}" y="${Y(v) + 4}" class="gy">${v}</text>`;
    let dn = 0; xs.forEach((v, j) => { if (j === 0 || X(v) - X(xs[dn]) >= 12){ dn = j; svg += `<text x="${X(v)}" y="${H - b + 15}" class="gx">${j}</text>`; } });
    svg += ligne(r.base.y, "ref");
    S.forEach(x => svg += ligne(x.y, "pm-c", `stroke:${coul(M[x.t.fuit])}`, x.x));
    svg += `</svg>`;
    const g2 = r.moteurs.find(x => x.m.code === m.code);
    return `<figure class="pm-carte"><figcaption><span style="color:${e(coul(m))}">${e(m.nom)}</span><span class="pm-note">${g2 ? f(g2.note) : ""}</span></figcaption>${svg}
      <p class="pm-leg">${S.map(x => `<span title="note ${f(x.note)} · α ${f(x.alpha)}"><span class="pm-pastille" style="background:${coul(M[x.t.fuit])}"></span>${e(x.t.nom.charAt(0).toUpperCase() + x.t.nom.slice(1))}</span>`).join("")}</p></figure>`;
  }).join("")}</div>`;
}
(function(){
  const st = document.createElement("style");
  st.textContent = `.pm-grille{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px;margin:10px 0}
.pm-carte{margin:0;background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:8px 10px}
.pm-carte figcaption{font-weight:600;font-size:15px;margin:0 0 2px;display:flex;justify-content:space-between;align-items:baseline}
.pm-carte .pm-note{font-size:16px;color:var(--ink);font-variant-numeric:tabular-nums}
svg.pm{width:100%;height:auto;display:block;font-family:inherit}
svg.pm .bande0{fill:var(--paper)} svg.pm .bande1{fill:color-mix(in srgb, var(--accent) 7%, var(--panel))}
svg.pm .grille{stroke:var(--line)} svg.pm .gy{font-size:10px;fill:var(--muted);text-anchor:end} svg.pm .gx{font-size:10.5px;fill:var(--ink);text-anchor:middle}
svg.pm .ref{fill:none;stroke:var(--muted);stroke-width:1.5;stroke-dasharray:2 3}
svg.pm .pm-c{fill:none;stroke-width:2.4;stroke-linejoin:round}
.pm-leg{margin:4px 0 0;font-size:12.5px;display:flex;flex-wrap:wrap;gap:2px 12px;color:var(--muted)}
.pm-pastille{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:6px;vertical-align:0}`;
  document.head.appendChild(st);
})();

/* Rosace : 5 moteurs, l'offre (trait) en contour, la réussite en surface. couleurs : { code: couleur } */
function rosaceSVG(spectre, moteurs){
  const e = s => String(s ?? "").replace(/[&<>"']/g, k => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[k]));
  const f = v => v == null ? "—" : Number(v).toFixed(2).replace(".", ",");
  const W = 400, cx = 200, cy = 168, R = 104, M = moteurs.map(m => m.code);
  const pt = (i, v) => { const a = -Math.PI / 2 + i * 2 * Math.PI / M.length; return [cx + Math.cos(a) * R * v / 5, cy + Math.sin(a) * R * v / 5]; };
  let s = `<svg class="rosace" viewBox="0 0 ${W} 360" role="img" aria-label="Rosace des cinq moteurs">`;
  [1,2,3,4,5].forEach(v => s += `<polygon points="${M.map((_, i) => pt(i, v).join(",")).join(" ")}" class="anneau"/>`);
  M.forEach((_, i) => { const [x, y] = pt(i, 5); s += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" class="rayon"/>`; });
  s += `<polygon points="${M.map((m, i) => pt(i, spectre[m]?.reussite ?? 0).join(",")).join(" ")}" class="reussite"/>`;
  s += `<polygon points="${M.map((m, i) => pt(i, spectre[m]?.trait ?? 0).join(",")).join(" ")}" class="offre"/>`;
  moteurs.forEach((m, i) => { const [x, y] = pt(i, i === 0 ? 7.3 : 6.1), anc = x < cx - 10 ? "end" : x > cx + 10 ? "start" : "middle";
    s += `<text x="${x}" y="${y}" class="mot" style="text-anchor:${anc};fill:${e(m.couleur)}">${e(m.nom)}</text>
      <text x="${x}" y="${y + 16}" class="val" style="text-anchor:${anc}">offre ${f(spectre[m.code]?.trait)}</text>
      <text x="${x}" y="${y + 31}" class="val" style="text-anchor:${anc}">réussite ${f(spectre[m.code]?.reussite)}</text>`; });
  return s + `</svg>`;
}
(function(){
  const st = document.createElement("style");
  st.textContent = `svg.rosace{width:100%;max-width:440px;height:auto;display:block;margin:0 auto;font-family:inherit}
svg.rosace .anneau{fill:none;stroke:var(--line)} svg.rosace .rayon{stroke:var(--line)}
svg.rosace .reussite{fill:color-mix(in srgb, var(--accent) 22%, transparent);stroke:var(--accent);stroke-width:1.5}
svg.rosace .offre{fill:none;stroke:var(--ink);stroke-width:2;stroke-dasharray:5 4}
svg.rosace .mot{font-size:15px;font-weight:600} svg.rosace .val{font-size:13px;fill:var(--muted)}`;
  document.head.appendChild(st);
})();

/* ---------------- d'une fiche d'évaluation aux entrées du calcul (partagé : outil, rosace) ---------------- */
// note d'une paire à partir de la saisie { axe: { valeur, sans_objet } } ; ax : les axes de la paire
// complète quand tous ses axes saisis (non calculés) ont une valeur
function noteDePaire(p, s, ax){
  const val = r => s[ax.find(a => a.rang === r)?.code]?.valeur;
  const enS = x0 => { const t = (x0 + 2) / 9; return t <= .5 ? 10 * t * t : 5 * (1 - 2 * (1 - t) * (1 - t)); };
  if (ax.some(a => s[a.code]?.sans_objet)) return { complete:true, so:true, note:null };
  const v1 = val("1"), v2 = val("2");
  if (v1 != null && p.na_si_axe1_nul && Math.round(v1) === 0) return { complete:true, na1:true, note:null };
  if (v1 != null && p.seuil_axe1 != null && v1 < Number(p.seuil_axe1) && (v2 == null || v2 > 1)) return { complete:true, seuil:true, note:null };
  if (ax.filter(a => a.echelle !== "calcule").some(a => s[a.code]?.valeur == null)) return { complete:false, note:null };
  const m = p.mecanisme;
  if (m === "composite"){ const a = val("2a"), b = val("2b"); return { complete:true, note:(b * v1 + a * (5 - v1)) / 5 }; }
  if (m === "moyenne") return { complete:true, note:(val("2a") + val("2b")) / 2 };
  if (m === "theme") return { complete:true, note:noteTheme(v1, val("2b")) };
  if (m === "lien") return { complete:true, note:noteLien(val("2a"), val("2b"), val("1c"), val("1d")) };
  return { complete:true, note: m === "liee" ? enS(v1 + v2) : m === "crans5" ? 2.5 + v2 * 1.25 : v2 };
}
// THÈME : l'incarnation pèse selon la présence du thème, le reste va à 2,5 (un jeu abstrait obtient 2,5)
const noteTheme = (presence, incarnation) => (incarnation * presence + 2.5 * (5 - presence)) / 5;
// LIEN : justesse et parole mêlées selon la place de la parole, puis l'étendue accentue l'écart à 2,5 (au plus 40 %)
function noteLien(justesse, parole, place, etendue){
  const base = justesse * (1 - place / 10) + parole * place / 10;
  return Math.min(5, Math.max(0, base + (etendue / 5) * (base - 2.5) * .4));
}
// palier de prix (0 sous 20 €, 1 de 20 à 40, 2 jusqu'à 70, 3 jusqu'à 120, 4 jusqu'à 200, 5 au-delà) : la porte d'entrée de la timeline
function palierPrix(prix){
  if (prix == null || prix === "" || Number.isNaN(Number(prix))) return null;
  const x = Number(prix), seuils = [19.99, 40, 70, 120, 200]; let i = 0; while (i < seuils.length && x > seuils[i]) i++; return i;
}
/* Coût par session (12/10/2026) : prix ÷ min(durée de vie, 50). La durée de vie va jusqu'à l'abandon ou jusqu'à l'arrivée au plancher
   de nostalgie ; il est rarissime de dépasser 50 sessions d'un même jeu. Rien sans prix, ni si le jeu est abandonné avant sa première
   session (ω au jalon 1, 2 ou 3). Par heure : avec la durée moyenne de la fiche. */
const PLAFOND_PARTIES_VIE = 50;
function coutParPartie(prix, c, dureeMin, dureeMax){
  if (prix == null || prix === "" || !c || (c.omega != null && c.omega <= 3)) return null;
  const brut = c.vie ?? Infinity, parties = Math.max(1, Math.min(brut, PLAFOND_PARTIES_VIE));
  const duree = [dureeMin, dureeMax].map(Number).filter(v => v > 0), h = duree.length ? duree.reduce((a, b) => a + b, 0) / duree.length / 60 : null;
  return { parties, plafonne: brut > PLAFOND_PARTIES_VIE, parPartie: Number(prix) / parties, parHeure: h ? Number(prix) / (parties * h) : null };
}
function texteCout(k){
  if (!k) return "—";
  const e = v => v < 1 ? v.toFixed(2).replace(".", ",") : v < 10 ? v.toFixed(1).replace(".", ",") : String(Math.round(v));
  return `${e(k.parPartie)} € par session${k.parHeure != null ? ` (${e(k.parHeure)} € de l'heure)` : ""} sur ${k.plafonne ? PLAFOND_PARTIES_VIE + " sessions et plus" : texteSessions(k.parties)}`;
}
// toutes les entrées d'une fiche : n (pour la courbe), paires (pour les notes), manque (paires à remplir), absents (sans objet)
// extra : { contenu_parties, prix } (ou, comme avant, le seul nombre de parties pour tout exploiter)
function entreesFiche(s, paires, axes, extra){
  const x = extra != null && typeof extra === "object" ? extra : { contenu_parties: extra };
  const axesDeP = code => axes.filter(a => a.paire === code);
  const etats = Object.fromEntries(paires.map(p => [p.code, noteDePaire(p, s, axesDeP(p.code))]));
  const n = { contenu_parties: Number(x.contenu_parties) || null, VAL1: palierPrix(x.prix) }, manque = new Set(), absents = new Set();
  TIMELINE_PAIRES.forEach(code => { const r = etats[code]; if (!r) return;
    if (!r.complete) manque.add(code); else if (r.note == null) absents.add(code); else n[code] = r.note; });
  TIMELINE_AXES.forEach(code => {
    const a = axes.find(x => x.code === code); if (!a) return;
    const r = etats[a.paire], v = s[code]?.valeur;
    if (r?.seuil && a.rang !== "1") return;
    if (r?.so || (r?.na1 && a.rang !== "1")){ absents.add(a.paire); return; }
    if (v == null) manque.add(a.paire); else n[code] = v;
  });
  return { n, manque:[...manque], absents:[...absents], etats,
    paires: paires.map(p => ({ chap:p.chapitre, code:p.code, note:etats[p.code].note })) };
}
// le meilleur des jeux pour des profils (codes complets W.b/u) : fiches = [{ jeu, statut, saisie, contenu_parties, prix }]
// pour un tempérament, un style ou un moteur, passer la liste de ses profils : stylesDe(code)
function jeuxPourJoueurs(fiches, paires, axes, pl, codes){
  const prs = codes.map(prDeStyle);
  const parJeu = {};
  fiches.forEach(f => {
    const e = entreesFiche(f.saisie, paires, axes, { contenu_parties:f.contenu_parties, prix:f.prix });
    if (e.manque.length) return;                                   // fiche incomplète : pas de calcul
    const base = noteProfil(e.paires, e.n, null), cb = flowJeu(e.n);
    const res = prs.map(pr => ({ note: noteProfil(e.paires, e.n, pr), c: flowJeu(e.n, pr) }));
    const moy = k => res.reduce((t, r) => t + k(r), 0) / res.length;
    (parJeu[f.jeu] ??= []).push({ finale: f.statut === "finale", base, alphaBase: cb.y[cb.alpha],
      note: moy(r => r.note), alpha: moy(r => r.c.y[r.c.alpha]), vie: moy(r => Math.min(r.c.vie ?? 1e7, 1e7)) });
  });
  return Object.entries(parJeu).map(([jeu, L]) => {
    const F = L.some(x => x.finale) ? L.filter(x => x.finale) : L, m = k => F.reduce((t, x) => t + x[k], 0) / F.length;
    return { jeu, fiches:F.length, finale:F[0].finale, note:m("note"), base:m("base"), alpha:m("alpha"), vie:m("vie") };
  }).sort((a, b) => b.note - a.note);
}

/* ---------------- lecture des jeux évalués et tableau « ses jeux » (partagé : rosace, fiche du joueur) ---------------- */
async function lireJeuxEvalues(sb){
  const lire = async (t, o) => { const tout = []; for (let d = 0; ; d += 1000){ let q = sb.from(t).select("*"); if (o) q = q.order(o); const { data, error } = await q.range(d, d + 999);
    if (error) throw error; tout.push(...data); if (data.length < 1000) return tout; } };
  try {
    const [paires, axes, jeux, evals, vals] = await Promise.all([lire("prisme_paires","ordre"), lire("prisme_axes","ordre"), lire("prisme_jeux","nom"), lire("prisme_evaluations"), lire("prisme_evaluation_valeurs")]);
    if (!paires.length) return { refus:true };
    const saisies = {}; vals.forEach(v => (saisies[v.evaluation] ??= {})[v.axe] = { valeur: v.valeur == null ? null : Number(v.valeur), sans_objet: v.sans_objet });
    return { paires, axes, jeux, fiches: evals.map(e => ({ jeu:e.jeu, statut:e.statut, contenu_parties:e.contenu_parties, prix:e.prix, saisie: saisies[e.id] || {} })) };
  } catch (e){ return { refus:true }; }
}
// L : résultat de jeuxPourJoueurs ; d : résultat de lireJeuxEvalues ; qui : « lui », « vous »…
function tableJeuxHTML(L, d, qui, moyenne){
  const e = s => String(s ?? "").replace(/[&<>"']/g, k => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[k]));
  const nom = c => d.jeux.find(j => j.code === c)?.nom || c, f = (v, k = 2) => Number(v).toFixed(k).replace(".", ",");
  if (!L.length) return `<p class="pj-discret">Aucun jeu n'a encore de fiche complète.</p>`;
  const ecart = x => { const v = x.note - x.base; return `<span class="pj-ecart ${v >= .005 ? "plus" : v <= -.005 ? "moins" : ""}">${Math.abs(v) < .005 ? "±" : v > 0 ? "+" : "−"}${f(Math.abs(v))}</span>`; };
  const ligne = (x, i) => `<tr><td class="rang">${i}</td><td><a href="evaluation.html?jeu=${encodeURIComponent(x.jeu)}">${e(nom(x.jeu))}</a>${x.finale ? "" : ' <small class="pj-discret">brouillon</small>'}</td>
    <td class="n"><b>${f(x.note)}</b> ${ecart(x)}</td><td class="n">${f(x.alpha)}</td><td class="n">${x.vie >= 1e7 ? "∞" : Math.round(x.vie)}</td></tr>`;
  const haut = L.slice(0, 8), bas = L.length > 11 ? L.slice(-3) : [];
  return `<p class="pj-discret">${L.length} jeu${L.length > 1 ? "x" : ""} évalué${L.length > 1 ? "s" : ""}, classé${L.length > 1 ? "s" : ""} ${qui === "vous" ? "selon la note qu'ils obtiennent pour vous" : "selon la note vue par " + e(qui) + (moyenne ? " (en moyenne)" : "")} ; l'écart se lit par rapport à la note pour tous.</p>
    <table class="pj-jeux"><thead><tr><th></th><th>Jeu</th><th class="n">Note</th><th class="n">α</th><th class="n" title="en sessions ; ∞ : un classique">Durée de vie</th></tr></thead>
    <tbody>${haut.map((x, i) => ligne(x, i + 1)).join("")}</tbody>
    ${bas.length ? `<tbody class="bas"><tr><td colspan="5" class="pj-discret">Ceux qui ${qui === "vous" ? "vous" : "lui"} vont le moins</td></tr>${bas.map((x, i) => ligne(x, L.length - bas.length + i + 1)).join("")}</tbody>` : ""}</table>`;
}
(function(){
  const st = document.createElement("style");
  st.textContent = `.pj-discret{color:var(--muted);font:13.5px/1.5 var(--sans, inherit)}
table.pj-jeux{width:100%;border-collapse:collapse;font-size:14px;margin:4px 0 10px}
table.pj-jeux th{font-weight:500;font-size:12px;color:var(--muted);text-align:left;border-bottom:1px solid var(--line);padding:4px 5px}
table.pj-jeux td{border-bottom:1px solid var(--line);padding:5px;vertical-align:baseline} table.pj-jeux .n{text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums}
table.pj-jeux td.rang{color:var(--muted);width:1.6em} table.pj-jeux tbody.bas td{border-bottom-color:transparent}
.pj-ecart{font-size:12px;color:var(--muted)} .pj-ecart.plus{color:#1E7A46} .pj-ecart.moins{color:#B42318}
@media (prefers-color-scheme: dark){.pj-ecart.plus{color:#5CC98A} .pj-ecart.moins{color:#F2837A}}`;
  document.head.appendChild(st);
})();
