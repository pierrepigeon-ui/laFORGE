/* PRISME — en-tête commun, chargé par toutes les pages de prisme/ :
   <script src="entete.js?v=2.0"></script> juste avant </body>.
   (2.0, 13/11/2026) adopte le bandeau commun de la Forge (forge_bandeau.css et forge_bandeau.js, charte § 4 bis, tenus par Supervision).
   Ce fichier ne fait plus que produire la structure attendue, sans redéfinir ses styles :
     flèche de remontée · logo et nom « PRISME » · menu des pages · à droite : La Forge, pastille des messages (propriétaire de la Forge),
     Console (éditeur et administrateur de PRISME), nom de la personne, connexion.
   L'ancienne barre de chaque page (.barre, #barre-haut) est masquée mais gardée dans la page : ses scripts y écrivent encore.
   --ent-h, encore lu par certaines pages, vaut désormais --fg-h (hauteur publiée par forge_bandeau.js).
   Remplace la 1.6 (barre collante maison, « La Forge » sur l'accueil seulement si accès à Flamme Bleue). */
(function(){
  const ENTETE_VERSION = { numero:"2.0", date:"2026-11-13 01:04" };
  const BANDEAU_V = "1.0";
  const ENCLUME = "data:image/png;base64,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";
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));
  try {
    // 1. les fichiers communs (si la page ne les charge pas déjà dans son <head>)
    if (!document.querySelector('link[href*="forge_bandeau.css"]')){
      const l = document.createElement("link"); l.rel = "stylesheet"; l.href = "../forge_bandeau.css?v=" + BANDEAU_V; document.head.appendChild(l);
    }
    if (!window.ForgeBandeau && !document.querySelector('script[src*="forge_bandeau.js"]')){
      const s = document.createElement("script"); s.src = "../forge_bandeau.js?v=" + BANDEAU_V; document.head.appendChild(s);
    }

    // 2. ce qui est propre à PRISME : le logo, et un utilitaire « caché » (aucun style du bandeau n'est redéfini)
    const st = document.createElement("style");
    st.textContent = `
:root{--ent-h:var(--fg-h, 0px)}
.fg-bandeau [hidden]{display:none!important}
.ent-logo{border-radius:50%;position:relative;
  background:conic-gradient(from -36deg,#80796A 0 72deg,#0E8A9C 72deg 144deg,#3D2645 144deg 216deg,#E85D2E 216deg 288deg,#7A9A3C 288deg 360deg)}
.ent-logo::after{content:"";position:absolute;inset:32%;border-radius:50%;background:var(--panel, #FFFFFF)}
.fg-forge img{display:block;width:15px;height:17px}
@media (prefers-color-scheme: dark){ .fg-forge img{background:#F6F5F1;border-radius:3px;padding:1px} }`;
    document.head.appendChild(st);

    // 3. où sommes-nous ?
    const page = (location.pathname.split("/").pop() || "index.html");
    const accueil = page === "index.html" || page === "";
    const MENU = [["jeux.html", "Les jeux"], ["fiche.html", "Mon profil"], ["rosace.html", "La rosace"], ["encyclopedie.html", "L'encyclopédie"], ["guide.html", "Le guide"]];
    const RATTACHE = { "jeu.html":"jeux.html", "decrire.html":"jeux.html", "evaluation.html":"jeux.html", "recap.html":"jeux.html",
                       "questionnaire.html":"fiche.html", "totems.html":"encyclopedie.html" };
    const courante = RATTACHE[page] || page;
    const surConsole = page === "console.html";

    // 4. le bandeau
    const FLECHE = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const ICONE_CONSOLE = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="1.5" y="2.5" width="13" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M4.5 6.5l2 1.5-2 1.5M8 10h3.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const h = document.createElement("header");
    h.className = "fg-bandeau"; h.id = "prisme-bandeau";
    h.innerHTML =
      `<a class="fg-haut" href="${accueil ? "../" : "index.html"}" title="${accueil ? "Remonter à la Forge" : "Remonter à l'accueil de PRISME"}">${FLECHE}</a>` +
      `<a class="fg-marque" href="index.html" title="Accueil de PRISME"><span class="fg-logo ent-logo" aria-hidden="true"></span><span class="fg-nom">PRISME</span></a>` +
      `<nav class="fg-nav" aria-label="Pages de PRISME">${MENU.map(([u, t]) => `<a href="${u}"${u === courante ? ' aria-current="page"' : ""}>${esc(t)}</a>`).join("")}</nav>` +
      `<div class="fg-droite">` +
        `<a class="fg-forge" href="../" title="La Forge de l'Arpenteur"><img src="${ENCLUME}" alt="" width="15" height="17"><span>La Forge</span></a>` +
        `<button class="fg-pastille" type="button" hidden></button>` +
        `<a class="fg-btn" href="console.html" title="Console : parcourir et éditer le modèle PRISME"${surConsole ? ' aria-current="page"' : ""} hidden>${ICONE_CONSOLE}<span class="fg-long">Console</span></a>` +
        `<span class="fg-qui"></span>` +
        `<a class="fg-btn" href="../" data-connexion>Se connecter</a>` +
      `</div>`;
    document.body.prepend(h);

    // 5. l'ancienne barre de la page est masquée (gardée : les scripts de la page y écrivent encore)
    document.querySelectorAll("body > .barre, body > div > .barre, #barre-haut").forEach(b => { b.style.display = "none"; });

    const $ = q => h.querySelector(q);
    const qui = $(".fg-qui"), consoleBtn = $('a[href="console.html"]'), pastille = $(".fg-pastille");
    pastille.addEventListener("click", () => { location.href = "../?messages"; });
    if (window.ForgeBandeau) window.ForgeBandeau.publierHauteur();

    // 6. la personne connectée
    if (typeof sb === "undefined" || !sb?.auth) return;
    let vu;
    sb.auth.onAuthStateChange((_e, session) => {
      const u = session?.user || null, id = u?.id || null;
      if (id === vu) return; vu = id;
      if (!u){
        qui.textContent = ""; consoleBtn.hidden = true; pastille.hidden = true;
        h.querySelector("[data-connexion]").outerHTML = `<a class="fg-btn" href="../" data-connexion>Se connecter</a>`;
        return;
      }
      qui.textContent = u.email; qui.title = u.email;
      const b = document.createElement("button"); b.className = "fg-btn"; b.type = "button"; b.dataset.connexion = ""; b.textContent = "Se déconnecter";
      b.addEventListener("click", () => sb.auth.signOut().then(() => { location.href = "../"; }));
      h.querySelector("[data-connexion]").replaceWith(b);
      setTimeout(async () => {
        try {
          const [{ data: compte }, { data: role }] = await Promise.all([
            sb.from("forge_comptes").select("nom,proprietaire").eq("user_id", id).maybeSingle(),
            sb.rpc("prisme_mon_role")]);
          if (vu !== id) return;
          if (compte?.nom?.trim()) qui.textContent = compte.nom.trim();
          consoleBtn.hidden = !["administrateur", "proprietaire", "editeur"].includes(role);
          if (compte?.proprietaire){
            const { count } = await sb.from("forge_messages").select("id", { count:"exact", head:true }).eq("lu", false);
            if (vu === id && count){ pastille.textContent = `${count} message${count > 1 ? "s" : ""} non lu${count > 1 ? "s" : ""}`; pastille.hidden = false; }
          }
        } catch (e){ console.warn("entete.js " + ENTETE_VERSION.numero + " :", e); }
        if (window.ForgeBandeau) window.ForgeBandeau.publierHauteur();
      }, 0);
    });
  } catch (e){ console.warn("entete.js " + ENTETE_VERSION.numero + " :", e); }
})();