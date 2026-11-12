# CLAUDE.md — Charte du site de la Forge de l'Arpenteur

**Version 0.7 — 13/11/2026 à 00h36**
Ce fichier est lu automatiquement par Claude Code au début de chaque séance. Il sert aussi de charte commune aux conversations du projet claude.ai « La Forge de l'Arpenteur ».
**Le dépôt est public** (GitHub Pages) : rien de personnel ni de secret dans ce fichier.
Dépôt de référence : GitHub `pierrepigeon-ui/laFORGE`, branche `main` (Forge 1.11 du 26/10/2026).
Base : Supabase, projet unique dont Pierre est propriétaire.
Copie de travail locale : `C:\LA_FORGE\laFORGE\` (clone du dépôt, utilisé par Claude Code). Le dossier parent `C:\LA_FORGE\` contient un second `CLAUDE.md`, privé et jamais publié (façon de travailler avec Pierre, détails de PRISME), et les sauvegardes de la base dans `C:\LA_FORGE\sauvegardes\`.

---

## 0. Consignes pour Claude Code

Pierre débute avec Git et GitHub. Il travaille en français et tutoie.

**Avant toute chose**
- Explique en une ou deux phrases simples ce que tu vas faire, puis attends son accord avant toute action qui modifie des fichiers ou GitHub.
- Une étape à la fois ; dis-lui ce qu'il doit voir à l'écran pour savoir que c'est réussi.

**Début de séance**
1. `git status` : s'il reste des changements non envoyés, montre-les à Pierre et demande quoi en faire.
2. `git pull` pour partir de la version en ligne (d'autres conversations peuvent avoir livré entre-temps).

**Fin de séance**
1. Montre la liste des fichiers modifiés (`git status`) et vérifie qu'aucun n'est une sauvegarde ni un fichier personnel.
2. Message de commit en français, court et précis (ex. : « Forge 1.9 : retrait de la porte go2games »).
3. `git push`, puis indique à Pierre comment vérifier en ligne (numéro de version dans le pied de page, une ou deux minutes après).

**Interdits**
- Ne jamais ajouter au dépôt de sauvegarde de la base (`*.sql`, `*.csv`, `*_sauvegarde_*.json`), ni de fichier contenant des comptes, adresses e-mail, noms ou résultats de personnes. Le `.gitignore` les bloque ; ne jamais le contourner (`git add -f`), ne jamais le vider.
- Ne jamais forcer un envoi (`git push --force`) ni réécrire l'historique.
- Ne pas modifier un dossier qui n'est pas celui de la tâche en cours sans prévenir Pierre (voir § 2).
- Ne pas exécuter de SQL sur la base : les scripts SQL sont préparés dans les conversations claude.ai et passés par Pierre dans l'éditeur SQL de Supabase.

**Versions**
- Toute page modifiée voit son `const VERSION = { numero, date }` incrémenté, date et heure de Paris.

**Fichiers livrés par une conversation claude.ai**
- Pierre les dépose dans `C:\LA_FORGE\laFORGE\` (à l'emplacement du fichier remplacé) ; vérifie qu'ils remplacent bien le bon fichier, montre le différentiel (`git diff`), puis envoie.

## 1. Objet

La Forge est le portail commun : elle accueille, identifie, aiguille vers les sous-sites et porte tout ce qui sert à plusieurs d'entre eux. Les sous-sites (Flamme Bleue, PRISME, puis d'autres) ne portent que leur propre contenu.

Est **transverse** tout ce qui concerne la personne plutôt qu'un modèle : compte, rôles, connexion, contact, messages, réglages, journal, sauvegarde, statistiques et notifications.

## 2. Qui fait quoi

Les conversations claude.ai conçoivent ; Claude Code range, vérifie et envoie sur GitHub. Les conversations ne se voient pas entre elles : elles ne partagent que le dépôt GitHub, les fichiers et la mémoire du projet claude.ai. Cette charte sert donc de règle commune.

| Conversation | Dossiers du dépôt | Tables de la base |
|---|---|---|
| **Supervision** | racine (`index.html`, `favicon.svg`, futurs fichiers communs), future console de la Forge | `forge_*`, fonctions communes (rôles, export) |
| **Flamme Bleue** | `blueflame/` | `flamme_*` |
| **PRISME** | `prisme/` | `prisme_*` |
| *(go2games)* | `go2games/` — démonstration terminée, retirée du menu de la Forge en 1.9 ; dossier encore en ligne | lit une vue de PRISME |

Règles :

1. Une conversation ne modifie que ses dossiers et ses tables. Si un changement en touche d'autres, elle prévient Pierre d'abord et écrit une **consigne** au § 9.
2. Au début de chaque séance de travail sur le code, la conversation relit le dépôt en ligne (téléchargement de `main`) plutôt que la copie du projet, qui peut dater. La structure complète de la base est dans le fichier `forge_base_complete_…sql` produit par la console ; la copie `structure_base` du projet est tronquée après `forge_export_base`.
3. Les fonctions de la base dont dépendent les règles de sécurité des sous-sites (`flamme_mon_role()`, `prisme_mon_role()`…) gardent leur nom et leur réponse : seule la conversation Supervision peut changer ce qu'elles lisent, et sans changer ce qu'elles renvoient.

## 3. Dépôt GitHub

```
/                  accueil de la Forge (index.html, favicon.svg), CLAUDE.md, LICENSE, .gitignore
/blueflame/        Flamme Bleue
/prisme/           PRISME
/go2games/         ancienne vitrine de démonstration (hors menu)
```

- Chaque page livrée affiche visiblement son numéro et sa date/heure de version (`const VERSION = { numero, date }`), à incrémenter à chaque livraison.
- Les conversations claude.ai livrent des **fichiers complets**, prêts à déposer dans `C:\LA_FORGE\laFORGE\` ; Claude Code les envoie (§ 0).
- `.gitignore` à la racine : garde-fou contre l'envoi de sauvegardes et de fichiers personnels.
- Un fichier commun aux sous-sites (style, en-tête, connexion) vit à la racine et appartient à la conversation Supervision.
- `LICENSE` « tous droits réservés » depuis le 26/10/2026 ; chaque page porte en pied de page « © 2026 Pierre Pigeon, tous droits réservés » avec un lien « conditions » vers la licence.

## 4. Base Supabase

**Préfixes** : `forge_` (commun), `flamme_` (Flamme Bleue), `prisme_` (PRISME). Tout nouveau sous-site reçoit son préfixe.

**Tables communes actuelles** : `forge_utilisateurs` (rôles, utilisée de fait par Flamme Bleue), `forge_journal`, `forge_messages`, `forge_parametres`. PRISME a sa propre table de rôles `prisme_roles`.

### Créer une table : modèle commun (version 1.0 — 28/10/2026)

Toute nouvelle table de la Forge est créée **complète, en un seul script** : sécurité, horodatage, journal. La conversation du chantier le prépare d'après ce modèle ; Pierre le passe dans l'éditeur SQL de Supabase ; aucun aller-retour avec Supervision n'est nécessaire si le modèle est suivi.

Règles :
- **Préfixe** du chantier (`flamme_`, `prisme_`… ; `forge_` est réservé à Supervision).
- **Clé primaire obligatoire.** Le journal nomme chaque ligne par sa colonne `code`, `cle`, `nom` ou `user_id`, sinon par les valeurs de sa clé primaire (ex. `jeu/mecanisme`).
- **Jamais de colonne calculée** (`generated always`) : les sauvegardes réinsèrent toutes les colonnes et la restauration échouerait.
- **Colonnes d'horodatage** `modifie_le` et `modifie_par`, tenues par la fonction commune `forge_horodater()` (ne pas en créer une par chantier). Le journal ignore une modification qui ne touche qu'elles.
- **Sécurité (RLS) toujours active** : sans règle, une table est lisible et modifiable par n'importe qui. Les droits s'appuient sur la fonction de rôle du chantier (`flamme_mon_role()`, `prisme_mon_role()`).
- **Sauvegarde** : la sauvegarde complète de la base prend toute nouvelle table d'office. Si la console du sous-site a sa propre sauvegarde, y ajouter la table.
- **Données personnelles** : jamais dans une table lisible sans compte.
- **Avant de supprimer une fonction**, vérifier qu'aucun déclencheur ni aucune règle ne l'utilise encore : la suppression les emporte en silence.

```sql
-- <chantier> — création de <prefixe>_<nom>, <date>, conversation « <nom> »
begin;

