/* =====================================================================
   Flamme Bleue — personnages et « Profil au travail », lus en base (1.0, 10/11/2026 09h44)
   Remplace flamme_experimental.js, retiré du dépôt public le 10/11/2026 : les contenus sont dans les tables
   flamme_personnages et flamme_travail, lisibles seulement par les comptes qui ont un rôle Flamme Bleue.
   Usage : await window.FLAMME_PERSONNAGES.charger(sb) avant le rendu. Remplit window.FLAMME_EXPERIMENTAL
   sous la même forme qu'avant ({ personnalites, travail }), ou le met à null si rien n'est lisible.
   Les personnages au statut « retire » ne sont pas repris.
   ===================================================================== */
(function () {
  const VERSION = { numero: "1.0", date: "2026-11-10 09:44" };
  const COUCHES = { valeur: "valeurs", absente: "absentes", motivation: "motivations", profil: "profils" };
  async function toutLire(sb, table, ordre){
    const tout = [], pas = 1000;
    for (let debut = 0; ; debut += pas){
      let q = sb.from(table).select("*"); ordre.forEach(c => { q = q.order(c); });
      const { data, error } = await q.range(debut, debut + pas - 1);
      if (error) throw new Error(`${table} : ${error.message}`);
      tout.push(...data);
      if (data.length < pas) return tout;
    }
  }
  async function charger(sb){
    try {
      const [P, T] = await Promise.all([toutLire(sb, "flamme_personnages", ["profil", "ordre"]), toutLire(sb, "flamme_travail", ["couche", "code"])]);
      if (!P.length && !T.length){ window.FLAMME_EXPERIMENTAL = null; return null; }
      const X = { VERSION, personnalites: {}, travail: { valeurs: {}, absentes: {}, motivations: {}, profils: {} } };
      P.filter(r => r.statut !== "retire").forEach(r => (X.personnalites[r.profil] ??= []).push({ nom: r.nom, univers: r.univers, source: r.source, pourquoi: r.pourquoi, type: r.type }));
      T.forEach(r => { if (COUCHES[r.couche]) X.travail[COUCHES[r.couche]][r.code] = r.textes; });
      window.FLAMME_EXPERIMENTAL = X; return X;
    } catch (e){
      console.warn("Flamme Bleue : personnages illisibles —", e.message);
      window.FLAMME_EXPERIMENTAL = null; return null;
    }
  }
  window.FLAMME_PERSONNAGES = { VERSION, charger };
})();
