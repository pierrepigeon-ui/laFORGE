/* =====================================================================
   La Forge de l'Arpenteur — bandeau commun (1.0, 13/11/2026)
   Tenu par la conversation « Supervision ». À charger avec forge_bandeau.css.
   Ce script ne dessine pas le bandeau (chaque page ou en-tête le fournit) :
   il publie sa hauteur et gère le sous-bandeau « retour à la liste ».

   Sur la page LISTE, juste avant d'ouvrir une fiche (et à chaque changement de filtre) :
     ForgeBandeau.memoriserListe("prisme-jeux", { ids:[…], libelle:"la liste des jeux", modele:"jeu.html?id={id}" });
   et, une fois la liste affichée :
     ForgeBandeau.restaurerListe("prisme-jeux");   // remet la page à l'endroit où on l'avait laissée
   Sur la page FICHE, une fois son titre connu :
     ForgeBandeau.sousBandeau("prisme-jeux", { id:"123", titre:"Catan" });
   Les filtres et le tri de la liste doivent figurer dans son adresse (?…) pour être retrouvés au retour.
   ===================================================================== */
(function () {
  const VERSION = { numero: "1.0", date: "2026-11-13 10:00" };
  const FLECHE = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const cleStock = cle => "fg-liste:" + cle;
  const lire = cle => { try { return JSON.parse(sessionStorage.getItem(cleStock(cle)) || "null"); } catch (e) { return null; } };
  const ecrire = (cle, v) => { try { sessionStorage.setItem(cleStock(cle), JSON.stringify(v)); } catch (e) {} };
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const sansAncre = u => String(u || "").split("#")[0];

  // hauteur des bandeaux, pour les ancres et le sous-bandeau
  function publierHauteur() {
    const b = document.querySelector(".fg-bandeau");
    const s = document.querySelector(".fg-sous");
    const hb = b ? b.offsetHeight : 0;
    if (s) s.style.top = hb + "px";
    const h = hb + (s ? s.offsetHeight : 0);
    document.documentElement.style.setProperty("--fg-h", h + "px");
    document.documentElement.style.scrollPaddingTop = (h + 12) + "px";
  }
  window.addEventListener("resize", publierHauteur);
  document.addEventListener("DOMContentLoaded", publierHauteur);

  function memoriserListe(cle, { ids = [], libelle = "la liste", modele = "" } = {}) {
    ecrire(cle, { retour: location.href, defilement: window.scrollY, ids: ids.map(String), libelle, modele, quand: Date.now() });
  }
  // mémorise aussi la position juste avant de quitter la page
  function suivreDefilement(cle) {
    window.addEventListener("pagehide", () => { const e = lire(cle); if (e && sansAncre(e.retour) === sansAncre(location.href)) { e.defilement = window.scrollY; ecrire(cle, e); } });
  }

  function restaurerListe(cle) {
    suivreDefilement(cle);
    const e = lire(cle);
    if (e && sansAncre(e.retour) === sansAncre(location.href) && e.defilement) {
      requestAnimationFrame(() => window.scrollTo(0, e.defilement));
    }
    return e;
  }

  function sousBandeau(cle, { id, titre = "" } = {}) {
    const e = lire(cle);
    if (!e || !e.retour) return null;
    const ids = e.ids || [], i = ids.indexOf(String(id));
    const lien = k => (k >= 0 && k < ids.length && e.modele) ? e.modele.replace("{id}", encodeURIComponent(ids[k])) : null;
    const prec = lien(i - 1), suiv = lien(i + 1);
    let s = document.querySelector(".fg-sous");
    if (!s) {
      s = document.createElement("div"); s.className = "fg-sous";
      const b = document.querySelector(".fg-bandeau");
      if (b) b.after(s); else document.body.prepend(s);
    }
    s.innerHTML =
      `<a class="fg-btn fg-retour" href="${esc(e.retour)}">${FLECHE}<span class="fg-long">Retour à ${esc(e.libelle)}</span><span class="fg-court">Liste</span></a>` +
      `<span class="fg-titre">${esc(titre)}</span>` +
      (i >= 0 ? `<span class="fg-pos">${i + 1} / ${ids.length}</span>` +
        `<a class="fg-pas" href="${esc(prec || "#")}" aria-disabled="${!prec}" title="Précédent">‹<span class="fg-long"> Précédent</span></a>` +
        `<a class="fg-pas" href="${esc(suiv || "#")}" aria-disabled="${!suiv}" title="Suivant"><span class="fg-long">Suivant </span>›</a>` : "");
    // retour : on revient dans l'historique si on vient bien de la liste (filtres et position intacts)
    s.querySelector(".fg-retour").addEventListener("click", ev => {
      if (sansAncre(document.referrer) === sansAncre(e.retour) && history.length > 1) { ev.preventDefault(); history.back(); }
    });
    publierHauteur();
    return s;
  }

  window.ForgeBandeau = { VERSION, memoriserListe, restaurerListe, sousBandeau, publierHauteur };
})();