create table public.<prefixe>_<nom> (
  code        text primary key,          -- ou : primary key (col_a, col_b) pour une table de liaison
  -- … colonnes propres …
  modifie_le  timestamptz not null default now(),
  modifie_par uuid default auth.uid()
);

alter table public.<prefixe>_<nom> enable row level security;

create policy <prefixe>_<nom>_lecture on public.<prefixe>_<nom>
  for select to public using (<prefixe>_mon_role() is not null);       -- ou using (true) si lecture publique voulue
create policy <prefixe>_<nom>_ecriture on public.<prefixe>_<nom>
  for all to public
  using      (<prefixe>_mon_role() in ('proprietaire', 'editeur'))
  with check (<prefixe>_mon_role() in ('proprietaire', 'editeur'));

create trigger <prefixe>_<nom>_horodatage before update on public.<prefixe>_<nom>
  for each row execute function forge_horodater();
create trigger <prefixe>_<nom>_journal after insert or delete or update on public.<prefixe>_<nom>
  for each row execute function forge_journaliser();

commit;

-- Contrôle : une ligne ; securite_active = true, nb_regles ≥ 1, nb_declencheurs = 2, cle_primaire remplie
select
  (select relrowsecurity from pg_class where oid = 'public.<prefixe>_<nom>'::regclass) as securite_active,
  (select count(*) from pg_policies where tablename = '<prefixe>_<nom>') as nb_regles,
  (select count(*) from pg_trigger where tgrelid = 'public.<prefixe>_<nom>'::regclass and not tgisinternal) as nb_declencheurs,
  (select string_agg(a.attname, ' + ') from pg_index i
     join pg_attribute a on a.attrelid = i.indrelid and a.attnum = any(i.indkey::int2[])
    where i.indrelid = 'public.<prefixe>_<nom>'::regclass and i.indisprimary) as cle_primaire;
