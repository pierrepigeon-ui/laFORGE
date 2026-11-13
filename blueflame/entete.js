/* =====================================================================
   Flamme Bleue — en-tête commun (1.9, 13/11/2026 01h11)
   - la couronne de cinq flammes (logo 2026) devant le nom « Flamme Bleue », qui ramène à l'accueil ;
   - un lien « La Forge », avec sa petite enclume, en haut à droite, comme dans PRISME :
     il n'apparaît que si la personne a aussi accès à PRISME (la Forge a alors autre chose à proposer) ;
   - (1.3) le bouton de la console, au même endroit sur toutes les pages, juste avant l'adresse de la personne :
     « Console » pour l'éditeur et le propriétaire, « Le modèle » pour l'invité, rien pour un visiteur anonyme
     ni sur la console elle-même ;
   - (1.4) la première ligne de chaque écran reste figée en haut quand on fait défiler la page,
     pour revenir au menu facilement ; sa hauteur est publiée dans --ent-h (ancres, panneaux collants).
     À l'impression, elle redevient normale.
   - (1.5) la mention « © 2026 Pierre Pigeon, tous droits réservés » et un lien « conditions » vers la LICENSE du dépôt,
     sur sa propre ligne en bas du pied de page de chaque page (ou sous la ligne de version là où il n'y a pas de pied de page).
   - (1.6) le logo « flamme de gaz » en petit (piste B) : flammes bleu dense, cœur bleu clair, pied jaune ; idem pour l'icône d'onglet.
   - (1.7) à l'impression, la mention de droits en fin de document (les pieds de page sont masqués à l'impression) ;
     sur les fiches et portraits, elle rejoint la ligne de bas de feuille (« .pied ») pour ne pas ajouter de hauteur.
   - (1.8) accès communs de la Forge : « invité » devient « lecteur » (les deux restent compris pendant la transition).
   - (1.9) le bandeau commun de la Forge (charte § 4 bis) : flèche de remontée, logo et nom, menu des pages,
     puis La Forge, pastille des messages (propriétaire), Console, nom de la personne et connexion. Les styles viennent de
     ../forge_bandeau.css et ../forge_bandeau.js (Supervision), chargés ici ; l'ancien en-tête de la page est vidé
     (la console garde ses onglets en barre de page). Les lignes ci-dessus sur le lien « La Forge », le bouton de console
     et la ligne figée (1.3, 1.4) sont remplacées par ce bandeau.
   À charger APRÈS le script de la page (il réutilise son client Supabase « sb »).
   ===================================================================== */
