/* Flamme Bleue — dispositifs : libellés d'interface par défaut de l'autotest, selon le dispositif.
   « personne » = l'autotest ; « organisation » = le profil d'une organisation.
   La console (onglet Éléments, dispositif choisi, « Libellés du dispositif ») peut remplacer chaque libellé ; ce qui est laissé vide garde la valeur d'ici. */
window.FLAMME_DISPOSITIFS = {
  VERSION: { numero: "1.0", date: "2026-10-17 19:50" },
  LIB_DEFAUT: {
  personne: {
    titre: "Autotest",
    avertissement: "",
    consigne: "Rangez d'abord les 20 tempéraments en piles, de « tout à fait moi » à « pas du tout moi ». Classez-les ensuite, du plus proche de vous au plus éloigné, en disant entre deux cartes voisines si elles sont inséparables, proches, nettement séparées ou séparées par un fossé. Survolez ou touchez une carte du classement pour lire sa description. Une fois connecté, vous retrouvez votre dernier résultat enregistré.",
    piles: ["Tout à fait moi", "Plutôt moi", "Mitigé", "Plutôt pas moi", "Pas du tout moi"],
    aidePiles: "Rangez chaque carte dans la pile qui vous correspond, sans quota : une pile peut en recevoir sept et une autre aucune. Glissez une carte, ou touchez-la puis touchez une pile. Les piles donnent l'ordre de départ du classement et ses premiers intercalaires.",
    aideClassement: "Du plus proche de vous au plus éloigné. Touchez un intercalaire pour dire l'écart entre deux cartes voisines : inséparables, proches, nettement, un fossé. Déplacez une carte en la glissant ou avec les flèches ; les intercalaires restent à leur place. Le pourcentage d'une carte est sa proximité : 100 % pour la plus proche de vous, 0 % pour la plus éloignée.",
    aideRegle: "Faites glisser les cartes de haut en bas : la hauteur, c'est la proximité avec vous, et la distance entre deux cartes, c'est l'écart. Une graduation vaut l'écart « inséparables », deux graduations l'écart « proches ». Deux cartes lâchées l'une sur l'autre restent séparées d'une graduation. Les cartes trop proches se décalent sur le côté pour rester lisibles.",
    regleHaut: "plus proche de moi",
    proxTitre: "Proximité : 100 % pour la carte la plus proche de vous, 0 % pour la plus éloignée",
    btnSave: "Enregistrer mon résultat", btnFiche: "Voir ma fiche",
    titreSaveOff: "Connectez-vous pour enregistrer votre résultat", titreFicheOff: "Connectez-vous pour afficher votre fiche de profil",
    historique: "Mes résultats", historiqueVide: "Aucun résultat enregistré pour l'instant.",
    profilAttente: "Votre profil apparaîtra ici.", bandeauAttente: "pour voir vos scores",
    frontiere: "vos scores vous placent", compare: "votre profil serait",
    verrou: "Connectez-vous pour lire le portrait complet et enregistrer votre résultat.",
    cohRho: "1 si votre classement est exactement celui que vos scores prévoient",
    cohAide: "ρ compare votre classement à celui que vos propres scores prévoient : au moins 0,90 très cohérent, 0,80 cohérent, 0,70 fragile, en dessous proche du hasard (un classement au hasard obtient déjà 0,44 en moyenne). Écart positif : carte placée plus près de vous que vos scores ne le prévoient. Lignes surlignées : 4 rangs d'écart ou plus.",
    demanderSujet: "",
    lienAutre: "Pour décrire une organisation (entreprise, équipe, association) : <a href=\"autotest.html?dispositif=organisation\">autotest organisation</a>, expérimental."
  },
  organisation: {
    titre: "Autotest organisation",
    avertissement: "Expérimental. Ce test décrit une organisation (entreprise, équipe, association), pas vous. Les textes des cartes sont en cours de réécriture : certains parlent encore à la première personne.",
    consigne: "Pensez à une organisation précise. Rangez d'abord les 20 tempéraments en piles, de « tout à fait elle » à « pas du tout elle », d'après ce qu'elle valorise, récompense et attend vraiment, plutôt que ce qu'elle affiche. Classez-les ensuite, du plus proche de l'organisation au plus éloigné, en disant entre deux cartes voisines si elles sont inséparables, proches, nettement séparées ou séparées par un fossé. Le résultat est enregistré parmi vos profils d'organisation, sous le nom que vous lui donnez.",
    piles: ["Tout à fait elle", "Plutôt elle", "Mitigé", "Plutôt pas elle", "Pas du tout elle"],
    aidePiles: "Rangez chaque carte dans la pile qui correspond à l'organisation, sans quota : une pile peut en recevoir sept et une autre aucune. Glissez une carte, ou touchez-la puis touchez une pile. Les piles donnent l'ordre de départ du classement et ses premiers intercalaires.",
    aideClassement: "Du plus proche de l'organisation au plus éloigné. Touchez un intercalaire pour dire l'écart entre deux cartes voisines : inséparables, proches, nettement, un fossé. Déplacez une carte en la glissant ou avec les flèches ; les intercalaires restent à leur place. Le pourcentage d'une carte est sa proximité : 100 % pour la plus proche de l'organisation, 0 % pour la plus éloignée.",
    aideRegle: "Faites glisser les cartes de haut en bas : la hauteur, c'est la proximité avec l'organisation, et la distance entre deux cartes, c'est l'écart. Une graduation vaut l'écart « inséparables », deux graduations l'écart « proches ». Deux cartes lâchées l'une sur l'autre restent séparées d'une graduation. Les cartes trop proches se décalent sur le côté pour rester lisibles.",
    regleHaut: "plus proche de l'organisation",
    proxTitre: "Proximité : 100 % pour la carte la plus proche de l'organisation, 0 % pour la plus éloignée",
    btnSave: "Enregistrer ce profil d'organisation", btnFiche: "Voir sa fiche",
    titreSaveOff: "Connectez-vous pour enregistrer ce profil", titreFicheOff: "Connectez-vous pour afficher la fiche de ce profil",
    historique: "Mes profils d'organisation", historiqueVide: "Aucun profil d'organisation enregistré pour l'instant.",
    profilAttente: "Le profil de l'organisation apparaîtra ici.", bandeauAttente: "pour voir ses scores",
    frontiere: "ses scores la placent", compare: "son profil serait",
    verrou: "Connectez-vous pour lire le portrait complet et enregistrer ce profil.",
    cohRho: "1 si le classement est exactement celui que ses scores prévoient",
    cohAide: "ρ compare le classement à celui que ses propres scores prévoient : au moins 0,90 très cohérent, 0,80 cohérent, 0,70 fragile, en dessous proche du hasard (un classement au hasard obtient déjà 0,44 en moyenne). Écart positif : carte placée plus près de l'organisation que ses scores ne le prévoient. Lignes surlignées : 4 rangs d'écart ou plus.",
    demanderSujet: "Nom de l'organisation décrite (entreprise, équipe, association…) :",
    lienAutre: "Pour votre propre profil : <a href=\"autotest.html\">autotest</a>."
  }
},
  // ordre et intitulés des libellés dans la console
  CLES: [
    ["titre", "Titre de la page"], ["avertissement", "Avertissement (bandeau orange)", true], ["consigne", "Consigne", true],
    ["piles", "Les 5 piles, séparées par « | »"],
    ["aidePiles", "Aide des piles", true], ["aideClassement", "Aide du classement", true], ["aideRegle", "Aide de la règle", true],
    ["regleHaut", "Haut de la règle"], ["proxTitre", "Bulle du pourcentage de proximité"],
    ["btnSave", "Bouton Enregistrer"], ["btnFiche", "Bouton Fiche"], ["titreSaveOff", "Bulle Enregistrer, non connecté"], ["titreFicheOff", "Bulle Fiche, non connecté"],
    ["historique", "Titre de la liste des résultats"], ["historiqueVide", "Liste des résultats vide"],
    ["profilAttente", "Profil en attente"], ["bandeauAttente", "Bandeau en attente (après « Encore N cartes à ranger »)"],
    ["frontiere", "Profil frontière (« Profil frontière : … à égalité »)"], ["compare", "Sans les écarts (« …, … serait X »)"],
    ["verrou", "Invitation à se connecter"], ["cohRho", "Bulle de l'indice ρ"], ["cohAide", "Aide de la cohérence", true],
    ["demanderSujet", "Question du nom, à l'enregistrement"], ["lienAutre", "Lien vers l'autre test (HTML permis)", true]
  ]
};