```

### Accès (en place depuis le 12/11/2026)

- **Un seul propriétaire** pour toute la Forge (`forge_comptes.proprietaire`). Il a tous les droits, y compris sur les tables et fonctions `forge_`.
- **Un rôle par personne et par sous-site** dans `forge_acces`, choisi dans le référentiel `forge_roles`. Échelle commune : `administrateur` (tout le sous-site, droits d'accès compris, sauf la Forge) > `editeur` (contenu en lecture et écriture, sans les paramètres) > `evaluateur` (ses propres évaluations ; coachs pour Flamme Bleue) > `lecteur` (lit tout le contenu). **Membre** = compte sans ligne d'accès (son propre profil). Sans compte : certains outils seulement.
- Seul le propriétaire nomme ou modifie un administrateur ; un administrateur gère les autres rôles de son sous-site.
- Fonctions : `forge_role(sous_site)`, `forge_est_proprietaire()`, `forge_est_administrateur(sous_site)`, `forge_attribuer_role(email, sous_site, role, nom)`, `forge_retirer_role(user, sous_site)`. Les fonctions des sous-sites (`flamme_mon_role()`, `prisme_mon_role()`, `*_attribuer_role`, `*_retirer_role`, `*_personnes`) gardent leur nom et s'appuient sur elles ; elles sont tenues par Supervision.
- `forge_utilisateurs` et `prisme_roles` sont devenues des **vues en lecture seule** (compatibilité des pages). Aucun sous-site ne crée de table de rôles propre : un nouveau rôle s'ajoute dans `forge_roles`, par Supervision.

## 4 bis. Bandeau commun (version 1.0 — 13/11/2026)

Toutes les pages de la Forge et des sous-sites ont le même bandeau supérieur, toujours visible. Il est défini par deux fichiers communs à la racine, tenus par Supervision : `forge_bandeau.css` et `forge_bandeau.js`. Un sous-site les charge depuis son en-tête (`../forge_bandeau.css?v=1.0`, `../forge_bandeau.js?v=1.0`) et ne redéfinit pas leurs styles.

Structure, de gauche à droite :
```html
<header class="fg-bandeau">
  <a class="fg-haut" href="…" title="Remonter d'un niveau">…flèche…</a>   <!-- absente sur l'accueil de la Forge -->
  <a class="fg-marque" href="…accueil du site…"><svg class="fg-logo">…</svg><span class="fg-nom">Nom du site</span></a>
  <nav class="fg-nav"><a href="…" aria-current="page">Page</a>…</nav>       <!-- menu des pages du site -->
  <div class="fg-droite">
    <a class="fg-forge" href="../">…<span>La Forge</span></a>             <!-- sous-sites seulement -->
    <button class="fg-pastille">2 messages non lus</button>                <!-- propriétaire seulement -->
    <a class="fg-btn" href="console.html">…<span class="fg-long">Console</span></a>   <!-- si la personne y a droit -->
    <span class="fg-qui">Nom de la personne</span>
    <button class="fg-btn">Se déconnecter</button>                          <!-- « Se connecter » pour un visiteur -->
  </div>
