/* =====================================================================
   Flamme Bleue — en-tête commun (1.6, 30/10/2026 13h52)
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
   À charger APRÈS le script de la page (il réutilise son client Supabase « sb »).
   ===================================================================== */
(function () {
  const ENCLUME = "data:image/png;base64,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";
  const FLAMME = '<svg class="fb-flamme" viewBox="2 24 96 74" aria-hidden="true"><defs><clipPath id="fbBp"><rect x="0" y="78" width="100" height="8"/></clipPath></defs><rect x="6" y="86" width="88" height="8" rx="4" fill="var(--fb-socle,#0B2E8A)"/><path d="M13 84c-7-7-5-18 9-34-1 14 6 26-1 34zM30 84c-7-9-4-24 13-46-2 18 6 34-1 46zM47 84c-8-10-5-30 15-56-3 22 7 42-1 56zM64 84c-7-9-4-26 13-44-2 18 6 32-1 44zM81 84c-7-7-5-20 10-36-1 14 6 28-1 36z" fill="#1B3FC9"/><path d="M13 84c-7-7-5-18 9-34-1 14 6 26-1 34z" fill="#79C4FF" transform="translate(17 84) scale(0.58) translate(-17 -84)"/><path d="M30 84c-7-9-4-24 13-46-2 18 6 34-1 46z" fill="#79C4FF" transform="translate(36 84) scale(0.58) translate(-36 -84)"/><path d="M47 84c-8-10-5-30 15-56-3 22 7 42-1 56z" fill="#79C4FF" transform="translate(54 84) scale(0.58) translate(-54 -84)"/><path d="M64 84c-7-9-4-26 13-44-2 18 6 32-1 44z" fill="#79C4FF" transform="translate(71 84) scale(0.58) translate(-71 -84)"/><path d="M81 84c-7-7-5-20 10-36-1 14 6 28-1 36z" fill="#79C4FF" transform="translate(87 84) scale(0.58) translate(-87 -84)"/><g clip-path="url(#fbBp)"><path d="M13 84c-7-7-5-18 9-34-1 14 6 26-1 34z" fill="#FFD23F" transform="translate(17 84) scale(0.58) translate(-17 -84)"/><path d="M30 84c-7-9-4-24 13-46-2 18 6 34-1 46z" fill="#FFD23F" transform="translate(36 84) scale(0.58) translate(-36 -84)"/><path d="M47 84c-8-10-5-30 15-56-3 22 7 42-1 56z" fill="#FFD23F" transform="translate(54 84) scale(0.58) translate(-54 -84)"/><path d="M64 84c-7-9-4-26 13-44-2 18 6 32-1 44z" fill="#FFD23F" transform="translate(71 84) scale(0.58) translate(-71 -84)"/><path d="M81 84c-7-7-5-20 10-36-1 14 6 28-1 36z" fill="#FFD23F" transform="translate(87 84) scale(0.58) translate(-87 -84)"/></g></svg>';
  const css = document.createElement("style");
  css.textContent = `
    .wordmark a{display:inline-flex;align-items:center;gap:.28em}
    .wordmark .fb-flamme{width:1.45em;height:1.12em;flex:none;margin-left:-.1em}
    :root{--fb-socle:#0B2E8A;--fb-langue:#2F6BFF;--fb-nom:#0B2E8A}
    @media (prefers-color-scheme: dark){:root{--fb-socle:#4A7BFF;--fb-langue:#7FA6FF;--fb-nom:#7FA6FF}}
    
    .fb-forge{display:inline-flex;align-items:center;gap:6px;color:inherit;text-decoration:none;font-size:13px;opacity:.85;margin-right:4px}
    .fb-forge:hover{opacity:1;text-decoration:underline}
    .fb-forge img{display:block}
    .fb-forge.cache{display:none}
    .barre > .fb-forge{margin-right:auto}   /* accueil : calé à gauche */
    .fb-console{display:inline-flex;align-items:center;gap:6px;color:inherit;text-decoration:none;font-size:13px;font-weight:500;
      border:1px solid currentColor;border-radius:7px;padding:4px 10px;opacity:.85;margin-right:6px;white-space:nowrap}
    .fb-console:hover{opacity:1;background:rgba(127,127,127,.12)}
    .fb-console.cache{display:none}
    .fb-console svg{width:14px;height:14px;flex:none}
    .fb-fige{position:sticky!important;top:0;z-index:45}
    html{scroll-padding-top:calc(var(--ent-h, 0px) + 16px)}
    @media print{ .fb-fige{position:static!important} }
    @media (max-width:700px){ .fb-fige{padding-top:6px!important;padding-bottom:6px!important;row-gap:4px!important} .fb-fige .signature{display:none} }
    @media (prefers-color-scheme: dark){ .fb-forge img{background:#F6F5F1;border-radius:3px;padding:1px} }
    .fb-droits{display:block;flex-basis:100%;margin-top:2px;text-align:right}
    .fb-droits a{color:inherit;text-decoration:underline}`;
  document.head.appendChild(css);

  // icône d'onglet : la couronne seule
  if (!document.querySelector('link[rel="icon"]')){ const ic = document.createElement("link"); ic.rel = "icon"; ic.type = "image/svg+xml";
    ic.href = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 11 100 100"><defs><clipPath id="fbBp"><rect x="0" y="78" width="100" height="8"/></clipPath></defs><rect x="6" y="86" width="88" height="8" rx="4" fill="#0B2E8A"/><path d="M13 84c-7-7-5-18 9-34-1 14 6 26-1 34zM30 84c-7-9-4-24 13-46-2 18 6 34-1 46zM47 84c-8-10-5-30 15-56-3 22 7 42-1 56zM64 84c-7-9-4-26 13-44-2 18 6 32-1 44zM81 84c-7-7-5-20 10-36-1 14 6 28-1 36z" fill="#1B3FC9"/><path d="M13 84c-7-7-5-18 9-34-1 14 6 26-1 34z" fill="#79C4FF" transform="translate(17 84) scale(0.58) translate(-17 -84)"/><path d="M30 84c-7-9-4-24 13-46-2 18 6 34-1 46z" fill="#79C4FF" transform="translate(36 84) scale(0.58) translate(-36 -84)"/><path d="M47 84c-8-10-5-30 15-56-3 22 7 42-1 56z" fill="#79C4FF" transform="translate(54 84) scale(0.58) translate(-54 -84)"/><path d="M64 84c-7-9-4-26 13-44-2 18 6 32-1 44z" fill="#79C4FF" transform="translate(71 84) scale(0.58) translate(-71 -84)"/><path d="M81 84c-7-7-5-20 10-36-1 14 6 28-1 36z" fill="#79C4FF" transform="translate(87 84) scale(0.58) translate(-87 -84)"/><g clip-path="url(#fbBp)"><path d="M13 84c-7-7-5-18 9-34-1 14 6 26-1 34z" fill="#FFD23F" transform="translate(17 84) scale(0.58) translate(-17 -84)"/><path d="M30 84c-7-9-4-24 13-46-2 18 6 34-1 46z" fill="#FFD23F" transform="translate(36 84) scale(0.58) translate(-36 -84)"/><path d="M47 84c-8-10-5-30 15-56-3 22 7 42-1 56z" fill="#FFD23F" transform="translate(54 84) scale(0.58) translate(-54 -84)"/><path d="M64 84c-7-9-4-26 13-44-2 18 6 32-1 44z" fill="#FFD23F" transform="translate(71 84) scale(0.58) translate(-71 -84)"/><path d="M81 84c-7-7-5-20 10-36-1 14 6 28-1 36z" fill="#FFD23F" transform="translate(87 84) scale(0.58) translate(-87 -84)"/></g></svg>'); document.head.appendChild(ic); }

  // la première ligne figée en haut de l'écran
  const ligne = document.querySelector("header.bandeau") || document.querySelector("#app > header") || document.querySelector("body > header") || document.querySelector("body > .barre");
  if (ligne){
    ligne.classList.add("fb-fige");
    if (getComputedStyle(ligne).backgroundColor === "rgba(0, 0, 0, 0)") ligne.style.background = getComputedStyle(document.body).backgroundColor;
    const mesurer = () => document.documentElement.style.setProperty("--ent-h", ligne.offsetHeight + "px");
    mesurer(); window.addEventListener("resize", mesurer);
    if (window.ResizeObserver) new ResizeObserver(mesurer).observe(ligne);
  }

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

  // la flamme devant le nom
  document.querySelectorAll(".wordmark a").forEach(a => { if (!a.querySelector(".fb-flamme")) a.insertAdjacentHTML("afterbegin", FLAMME); });

  // le lien vers la Forge, en tête de la zone de connexion (en haut à droite)
  const zone = document.querySelector("header .who") || document.querySelector(".barre");
  if (!zone) return;
  const lien = document.createElement("a");
  lien.className = "fb-forge cache"; lien.href = "../"; lien.title = "Revenir à la Forge de l'Arpenteur";
  lien.innerHTML = `<img src="${ENCLUME}" alt="" width="15" height="17">La Forge`;
  zone.insertBefore(lien, zone.firstChild);

  // le bouton de la console (pas sur la console elle-même)
  const surConsole = /console\.html$/.test(location.pathname);
  const consoleBtn = document.createElement("a");
  consoleBtn.className = "fb-console cache"; consoleBtn.href = "console.html";
  consoleBtn.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="1.5" y="2.5" width="13" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M4.5 6.5l2 1.5-2 1.5M8 10h3.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Console</span>';
  if (!surConsole){ const avant = zone.querySelector("#who"); zone.insertBefore(consoleBtn, avant && avant.parentNode === zone ? avant : null); }

  let client = null;
  try { client = sb; } catch { return; }                         // « sb » : le client Supabase de la page
  let vu = undefined;
  client.auth.onAuthStateChange((_e, session) => {
    const id = session?.user?.id || null; if (id === vu) return; vu = id;
    if (!id){ lien.classList.add("cache"); consoleBtn.classList.add("cache"); return; }
    setTimeout(async () => {
      try {
        const { data: role } = await client.rpc("flamme_mon_role");
        const invite = role === "invite";
        consoleBtn.querySelector("span").textContent = invite ? "Le modèle" : "Console";
        consoleBtn.title = invite ? "Parcourir les profils du modèle ; changer votre mot de passe" : "Console : le contenu du modèle, le catalogue de profils, les résultats";
        consoleBtn.classList.toggle("cache", !role);
      } catch { consoleBtn.classList.add("cache"); }
    }, 0);
    setTimeout(async () => {
      try { const { data } = await client.rpc("prisme_mon_role"); lien.classList.toggle("cache", !data); }
      catch { lien.classList.add("cache"); }
    }, 0);
  });
})();