(function () {
  const ENCLUME = "data:image/png;base64,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";
  const FLAMME = '<svg class="fb-flamme" viewBox="2 24 96 74" aria-hidden="true"><defs><clipPath id="fbBp"><rect x="0" y="78" width="100" height="8"/></clipPath></defs><rect x="6" y="86" width="88" height="8" rx="4" fill="var(--fb-socle,#0B2E8A)"/><path d="M13 84c-7-7-5-18 9-34-1 14 6 26-1 34zM30 84c-7-9-4-24 13-46-2 18 6 34-1 46zM47 84c-8-10-5-30 15-56-3 22 7 42-1 56zM64 84c-7-9-4-26 13-44-2 18 6 32-1 44zM81 84c-7-7-5-20 10-36-1 14 6 28-1 36z" fill="#1B3FC9"/><path d="M13 84c-7-7-5-18 9-34-1 14 6 26-1 34z" fill="#79C4FF" transform="translate(17 84) scale(0.58) translate(-17 -84)"/><path d="M30 84c-7-9-4-24 13-46-2 18 6 34-1 46z" fill="#79C4FF" transform="translate(36 84) scale(0.58) translate(-36 -84)"/><path d="M47 84c-8-10-5-30 15-56-3 22 7 42-1 56z" fill="#79C4FF" transform="translate(54 84) scale(0.58) translate(-54 -84)"/><path d="M64 84c-7-9-4-26 13-44-2 18 6 32-1 44z" fill="#79C4FF" transform="translate(71 84) scale(0.58) translate(-71 -84)"/><path d="M81 84c-7-7-5-20 10-36-1 14 6 28-1 36z" fill="#79C4FF" transform="translate(87 84) scale(0.58) translate(-87 -84)"/><g clip-path="url(#fbBp)"><path d="M13 84c-7-7-5-18 9-34-1 14 6 26-1 34z" fill="#FFD23F" transform="translate(17 84) scale(0.58) translate(-17 -84)"/><path d="M30 84c-7-9-4-24 13-46-2 18 6 34-1 46z" fill="#FFD23F" transform="translate(36 84) scale(0.58) translate(-36 -84)"/><path d="M47 84c-8-10-5-30 15-56-3 22 7 42-1 56z" fill="#FFD23F" transform="translate(54 84) scale(0.58) translate(-54 -84)"/><path d="M64 84c-7-9-4-26 13-44-2 18 6 32-1 44z" fill="#FFD23F" transform="translate(71 84) scale(0.58) translate(-71 -84)"/><path d="M81 84c-7-7-5-20 10-36-1 14 6 28-1 36z" fill="#FFD23F" transform="translate(87 84) scale(0.58) translate(-87 -84)"/></g></svg>';
  const css = document.createElement("style");
  css.textContent = `
    :root{--fb-socle:#0B2E8A;--fb-langue:#2F6BFF;--fb-nom:#0B2E8A}
    @media (prefers-color-scheme: dark){:root{--fb-socle:#4A7BFF;--fb-langue:#7FA6FF;--fb-nom:#7FA6FF}}
    .fg-bandeau .hidden{display:none!important}                                   /* boutons que la page masque (connexion, déconnexion) */
    @media (prefers-color-scheme: dark){ .fg-forge img{background:#F6F5F1;border-radius:3px;padding:1px} }
    .fb-barre-page{position:static!important}
    @media (min-width:701px){ header.fg-bandeau{flex-wrap:nowrap} }              /* neutralise la règle « header{flex-wrap:wrap} » des pages */
    .fb-droits{display:block;flex-basis:100%;margin-top:2px;text-align:right}
    .fb-droits a{color:inherit;text-decoration:underline}
    .fb-droits-imp{display:none}
    @media print{ .fb-droits{display:none!important} .fb-droits-imp{display:block!important;margin:10px 0 0;font-size:9pt;color:#5B6573;text-align:right;break-inside:avoid}
                  .pied .fb-droits-imp{display:inline!important;margin:0;font-size:inherit;color:inherit} }`;
  document.head.appendChild(css);

  // icône d'onglet : la couronne seule
  if (!document.querySelector('link[rel="icon"]')){ const ic = document.createElement("link"); ic.rel = "icon"; ic.type = "image/svg+xml";
    ic.href = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 11 100 100"><defs><clipPath id="fbBp"><rect x="0" y="78" width="100" height="8"/></clipPath></defs><rect x="6" y="86" width="88" height="8" rx="4" fill="#0B2E8A"/><path d="M13 84c-7-7-5-18 9-34-1 14 6 26-1 34zM30 84c-7-9-4-24 13-46-2 18 6 34-1 46zM47 84c-8-10-5-30 15-56-3 22 7 42-1 56zM64 84c-7-9-4-26 13-44-2 18 6 32-1 44zM81 84c-7-7-5-20 10-36-1 14 6 28-1 36z" fill="#1B3FC9"/><path d="M13 84c-7-7-5-18 9-34-1 14 6 26-1 34z" fill="#79C4FF" transform="translate(17 84) scale(0.58) translate(-17 -84)"/><path d="M30 84c-7-9-4-24 13-46-2 18 6 34-1 46z" fill="#79C4FF" transform="translate(36 84) scale(0.58) translate(-36 -84)"/><path d="M47 84c-8-10-5-30 15-56-3 22 7 42-1 56z" fill="#79C4FF" transform="translate(54 84) scale(0.58) translate(-54 -84)"/><path d="M64 84c-7-9-4-26 13-44-2 18 6 32-1 44z" fill="#79C4FF" transform="translate(71 84) scale(0.58) translate(-71 -84)"/><path d="M81 84c-7-7-5-20 10-36-1 14 6 28-1 36z" fill="#79C4FF" transform="translate(87 84) scale(0.58) translate(-87 -84)"/><g clip-path="url(#fbBp)"><path d="M13 84c-7-7-5-18 9-34-1 14 6 26-1 34z" fill="#FFD23F" transform="translate(17 84) scale(0.58) translate(-17 -84)"/><path d="M30 84c-7-9-4-24 13-46-2 18 6 34-1 46z" fill="#FFD23F" transform="translate(36 84) scale(0.58) translate(-36 -84)"/><path d="M47 84c-8-10-5-30 15-56-3 22 7 42-1 56z" fill="#FFD23F" transform="translate(54 84) scale(0.58) translate(-54 -84)"/><path d="M64 84c-7-9-4-26 13-44-2 18 6 32-1 44z" fill="#FFD23F" transform="translate(71 84) scale(0.58) translate(-71 -84)"/><path d="M81 84c-7-7-5-20 10-36-1 14 6 28-1 36z" fill="#FFD23F" transform="translate(87 84) scale(0.58) translate(-87 -84)"/></g></svg>'); document.head.appendChild(ic); }

  // (1.5) les droits d'auteur, en bas du pied de page
  const droits = document.createElement("span");
  droits.className = "fb-droits";
  droits.innerHTML = '© 2026 Pierre Pigeon, tous droits réservés · <a href="https://github.com/pierrepigeon-ui/laFORGE/blob/main/LICENSE" target="_blank" rel="noopener">conditions</a>';
  const pied = document.querySelector("footer") || document.getElementById("version")?.parentNode;
  if (pied){
    if (pied.id === "version"){                                   // le pied de page EST la ligne de version : on la loge dans un span
      const v = document.createElement("span"); v.id = "version"; v.textContent = pied.textContent;
      pied.removeAttribute("id"); pied.textContent = ""; pied.appendChild(v);
    }
    pied.appendChild(droits);
  }

  // (1.7) à l'impression : la mention en fin de document, ou dans la ligne de bas de feuille des fiches et portraits
  const droitsImp = document.createElement("span");
  droitsImp.className = "fb-droits-imp";
  const placerDroitsImp = () => {
    const pied = document.querySelector(".feuille .pied > span");             // fiche, portrait : la première partie de la ligne de bas de feuille
    if (pied){ droitsImp.textContent = " · © 2026 Pierre Pigeon, tous droits réservés"; pied.appendChild(droitsImp); }
    else { droitsImp.textContent = "© 2026 Pierre Pigeon, tous droits réservés — conditions : github.com/pierrepigeon-ui/laFORGE (LICENSE)"; document.body.appendChild(droitsImp); }
  };
  placerDroitsImp(); window.addEventListener("beforeprint", placerDroitsImp);

  // ---------- (1.9) le bandeau commun de la Forge (forge_bandeau.css / .js, tenus par Supervision ; charte § 4 bis) ----------
  // Cet en-tête ne fait que construire la structure attendue ; il ne redéfinit aucun style du bandeau.
  const BANDEAU_V = "1.0";
  if (!document.querySelector('link[href*="forge_bandeau.css"]')){
    const l = document.createElement("link"); l.rel = "stylesheet"; l.href = "../forge_bandeau.css?v=" + BANDEAU_V; document.head.appendChild(l);
  }
  let pretBandeau;                                                     // les pages attendent ce signal avant d'appeler ForgeBandeau
  const bandeauPret = new Promise(r => { pretBandeau = r; });
  if (window.ForgeBandeau) pretBandeau(window.ForgeBandeau);
  else {
    const s = document.createElement("script"); s.src = "../forge_bandeau.js?v=" + BANDEAU_V;
    s.onload = () => { window.ForgeBandeau.publierHauteur(); pretBandeau(window.ForgeBandeau); };
    document.head.appendChild(s);
  }
  window.FlammeBandeau = { pret: bandeauPret };

  const page = (location.pathname.split("/").pop() || "index.html").replace(/\?.*$/, "");
  const surAccueil = page === "index.html", surConsole = page === "console.html";
  const FLECHE_HAUT = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const ICONE_CONSOLE = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="1.5" y="2.5" width="13" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M4.5 6.5l2 1.5-2 1.5M8 10h3.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  // menu des pages de Flamme Bleue : [page, libellé, qui la voit]
  const MENU = [
    ["autotest.html", "Autotest", "tous"],
    ["encyclopedie.html", "Encyclopédie", "tous"],
    ["galerie.html", "Galerie", "comptes"],
    ["totems.html", "Totems", "comptes"],
    ["comparaison.html", "Comparaison", "comptes"],
    ["rosace.html", "Rosace", "gestion"]
  ];

  const bandeau = document.createElement("header");
  bandeau.className = "fg-bandeau";
  bandeau.innerHTML =
    `<a class="fg-haut" href="${surAccueil ? "../" : "index.html"}" title="${surAccueil ? "Revenir à la Forge de l'Arpenteur" : "Accueil de Flamme Bleue"}">${FLECHE_HAUT}</a>` +
    `<a class="fg-marque" href="index.html" title="Accueil de Flamme Bleue">${FLAMME.replace('class="fb-flamme"', 'class="fg-logo"')}<span class="fg-nom">Flamme Bleue</span></a>` +
    `<nav class="fg-nav" aria-label="Pages de Flamme Bleue">${MENU.map(([h, l, q]) => `<a href="${h}" data-qui="${q}"${h === page ? ' aria-current="page"' : ""}${q === "tous" ? "" : ' style="display:none"'}>${l}</a>`).join("")}</nav>` +
    `<div class="fg-droite">` +
      `<a class="fg-forge" href="../" title="Revenir à la Forge de l'Arpenteur"><img src="${ENCLUME}" alt="" width="15" height="17"><span>La Forge</span></a>` +
      `<button class="fg-pastille" type="button" title="Lire les messages sur l'accueil de la Forge" style="display:none"></button>` +
      (surConsole ? "" : `<a class="fg-btn fg-console" href="console.html" style="display:none">${ICONE_CONSOLE}<span class="fg-long">Console</span></a>`) +
    `</div>`;
  document.body.prepend(bandeau);
  const droite = bandeau.querySelector(".fg-droite");
  const montrer = (el, oui) => { if (el) el.style.display = oui ? "" : "none"; };
  bandeau.querySelector(".fg-pastille").addEventListener("click", () => { location.href = "../"; });

  // la personne et la connexion : on déplace les éléments de la page (ils gardent leurs identifiants et leurs actions)
  const qui = document.getElementById("who");
  if (qui){ qui.className = "fg-qui"; droite.appendChild(qui); }
  ["btn-login", "btn-logout", "logout"].forEach(id => {
    const b = document.getElementById(id);
    if (b){ b.className = "fg-btn" + (b.classList.contains("hidden") ? " hidden" : ""); droite.appendChild(b); }
  });

  // l'ancien en-tête de la page : on retire ce que le bandeau reprend ; s'il reste des outils (onglets de la console), il devient une barre de page
  const ancien = document.querySelector("header.bandeau") || document.querySelector("#app > header") || document.querySelector("body > header:not(.fg-bandeau)") || document.querySelector("body > .barre");
  if (ancien){
    ancien.querySelectorAll(".wordmark, .signature, :scope > nav:not([role=tablist])").forEach(e => e.remove());
    ancien.querySelectorAll(".who").forEach(w => { if (!w.querySelector("button:not(.hidden), span:not(:empty), a")) w.remove(); });
    if (!ancien.querySelector("nav, button, a, input, select")) ancien.remove();
    else ancien.classList.add("fb-barre-page");
  }

  // hauteur : le bandeau commun publie --fg-h ; on la recopie dans --ent-h, que les pages utilisent déjà
  const mesurer = () => {
    window.ForgeBandeau?.publierHauteur();                                       // --fg-h suit aussi les changements de contenu
    const h = bandeau.offsetHeight + (document.querySelector(".fg-sous")?.offsetHeight || 0);
    document.documentElement.style.setProperty("--ent-h", h + "px");
  };
  mesurer(); window.addEventListener("resize", mesurer);
  if (window.ResizeObserver) new ResizeObserver(mesurer).observe(bandeau);
  bandeauPret.then(mesurer);

  // ce que la personne voit selon son rôle
  let client = null;
  try { client = sb; } catch { return; }                         // « sb » : le client Supabase de la page
  const consoleBtn = bandeau.querySelector(".fg-console"), pastille = bandeau.querySelector(".fg-pastille");
  let vu = undefined, nomCompte = null, courriel = null;
  // le nom de la personne plutôt que son adresse, quand la page l'affiche
  if (qui && window.MutationObserver) new MutationObserver(() => {
    if (nomCompte && courriel && qui.textContent.includes(courriel)) qui.textContent = qui.textContent.replace(courriel, nomCompte);
  }).observe(qui, { childList: true, characterData: true, subtree: true });
  client.auth.onAuthStateChange((_e, session) => {
    const id = session?.user?.id || null; if (id === vu) return; vu = id; courriel = session?.user?.email || null;
    const voir = role => bandeau.querySelectorAll(".fg-nav a").forEach(a => {
      const q = a.dataset.qui; montrer(a, q === "tous" || (q === "comptes" && role) || (q === "gestion" && ["proprietaire", "administrateur"].includes(role)));
    });
    if (!id){ voir(null); montrer(consoleBtn, false); montrer(pastille, false); return; }
    setTimeout(async () => {
      let role = null;
      try { ({ data: role } = await client.rpc("flamme_mon_role")); } catch {}
      voir(role);
      if (consoleBtn){
        const lecteur = role === "lecteur" || role === "invite";
        consoleBtn.querySelector("span").textContent = lecteur ? "Le modèle" : "Console";
        consoleBtn.title = lecteur ? "Parcourir les profils du modèle ; changer votre mot de passe" : "Console : le contenu du modèle, le catalogue de profils, les résultats";
        montrer(consoleBtn, !!role);
      }
      try { const { data } = await client.from("forge_comptes").select("nom").eq("user_id", id).maybeSingle();
            nomCompte = data?.nom?.trim() || null; if (nomCompte && qui && qui.textContent.includes(courriel)) qui.textContent = qui.textContent.replace(courriel, nomCompte); } catch {}
      if (role === "proprietaire"){
        try { const { count: nb } = await client.from("forge_messages").select("id", { count: "exact", head: true }).eq("lu", false); const count = nb || 0;
              pastille.textContent = `${count} message${count > 1 ? "s" : ""} non lu${count > 1 ? "s" : ""}`; montrer(pastille, count > 0); } catch { montrer(pastille, false); }
      } else montrer(pastille, false);
      mesurer();
    }, 0);
  });
})();