</header>
```
- **Flèche de remontée** : une page intérieure → l'accueil du sous-site ; l'accueil d'un sous-site → la Forge.
- **Sous-bandeau** « retour à la liste » : quand une fiche est ouverte depuis une liste. La liste appelle `ForgeBandeau.memoriserListe(cle, { ids, libelle, modele })` avant d'ouvrir une fiche et `ForgeBandeau.restaurerListe(cle)` une fois affichée ; la fiche appelle `ForgeBandeau.sousBandeau(cle, { id, titre })`. Le sous-bandeau offre le retour (filtres, tri et position conservés : les filtres doivent figurer dans l'adresse de la liste), le rang (« 12 / 240 ») et Précédent / Suivant.
- La hauteur totale des bandeaux est publiée dans `--fg-h` (ancres, panneaux collants).
- Sur téléphone, le menu passe sur une seconde ligne défilante et le sous-bandeau se réduit à « ‹ Liste », « ‹ », « › ».
- Toute évolution du bandeau se demande à Supervision.

## 5. Fonctions transverses : état et cible

| Fonction | Aujourd'hui | Cible |
|---|---|---|
| Connexion | portail de la Forge, seule porte d'entrée | inchangé |
| Aiguillage | l'accueil interroge les rôles de chaque sous-site ; un seul accès → envoi direct | une requête sur `forge_acces` |
| Contact | formulaire → `forge_messages` ; aucun e-mail envoyé | ajouter l'envoi d'un e-mail à l'adresse de contact des réglages |
| Messages reçus | lus dans l'accueil (propriétaire) ; pastille « messages non lus » en haut de l'accueil depuis la 1.10 | console de la Forge |
| Réglages | accueil : adresse de contact, ouverture de PRISME | console de la Forge |
| Comptes et rôles | onglet Personnes de la console Flamme Bleue (Flamme seule) ; rôles PRISME à part | console de la Forge, tous sous-sites |
| Journal | onglet Journal de la console Flamme Bleue, sans PRISME | console de la Forge, filtrable par sous-site |
| Sauvegarde | console Flamme Bleue (tables Flamme + `forge_*`) ; PRISME a la sienne | une sauvegarde unique de toute la base, depuis la Forge |
| Mot de passe | console Flamme Bleue | accueil de la Forge |
| Statistiques, notifications | absentes | e-mail à Pierre à chaque nouveau profil ; statistiques ; commentaires ; communication vers les utilisateurs |

## 6. Accès du public

- Autotests ouverts à tous ; textes complets réservés aux comptes.
- Les visiteurs sans compte ne conservent pas leur résultat.
- L'ouverture de PRISME au public se règle depuis la Forge.

## 7. Sauvegardes

- Les fichiers produits par les consoles (eux seuls permettent une restauration complète, comptes compris) sont rangés **hors du dépôt**, dans `C:\LA_FORGE\sauvegardes\`, jamais dans `C:\LA_FORGE\laFORGE\`.
- Le projet claude.ai garde une copie sans données personnelles ; à chaque nouvelle sauvegarde, le dossier précédent est **remplacé** (place limitée).

## 8. Questions ouvertes

1. **Autorisations** : aucun changement de droits pour l'instant (décision du 25/10/2026). Une séance de réflexion dédiée tranchera, entre autres, l'idée d'un responsable par sous-site. La migration technique du § 4 ne change aucun droit.
2. **Réglages hors dépôt** (Supabase : inscription libre, confirmation d'e-mail, modèles d'e-mail, adresses de retour ; GitHub Pages) : à relever.
3. **Nom de domaine** laforgedelarpenteur.fr : plus tard.
4. **Envoi d'e-mails** (contact, nouveau profil, puis communication vers les utilisateurs) : moyen technique à choisir.
5. **Dossier `go2games/`** : à supprimer du dépôt ou à garder en archive.

## 9. Consignes entre conversations

*(Chaque consigne : date, conversation destinataire, ce qui change pour elle, ce qu'elle doit faire ou ne plus faire.)*

- **25/10/2026 — Flamme Bleue et PRISME** : les comptes, rôles, journal, sauvegarde et mot de passe passent progressivement à la Forge. Ne plus faire évoluer ces fonctions dans vos consoles ; les signaler à la conversation Supervision. Vos fonctions `*_mon_role()` restent disponibles et inchangées pour vous.
- **28/10/2026 — tous les chantiers** : toute nouvelle table suit le modèle commun du § 4. Une console de sous-site garde à jour la sauvegarde de ses propres tables (c'est de l'entretien), sans y ajouter de fonction commune à la Forge.
- **13/11/2026 — tous les chantiers** : bandeau commun, voir § 4 bis ; chaque sous-site l’adopte à sa prochaine livraison d’en-tête.
