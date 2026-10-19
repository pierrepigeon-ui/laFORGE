/* go2games — vitrine de démonstration : lecture de la vue publique prisme_vitrine (sans compte), nettoyage des articles, mise en forme.
   Version 1.0 — 2026-10-19. La vitrine ne lit rien d'autre que cette vue : le pont avec PRISME, c'est elle. */
const VITRINE_VERSION = { numero:"1.0", date:"2026-10-19 10:30" };
const SUPABASE_URL = "https://gugdfpbkscudzkgysteb.supabase.co";
const SUPABASE_KEY = "sb_publishable_7aY8jgB45yEGd_M-R7VUDw_IQTNfg6P";   // clé publique : la base ne laisse lire que la vue prisme_vitrine sans compte
const sbv = supabase.createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession:false, autoRefreshToken:false } });
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const norm = s => String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const nombre = (v, d = 1) => Number(v).toFixed(d).replace(".", ",");
const euros = v => v == null ? "" : (v < 1 ? nombre(v, 2) : v < 10 ? nombre(v, 1) : String(Math.round(v))) + " €";

async function lirePublications(id){
  let q = sbv.from("prisme_vitrine").select("*");
  if (id) q = q.eq("id", id);
  const { data, error } = await q.order("publie_le", { ascending:false });
  if (error) throw error;
  return data || [];
}

// nettoyage : l'article vient d'un évaluateur ; seule la mise en forme simple passe, jamais un script ni un attribut actif
const BALISES = new Set(["P","H1","H2","H3","B","STRONG","I","EM","U","UL","OL","LI","BR","IMG","A","BLOCKQUOTE","DIV","TABLE","THEAD","TBODY","TR","TD","TH"]);
function nettoyer(html){
  const doc = new DOMParser().parseFromString(`<div>${html || ""}</div>`, "text/html"), racine = doc.body.firstChild;
  const sur = u => /^https?:\/\//i.test(String(u || "").trim());
  (function net(n){
    [...n.childNodes].forEach(c => {
      if (c.nodeType === 3) return;
      if (c.nodeType !== 1){ c.remove(); return; }
      net(c);
      let t = c.tagName; if (t === "H4" || t === "H5" || t === "H6") t = "H3";
      if (["SCRIPT","STYLE","IFRAME","OBJECT","EMBED","META","LINK","TITLE","SVG","MATH","FORM","INPUT","BUTTON","TEXTAREA","SELECT"].includes(t)){ c.remove(); return; }
      if (!BALISES.has(t)){ c.replaceWith(...c.childNodes); return; }
      const neuf = doc.createElement(t === "STRONG" ? "B" : t === "EM" ? "I" : t);
      if (t === "IMG"){ if (!sur(c.getAttribute("src"))){ c.remove(); return; } neuf.setAttribute("src", c.getAttribute("src")); neuf.setAttribute("alt", c.getAttribute("alt") || ""); neuf.setAttribute("loading", "lazy"); neuf.setAttribute("referrerpolicy", "no-referrer"); }
      if (t === "A" && sur(c.getAttribute("href"))){ neuf.setAttribute("href", c.getAttribute("href")); neuf.setAttribute("target", "_blank"); neuf.setAttribute("rel", "noopener nofollow"); }
      const cl = (c.getAttribute("class") || "").split(/\s+/).filter(x => ["flottant","encadre","consigne"].includes(x)).join(" ");
      if (cl) neuf.className = cl;
      neuf.append(...c.childNodes); c.replaceWith(neuf);
    });
  })(racine);
  return racine;
}
// l'article tel que la vitrine le montre : titre à part, sans l'encadré (la vitrine a le sien), sans les consignes restées vides
function lireArticle(html){
  const r = nettoyer(html);
  r.querySelectorAll(".encadre, .consigne").forEach(x => x.remove());
  r.querySelectorAll("img.flottant").forEach(x => { const p = x.closest("p"); x.remove(); if (p && !p.textContent.trim() && !p.querySelector("img")) p.remove(); });   // l'image de la boîte est déjà en tête
  const h1 = r.querySelector("h1"), titre = h1 ? h1.textContent.trim().replace(/\s*:\s*$/, "") : "";
  h1?.remove();
  r.querySelectorAll("p").forEach(p => { if (!p.textContent.trim() && !p.querySelector("img")) p.remove(); });
  return { titre, corps: r.innerHTML, texte: r.textContent };
}
// la phrase de verdict (ou, à défaut, le chapeau) pour les vignettes
function resume(html){
  const r = nettoyer(html); r.querySelectorAll(".encadre, .consigne, h1").forEach(x => x.remove());
  const h = [...r.querySelectorAll("h2, h3")].find(x => /verdict/i.test(x.textContent));
  let p = h; while (p && (p = p.nextElementSibling) && p.tagName !== "P");
  const t = (p || r.querySelector("p"))?.textContent.trim() || "";
  return t.length > 170 ? t.slice(0, 165).replace(/\s+\S*$/, "") + "…" : t;
}
function texteVie(v){
  if (!v) return "";
  if (v.classique) return "Un classique : on ne le range pas";
  if (v.abandon) return `Il lasse vite : environ ${v.sessions} parties`;
  return `Environ ${v.sessions} parties${v.heures ? `, soit ${v.heures} heures de jeu` : ""}`;
}
const configTexte = c => !c ? "" : /toutes?\s+(les\s+)?extensions/i.test(c) ? "Avec toutes ses extensions" : c;
function jetonHTML(note){ return note == null ? "" : `<span class="jeton" aria-label="Note PRISME ${nombre(note)} sur 5">${nombre(note)}<small>/5</small></span>`; }
function piedHTML(){
  return `<span>Site de démonstration. Les évaluations sont réalisées avec PRISME, le modèle d'évaluation des jeux de l'Arpenteur.</span>
    <span>Vitrine ${VITRINE_VERSION.numero}, version du ${VITRINE_VERSION.date.replace(/(\d{4})-(\d\d)-(\d\d) (\d\d):(\d\d)/, "$3/$2/$1 à $4h$5")}</span>`;
}
const LOGO = `<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="3" width="26" height="26" rx="7" fill="#F2B33D"/><circle cx="11" cy="11" r="2.6" fill="#1D2433"/><circle cx="21" cy="21" r="2.6" fill="#1D2433"/><circle cx="21" cy="11" r="2.6" fill="#1D2433"/><circle cx="11" cy="21" r="2.6" fill="#1D2433"/></svg>`;
function enTete(){
  return `<div class="bande"><a class="logo" href="index.html">${LOGO}go2games</a>
    <nav><a href="../prisme/questionnaire.html">Découvre ton profil de joueur</a></nav></div>`;
}
