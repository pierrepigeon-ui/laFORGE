# CLAUDE.md — Charte du site de la Forge de l'Arpenteur

**Version 0.5 — 25/10/2026 à 21h45**
Ce fichier est lu automatiquement par Claude Code au début de chaque séance. Il sert aussi de charte commune aux conversations du projet claude.ai « La Forge de l'Arpenteur ».
**Le dépôt est public** (GitHub Pages) : rien de personnel ni de secret dans ce fichier.
Dépôt de référence : GitHub `pierrepigeon-ui/laFORGE`, branche `main` (Forge 1.9 du 25/10/2026).
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
| **Site web** | racine (`index.html`, `favicon.svg`, futurs fichiers communs), future console de la Forge | `forge_*`, fonctions communes (rôles, export) |
| **Flamme Bleue** | `blueflame/` | `flamme_*` |
| **PRISME** | `prisme/` | `prisme_*` |
| *(go2games)* | `go2games/` — démonstration terminée, retirée du menu de la Forge en 1.9 ; dossier encore en ligne | lit une vue de PRISME |

Règles :

1. Une conversation ne modifie que ses dossiers et ses tables. Si un changement en touche d'autres, elle prévient Pierre d'abord et écrit une **consigne** au § 9.
2. Au début de chaque séance de travail sur le code, la conversation relit le dépôt en ligne (téléchargement de `main`) plutôt que la copie du projet, qui peut dater. La structure complète de la base est dans le fichier `forge_base_complete_…sql` produit par la console ; la copie `structure_base` du projet est tronquée après `forge_export_base`.
3. Les fonctions de la base dont dépendent les règles de sécurité des sous-sites (`flamme_mon_role()`, `prisme_mon_role()`…) gardent leur nom et leur réponse : seule la conversation Site web peut changer ce qu'elles lisent, et sans changer ce qu'elles renvoient.

## 3. Dépôt GitHub

```
/                  accueil de la Forge (index.html, favicon.svg), CLAUDE.md, .gitignore
/blueflame/        Flamme Bleue
/prisme/           PRISME
/go2games/         ancienne vitrine de démonstration (hors menu)
```

- Chaque page livrée affiche visiblement son numéro et sa date/heure de version (`const VERSION = { numero, date }`), à incrémenter à chaque livraison.
- Les conversations claude.ai livrent des **fichiers complets**, prêts à déposer dans `C:\LA_FORGE\laFORGE\` ; Claude Code les envoie (§ 0).
- `.gitignore` à la racine : garde-fou contre l'envoi de sauvegardes et de fichiers personnels.
- Un fichier commun aux sous-sites (style, en-tête, connexion) vit à la racine et appartient à la conversation Site web.

## 4. Base Supabase

**Préfixes** : `forge_` (commun), `flamme_` (Flamme Bleue), `prisme_` (PRISME). Tout nouveau sous-site reçoit son préfixe.

**Tables communes actuelles** : `forge_utilisateurs` (rôles, utilisée de fait par Flamme Bleue), `forge_journal`, `forge_messages`, `forge_parametres`. PRISME a sa propre table de rôles `prisme_roles`.

### Accès : schéma cible (validé le 25/10/2026)

- **`forge_comptes`** : une ligne par personne (compte de connexion, nom, date de création, statut dans la Forge : propriétaire ou membre). Le propriétaire de la Forge l'est partout.
- **`forge_acces`** : une ligne par personne et par sous-site (compte, sous-site, rôle). Remplace `forge_utilisateurs` et `prisme_roles`, qui deviennent des vues de compatibilité.
- **`forge_roles`** : référentiel des rôles permis par sous-site, avec libellé et ordre d'affichage.
  - Flamme Bleue : éditeur, invité
  - PRISME : éditeur, évaluateur, lecteur ; « joueur » = tout compte arrivant dans PRISME sans rôle attribué

### Constats (structure complète du 21/10)

- Les droits de la Forge (journal, messages, réglages, réinitialisation des mots de passe) reposent aujourd'hui sur « être propriétaire dans Flamme Bleue ».
- Une cinquantaine de règles de sécurité des tables `flamme_` et `prisme_` passent par `flamme_mon_role()` et `prisme_mon_role()`.
- Le code des sous-sites lit aussi directement `forge_utilisateurs` (console et en-tête de Flamme Bleue, en-tête de PRISME) et `prisme_roles` (console et en-tête de PRISME).
- Les fonctions sans préfixe (`attribuer_role`, `mon_role`, `personnes`, `retirer_role`, `reinitialiser_mdp`, `autotest_contenu`) ne font que renvoyer vers les versions préfixées ; aucun code ne les appelle.

### Migration, par étapes (sans toucher aux sous-sites)

1. Créer `forge_comptes`, `forge_acces` et `forge_roles`, avec sécurité et journal, et y recopier les comptes et rôles existants.
2. Ajouter `forge_est_proprietaire()` et `forge_mes_acces()` ; les règles des tables `forge_*` passent sur `forge_est_proprietaire()`.
3. Réécrire `flamme_mon_role()` et `prisme_mon_role()` : le propriétaire de la Forge reçoit « proprietaire », les autres leur rôle dans `forge_acces`. Même nom, même réponse.
4. Réécrire les fonctions d'attribution, de retrait et de liste des personnes des deux sous-sites pour qu'elles écrivent dans `forge_acces` : les consoles actuelles continuent de marcher.
5. Remplacer les tables `forge_utilisateurs` et `prisme_roles` par des vues de même nom et mêmes colonnes, en lecture seule, pour le code qui les lit.
6. Plus tard, quand la console de la Forge existe : retirer les fonctions sans préfixe, puis les vues de compatibilité.

Le tout s'exécute en une seule transaction, avec un script de retour arrière et des requêtes de contrôle, après une sauvegarde complète.

## 5. Fonctions transverses : état et cible

| Fonction | Aujourd'hui | Cible |
|---|---|---|
| Connexion | portail de la Forge, seule porte d'entrée | inchangé |
| Aiguillage | l'accueil interroge les rôles de chaque sous-site ; un seul accès → envoi direct | une requête sur `forge_acces` |
| Contact | formulaire → `forge_messages` ; aucun e-mail envoyé | ajouter l'envoi d'un e-mail à l'adresse de contact des réglages |
| Messages reçus | lus dans l'accueil (propriétaire) | console de la Forge |
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

- **25/10/2026 — Flamme Bleue et PRISME** : les comptes, rôles, journal, sauvegarde et mot de passe passent progressivement à la Forge. Ne plus faire évoluer ces fonctions dans vos consoles ; les signaler à la conversation Site web. Vos fonctions `*_mon_role()` restent disponibles et inchangées pour vous.
