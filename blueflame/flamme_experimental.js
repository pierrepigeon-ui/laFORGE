/* =====================================================================
   Flamme Bleue — contenus expérimentaux (1.1, 17/10/2026)
   Propositions de Claude, en cours de relecture par Pierre : affichées avec la mention « expérimental ».
   - personnalites : 5 à 15 personnages par profil, rangés par univers (Histoire, Littérature et mythologie, Cinéma, séries et jeux,
     BD et animation, Star Wars, Star Trek, Harry Potter, Tolkien, Le Trône de fer, Marvel et DC) ;
     fiction, mythologie, figures historiques décédées ; jamais de personnes vivantes ;
   - travail : le profil au travail, en trois couches combinées selon les scores (portrait) :
       profils (rôle en équipe, familles de métiers), valeurs présentes et absentes, motivations.
   Sources : « personnalites des profils » et « le profil au travail », 17-10-2026 (classeurs Excel).
   Une fois validés, ces contenus iront dans la base, éditables dans la console.
   ===================================================================== */
window.FLAMME_EXPERIMENTAL = Object.assign({ VERSION: { numero: "1.2", date: "2026-10-19 23:59" } }, {
"personnalites": {
"W.rg": [
{
"nom": "Lou Gehrig",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Pilier discret des Yankees dans l'ombre de Babe Ruth, il a enchaîné 2 130 matchs consécutifs pour son équipe sans jamais chercher à en être la vedette.",
"type": "Historique"
},
{
"nom": "Porthos",
"univers": "Littérature et mythologie",
"source": "Les Trois Mousquetaires, A. Dumas",
"pourquoi": "Il vit pour la compagnie des mousquetaires et met volontiers sa force au service des tâches communes.",
"type": "Fiction"
},
{
"nom": "Frère Tuck",
"univers": "Littérature et mythologie",
"source": "Ivanhoé (Walter Scott) ; légende de Robin des Bois",
"pourquoi": "Moine jovial et bon vivant, il festoie avec la bande de Sherwood et met volontiers la main à l'ouvrage lors de l'assaut de Torquilstone, sans jamais chercher à en prendre la tête.",
"type": "Fiction"
},
{
"nom": "Perceval",
"univers": "Cinéma, séries et jeux",
"source": "Kaamelott",
"pourquoi": "Chevalier de la Table ronde qui y trouve toute son identité, il part en quête avec entrain et son franc-parler désarmant, sans jamais prétendre diriger quoi que ce soit.",
"type": "Fiction"
},
{
"nom": "Krilin",
"univers": "BD et animation",
"source": "Dragon Ball",
"pourquoi": "Meilleur ami de Goku, il se bat aux côtés de la bande sans jamais chercher à la diriger, heureux d'en être tout simplement.",
"type": "Fiction"
},
{
"nom": "Garazeb « Zeb » Orrelios",
"univers": "Star Wars",
"source": "Star Wars Rebels",
"pourquoi": "Gros bras de l'équipage du Ghost, il se jette avec plaisir dans la bagarre pour les siens sans jamais chercher à commander.",
"type": "Fiction"
},
{
"nom": "Miles O'Brien",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Sous-officier qui n'a jamais cherché à devenir officier, il vit pour son équipe technique, ses parties de fléchettes et ses reconstitutions de batailles holographiques avec Bashir.",
"type": "Fiction"
},
{
"nom": "Ron Weasley",
"univers": "Harry Potter",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Fidèle à sa bande et à sa famille, il suit le groupe dans toutes ses aventures, pour l'appartenance autant que pour l'action.",
"type": "Fiction"
},
{
"nom": "Edd-la-Douleur",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Frère juré de la Garde de Nuit au pessimisme comique, il abat sa part de corvées sans jamais réclamer de commandement.",
"type": "Fiction"
},
{
"nom": "La Chose (Ben Grimm)",
"univers": "Marvel et DC",
"source": "Les Quatre Fantastiques (comics Marvel)",
"pourquoi": "Membre bourru mais indéfectible de la famille des Quatre Fantastiques, il se jette dans la bagarre avec entrain et laisse volontiers la direction de l'équipe à Reed Richards.",
"type": "Fiction"
}
],
"W.bg": [
{
"nom": "Samuel Pepys",
"univers": "Histoire",
"source": "Angleterre, XVIIe siècle",
"pourquoi": "Secrétaire de l'Amirauté puis président de la Royal Society, il consigne dans son journal avec une satisfaction non dissimulée chaque marque de considération que lui vaut son rang.",
"type": "Historique"
},
{
"nom": "Monsieur Homais",
"univers": "Littérature et mythologie",
"source": "Madame Bovary, G. Flaubert",
"pourquoi": "Pharmacien installé et notable du bourg, il tire sa position et sa considération des institutions locales.",
"type": "Fiction"
},
{
"nom": "Monsieur de Rênal",
"univers": "Littérature et mythologie",
"source": "Le Rouge et le Noir, Stendhal",
"pourquoi": "Maire de Verrières, il jouit d'une place à part dans sa ville et veille à ce qu'elle soit reconnue.",
"type": "Fiction"
},
{
"nom": "César Birotteau",
"univers": "Littérature et mythologie",
"source": "Balzac, Histoire de la grandeur et de la décadence de César Birotteau",
"pourquoi": "Parfumeur parisien devenu adjoint au maire et décoré de la Légion d'honneur, il donne un grand bal pour célébrer sa place dans la bonne société et se ruine en voulant en tirer davantage.",
"type": "Fiction"
},
{
"nom": "Vito Corleone",
"univers": "Cinéma, séries et jeux",
"source": "Le Parrain (Francis Ford Coppola)",
"pourquoi": "Il rend des services à sa communauté en échange de respect et de loyauté, et tient le rôle central d'un groupe qui le lui rend bien, comme le montre la scène des requêtes au mariage de sa fille.",
"type": "Fiction"
},
{
"nom": "Violet Crawley, comtesse douairière de Grantham",
"univers": "Cinéma, séries et jeux",
"source": "Downton Abbey",
"pourquoi": "Pilier respecté de la famille et du village, elle jouit d'une place à part qu'elle défend à coups de répliques cinglantes.",
"type": "Fiction"
},
{
"nom": "Le maire de Champignac",
"univers": "BD et animation",
"source": "Spirou et Fantasio",
"pourquoi": "Notable pompeux du village, il ne manque aucune inauguration pour prononcer un discours ronflant qui conforte sa place à part.",
"type": "Fiction"
},
{
"nom": "Greef Karga",
"univers": "Star Wars",
"source": "The Mandalorian",
"pourquoi": "Chef de la Guilde des chasseurs de primes puis magistrat de Nevarro, il tient une place en vue dans sa communauté et ne perd jamais de vue ce qu'elle lui rapporte.",
"type": "Fiction"
},
{
"nom": "Lwaxana Troi",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation",
"pourquoi": "Fille de la Cinquième Maison, détentrice du Saint Calice de Rixx, elle rappelle ses titres à chaque visite et entend être traitée selon son rang dans la société bétazoïde.",
"type": "Fiction"
},
{
"nom": "Drago Malefoy",
"univers": "Harry Potter",
"source": "Harry Potter (tomes 1 à 6)",
"pourquoi": "Il exige les égards dus au nom Malefoy et s'investit dans les structures qui lui donnent du pouvoir, comme la Brigade inquisitoriale d'Ombrage qui lui permet de retirer des points.",
"type": "Fiction"
},
{
"nom": "Prosper Poiredebeurré",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Aubergiste du Poney Fringant, figure connue et respectée de Bree, il tient sa place de notable du village en veillant de près à la bonne marche de sa maison.",
"type": "Fiction"
},
{
"nom": "Grand Mestre Pycelle",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Il sert successivement Aerys, Robert et Joffrey, conservant sa place au Conseil restreint en s'inscrivant dans chaque régime qui le protège.",
"type": "Fiction"
}
],
"W.br": [
{
"nom": "Vercingétorix",
"univers": "Histoire",
"source": "Gaule, Ier siècle av. J.-C.",
"pourquoi": "Il fédère des tribus rivales autour de lui et prend la tête de la coalition gauloise.",
"type": "Historique"
},
{
"nom": "Boudicca",
"univers": "Histoire",
"source": "Bretagne romaine, Ier siècle",
"pourquoi": "Reine des Icènes, elle fédère plusieurs tribus bretonnes et prend la tête d'une révolte fougueuse contre l'autorité romaine qui avait humilié son peuple.",
"type": "Historique"
},
{
"nom": "Robin des Bois",
"univers": "Littérature et mythologie",
"source": "Légende anglaise ; Ivanhoé (Walter Scott)",
"pourquoi": "Il fédère les proscrits de Sherwood avec panache et défie le prince Jean et le shérif de Nottingham au nom d'une autorité légitime qui servirait mieux le peuple.",
"type": "Fiction"
},
{
"nom": "Commandant Shepard",
"univers": "Cinéma, séries et jeux",
"source": "Mass Effect (jeux vidéo)",
"pourquoi": "Il fédère un équipage hétéroclite autour de lui et n'hésite pas à défier le Conseil de la Citadelle quand celui-ci refuse de voir la menace des Moissonneurs.",
"type": "Fiction"
},
{
"nom": "Naruto Uzumaki",
"univers": "BD et animation",
"source": "Naruto",
"pourquoi": "Rejeté enfant, il met une énergie débordante à se faire reconnaître du village jusqu'à vouloir en devenir le Hokage.",
"type": "Fiction"
},
{
"nom": "Hera Syndulla",
"univers": "Star Wars",
"source": "Star Wars Rebels",
"pourquoi": "Pilote passionnée et capitaine du Ghost, elle tient fermement son équipage et le mène au combat avec fougue au service de la Rébellion.",
"type": "Fiction"
},
{
"nom": "Capitaine Benjamin Sisko",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Il fédère Bajorans, Ferengi et officiers de Starfleet autour de la station, et n'hésite pas à affronter l'amiral Leyton quand celui-ci prépare un coup d'État sur Terre.",
"type": "Fiction"
},
{
"nom": "Aragorn",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux, J. R. R. Tolkien",
"pourquoi": "Il rassemble les peuples libres et assume le commandement que les autres n'osent pas tenir.",
"type": "Fiction"
},
{
"nom": "Théoden",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Une fois libéré de l'emprise de Langue de Serpent, le roi du Rohan reprend la tête de son peuple et mène lui-même la charge des Rohirrim au gouffre de Helm puis aux champs du Pelennor.",
"type": "Fiction"
},
{
"nom": "Jon Snow",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Lord Commandant de la Garde de Nuit, il prend la tête de ses frères et défie leurs traditions en ouvrant le Mur aux sauvageons pour sauver le royaume.",
"type": "Fiction"
},
{
"nom": "Mance Rayder",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Déserteur de la Garde de Nuit devenu Roi-d'au-delà-du-Mur, il fédère des clans sauvageons rivaux en un seul peuple en marche.",
"type": "Fiction"
},
{
"nom": "Captain America (Steve Rogers)",
"univers": "Marvel et DC",
"source": "Captain America : Civil War (MCU)",
"pourquoi": "Chef naturel des Avengers, il refuse de signer les accords de Sokovie parce qu'il estime que cette autorité ne sert pas vraiment ceux qu'il protège.",
"type": "Fiction"
}
],
"W.gu": [
{
"nom": "Emily Post",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Son guide « Etiquette » (1922) codifie le « comme il faut » en le fondant sur la considération envers autrui, pour que chacun sache se comporter en société.",
"type": "Historique"
},
{
"nom": "Charles Ingalls",
"univers": "Littérature et mythologie",
"source": "La Petite Maison dans la prairie, L. Ingalls Wilder",
"pourquoi": "Pilier honnête de sa communauté, il fait ce qui est attendu, comme c'est attendu, et y trouve sa paix.",
"type": "Fiction"
},
{
"nom": "Elinor Dashwood",
"univers": "Littérature et mythologie",
"source": "Jane Austen, Raison et Sentiments",
"pourquoi": "Elle tait son chagrin en apprenant les fiançailles secrètes d'Edward pour continuer à tenir son rang et à ménager sa famille, modèle de tact et de bienséance.",
"type": "Fiction"
},
{
"nom": "Charlotte York",
"univers": "Cinéma, séries et jeux",
"source": "Sex and the City",
"pourquoi": "Romantique et traditionnelle, elle veut faire les choses « comme il faut » — mariage, famille, bonnes manières — et s'efforce de préserver l'harmonie de son cercle d'amies.",
"type": "Fiction"
},
{
"nom": "Ned Flanders",
"univers": "BD et animation",
"source": "Les Simpson",
"pourquoi": "Voisin modèle et paroissien exemplaire, il trouve ordre et sérénité dans les règles de sa communauté.",
"type": "Fiction"
},
{
"nom": "C-3PO (Z-6PO)",
"univers": "Star Wars",
"source": "Star Wars, trilogie originale",
"pourquoi": "Droïde de protocole, il rappelle sans cesse l'étiquette et les convenances et voudrait que chacun se comporte « comme il faut ».",
"type": "Fiction"
},
{
"nom": "Saru",
"univers": "Star Trek",
"source": "Star Trek : Discovery",
"pourquoi": "Premier officier attaché au protocole, il fait passer l'ordre et la sécurité de l'équipage avant tout et tempère avec diplomatie les élans de Burnham.",
"type": "Fiction"
},
{
"nom": "Pétunia Dursley",
"univers": "Harry Potter",
"source": "Harry Potter à l'école des sorciers",
"pourquoi": "Obsédée par l'idée d'être une famille parfaitement normale, elle passe son temps à épier les voisins par-dessus la haie pour juger qui se comporte comme il faut.",
"type": "Fiction"
},
{
"nom": "Hamfast Gamegie (l'Ancien)",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Jardinier de Cul-de-Sac attaché aux usages de la Comté, il se méfie de tout ce qui est « étranger » et ponctue ses conversations de sagesses convenues sur ce qui se fait et ne se fait pas.",
"type": "Fiction"
},
{
"nom": "Septa Mordane",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Elle enseigne à Sansa et Arya la couture et les bonnes manières, et veille à ce que les filles Stark se tiennent comme on l'attend de dames.",
"type": "Fiction"
},
{
"nom": "Superman",
"univers": "Marvel et DC",
"source": "Superman (comics DC ; Man of Steel)",
"pourquoi": "Le « boy-scout » de DC fait exactement ce qu'on attend d'un bon citoyen, défend la vérité et la justice et veut inspirer aux autres le même comportement.",
"type": "Fiction"
}
],
"W.ur": [
{
"nom": "Florence Nightingale",
"univers": "Histoire",
"source": "Angleterre, XIXe siècle",
"pourquoi": "Elle s'engage là où l'on a besoin d'elle et fait évoluer les soins pour servir son pays.",
"type": "Historique"
},
{
"nom": "Clara Barton",
"univers": "Histoire",
"source": "États-Unis, XIXe siècle",
"pourquoi": "« L'ange du champ de bataille » soigne les blessés de la guerre de Sécession puis fonde la Croix-Rouge américaine, par pur besoin d'être utile.",
"type": "Historique"
},
{
"nom": "Docteur Bernard Rieux",
"univers": "Littérature et mythologie",
"source": "Albert Camus, La Peste",
"pourquoi": "Pendant l'épidémie d'Oran, il soigne sans relâche en refusant tout héroïsme et toute idéologie : pour lui, l'honnêteté consiste simplement à faire son métier.",
"type": "Fiction"
},
{
"nom": "Tali'Zorah",
"univers": "Cinéma, séries et jeux",
"source": "Mass Effect (jeux vidéo)",
"pourquoi": "Ingénieure quarienne dont la vie est tournée vers la Flottille nomade, elle met son génie technique au service de son peuple et de l'équipage, en évitant les intrigues politiques.",
"type": "Fiction"
},
{
"nom": "Astérix",
"univers": "BD et animation",
"source": "Astérix (Goscinny et Uderzo)",
"pourquoi": "C'est toujours lui que le village envoie en mission, de Rome à l'Égypte, et il part sans jamais briguer la place du chef.",
"type": "Fiction"
},
{
"nom": "Tony Tony Chopper",
"univers": "BD et animation",
"source": "One Piece",
"pourquoi": "Le petit renne médecin rejoint l'équipage de Luffy et ne demande qu'à y être utile en soignant ses compagnons.",
"type": "Fiction"
},
{
"nom": "Bodhi Rook",
"univers": "Star Wars",
"source": "Rogue One",
"pourquoi": "Pilote impérial déserteur, il se porte volontaire pour porter le message de Galen Erso puis brancher les communications sur Scarif, simplement pour se rendre utile.",
"type": "Fiction"
},
{
"nom": "Neville Londubat",
"univers": "Harry Potter",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Il répond présent quand le groupe a besoin de lui et grandit à travers les missions qu'il accepte.",
"type": "Fiction"
},
{
"nom": "Arthur Weasley",
"univers": "Harry Potter",
"source": "Harry Potter (tomes 2 à 7)",
"pourquoi": "Membre dévoué de l'Ordre du Phénix et fonctionnaire passionné par les objets moldus, il se rend utile sans jamais chercher l'avancement, ce que Lucius Malefoy lui reproche.",
"type": "Fiction"
},
{
"nom": "Meriadoc Brandebouc (Merry)",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Il organise la « conspiration » qui permet d'accompagner Frodon, puis offre spontanément son épée à Théoden et le suit à la guerre, toujours pour être utile au groupe plutôt que pour commander.",
"type": "Fiction"
},
{
"nom": "Missandei",
"univers": "Le Trône de fer",
"source": "Game of Thrones (HBO)",
"pourquoi": "Affranchie par Daenerys, elle choisit de rester à son service comme interprète et conseillère dévouée, par besoin d'être utile à la cause.",
"type": "Fiction"
}
],
"W.ub": [
{
"nom": "Maximilien de Béthune, duc de Sully",
"univers": "Histoire",
"source": "France, règne d'Henri IV",
"pourquoi": "Serviteur efficace du royaume, il met ses compétences au service d'une organisation qui fonctionne.",
"type": "Historique"
},
{
"nom": "Lazare Carnot",
"univers": "Histoire",
"source": "France, fin XVIIIe siècle",
"pourquoi": "Surnommé « l'Organisateur de la victoire », il met sa science d'ingénieur au service des armées de la République, qu'il structure et rend victorieuses.",
"type": "Historique"
},
{
"nom": "Docteur Watson",
"univers": "Littérature et mythologie",
"source": "Sherlock Holmes, A. Conan Doyle",
"pourquoi": "Collaborateur compétent et fiable, il permet au tandem d'aboutir et n'en tire pas moins une certaine fierté.",
"type": "Fiction"
},
{
"nom": "Héphaïstos",
"univers": "Littérature et mythologie",
"source": "Mythologie grecque ; Homère, Iliade",
"pourquoi": "Forgeron des dieux, il met son savoir-faire au service de l'Olympe et forge en une nuit les armes d'Achille à la demande de Thétis.",
"type": "Fiction"
},
{
"nom": "Monica Geller",
"univers": "Cinéma, séries et jeux",
"source": "Friends",
"pourquoi": "Cheffe talentueuse et organisatrice compulsive, elle tient la maison où se retrouve la bande et ne cache ni sa compétence ni son esprit de compétition.",
"type": "Fiction"
},
{
"nom": "Nami",
"univers": "BD et animation",
"source": "One Piece",
"pourquoi": "Navigatrice hors pair et fière de l'être, elle met son talent au service de l'équipage sans perdre de vue l'argent et les trésors.",
"type": "Fiction"
},
{
"nom": "K-2SO",
"univers": "Star Wars",
"source": "Rogue One",
"pourquoi": "Droïde impérial reprogrammé, il met sa compétence au service de la mission rebelle tout en assénant ses statistiques sans la moindre modestie.",
"type": "Fiction"
},
{
"nom": "Nog",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Premier Ferengi de Starfleet, ambitieux et sûr de lui, il met son sens du marchandage au service de l'équipe en échangeant de proche en proche pour obtenir la pièce dont O'Brien a besoin.",
"type": "Fiction"
},
{
"nom": "Kevan Lannister",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Bras droit fidèle de Tywin pendant des décennies, il met ses compétences au service de la maison Lannister sans chercher la première place.",
"type": "Fiction"
},
{
"nom": "Barbara Gordon (Oracle)",
"univers": "Marvel et DC",
"source": "Batman et Birds of Prey (comics DC)",
"pourquoi": "Clouée dans un fauteuil roulant, elle devient le centre d'information de toute la famille de Batman et sait très bien que l'équipe ne tournerait pas sans ses compétences.",
"type": "Fiction"
}
],
"U.rg": [
{
"nom": "Charles Darwin",
"univers": "Histoire",
"source": "Angleterre, XIXe siècle",
"pourquoi": "Il observe, réfléchit, documente pendant des années, puis partage une théorie qui repousse les frontières du savoir.",
"type": "Historique"
},
{
"nom": "Barbara McClintock",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Seule avec son maïs pendant des décennies, elle découvre les gènes sauteurs, une idée si abstraite qu'elle reste ignorée avant d'être couronnée par le Nobel en 1983.",
"type": "Historique"
},
{
"nom": "Faust",
"univers": "Littérature et mythologie",
"source": "Goethe, Faust",
"pourquoi": "Savant désespéré d'avoir tout étudié sans rien comprendre, il pactise avec Méphistophélès pour enfin connaître le monde de l'intérieur et le vivre intensément.",
"type": "Fiction"
},
{
"nom": "Fox Mulder",
"univers": "Cinéma, séries et jeux",
"source": "X-Files",
"pourquoi": "Agent marginalisé qui consacre sa vie à la recherche de la vérité sur le paranormal, il poursuit ses théories avec passion même quand personne ne le croit.",
"type": "Fiction"
},
{
"nom": "Professeur Tournesol",
"univers": "BD et animation",
"source": "Les Aventures de Tintin, Hergé",
"pourquoi": "Savant absorbé par ses recherches, souvent abstraites, dont les découvertes finissent par servir à tous.",
"type": "Fiction"
},
{
"nom": "Le comte de Champignac",
"univers": "BD et animation",
"source": "Spirou et Fantasio",
"pourquoi": "Savant mycologue retiré dans son château, il consacre sa vie à des recherches pointues que peu de gens comprennent.",
"type": "Fiction"
},
{
"nom": "Professeur Richard Galen",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation",
"pourquoi": "Archéologue et ancien mentor de Picard, il consacre ses dernières années à reconstituer un puzzle génétique dispersé à travers la galaxie, une quête que presque personne ne comprend.",
"type": "Fiction"
},
{
"nom": "Garrick Ollivander",
"univers": "Harry Potter",
"source": "Harry Potter à l'école des sorciers ; Harry Potter et les Reliques de la Mort",
"pourquoi": "Il se souvient de chaque baguette qu'il a vendue et disserte sur la science, obscure pour le commun des sorciers, du lien entre la baguette et son propriétaire.",
"type": "Fiction"
},
{
"nom": "Radagast le Brun",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux ; Le Hobbit",
"pourquoi": "Magicien retiré dans sa demeure de Rhosgobel, il consacre son savoir aux herbes et aux bêtes et se lie aux oiseaux, loin des enjeux de pouvoir qui occupent les autres Istari.",
"type": "Fiction"
},
{
"nom": "Bruce Banner",
"univers": "Marvel et DC",
"source": "L'Incroyable Hulk ; Avengers (MCU)",
"pourquoi": "Physicien spécialiste des rayons gamma, il est d'abord un chercheur absorbé par une science abstraite, avant que son propre corps ne devienne son sujet d'expérience.",
"type": "Fiction"
}
],
"U.bg": [
{
"nom": "Louis Pasteur",
"univers": "Histoire",
"source": "France, XIXe siècle",
"pourquoi": "Maître incontesté de son domaine, respecté, il accepte de grandes responsabilités au nom de la science.",
"type": "Historique"
},
{
"nom": "Jean-Martin Charcot",
"univers": "Histoire",
"source": "France, XIXe siècle",
"pourquoi": "Patron de la Salpêtrière surnommé « le Napoléon des névroses », il règne sur la neurologie de son temps et ses leçons du mardi attirent l'Europe savante.",
"type": "Historique"
},
{
"nom": "Athéna",
"univers": "Littérature et mythologie",
"source": "Mythologie grecque ; Ovide, Les Métamorphoses",
"pourquoi": "Déesse de la sagesse et de la stratégie, sûre de sa supériorité, elle ne tolère pas qu'Arachné prétende la surpasser et la punit sévèrement.",
"type": "Fiction"
},
{
"nom": "Docteur Gregory House",
"univers": "Cinéma, séries et jeux",
"source": "Dr House (série)",
"pourquoi": "Compétence reconnue de tous, assurance totale, et une façon très personnelle d'exercer son art.",
"type": "Fiction"
},
{
"nom": "Cristina Yang",
"univers": "Cinéma, séries et jeux",
"source": "Grey's Anatomy",
"pourquoi": "Chirurgienne cardiothoracique brillante et ambitieuse, elle ne vit que pour devenir la meilleure dans sa spécialité et assume pleinement les responsabilités qui vont avec.",
"type": "Fiction"
},
{
"nom": "Professeur Philip Mortimer",
"univers": "BD et animation",
"source": "Blake et Mortimer",
"pourquoi": "Physicien éminent à qui le gouvernement britannique confie ses projets les plus sensibles, comme l'Espadon.",
"type": "Fiction"
},
{
"nom": "Mace Windu",
"univers": "Star Wars",
"source": "Star Wars, épisodes I à III",
"pourquoi": "Maître parmi les plus respectés du Conseil Jedi et escrimeur redoutable, il prend sur lui d'aller arrêter le chancelier Palpatine.",
"type": "Fiction"
},
{
"nom": "Docteur Beverly Crusher",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation",
"pourquoi": "Médecin-chef respectée de l'Enterprise, elle quitte le vaisseau pendant un an pour prendre la direction de Starfleet Medical.",
"type": "Fiction"
},
{
"nom": "Tyrion Lannister",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Nommé Main du Roi, il prend en charge la défense de Port-Réal et sauve la ville à la Néra grâce à son intelligence et au feu grégeois.",
"type": "Fiction"
},
{
"nom": "Docteur Strange",
"univers": "Marvel et DC",
"source": "Doctor Strange (MCU, 2016)",
"pourquoi": "Neurochirurgien brillant et arrogant, il ne supporte pas de ne pas être le meilleur, puis il met cette même exigence à devenir le Sorcier suprême.",
"type": "Fiction"
}
],
"U.br": [
{
"nom": "Cardinal de Richelieu",
"univers": "Histoire",
"source": "France, XVIIe siècle",
"pourquoi": "Il calcule chaque coup d'avance et mène ses projets avec ambition, entouré de subordonnés.",
"type": "Historique"
},
{
"nom": "Hannibal Barca",
"univers": "Histoire",
"source": "Carthage, IIIe siècle av. J.-C.",
"pourquoi": "Après avoir franchi les Alpes avec ses éléphants, il anéantit l'armée romaine à Cannes par un encerclement calculé qui est encore enseigné dans les écoles militaires.",
"type": "Historique"
},
{
"nom": "Professeur Moriarty",
"univers": "Littérature et mythologie",
"source": "Sherlock Holmes, A. Conan Doyle",
"pourquoi": "Stratège froid qui planifie dans l'ombre et fait exécuter ses plans par d'autres.",
"type": "Fiction"
},
{
"nom": "Vautrin",
"univers": "Littérature et mythologie",
"source": "Balzac, Le Père Goriot ; Illusions perdues",
"pourquoi": "Forçat évadé au cerveau de joueur d'échecs, il échafaude des plans à long terme et manœuvre Rastignac puis Lucien de Rubempré comme des pièces au service de ses desseins.",
"type": "Fiction"
},
{
"nom": "Walter White",
"univers": "Cinéma, séries et jeux",
"source": "Breaking Bad",
"pourquoi": "Professeur de chimie devenu Heisenberg, il calcule chaque coup, dirige ses subordonnés et finit par revendiquer ouvertement son génie (« Say my name »).",
"type": "Fiction"
},
{
"nom": "Hannibal",
"univers": "Cinéma, séries et jeux",
"source": "L'Agence tous risques",
"pourquoi": "Le chef de l'équipe élabore des plans tordus avec un cigare et un plaisir évident, résumé par sa réplique « J'adore quand un plan se déroule sans accroc ».",
"type": "Fiction"
},
{
"nom": "L",
"univers": "BD et animation",
"source": "Death Note",
"pourquoi": "Détective génial qui affronte Kira à distance par la déduction pure, entouré d'une petite équipe, et qui déteste perdre.",
"type": "Fiction"
},
{
"nom": "Grand Amiral Thrawn",
"univers": "Star Wars",
"source": "Star Wars Rebels",
"pourquoi": "Il étudie l'art de ses adversaires pour anticiper leurs moindres réactions et prépare chacune de ses victoires plusieurs coups à l'avance.",
"type": "Fiction"
},
{
"nom": "Capitaine Gabriel Lorca",
"univers": "Star Trek",
"source": "Star Trek : Discovery",
"pourquoi": "Il manœuvre en secret l'équipage du Discovery et utilise chacun comme une pièce de son propre plan, calculé depuis le début.",
"type": "Fiction"
},
{
"nom": "Lord Voldemort",
"univers": "Harry Potter",
"source": "Harry Potter (sept tomes)",
"pourquoi": "Convaincu d'être le plus grand sorcier de tous les temps, il mène son projet d'immortalité seul et ne voit ses Mangemorts que comme des subordonnés.",
"type": "Fiction"
},
{
"nom": "Saroumane",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Chef du Conseil Blanc devenu expert de la science des Anneaux, il convoite l'Anneau Unique pour lui-même et fait d'Isengard une forge de guerre peuplée de serviteurs, convaincu de sa propre supériorité.",
"type": "Fiction"
},
{
"nom": "Petyr Baelish (Littlefinger)",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Parti de rien, il manipule les grandes maisons coup après coup, seul, avec des pions qu'il sacrifie ; « le chaos est une échelle ».",
"type": "Fiction"
},
{
"nom": "Lex Luthor",
"univers": "Marvel et DC",
"source": "Superman (comics DC ; Batman v Superman)",
"pourquoi": "Génie scientifique à la tête de LexCorp, il ourdit seul ou avec ses subordonnés des plans à long terme contre Superman, convaincu de sa propre supériorité intellectuelle.",
"type": "Fiction"
}
],
"U.gw": [
{
"nom": "Denis Diderot",
"univers": "Histoire",
"source": "France, XVIIIe siècle",
"pourquoi": "Avec l'Encyclopédie, il rassemble et structure le savoir de son époque pour le transmettre au plus grand nombre.",
"type": "Historique"
},
{
"nom": "Hypatie d'Alexandrie",
"univers": "Histoire",
"source": "Égypte romaine, IVe-Ve siècle",
"pourquoi": "Mathématicienne et philosophe, elle enseigne à toute l'élite d'Alexandrie et conseille le préfet Oreste, faisant de son savoir une ressource pour la cité.",
"type": "Historique"
},
{
"nom": "Merlin",
"univers": "Littérature et mythologie",
"source": "Légende arthurienne",
"pourquoi": "Conseiller du roi, il met son savoir au service de la cour et forme ceux qui en ont besoin.",
"type": "Fiction"
},
{
"nom": "Nestor, roi de Pylos",
"univers": "Littérature et mythologie",
"source": "Homère, Iliade",
"pourquoi": "Doyen des chefs achéens, il puise dans sa longue expérience pour conseiller Agamemnon et l'armée lors des assemblées.",
"type": "Fiction"
},
{
"nom": "Rupert Giles",
"univers": "Cinéma, séries et jeux",
"source": "Buffy contre les vampires",
"pourquoi": "Observateur et bibliothécaire, il fouille les grimoires et forme Buffy, si bien que le groupe prend ses décisions grâce à ses recherches.",
"type": "Fiction"
},
{
"nom": "Le Grand Schtroumpf",
"univers": "BD et animation",
"source": "Les Schtroumpfs (Peyo)",
"pourquoi": "Doyen savant du village, il accumule le savoir et ses conseils guident chaque décision collective.",
"type": "Fiction"
},
{
"nom": "Huyang",
"univers": "Star Wars",
"source": "Star Wars : The Clone Wars ; Ahsoka",
"pourquoi": "Droïde architecte qui, depuis des millénaires, transmet aux jeunes Jedi le savoir nécessaire pour construire leur sabre laser.",
"type": "Fiction"
},
{
"nom": "Pomona Chourave",
"univers": "Harry Potter",
"source": "Harry Potter et la Chambre des secrets",
"pourquoi": "Professeur de botanique, elle met son savoir au service de l'école en cultivant les mandragores qui permettront de soigner les élèves pétrifiés.",
"type": "Fiction"
},
{
"nom": "Elrond",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux ; Le Hobbit",
"pourquoi": "Gardien du savoir de Fondcombe, il déchiffre les lettres lunaires de la carte de Thorin et réunit le Conseil où les peuples libres décident du sort de l'Anneau.",
"type": "Fiction"
},
{
"nom": "Mestre Luwin",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Mestre de Winterfell, il instruit les enfants Stark et conseille Robb puis Bran avec sagesse lorsque le château doit être gouverné.",
"type": "Fiction"
},
{
"nom": "Le Fauve (Hank McCoy)",
"univers": "Marvel et DC",
"source": "X-Men (comics) ; X-Men : Le Commencement",
"pourquoi": "Scientifique érudit qui conçoit le Cerebro et le jet des X-Men, il enseigne à l'école de Xavier et met son savoir au service du groupe.",
"type": "Fiction"
}
],
"U.rw": [
{
"nom": "Gustave Eiffel",
"univers": "Histoire",
"source": "France, XIXe siècle",
"pourquoi": "Ingénieur qui améliore sans cesse les techniques de construction pour faire mieux avec moins de matière.",
"type": "Historique"
},
{
"nom": "Hedy Lamarr",
"univers": "Histoire",
"source": "Autriche / États-Unis, XXe siècle",
"pourquoi": "Star hollywoodienne, elle co-invente l'étalement de spectre par saut de fréquence, que la Marine américaine met de côté et dont elle ne tirera jamais profit.",
"type": "Historique"
},
{
"nom": "Dédale",
"univers": "Littérature et mythologie",
"source": "Mythologie grecque ; Ovide, Les Métamorphoses",
"pourquoi": "Ingénieur génial, il conçoit le Labyrinthe pour le roi Minos, qui en tire tout le profit avant de l'y enfermer lui-même.",
"type": "Fiction"
},
{
"nom": "Q",
"univers": "Cinéma, séries et jeux",
"source": "James Bond, I. Fleming",
"pourquoi": "Il conçoit pour son service des outils toujours plus ingénieux, plus attaché à l'innovation qu'à la production.",
"type": "Fiction"
},
{
"nom": "Mordin Solus",
"univers": "Cinéma, séries et jeux",
"source": "Mass Effect 2 (jeu vidéo)",
"pourquoi": "Scientifique galarien qui parle à toute vitesse et chante qu'il est « le modèle du scientifique », il met son génie au service de son peuple et de l'équipage.",
"type": "Fiction"
},
{
"nom": "Galen Erso",
"univers": "Star Wars",
"source": "Rogue One",
"pourquoi": "Chercheur passionné par l'énergie du kyber, il voit ses travaux détournés par l'Empire au profit de Krennic et de l'Étoile de la Mort.",
"type": "Fiction"
},
{
"nom": "Paul Stamets",
"univers": "Star Trek",
"source": "Star Trek : Discovery",
"pourquoi": "Passionné par le réseau mycélien qu'il a conçu pour la recherche, il voit Starfleet en faire un moteur de guerre, au profit d'autres que lui.",
"type": "Fiction"
},
{
"nom": "Celebrimbor",
"univers": "Tolkien",
"source": "Le Silmarillion",
"pourquoi": "Maître forgeron d'Eregion, il forge les Anneaux de Pouvoir avec la science apprise d'Annatar, avant que Sauron ne tire tout le profit de son art en forgeant l'Anneau Unique.",
"type": "Fiction"
},
{
"nom": "Shuri",
"univers": "Marvel et DC",
"source": "Black Panther (MCU, 2018)",
"pourquoi": "La princesse ingénieure du Wakanda améliore sans cesse le costume de son frère, partant du principe que ce n'est pas parce qu'une chose fonctionne qu'on ne peut pas l'améliorer.",
"type": "Fiction"
}
],
"U.wb": [
{
"nom": "Grace Hopper",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Officière de la Navy et pionnière du compilateur et du COBOL, elle rend la programmation fiable et utilisable par des organisations entières.",
"type": "Historique"
},
{
"nom": "Cyrus Smith",
"univers": "Littérature et mythologie",
"source": "Jules Verne, L'Île mystérieuse",
"pourquoi": "Ingénieur méthodique, il calcule la latitude de l'île, fabrique du feu, de la poterie et de la nitroglycérine, et rend la colonie fiable par sa rigueur et sa planification.",
"type": "Fiction"
},
{
"nom": "Dana Scully",
"univers": "Cinéma, séries et jeux",
"source": "X-Files",
"pourquoi": "Médecin et agent du FBI, elle aborde chaque affaire avec rigueur scientifique et méthode, en contrepoint des intuitions de Mulder.",
"type": "Fiction"
},
{
"nom": "Lama Su",
"univers": "Star Wars",
"source": "Star Wars, épisode II",
"pourquoi": "Premier ministre de Kamino, il livre l'armée de clones commandée, prête et conforme aux spécifications, avec la fierté d'un travail planifié de longue date.",
"type": "Fiction"
},
{
"nom": "Montgomery Scott (Scotty)",
"univers": "Star Trek",
"source": "Star Trek",
"pourquoi": "Ingénieur en chef sur qui repose la fiabilité du vaisseau, il livre toujours, et souvent en avance.",
"type": "Fiction"
},
{
"nom": "Hermione Granger",
"univers": "Harry Potter",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Elle sait tout ce qu'il faut savoir et l'applique au bon moment : grâce à elle, les projets du groupe aboutissent.",
"type": "Fiction"
}
],
"B.rg": [
{
"nom": "Alexandre le Grand",
"univers": "Histoire",
"source": "Macédoine, IVe siècle av. J.-C.",
"pourquoi": "Insatiable conquérant, il voit le monde comme un territoire à acquérir et à posséder.",
"type": "Historique"
},
{
"nom": "Catherine II de Russie",
"univers": "Histoire",
"source": "Russie, XVIIIe siècle",
"pourquoi": "La « Grande Catherine » agrandit son empire de la Crimée à la Pologne et achète des collections entières de tableaux, dont naîtra l'Ermitage.",
"type": "Historique"
},
{
"nom": "Dom Juan",
"univers": "Littérature et mythologie",
"source": "Molière, Dom Juan",
"pourquoi": "Il se compare à Alexandre et souhaiterait « qu'il y eût d'autres mondes » pour y étendre ses conquêtes amoureuses, incapable de se restreindre à une seule.",
"type": "Fiction"
},
{
"nom": "Charles Foster Kane",
"univers": "Cinéma, séries et jeux",
"source": "Citizen Kane, O. Welles",
"pourquoi": "Il accumule journaux, objets d'art et domaines, toujours en quête de nouvelles acquisitions.",
"type": "Fiction"
},
{
"nom": "Tony Montana",
"univers": "Cinéma, séries et jeux",
"source": "Scarface (Brian De Palma)",
"pourquoi": "Réfugié cubain qui veut tout posséder — argent, femme, empire de la drogue — sous la devise « The world is yours », il est incapable de se restreindre.",
"type": "Fiction"
},
{
"nom": "Freezer",
"univers": "BD et animation",
"source": "Dragon Ball Z",
"pourquoi": "Tyran galactique qui conquiert des planètes pour les revendre, il ne connaît aucune limite à son appétit de possession.",
"type": "Fiction"
},
{
"nom": "Grand Nagus Zek",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Le chef suprême des Ferengi veut ouvrir le quadrant Gamma au commerce ferengi et ne se refuse aucun plaisir, du latinum aux attentions d'Ishka.",
"type": "Fiction"
},
{
"nom": "Dudley Dursley",
"univers": "Harry Potter",
"source": "Harry Potter à l'école des sorciers",
"pourquoi": "Il compte ses trente-six cadeaux d'anniversaire et pique une colère parce qu'il en avait eu trente-sept l'année précédente : il ne sait jamais se restreindre.",
"type": "Fiction"
},
{
"nom": "Morgoth",
"univers": "Tolkien",
"source": "Le Silmarillion",
"pourquoi": "Dès la création du monde, il veut posséder et dominer Arda à lui seul, et finit par voler les Silmarils qu'il sertit sur sa propre couronne.",
"type": "Fiction"
},
{
"nom": "Euron Greyjoy",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Revenu après des années de pillages, il s'empare du Trône de Grès et projette d'épouser Daenerys pour s'approprier ses dragons.",
"type": "Fiction"
},
{
"nom": "Hela",
"univers": "Marvel et DC",
"source": "Thor : Ragnarok (MCU)",
"pourquoi": "La déesse de la mort ne rêve que de reprendre la conquête des royaumes qu'elle menait autrefois avec Odin pour élargir sans fin l'empire d'Asgard.",
"type": "Fiction"
},
{
"nom": "Ego",
"univers": "Marvel et DC",
"source": "Les Gardiens de la Galaxie Vol. 2 (MCU)",
"pourquoi": "La planète vivante a semé des graines sur des milliers de mondes pour s'étendre à tout l'univers et le recouvrir d'elle-même.",
"type": "Fiction"
}
],
"B.gu": [
{
"nom": "Jules César",
"univers": "Histoire",
"source": "Rome, Ier siècle av. J.-C.",
"pourquoi": "« Je suis venu, j'ai vu, j'ai vaincu » : quand il décide d'une chose, il fait ce qu'il faut pour y parvenir.",
"type": "Historique"
},
{
"nom": "Steve Jobs",
"univers": "Histoire",
"source": "États-Unis, XXe-XXIe siècle",
"pourquoi": "Obsédé par le contrôle de chaque détail, jusqu'à exiger que l'intérieur du Macintosh soit beau, il pousse ses équipes jusqu'à obtenir exactement le produit voulu.",
"type": "Historique"
},
{
"nom": "Hercule Poirot",
"univers": "Littérature et mythologie",
"source": "Romans d'A. Christie",
"pourquoi": "Il excelle dans son art, le sait, et ne laisse jamais une enquête inachevée.",
"type": "Fiction"
},
{
"nom": "Héraclès",
"univers": "Littérature et mythologie",
"source": "Mythologie grecque",
"pourquoi": "Il mène à bien chacun des douze travaux, n'hésitant pas à détourner deux fleuves pour nettoyer en un jour les écuries d'Augias.",
"type": "Fiction"
},
{
"nom": "Danny Ocean",
"univers": "Cinéma, séries et jeux",
"source": "Ocean's Eleven (Steven Soderbergh)",
"pourquoi": "Dès sa sortie de prison, il monte un casse impossible contre trois casinos de Las Vegas et mobilise toutes les ressources nécessaires pour réussir.",
"type": "Fiction"
},
{
"nom": "Edna Mode",
"univers": "BD et animation",
"source": "Les Indestructibles (Pixar)",
"pourquoi": "Styliste de super-héros intransigeante, elle obtient toujours le costume parfait qu'elle a décidé de créer, quoi qu'il en coûte.",
"type": "Fiction"
},
{
"nom": "Docteur Fatalis",
"univers": "Marvel et DC",
"source": "Les Quatre Fantastiques (comics Marvel)",
"pourquoi": "Monarque de Latvérie, maître à la fois de la science et de la sorcellerie, il mobilise toutes ses ressources pour prouver qu'il surpasse tout le monde, Reed Richards en tête.",
"type": "Fiction"
}
],
"B.ur": [
{
"nom": "Jesse Owens",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Quatre médailles d'or en 1936 : le talent et l'avance sur tous ses concurrents.",
"type": "Historique"
},
{
"nom": "Ayrton Senna",
"univers": "Histoire",
"source": "Brésil, XXe siècle",
"pourquoi": "Triple champion du monde de F1, il signe à Monaco en 1988 une pole avec près d'une seconde et demie d'avance sur son coéquipier Prost, obsédé par la performance absolue.",
"type": "Historique"
},
{
"nom": "Suzanne Lenglen",
"univers": "Histoire",
"source": "France, XXe siècle",
"pourquoi": "Six fois victorieuse à Wimbledon et quasi invaincue au début des années 1920, « la Divine » écrase la concurrence avec un jeu d'une modernité inédite.",
"type": "Historique"
},
{
"nom": "Achille",
"univers": "Littérature et mythologie",
"source": "L'Iliade, Homère",
"pourquoi": "Le meilleur des guerriers grecs, qui ne vise rien de moins que la gloire éternelle.",
"type": "Fiction"
},
{
"nom": "Lancelot du Lac",
"univers": "Littérature et mythologie",
"source": "Légendes arthuriennes ; Chrétien de Troyes, Lancelot ou le Chevalier de la charrette",
"pourquoi": "Réputé le meilleur chevalier du monde, il triomphe des tournois et des épreuves et vit pour la prouesse.",
"type": "Fiction"
},
{
"nom": "Maverick",
"univers": "Cinéma, séries et jeux",
"source": "Top Gun",
"pourquoi": "Pilote de chasse surdoué et frimeur, il veut être le meilleur de l'école Top Gun et adore repousser les limites de son avion.",
"type": "Fiction"
},
{
"nom": "Flash McQueen",
"univers": "BD et animation",
"source": "Cars (Pixar)",
"pourquoi": "Bolide vedette obsédé par la Piston Cup, il est convaincu d'être le meilleur et vit pour la performance.",
"type": "Fiction"
},
{
"nom": "Boba Fett",
"univers": "Star Wars",
"source": "Star Wars, épisode V",
"pourquoi": "Chasseur de primes le plus réputé de la galaxie, il est le seul à suivre le Faucon Millenium jusqu'à Bespin et à livrer sa proie.",
"type": "Fiction"
},
{
"nom": "Nick Locarno",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation",
"pourquoi": "Cadet vedette à la tête de l'escadron Nova, il entraîne ses camarades dans une figure acrobatique interdite pour impressionner, avec des conséquences tragiques.",
"type": "Fiction"
},
{
"nom": "Viktor Krum",
"univers": "Harry Potter",
"source": "Harry Potter et la Coupe de feu",
"pourquoi": "Attrapeur de l'équipe nationale de Bulgarie encore élève à Durmstrang, il est le meilleur à son poste et le prouve en attrapant le Vif d'or en finale de la Coupe du monde.",
"type": "Fiction"
},
{
"nom": "Jaime Lannister",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Réputé l'une des meilleures lames du royaume et arrogant de son talent, il voit son identité vaciller lorsqu'il perd sa main d'épée.",
"type": "Fiction"
},
{
"nom": "Kraven le chasseur",
"univers": "Marvel et DC",
"source": "Spider-Man (comics Marvel)",
"pourquoi": "Chasseur d'exception qui a déjà traqué les fauves les plus dangereux, il défie Spider-Man pour trouver enfin une proie à sa mesure.",
"type": "Fiction"
}
],
"B.gw": [
{
"nom": "Sarah Bernhardt",
"univers": "Histoire",
"source": "France, XIXe-XXe siècles",
"pourquoi": "Première vedette internationale, son prestige la précédait partout où elle allait.",
"type": "Historique"
},
{
"nom": "Freddie Mercury",
"univers": "Histoire",
"source": "Royaume-Uni, XXe siècle",
"pourquoi": "Showman absolu, il tient Wembley dans sa main lors du Live Aid de 1985, dans une performance restée comme l'une des plus mémorables de l'histoire du rock.",
"type": "Historique"
},
{
"nom": "Tartarin de Tarascon",
"univers": "Littérature et mythologie",
"source": "Alphonse Daudet, Tartarin de Tarascon",
"pourquoi": "Grand vantard adulé de toute sa ville, il ne vit que pour l'admiration des Tarasconnais et part chasser le lion pour rester à la hauteur de sa légende.",
"type": "Fiction"
},
{
"nom": "Ron Burgundy",
"univers": "Cinéma, séries et jeux",
"source": "Présentateur vedette : la légende de Ron Burgundy",
"pourquoi": "Présentateur vedette de San Diego persuadé d'être une célébrité incontournable, il vit pour être au centre de l'attention.",
"type": "Fiction"
},
{
"nom": "Krusty le clown",
"univers": "BD et animation",
"source": "Les Simpson",
"pourquoi": "Star de la télévision de Springfield, il ne vit que pour sa célébrité et son nom placardé sur une montagne de produits dérivés.",
"type": "Fiction"
},
{
"nom": "Gaston",
"univers": "BD et animation",
"source": "La Belle et la Bête (Disney)",
"pourquoi": "Admiré par tout le village, il chante sa propre gloire à la taverne et exige d'être au centre de l'attention.",
"type": "Fiction"
},
{
"nom": "Lando Calrissian",
"univers": "Star Wars",
"source": "Solo : A Star Wars Story ; épisode V",
"pourquoi": "Joueur charmeur à la garde-robe de capes impressionnante, il dicte ses propres mémoires dans Solo et adore être au centre de l'attention.",
"type": "Fiction"
},
{
"nom": "Gul Dukat",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Ancien préfet de l'occupation, il ne supporte pas que les Bajorans refusent de le reconnaître comme leur bienfaiteur et de l'admirer.",
"type": "Fiction"
},
{
"nom": "Gilderoy Lockhart",
"univers": "Harry Potter",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Célébrité soigneusement entretenue, il adore être au centre de l'attention.",
"type": "Fiction"
},
{
"nom": "Renly Baratheon",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Charmeur adulé de la cour, il revendique la couronne sans droit d'aînesse, porté par sa popularité et un camp fastueux en forme de tournoi.",
"type": "Fiction"
},
{
"nom": "Mysterio (Quentin Beck)",
"univers": "Marvel et DC",
"source": "Spider-Man : Far From Home (MCU)",
"pourquoi": "Ancien employé de Stark qui s'est senti dépossédé de son mérite, il met en scène de fausses catastrophes à grand renfort d'illusions pour être acclamé comme le nouveau héros du monde.",
"type": "Fiction"
}
],
"B.rw": [
{
"nom": "Ramsès II",
"univers": "Histoire",
"source": "Égypte antique",
"pourquoi": "Il couvre le pays de monuments à son nom pour que sa gloire lui survive.",
"type": "Historique"
},
{
"nom": "Estée Lauder",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Partie de crèmes préparées par son oncle, elle bâtit à force de démonstrations en magasin un empire cosmétique qui porte son nom.",
"type": "Historique"
},
{
"nom": "Romulus",
"univers": "Littérature et mythologie",
"source": "Mythologie romaine ; Tite-Live",
"pourquoi": "Il fonde la ville qui portera son nom et, refusant de partager le pouvoir, tue son frère Rémus qui en a franchi l'enceinte.",
"type": "Fiction"
},
{
"nom": "John Hammond",
"univers": "Cinéma, séries et jeux",
"source": "Jurassic Park, M. Crichton",
"pourquoi": "Il bâtit, brique après brique, un parc grandiose qui doit porter son nom.",
"type": "Fiction"
},
{
"nom": "Logan Roy",
"univers": "Cinéma, séries et jeux",
"source": "Succession",
"pourquoi": "Fondateur de l'empire médiatique Waystar Royco, il refuse obstinément d'en céder la direction, même à ses enfants.",
"type": "Fiction"
},
{
"nom": "Nerio Winch",
"univers": "BD et animation",
"source": "Largo Winch (Van Hamme et Francq)",
"pourquoi": "Il a bâti seul le Groupe W, empire financier qui porte l'initiale de son nom, et n'en partageait la direction avec personne.",
"type": "Fiction"
},
{
"nom": "Empereur Palpatine (Dark Sidious)",
"univers": "Star Wars",
"source": "Star Wars, épisodes III et VI",
"pourquoi": "Il bâtit de ses mains le premier Empire galactique et n'en partage le pouvoir avec personne, pas même avec ses apprentis Sith.",
"type": "Fiction"
},
{
"nom": "Khan Noonien Singh",
"univers": "Star Trek",
"source": "Star Trek (série originale) ; Star Trek II : La Colère de Khan",
"pourquoi": "Surhomme qui a régné sur un quart de la Terre durant les guerres eugéniques, il préfère « régner en enfer que servir au paradis ».",
"type": "Fiction"
},
{
"nom": "Sauron",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux ; Le Silmarillion",
"pourquoi": "Il forge l'Anneau Unique « pour les gouverner tous » et bâtit depuis Barad-dûr un empire dont il ne partage la direction avec personne.",
"type": "Fiction"
},
{
"nom": "Daenerys Targaryen",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Mère des dragons, elle conquiert les cités d'Essos et y règne seule, bâtissant à son nom un pouvoir qu'elle ne partage avec personne.",
"type": "Fiction"
},
{
"nom": "Wilson Fisk (le Caïd)",
"univers": "Marvel et DC",
"source": "Daredevil (série Netflix)",
"pourquoi": "Il bâtit pierre après pierre un empire criminel destiné à reconstruire Hell's Kitchen à son image, sans partager le pouvoir avec personne.",
"type": "Fiction"
}
],
"B.wu": [
{
"nom": "Otto von Bismarck",
"univers": "Histoire",
"source": "Allemagne, XIXe siècle",
"pourquoi": "Il organise patiemment son pouvoir et dirige l'État selon des plans de marche rigoureux.",
"type": "Historique"
},
{
"nom": "Dwight D. Eisenhower",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Commandant suprême des Alliés, il planifie et coordonne le débarquement de Normandie avant de devenir président, l'homme de l'organisation par excellence.",
"type": "Historique"
},
{
"nom": "Créon",
"univers": "Littérature et mythologie",
"source": "Jean Anouilh, Antigone",
"pourquoi": "Il assume le métier de roi comme une charge : il faut que quelqu'un dise oui et tienne la barre, quitte à appliquer la loi jusqu'au bout.",
"type": "Fiction"
},
{
"nom": "Gustavo Fring",
"univers": "Cinéma, séries et jeux",
"source": "Breaking Bad",
"pourquoi": "Derrière la façade respectable de Los Pollos Hermanos, il dirige son réseau avec une organisation méticuleuse et des procédures qu'il fait respecter froidement.",
"type": "Fiction"
},
{
"nom": "Grand Moff Tarkin",
"univers": "Star Wars",
"source": "Star Wars, épisode IV",
"pourquoi": "Gouverneur impérial à la tête de l'Étoile de la Mort, il croit que « la peur maintiendra les systèmes locaux dans le rang » et que tout fonctionne quand on suit ses ordres.",
"type": "Fiction"
},
{
"nom": "La Reine Borg",
"univers": "Star Trek",
"source": "Star Trek : Premier Contact",
"pourquoi": "Elle se présente comme celle qui apporte l'ordre au chaos : dans le Collectif, chacun exécute sa volonté et tout fonctionne parfaitement.",
"type": "Fiction"
},
{
"nom": "Bartemius Croupton",
"univers": "Harry Potter",
"source": "Harry Potter et la Coupe de feu",
"pourquoi": "Haut fonctionnaire rigide promis au poste de ministre, il a dirigé la lutte contre les Mangemorts d'une main de fer en exigeant que règles et procédures soient appliquées à la lettre.",
"type": "Fiction"
},
{
"nom": "Tywin Lannister",
"univers": "Le Trône de fer",
"source": "Le Trône de fer, G. R. R. Martin",
"pourquoi": "Dirigeant sérieux et déterminé, il fait passer l'organisation de sa maison avant tout.",
"type": "Fiction"
},
{
"nom": "Thaddeus Ross",
"univers": "Marvel et DC",
"source": "L'Incroyable Hulk ; Captain America : Civil War (MCU)",
"pourquoi": "Général devenu secrétaire d'État, il présente les accords de Sokovie et veut placer les super-héros sous un commandement et des procédures qu'il dirige.",
"type": "Fiction"
}
],
"R.bg": [
{
"nom": "Barbe-Noire",
"univers": "Histoire",
"source": "Pirate, XVIIIe siècle",
"pourquoi": "Quand il convoite un navire ou un butin, il le prend, comme ses rivaux en feraient autant.",
"type": "Historique"
},
{
"nom": "Henri VIII",
"univers": "Histoire",
"source": "Angleterre, XVIe siècle",
"pourquoi": "Pour épouser Anne Boleyn, il rompt avec Rome, puis s'empare des biens des monastères : ce qu'il convoite, il le prend.",
"type": "Historique"
},
{
"nom": "Gargantua",
"univers": "Littérature et mythologie",
"source": "Gargantua, F. Rabelais",
"pourquoi": "Appétit démesuré pour tout ce qui le tente : il dévore la vie à pleines dents.",
"type": "Fiction"
},
{
"nom": "Le Loup",
"univers": "Littérature et mythologie",
"source": "La Fontaine, Le Loup et l'Agneau",
"pourquoi": "Affamé, il cherche querelle à l'agneau et le dévore sans autre procès, illustrant la morale « La raison du plus fort est toujours la meilleure ».",
"type": "Fiction"
},
{
"nom": "Bowser",
"univers": "Cinéma, séries et jeux",
"source": "Super Mario (jeux vidéo)",
"pourquoi": "Roi des Koopa, il enlève la princesse Peach et cherche à s'emparer du Royaume Champignon par la force, simplement parce qu'il le veut.",
"type": "Fiction"
},
{
"nom": "Kriss de Valnor",
"univers": "BD et animation",
"source": "Thorgal (Van Hamme et Rosiński)",
"pourquoi": "Guerrière impétueuse et sans scrupules, elle prend par la force ce qu'elle convoite, richesse comme pouvoir.",
"type": "Fiction"
},
{
"nom": "Jabba le Hutt",
"univers": "Star Wars",
"source": "Star Wars, épisode VI",
"pourquoi": "Il dévore des créatures vivantes, garde Leia enchaînée et fait régner la loi du plus fort dans son palais de Tatooine.",
"type": "Fiction"
},
{
"nom": "Philippa Georgiou (univers miroir)",
"univers": "Star Trek",
"source": "Star Trek : Discovery",
"pourquoi": "Impératrice de l'Empire terrien, elle prend ce qu'elle convoite, pouvoir comme plaisirs, et ne connaît que la loi du plus fort.",
"type": "Fiction"
},
{
"nom": "Fenrir Greyback",
"univers": "Harry Potter",
"source": "Harry Potter et le Prince de Sang-Mêlé ; Harry Potter et les Reliques de la Mort",
"pourquoi": "Loup-garou qui mord délibérément les enfants et rôde là où il peut assouvir sa faim, il ne connaît que la loi du plus fort.",
"type": "Fiction"
},
{
"nom": "Gollum",
"univers": "Tolkien",
"source": "Le Hobbit ; Le Seigneur des Anneaux",
"pourquoi": "Le jour de son anniversaire, Sméagol étrangle son ami Déagol pour lui prendre l'Anneau, puis vit dans l'obsession de reprendre son « précieux ».",
"type": "Fiction"
},
{
"nom": "Arachne",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "L'araignée géante de Cirith Ungol ne sert qu'elle-même et dévore tout ce qui s'aventure dans son antre, Elfes, Hommes ou orques.",
"type": "Fiction"
},
{
"nom": "Ramsay Bolton",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Il traque des femmes avec ses chiens pour le plaisir et prend tout ce qu'il convoite par la terreur, convaincu que seule la force compte.",
"type": "Fiction"
},
{
"nom": "Joffrey Baratheon",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Roi capricieux et sadique, il fait battre Sansa devant la cour et assouvit chacune de ses envies cruelles au nom de son pouvoir.",
"type": "Fiction"
},
{
"nom": "Dents-de-Sabre (Victor Creed)",
"univers": "Marvel et DC",
"source": "X-Men Origins : Wolverine ; X-Men (comics)",
"pourquoi": "Prédateur brutal qui assume la loi du plus fort, il prend ce qu'il veut et savoure la chasse, en parfait tigre à dents de sabre.",
"type": "Fiction"
}
],
"R.gu": [
{
"nom": "Arthur Rimbaud",
"univers": "Histoire",
"source": "France, XIXe siècle",
"pourquoi": "Il fuit le quotidien qui l'ennuie et part chercher l'inconnu jusqu'en Abyssinie.",
"type": "Historique"
},
{
"nom": "Isabelle Eberhardt",
"univers": "Histoire",
"source": "Suisse / Algérie, fin XIXe siècle",
"pourquoi": "Habillée en cavalier arabe, elle parcourt seule le Sahara, fuyant la vie européenne qui l'étouffait, et en tire des récits de voyage.",
"type": "Historique"
},
{
"nom": "Sindbad le marin",
"univers": "Littérature et mythologie",
"source": "Les Mille et Une Nuits",
"pourquoi": "Revenu riche de chaque voyage, il s'ennuie bientôt dans le confort de Bagdad et repart sept fois vers l'inconnu malgré les naufrages.",
"type": "Fiction"
},
{
"nom": "Indiana Jones",
"univers": "Cinéma, séries et jeux",
"source": "Les Aventuriers de l'arche perdue (films)",
"pourquoi": "Il va d'expérience en expérience, porté par le frisson de l'inconnu.",
"type": "Fiction"
},
{
"nom": "Lara Croft",
"univers": "Cinéma, séries et jeux",
"source": "Tomb Raider (jeux vidéo)",
"pourquoi": "Aristocrate qui a tourné le dos à une vie confortable, elle parcourt le monde à la recherche de tombeaux oubliés pour le frisson de l'inconnu.",
"type": "Fiction"
},
{
"nom": "Raiponce",
"univers": "BD et animation",
"source": "Raiponce (Disney)",
"pourquoi": "Enfermée dans sa tour, elle s'ennuie à mourir et s'échappe pour enfin voir de ses yeux les lanternes flottantes.",
"type": "Fiction"
},
{
"nom": "Vash",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation",
"pourquoi": "Archéologue aventurière et chasseuse de trésors, elle préfère partir explorer le quadrant Gamma avec Q plutôt que de se fixer auprès de Picard.",
"type": "Fiction"
},
{
"nom": "Oberyn Martell",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "La Vipère Rouge a voyagé, étudié les poisons, combattu comme mercenaire et aimé librement, et vit chaque duel comme une fête.",
"type": "Fiction"
}
],
"R.ub": [
{
"nom": "Amelia Earhart",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Aviatrice qui repousse ses limites et prend des risques que personne n'osait prendre.",
"type": "Historique"
},
{
"nom": "Chuck Yeager",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Il franchit le premier le mur du son en 1947 sur le Bell X-1, en cachant qu'il avait des côtes cassées après une chute de cheval.",
"type": "Historique"
},
{
"nom": "Marie Marvingt",
"univers": "Histoire",
"source": "France, XXe siècle",
"pourquoi": "Surnommée « la fiancée du danger », aviatrice, alpiniste et sportive multiple, elle n'a cessé de repousser ses limites dans des domaines réservés aux hommes.",
"type": "Historique"
},
{
"nom": "Michel Ardan",
"univers": "Littérature et mythologie",
"source": "Jules Verne, De la Terre à la Lune",
"pourquoi": "Il télégraphie au Gun-Club de remplacer l'obus par un projectile creux en annonçant « Partirai dedans », transformant un tir d'artillerie en premier voyage vers la Lune.",
"type": "Fiction"
},
{
"nom": "James Bond",
"univers": "Cinéma, séries et jeux",
"source": "Série de films James Bond",
"pourquoi": "Agent 007 qui enchaîne cascades, poursuites et parties de cartes à gros enjeux, il ne vit vraiment que lorsqu'il prend des risques.",
"type": "Fiction"
},
{
"nom": "Son Goku",
"univers": "BD et animation",
"source": "Dragon Ball",
"pourquoi": "Il ne vit que pour affronter des adversaires toujours plus forts et repousser sans cesse ses propres limites.",
"type": "Fiction"
},
{
"nom": "Han Solo",
"univers": "Star Wars",
"source": "Star Wars",
"pourquoi": "Il aime le danger, improvise et réussit là où les autres ne s'aventurent pas.",
"type": "Fiction"
},
{
"nom": "Tom Paris",
"univers": "Star Trek",
"source": "Star Trek : Voyager",
"pourquoi": "Pilote casse-cou et rebelle, il se porte volontaire pour devenir le premier à franchir la vitesse de distorsion 10.",
"type": "Fiction"
},
{
"nom": "Beren",
"univers": "Tolkien",
"source": "Le Silmarillion",
"pourquoi": "Il traverse seul les montagnes de la Terreur puis s'introduit jusqu'au trône de Morgoth pour tailler un Silmaril de sa couronne, une entreprise jugée impossible par tous.",
"type": "Fiction"
},
{
"nom": "Captain Marvel (Carol Danvers)",
"univers": "Marvel et DC",
"source": "Captain Marvel (MCU, 2019)",
"pourquoi": "Pilote d'essai de l'US Air Force, elle va toujours plus haut et plus vite et se relève chaque fois qu'on lui dit qu'elle n'y arrivera pas.",
"type": "Fiction"
},
{
"nom": "Green Lantern (Hal Jordan)",
"univers": "Marvel et DC",
"source": "Green Lantern (comics DC ; film 2011)",
"pourquoi": "Pilote d'essai casse-cou choisi par l'anneau parce qu'il est capable de surmonter sa peur, il pousse sans cesse ses limites et celles de son pouvoir.",
"type": "Fiction"
}
],
"R.gw": [
{
"nom": "Louis Armstrong",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Avec son sourire et sa trompette, « Satchmo » met toute son énergie à rendre son public joyeux, de « What a Wonderful World » à ses tournées d'ambassadeur du jazz.",
"type": "Historique"
},
{
"nom": "Monsieur Fezziwig",
"univers": "Littérature et mythologie",
"source": "Charles Dickens, Un chant de Noël",
"pourquoi": "L'ancien patron de Scrooge offre chaque soir de Noël un bal joyeux à ses apprentis et à tout son entourage, pour le seul plaisir de rendre chacun heureux.",
"type": "Fiction"
},
{
"nom": "Tigrou",
"univers": "BD et animation",
"source": "Winnie l'ourson, A. A. Milne",
"pourquoi": "Il bondit dans chaque instant et partage son enthousiasme avec toute la bande.",
"type": "Fiction"
},
{
"nom": "Olaf",
"univers": "BD et animation",
"source": "La Reine des neiges (Disney)",
"pourquoi": "Le bonhomme de neige déborde d'une joie communicative et ne pense qu'à rendre heureux ceux qu'il aime.",
"type": "Fiction"
},
{
"nom": "Jar Jar Binks",
"univers": "Star Wars",
"source": "Star Wars, épisode I",
"pourquoi": "Gungan maladroit mais débordant d'enthousiasme, il se dévoue avec entrain à ses nouveaux amis Qui-Gon, Obi-Wan et Padmé.",
"type": "Fiction"
},
{
"nom": "Neelix",
"univers": "Star Trek",
"source": "Star Trek : Voyager",
"pourquoi": "Cuisinier improvisé et officier du moral autoproclamé, il dépense une énergie débordante pour que l'équipage de Voyager garde le sourire.",
"type": "Fiction"
},
{
"nom": "Nymphadora Tonks",
"univers": "Harry Potter",
"source": "Harry Potter et l'Ordre du Phénix",
"pourquoi": "Métamorphomage maladroite aux cheveux rose chewing-gum, elle amuse toute la tablée du square Grimmaurd en transformant son nez et met une énergie joyeuse au service de l'Ordre.",
"type": "Fiction"
},
{
"nom": "Peregrin Touque (Pippin)",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux, J. R. R. Tolkien",
"pourquoi": "Il se jette dans l'aventure par amour de ses amis, avec une énergie qui déborde.",
"type": "Fiction"
},
{
"nom": "Tormund Fléau-d'Ogres",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Sauvageon tonitruant, il raconte ses exploits avec une joie communicative et met toute son énergie au service du peuple libre.",
"type": "Fiction"
},
{
"nom": "Ms. Marvel (Kamala Khan)",
"univers": "Marvel et DC",
"source": "Miss Marvel (série MCU, 2022)",
"pourquoi": "Fan inconditionnelle des Avengers qui écrit des fan fictions sur Captain Marvel, elle déborde d'énergie et met ses pouvoirs au service de sa famille et de sa communauté.",
"type": "Fiction"
}
],
"R.wb": [
{
"nom": "Joachim Murat",
"univers": "Histoire",
"source": "France, Premier Empire",
"pourquoi": "Il mène les charges de cavalerie à un rythme soutenu : les autres n'ont qu'à suivre.",
"type": "Historique"
},
{
"nom": "George S. Patton",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "À la tête de la IIIe armée, il traverse la France à une vitesse fulgurante en 1944, galvanisant ses hommes par des discours enflammés.",
"type": "Historique"
},
{
"nom": "Capitaine Achab",
"univers": "Littérature et mythologie",
"source": "Moby Dick, H. Melville",
"pourquoi": "Il entraîne tout son équipage dans sa propre direction, à toute vitesse.",
"type": "Fiction"
},
{
"nom": "Henri V",
"univers": "Littérature et mythologie",
"source": "Shakespeare, Henri V",
"pourquoi": "À Azincourt, il entraîne une armée épuisée par sa harangue de la Saint-Crépin, faisant de chaque soldat un membre de « notre heureuse bande de frères ».",
"type": "Fiction"
},
{
"nom": "Leslie Knope",
"univers": "Cinéma, séries et jeux",
"source": "Parks and Recreation",
"pourquoi": "Fonctionnaire hyperactive dévouée à sa ville de Pawnee, elle entraîne son équipe à un rythme effréné tout en l'encourageant sans relâche.",
"type": "Fiction"
},
{
"nom": "Gaï Maito",
"univers": "BD et animation",
"source": "Naruto",
"pourquoi": "Professeur survolté qui harangue son équipe au nom de la « fougue de la jeunesse » tout en défiant sans relâche son rival Kakashi.",
"type": "Fiction"
},
{
"nom": "Poe Dameron",
"univers": "Star Wars",
"source": "Star Wars, épisodes VII et VIII",
"pourquoi": "Meilleur pilote de la Résistance, il mène ses escadrilles à toute allure à l'assaut du cuirassé du Premier Ordre et entraîne les autres dans son élan.",
"type": "Fiction"
},
{
"nom": "Olivier Dubois",
"univers": "Harry Potter",
"source": "Harry Potter (tomes 1 à 3)",
"pourquoi": "Capitaine de l'équipe de Quidditch de Gryffondor, il réveille ses joueurs à l'aube pour des entraînements interminables et les galvanise avec ses tactiques jusqu'à la Coupe.",
"type": "Fiction"
},
{
"nom": "Éomer",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Maréchal impétueux du Rohan, il entraîne ses cavaliers dans des charges furieuses, notamment aux champs du Pelennor lorsqu'il croit sa sœur tombée.",
"type": "Fiction"
},
{
"nom": "Khal Drogo",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Jamais vaincu, il mène son khalasar à un rythme effréné et, après l'attentat contre Daenerys, promet de le lancer à travers la mer.",
"type": "Fiction"
},
{
"nom": "Thor (Marvel)",
"univers": "Marvel et DC",
"source": "Thor ; Avengers (MCU)",
"pourquoi": "Fougueux et assoiffé de bataille, il se jette le premier dans la mêlée et entraîne ses compagnons d'armes dans son élan.",
"type": "Fiction"
}
],
"R.wu": [
{
"nom": "Roald Amundsen",
"univers": "Histoire",
"source": "Norvège, XXe siècle",
"pourquoi": "Premier au pôle Sud, il a tracé la voie et fait profiter les autres de ses expériences.",
"type": "Historique"
},
{
"nom": "Youri Gagarine",
"univers": "Histoire",
"source": "URSS, XXe siècle",
"pourquoi": "Premier homme dans l'espace le 12 avril 1961 (« Poyekhali ! », « C'est parti ! »), il fait ensuite le tour du monde pour partager son expérience.",
"type": "Historique"
},
{
"nom": "Le Docteur",
"univers": "Cinéma, séries et jeux",
"source": "Doctor Who",
"pourquoi": "Seigneur du Temps qui embarque ses compagnons dans le TARDIS, il les précède sur des chemins inconnus et leur fait partager ses découvertes.",
"type": "Fiction"
},
{
"nom": "Vaiana",
"univers": "BD et animation",
"source": "Vaiana, la légende du bout du monde (Disney)",
"pourquoi": "Elle franchit la première le récif interdit et rouvre à son peuple la voie des grands voyages en mer.",
"type": "Fiction"
},
{
"nom": "Capitaine James T. Kirk",
"univers": "Star Trek",
"source": "Star Trek",
"pourquoi": "Il emmène son équipage là où personne n'est allé, toujours en tête.",
"type": "Fiction"
},
{
"nom": "Capitaine Jonathan Archer",
"univers": "Star Trek",
"source": "Star Trek : Enterprise",
"pourquoi": "Commandant du premier vaisseau terrien de distorsion 5, il ouvre la voie de l'exploration spatiale humaine en tête de son équipage.",
"type": "Fiction"
},
{
"nom": "Eärendil",
"univers": "Tolkien",
"source": "Le Silmarillion",
"pourquoi": "Premier marin à franchir les mers enchantées jusqu'à Valinor, il y plaide la cause des Elfes et des Hommes, puis navigue dans le ciel avec le Silmaril, étoile d'espoir pour la Terre du Milieu.",
"type": "Fiction"
},
{
"nom": "Benjen Stark",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Premier Patrouilleur de la Garde de Nuit, il ouvre la voie au-delà du Mur pour rapporter à ses frères ce qui s'y prépare.",
"type": "Fiction"
}
],
"G.br": [
{
"nom": "Coco Chanel",
"univers": "Histoire",
"source": "France, XXe siècle",
"pourquoi": "Elle a construit sa vie selon ses propres décisions et obtenu ce qu'elle voulait, sans laisser personne interférer.",
"type": "Historique"
},
{
"nom": "Aliénor d'Aquitaine",
"univers": "Histoire",
"source": "France / Angleterre, XIIe siècle",
"pourquoi": "Elle fait annuler son mariage avec Louis VII pour épouser Henri Plantagenêt, et à près de 80 ans traverse encore les Pyrénées pour conduire ses affaires dynastiques.",
"type": "Historique"
},
{
"nom": "Scarlett O'Hara",
"univers": "Littérature et mythologie",
"source": "Autant en emporte le vent, M. Mitchell",
"pourquoi": "Elle n'a besoin de personne pour décider de sa vie et se débrouille toujours pour obtenir ce qu'elle veut.",
"type": "Fiction"
},
{
"nom": "Atalante",
"univers": "Littérature et mythologie",
"source": "Mythologie grecque ; Ovide, Les Métamorphoses",
"pourquoi": "Chasseresse farouchement indépendante, elle refuse le mariage et n'accepte d'épouser que celui qui la battra à la course.",
"type": "Fiction"
},
{
"nom": "Beatrix Kiddo (la Mariée)",
"univers": "Cinéma, séries et jeux",
"source": "Kill Bill (Quentin Tarantino)",
"pourquoi": "Elle dresse sa liste de vengeance et l'exécute nom après nom, sans laisser personne s'interposer ni se reposer en chemin.",
"type": "Fiction"
},
{
"nom": "Yennefer de Vengerberg",
"univers": "Cinéma, séries et jeux",
"source": "The Witcher (jeux vidéo et série)",
"pourquoi": "Magicienne puissante et indépendante, elle mène sa vie selon ses propres décisions et obtient ce qu'elle veut par ses propres moyens.",
"type": "Fiction"
},
{
"nom": "Vegeta",
"univers": "BD et animation",
"source": "Dragon Ball Z",
"pourquoi": "Prince saiyan à l'orgueil inflexible, il s'entraîne sans répit et refuse que quiconque se mêle de son chemin.",
"type": "Fiction"
},
{
"nom": "Ishka",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "La mère de Quark et Rom gagne du profit en secret et porte des vêtements, défiant ouvertement la loi ferengie qui l'interdit aux femmes.",
"type": "Fiction"
},
{
"nom": "Éowyn",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Refusant la « cage » à laquelle on la destine, elle part à la guerre déguisée en Dernhelm, avide de renom, et affronte le Roi-Sorcier d'Angmar.",
"type": "Fiction"
},
{
"nom": "Lúthien",
"univers": "Tolkien",
"source": "Le Silmarillion",
"pourquoi": "Contre la volonté de son père Thingol, elle s'échappe de sa prison et part elle-même arracher Beren aux geôles de Sauron puis affronter Morgoth.",
"type": "Fiction"
},
{
"nom": "Olenna Tyrell",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "La Reine des Épines dit ce qu'elle pense à qui elle veut et, quand elle décide d'écarter Joffrey, elle s'en charge elle-même.",
"type": "Fiction"
},
{
"nom": "Catwoman (Selina Kyle)",
"univers": "Marvel et DC",
"source": "Batman (comics DC ; Batman : Le Défi)",
"pourquoi": "Cambrioleuse indépendante, elle vit selon ses propres règles et se sert dans les coffres de Gotham sans demander la permission à personne.",
"type": "Fiction"
}
],
"G.ur": [
{
"nom": "Salvador Dalí",
"univers": "Histoire",
"source": "Espagne, XXe siècle",
"pourquoi": "Il cultive sa différence avec éclat et suit son inspiration du moment, sans se laisser influencer.",
"type": "Historique"
},
{
"nom": "Frida Kahlo",
"univers": "Histoire",
"source": "Mexique, XXe siècle",
"pourquoi": "Par ses autoportraits, ses robes tehuanas et ses sourcils assumés, elle fait de sa singularité et de ses douleurs la matière même de son art.",
"type": "Historique"
},
{
"nom": "Erik Satie",
"univers": "Histoire",
"source": "France, XIXe-XXe siècle",
"pourquoi": "Il possédait une série de costumes de velours identiques et annotait ses partitions d'indications farfelues, suivant sa seule inspiration loin des écoles.",
"type": "Historique"
},
{
"nom": "Fifi Brindacier",
"univers": "Littérature et mythologie",
"source": "Fifi Brindacier, A. Lindgren",
"pourquoi": "Elle vit à sa façon, au gré de son imagination, et se moque des conventions.",
"type": "Fiction"
},
{
"nom": "Don Quichotte",
"univers": "Littérature et mythologie",
"source": "Cervantès, Don Quichotte",
"pourquoi": "Nourri de romans de chevalerie, il décide de devenir chevalier errant et poursuit sa vision contre l'avis de tous, attaquant des moulins qu'il prend pour des géants.",
"type": "Fiction"
},
{
"nom": "Phoebe Buffay",
"univers": "Cinéma, séries et jeux",
"source": "Friends",
"pourquoi": "Masseuse excentrique qui chante « Smelly Cat » et croit aux esprits, elle cultive sa différence sans jamais se laisser influencer par le regard des autres.",
"type": "Fiction"
},
{
"nom": "Looping",
"univers": "Cinéma, séries et jeux",
"source": "L'Agence tous risques",
"pourquoi": "Pilote génial interné en hôpital psychiatrique, il suit ses lubies du moment et vit dans son monde à lui, au grand dam de Barracuda.",
"type": "Fiction"
},
{
"nom": "Gaston Lagaffe",
"univers": "BD et animation",
"source": "Gaston (Franquin)",
"pourquoi": "Il invente le gaffophone ou cuisine au bureau selon son inspiration du jour, sans que Prunelle parvienne à le faire changer.",
"type": "Fiction"
},
{
"nom": "Rémy",
"univers": "BD et animation",
"source": "Ratatouille (Pixar)",
"pourquoi": "Rat qui refuse de manger des ordures comme sa colonie, il cultive sa passion de la cuisine en dépit de tout.",
"type": "Fiction"
},
{
"nom": "Sabine Wren",
"univers": "Star Wars",
"source": "Star Wars Rebels",
"pourquoi": "Artiste mandalorienne qui repeint son armure et signe ses sabotages de graffitis colorés, elle suit son inspiration plus que les codes de son clan.",
"type": "Fiction"
},
{
"nom": "Luna Lovegood",
"univers": "Harry Potter",
"source": "Harry Potter (tomes 5 à 7)",
"pourquoi": "Avec ses boucles d'oreilles en radis et sa foi tranquille dans les Ronflaks Cornus, elle suit son inspiration sans se soucier des moqueries.",
"type": "Fiction"
},
{
"nom": "Tom Bombadil",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Maître de son petit domaine, il chante à sa guise, ignore les affaires du monde et passe l'Anneau à son doigt sans disparaître, totalement insensible à son pouvoir.",
"type": "Fiction"
},
{
"nom": "Arya Stark",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Elle refuse la couture et les manières de dame pour manier son épée Aiguille, et suit sa propre voie sans se laisser détourner.",
"type": "Fiction"
},
{
"nom": "Le Joker",
"univers": "Marvel et DC",
"source": "The Dark Knight (2008)",
"pourquoi": "Il se définit lui-même comme un agent du chaos, sans plan ni modèle, n'obéissant qu'à son inspiration du moment.",
"type": "Fiction"
},
{
"nom": "Harley Quinn",
"univers": "Marvel et DC",
"source": "Birds of Prey (2020) ; Suicide Squad",
"pourquoi": "Ancienne psychiatre devenue excentrique assumée, elle célèbre son émancipation du Joker en vivant à sa façon, avec une fantaisie que rien n'arrête.",
"type": "Fiction"
}
],
"G.ub": [
{
"nom": "Henry David Thoreau",
"univers": "Histoire",
"source": "États-Unis, XIXe siècle",
"pourquoi": "Retiré à Walden, il montre qu'on peut se suffire à soi-même avec très peu.",
"type": "Historique"
},
{
"nom": "Alexander Selkirk",
"univers": "Histoire",
"source": "Écosse, XVIIIe siècle",
"pourquoi": "Jugeant son navire en mauvais état, il demande à être débarqué sur une île de l'archipel Juan Fernández, y survit seul plus de quatre ans, puis reprend la course avec ses sauveteurs.",
"type": "Historique"
},
{
"nom": "Robinson Crusoé",
"univers": "Littérature et mythologie",
"source": "Robinson Crusoé, D. Defoe",
"pourquoi": "Seul sur son île, il trouve en lui toutes les ressources pour s'en sortir.",
"type": "Fiction"
},
{
"nom": "Figaro",
"univers": "Littérature et mythologie",
"source": "Beaumarchais, Le Barbier de Séville ; Le Mariage de Figaro",
"pourquoi": "Barbier aux mille métiers qui s'est toujours tiré d'affaire seul, il prête son génie de l'intrigue au comte Almaviva parce que l'or y est au rendez-vous.",
"type": "Fiction"
},
{
"nom": "Geralt de Riv",
"univers": "Cinéma, séries et jeux",
"source": "The Witcher (jeux vidéo)",
"pourquoi": "Sorceleur solitaire et débrouillard, il accepte les contrats des autres surtout s'ils lui rapportent une prime suffisante, tout en refusant de prendre parti.",
"type": "Fiction"
},
{
"nom": "Porco Rosso",
"univers": "BD et animation",
"source": "Porco Rosso (Studio Ghibli)",
"pourquoi": "Aviateur solitaire et chasseur de primes, il se débrouille seul et ne vole pour les autres que contre bonne rémunération.",
"type": "Fiction"
},
{
"nom": "Cristóbal Rios",
"univers": "Star Trek",
"source": "Star Trek : Picard",
"pourquoi": "Ancien officier de Starfleet devenu capitaine indépendant d'un cargo, il accepte de piloter Picard contre rémunération, à ses conditions.",
"type": "Fiction"
},
{
"nom": "Gripsec",
"univers": "Harry Potter",
"source": "Harry Potter et les Reliques de la Mort",
"pourquoi": "Gobelin fier et méfiant, il n'accepte d'aider Harry à cambrioler Gringotts qu'en échange de l'épée de Gryffondor, un bénéfice qu'il juge à la hauteur.",
"type": "Fiction"
},
{
"nom": "Beorn",
"univers": "Tolkien",
"source": "Le Hobbit",
"pourquoi": "Changeur de peau vivant seul avec ses bêtes, méfiant envers les visiteurs, il n'aide les nains qu'après avoir vérifié leur récit, puis intervient de manière décisive à la bataille des Cinq Armées.",
"type": "Fiction"
},
{
"nom": "Osha",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Sauvageonne capturée, elle se rend utile aux Stark pour gagner sa liberté et survit par sa débrouillardise en fuyant avec Rickon.",
"type": "Fiction"
},
{
"nom": "Jessica Jones",
"univers": "Marvel et DC",
"source": "Jessica Jones (série Netflix)",
"pourquoi": "Détective privée solitaire, elle se débrouille seule à la tête d'Alias Investigations et n'accepte d'aider les autres que si l'affaire la paie ou la concerne.",
"type": "Fiction"
}
],
"G.rw": [
{
"nom": "Alexandre Dumas",
"univers": "Histoire",
"source": "France, XIXe siècle",
"pourquoi": "Bon vivant entouré d'amis, il séduisait par son naturel et sa générosité.",
"type": "Historique"
},
{
"nom": "Coluche",
"univers": "Histoire",
"source": "France, XXe siècle",
"pourquoi": "Gouailleur et toujours entouré de sa bande, il entraîne ses amis artistes dans l'aventure collective des Restos du Cœur en 1985.",
"type": "Historique"
},
{
"nom": "Monsieur Pickwick",
"univers": "Littérature et mythologie",
"source": "Charles Dickens, Les Aventures de Monsieur Pickwick",
"pourquoi": "Bon vivant naïf et entier, il ne voyage qu'entouré des membres de son club et de son fidèle Sam Weller, et répond toujours présent pour ses amis.",
"type": "Fiction"
},
{
"nom": "Ferris Bueller",
"univers": "Cinéma, séries et jeux",
"source": "La Folle Journée de Ferris Bueller (film)",
"pourquoi": "Tout le monde l'aime : il entraîne ses amis avec un naturel désarmant.",
"type": "Fiction"
},
{
"nom": "Joey Tribbiani",
"univers": "Cinéma, séries et jeux",
"source": "Friends",
"pourquoi": "Acteur naïf au charme naturel (« How you doin'? »), il n'est vraiment heureux qu'entouré de sa bande et répond toujours présent pour ses amis.",
"type": "Fiction"
},
{
"nom": "Baloo",
"univers": "BD et animation",
"source": "Le Livre de la jungle (Disney)",
"pourquoi": "Ours insouciant qui chante « Il en faut peu pour être heureux », il ne se sent bien qu'entouré de ses amis comme Mowgli.",
"type": "Fiction"
},
{
"nom": "Commandant William Riker",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation",
"pourquoi": "Joueur de poker, tromboniste et bon vivant, il refuse plusieurs commandements pour rester parmi l'équipage de l'Enterprise.",
"type": "Fiction"
},
{
"nom": "Vic Fontaine",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Hologramme de crooner conscient de sa nature, il accueille, conseille et réconforte les habitués de son lounge, comme Nog après sa blessure.",
"type": "Fiction"
},
{
"nom": "Luis",
"univers": "Marvel et DC",
"source": "Ant-Man (MCU)",
"pourquoi": "Bavard intarissable et ami fidèle de Scott Lang, il répond présent avec sa camionnette et son équipe dès qu'on a besoin de lui, en séduisant tout le monde par son naturel.",
"type": "Fiction"
},
{
"nom": "Korg",
"univers": "Marvel et DC",
"source": "Thor : Ragnarok (MCU)",
"pourquoi": "Gladiateur de pierre affable, il se lie avec tout le monde sur Sakaar et tente d'organiser une révolution, même s'il n'avait imprimé que très peu de tracts.",
"type": "Fiction"
}
],
"G.wb": [
{
"nom": "Abigail Adams",
"univers": "Histoire",
"source": "États-Unis, XVIIIe siècle",
"pourquoi": "Pilier de sa famille, elle gère seule la ferme pendant les absences de John Adams tout en lui écrivant de « ne pas oublier les dames » (« Remember the ladies »).",
"type": "Historique"
},
{
"nom": "Jo March",
"univers": "Littérature et mythologie",
"source": "Louisa May Alcott, Les Quatre Filles du docteur March",
"pourquoi": "Indépendante et décidée à devenir écrivain, elle vend ses cheveux pour financer le voyage de sa mère auprès de leur père blessé.",
"type": "Fiction"
},
{
"nom": "Dominic Toretto",
"univers": "Cinéma, séries et jeux",
"source": "Fast and Furious",
"pourquoi": "Il ne cesse de répéter que rien ne compte plus que la « famille » et se montre solidaire de chacun des siens, qu'il mobilise à son tour quand il en a besoin.",
"type": "Fiction"
},
{
"nom": "Marge Simpson",
"univers": "BD et animation",
"source": "Les Simpson",
"pourquoi": "Le pilier de sa famille, toujours là pour chacun, tout en restant elle-même.",
"type": "Fiction"
},
{
"nom": "Hélène Parr (Elastigirl)",
"univers": "BD et animation",
"source": "Les Indestructibles (Pixar)",
"pourquoi": "Elle s'affirme comme héroïne à part entière tout en restant le pilier solidaire sur lequel toute la famille Parr s'appuie.",
"type": "Fiction"
},
{
"nom": "Molly Weasley",
"univers": "Harry Potter",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Irremplaçable pour les siens, elle est solidaire dès que l'un d'eux a besoin de soutien.",
"type": "Fiction"
},
{
"nom": "Narcissa Malefoy",
"univers": "Harry Potter",
"source": "Harry Potter et le Prince de Sang-Mêlé ; Harry Potter et les Reliques de la Mort",
"pourquoi": "Pour protéger son fils, elle arrache un Serment inviolable à Rogue puis ose mentir à Voldemort lui-même.",
"type": "Fiction"
},
{
"nom": "Fermier Maggotte",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Hobbit robuste et indépendant, il tient tête au Cavalier Noir venu sur ses terres puis conduit Frodon et ses amis jusqu'au bac dans sa charrette, avec un panier de champignons.",
"type": "Fiction"
},
{
"nom": "Catelyn Stark",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Pour protéger les siens, elle agit de sa propre initiative, arrêtant Tyrion à l'auberge du carrefour puis libérant Jaime en échange de ses filles.",
"type": "Fiction"
}
],
"G.wu": [
{
"nom": "Theo van Gogh",
"univers": "Histoire",
"source": "Pays-Bas, XIXe siècle",
"pourquoi": "Il soutient financièrement et moralement son frère Vincent toute sa vie, comme en témoigne leur immense correspondance, et meurt quelques mois après lui.",
"type": "Historique"
},
{
"nom": "Horatio",
"univers": "Littérature et mythologie",
"source": "Hamlet, W. Shakespeare",
"pourquoi": "Ami loyal et mesuré, il reste fidèle aux quelques personnes qui comptent vraiment pour lui.",
"type": "Fiction"
},
{
"nom": "Mélanie Hamilton",
"univers": "Littérature et mythologie",
"source": "Autant en emporte le vent, M. Mitchell",
"pourquoi": "Douce et fidèle, elle recherche l'harmonie et ne lâche jamais ceux qu'elle aime.",
"type": "Fiction"
},
{
"nom": "Pénélope",
"univers": "Littérature et mythologie",
"source": "Homère, Odyssée",
"pourquoi": "Fidèle à Ulysse pendant vingt ans, elle tient les prétendants à distance en défaisant chaque nuit le linceul de Laërte tissé le jour.",
"type": "Fiction"
},
{
"nom": "John Bates",
"univers": "Cinéma, séries et jeux",
"source": "Downton Abbey",
"pourquoi": "Valet de Lord Grantham, qui fut son ordonnance pendant la guerre des Boers, il voue une loyauté indéfectible à son maître et à Anna.",
"type": "Fiction"
},
{
"nom": "Garrus Vakarian",
"univers": "Cinéma, séries et jeux",
"source": "Mass Effect (jeux vidéo)",
"pourquoi": "Ancien agent de la Sécurité de la Citadelle lassé des règlements, il reste d'une loyauté sans faille envers Shepard à travers toute la trilogie.",
"type": "Fiction"
},
{
"nom": "Thorgal",
"univers": "BD et animation",
"source": "Thorgal (Van Hamme et Rosiński)",
"pourquoi": "Il ne demande qu'à vivre libre et en paix, et sa loyauté envers Aaricia et ses enfants ne faiblit jamais.",
"type": "Fiction"
},
{
"nom": "Le Mandalorien (Din Djarin)",
"univers": "Star Wars",
"source": "The Mandalorian",
"pourquoi": "Chasseur de primes solitaire, il voue une loyauté sans faille à Grogu, l'enfant qu'il a pris sous sa protection, et à la Voie de son clan.",
"type": "Fiction"
},
{
"nom": "Docteur Leonard McCoy",
"univers": "Star Trek",
"source": "Star Trek (série originale)",
"pourquoi": "Médecin bougon qui dit toujours ce qu'il pense, il voue une loyauté indéfectible à Kirk et Spock.",
"type": "Fiction"
},
{
"nom": "Dobby",
"univers": "Harry Potter",
"source": "Harry Potter (tomes 2, 4 à 7)",
"pourquoi": "Elfe libre qui revendique un salaire et des chaussettes dépareillées, il voue à Harry Potter une loyauté sans faille qui le pousse à risquer sa vie pour lui.",
"type": "Fiction"
},
{
"nom": "Gimli",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Nain fier de son peuple, il voue une loyauté indéfectible à quelques êtres choisis : Legolas, dont il devient l'ami inséparable, et Galadriel, dont il chérit les trois cheveux.",
"type": "Fiction"
},
{
"nom": "Brienne de Torth",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Chevalier dans l'âme malgré les moqueries, elle voue une loyauté indéfectible à Renly, puis à Catelyn et au serment fait pour ses filles.",
"type": "Fiction"
},
{
"nom": "Jorah Mormont",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Exilé, il s'attache à Daenerys et lui reste dévoué même banni, revenant toujours à ses côtés.",
"type": "Fiction"
},
{
"nom": "Alfred Pennyworth",
"univers": "Marvel et DC",
"source": "Batman (comics DC ; trilogie The Dark Knight)",
"pourquoi": "Majordome de la famille Wayne, sa loyauté envers Bruce est absolue : il veille sur lui depuis l'enfance et n'hésite pas à lui parler franchement.",
"type": "Fiction"
},
{
"nom": "Bucky Barnes",
"univers": "Marvel et DC",
"source": "Captain America : Le Soldat de l'hiver (MCU)",
"pourquoi": "Ami d'enfance de Steve Rogers, il lui a promis d'être à ses côtés « jusqu'au bout », et ce lien survit même au lavage de cerveau d'Hydra.",
"type": "Fiction"
}
],
"WU/b": [
{
"nom": "Émile Littré",
"univers": "Histoire",
"source": "France, XIXe siècle",
"pourquoi": "Il met une immense somme de connaissances à la disposition de tous avec son dictionnaire.",
"type": "Historique"
},
{
"nom": "Jonas Salk",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Interrogé sur le brevet de son vaccin contre la polio, il répond : « Peut-on breveter le soleil ? », faisant don de sa découverte à tous.",
"type": "Historique"
},
{
"nom": "Jacques Paganel",
"univers": "Littérature et mythologie",
"source": "Les Enfants du capitaine Grant, J. Verne",
"pourquoi": "Géographe au savoir inépuisable, qu'il partage avec tout l'équipage.",
"type": "Fiction"
},
{
"nom": "Chiron",
"univers": "Littérature et mythologie",
"source": "Mythologie grecque",
"pourquoi": "Centaure sage et savant, il transmet sans calcul la médecine, la musique et la chasse à des générations de héros, d'Achille à Asclépios et Jason.",
"type": "Fiction"
},
{
"nom": "Spencer Reid",
"univers": "Cinéma, séries et jeux",
"source": "Esprits criminels",
"pourquoi": "Génie à la mémoire eidétique, il met volontiers son savoir encyclopédique au service de l'équipe, sans aucune ambition de pouvoir.",
"type": "Fiction"
},
{
"nom": "Panoramix",
"univers": "BD et animation",
"source": "Astérix (Goscinny et Uderzo)",
"pourquoi": "Le druide partage sa potion magique et ses connaissances avec tout le village, sans jamais en tirer pouvoir ni richesse.",
"type": "Fiction"
},
{
"nom": "Obi-Wan Kenobi",
"univers": "Star Wars",
"source": "Star Wars, épisodes I à VI",
"pourquoi": "Jedi diplomate surnommé « le Négociateur », il transmet patiemment son savoir à Anakin puis à Luke, toujours au service de l'Ordre et non de sa propre gloire.",
"type": "Fiction"
},
{
"nom": "Data",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation",
"pourquoi": "Puits de connaissances qu'il partage sans qu'on le lui demande, il ne cherche ni pouvoir ni gloire, seulement à servir l'équipage et à comprendre l'humanité.",
"type": "Fiction"
},
{
"nom": "Remus Lupin",
"univers": "Harry Potter",
"source": "Harry Potter (tomes 3 à 7)",
"pourquoi": "Le meilleur professeur de défense contre les forces du Mal qu'ait eu Harry partage généreusement son savoir, jusqu'à lui apprendre le sortilège du Patronus, tout en vivant pauvrement et sans aucune ambition.",
"type": "Fiction"
},
{
"nom": "Faramir",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Élève de Mithrandir et amateur de savoir, il n'aime pas l'épée « pour son tranchant » et, contrairement à son frère, ne cherche ni gloire ni l'Anneau.",
"type": "Fiction"
},
{
"nom": "Mestre Aemon",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Ce Targaryen a refusé la couronne pour servir la Garde de Nuit, où il partage sa sagesse avec tous ses frères.",
"type": "Fiction"
}
],
"WU/r": [
{
"nom": "Frances Oldham Kelsey",
"univers": "Histoire",
"source": "Canada / États-Unis, XXe siècle",
"pourquoi": "À la FDA, elle refuse d'autoriser la thalidomide malgré les pressions tant que le dossier ne respecte pas les exigences, épargnant aux États-Unis le drame qu'a connu l'Europe.",
"type": "Historique"
},
{
"nom": "Mr Stevens",
"univers": "Littérature et mythologie",
"source": "Les Vestiges du jour, K. Ishiguro",
"pourquoi": "Majordome parfaitement compétent dans son rôle, sans jamais s'autoriser d'écart ni d'émotion.",
"type": "Fiction"
},
{
"nom": "Conseil",
"univers": "Littérature et mythologie",
"source": "Jules Verne, Vingt mille lieues sous les mers",
"pourquoi": "Domestique flegmatique du professeur Aronnax, il classe imperturbablement chaque espèce selon les règles et suit son maître partout « comme il plaira à Monsieur ».",
"type": "Fiction"
},
{
"nom": "Jocasta Nu",
"univers": "Star Wars",
"source": "Star Wars, épisode II",
"pourquoi": "Archiviste du Temple Jedi, elle affirme à Obi-Wan que si un élément n'apparaît pas dans les archives, c'est qu'il n'existe pas.",
"type": "Fiction"
},
{
"nom": "Tuvok",
"univers": "Star Trek",
"source": "Star Trek : Voyager",
"pourquoi": "Officier tactique vulcain qui ne déroge jamais au protocole, il infiltre les Maquis sur ordre de Starfleet et suit la logique avant tout.",
"type": "Fiction"
},
{
"nom": "Percy Weasley",
"univers": "Harry Potter",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Il connaît le règlement par cœur et se tient à jour de tout ce que son rôle exige.",
"type": "Fiction"
},
{
"nom": "Professeur Binns",
"univers": "Harry Potter",
"source": "Harry Potter (tomes 1 à 5)",
"pourquoi": "Ce fantôme a continué à faire son cours d'histoire de la magie comme si de rien n'était après sa mort, débitant ses dates sur le même ton monocorde.",
"type": "Fiction"
},
{
"nom": "J.A.R.V.I.S.",
"univers": "Marvel et DC",
"source": "Iron Man ; Avengers (MCU)",
"pourquoi": "L'intelligence artificielle de Tony Stark accomplit son rôle avec une compétence impassible et exécute ses « protocoles », comme celui qui fait décoller tous les costumes dans Iron Man 3.",
"type": "Fiction"
}
],
"WU/g": [
{
"nom": "Emmanuel Kant",
"univers": "Histoire",
"source": "Prusse, XVIIIe siècle",
"pourquoi": "Réglé comme une horloge, il suit des principes rigoureux sans s'accorder d'exception.",
"type": "Historique"
},
{
"nom": "François Vatel",
"univers": "Histoire",
"source": "France, XVIIe siècle",
"pourquoi": "Maître d'hôtel du Grand Condé, il se donne la mort à Chantilly en 1671 en croyant que la marée n'arriverait pas à temps pour le festin du roi, incapable de tolérer l'écart.",
"type": "Historique"
},
{
"nom": "Thomas Diafoirus",
"univers": "Littérature et mythologie",
"source": "Molière, Le Malade imaginaire",
"pourquoi": "Son père se félicite qu'il s'attache aveuglément aux opinions des anciens et refuse la découverte de la circulation du sang.",
"type": "Fiction"
},
{
"nom": "Sheldon Cooper",
"univers": "Cinéma, séries et jeux",
"source": "The Big Bang Theory (série)",
"pourquoi": "Il exige que chaque chose suive la méthode établie et ne tolère aucun écart.",
"type": "Fiction"
},
{
"nom": "Bohort",
"univers": "Cinéma, séries et jeux",
"source": "Kaamelott",
"pourquoi": "Chevalier obsédé par l'étiquette et le protocole des cérémonies, il applique les usages de la cour à la lettre et manque cruellement d'assurance.",
"type": "Fiction"
},
{
"nom": "Sarek",
"univers": "Star Trek",
"source": "Star Trek (série originale)",
"pourquoi": "Ambassadeur vulcain inflexible sur la tradition, il cesse de parler à son fils Spock pendant dix-huit ans parce que celui-ci a choisi Starfleet.",
"type": "Fiction"
},
{
"nom": "Mordo",
"univers": "Marvel et DC",
"source": "Doctor Strange (MCU, 2016)",
"pourquoi": "Disciple rigoureux de l'Ancien, il ne tolère aucun écart aux lois naturelles et se détourne de ses maîtres quand il découvre qu'ils les ont transgressées.",
"type": "Fiction"
}
],
"WB/u": [
{
"nom": "Caton l'Ancien",
"univers": "Histoire",
"source": "Rome, IIe siècle av. J.-C.",
"pourquoi": "Censeur d'une sévérité légendaire, il raye des sénateurs pour mauvaise conduite et se méfie des philosophes grecs, se posant lui-même en modèle d'austérité.",
"type": "Historique"
},
{
"nom": "Javert",
"univers": "Littérature et mythologie",
"source": "Les Misérables, V. Hugo",
"pourquoi": "Il veille à ce que chacun reste dans le cadre de la loi et se veut lui-même irréprochable.",
"type": "Fiction"
},
{
"nom": "Argus",
"univers": "Littérature et mythologie",
"source": "Mythologie grecque ; Ovide, Les Métamorphoses",
"pourquoi": "Géant aux cent yeux chargé par Héra de surveiller Io jour et nuit, il garde sans faillir jusqu'à ce qu'Hermès l'endorme par sa flûte et ses récits.",
"type": "Fiction"
},
{
"nom": "Dwight Schrute",
"univers": "Cinéma, séries et jeux",
"source": "The Office (version américaine)",
"pourquoi": "Assistant (du) directeur régional qui surveille ses collègues et fait appliquer le moindre règlement, il est lui-même d'un dévouement total à l'entreprise.",
"type": "Fiction"
},
{
"nom": "Ludovic Cruchot",
"univers": "Cinéma, séries et jeux",
"source": "Le Gendarme de Saint-Tropez",
"pourquoi": "Gendarme zélé, intraitable avec ses subordonnés et obséquieux envers ses supérieurs, il veille à ce que chacun respecte l'ordre établi.",
"type": "Fiction"
},
{
"nom": "Agent Longtarin",
"univers": "BD et animation",
"source": "Gaston (Franquin)",
"pourquoi": "Agent de police obsédé par les parcmètres et le règlement, il verbalise sans état d'âme et traque la moindre infraction de Gaston.",
"type": "Fiction"
},
{
"nom": "Syril Karn",
"univers": "Star Wars",
"source": "Andor",
"pourquoi": "Inspecteur adjoint obsédé par l'ordre et le règlement, il traque Cassian avec un zèle sévère que même ses supérieurs trouvent excessif.",
"type": "Fiction"
},
{
"nom": "Amiral Norah Satie",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation",
"pourquoi": "Chargée d'enquêter sur un sabotage, elle transforme l'enquête en chasse aux sorcières où chacun devient suspect, jusqu'à Picard.",
"type": "Fiction"
},
{
"nom": "Dolores Ombrage",
"univers": "Harry Potter",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Elle surveille chaque comportement et fait respecter le règlement à la lettre.",
"type": "Fiction"
},
{
"nom": "Argus Rusard",
"univers": "Harry Potter",
"source": "Harry Potter (sept tomes)",
"pourquoi": "Concierge qui arpente les couloirs avec Miss Teigne pour prendre les élèves en faute, il regrette le temps où l'on suspendait les coupables par les poignets au plafond.",
"type": "Fiction"
},
{
"nom": "Alliser Thorne",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Maître d'armes impitoyable de Châteaunoir, il traque tout écart aux traditions de la Garde, jusqu'à la mutinerie contre Jon.",
"type": "Fiction"
}
],
"WB/r": [
{
"nom": "Charles de Gaulle",
"univers": "Histoire",
"source": "France, XXe siècle",
"pourquoi": "Il se tient « en charge » de la nation et en répond dans la durée, avec sérieux.",
"type": "Historique"
},
{
"nom": "Elizabeth II",
"univers": "Histoire",
"source": "Royaume-Uni, XXe-XXIe siècle",
"pourquoi": "Fidèle à la promesse faite à 21 ans de consacrer toute sa vie au service de son peuple, elle a tenu son rôle avec gravité pendant soixante-dix ans de règne.",
"type": "Historique"
},
{
"nom": "Hector",
"univers": "Littérature et mythologie",
"source": "Homère, Iliade",
"pourquoi": "Chef de la défense de Troie, il quitte Andromaque et son fils pour retourner au combat par devoir et par honneur, sans goût pour la guerre elle-même.",
"type": "Fiction"
},
{
"nom": "Michael Corleone",
"univers": "Cinéma, séries et jeux",
"source": "Le Parrain (Francis Ford Coppola)",
"pourquoi": "Une fois devenu le Don, il assume la charge de la famille avec un sérieux glacial et un sens du devoir dénué de toute fantaisie.",
"type": "Fiction"
},
{
"nom": "Capitaine Francis Blake",
"univers": "BD et animation",
"source": "Blake et Mortimer",
"pourquoi": "Officier du MI5 d'une rigueur toute britannique, il assume avec sérieux et courage la responsabilité de la sécurité du royaume.",
"type": "Fiction"
},
{
"nom": "Amiral Ackbar",
"univers": "Star Wars",
"source": "Star Wars, épisode VI",
"pourquoi": "Commandant de la flotte rebelle à Endor, il assume avec sérieux et courage la responsabilité de la bataille décisive.",
"type": "Fiction"
},
{
"nom": "Denethor",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Intendant austère du Gondor, il porte seul la charge de la cité face au Mordor et tient à ce rôle au point de refuser de s'effacer devant le retour d'un roi.",
"type": "Fiction"
},
{
"nom": "Eddard Stark",
"univers": "Le Trône de fer",
"source": "Le Trône de fer, G. R. R. Martin",
"pourquoi": "Il tient son rôle avec sérieux et courage, jusqu'au bout.",
"type": "Fiction"
},
{
"nom": "Barristan Selmy",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Lord Commandant de la Garde Royale, il incarne avec gravité et courage une charge qu'il a tenue sous plusieurs rois.",
"type": "Fiction"
},
{
"nom": "Commissaire Gordon",
"univers": "Marvel et DC",
"source": "Batman (comics DC ; trilogie The Dark Knight)",
"pourquoi": "Policier intègre à la tête du GCPD, il porte depuis des années la responsabilité de l'ordre à Gotham avec un sérieux et un courage sans faille.",
"type": "Fiction"
},
{
"nom": "Okoye",
"univers": "Marvel et DC",
"source": "Black Panther (MCU, 2018)",
"pourquoi": "Générale des Dora Milaje, elle reste loyale au trône du Wakanda quel que soit celui qui y siège et assume ce rôle avec une gravité totale.",
"type": "Fiction"
}
],
"WB/g": [
{
"nom": "Frédéric-Guillaume Ier de Prusse",
"univers": "Histoire",
"source": "Prusse, XVIIIe siècle",
"pourquoi": "Le « Roi-Sergent » gouverne son royaume comme une caserne : règlements, discipline et économies, sans place pour l'improvisation.",
"type": "Historique"
},
{
"nom": "Mademoiselle Rottenmeier",
"univers": "Littérature et mythologie",
"source": "Heidi, J. Spyri",
"pourquoi": "Pour elle, la maison fonctionne si l'on respecte le règlement : aucune place à l'improvisation.",
"type": "Fiction"
},
{
"nom": "Thomas Gradgrind",
"univers": "Littérature et mythologie",
"source": "Temps difficiles, C. Dickens",
"pourquoi": "Il encadre tout selon les faits et le système prévu, sans fantaisie aucune.",
"type": "Fiction"
},
{
"nom": "Mildred Ratched",
"univers": "Cinéma, séries et jeux",
"source": "Vol au-dessus d'un nid de coucou (Miloš Forman)",
"pourquoi": "Infirmière en chef qui fait tourner le service selon un règlement immuable, elle oppose une froideur implacable à toute improvisation de McMurphy.",
"type": "Fiction"
},
{
"nom": "Roz",
"univers": "BD et animation",
"source": "Monstres et Cie (Pixar)",
"pourquoi": "Préposée impassible à la paperasse, elle exige que chaque formulaire soit rempli et répète à Bob qu'elle le surveille, toujours.",
"type": "Fiction"
},
{
"nom": "Major Partagaz",
"univers": "Star Wars",
"source": "Andor",
"pourquoi": "Chef du Bureau de la sécurité impériale, il dirige ses réunions avec une froideur procédurale et n'admet aucune improvisation de ses agents.",
"type": "Fiction"
},
{
"nom": "Stannis Baratheon",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Il fait Davos chevalier pour l'avoir sauvé, mais lui tranche aussi les phalanges pour sa contrebande : la loi doit s'appliquer sans exception.",
"type": "Fiction"
}
],
"UB/w": [
{
"nom": "Vauban",
"univers": "Histoire",
"source": "France, XVIIe siècle",
"pourquoi": "Il invente des méthodes de siège et de fortification que d'autres ne savaient pas concevoir.",
"type": "Historique"
},
{
"nom": "Frank Lloyd Wright",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Auteur de la Maison sur la cascade, il disait avoir choisi « l'arrogance honnête plutôt que l'humilité hypocrite ».",
"type": "Historique"
},
{
"nom": "Zaha Hadid",
"univers": "Histoire",
"source": "Irak / Royaume-Uni, XXe-XXIe siècle",
"pourquoi": "Première femme lauréate du prix Pritzker, elle a imposé des formes jugées irréalisables, réputée aussi intransigeante que ses bâtiments.",
"type": "Historique"
},
{
"nom": "Capitaine Nemo",
"univers": "Littérature et mythologie",
"source": "Jules Verne, Vingt mille lieues sous les mers",
"pourquoi": "Ingénieur hors pair qui a conçu seul le Nautilus, il a rompu avec l'humanité et méprise tout ce qui n'est pas à sa hauteur.",
"type": "Fiction"
},
{
"nom": "Winston Wolf",
"univers": "Cinéma, séries et jeux",
"source": "Pulp Fiction (Quentin Tarantino)",
"pourquoi": "Appelé quand plus personne ne sait quoi faire, il règle le problème en un temps record (« Je suis Winston Wolf, je résous les problèmes ») sans s'embarrasser de modestie.",
"type": "Fiction"
},
{
"nom": "Bulma",
"univers": "BD et animation",
"source": "Dragon Ball",
"pourquoi": "Génie de la Capsule Corporation, elle invente le radar à Dragon Balls que nul autre ne saurait concevoir, sans aucune fausse modestie.",
"type": "Fiction"
},
{
"nom": "Cad Bane",
"univers": "Star Wars",
"source": "Star Wars : The Clone Wars",
"pourquoi": "Mercenaire sans allégeance engagé pour les missions impossibles, comme voler un holocron au cœur du Temple Jedi, il réussit et le fait savoir avec arrogance.",
"type": "Fiction"
},
{
"nom": "Docteur Lewis Zimmerman",
"univers": "Star Trek",
"source": "Star Trek : Voyager",
"pourquoi": "Créateur brillant et arrogant de l'hologramme médical d'urgence, il vit retranché dans sa station avec ses hologrammes, fuyant la compagnie des autres.",
"type": "Fiction"
},
{
"nom": "Fëanor",
"univers": "Tolkien",
"source": "Le Silmarillion",
"pourquoi": "Le plus doué des Noldor, créateur des Silmarils et de l'écriture fëanorienne, il refuse de les céder aux Valar et brûle les navires à Losgar en abandonnant les siens de l'autre côté de la mer.",
"type": "Fiction"
},
{
"nom": "Tony Stark",
"univers": "Marvel et DC",
"source": "Iron Man (Marvel)",
"pourquoi": "Il réalise ce qui est impossible aux autres et s'ennuie profondément dans la routine.",
"type": "Fiction"
},
{
"nom": "Ozymandias (Adrian Veidt)",
"univers": "Marvel et DC",
"source": "Watchmen (comics DC ; film 2009)",
"pourquoi": "« L'homme le plus intelligent du monde » conçoit seul, depuis sa forteresse de l'Antarctique, un plan pour empêcher la guerre nucléaire, sans consulter personne.",
"type": "Fiction"
}
],
"UB/r": [
{
"nom": "Gustave Flaubert",
"univers": "Histoire",
"source": "France, XIXe siècle",
"pourquoi": "Il reprend chaque phrase jusqu'à la perfection : rien n'est jamais « ni fait, ni à faire ».",
"type": "Historique"
},
{
"nom": "Stanley Kubrick",
"univers": "Histoire",
"source": "États-Unis / Royaume-Uni, XXe siècle",
"pourquoi": "Il pouvait faire refaire des dizaines de fois la même prise et contrôlait chaque étape de ses films, jusqu'aux copies distribuées en salle.",
"type": "Historique"
},
{
"nom": "Phileas Fogg",
"univers": "Littérature et mythologie",
"source": "Le Tour du monde en 80 jours, J. Verne",
"pourquoi": "Il déroule son plan à la minute près et le mène à son terme.",
"type": "Fiction"
},
{
"nom": "Mike Ehrmantraut",
"univers": "Cinéma, séries et jeux",
"source": "Breaking Bad",
"pourquoi": "Ancien policier méthodique et austère, il refuse les « demi-mesures » et exécute chaque tâche jusqu'au bout avec une rigueur sans failles.",
"type": "Fiction"
},
{
"nom": "IG-11",
"univers": "Star Wars",
"source": "The Mandalorian",
"pourquoi": "Droïde chasseur de primes programmé pour accomplir son contrat ou s'autodétruire, il exécute sa mission avec une froideur méthodique dénuée de toute fantaisie.",
"type": "Fiction"
},
{
"nom": "Roose Bolton",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Froid et patient, il ourdit avec les Frey l'exécution méthodique des Noces Pourpres et ne laisse rien au hasard.",
"type": "Fiction"
},
{
"nom": "Thanos",
"univers": "Marvel et DC",
"source": "Avengers : Infinity War et Endgame (MCU)",
"pourquoi": "Il déroule son plan pierre après pierre sans jamais dévier, puis se retire austèrement dans une ferme une fois la tâche accomplie.",
"type": "Fiction"
}
],
"UB/g": [
{
"nom": "Marie Curie",
"univers": "Histoire",
"source": "France, XIXe-XXe siècles",
"pourquoi": "Elle traite des tonnes de minerai pour isoler le radium : elle ne s'arrête que quand c'est achevé.",
"type": "Historique"
},
{
"nom": "Bernard Palissy",
"univers": "Histoire",
"source": "France, XVIe siècle",
"pourquoi": "Cherchant pendant des années le secret de l'émail, il va jusqu'à brûler ses meubles et le plancher de sa maison pour alimenter son four.",
"type": "Historique"
},
{
"nom": "Edmond Dantès",
"univers": "Littérature et mythologie",
"source": "Le Comte de Monte-Cristo, A. Dumas",
"pourquoi": "Des années de patience et d'acharnement pour mener son projet jusqu'au bout.",
"type": "Fiction"
},
{
"nom": "Agent 47",
"univers": "Cinéma, séries et jeux",
"source": "Hitman (jeux vidéo)",
"pourquoi": "Tueur à gages issu du clonage, sans nom ni vie propre, il mène chaque contrat jusqu'à son terme avec une ténacité et une discrétion de machine.",
"type": "Fiction"
},
{
"nom": "Seven of Nine",
"univers": "Star Trek",
"source": "Star Trek : Voyager",
"pourquoi": "Ancienne Borg obsédée par l'efficacité, elle ne lâche une tâche qu'une fois achevée et peine à travailler en équipe sans imposer ses méthodes.",
"type": "Fiction"
}
],
"UR/w": [
{
"nom": "Galilée",
"univers": "Histoire",
"source": "Italie, XVIIe siècle",
"pourquoi": "Il explore des voies que personne n'a suivies, quitte à contredire toutes les consignes.",
"type": "Historique"
},
{
"nom": "Richard Feynman",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Physicien Nobel, il s'amusait à crocheter les coffres-forts de Los Alamos et jouait du bongo, rétif à toute consigne qui ne le convainquait pas.",
"type": "Historique"
},
{
"nom": "MacGyver",
"univers": "Cinéma, séries et jeux",
"source": "MacGyver (série)",
"pourquoi": "Roi de l'improvisation, il trouve toujours une voie nouvelle là où les autres suivent le manuel.",
"type": "Fiction"
},
{
"nom": "Rick Sanchez",
"univers": "Cinéma, séries et jeux",
"source": "Rick et Morty",
"pourquoi": "Scientifique génial et anticonformiste qui méprise toute autorité, il improvise des expéditions à travers les dimensions selon ses seules envies.",
"type": "Fiction"
},
{
"nom": "Qui-Gon Jinn",
"univers": "Star Wars",
"source": "Star Wars, épisode I",
"pourquoi": "Jedi qui suit la Force vivante plutôt que le Conseil, il improvise sur Tatooine en pariant sur la course de modules d'Anakin et défie l'avis des maîtres.",
"type": "Fiction"
},
{
"nom": "B'Elanna Torres",
"univers": "Star Trek",
"source": "Star Trek : Voyager",
"pourquoi": "Ingénieure géniale et irascible qui a quitté l'Académie de Starfleet, elle excelle dans l'improvisation technique et supporte mal les consignes.",
"type": "Fiction"
},
{
"nom": "John Constantine",
"univers": "Marvel et DC",
"source": "Hellblazer (comics DC) ; Constantine (2005)",
"pourquoi": "Exorciste cynique et solitaire, il improvise avec ses connaissances occultes et méprise toute autorité, céleste comme infernale.",
"type": "Fiction"
}
],
"UR/b": [
{
"nom": "Benjamin Franklin",
"univers": "Histoire",
"source": "États-Unis, XVIIIe siècle",
"pourquoi": "Inventeur curieux de tout, il partage ses découvertes et met son ingéniosité au service des autres.",
"type": "Historique"
},
{
"nom": "Paul Erdős",
"univers": "Histoire",
"source": "Hongrie, XXe siècle",
"pourquoi": "Mathématicien sans domicile fixe, il vivait avec une valise, allait de collègue en collègue pour résoudre leurs problèmes et redistribuait ses prix.",
"type": "Historique"
},
{
"nom": "Hermès",
"univers": "Littérature et mythologie",
"source": "Mythologie grecque ; Homère, Odyssée",
"pourquoi": "Dieu messager inventif et toujours en mouvement, il vient au secours des héros, comme lorsqu'il donne à Ulysse l'herbe moly qui le protège des sortilèges de Circé.",
"type": "Fiction"
},
{
"nom": "Abby Sciuto",
"univers": "Cinéma, séries et jeux",
"source": "NCIS : Enquêtes spéciales",
"pourquoi": "Experte scientifique joviale et passionnée, elle invente des méthodes d'analyse et reste toujours disponible pour l'équipe, sans aucune ambition de carrière.",
"type": "Fiction"
},
{
"nom": "Tintin",
"univers": "BD et animation",
"source": "Les Aventures de Tintin, Hergé",
"pourquoi": "Il enquête, cherche et trouve, et se rend toujours disponible pour les problèmes des autres.",
"type": "Fiction"
},
{
"nom": "Spirou",
"univers": "BD et animation",
"source": "Spirou et Fantasio",
"pourquoi": "Groom devenu reporter, il court les aventures pour comprendre et aider les autres, sans aucune soif de gloire ou d'argent.",
"type": "Fiction"
},
{
"nom": "R2-D2 (D2-R2)",
"univers": "Star Wars",
"source": "Star Wars, trilogie originale",
"pourquoi": "Droïde astromécano curieux et intrépide, il pirate les systèmes, transporte les plans de l'Étoile de la Mort et sauve ses amis sans rien demander en retour.",
"type": "Fiction"
},
{
"nom": "Kes",
"univers": "Star Trek",
"source": "Star Trek : Voyager",
"pourquoi": "Avide d'apprendre, elle se forme à la médecine auprès du Docteur et entretient la serre hydroponique, toujours disponible sans rien demander en retour.",
"type": "Fiction"
},
{
"nom": "Gandalf",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux ; Le Hobbit",
"pourquoi": "Pèlerin sans attache, il fouille les archives de Minas Tirith jusqu'à trouver le parchemin d'Isildur, se met au service de tous les peuples et refuse l'Anneau qu'on lui tend.",
"type": "Fiction"
},
{
"nom": "Samwell Tarly",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Il fouille les archives pour découvrir comment vaincre les Marcheurs blancs et met ses trouvailles au service de Jon, sans souci de gloire.",
"type": "Fiction"
},
{
"nom": "Flash (Barry Allen)",
"univers": "Marvel et DC",
"source": "Flash (comics DC ; série TV ; Justice League)",
"pourquoi": "Expert de la police scientifique toujours en retard, il passe ses journées à rendre service et à résoudre des énigmes, sans aucune ambition de gloire.",
"type": "Fiction"
}
],
"UR/g": [
{
"nom": "Nikola Tesla",
"univers": "Histoire",
"source": "États-Unis, XIXe-XXe siècles",
"pourquoi": "En avance sur son temps, ses idées ont heurté avant de s'imposer.",
"type": "Historique"
},
{
"nom": "Alfred Wegener",
"univers": "Histoire",
"source": "Allemagne, XXe siècle",
"pourquoi": "Sa théorie de la dérive des continents fut rejetée de son vivant avant d'être reconnue des décennies plus tard ; il mourut lors d'une expédition au Groenland.",
"type": "Historique"
},
{
"nom": "Doc Emmett Brown",
"univers": "Cinéma, séries et jeux",
"source": "Retour vers le futur (films)",
"pourquoi": "Inventeur sans garde-fou, il expérimente d'abord et rassure ensuite.",
"type": "Fiction"
},
{
"nom": "Wallace",
"univers": "Cinéma, séries et jeux",
"source": "Wallace et Gromit (Aardman)",
"pourquoi": "Inventeur farfelu dont les machines échappent régulièrement à tout contrôle, il fonce dans ses idées sans voir les catastrophes qu'il prépare.",
"type": "Fiction"
},
{
"nom": "Professeur Frink",
"univers": "BD et animation",
"source": "Les Simpson",
"pourquoi": "Savant excentrique de Springfield, il enchaîne les inventions farfelues sans le moindre souci des conséquences.",
"type": "Fiction"
},
{
"nom": "Reginald Barclay",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation ; Star Trek : Voyager",
"pourquoi": "Ingénieur timide réfugié dans ses holoprogrammes, il s'acharne sur le projet Pathfinder contre l'avis de sa hiérarchie, qui finit par lui donner raison quand le contact avec Voyager est établi.",
"type": "Fiction"
},
{
"nom": "Qyburn",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Mestre déchu, chassé de la Citadelle pour ses expériences sur les vivants, il pousse ses recherches sans aucun scrupule.",
"type": "Fiction"
}
],
"BR/w": [
{
"nom": "Giacomo Casanova",
"univers": "Histoire",
"source": "Venise, XVIIIe siècle",
"pourquoi": "Pour lui, la vie doit être agréable, intense et variée : il profite de chaque instant.",
"type": "Historique"
},
{
"nom": "Ninon de Lenclos",
"univers": "Histoire",
"source": "France, XVIIe siècle",
"pourquoi": "Courtisane et femme d'esprit, elle a vécu en épicurienne affranchie, refusant le mariage comme le couvent pour choisir librement ses plaisirs.",
"type": "Historique"
},
{
"nom": "Falstaff",
"univers": "Littérature et mythologie",
"source": "Henri IV et Les Joyeuses Commères de Windsor, W. Shakespeare",
"pourquoi": "Bon vivant qui préfère le plaisir du moment à toute forme de devoir.",
"type": "Fiction"
},
{
"nom": "Dorian Gray",
"univers": "Littérature et mythologie",
"source": "Oscar Wilde, Le Portrait de Dorian Gray",
"pourquoi": "Converti à l'hédonisme de Lord Henry, il vit de plaisirs en plaisirs sans égard pour quiconque, tandis que son portrait vieillit à sa place.",
"type": "Fiction"
},
{
"nom": "Charlie Harper",
"univers": "Cinéma, séries et jeux",
"source": "Mon oncle Charlie",
"pourquoi": "Compositeur de jingles vivant dans une villa de Malibu, il enchaîne les conquêtes et les verres en refusant tout engagement.",
"type": "Fiction"
},
{
"nom": "Timon",
"univers": "BD et animation",
"source": "Le Roi lion (Disney)",
"pourquoi": "Avec son « Hakuna Matata », il vit retiré de toute société pour profiter de la vie sans souci ni responsabilité.",
"type": "Fiction"
},
{
"nom": "Zefram Cochrane",
"univers": "Star Trek",
"source": "Star Trek : Premier Contact",
"pourquoi": "L'inventeur de la distorsion avoue n'avoir construit son vaisseau que pour l'argent et rêve de finir sur une île tropicale, loin de toute mission historique.",
"type": "Fiction"
},
{
"nom": "Salladhor Saan",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Pirate lysien jovial, il loue ses navires à Stannis pour l'or et parle surtout de vin, de femmes et de butin.",
"type": "Fiction"
},
{
"nom": "Le Grand Maître",
"univers": "Marvel et DC",
"source": "Thor : Ragnarok (MCU)",
"pourquoi": "Souverain jouisseur de Sakaar, il vit de fêtes et de combats de gladiateurs organisés pour son propre plaisir.",
"type": "Fiction"
}
],
"BR/u": [
{
"nom": "Jean Anthelme Brillat-Savarin",
"univers": "Histoire",
"source": "France, XVIIIe-XIXe siècles",
"pourquoi": "Gastronome qui écoute ses envies et s'organise pour les combler avec art.",
"type": "Historique"
},
{
"nom": "George Best",
"univers": "Histoire",
"source": "Irlande du Nord, XXe siècle",
"pourquoi": "Génie de Manchester United, il résumait sa vie ainsi : « J'ai dépensé beaucoup d'argent en alcool, en filles et en voitures de sport. Le reste, je l'ai gaspillé. »",
"type": "Historique"
},
{
"nom": "Dionysos",
"univers": "Littérature et mythologie",
"source": "Mythologie grecque",
"pourquoi": "Dieu de la fête et du vin, qui ne tolère aucune frustration.",
"type": "Fiction"
},
{
"nom": "Emma Bovary",
"univers": "Littérature et mythologie",
"source": "Gustave Flaubert, Madame Bovary",
"pourquoi": "Elle cède à chaque envie de luxe et de passion, accumulant auprès du marchand Lheureux des dettes qu'elle ne mesure jamais.",
"type": "Fiction"
},
{
"nom": "Karadoc",
"univers": "Cinéma, séries et jeux",
"source": "Kaamelott",
"pourquoi": "Chevalier pour qui « le gras, c'est la vie », il organise tout autour de la satisfaction de son appétit sans jamais se poser de questions.",
"type": "Fiction"
},
{
"nom": "Homer Simpson",
"univers": "BD et animation",
"source": "Les Simpson",
"pourquoi": "Il cède à chaque envie de donut ou de bière Duff et tient toute réflexion pour une source de frustration superflue.",
"type": "Fiction"
},
{
"nom": "Ludo Verpey",
"univers": "Harry Potter",
"source": "Harry Potter et la Coupe de feu",
"pourquoi": "Ancien batteur adulé et parieur invétéré, il traite ses fonctions au Ministère avec légèreté et règle ses paris en or de farfadet qui disparaît.",
"type": "Fiction"
},
{
"nom": "Robert Baratheon",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Le roi abandonne le gouvernement à sa Main pour les festins, le vin, les femmes et la chasse au sanglier qui le tuera.",
"type": "Fiction"
},
{
"nom": "Johnny Storm (la Torche)",
"univers": "Marvel et DC",
"source": "Les Quatre Fantastiques (comics ; film 2005)",
"pourquoi": "Tête brûlée qui adore les sports extrêmes, les conquêtes et la célébrité, il fonce sur chaque plaisir sans réfléchir aux conséquences.",
"type": "Fiction"
}
],
"BR/g": [
{
"nom": "Oscar Wilde",
"univers": "Histoire",
"source": "Irlande et Angleterre, XIXe siècle",
"pourquoi": "Dandy flamboyant, il savait choisir et être choisi, et menait sa vie avec éclat.",
"type": "Historique"
},
{
"nom": "Victor Lustig",
"univers": "Histoire",
"source": "Autriche-Hongrie / États-Unis, XXe siècle",
"pourquoi": "Escroc aux mille identités, il a « vendu » la tour Eiffel à un ferrailleur en 1925 en se faisant passer pour un haut fonctionnaire.",
"type": "Historique"
},
{
"nom": "Georges Duroy (Bel-Ami)",
"univers": "Littérature et mythologie",
"source": "Bel-Ami, G. de Maupassant",
"pourquoi": "Toujours à l'affût des bonnes affaires, de toutes les bonnes affaires, il réussit avec aisance.",
"type": "Fiction"
},
{
"nom": "Vicomte de Valmont",
"univers": "Littérature et mythologie",
"source": "Choderlos de Laclos, Les Liaisons dangereuses",
"pourquoi": "Séducteur méthodique, il choisit ses proies comme des affaires à conclure et parie avec Merteuil sur la chute de la présidente de Tourvel.",
"type": "Fiction"
},
{
"nom": "Saul Goodman",
"univers": "Cinéma, séries et jeux",
"source": "Breaking Bad ; Better Call Saul",
"pourquoi": "Avocat à l'affût de toutes les combines, il se cache derrière un personnage inventé qui a remplacé Jimmy McGill et passe pour un manipulateur.",
"type": "Fiction"
},
{
"nom": "Qi'ra",
"univers": "Star Wars",
"source": "Solo : A Star Wars Story",
"pourquoi": "Survivante qui saisit chaque occasion, elle abandonne Han et prend la place de Dryden Vos à la tête d'Aube écarlate.",
"type": "Fiction"
}
],
"BG/w": [
{
"nom": "Maria Callas",
"univers": "Histoire",
"source": "Grèce et Italie, XXe siècle",
"pourquoi": "Diva absolue, elle captait l'attention de toute une salle et savait en tirer parti.",
"type": "Historique"
},
{
"nom": "Liberace",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Pianiste aux candélabres, fourrures et costumes à strass, il vivait pour briller sur scène et répondait aux critiques qu'il en « pleurait jusqu'à la banque ».",
"type": "Historique"
},
{
"nom": "Mae West",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Elle écrivait ses propres rôles pour être toujours au centre de la scène et fut l'une des personnes les mieux payées des États-Unis dans les années 1930.",
"type": "Historique"
},
{
"nom": "Célimène",
"univers": "Littérature et mythologie",
"source": "Molière, Le Misanthrope",
"pourquoi": "Coquette qui règne sur son salon et ses soupirants par ses portraits médisants, elle refuse de suivre Alceste dans un « désert » loin des regards.",
"type": "Fiction"
},
{
"nom": "Norma Desmond",
"univers": "Cinéma, séries et jeux",
"source": "Boulevard du crépuscule (Billy Wilder)",
"pourquoi": "Ancienne star du muet qui vit pour briller et être admirée, elle reste persuadée qu'elle est toujours aussi grande et que « ce sont les films qui sont devenus petits ».",
"type": "Fiction"
},
{
"nom": "Bianca Castafiore",
"univers": "BD et animation",
"source": "Les Aventures de Tintin, Hergé",
"pourquoi": "Elle adore briller et que tout tourne autour d'elle.",
"type": "Fiction"
},
{
"nom": "Cruella d'Enfer",
"univers": "BD et animation",
"source": "Les 101 Dalmatiens (Disney)",
"pourquoi": "Elle ne vit que pour briller dans ses fourrures extravagantes et se moque éperdument de ce que pense autrui.",
"type": "Fiction"
},
{
"nom": "Booster Gold",
"univers": "Marvel et DC",
"source": "Booster Gold (comics DC)",
"pourquoi": "Venu du XXVe siècle, il exploite sa connaissance de l'Histoire pour devenir un héros célèbre et rentabiliser sa gloire en contrats publicitaires.",
"type": "Fiction"
}
],
"BG/u": [
{
"nom": "John D. Rockefeller",
"univers": "Histoire",
"source": "États-Unis, XIXe-XXe siècles",
"pourquoi": "Il a mis toute son énergie à bâtir la fortune et le statut qui garantissent son confort.",
"type": "Historique"
},
{
"nom": "Aristote Onassis",
"univers": "Histoire",
"source": "Grèce, XXe siècle",
"pourquoi": "L'armateur vivait entre son yacht Christina et son île de Skorpios, et ses mariages, dont celui avec Jackie Kennedy, faisaient partie de son statut.",
"type": "Historique"
},
{
"nom": "Le roi Midas",
"univers": "Littérature et mythologie",
"source": "Mythologie grecque ; Ovide, Les Métamorphoses",
"pourquoi": "Il demande que tout ce qu'il touche se change en or sans en prévoir les conséquences, puis gagne des oreilles d'âne pour avoir préféré la flûte de Pan à la lyre d'Apollon.",
"type": "Fiction"
},
{
"nom": "Biff Tannen",
"univers": "Cinéma, séries et jeux",
"source": "Retour vers le futur II",
"pourquoi": "Dans le 1985 alternatif, il utilise l'almanach des sports pour devenir un magnat richissime et vulgaire qui jouit de son pouvoir sans la moindre finesse.",
"type": "Fiction"
},
{
"nom": "Victor Pivert",
"univers": "Cinéma, séries et jeux",
"source": "Les Aventures de Rabbi Jacob (Gérard Oury)",
"pourquoi": "Industriel colérique et plein de préjugés, il tient avant tout à son confort et à son statut de patron qui lui permet de traiter les autres de haut.",
"type": "Fiction"
},
{
"nom": "Balthazar Picsou",
"univers": "BD et animation",
"source": "Univers Disney",
"pourquoi": "Richissime, il tient à sa fortune et à son statut plus qu'à tout le reste.",
"type": "Fiction"
},
{
"nom": "Monsieur Burns",
"univers": "BD et animation",
"source": "Les Simpson",
"pourquoi": "Patron richissime de la centrale nucléaire, il ne pense qu'à son pouvoir et à son confort, aux dépens de tous.",
"type": "Fiction"
},
{
"nom": "Nute Gunray",
"univers": "Star Wars",
"source": "Star Wars, épisodes I à III",
"pourquoi": "Vice-roi de la Fédération du commerce, avide de profits et de privilèges, il se contente d'obéir à Dark Sidious en tremblant dès que les choses tournent mal.",
"type": "Fiction"
},
{
"nom": "Viserys Targaryen",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Persuadé que tout lui est dû par sa naissance, il exige la couronne promise et finit couronné d'or fondu par Khal Drogo.",
"type": "Fiction"
},
{
"nom": "Justin Hammer",
"univers": "Marvel et DC",
"source": "Iron Man 2 (MCU)",
"pourquoi": "Industriel de l'armement envieux de Stark, il veut le pouvoir et le prestige sans avoir le génie qui va avec, ce qui l'oblige à recruter Ivan Vanko.",
"type": "Fiction"
}
],
"BG/r": [
{
"nom": "Jacob Fugger",
"univers": "Histoire",
"source": "Augsbourg, XVe-XVIe siècles",
"pourquoi": "Banquier qui a accru son patrimoine toute sa vie, avec une attention de chaque instant.",
"type": "Historique"
},
{
"nom": "Hetty Green",
"univers": "Histoire",
"source": "États-Unis, XIXe-XXe siècle",
"pourquoi": "Surnommée « la sorcière de Wall Street », la femme la plus riche de son temps vivait dans des logements modestes et comptait chaque sou.",
"type": "Historique"
},
{
"nom": "Le père Grandet",
"univers": "Littérature et mythologie",
"source": "Eugénie Grandet, H. de Balzac",
"pourquoi": "Il accroît son patrimoine sou par sou, depuis toujours.",
"type": "Fiction"
},
{
"nom": "Harpagon",
"univers": "Littérature et mythologie",
"source": "Molière, L'Avare",
"pourquoi": "Il sacrifie tout plaisir, et jusqu'au bonheur de ses enfants, à la garde de sa cassette, dont la perte le fait crier « au voleur ».",
"type": "Fiction"
},
{
"nom": "Eugène Krabs",
"univers": "Cinéma, séries et jeux",
"source": "Bob l'éponge",
"pourquoi": "Patron du Crabe Croustillant obsédé par l'argent, il compte chaque sou et ne dépense jamais rien pour profiter de la vie.",
"type": "Fiction"
},
{
"nom": "Monsieur Krabs",
"univers": "BD et animation",
"source": "Bob l'éponge",
"pourquoi": "Patron du Crabe Croustillant, il compte chaque centime et refuse toute dépense, l'argent étant toute sa vie.",
"type": "Fiction"
}
],
"RG/w": [
{
"nom": "Thomas Edward Lawrence (Lawrence d'Arabie)",
"univers": "Histoire",
"source": "Royaume-Uni, XXe siècle",
"pourquoi": "Officier insaisissable de la révolte arabe, il méprisait la hiérarchie et s'engagea ensuite comme simple soldat sous un faux nom.",
"type": "Historique"
},
{
"nom": "Cyrano de Bergerac",
"univers": "Littérature et mythologie",
"source": "Cyrano de Bergerac, E. Rostand",
"pourquoi": "Ses propres idées, ses propres méthodes : il refuse de se plier aux attentes des autres.",
"type": "Fiction"
},
{
"nom": "Carmen",
"univers": "Littérature et mythologie",
"source": "Prosper Mérimée, Carmen ; Georges Bizet, Carmen",
"pourquoi": "Bohémienne qui n'obéit qu'à son désir, elle préfère mourir que renoncer à sa liberté face à don José.",
"type": "Fiction"
},
{
"nom": "Loki (mythologie)",
"univers": "Littérature et mythologie",
"source": "Mythologie nordique ; Edda",
"pourquoi": "Imprévisible et insaisissable, il suit ses propres desseins, aide les dieux un jour et les trahit le lendemain jusqu'à provoquer la mort de Baldr.",
"type": "Fiction"
},
{
"nom": "Jack Sparrow",
"univers": "Cinéma, séries et jeux",
"source": "Pirates des Caraïbes",
"pourquoi": "Pirate imprévisible qui ne suit que ses propres plans et change d'allégeance au gré de ses intérêts, il échappe à tout contrôle.",
"type": "Fiction"
},
{
"nom": "Corto Maltese",
"univers": "BD et animation",
"source": "Corto Maltese, H. Pratt",
"pourquoi": "Marin libre qui n'obéit qu'à ses propres projets, même quand il travaille pour d'autres.",
"type": "Fiction"
},
{
"nom": "Bart Simpson",
"univers": "BD et animation",
"source": "Les Simpson",
"pourquoi": "Farceur incontrôlable, il fait à sa façon, défie l'école comme ses parents et se moque des règles du groupe.",
"type": "Fiction"
},
{
"nom": "Largo Winch",
"univers": "BD et animation",
"source": "Largo Winch (Van Hamme et Francq)",
"pourquoi": "Héritier rebelle d'un empire financier, il agit selon ses propres méthodes et reste ingérable pour le conseil d'administration.",
"type": "Fiction"
},
{
"nom": "Dark Maul",
"univers": "Star Wars",
"source": "Star Wars : The Clone Wars ; Rebels",
"pourquoi": "Écarté par son maître, il mène ses propres projets en fédérant des criminels autour de lui et ne se laisse plus contrôler par personne.",
"type": "Fiction"
},
{
"nom": "Ro Laren",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation",
"pourquoi": "Officier bajorane indocile, passée en cour martiale pour désobéissance, elle n'en fait qu'à sa tête jusqu'à rejoindre le Maquis.",
"type": "Fiction"
},
{
"nom": "Peeves",
"univers": "Harry Potter",
"source": "Harry Potter (sept tomes)",
"pourquoi": "Esprit frappeur que personne à Poudlard ne parvient à contrôler, il accepte de tourmenter Ombrage à la demande des jumeaux Weasley, mais à sa manière et avec un zèle bien à lui.",
"type": "Fiction"
},
{
"nom": "Túrin Turambar",
"univers": "Tolkien",
"source": "Le Silmarillion ; Les Enfants de Húrin",
"pourquoi": "Chef de hors-la-loi, il refuse le pardon de Thingol et n'écoute aucun conseil, imposant partout ses propres méthodes, jusqu'au pont de Nargothrond.",
"type": "Fiction"
},
{
"nom": "Sandor Clegane, dit le Limier",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Il méprise les chevaliers et leurs serments, et abandonne la Garde Royale en pleine bataille de la Néra pour suivre sa propre route.",
"type": "Fiction"
},
{
"nom": "Wolverine (Logan)",
"univers": "Marvel et DC",
"source": "X-Men (films et comics)",
"pourquoi": "Loup solitaire allergique aux ordres, il fait les choses à sa manière et reste difficile à contrôler, même au sein des X-Men.",
"type": "Fiction"
},
{
"nom": "Deadpool",
"univers": "Marvel et DC",
"source": "Deadpool et Deadpool 2",
"pourquoi": "Mercenaire bavard qui refuse obstinément de devenir un X-Men, il n'en fait qu'à sa tête et brise même le quatrième mur.",
"type": "Fiction"
}
],
"RG/u": [
{
"nom": "Evel Knievel",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Le cascadeur à moto a enchaîné les sauts insensés, dont sa chute spectaculaire au-dessus des fontaines du Caesars Palace en 1967.",
"type": "Historique"
},
{
"nom": "D'Artagnan",
"univers": "Littérature et mythologie",
"source": "Les Trois Mousquetaires, A. Dumas",
"pourquoi": "Spontané, il fonce et entraîne les autres dans sa course.",
"type": "Fiction"
},
{
"nom": "Ned Land",
"univers": "Littérature et mythologie",
"source": "Jules Verne, Vingt mille lieues sous les mers",
"pourquoi": "Harponneur impétueux qui se moque des classifications savantes, il étouffe à bord du Nautilus et ne pense qu'à s'évader pour retrouver le grand air.",
"type": "Fiction"
},
{
"nom": "Marty McFly",
"univers": "Cinéma, séries et jeux",
"source": "Retour vers le futur",
"pourquoi": "Adolescent impulsif, skateur et guitariste, il fonce tête baissée dans l'action et réagit au quart de tour quand on le traite de lâche.",
"type": "Fiction"
},
{
"nom": "Obélix",
"univers": "BD et animation",
"source": "Astérix, Goscinny et Uderzo",
"pourquoi": "Il suit son élan, a besoin de bouger, et ne se pose pas trop de questions.",
"type": "Fiction"
},
{
"nom": "Monkey D. Luffy",
"univers": "BD et animation",
"source": "One Piece",
"pourquoi": "Spontané et imprévisible, il fonce sans réfléchir vers l'aventure et entraîne tout son équipage dans son sillage.",
"type": "Fiction"
},
{
"nom": "Wrecker",
"univers": "Star Wars",
"source": "Star Wars : The Bad Batch",
"pourquoi": "Clone colossal du Bad Batch, il adore tout faire exploser et fonce avant de réfléchir.",
"type": "Fiction"
},
{
"nom": "Lard-Jon Omble (Greatjon)",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Impulsif et tonitruant, il y laisse deux doigts face au loup de Robb puis est le premier à proclamer celui-ci Roi du Nord.",
"type": "Fiction"
},
{
"nom": "Hulk",
"univers": "Marvel et DC",
"source": "Avengers (MCU)",
"pourquoi": "Pure force impulsive, il fonce et écrase tout sur son passage dès que la colère le prend, en parfait rhinocéros.",
"type": "Fiction"
},
{
"nom": "Drax le Destructeur",
"univers": "Marvel et DC",
"source": "Les Gardiens de la Galaxie (MCU)",
"pourquoi": "Littéral et impulsif, il appelle Ronan sur un coup de tête pour l'affronter et déclenche une catastrophe sans avoir rien prévu.",
"type": "Fiction"
}
],
"RG/b": [
{
"nom": "Friedrich Engels",
"univers": "Histoire",
"source": "Allemagne et Angleterre, XIXe siècle",
"pourquoi": "Compère fidèle de Marx, il agit avec la personne en qui il a toute confiance.",
"type": "Historique"
},
{
"nom": "Django Reinhardt",
"univers": "Histoire",
"source": "France, XXe siècle",
"pourquoi": "Génie de la guitare manouche, il pouvait manquer un concert pour aller pêcher, mais restait fidèle à la complicité musicale du Quintette du Hot Club de France.",
"type": "Historique"
},
{
"nom": "Sancho Panza",
"univers": "Littérature et mythologie",
"source": "Don Quichotte, M. de Cervantes",
"pourquoi": "Il suit son maître partout : avec un compagnon de confiance, on peut tout lui demander.",
"type": "Fiction"
},
{
"nom": "Mercutio",
"univers": "Littérature et mythologie",
"source": "Shakespeare, Roméo et Juliette",
"pourquoi": "Ami de Roméo, fantasque et moqueur, il improvise la tirade de la reine Mab et se bat pour l'honneur de son camarade sans autre enjeu.",
"type": "Fiction"
},
{
"nom": "Jesse Pinkman",
"univers": "Cinéma, séries et jeux",
"source": "Breaking Bad",
"pourquoi": "Jeune dissipé et attachant, il agit d'abord par loyauté envers ceux en qui il a confiance, bien plus que par ambition.",
"type": "Fiction"
},
{
"nom": "Pumbaa",
"univers": "Cinéma, séries et jeux",
"source": "Le Roi lion (Disney)",
"pourquoi": "Avec son ami Timon, il vit selon le précepte « Hakuna Matata », sans soucis ni ambition, entièrement disponible pour ses compagnons.",
"type": "Fiction"
},
{
"nom": "Capitaine Haddock",
"univers": "BD et animation",
"source": "Les Aventures de Tintin (Hergé)",
"pourquoi": "Bourru, colérique et fidèle, il suit Tintin dans toutes les aventures pour l'amitié, jamais pour la gloire ou la fortune.",
"type": "Fiction"
},
{
"nom": "Baze Malbus",
"univers": "Star Wars",
"source": "Rogue One",
"pourquoi": "Compagnon bourru et inséparable de Chirrut, il se bat pour lui et pour ses amis sans rien chercher d'autre.",
"type": "Fiction"
},
{
"nom": "Jadzia Dax",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Fidèle au serment de sang que son hôte précédent avait prêté avec trois guerriers klingons, elle les accompagne dans leur vengeance par pure loyauté.",
"type": "Fiction"
},
{
"nom": "Sirius Black",
"univers": "Harry Potter",
"source": "Harry Potter (tomes 3 à 5)",
"pourquoi": "Maraudeur insouciant qui a toujours préféré l'amitié et l'aventure à toute carrière, il ne supporte pas d'être enfermé loin de ceux qui comptent pour lui.",
"type": "Fiction"
},
{
"nom": "Thoros de Myr",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Prêtre rouge ivrogne, ancien compagnon de beuverie de Robert, il vit en frère d'armes de Béric et le ramène sans cesse à la vie.",
"type": "Fiction"
},
{
"nom": "Star-Lord (Peter Quill)",
"univers": "Marvel et DC",
"source": "Les Gardiens de la Galaxie (MCU)",
"pourquoi": "Il n'est heureux qu'avec sa bande de marginaux de confiance, et il est capable de défier Ronan en pleine bataille... à un concours de danse.",
"type": "Fiction"
}
],
"RW/u": [
{
"nom": "Le chevalier Bayard",
"univers": "Histoire",
"source": "France, XVe-XVIe siècles",
"pourquoi": "« Sans peur et sans reproche », il monte la garde et intervient quand il le faut.",
"type": "Historique"
},
{
"nom": "Léonidas Ier",
"univers": "Histoire",
"source": "Sparte, Ve siècle av. J.-C.",
"pourquoi": "À la tête de ses trois cents Spartiates, il tient le défilé des Thermopyles face à l'armée perse pour protéger la Grèce.",
"type": "Historique"
},
{
"nom": "Heimdall",
"univers": "Littérature et mythologie",
"source": "Mythologie nordique ; Edda",
"pourquoi": "Gardien du pont Bifröst qui entend pousser l'herbe et ne dort presque jamais, il veille sur Asgard et sonnera le cor Gjallarhorn au Ragnarök.",
"type": "Fiction"
},
{
"nom": "Master Chief",
"univers": "Cinéma, séries et jeux",
"source": "Halo (jeux vidéo)",
"pourquoi": "Super-soldat Spartan dévoué à la protection de l'humanité, il encaisse les combats les plus durs et intervient partout où il le faut.",
"type": "Fiction"
},
{
"nom": "Roronoa Zoro",
"univers": "BD et animation",
"source": "One Piece",
"pourquoi": "Bretteur au sens de l'orientation catastrophique, il protège l'équipage et encaisse les coups à la place de son capitaine.",
"type": "Fiction"
},
{
"nom": "Capitaine Rex",
"univers": "Star Wars",
"source": "Star Wars : The Clone Wars",
"pourquoi": "Capitaine clone loyal envers ses hommes, il est toujours en première ligne pour protéger la 501e.",
"type": "Fiction"
},
{
"nom": "Général Martok",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Vieux guerrier klingon, il tient deux ans dans un camp de prisonniers du Dominion puis repart au front défendre l'Empire.",
"type": "Fiction"
},
{
"nom": "Alastor Maugrey",
"univers": "Harry Potter",
"source": "Harry Potter (tomes 4 à 7)",
"pourquoi": "Couvert de cicatrices gagnées à arrêter des mages noirs, l'auror à l'œil magique n'a qu'une devise, « Vigilance constante », et monte la garde pour protéger les siens.",
"type": "Fiction"
},
{
"nom": "Boromir",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux, J. R. R. Tolkien",
"pourquoi": "Il protège son peuple de toute son énergie, quitte à s'y perdre.",
"type": "Fiction"
},
{
"nom": "Beregond",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Soldat de la Garde de la Citadelle, il abandonne son poste et tire l'épée dans la maison des Morts pour sauver Faramir du bûcher, guidé par son cœur plus que par le raisonnement.",
"type": "Fiction"
},
{
"nom": "Ver Gris",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Commandant des Immaculés, il protège Daenerys et ses sujets, formé à obéir et à encaisser les coups sans faillir.",
"type": "Fiction"
},
{
"nom": "Colossus",
"univers": "Marvel et DC",
"source": "Deadpool (2016)",
"pourquoi": "Grand gaillard au cœur simple, il applique le code des X-Men, encaisse les coups et cherche sans relâche à faire de Deadpool un vrai héros.",
"type": "Fiction"
}
],
"RW/b": [
{
"nom": "Jean Moulin",
"univers": "Histoire",
"source": "France, XXe siècle",
"pourquoi": "Il a servi la Résistance au péril de sa vie, jusqu'au sacrifice.",
"type": "Historique"
},
{
"nom": "Irena Sendler",
"univers": "Histoire",
"source": "Pologne, XXe siècle",
"pourquoi": "Elle fait sortir clandestinement quelque 2 500 enfants juifs du ghetto de Varsovie et, arrêtée et torturée par la Gestapo, ne livre aucun nom.",
"type": "Historique"
},
{
"nom": "Gavroche",
"univers": "Littérature et mythologie",
"source": "Victor Hugo, Les Misérables",
"pourquoi": "Gamin de Paris qui recueille deux petits dans l'éléphant de la Bastille, il va ramasser des cartouches sous les balles en chantant pour ravitailler la barricade.",
"type": "Fiction"
},
{
"nom": "Link",
"univers": "Cinéma, séries et jeux",
"source": "The Legend of Zelda (jeux vidéo)",
"pourquoi": "Héros silencieux qui risque sa vie à chaque aventure pour sauver Hyrule et sa princesse, sans jamais rechercher gloire ni récompense.",
"type": "Fiction"
},
{
"nom": "Mulan",
"univers": "BD et animation",
"source": "Mulan (Disney)",
"pourquoi": "Elle prend la place de son père à l'armée, au péril de sa vie, pour protéger sa famille et la Chine.",
"type": "Fiction"
},
{
"nom": "Luke Skywalker",
"univers": "Star Wars",
"source": "Star Wars, épisodes IV à VI",
"pourquoi": "Il se livre à l'Empire et refuse de combattre son père devant l'Empereur, risquant sa vie pour sauver ce qu'il reste de bon en lui.",
"type": "Fiction"
},
{
"nom": "Finn",
"univers": "Star Wars",
"source": "Star Wars, épisodes VII et VIII",
"pourquoi": "Ancien stormtrooper, il fonce sur Crait vers le canon du Premier Ordre, prêt à se sacrifier pour sauver la Résistance.",
"type": "Fiction"
},
{
"nom": "Capitaine Christopher Pike",
"univers": "Star Trek",
"source": "Star Trek : Strange New Worlds",
"pourquoi": "Connaissant l'accident qui l'attend, il choisit de ne pas s'y soustraire, car c'est ainsi que des cadets seront sauvés.",
"type": "Fiction"
},
{
"nom": "Harry Potter",
"univers": "Harry Potter",
"source": "Harry Potter (sept tomes)",
"pourquoi": "Toujours prêt à risquer sa vie pour sauver les autres, il se laisse piéger au Département des mystères précisément à cause de cette tendance que Hermione lui reproche.",
"type": "Fiction"
},
{
"nom": "Frodon Sacquet",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux, J. R. R. Tolkien",
"pourquoi": "Il porte le fardeau pour tous, à son propre détriment.",
"type": "Fiction"
},
{
"nom": "Húrin",
"univers": "Tolkien",
"source": "Le Silmarillion",
"pourquoi": "À la bataille des Larmes Innombrables, il tient l'arrière-garde jusqu'au dernier homme en criant « Le jour reviendra ! » pour permettre à Turgon de s'échapper.",
"type": "Fiction"
},
{
"nom": "Béric Dondarrion",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Chef de la Fraternité sans bannière, il revient maintes fois de la mort pour continuer de défendre les petites gens.",
"type": "Fiction"
},
{
"nom": "Spider-Man (Peter Parker)",
"univers": "Marvel et DC",
"source": "Spider-Man (comics ; films)",
"pourquoi": "Fidèle au principe selon lequel un grand pouvoir implique de grandes responsabilités, il sacrifie sans cesse sa vie privée et sa réussite pour protéger son quartier.",
"type": "Fiction"
}
],
"RW/g": [
{
"nom": "Lucie Aubrac",
"univers": "Histoire",
"source": "France, XXe siècle",
"pourquoi": "Résistante qui s'efface derrière la mission et lui consacre son temps, son intelligence et sa loyauté.",
"type": "Historique"
},
{
"nom": "Virginia Hall",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Agente alliée en France occupée malgré sa jambe artificielle, considérée par la Gestapo comme très dangereuse, elle refusa ensuite toute publicité.",
"type": "Historique"
},
{
"nom": "Noor Inayat Khan",
"univers": "Histoire",
"source": "Royaume-Uni / Inde, XXe siècle",
"pourquoi": "Opératrice radio du SOE à Paris en 1943, elle reste à son poste quand son réseau tombe, avant d'être capturée et exécutée à Dachau.",
"type": "Historique"
},
{
"nom": "George Smiley",
"univers": "Littérature et mythologie",
"source": "Romans de J. le Carré",
"pourquoi": "Agent discret pour qui seule compte la mission, jamais sa propre personne.",
"type": "Fiction"
},
{
"nom": "Michel Strogoff",
"univers": "Littérature et mythologie",
"source": "Jules Verne, Michel Strogoff",
"pourquoi": "Courrier du tsar entièrement voué à sa mission, il va jusqu'à renier sa propre mère à Omsk pour ne pas trahir son identité.",
"type": "Fiction"
},
{
"nom": "Jack Bauer",
"univers": "Cinéma, séries et jeux",
"source": "24 heures chrono",
"pourquoi": "Agent de la Cellule antiterroriste prêt à tout sacrifier — sa famille, sa santé, sa liberté — pour la mission, quitte à se faire de nombreux ennemis.",
"type": "Fiction"
},
{
"nom": "Marina Loiseau",
"univers": "Cinéma, séries et jeux",
"source": "Le Bureau des légendes",
"pourquoi": "Jeune clandestine envoyée en Iran, elle met sa vie personnelle entre parenthèses et se plie aux exigences de la mission au péril de sa sécurité.",
"type": "Fiction"
},
{
"nom": "Cassian Andor",
"univers": "Star Wars",
"source": "Rogue One",
"pourquoi": "Il avoue avoir commis des actes terribles pour la Rébellion depuis l'âge de six ans, s'effaçant entièrement derrière la cause.",
"type": "Fiction"
},
{
"nom": "Luthen Rael",
"univers": "Star Wars",
"source": "Andor",
"pourquoi": "Il explique avoir tout sacrifié, y compris sa conscience, pour « un lever de soleil » qu'il ne verra jamais.",
"type": "Fiction"
},
{
"nom": "Remata'Klan",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Ce Troisième jem'hadar conduit ses hommes à une attaque qu'il sait perdue, par obéissance absolue : « l'obéissance mène à la victoire ».",
"type": "Fiction"
},
{
"nom": "Jaqen H'ghar",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Homme sans visage, il s'efface derrière le Dieu Multiface jusqu'à changer de visage : « un homme n'a pas de nom ».",
"type": "Fiction"
},
{
"nom": "Black Widow (Natasha Romanoff)",
"univers": "Marvel et DC",
"source": "Avengers (MCU)",
"pourquoi": "Espionne caméléon, elle se fond dans chaque mission et finit par se sacrifier pour les Avengers, qu'elle considère comme sa seule famille.",
"type": "Fiction"
},
{
"nom": "Général Zod",
"univers": "Marvel et DC",
"source": "Man of Steel (2013)",
"pourquoi": "Il affirme n'exister que pour protéger Krypton, une mission pour laquelle il a été conçu et qu'il poursuit jusqu'à vouloir anéantir l'humanité.",
"type": "Fiction"
}
],
"GW/u": [
{
"nom": "Hiroo Onoda",
"univers": "Histoire",
"source": "Japon, XXe siècle",
"pourquoi": "Il continue à se battre dans la jungle philippine jusqu'en 1974 et ne dépose les armes que lorsque son ancien supérieur vient lui en donner l'ordre.",
"type": "Historique"
},
{
"nom": "Malabar (Boxer)",
"univers": "Littérature et mythologie",
"source": "La Ferme des animaux, G. Orwell",
"pourquoi": "« Je travaillerai plus dur » : il fait ce qu'il y a à faire pour que la ferme fonctionne.",
"type": "Fiction"
},
{
"nom": "Monsieur Collins",
"univers": "Littérature et mythologie",
"source": "Jane Austen, Orgueil et Préjugés",
"pourquoi": "Pasteur obséquieux qui épouse en tout les vues de sa protectrice Lady Catherine de Bourgh, il se marie parce qu'elle le lui a conseillé.",
"type": "Fiction"
},
{
"nom": "Gregory Goyle",
"univers": "Harry Potter",
"source": "Harry Potter (tomes 1 à 7)",
"pourquoi": "Il suit Drago Malefoy partout et fait ce qu'on attend de lui dans la bande sans jamais prendre la moindre initiative.",
"type": "Fiction"
},
{
"nom": "Hodor",
"univers": "Le Trône de fer",
"source": "Le Trône de fer, G. R. R. Martin",
"pourquoi": "Il épouse sa tâche sans discuter : on a besoin de gens comme lui.",
"type": "Fiction"
},
{
"nom": "Podrick Payne",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Écuyer discret et fidèle, il sert Tyrion puis Brienne en faisant simplement ce qu'on attend de lui.",
"type": "Fiction"
}
],
"GW/b": [
{
"nom": "Anne Sullivan",
"univers": "Histoire",
"source": "États-Unis, XIXe-XXe siècle",
"pourquoi": "Éducatrice d'Helen Keller, elle lui apprend le mot « eau » à la pompe et reste à ses côtés près de cinquante ans, s'effaçant derrière elle.",
"type": "Historique"
},
{
"nom": "Passepartout",
"univers": "Littérature et mythologie",
"source": "Jules Verne, Le Tour du monde en quatre-vingts jours",
"pourquoi": "Domestique dévoué et plein d'entrain, il accompagne Phileas Fogg dans toutes ses épreuves et se déguise pour arracher Mrs Aouda au bûcher.",
"type": "Fiction"
},
{
"nom": "Luigi",
"univers": "Cinéma, séries et jeux",
"source": "Super Mario (jeux vidéo)",
"pourquoi": "Éternel second derrière son frère, il est toujours à ses côtés, malgré ses peurs, et passe volontiers après lui.",
"type": "Fiction"
},
{
"nom": "François Pignon",
"univers": "Cinéma, séries et jeux",
"source": "Le Dîner de cons (Francis Veber)",
"pourquoi": "Plein de bonne volonté, il se met en quatre pour aider Pierre Brochant, quitte à s'oublier complètement… et à tout faire capoter.",
"type": "Fiction"
},
{
"nom": "Porcinet",
"univers": "BD et animation",
"source": "Winnie l'ourson (Disney)",
"pourquoi": "Petit et craintif, il est toujours là pour ses amis de la Forêt des Rêves Bleus et passe volontiers après eux.",
"type": "Fiction"
},
{
"nom": "Chewbacca",
"univers": "Star Wars",
"source": "Star Wars",
"pourquoi": "Camarade indéfectible, il ne quitte jamais ses amis quand ça tourne mal.",
"type": "Fiction"
},
{
"nom": "Rom",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Frère dévoué et père aimant, ce Ferengi sans le moindre sens des affaires est toujours là pour Nog et pour les siens, quitte à passer après eux.",
"type": "Fiction"
},
{
"nom": "Samsagace Gamegie",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux, J. R. R. Tolkien",
"pourquoi": "Présent dans les bons comme dans les pires moments, toujours attentif et secourable.",
"type": "Fiction"
},
{
"nom": "Vère (Gilly)",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Fuyant le donjon de Craster avec son bébé, elle reste aux côtés de Sam dans toutes les épreuves, sans rien demander pour elle.",
"type": "Fiction"
},
{
"nom": "Groot",
"univers": "Marvel et DC",
"source": "Les Gardiens de la Galaxie (MCU)",
"pourquoi": "Il n'a jamais rien demandé pour lui et forme un cocon de branches autour de ses amis pour les protéger, au prix de sa propre vie.",
"type": "Fiction"
},
{
"nom": "Ned Leeds",
"univers": "Marvel et DC",
"source": "Spider-Man : Homecoming (MCU)",
"pourquoi": "Meilleur ami de Peter Parker, il fait tout pour être son « gars au fauteuil » et l'aider, sans rien attendre en retour.",
"type": "Fiction"
}
],
"GW/r": [
{
"nom": "Le Chien",
"univers": "Littérature et mythologie",
"source": "La Fontaine, Le Loup et le Chien",
"pourquoi": "Gras et bien soigné, il vante au loup les avantages de « flatter ceux du logis, à son maître complaire », quitte à porter le collier.",
"type": "Fiction"
},
{
"nom": "Pam Beesly",
"univers": "Cinéma, séries et jeux",
"source": "The Office (version américaine)",
"pourquoi": "Réceptionniste serviable et appréciée de tous, elle fait ce qu'on lui demande sans se plaindre, au point que son patron abuse souvent de sa gentillesse.",
"type": "Fiction"
},
{
"nom": "Waylon Smithers",
"univers": "BD et animation",
"source": "Les Simpson",
"pourquoi": "Il fait tout ce qu'on lui demande avec empressement, et en tire sa fierté.",
"type": "Fiction"
},
{
"nom": "Nestor",
"univers": "BD et animation",
"source": "Les Aventures de Tintin, Hergé",
"pourquoi": "Majordome dévoué qui exécute chaque demande sans se plaindre.",
"type": "Fiction"
},
{
"nom": "Kronk",
"univers": "BD et animation",
"source": "Kuzco, l'empereur mégalo (Disney)",
"pourquoi": "Homme de main serviable d'Yzma, il exécute chaque ordre avec empressement et elle ne se prive pas d'en abuser.",
"type": "Fiction"
},
{
"nom": "Bib Fortuna",
"univers": "Star Wars",
"source": "Star Wars, épisode VI",
"pourquoi": "Majordome servile de Jabba, il exécute ses ordres avec empressement et profite de sa position auprès du maître du palais.",
"type": "Fiction"
},
{
"nom": "Winky",
"univers": "Harry Potter",
"source": "Harry Potter et la Coupe de feu",
"pourquoi": "Elfe de maison dévouée corps et âme à la famille Croupton, elle obéit à tout avec empressement et sombre dans le désespoir quand son maître la congédie injustement.",
"type": "Fiction"
},
{
"nom": "Happy Hogan",
"univers": "Marvel et DC",
"source": "Iron Man ; Spider-Man : Homecoming (MCU)",
"pourquoi": "Chauffeur puis chef de la sécurité de Tony Stark, il accomplit tout ce qu'on lui confie, jusqu'à servir de baby-sitter à Peter Parker, et en tire une vraie fierté.",
"type": "Fiction"
}
],
"GU/w": [
{
"nom": "Diogène",
"univers": "Histoire",
"source": "Grèce antique",
"pourquoi": "Il vit selon ses propres critères et n'a que faire du regard des autres, même d'Alexandre.",
"type": "Historique"
},
{
"nom": "Jean-Paul Sartre",
"univers": "Histoire",
"source": "France, XXe siècle",
"pourquoi": "Il refuse le prix Nobel de littérature en 1964 comme il avait refusé la Légion d'honneur, ne voulant pas se laisser « transformer en institution ».",
"type": "Historique"
},
{
"nom": "Sherlock Holmes",
"univers": "Littérature et mythologie",
"source": "Romans d'A. Conan Doyle",
"pourquoi": "Il travaille à ses conditions et décline sans état d'âme ce qui ne l'intéresse pas.",
"type": "Fiction"
},
{
"nom": "Alceste",
"univers": "Littérature et mythologie",
"source": "Molière, Le Misanthrope",
"pourquoi": "Il refuse les compromis mondains, exige qu'on soit sincère et préfère fuir dans un « désert » plutôt que de se plier aux usages de la société.",
"type": "Fiction"
},
{
"nom": "Ron Swanson",
"univers": "Cinéma, séries et jeux",
"source": "Parks and Recreation",
"pourquoi": "Directeur des parcs farouchement indépendant qui méprise l'administration, il vit selon ses propres règles et décline tout ce qui ne lui convient pas.",
"type": "Fiction"
},
{
"nom": "Shrek",
"univers": "Cinéma, séries et jeux",
"source": "Shrek (DreamWorks)",
"pourquoi": "Ogre qui ne demande qu'à vivre seul dans son marais, il se moque du regard des autres et n'accepte de s'engager qu'à ses conditions.",
"type": "Fiction"
},
{
"nom": "Ahsoka Tano",
"univers": "Star Wars",
"source": "Star Wars : The Clone Wars ; Rebels",
"pourquoi": "Ayant quitté l'Ordre Jedi, elle déclare « Je ne suis pas Jedi » et ne s'engage que selon ses propres critères.",
"type": "Fiction"
},
{
"nom": "Abelforth Dumbledore",
"univers": "Harry Potter",
"source": "Harry Potter et les Reliques de la Mort",
"pourquoi": "Retiré dans son pub de la Tête de Sanglier avec ses chèvres, il refuse d'abord de s'engager dans la guerre et conseille à Harry d'abandonner, n'agissant que selon ses propres critères.",
"type": "Fiction"
},
{
"nom": "Docteur Manhattan",
"univers": "Marvel et DC",
"source": "Watchmen (comics DC ; film 2009)",
"pourquoi": "Devenu presque omnipotent, il se détache de l'humanité au point de s'exiler sur Mars et ne s'engage que selon ses propres critères.",
"type": "Fiction"
},
{
"nom": "Rorschach",
"univers": "Marvel et DC",
"source": "Watchmen (comics DC ; film 2009)",
"pourquoi": "Justicier intransigeant qui refuse tout compromis, même face à l'apocalypse, il juge le monde selon son seul code moral.",
"type": "Fiction"
}
],
"GU/b": [
{
"nom": "Socrate",
"univers": "Histoire",
"source": "Athènes, Ve siècle av. J.-C.",
"pourquoi": "Il cherche à voir le monde tel qu'il est et guide les autres sans rien demander en retour.",
"type": "Historique"
},
{
"nom": "Épictète",
"univers": "Histoire",
"source": "Grèce / Rome, Ier-IIe siècle",
"pourquoi": "Ancien esclave devenu maître stoïcien, il enseigne à distinguer ce qui dépend de nous de ce qui n'en dépend pas, dans une vie d'une grande simplicité.",
"type": "Historique"
},
{
"nom": "Tirésias",
"univers": "Littérature et mythologie",
"source": "Mythologie grecque ; Sophocle, Œdipe roi ; Homère, Odyssée",
"pourquoi": "Devin aveugle à la vie austère, il éclaire Œdipe sur la vérité et guide Ulysse aux Enfers sans rien attendre en retour.",
"type": "Fiction"
},
{
"nom": "Monsieur Miyagi",
"univers": "Cinéma, séries et jeux",
"source": "Karaté Kid",
"pourquoi": "Maître discret à la vie modeste, il transmet son art et sa sagesse à Daniel avec patience, à travers des exercices comme « Wax on, wax off ».",
"type": "Fiction"
},
{
"nom": "Rafiki",
"univers": "BD et animation",
"source": "Le Roi lion (Disney)",
"pourquoi": "Vieux sage mandrill, il guide Simba en l'aidant à voir la vérité sur lui-même plutôt qu'en lui dictant sa conduite.",
"type": "Fiction"
},
{
"nom": "Maître Yoda",
"univers": "Star Wars",
"source": "Star Wars",
"pourquoi": "Il livre son expérience sans compter à ceux qui viennent le chercher.",
"type": "Fiction"
},
{
"nom": "Chirrut Îmwe",
"univers": "Star Wars",
"source": "Rogue One",
"pourquoi": "Moine aveugle qui répète « Je suis un avec la Force », il guide les autres avec calme et lucidité et ne veut rien posséder.",
"type": "Fiction"
},
{
"nom": "Guinan",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation",
"pourquoi": "Barmaid du Ten Forward, elle écoute et guide l'équipage par des conseils détachés, sans jamais chercher de rôle officiel.",
"type": "Fiction"
},
{
"nom": "Albus Dumbledore",
"univers": "Harry Potter",
"source": "Harry Potter (sept tomes)",
"pourquoi": "Il a refusé à plusieurs reprises le poste de ministre de la Magie pour rester à Poudlard et guider les élèves, préférant la sagesse au pouvoir.",
"type": "Fiction"
},
{
"nom": "Galadriel",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Quand Frodon lui offre l'Anneau, elle refuse le pouvoir en déclarant qu'elle « diminuera », partira dans l'Ouest « et restera Galadriel ».",
"type": "Fiction"
},
{
"nom": "Syrio Forel",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Ancien Premier Épée de Braavos, il apprend à Arya à regarder pour voir vraiment, et lui lègue sa leçon : « pas aujourd'hui ».",
"type": "Fiction"
},
{
"nom": "L'Ancien",
"univers": "Marvel et DC",
"source": "Doctor Strange (MCU, 2016)",
"pourquoi": "Sorcière suprême humble et lucide, elle guide Stephen Strange en lui apprenant à voir au-delà de son ego, sans rien chercher pour elle-même.",
"type": "Fiction"
}
],
"GU/r": [
{
"nom": "Marc Aurèle",
"univers": "Histoire",
"source": "Rome, IIe siècle",
"pourquoi": "Empereur stoïcien qui observe avant d'agir et ne se laisse pas emporter.",
"type": "Historique"
},
{
"nom": "Fabius Maximus (Cunctator)",
"univers": "Histoire",
"source": "Rome, IIIe siècle av. J.-C.",
"pourquoi": "Surnommé « le Temporisateur », il refuse la bataille contre Hannibal et l'use par une attente patiente, insensible aux moqueries.",
"type": "Historique"
},
{
"nom": "Athos",
"univers": "Littérature et mythologie",
"source": "Alexandre Dumas, Les Trois Mousquetaires",
"pourquoi": "Gentilhomme mélancolique et réservé, il ne s'enthousiasme pour rien mais sa sagesse et son sang-froid font de lui le recours de ses compagnons.",
"type": "Fiction"
},
{
"nom": "Jef Costello",
"univers": "Cinéma, séries et jeux",
"source": "Le Samouraï (Jean-Pierre Melville)",
"pourquoi": "Tueur à gages solitaire et impassible, il observe et prépare chaque geste avec un sang-froid absolu, sans jamais montrer la moindre émotion.",
"type": "Fiction"
},
{
"nom": "Lucky Luke",
"univers": "BD et animation",
"source": "Lucky Luke (Morris)",
"pourquoi": "Cow-boy flegmatique qui tire plus vite que son ombre, il observe calmement avant d'agir et reste imperturbable en toute situation.",
"type": "Fiction"
},
{
"nom": "Kuiil",
"univers": "Star Wars",
"source": "The Mandalorian",
"pourquoi": "Ugnaught qui a racheté sa liberté et vit seul sur Arvala-7, il agit posément, seulement quand il sait pouvoir réussir, et clôt la discussion par « J'ai parlé ».",
"type": "Fiction"
},
{
"nom": "Spock",
"univers": "Star Trek",
"source": "Star Trek",
"pourquoi": "Imperturbable, il analyse avant d'agir et n'entreprend que ce qu'il sait pouvoir réussir.",
"type": "Fiction"
},
{
"nom": "T'Pol",
"univers": "Star Trek",
"source": "Star Trek : Enterprise",
"pourquoi": "Officier scientifique vulcain, elle observe et freine sans cesse l'empressement des humains à se lancer dans l'inconnu.",
"type": "Fiction"
},
{
"nom": "Sylvebarbe",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Le vieil Ent répète qu'il ne faut pas être « hâtif » et laisse l'Ent-moot délibérer trois jours avant de se décider à agir contre Isengard.",
"type": "Fiction"
},
{
"nom": "Bran Stark",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Devenu la Corneille à trois yeux, il observe passé et présent avec un détachement presque dénué d'émotion avant d'intervenir.",
"type": "Fiction"
},
{
"nom": "Vision",
"univers": "Marvel et DC",
"source": "Avengers : L'Ère d'Ultron ; Captain America : Civil War (MCU)",
"pourquoi": "Calme et réfléchi, il ne s'engage qu'après avoir pesé les faits, comme lorsqu'il chiffre la hausse des catastrophes depuis l'apparition des Avengers pour justifier les accords de Sokovie.",
"type": "Fiction"
}
],
"WU.g": [
{
"nom": "Inspecteur Lestrade",
"univers": "Littérature et mythologie",
"source": "Sherlock Holmes, A. Conan Doyle",
"pourquoi": "Policier qui s'en tient au cadre et aux procédures de Scotland Yard.",
"type": "Fiction"
},
{
"nom": "Charles Carson",
"univers": "Cinéma, séries et jeux",
"source": "Downton Abbey",
"pourquoi": "Majordome qui fait respecter scrupuleusement les traditions de la maison, il accueille avec réticence les changements apportés par l'époque.",
"type": "Fiction"
},
{
"nom": "Seymour Skinner",
"univers": "BD et animation",
"source": "Les Simpson",
"pourquoi": "Proviseur à cheval sur le règlement de l'école, il veille avec raideur à ce que tout se passe comme prescrit.",
"type": "Fiction"
},
{
"nom": "L'Armurière",
"univers": "Star Wars",
"source": "The Mandalorian",
"pourquoi": "Gardienne de la tradition mandalorienne, elle enseigne et fait respecter le Credo, rappelant sans relâche « C'est la Voie ».",
"type": "Fiction"
},
{
"nom": "Odo",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Chef de la sécurité obsédé par l'ordre, il traque la moindre infraction de Quark et vit très mal que Starfleet lui impose ses propres méthodes.",
"type": "Fiction"
},
{
"nom": "Minerva McGonagall",
"univers": "Harry Potter",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Elle enseigne les règles, les fait appliquer et sait y mettre la souplesse nécessaire.",
"type": "Fiction"
},
{
"nom": "Ser Rodrik Cassel",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Maître d'armes de Winterfell, il forme les garçons Stark à l'épée et à l'arc selon les usages éprouvés.",
"type": "Fiction"
},
{
"nom": "Wong",
"univers": "Marvel et DC",
"source": "Doctor Strange (MCU, 2016)",
"pourquoi": "Gardien de la bibliothèque de Kamar-Taj, il veille avec sérieux au respect des règles d'emprunt et d'accès aux textes interdits.",
"type": "Fiction"
}
],
"WU.b": [
{
"nom": "Pierre Larousse",
"univers": "Histoire",
"source": "France, XIXe siècle",
"pourquoi": "Son dictionnaire fait autorité sur les faits, et il n'a cessé d'élargir ses propres connaissances.",
"type": "Historique"
},
{
"nom": "Samuel Johnson",
"univers": "Histoire",
"source": "Angleterre, XVIIIe siècle",
"pourquoi": "Auteur presque seul du premier grand dictionnaire anglais (1755), il tranchait sur tout et ses sentences, notées par Boswell, faisaient autorité.",
"type": "Historique"
},
{
"nom": "Mycroft Holmes",
"univers": "Littérature et mythologie",
"source": "Sherlock Holmes, A. Conan Doyle",
"pourquoi": "La référence du gouvernement britannique : tout le savoir utile passe par lui.",
"type": "Fiction"
},
{
"nom": "Mímir",
"univers": "Littérature et mythologie",
"source": "Mythologie nordique ; Edda",
"pourquoi": "Gardien du puits de la sagesse, il est si savant qu'Odin consulte sa tête conservée pour obtenir des conseils incontestables.",
"type": "Fiction"
},
{
"nom": "Ross Geller",
"univers": "Cinéma, séries et jeux",
"source": "Friends",
"pourquoi": "Paléontologue qui corrige tout le monde et étale son savoir, il n'en démord jamais d'avoir raison (« On faisait une pause ! »).",
"type": "Fiction"
},
{
"nom": "Le Schtroumpf à lunettes",
"univers": "BD et animation",
"source": "Les Schtroumpfs (Peyo)",
"pourquoi": "Il donne son avis sur tout en citant le Grand Schtroumpf, persuadé d'avoir toujours raison.",
"type": "Fiction"
},
{
"nom": "Tech",
"univers": "Star Wars",
"source": "Star Wars : The Bad Batch",
"pourquoi": "Clone spécialiste du Bad Batch, il cite sans arrêt probabilités et données techniques pour corriger ses camarades, et a généralement raison.",
"type": "Fiction"
}
],
"WU.r": [
{
"nom": "Louis Braille",
"univers": "Histoire",
"source": "France, XIXe siècle",
"pourquoi": "Il améliore une méthode existante pour rendre la vie des autres beaucoup plus simple.",
"type": "Historique"
},
{
"nom": "Auguste Escoffier",
"univers": "Histoire",
"source": "France, XIXe-XXe siècle",
"pourquoi": "Il organise la brigade de cuisine et simplifie la grande cuisine dans son « Guide culinaire », rendant le travail des cuisiniers plus efficace.",
"type": "Historique"
},
{
"nom": "Mary Poppins",
"univers": "Littérature et mythologie",
"source": "Mary Poppins, P. L. Travers",
"pourquoi": "Elle peaufine chaque détail de la vie de la maison pour la rendre plus simple et plus joyeuse.",
"type": "Fiction"
},
{
"nom": "Le Schtroumpf bricoleur",
"univers": "BD et animation",
"source": "Les Schtroumpfs (Peyo)",
"pourquoi": "Il construit et répare tout ce dont le village a besoin, toujours prêt à améliorer un outil pour faciliter la vie des autres.",
"type": "Fiction"
},
{
"nom": "Geordi La Forge",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation",
"pourquoi": "Ingénieur en chef inventif, il améliore sans cesse les systèmes de l'Enterprise et trouve la solution technique qui tire l'équipage d'affaire.",
"type": "Fiction"
},
{
"nom": "Lucius Fox",
"univers": "Marvel et DC",
"source": "Trilogie The Dark Knight",
"pourquoi": "Ingénieur de Wayne Enterprises, il perfectionne sans cesse l'équipement de Batman, comme ce costume allégé qui lui permet de tourner la tête.",
"type": "Fiction"
}
],
"WB.g": [
{
"nom": "Louis XIV",
"univers": "Histoire",
"source": "France, XVIIe-XVIIIe siècle",
"pourquoi": "Le Roi-Soleil incarne la monarchie jusque dans l'étiquette de Versailles, où chaque geste de sa journée devient une cérémonie.",
"type": "Historique"
},
{
"nom": "Le roi Arthur",
"univers": "Littérature et mythologie",
"source": "Légende arthurienne",
"pourquoi": "Il incarne son royaume et la Table ronde, et porte ce rang avec dignité.",
"type": "Fiction"
},
{
"nom": "Charlemagne",
"univers": "Littérature et mythologie",
"source": "La Chanson de Roland",
"pourquoi": "Empereur « à la barbe fleurie » qui trône en majesté au milieu de ses barons, il incarne la chrétienté et l'honneur de son peuple.",
"type": "Fiction"
},
{
"nom": "Robert Crawley, comte de Grantham",
"univers": "Cinéma, séries et jeux",
"source": "Downton Abbey (série)",
"pourquoi": "Très honoré de représenter son domaine et les siens, il se veut à la hauteur de son rang.",
"type": "Fiction"
},
{
"nom": "Godefroy de Montmirail",
"univers": "Cinéma, séries et jeux",
"source": "Les Visiteurs (Jean-Marie Poiré)",
"pourquoi": "Chevalier fier de sa lignée et de son titre, il veut se montrer en toutes circonstances à la hauteur de son rang, même projeté au XXe siècle.",
"type": "Fiction"
},
{
"nom": "Abraracourcix",
"univers": "BD et animation",
"source": "Astérix (Goscinny et Uderzo)",
"pourquoi": "Porté fièrement sur son bouclier, le chef du village incarne son rang et tient au prestige que lui confère sa fonction.",
"type": "Fiction"
},
{
"nom": "Mufasa",
"univers": "BD et animation",
"source": "Le Roi lion (Disney)",
"pourquoi": "Roi respecté de la Terre des lions, il incarne avec dignité son rang et le « cycle de la vie » qui unit tout son royaume.",
"type": "Fiction"
},
{
"nom": "Boss Nass",
"univers": "Star Wars",
"source": "Star Wars, épisode I",
"pourquoi": "Chef des Gungans plein de faste et d'orgueil, il incarne son rang et la fierté de son peuple.",
"type": "Fiction"
},
{
"nom": "Lucius Malefoy",
"univers": "Harry Potter",
"source": "Harry Potter (tomes 2 à 7)",
"pourquoi": "Fier représentant d'une vieille lignée de sang-pur, membre du conseil d'administration de Poudlard, il soigne son prestige jusque dans son manoir orné de paons blancs.",
"type": "Fiction"
},
{
"nom": "Thorin Écu-de-Chêne",
"univers": "Tolkien",
"source": "Le Hobbit",
"pourquoi": "Héritier de Durin, il mène sa compagnie à Erebor pour redevenir Roi sous la Montagne et tient avant tout au rang et au trésor de sa lignée.",
"type": "Fiction"
},
{
"nom": "Mace Tyrell",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Seigneur de Hautjardin très fier de ses titres, il savoure chaque honneur que lui vaut l'alliance de sa maison avec la couronne.",
"type": "Fiction"
},
{
"nom": "T'Challa (Black Panther)",
"univers": "Marvel et DC",
"source": "Black Panther (MCU, 2018)",
"pourquoi": "Roi du Wakanda, il porte la dignité de son rang devant le monde entier et se veut digne de ses ancêtres et de son peuple.",
"type": "Fiction"
}
],
"WB.u": [
{
"nom": "Jean-Baptiste Colbert",
"univers": "Histoire",
"source": "France, XVIIe siècle",
"pourquoi": "Il répond de chaque rouage de l'administration royale et fait appliquer ses décisions.",
"type": "Historique"
},
{
"nom": "Baron Haussmann",
"univers": "Histoire",
"source": "France, XIXe siècle",
"pourquoi": "Préfet de la Seine, il transforme Paris en dix-sept ans en imposant ses percées, ses égouts et ses façades, sans céder aux résistances.",
"type": "Historique"
},
{
"nom": "Sir Humphrey Appleby",
"univers": "Cinéma, séries et jeux",
"source": "Yes Minister (série)",
"pourquoi": "Haut fonctionnaire qui maîtrise chaque rouage de la machine d'État.",
"type": "Fiction"
},
{
"nom": "Henri Duflot",
"univers": "Cinéma, séries et jeux",
"source": "Le Bureau des légendes",
"pourquoi": "Directeur du Bureau des légendes à la DGSE, il prend les décisions sur les clandestins et répond de chaque rouage du service, dont il défend la direction face à sa hiérarchie.",
"type": "Fiction"
},
{
"nom": "Général Hux",
"univers": "Star Wars",
"source": "Star Wars, épisodes VII à IX",
"pourquoi": "Officier qui dirige l'appareil militaire du Premier Ordre, il dispute sans cesse le leadership à Kylo Ren.",
"type": "Fiction"
},
{
"nom": "Capitaine Kathryn Janeway",
"univers": "Star Trek",
"source": "Star Trek : Voyager",
"pourquoi": "Elle décide seule de détruire le réseau du Pourvoyeur, puis réunit Maquis et Starfleet sous son commandement pour ramener tout le monde à la maison.",
"type": "Fiction"
},
{
"nom": "Cornelius Fudge",
"univers": "Harry Potter",
"source": "Harry Potter (tomes 1 à 6)",
"pourquoi": "Ministre de la Magie attaché à son fauteuil, il nie le retour de Voldemort parce qu'il est persuadé que Dumbledore cherche à prendre sa place.",
"type": "Fiction"
},
{
"nom": "Pepper Potts",
"univers": "Marvel et DC",
"source": "Iron Man 2 (MCU)",
"pourquoi": "Assistante devenue PDG de Stark Industries, elle prend les décisions, fait tourner l'entreprise et tient d'une main ferme tout ce que Tony néglige.",
"type": "Fiction"
}
],
"WB.r": [
{
"nom": "Georges Clemenceau",
"univers": "Histoire",
"source": "France, XIXe-XXe siècles",
"pourquoi": "« Le Tigre » veut des résultats tout de suite et tranche sans attendre l'unanimité.",
"type": "Historique"
},
{
"nom": "Margaret Thatcher",
"univers": "Histoire",
"source": "Royaume-Uni, XXe siècle",
"pourquoi": "Face aux appels à changer de cap, elle répond en 1980 : « The lady's not for turning » (« La dame ne fait pas demi-tour »).",
"type": "Historique"
},
{
"nom": "Agamemnon",
"univers": "Littérature et mythologie",
"source": "Homère, Iliade",
"pourquoi": "Roi des rois de l'armée achéenne, il tranche en s'emparant de Briséis et ne supporte pas qu'Achille conteste son autorité.",
"type": "Fiction"
},
{
"nom": "Miranda Priestly",
"univers": "Cinéma, séries et jeux",
"source": "Le Diable s'habille en Prada, L. Weisberger",
"pourquoi": "Elle tranche en un instant et délègue tout le reste.",
"type": "Fiction"
},
{
"nom": "Léodagan",
"univers": "Cinéma, séries et jeux",
"source": "Kaamelott",
"pourquoi": "Roi de Carmélide aux méthodes expéditives, il veut des résultats immédiats, tranche à la hache et supporte très mal la contradiction.",
"type": "Fiction"
},
{
"nom": "La Reine de cœur",
"univers": "BD et animation",
"source": "Alice au pays des merveilles (Disney)",
"pourquoi": "Elle tranche tout d'un « Qu'on lui coupe la tête ! » et ne supporte pas la moindre contestation.",
"type": "Fiction"
},
{
"nom": "Dark Vador",
"univers": "Star Wars",
"source": "Star Wars, épisodes IV à VI",
"pourquoi": "Il étrangle les officiers qui échouent et impose ses décisions sur-le-champ : « J'ai modifié notre accord, priez pour que je ne le modifie pas davantage ».",
"type": "Fiction"
},
{
"nom": "Capitaine Edward Jellico",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation",
"pourquoi": "À peine arrivé, il réorganise les quarts et les méthodes de l'Enterprise et exige d'être obéi sans discussion, au grand dam de Riker.",
"type": "Fiction"
},
{
"nom": "Rufus Scrimgeour",
"univers": "Harry Potter",
"source": "Harry Potter et le Prince de Sang-Mêlé",
"pourquoi": "Nouveau ministre pressé de montrer des résultats, il fait arrêter Stan Rocade sans preuve sérieuse et veut faire de Harry l'emblème de sa politique.",
"type": "Fiction"
},
{
"nom": "Robb Stark",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Le Jeune Loup tranche vite et seul, jusqu'à décapiter lord Karstark contre l'avis de ses conseillers.",
"type": "Fiction"
},
{
"nom": "Nick Fury",
"univers": "Marvel et DC",
"source": "Avengers (MCU)",
"pourquoi": "Directeur du S.H.I.E.L.D., il tranche vite, réunit l'équipe sans attendre l'unanimité et n'aime pas qu'on conteste ses ordres une fois le cap fixé.",
"type": "Fiction"
},
{
"nom": "Amanda Waller",
"univers": "Marvel et DC",
"source": "Suicide Squad (2016)",
"pourquoi": "Elle veut des résultats immédiats et tient son équipe de criminels grâce à une bombe implantée dans leur cou, sans tolérer aucune contestation.",
"type": "Fiction"
}
],
"UB.g": [
{
"nom": "Niccolò Paganini",
"univers": "Histoire",
"source": "Italie, XVIIIe-XIXe siècles",
"pourquoi": "Un virtuose dont la maîtrise stupéfiait le public.",
"type": "Historique"
},
{
"nom": "Franz Liszt",
"univers": "Histoire",
"source": "Hongrie, XIXe siècle",
"pourquoi": "Pianiste prodige qui invente le récital en solo, il déclenche une « Lisztomanie » où le public s'arrache ses gants et ses mèches.",
"type": "Historique"
},
{
"nom": "Arachné (mythologie)",
"univers": "Littérature et mythologie",
"source": "Ovide, Les Métamorphoses",
"pourquoi": "Tisserande si habile qu'on vient de loin admirer son ouvrage, elle refuse d'en devoir le mérite à Athéna et la défie en concours.",
"type": "Fiction"
},
{
"nom": "Beth Harmon",
"univers": "Cinéma, séries et jeux",
"source": "Le Jeu de la dame, W. Tevis",
"pourquoi": "Ses compétences aux échecs impressionnent tous ses adversaires.",
"type": "Fiction"
},
{
"nom": "Patrick Jane",
"univers": "Cinéma, séries et jeux",
"source": "Mentalist",
"pourquoi": "Ancien faux médium devenu consultant, il résout les enquêtes avec un brio qu'il adore exhiber devant ses collègues.",
"type": "Fiction"
},
{
"nom": "Syndrome",
"univers": "BD et animation",
"source": "Les Indestructibles (Pixar)",
"pourquoi": "Inventeur génial qui se fabrique des super-pouvoirs technologiques, il ne vit que pour être enfin admiré comme un héros.",
"type": "Fiction"
},
{
"nom": "Comte Dooku",
"univers": "Star Wars",
"source": "Star Wars, épisode II ; The Clone Wars",
"pourquoi": "Aristocrate et escrimeur d'une élégance réputée, il aime se savoir admiré pour sa maîtrise du sabre et de la Force.",
"type": "Fiction"
},
{
"nom": "Le Docteur (hologramme médical d'urgence)",
"univers": "Star Trek",
"source": "Star Trek : Voyager",
"pourquoi": "Médecin brillant, il réclame sans cesse la reconnaissance de son talent, chante l'opéra et écrit même un holoroman à sa propre gloire.",
"type": "Fiction"
},
{
"nom": "L'Homme-Mystère (Edward Nygma)",
"univers": "Marvel et DC",
"source": "Batman (comics DC ; Batman Forever ; The Batman)",
"pourquoi": "Obsédé par la reconnaissance de son génie, il sème des énigmes pour que le monde admire son intelligence.",
"type": "Fiction"
}
],
"UB.w": [
{
"nom": "Jean-François Champollion",
"univers": "Histoire",
"source": "France, XIXe siècle",
"pourquoi": "Il déchiffre les hiéroglyphes étape par étape, avec une endurance intellectuelle hors du commun.",
"type": "Historique"
},
{
"nom": "Émilie du Châtelet",
"univers": "Histoire",
"source": "France, XVIIIe siècle",
"pourquoi": "Elle traduit et commente les « Principia » de Newton en travaillant des nuits entières, enceinte, et achève l'ouvrage peu avant sa mort.",
"type": "Historique"
},
{
"nom": "Commissaire Maigret",
"univers": "Littérature et mythologie",
"source": "Romans de G. Simenon",
"pourquoi": "Il avance pas à pas, avec méthode, jusqu'à la solution.",
"type": "Fiction"
},
{
"nom": "Impey Barbicane",
"univers": "Littérature et mythologie",
"source": "Jules Verne, De la Terre à la Lune",
"pourquoi": "Président du Gun-Club, il planifie méthodiquement le projet lunaire, des calculs de trajectoire jusqu'à la fonte de la Columbiad.",
"type": "Fiction"
},
{
"nom": "Le Professeur",
"univers": "Cinéma, séries et jeux",
"source": "La casa de papel",
"pourquoi": "Il prépare pendant des années le casse de la Fabrique nationale de la monnaie, étape par étape, et dirige l'équipe avec une endurance intellectuelle hors norme.",
"type": "Fiction"
},
{
"nom": "Conan Edogawa",
"univers": "BD et animation",
"source": "Détective Conan",
"pourquoi": "Enfermé dans un corps d'enfant, il résout méthodiquement chaque affaire pour la police sans jamais s'accorder de repos.",
"type": "Fiction"
},
{
"nom": "Dedra Meero",
"univers": "Star Wars",
"source": "Andor",
"pourquoi": "Superviseuse du Bureau de la sécurité impériale, elle croise patiemment les données pour remonter jusqu'à « Axis », travaillant tard et sans relâche.",
"type": "Fiction"
}
],
"UB.r": [
{
"nom": "Harry Houdini",
"univers": "Histoire",
"source": "États-Unis, XIXe-XXe siècles",
"pourquoi": "Chaque évasion était un défi relevé devant un public impressionné.",
"type": "Historique"
},
{
"nom": "Bobby Fischer",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "En 1972 à Reykjavik, il bat Spassky pour le titre mondial après avoir multiplié les exigences et menacé de ne pas jouer.",
"type": "Historique"
},
{
"nom": "Persée",
"univers": "Littérature et mythologie",
"source": "Mythologie grecque",
"pourquoi": "Il relève le défi insensé de rapporter la tête de Méduse et en vient à bout en ne la regardant que dans le reflet de son bouclier.",
"type": "Fiction"
},
{
"nom": "Ethan Hunt",
"univers": "Cinéma, séries et jeux",
"source": "Mission impossible (films)",
"pourquoi": "Il relève les défis réputés impossibles et impressionne par ses résultats.",
"type": "Fiction"
},
{
"nom": "Lisbeth Salander",
"univers": "Cinéma, séries et jeux",
"source": "Millénium : Les hommes qui n'aimaient pas les femmes (films)",
"pourquoi": "Hackeuse surdouée et peu coopérative, elle relève les défis les plus ardus avec des résultats qui impressionnent.",
"type": "Fiction"
},
{
"nom": "Sasuke Uchiha",
"univers": "BD et animation",
"source": "Naruto",
"pourquoi": "Prodige du clan Uchiha, il relève chaque défi pour gagner en puissance et préfère avancer seul que coopérer.",
"type": "Fiction"
},
{
"nom": "Crosshair",
"univers": "Star Wars",
"source": "Star Wars : The Bad Batch",
"pourquoi": "Tireur d'élite au talent impressionnant, il se désolidarise du Bad Batch pour servir l'Empire, peu enclin à coopérer.",
"type": "Fiction"
}
],
"UR.g": [
{
"nom": "Alexander von Humboldt",
"univers": "Histoire",
"source": "Allemagne, XVIIIe-XIXe siècles",
"pourquoi": "Il découvre, explore et cartographie des régions entières, prenant les risques qu'il faut.",
"type": "Historique"
},
{
"nom": "Alexandra David-Néel",
"univers": "Histoire",
"source": "France, XXe siècle",
"pourquoi": "Déguisée en mendiante pèlerine, elle entre en 1924 à Lhassa, alors interdite aux étrangers, première Occidentale à y parvenir.",
"type": "Historique"
},
{
"nom": "Professeur Lidenbrock",
"univers": "Littérature et mythologie",
"source": "Voyage au centre de la Terre, J. Verne",
"pourquoi": "Il s'engage en terres inconnues pour découvrir ce que personne n'a vu.",
"type": "Fiction"
},
{
"nom": "Odin",
"univers": "Littérature et mythologie",
"source": "Mythologie nordique ; Edda",
"pourquoi": "Dieu voyageur avide de savoir, il sacrifie un œil au puits de Mímir et reste pendu neuf nuits à l'arbre Yggdrasil pour découvrir les runes.",
"type": "Fiction"
},
{
"nom": "Nathan Drake",
"univers": "Cinéma, séries et jeux",
"source": "Uncharted (jeux vidéo)",
"pourquoi": "Chasseur de trésors passionné d'histoire, il suit les traces de Francis Drake dans des contrées oubliées en prenant des risques qui, à ses yeux, en valent la peine.",
"type": "Fiction"
},
{
"nom": "Milo Thatch",
"univers": "BD et animation",
"source": "Atlantide, l'empire perdu (Disney)",
"pourquoi": "Linguiste passionné, il part en expédition vers l'Atlantide en déchiffrant sa langue et ses cartes, au mépris des risques.",
"type": "Fiction"
},
{
"nom": "Docteur Julian Bashir",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Jeune médecin surdoué, il réclame un poste aux confins pour pratiquer une « médecine de la frontière » et s'expose volontiers au danger.",
"type": "Fiction"
},
{
"nom": "Norbert Dragonneau",
"univers": "Harry Potter",
"source": "Les Animaux fantastiques (film, 2016) ; Vie et habitat des animaux fantastiques",
"pourquoi": "Magizoologiste qui parcourt le monde pour étudier et documenter les créatures magiques, il prend des risques considérables pour elles et place leur sauvegarde avant toute autre priorité.",
"type": "Fiction"
},
{
"nom": "Jane Foster",
"univers": "Marvel et DC",
"source": "Thor (MCU, 2011)",
"pourquoi": "Astrophysicienne qui traque les anomalies atmosphériques dans le désert du Nouveau-Mexique, elle fonce vers les tempêtes au mépris du danger.",
"type": "Fiction"
}
],
"UR.w": [
{
"nom": "Henry Dunant",
"univers": "Histoire",
"source": "Suisse, XIXe siècle",
"pourquoi": "Il imagine la Croix-Rouge et met sa vision au service de tous.",
"type": "Historique"
},
{
"nom": "Robert Owen",
"univers": "Histoire",
"source": "Royaume-Uni, XIXe siècle",
"pourquoi": "Dans sa filature de New Lanark, il réduit le travail des enfants et crée des écoles, puis engloutit une grande partie de sa fortune dans la communauté utopique de New Harmony.",
"type": "Historique"
},
{
"nom": "Prométhée",
"univers": "Littérature et mythologie",
"source": "Mythologie grecque ; Eschyle, Prométhée enchaîné",
"pourquoi": "Il dérobe le feu aux dieux et enseigne les arts aux hommes pour améliorer leur sort, au prix de son propre supplice.",
"type": "Fiction"
},
{
"nom": "Nausicaä",
"univers": "BD et animation",
"source": "Nausicaä de la Vallée du Vent (Ghibli)",
"pourquoi": "Elle étudie en secret la forêt toxique pour comprendre comment sauver son peuple, en s'oubliant elle-même.",
"type": "Fiction"
},
{
"nom": "Edith Keeler",
"univers": "Star Trek",
"source": "Star Trek (série originale)",
"pourquoi": "Dans le New York de la Grande Dépression, elle soigne les démunis dans sa mission et imagine déjà un avenir où l'humanité ira dans l'espace.",
"type": "Fiction"
},
{
"nom": "Professeur Charles Xavier",
"univers": "Marvel et DC",
"source": "X-Men (Marvel)",
"pourquoi": "Il pense un monde meilleur et met son esprit au service de sa communauté.",
"type": "Fiction"
},
{
"nom": "Mr Fantastique (Reed Richards)",
"univers": "Marvel et DC",
"source": "Les Quatre Fantastiques (comics Marvel)",
"pourquoi": "Chef scientifique de l'équipe, il imagine sans cesse de nouvelles inventions pour sa famille et en oublie souvent de dormir et de manger.",
"type": "Fiction"
}
],
"UR.b": [
{
"nom": "Léonard de Vinci",
"univers": "Histoire",
"source": "Italie, Renaissance",
"pourquoi": "Ses idées étaient nouvelles et formidables, et le monde n'était pas toujours prêt à les écouter.",
"type": "Historique"
},
{
"nom": "Denis Papin",
"univers": "Histoire",
"source": "France, XVIIe-XVIIIe siècle",
"pourquoi": "Inventeur de l'autocuiseur et précurseur de la machine à vapeur, il mourut pauvre à Londres, son époque n'étant pas prête à exploiter ses idées.",
"type": "Historique"
},
{
"nom": "Victor Frankenstein",
"univers": "Littérature et mythologie",
"source": "Mary Shelley, Frankenstein ou le Prométhée moderne",
"pourquoi": "Obsédé par l'idée de créer la vie, il rêve qu'une espèce nouvelle le bénira comme son créateur et néglige sa santé et ses proches pour y parvenir.",
"type": "Fiction"
},
{
"nom": "Willy Wonka",
"univers": "Cinéma, séries et jeux",
"source": "Charlie et la Chocolaterie",
"pourquoi": "Chocolatier génial qui invente des confiseries impossibles dans son usine secrète, il vit dans un monde d'idées que peu de gens comprennent.",
"type": "Fiction"
},
{
"nom": "Géo Trouvetou",
"univers": "BD et animation",
"source": "Univers Disney",
"pourquoi": "Il concrétise sans cesse des idées nouvelles, pas toujours comprises.",
"type": "Fiction"
},
{
"nom": "Zorglub",
"univers": "BD et animation",
"source": "Spirou et Fantasio",
"pourquoi": "Savant fou aux inventions démesurées comme les zorglondes, il ne comprend pas que le monde refuse son génie.",
"type": "Fiction"
},
{
"nom": "Docteur Noonien Soong",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation",
"pourquoi": "Roboticien discrédité pour avoir échoué à créer un cerveau positronique, il disparaît pour poursuivre son œuvre en secret et finit par créer Data.",
"type": "Fiction"
},
{
"nom": "Docteur Octopus (Otto Octavius)",
"univers": "Marvel et DC",
"source": "Spider-Man 2 (2004)",
"pourquoi": "Il veut tenir le pouvoir du soleil au creux de sa main avec son réacteur à fusion, persuadé que le monde finira par reconnaître son génie.",
"type": "Fiction"
}
],
"BR.g": [
{
"nom": "Talleyrand",
"univers": "Histoire",
"source": "France, XVIIIe-XIXe siècles",
"pourquoi": "Toujours à l'affût de ce qui pouvait lui être profitable, vif et implacable.",
"type": "Historique"
},
{
"nom": "Benedict Arnold",
"univers": "Histoire",
"source": "États-Unis, XVIIIe siècle",
"pourquoi": "Héros intrépide de Saratoga, il complote ensuite de livrer West Point aux Britanniques contre de l'argent et un grade : chacun pour soi.",
"type": "Historique"
},
{
"nom": "Thénardier",
"univers": "Littérature et mythologie",
"source": "Les Misérables, V. Hugo",
"pourquoi": "Il ne rate aucune occasion d'en tirer profit.",
"type": "Fiction"
},
{
"nom": "Becky Sharp",
"univers": "Littérature et mythologie",
"source": "William Makepeace Thackeray, La Foire aux vanités",
"pourquoi": "Orpheline sans fortune, elle saisit chaque occasion de s'élever dans la société, séduisant et manipulant sans scrupule quiconque peut lui être utile.",
"type": "Fiction"
},
{
"nom": "Hans Landa",
"univers": "Cinéma, séries et jeux",
"source": "Inglourious Basterds (Quentin Tarantino)",
"pourquoi": "Colonel SS vif et implacable, il négocie au dernier moment sa propre défection pour en tirer le meilleur profit.",
"type": "Fiction"
},
{
"nom": "Colonel Olrik",
"univers": "BD et animation",
"source": "Blake et Mortimer",
"pourquoi": "Espion et criminel au service du plus offrant, il saisit chaque occasion avec habileté et ne connaît aucune loyauté.",
"type": "Fiction"
},
{
"nom": "Sebulba",
"univers": "Star Wars",
"source": "Star Wars, épisode I",
"pourquoi": "Pilote de modules sans scrupule, il triche et sabote ses concurrents pour gagner la Boonta Eve.",
"type": "Fiction"
},
{
"nom": "Seska",
"univers": "Star Trek",
"source": "Star Trek : Voyager",
"pourquoi": "Espionne cardassienne infiltrée dans le Maquis, elle trahit Voyager et s'allie aux Kazon au gré de son seul intérêt.",
"type": "Fiction"
},
{
"nom": "Rita Skeeter",
"univers": "Harry Potter",
"source": "Harry Potter et la Coupe de feu",
"pourquoi": "Journaliste à la Plume à Papote, elle espionne sous sa forme illégale de scarabée et déforme sans scrupule les propos de chacun pour décrocher un scoop.",
"type": "Fiction"
},
{
"nom": "Le Maître d'Esgaroth",
"univers": "Tolkien",
"source": "Le Hobbit",
"pourquoi": "Plus soucieux de commerce et de péages que de légendes, il fuit pendant l'attaque de Smaug, détourne la colère du peuple, puis finit par disparaître avec l'or destiné à la ville.",
"type": "Fiction"
},
{
"nom": "Walder Frey",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Toujours rallié au plus offrant, le seigneur du Pont, à l'affût de son avantage, trahit Robb aux Noces Pourpres.",
"type": "Fiction"
},
{
"nom": "Le Pingouin (Oz Cobb)",
"univers": "Marvel et DC",
"source": "The Batman (2022) ; The Penguin (série 2024)",
"pourquoi": "Il profite de la chute de Carmine Falcone pour s'emparer du pouvoir à Gotham, vif, sans scrupules et chacun pour soi.",
"type": "Fiction"
}
],
"BR.w": [
{
"nom": "Napoléon Bonaparte",
"univers": "Histoire",
"source": "France, XVIIIe-XIXe siècles",
"pourquoi": "Il a agi pour se faire un nom et entraîné le monde dans son sillage.",
"type": "Historique"
},
{
"nom": "Cléopâtre VII",
"univers": "Histoire",
"source": "Égypte, Ier siècle av. J.-C.",
"pourquoi": "Elle s'allie successivement à César puis à Marc Antoine pour conserver son trône et faire de l'Égypte une puissance au centre du jeu romain.",
"type": "Historique"
},
{
"nom": "Eugène de Rastignac",
"univers": "Littérature et mythologie",
"source": "La Comédie humaine, H. de Balzac",
"pourquoi": "« À nous deux maintenant ! » : il veut conquérir Paris et y gagner de l'influence.",
"type": "Fiction"
},
{
"nom": "Frank Underwood",
"univers": "Cinéma, séries et jeux",
"source": "House of Cards",
"pourquoi": "Politicien ambitieux qui manœuvre pour accéder au sommet du pouvoir, il entraîne Washington dans son sillage et ne se fait pas que des amis.",
"type": "Fiction"
},
{
"nom": "Scar",
"univers": "BD et animation",
"source": "Le Roi lion (Disney)",
"pourquoi": "Il manœuvre pour s'emparer du trône et entraîne les hyènes dans son ambition, quitte à se faire de nombreux ennemis.",
"type": "Fiction"
},
{
"nom": "Orson Krennic",
"univers": "Star Wars",
"source": "Rogue One",
"pourquoi": "Directeur du projet de l'Étoile de la Mort, il ne vit que pour être reconnu comme son créateur et voir son nom associé à l'arme.",
"type": "Fiction"
},
{
"nom": "Gowron",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Le chancelier klingon, jaloux de la popularité de Martok, reprend lui-même le commandement pour s'attribuer la gloire de la guerre.",
"type": "Fiction"
},
{
"nom": "Gellert Grindelwald",
"univers": "Harry Potter",
"source": "Harry Potter et les Reliques de la Mort ; Les Animaux fantastiques",
"pourquoi": "Mage noir charismatique, il a entraîné une foule de partisans derrière son slogan « Pour le plus grand bien » dans sa quête de domination.",
"type": "Fiction"
},
{
"nom": "Ar-Pharazôn",
"univers": "Tolkien",
"source": "Le Silmarillion (Akallabêth)",
"pourquoi": "Dernier roi de Númenor, il s'empare du sceptre, fait plier Sauron par la seule démonstration de sa puissance, puis entraîne toute sa flotte à l'assaut de Valinor pour arracher l'immortalité.",
"type": "Fiction"
},
{
"nom": "Theon Greyjoy",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Pour se faire un nom auprès de son père et des Fer-nés, il s'empare de Winterfell et s'y aliène tous ceux qui l'entourent.",
"type": "Fiction"
},
{
"nom": "Loki (Marvel)",
"univers": "Marvel et DC",
"source": "Thor ; Avengers (MCU)",
"pourquoi": "Il se dit porteur d'une « glorieuse destinée » et exige que l'humanité s'agenouille devant lui, ce qui ne lui fait pas que des amis.",
"type": "Fiction"
}
],
"BR.u": [
{
"nom": "John Law",
"univers": "Histoire",
"source": "Écosse et France, XVIIIe siècle",
"pourquoi": "Il crée, bâtit et parie gros sur son système, avec une volonté sans faille.",
"type": "Historique"
},
{
"nom": "Howard Hughes",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Aviateur recordman, producteur de cinéma et industriel, il mise des fortunes sur ses propres projets, comme l'hydravion géant « Spruce Goose ».",
"type": "Historique"
},
{
"nom": "Aristide Saccard",
"univers": "Littérature et mythologie",
"source": "Émile Zola, La Curée ; L'Argent",
"pourquoi": "Spéculateur infatigable, il bâtit la Banque universelle à force d'audace et de volonté, et préfère risquer la ruine que travailler pour un autre.",
"type": "Fiction"
},
{
"nom": "Gordon Gekko",
"univers": "Cinéma, séries et jeux",
"source": "Wall Street (film)",
"pourquoi": "Spéculateur qui ne parie que lorsqu'il croit le coup assuré.",
"type": "Fiction"
},
{
"nom": "Daniel Plainview",
"univers": "Cinéma, séries et jeux",
"source": "There Will Be Blood (Paul Thomas Anderson)",
"pourquoi": "Prospecteur pétrolier d'une volonté de fer, il bâtit sa fortune seul en écrasant toute concurrence.",
"type": "Fiction"
},
{
"nom": "Fred et George Weasley",
"univers": "Harry Potter",
"source": "Harry Potter (tomes 1 à 7)",
"pourquoi": "Ils parient toutes leurs économies sur l'issue de la finale de la Coupe du monde, puis quittent Poudlard pour bâtir leur propre boutique de farces sur le Chemin de Traverse plutôt que de travailler pour d'autres.",
"type": "Fiction"
},
{
"nom": "Le Vautour (Adrian Toomes)",
"univers": "Marvel et DC",
"source": "Spider-Man : Homecoming (MCU)",
"pourquoi": "Entrepreneur de déblaiement évincé par Stark, il monte sa propre affaire de trafic d'armes extraterrestres plutôt que de travailler pour les puissants.",
"type": "Fiction"
}
],
"BG.r": [
{
"nom": "Peggy Guggenheim",
"univers": "Histoire",
"source": "États-Unis et Italie, XXe siècle",
"pourquoi": "Elle s'entoure d'œuvres et de confort, et développe sans cesse sa collection.",
"type": "Historique"
},
{
"nom": "Elizabeth Taylor",
"univers": "Histoire",
"source": "Royaume-Uni / États-Unis, XXe siècle",
"pourquoi": "Elle a réuni une collection de joyaux légendaire, dont le diamant Krupp et la perle La Peregrina, vendue plus de 100 millions de dollars après sa mort.",
"type": "Historique"
},
{
"nom": "Trimalcion",
"univers": "Littérature et mythologie",
"source": "Pétrone, Le Satyricon",
"pourquoi": "Affranchi devenu immensément riche, il étale son opulence lors d'un banquet démesuré où chaque plat et chaque objet doit éblouir.",
"type": "Fiction"
},
{
"nom": "Fafnir",
"univers": "Littérature et mythologie",
"source": "Mythologie nordique ; Saga des Völsungar",
"pourquoi": "Il tue son père pour s'emparer de l'or maudit et se change en dragon pour couver son trésor jusqu'à ce que Sigurd le terrasse.",
"type": "Fiction"
},
{
"nom": "Al McWhiggin",
"univers": "BD et animation",
"source": "Toy Story 2 (Pixar)",
"pourquoi": "Collectionneur et vendeur de jouets, il convoite Woody pour compléter sa collection et la vendre à prix d'or.",
"type": "Fiction"
},
{
"nom": "Dryden Vos",
"univers": "Star Wars",
"source": "Solo : A Star Wars Story",
"pourquoi": "Chef d'Aube écarlate, il vit dans un yacht luxueux rempli d'objets rares et ne refuse rien à son goût de l'opulence.",
"type": "Fiction"
},
{
"nom": "Kivas Fajo",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation",
"pourquoi": "Collectionneur richissime de pièces uniques, il enlève Data pour l'ajouter à sa collection.",
"type": "Fiction"
},
{
"nom": "Hepzibah Smith",
"univers": "Harry Potter",
"source": "Harry Potter et le Prince de Sang-Mêlé",
"pourquoi": "Vieille sorcière richissime entourée de coussins, de bibelots et servie par son elfe Hokey, elle collectionne les trésors au point de détenir la coupe de Poufsouffle et le médaillon de Serpentard.",
"type": "Fiction"
},
{
"nom": "Smaug",
"univers": "Tolkien",
"source": "Le Hobbit, J. R. R. Tolkien",
"pourquoi": "Il amasse un trésor immense et ne supporte pas d'en perdre la moindre pièce.",
"type": "Fiction"
},
{
"nom": "Thranduil",
"univers": "Tolkien",
"source": "Le Hobbit",
"pourquoi": "Le roi des Elfes de la Forêt Noire a une faiblesse avouée pour les trésors, et marche sur Erebor dès la mort de Smaug pour en réclamer sa part.",
"type": "Fiction"
},
{
"nom": "Illyrio Mopatis",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Riche magistrat de Pentos vivant dans l'opulence, il héberge les derniers Targaryens comme on place des pièces sur un échiquier.",
"type": "Fiction"
},
{
"nom": "Le Collectionneur (Taneleer Tivan)",
"univers": "Marvel et DC",
"source": "Les Gardiens de la Galaxie (MCU)",
"pourquoi": "Il entasse dans son musée de Nulle-Part les créatures et objets les plus rares de l'univers, sans aucun sens de la mesure.",
"type": "Fiction"
}
],
"BG.w": [
{
"nom": "Madame de Pompadour",
"univers": "Histoire",
"source": "France, XVIIIe siècle",
"pourquoi": "Elle sait se rendre incontournable et place son réseau au centre de la cour.",
"type": "Historique"
},
{
"nom": "Andy Warhol",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Au centre de sa Factory, il fait de sa notoriété et de son réseau une œuvre, lui qui prédisait à chacun « quinze minutes de célébrité ».",
"type": "Historique"
},
{
"nom": "Madame Verdurin",
"univers": "Littérature et mythologie",
"source": "Marcel Proust, Du côté de chez Swann",
"pourquoi": "Elle règne sur son « petit noyau » de fidèles, décidant qui est admis ou banni pour rester le centre incontournable de son salon.",
"type": "Fiction"
},
{
"nom": "Blair Waldorf",
"univers": "Cinéma, séries et jeux",
"source": "Gossip Girl",
"pourquoi": "Reine de l'Upper East Side, elle entretient son réseau et ses alliances pour rester au centre de la vie mondaine et y tient plus que tout.",
"type": "Fiction"
},
{
"nom": "Séraphin Lampion",
"univers": "BD et animation",
"source": "Les Aventures de Tintin (Hergé)",
"pourquoi": "Agent d'assurances envahissant, il s'impose partout avec ses relations et ses anecdotes, notamment à Moulinsart.",
"type": "Fiction"
},
{
"nom": "Kai Winn",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Elle intrigue pour devenir Kai puis s'accroche à sa position en se rendant incontournable entre le peuple bajoran et ses interlocuteurs.",
"type": "Fiction"
},
{
"nom": "Horace Slughorn",
"univers": "Harry Potter",
"source": "Harry Potter et le Prince de Sang-Mêlé",
"pourquoi": "Son « Club de Slug » réunit les élèves prometteurs dont il tire ensuite faveurs et cadeaux : il est le centre d'un réseau qu'il entretient avec soin.",
"type": "Fiction"
},
{
"nom": "Gríma Langue de Serpent",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Conseiller insinuant de Théoden, il s'est rendu incontournable à Edoras en contrôlant tout ce qui parvient au roi, pour son compte et celui de Saroumane.",
"type": "Fiction"
},
{
"nom": "Lord Varys",
"univers": "Le Trône de fer",
"source": "Le Trône de fer, G. R. R. Martin",
"pourquoi": "Son réseau d'informateurs fait de lui un homme dont personne ne peut se passer.",
"type": "Fiction"
},
{
"nom": "Cersei Lannister",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "« Quand on joue au jeu des trônes, on gagne ou on meurt » : elle se rend incontournable à la cour et défend sa position à tout prix.",
"type": "Fiction"
}
],
"BG.u": [
{
"nom": "Jacques Cœur",
"univers": "Histoire",
"source": "France, XVe siècle",
"pourquoi": "Marchand aux activités nombreuses et variées, qui fait travailler beaucoup de monde pour lui.",
"type": "Historique"
},
{
"nom": "Cornelius Vanderbilt",
"univers": "Histoire",
"source": "États-Unis, XIXe siècle",
"pourquoi": "« Le Commodore » passe des bateaux à vapeur aux chemins de fer et devient l'homme le plus riche d'Amérique en multipliant les affaires.",
"type": "Historique"
},
{
"nom": "Rhett Butler",
"univers": "Littérature et mythologie",
"source": "Autant en emporte le vent, M. Mitchell",
"pourquoi": "Il trouve son bénéfice dans toutes sortes d'affaires, même en pleine guerre.",
"type": "Fiction"
},
{
"nom": "Baron de Nucingen",
"univers": "Littérature et mythologie",
"source": "Balzac, La Maison Nucingen ; Splendeurs et misères des courtisanes",
"pourquoi": "Banquier alsacien qui s'enrichit par des liquidations habiles sur le dos de ses déposants, il fait travailler l'argent et les hommes à son seul profit.",
"type": "Fiction"
},
{
"nom": "Charles Montgomery Burns",
"univers": "Cinéma, séries et jeux",
"source": "Les Simpson",
"pourquoi": "Propriétaire richissime de la centrale nucléaire de Springfield, il fait trimer ses employés et place le profit au-dessus de tout.",
"type": "Fiction"
},
{
"nom": "Roberto Rastapopoulos",
"univers": "BD et animation",
"source": "Les Aventures de Tintin (Hergé)",
"pourquoi": "Magnat du cinéma et cerveau de trafics, il fait travailler une armée de sbires pour son seul profit.",
"type": "Fiction"
},
{
"nom": "Yubaba",
"univers": "BD et animation",
"source": "Le Voyage de Chihiro (Ghibli)",
"pourquoi": "Patronne avide de la maison de bains, elle fait trimer ses employés et leur confisque jusqu'à leur nom.",
"type": "Fiction"
},
{
"nom": "Watto",
"univers": "Star Wars",
"source": "Star Wars, épisode I",
"pourquoi": "Ferrailleur toydarien qui fait travailler Shmi et Anakin pour lui et parie sur les courses, il ne pense qu'aux profits.",
"type": "Fiction"
},
{
"nom": "Quark",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Tenancier de bar, il multiplie combines et affaires, fait trimer son frère et ses employés, et suit ses Règles d'acquisition avant tout.",
"type": "Fiction"
},
{
"nom": "Lotho Sacquet-de-Besace",
"univers": "Tolkien",
"source": "Le Seigneur des Anneaux",
"pourquoi": "Il rachète terres, moulins et plantations d'herbe à pipe, fait travailler la Comté à son profit et se proclame « le Chef ».",
"type": "Fiction"
},
{
"nom": "Maxwell Lord",
"univers": "Marvel et DC",
"source": "Wonder Woman 1984",
"pourquoi": "Homme d'affaires de la télévision à la tête d'une compagnie pétrolière en faillite, il détourne une pierre magique pour s'enrichir en exploitant les vœux des autres.",
"type": "Fiction"
}
],
"RG.b": [
{
"nom": "Eugène-François Vidocq",
"univers": "Histoire",
"source": "France, XIXe siècle",
"pourquoi": "Ancien bagnard évadé, il devient chef de la Sûreté puis fonde la première agence de détectives privés, toujours retombant sur ses pattes.",
"type": "Historique"
},
{
"nom": "Renart",
"univers": "Littérature et mythologie",
"source": "Le Roman de Renart",
"pourquoi": "Il s'en sort toujours gagnant en observant et en saisissant ce qui passe à sa portée.",
"type": "Fiction"
},
{
"nom": "Tom Sawyer",
"univers": "Littérature et mythologie",
"source": "Les Aventures de Tom Sawyer, M. Twain",
"pourquoi": "Il fait repeindre sa palissade par les autres et en tire même profit.",
"type": "Fiction"
},
{
"nom": "Panurge",
"univers": "Littérature et mythologie",
"source": "Rabelais, Pantagruel ; Le Quart Livre",
"pourquoi": "Il connaît « soixante et trois manières » de trouver de l'argent et se tire de chaque mauvais pas par la ruse, comme avec les moutons de Dindenault.",
"type": "Fiction"
},
{
"nom": "Futé",
"univers": "Cinéma, séries et jeux",
"source": "L'Agence tous risques",
"pourquoi": "Beau parleur et escroc de charme, il « récupère » tout ce dont l'équipe a besoin par l'observation et le culot, sans jamais se salir les mains.",
"type": "Fiction"
},
{
"nom": "Jacquouille la Fripouille",
"univers": "Cinéma, séries et jeux",
"source": "Les Visiteurs (Jean-Marie Poiré)",
"pourquoi": "Écuyer crasseux et débrouillard, il profite de chaque occasion de l'époque moderne pour s'en mettre plein les poches.",
"type": "Fiction"
},
{
"nom": "Aladdin",
"univers": "BD et animation",
"source": "Aladdin (Disney)",
"pourquoi": "Gamin des rues d'Agrabah, il vit d'astuce et de larcins, toujours à l'affût de ce qu'il peut chiper au marché.",
"type": "Fiction"
},
{
"nom": "Hondo Ohnaka",
"univers": "Star Wars",
"source": "Star Wars : The Clone Wars ; Rebels",
"pourquoi": "Pirate weequay qui change de camp au gré de ses intérêts, il trouve toujours le moyen de s'en tirer avec un butin.",
"type": "Fiction"
},
{
"nom": "Harry Mudd",
"univers": "Star Trek",
"source": "Star Trek (série originale) ; Star Trek : Discovery",
"pourquoi": "Escroc interstellaire jovial, il retombe toujours sur ses pieds en exploitant la moindre occasion sans jamais travailler honnêtement.",
"type": "Fiction"
},
{
"nom": "Mondingus Fletcher",
"univers": "Harry Potter",
"source": "Harry Potter (tomes 4 à 7)",
"pourquoi": "Petit escroc toujours à l'affût d'une bonne affaire, il profite de la moindre occasion pour subtiliser les objets de valeur du square Grimmaurd.",
"type": "Fiction"
},
{
"nom": "Bilbon Sacquet",
"univers": "Tolkien",
"source": "Le Hobbit",
"pourquoi": "Engagé comme « cambrioleur », il gagne la partie d'énigmes contre Gollum, trouve la porte secrète en observant la grive et le seuil, et dérobe l'Arkenstone pour s'en servir de monnaie d'échange.",
"type": "Fiction"
},
{
"nom": "Bronn",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Mercenaire gouailleur, il se loue au plus offrant, gagne le duel des Eyrié pour Tyrion et s'en sort toujours avec un titre ou de l'or.",
"type": "Fiction"
},
{
"nom": "Rocket",
"univers": "Marvel et DC",
"source": "Les Gardiens de la Galaxie (MCU)",
"pourquoi": "Voleur et mercenaire, il récupère tout ce qui traîne, comme la jambe artificielle d'un prisonnier qu'il réclame juste pour rire.",
"type": "Fiction"
}
],
"RG.w": [
{
"nom": "Ernest Shackleton",
"univers": "Histoire",
"source": "Irlande / Royaume-Uni, XXe siècle",
"pourquoi": "Après la perte de l'Endurance, il traverse l'océan Austral dans un canot pour chercher des secours et ramène vivants tous ses hommes.",
"type": "Historique"
},
{
"nom": "Petit Jean",
"univers": "Littérature et mythologie",
"source": "Légende de Robin des Bois",
"pourquoi": "Le bras droit loyal et infatigable de la bande.",
"type": "Fiction"
},
{
"nom": "Thor (mythologie)",
"univers": "Littérature et mythologie",
"source": "Mythologie nordique ; Edda",
"pourquoi": "Fougueux et indomptable, il se rend indispensable en défendant sans relâche dieux et hommes contre les géants à coups de Mjöllnir.",
"type": "Fiction"
},
{
"nom": "Barracuda",
"univers": "Cinéma, séries et jeux",
"source": "L'Agence tous risques",
"pourquoi": "Mécanicien et gros bras au caractère bien trempé, il est l'homme indispensable de l'équipe et ne lui fait jamais défaut, même s'il faut le droguer pour le faire monter en avion.",
"type": "Fiction"
},
{
"nom": "Sanji",
"univers": "BD et animation",
"source": "One Piece",
"pourquoi": "Cuisinier fougueux et charmeur, il considère comme un devoir sacré de nourrir l'équipage et quiconque a faim.",
"type": "Fiction"
},
{
"nom": "Worf",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation ; Star Trek : Deep Space Nine",
"pourquoi": "Guerrier klingon fier de son identité, il place l'honneur et le devoir envers l'équipage au-dessus de tout, même de sa réputation.",
"type": "Fiction"
},
{
"nom": "Rubeus Hagrid",
"univers": "Harry Potter",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Utile, loyal et fort : quand on a besoin de lui, il est là.",
"type": "Fiction"
}
],
"RG.u": [
{
"nom": "Pline l'Ancien",
"univers": "Histoire",
"source": "Rome, Ier siècle",
"pourquoi": "Curieux de tout, il est mort en allant observer de près l'éruption du Vésuve.",
"type": "Historique"
},
{
"nom": "Boris Vian",
"univers": "Histoire",
"source": "France, XXe siècle",
"pourquoi": "Ingénieur, trompettiste de jazz, romancier, parolier et pataphysicien, il s'est jeté dans tout ce qui l'intriguait en une vie très courte.",
"type": "Historique"
},
{
"nom": "Alice",
"univers": "Littérature et mythologie",
"source": "Alice au pays des merveilles, L. Carroll",
"pourquoi": "Elle se rue derrière tout ce qui l'intrigue, et tout l'intrigue.",
"type": "Fiction"
},
{
"nom": "Pandore",
"univers": "Littérature et mythologie",
"source": "Mythologie grecque ; Hésiode, Les Travaux et les Jours",
"pourquoi": "Dans la tradition populaire, elle ne résiste pas à la curiosité d'ouvrir la jarre interdite, libérant tous les maux du monde.",
"type": "Fiction"
},
{
"nom": "WALL-E",
"univers": "Cinéma, séries et jeux",
"source": "WALL-E (Pixar)",
"pourquoi": "Petit robot qui collectionne avec émerveillement tous les objets inconnus qu'il trouve dans les déchets, il se lance à l'aventure jusque dans l'espace.",
"type": "Fiction"
},
{
"nom": "Ariel",
"univers": "BD et animation",
"source": "La Petite Sirène (Disney)",
"pourquoi": "Fascinée par le monde des humains, elle collectionne ses objets et en oublie le concert donné en son honneur.",
"type": "Fiction"
},
{
"nom": "Grogu",
"univers": "Star Wars",
"source": "The Mandalorian",
"pourquoi": "Curieux de tout, il appuie sur tous les boutons, mange les œufs de la passagère grenouille et ne cesse de s'aventurer là où on ne l'attend pas.",
"type": "Fiction"
},
{
"nom": "Hikaru Sulu",
"univers": "Star Trek",
"source": "Star Trek (série originale)",
"pourquoi": "Pilote aux passions multiples, de l'escrime à la botanique en passant par les armes anciennes, il se jette sur chaque nouveau hobby.",
"type": "Fiction"
},
{
"nom": "Loïs Lane",
"univers": "Marvel et DC",
"source": "Superman (comics DC ; films)",
"pourquoi": "Journaliste du Daily Planet, elle se rue sur chaque scoop au mépris du danger, quitte à devoir être sauvée par Superman.",
"type": "Fiction"
}
],
"RW.g": [
{
"nom": "Louise Michel",
"univers": "Histoire",
"source": "France, XIXe siècle",
"pourquoi": "Voix de la Commune, et parfois son bras.",
"type": "Historique"
},
{
"nom": "Emmeline Pankhurst",
"univers": "Histoire",
"source": "Royaume-Uni, XIXe-XXe siècle",
"pourquoi": "Fondatrice des suffragettes de la WSPU, elle impose la devise « Des actes, pas des mots » et assume les grèves de la faim et les prisons.",
"type": "Historique"
},
{
"nom": "Enjolras",
"univers": "Littérature et mythologie",
"source": "Les Misérables, V. Hugo",
"pourquoi": "Il porte la cause de ses camarades jusque sur la barricade.",
"type": "Fiction"
},
{
"nom": "Roland",
"univers": "Littérature et mythologie",
"source": "La Chanson de Roland",
"pourquoi": "Neveu de Charlemagne, il se bat jusqu'au bout pour son empereur et sa foi à Roncevaux et refuse par fierté de sonner l'olifant pour appeler l'armée à l'aide.",
"type": "Fiction"
},
{
"nom": "William Wallace",
"univers": "Cinéma, séries et jeux",
"source": "Braveheart (Mel Gibson)",
"pourquoi": "Porte-voix et bras armé des Écossais révoltés, il galvanise ses hommes au cri de « Liberté ! ».",
"type": "Fiction"
},
{
"nom": "San (Princesse Mononoké)",
"univers": "BD et animation",
"source": "Princesse Mononoké (Ghibli)",
"pourquoi": "Élevée par les loups, elle se bat avec ardeur pour la forêt contre les humains qui la détruisent.",
"type": "Fiction"
},
{
"nom": "Leia Organa",
"univers": "Star Wars",
"source": "Star Wars, épisodes IV à VI",
"pourquoi": "Voix de la Rébellion qui tient tête à Tarkin et à Vador, elle prend aussi le blaster pour ouvrir le chemin à ses compagnons.",
"type": "Fiction"
},
{
"nom": "Saw Gerrera",
"univers": "Star Wars",
"source": "Rogue One ; The Clone Wars",
"pourquoi": "Chef de partisans aux méthodes extrêmes, il incarne une rébellion qui préfère agir que négocier.",
"type": "Fiction"
},
{
"nom": "Kira Nerys",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Ancienne combattante de la résistance bajorane, elle reste la voix passionnée, et parfois le bras armé, de son peuple.",
"type": "Fiction"
},
{
"nom": "Bellatrix Lestrange",
"univers": "Harry Potter",
"source": "Harry Potter (tomes 5 à 7)",
"pourquoi": "Mangemort la plus fanatique, elle met une ferveur sans limite dans la cause de Voldemort et en est le bras le plus redoutable.",
"type": "Fiction"
},
{
"nom": "Le Grand Moineau",
"univers": "Le Trône de fer",
"source": "Game of Thrones (HBO)",
"pourquoi": "Devenu Grand Septon, il réarme la Foi Militante et fait de ses fidèles la voix et le bras de la foi contre la noblesse.",
"type": "Fiction"
},
{
"nom": "Magneto",
"univers": "Marvel et DC",
"source": "X-Men (films et comics)",
"pourquoi": "Survivant des camps devenu porte-parole et bras armé de la cause mutante, il est prêt à frapper fort pour défendre les siens.",
"type": "Fiction"
},
{
"nom": "Erik Killmonger",
"univers": "Marvel et DC",
"source": "Black Panther (MCU, 2018)",
"pourquoi": "Il veut armer avec le vibranium du Wakanda les opprimés du monde entier, avec une ferveur qui le pousse jusqu'à la violence.",
"type": "Fiction"
}
],
"RW.u": [
{
"nom": "Martin Luther King",
"univers": "Histoire",
"source": "États-Unis, XXe siècle",
"pourquoi": "Il rallie par la force de ses convictions et voit comment le monde doit progresser.",
"type": "Historique"
},
{
"nom": "Gandhi",
"univers": "Histoire",
"source": "Inde, XXe siècle",
"pourquoi": "Avec la marche du sel de 1930, il mobilise tout un peuple par la non-violence, prêt à recevoir les coups et la prison pour sa cause.",
"type": "Historique"
},
{
"nom": "John Keating",
"univers": "Cinéma, séries et jeux",
"source": "Le Cercle des poètes disparus (film)",
"pourquoi": "Il éveille ses élèves et les entraîne par conviction.",
"type": "Fiction"
},
{
"nom": "Morpheus",
"univers": "Cinéma, séries et jeux",
"source": "Matrix",
"pourquoi": "Convaincu que Neo est l'Élu et que l'humanité doit être libérée, il recrute et forme avec une foi inébranlable, prêt à se sacrifier pour cette mission.",
"type": "Fiction"
},
{
"nom": "Lisa Simpson",
"univers": "BD et animation",
"source": "Les Simpson",
"pourquoi": "Militante convaincue, elle s'engage pour l'écologie et la justice et tente de rallier une famille et une ville peu réceptives.",
"type": "Fiction"
},
{
"nom": "Nemik",
"univers": "Star Wars",
"source": "Andor",
"pourquoi": "Jeune militant qui rédige un manifeste contre l'Empire, il est convaincu de voir comment le monde doit changer et prêt à risquer sa vie pour cela.",
"type": "Fiction"
},
{
"nom": "Michael Burnham",
"univers": "Star Trek",
"source": "Star Trek : Discovery",
"pourquoi": "Convaincue d'avoir raison, elle se mutine contre sa capitaine pour frapper les Klingons les premiers, et en assume le prix.",
"type": "Fiction"
},
{
"nom": "Mélisandre",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Prêtresse rouge convaincue que Stannis est le héros promis, elle mène la mission de R'hllor avec une ferveur qui va jusqu'aux bûchers.",
"type": "Fiction"
},
{
"nom": "Wonder Woman",
"univers": "Marvel et DC",
"source": "Wonder Woman (2017)",
"pourquoi": "Convaincue qu'elle doit sauver l'humanité, elle traverse le no man's land sous le feu ennemi et entraîne les soldats derrière elle.",
"type": "Fiction"
}
],
"RW.b": [
{
"nom": "Eva Perón",
"univers": "Histoire",
"source": "Argentine, XXe siècle",
"pourquoi": "Elle a fait briller sa cause, et brillé avec elle.",
"type": "Historique"
},
{
"nom": "Gilbert du Motier, marquis de La Fayette",
"univers": "Histoire",
"source": "France, XVIIIe-XIXe siècle",
"pourquoi": "« Le héros des deux mondes » sert la cause de l'indépendance américaine puis celle de la liberté en France, sans jamais négliger sa propre gloire.",
"type": "Historique"
},
{
"nom": "Joséphine Baker",
"univers": "Histoire",
"source": "France / États-Unis, XXe siècle",
"pourquoi": "Elle met sa célébrité au service de la Résistance puis des droits civiques, prenant la parole lors de la marche sur Washington de 1963 en uniforme de la France libre.",
"type": "Historique"
},
{
"nom": "Katniss Everdeen",
"univers": "Littérature et mythologie",
"source": "Hunger Games, S. Collins",
"pourquoi": "Devenue le « geai moqueur », elle sait que son image porte la cause.",
"type": "Fiction"
},
{
"nom": "Marc Antoine",
"univers": "Littérature et mythologie",
"source": "Shakespeare, Jules César",
"pourquoi": "Par son oraison funèbre, « Amis, Romains, compatriotes », il met en scène le manteau ensanglanté et le testament de César pour soulever le peuple, et en tire son propre pouvoir.",
"type": "Fiction"
},
{
"nom": "Hercule",
"univers": "BD et animation",
"source": "Hercule (Disney)",
"pourquoi": "Devenu héros adulé, il voit son visage sur les produits dérivés tout en servant le peuple de Thèbes.",
"type": "Fiction"
},
{
"nom": "Michael Eddington",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "Officier passé au Maquis, il se met en scène en Jean Valjean de la cause et fait de Sisko son Javert.",
"type": "Fiction"
},
{
"nom": "Margaery Tyrell",
"univers": "Le Trône de fer",
"source": "Game of Thrones (HBO)",
"pourquoi": "Elle visite les orphelinats de Culpucier sous les yeux du peuple, mettant en scène sa charité pour mieux briller en reine.",
"type": "Fiction"
},
{
"nom": "J. Jonah Jameson",
"univers": "Marvel et DC",
"source": "Spider-Man (films ; comics Marvel)",
"pourquoi": "Rédacteur en chef du Daily Bugle, il fait de sa croisade contre Spider-Man une cause à grand spectacle dont il profite largement.",
"type": "Fiction"
}
],
"GW.r": [
{
"nom": "Georges Danton",
"univers": "Histoire",
"source": "France, XVIIIe siècle",
"pourquoi": "Son énergie inépuisable galvanisait les siens : « De l'audace, encore de l'audace ! »",
"type": "Historique"
},
{
"nom": "Bill Shankly",
"univers": "Histoire",
"source": "Écosse / Angleterre, XXe siècle",
"pourquoi": "L'entraîneur de Liverpool disait que le football n'est pas une question de vie ou de mort mais « beaucoup plus important que ça ».",
"type": "Historique"
},
{
"nom": "Ted Lasso",
"univers": "Cinéma, séries et jeux",
"source": "Ted Lasso (série)",
"pourquoi": "Toujours là pour motiver les autres, avec un optimisme à toute épreuve.",
"type": "Fiction"
},
{
"nom": "Michael Scott",
"univers": "Cinéma, séries et jeux",
"source": "The Office (version américaine)",
"pourquoi": "Directeur régional qui considère ses employés comme sa famille, il dépense une énergie inépuisable pour animer le bureau et ne supporte pas d'en être séparé.",
"type": "Fiction"
},
{
"nom": "Joie",
"univers": "BD et animation",
"source": "Vice-Versa (Pixar)",
"pourquoi": "Inépuisable émotion de Riley, elle motive sans cesse les autres émotions et ne conçoit pas d'agir sans l'équipe.",
"type": "Fiction"
},
{
"nom": "Sylvia Tilly",
"univers": "Star Trek",
"source": "Star Trek : Discovery",
"pourquoi": "Enthousiaste intarissable, elle remonte sans cesse le moral de ses camarades et ne se conçoit pas sans l'équipage du Discovery.",
"type": "Fiction"
}
],
"GW.u": [
{
"nom": "Sœur Emmanuelle",
"univers": "Histoire",
"source": "France et Égypte, XXe siècle",
"pourquoi": "Attentive aux besoins des plus démunis, elle était là pour eux dans la difficulté.",
"type": "Historique"
},
{
"nom": "Père Damien",
"univers": "Histoire",
"source": "Belgique / Hawaï, XIXe siècle",
"pourquoi": "Il rejoint les lépreux relégués à Molokai pour les soigner et les servir, jusqu'à mourir lui-même de la lèpre.",
"type": "Historique"
},
{
"nom": "Monseigneur Myriel",
"univers": "Littérature et mythologie",
"source": "Les Misérables, V. Hugo",
"pourquoi": "Il ouvre sa porte à celui qui est en difficulté, sans rien demander.",
"type": "Fiction"
},
{
"nom": "Jean Valjean",
"univers": "Littérature et mythologie",
"source": "Victor Hugo, Les Misérables",
"pourquoi": "Ancien forçat devenu bienfaiteur, il se consacre à Fantine puis à Cosette et s'efface toujours derrière le bonheur des autres.",
"type": "Fiction"
},
{
"nom": "Amélie Poulain",
"univers": "Cinéma, séries et jeux",
"source": "Le Fabuleux Destin d'Amélie Poulain (Jean-Pierre Jeunet)",
"pourquoi": "Discrète et attentive aux autres, elle consacre son temps à réparer en secret la vie de ses voisins, en passant elle-même après.",
"type": "Fiction"
},
{
"nom": "Gromit",
"univers": "Cinéma, séries et jeux",
"source": "Wallace et Gromit (Aardman)",
"pourquoi": "Chien muet mais perspicace, il veille sans relâche sur son maître et le tire de chaque catastrophe provoquée par ses inventions.",
"type": "Fiction"
},
{
"nom": "Baymax",
"univers": "BD et animation",
"source": "Les Nouveaux Héros (Disney)",
"pourquoi": "Robot soignant, il détecte la détresse de chacun et ne s'éteint que quand on lui dit être satisfait de ses soins.",
"type": "Fiction"
},
{
"nom": "Deanna Troi",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation",
"pourquoi": "Conseillère empathe, elle perçoit la détresse de chacun et se tient toujours prête à soutenir l'équipage.",
"type": "Fiction"
},
{
"nom": "Davos Mervault",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Le chevalier oignon, attentif aux autres, fait fuir un bâtard de Robert promis au sacrifice par Mélisandre, au mépris de sa propre sécurité.",
"type": "Fiction"
},
{
"nom": "Tante May",
"univers": "Marvel et DC",
"source": "Spider-Man (films de Sam Raimi ; MCU)",
"pourquoi": "Toujours attentive aux autres, elle s'engage dans des actions caritatives et soutient Peter en passant elle-même au second plan.",
"type": "Fiction"
}
],
"GW.b": [
{
"nom": "Jean Jaurès",
"univers": "Histoire",
"source": "France, XIXe-XXe siècles",
"pourquoi": "Il prend la parole pour les ouvriers, dont il a fait sa cause et son identité.",
"type": "Historique"
},
{
"nom": "Sitting Bull",
"univers": "Histoire",
"source": "États-Unis, XIXe siècle",
"pourquoi": "Chef des Lakotas Hunkpapas, il incarne la résistance de son peuple et refuse jusqu'au bout de céder ses terres.",
"type": "Historique"
},
{
"nom": "Atticus Finch",
"univers": "Littérature et mythologie",
"source": "Ne tirez pas sur l'oiseau moqueur, H. Lee",
"pourquoi": "Il prend la parole pour défendre sa communauté, même quand ce n'est pas facile.",
"type": "Fiction"
},
{
"nom": "Lysistrata",
"univers": "Littérature et mythologie",
"source": "Aristophane, Lysistrata",
"pourquoi": "Simple Athénienne sans fonction officielle, elle prend la parole au nom de toutes les femmes de Grèce et organise leur grève pour mettre fin à la guerre.",
"type": "Fiction"
},
{
"nom": "Woody",
"univers": "BD et animation",
"source": "Toy Story (Pixar)",
"pourquoi": "Il prend la parole au nom des jouets de la chambre d'Andy, dont l'appartenance fait toute son identité.",
"type": "Fiction"
},
{
"nom": "Maarva Andor",
"univers": "Star Wars",
"source": "Andor",
"pourquoi": "Figure de Ferrix, elle prend la parole lors de ses propres funérailles pour appeler les siens à se lever contre l'Empire.",
"type": "Fiction"
},
{
"nom": "Padmé Amidala",
"univers": "Star Wars",
"source": "Star Wars, épisodes I à III",
"pourquoi": "Reine puis sénatrice de Naboo, elle plaide sans relâche la cause de son peuple devant le Sénat, au point de provoquer la chute du chancelier Valorum.",
"type": "Fiction"
},
{
"nom": "Pavel Chekov",
"univers": "Star Trek",
"source": "Star Trek (série originale)",
"pourquoi": "Fier Russe, il revendique pour son pays l'invention de presque tout ce qu'on évoque devant lui.",
"type": "Fiction"
},
{
"nom": "Lyanna Mormont",
"univers": "Le Trône de fer",
"source": "Game of Thrones (HBO)",
"pourquoi": "La jeune lady de l'Île-aux-Ours rappelle publiquement les seigneurs du Nord à leurs serments pour soutenir Jon Snow.",
"type": "Fiction"
},
{
"nom": "Sam Wilson (le Faucon)",
"univers": "Marvel et DC",
"source": "Falcon et le Soldat de l'hiver (série MCU)",
"pourquoi": "Devenu Captain America, il prend publiquement la parole devant les dirigeants mondiaux pour défendre les déplacés oubliés.",
"type": "Fiction"
}
],
"GU.r": [
{
"nom": "Marco Polo",
"univers": "Histoire",
"source": "Venise, XIIIe siècle",
"pourquoi": "Il sillonne le monde et rencontre ses habitants, fasciné par tout ce qu'il découvre.",
"type": "Historique"
},
{
"nom": "Ibn Battûta",
"univers": "Histoire",
"source": "Maroc, XIVe siècle",
"pourquoi": "Parti pour le pèlerinage de La Mecque, il voyage près de trente ans de l'Afrique à la Chine, curieux de chaque peuple rencontré.",
"type": "Historique"
},
{
"nom": "Le Petit Prince",
"univers": "Littérature et mythologie",
"source": "Le Petit Prince, A. de Saint-Exupéry",
"pourquoi": "Il visite les planètes une à une pour rencontrer leurs habitants.",
"type": "Fiction"
},
{
"nom": "Gulliver",
"univers": "Littérature et mythologie",
"source": "Jonathan Swift, Les Voyages de Gulliver",
"pourquoi": "Chirurgien de marine curieux de tout, il observe les mœurs de Lilliput, de Brobdingnag et d'ailleurs, géant chez les uns et minuscule chez les autres.",
"type": "Fiction"
},
{
"nom": "Kiki",
"univers": "BD et animation",
"source": "Kiki la petite sorcière (Ghibli)",
"pourquoi": "Elle quitte sa famille pour s'installer seule dans une ville inconnue et découvre ses habitants au fil de ses livraisons.",
"type": "Fiction"
},
{
"nom": "Docteur Phlox",
"univers": "Star Trek",
"source": "Star Trek : Enterprise",
"pourquoi": "Médecin denobulien venu par un programme d'échange, il observe avec une curiosité ravie les humains et toutes les espèces rencontrées.",
"type": "Fiction"
}
],
"GU.w": [
{
"nom": "Juliette Récamier",
"univers": "Histoire",
"source": "France, XVIIIe-XIXe siècles",
"pourquoi": "Son salon réunissait tout Paris : entretenir de bonnes relations était son art.",
"type": "Historique"
},
{
"nom": "Kofi Annan",
"univers": "Histoire",
"source": "Ghana, XXe-XXIe siècle",
"pourquoi": "Secrétaire général de l'ONU et prix Nobel de la paix, il était réputé pour son calme et son art de garder le dialogue avec tous.",
"type": "Historique"
},
{
"nom": "Clarissa Dalloway",
"univers": "Littérature et mythologie",
"source": "Mrs Dalloway, V. Woolf",
"pourquoi": "Hôtesse accomplie, elle rassemble les siens et fait réussir chaque réception.",
"type": "Fiction"
},
{
"nom": "Philinte",
"univers": "Littérature et mythologie",
"source": "Molière, Le Misanthrope",
"pourquoi": "Ami d'Alceste, il prône une sagesse accommodante et préserve de bonnes relations avec tous tout en gardant son jugement intact.",
"type": "Fiction"
},
{
"nom": "Jim Halpert",
"univers": "Cinéma, séries et jeux",
"source": "The Office (version américaine)",
"pourquoi": "Apprécié de tous, il entretient d'excellentes relations au bureau tout en gardant une distance ironique, faite de regards caméra et de farces à Dwight.",
"type": "Fiction"
},
{
"nom": "Mon Mothma",
"univers": "Star Wars",
"source": "Andor",
"pourquoi": "Sénatrice brillante dans les mondanités de Coruscant, elle entretient ses relations avec tous tout en gardant secrètes ses véritables activités.",
"type": "Fiction"
},
{
"nom": "Capitaine Jean-Luc Picard",
"univers": "Star Trek",
"source": "Star Trek : The Next Generation",
"pourquoi": "Diplomate hors pair qui représente la Fédération avec aisance, il garde pourtant une distance polie avec son équipage.",
"type": "Fiction"
}
],
"GU.b": [
{
"nom": "Joseph Fouché",
"univers": "Histoire",
"source": "France, XVIIIe-XIXe siècles",
"pourquoi": "Il a traversé tous les régimes : quoi qu'il arrive, il s'en sortait.",
"type": "Historique"
},
{
"nom": "Joséphine de Beauharnais",
"univers": "Histoire",
"source": "France, XVIIIe-XIXe siècle",
"pourquoi": "Emprisonnée sous la Terreur pendant que son mari est guillotiné, elle survit, se réinvente dans les salons du Directoire et devient impératrice.",
"type": "Historique"
},
{
"nom": "Ulysse",
"univers": "Littérature et mythologie",
"source": "L'Odyssée, Homère",
"pourquoi": "Le héros aux mille ruses, qui s'adapte à chaque épreuve pour rentrer chez lui.",
"type": "Fiction"
},
{
"nom": "Le Chat botté",
"univers": "Littérature et mythologie",
"source": "Charles Perrault, Le Maître chat ou le Chat botté",
"pourquoi": "Par l'observation et la ruse, il pousse l'ogre à se changer en souris pour le croquer et fait de son maître le marquis de Carabas.",
"type": "Fiction"
},
{
"nom": "Columbo",
"univers": "Cinéma, séries et jeux",
"source": "Columbo",
"pourquoi": "Il joue l'inspecteur distrait et maladroit pour endormir la méfiance des coupables, mais n'est dupe de rien (« Encore une petite chose… »).",
"type": "Fiction"
},
{
"nom": "Bugs Bunny",
"univers": "BD et animation",
"source": "Looney Tunes",
"pourquoi": "Rien ne le prend au dépourvu : il observe, se déguise et retourne chaque piège contre ses poursuivants.",
"type": "Fiction"
},
{
"nom": "Agent Kallus",
"univers": "Star Wars",
"source": "Star Wars Rebels",
"pourquoi": "Agent du Bureau de la sécurité impériale, il continue à jouer son rôle tout en renseignant secrètement les rebelles sous le nom de Fulcrum.",
"type": "Fiction"
},
{
"nom": "Elim Garak",
"univers": "Star Trek",
"source": "Star Trek : Deep Space Nine",
"pourquoi": "« Simple tailleur » et ancien espion de l'Ordre obsidien, il survit à tout par l'observation, le mensonge élégant et une lucidité sans faille.",
"type": "Fiction"
},
{
"nom": "Severus Rogue",
"univers": "Harry Potter",
"source": "Harry Potter (sept tomes)",
"pourquoi": "Occlumens accompli, il joue un double jeu entre Dumbledore et Voldemort sans jamais se laisser percer à jour, observant tout et n'étant dupe de rien.",
"type": "Fiction"
},
{
"nom": "Sansa Stark",
"univers": "Le Trône de fer",
"source": "Le Trône de fer (G. R. R. Martin) et Game of Thrones (HBO)",
"pourquoi": "Otage à Port-Réal, elle survit en jouant la jeune fille docile tout en observant Cersei et Littlefinger, jusqu'à ne plus être dupe de personne.",
"type": "Fiction"
},
{
"nom": "Batman",
"univers": "Marvel et DC",
"source": "Batman (comics DC ; films)",
"pourquoi": "Détective hors pair qui ne se laisse duper par rien, il cache sa véritable identité derrière le masque d'un milliardaire frivole.",
"type": "Fiction"
},
{
"nom": "Mystique",
"univers": "Marvel et DC",
"source": "X-Men (films)",
"pourquoi": "Métamorphe capable d'imiter n'importe qui, elle infiltre et observe pour survivre et s'en sortir dans toutes les situations.",
"type": "Fiction"
}
]
},
"travail": {
"valeurs": {
"W": {
"epanouit": "Une équipe stable, des rôles clairs, des rituels collectifs, une organisation dont on est fier de faire partie.",
"use": "L'isolement, les structures qui changent sans cesse, la compétition interne, l'absence de cadre commun.",
"equipe": "Le liant : il fait vivre les règles du jeu et la cohésion du groupe.",
"pression": "Se raccroche aux règles et au collectif ; peut se rigidifier et défendre l'ordre établi."
},
"U": {
"epanouit": "Des problèmes complexes, du temps pour comprendre, de l'autonomie intellectuelle, l'occasion d'apprendre en continu.",
"use": "Les tâches répétitives sans enjeu, les décisions arbitraires, l'urgence permanente qui empêche de réfléchir.",
"equipe": "L'éclaireur : il analyse, documente et éclaire les choix.",
"pression": "Analyse encore et encore ; peut se retirer dans la réflexion et tarder à trancher."
},
"B": {
"epanouit": "Des objectifs mesurables, des défis, des résultats visibles et reconnus, des perspectives d'évolution.",
"use": "Les objectifs flous, le mérite non reconnu, les postes sans horizon ni progression.",
"equipe": "Le moteur du résultat : il fixe le cap, le rythme et l'exigence.",
"pression": "Accélère et pousse ; peut passer en force et laisser du monde en route."
},
"R": {
"epanouit": "La variété, le mouvement, la nouveauté, le terrain, les projets courts et intenses.",
"use": "La routine, les procédures lourdes, les longues réunions, le poste fixe derrière un bureau.",
"equipe": "L'étincelle : il met de l'énergie, lance et débloque.",
"pression": "S'agite ou se disperse ; peut chercher l'échappée plutôt que la solution."
},
"G": {
"epanouit": "De la latitude sur la façon de faire, le respect de sa personne, un travail où l'on peut rester soi-même.",
"use": "Le micro-management, la conformité imposée, devoir jouer un rôle qui n'est pas le sien.",
"equipe": "La voix singulière : il apporte un regard propre et dit ce qu'il pense.",
"pression": "Se ferme et défend son territoire ; peut se désengager sans le dire."
}
},
"absentes": {
"W": {
"atout": "À l'aise seul, en indépendant ou en mission ; peu sensible aux jeux d'appartenance et aux luttes de clans.",
"vigilance": "Peut négliger la cohésion, les rituels d'équipe et ce que le groupe attend de lui."
},
"U": {
"atout": "Passe vite à l'action, sans paralysie de l'analyse.",
"vigilance": "Peut négliger la préparation, la documentation et la formation."
},
"B": {
"atout": "Coopère sans esprit de compétition, indifférent aux titres et aux statuts.",
"vigilance": "Peut manquer d'ambition dans ses objectifs ou mal défendre la valeur de son travail."
},
"R": {
"atout": "Constant et fiable dans la durée, à l'aise avec la routine.",
"vigilance": "Peut résister au changement et manquer d'élan quand il faut tout bousculer."
},
"G": {
"atout": "S'adapte au cadre et s'intègre facilement, sans revendiquer de place à part.",
"vigilance": "Peut s'effacer, taire ses désaccords ou se laisser définir par les autres."
}
},
"motivations": {
"WU": {
"pousse": "Maîtriser les règles du métier, fiabiliser l'information, faire en sorte que chacun travaille sur des faits établis.",
"missions": "Qualité, conformité, documentation, formation, gestion des connaissances."
},
"WB": {
"pousse": "Prendre des responsabilités, peser dans l'organisation, trouver sa place dans la structure et la faire fonctionner.",
"missions": "Encadrement, gouvernance, représentation, pilotage d'équipe."
},
"UB": {
"pousse": "Atteindre les objectifs qu'il s'est fixés, avec méthode, en développant son expertise.",
"missions": "Projets à forts enjeux techniques, missions d'expertise, objectifs ambitieux."
},
"UR": {
"pousse": "Résoudre des problèmes nouveaux, inventer, améliorer l'existant.",
"missions": "Recherche et développement, innovation, conseil, résolution de problèmes complexes."
},
"BR": {
"pousse": "Repérer et saisir les occasions avant les autres.",
"missions": "Développement commercial, négociation, lancement d'offres, prospection."
},
"BG": {
"pousse": "Faire fructifier ce qu'il a, rendre sa situation plus confortable et plus durable.",
"missions": "Gestion de patrimoine, développement d'activité, achats, valorisation de ressources."
},
"RG": {
"pousse": "Dépenser son énergie, entraîner les autres, faire bouger les choses.",
"missions": "Terrain, événementiel, sport, animation, missions physiques ou très actives."
},
"RW": {
"pousse": "Servir une cause ou un collectif avec passion.",
"missions": "Associatif, engagement public, sécurité, secours, service d'intérêt général."
},
"GW": {
"pousse": "Faire partie d'une communauté de pairs et en partager les codes.",
"missions": "Métiers d'équipe, réseaux professionnels, coopératives, communautés de pratique."
},
"GU": {
"pousse": "Travailler en accord avec soi-même, au contact du réel, sans faux-semblant.",
"missions": "Artisanat, accompagnement, métiers d'observation et de terrain, travail indépendant."
}
},
"profils": {
"W.rg": {
"role": "Le coéquipier engagé : il fait vivre l'esprit d'équipe et participe à tout.",
"metiers": [
"Animation d'équipe",
"Associatif",
"Sport collectif",
"Hôtellerie et restauration",
"Métiers de service en équipe"
]
},
"W.bg": {
"role": "Le pilier reconnu : il incarne l'institution et en tire sa légitimité.",
"metiers": [
"Fonction publique",
"Professions établies (notaire, pharmacien)",
"Responsable local",
"Représentation"
]
},
"W.br": {
"role": "Le chef naturel : il prend la tête du groupe et l'entraîne.",
"metiers": [
"Management d'équipe",
"Direction d'association",
"Capitaine",
"Chef de chantier",
"Élu local"
]
},
"W.gu": {
"role": "Le membre fiable : il fait ce qui est attendu, comme c'est attendu.",
"metiers": [
"Administration",
"Comptabilité",
"Logistique",
"Métiers réglementés",
"Qualité"
]
},
"W.ur": {
"role": "Le volontaire : il prend les nouvelles missions que le groupe lui confie.",
"metiers": [
"Projets transverses",
"Soins",
"Humanitaire",
"Secourisme",
"Conduite du changement"
]
},
"W.ub": {
"role": "Le collaborateur efficace : il fait aboutir les objectifs du groupe.",
"metiers": [
"Gestion de projet",
"Assistanat de direction",
"Opérations",
"Coordination"
]
},
"U.rg": {
"role": "Le chercheur : il observe, documente et partage ce qu'il découvre.",
"metiers": [
"Recherche",
"Science",
"Journalisme d'investigation",
"Documentation",
"Veille"
]
},
"U.bg": {
"role": "L'expert reconnu : on lui confie ce qui demande de la maîtrise.",
"metiers": [
"Médecine",
"Droit",
"Ingénierie",
"Expertise judiciaire",
"Enseignement supérieur"
]
},
"U.br": {
"role": "Le stratège : il planifie et calcule les coups d'avance.",
"metiers": [
"Stratégie",
"Conseil",
"Finance",
"Direction de projet",
"Analyse de risques"
]
},
"U.gw": {
"role": "Le conseiller : il structure et transmet le savoir du groupe.",
"metiers": [
"Formation",
"Conseil",
"Documentation",
"Bibliothèque",
"Gestion des connaissances"
]
},
"U.rw": {
"role": "Le concepteur : il améliore les solutions pour tout le monde.",
"metiers": [
"Conception",
"Ingénierie",
"Design",
"Méthodes",
"Amélioration continue"
]
},
"U.wb": {
"role": "L'expert de référence : grâce à lui, les projets sont fiables et livrés.",
"metiers": [
"Ingénierie",
"Audit technique",
"Contrôle de gestion",
"Architecture logicielle",
"Maintenance"
]
},
"B.rg": {
"role": "Le développeur : il étend le territoire et gagne de nouvelles ressources.",
"metiers": [
"Développement commercial",
"Croissance externe",
"Immobilier",
"Import-export"
]
},
"B.gu": {
"role": "Le virtuose de la réussite : ce qu'il entreprend aboutit.",
"metiers": [
"Direction générale",
"Entrepreneuriat",
"Sport de haut niveau",
"Métiers d'excellence"
]
},
"B.ur": {
"role": "Le compétiteur : il vise la première place et élève le niveau.",
"metiers": [
"Vente",
"Sport",
"Recherche de pointe",
"Concours",
"Métiers à classement"
]
},
"B.gw": {
"role": "La figure de proue : il incarne et rend visible le collectif.",
"metiers": [
"Communication",
"Spectacle",
"Médias",
"Porte-parole",
"Relations publiques"
]
},
"B.rw": {
"role": "Le bâtisseur : il construit une œuvre qui durera.",
"metiers": [
"Entrepreneuriat",
"Promotion immobilière",
"Architecture",
"Fondation d'entreprise"
]
},
"B.wu": {
"role": "Le dirigeant : il organise le pouvoir, les processus et les plans.",
"metiers": [
"Direction",
"Administration",
"Gestion d'organisation",
"Haute fonction publique"
]
},
"R.bg": {
"role": "Le preneur : il saisit ce qui se présente et l'emporte.",
"metiers": [
"Vente directe",
"Trading",
"Négoce",
"Chasse de têtes",
"Achats"
]
},
"R.gu": {
"role": "L'aventurier : il part le premier là où il y a de la nouveauté.",
"metiers": [
"Reportage",
"Tourisme d'aventure",
"Métiers d'expédition",
"Missions à l'étranger"
]
},
"R.ub": {
"role": "L'audacieux : il prend les risques que les autres évitent.",
"metiers": [
"Pilotage",
"Sports à risque",
"Start-up",
"Interventions spéciales"
]
},
"R.gw": {
"role": "Le boute-en-train : il donne de l'énergie et de la bonne humeur au groupe.",
"metiers": [
"Animation",
"Événementiel",
"Accueil",
"Tourisme",
"Vente en boutique"
]
},
"R.wb": {
"role": "Le propulseur : il impose le rythme et entraîne l'équipe.",
"metiers": [
"Management de terrain",
"Coaching sportif",
"Production",
"Urgences"
]
},
"R.wu": {
"role": "Le pionnier : il ouvre la voie et partage ce qu'il a appris.",
"metiers": [
"Innovation",
"Exploration",
"Lancement de projets",
"Formation terrain"
]
},
"G.br": {
"role": "L'affirmé : il mène sa barque et obtient ce qu'il vise.",
"metiers": [
"Indépendant",
"Entrepreneur",
"Agent",
"Négociation"
]
},
"G.ur": {
"role": "L'original : il apporte un regard différent.",
"metiers": [
"Création artistique",
"Design",
"Publicité",
"Métiers d'auteur"
]
},
"G.ub": {
"role": "L'autonome : on peut lui confier une mission seul, il s'en sortira.",
"metiers": [
"Indépendant",
"Consultant",
"Artisan",
"Télétravail",
"Métiers en solitaire"
]
},
"G.rw": {
"role": "Le sociable : il crée le lien et le climat.",
"metiers": [
"Relation client",
"Accueil",
"Animation",
"Ressources humaines",
"Vente"
]
},
"G.wb": {
"role": "L'atout : celui sur qui les siens peuvent compter.",
"metiers": [
"Soutien d'équipe",
"Assistanat",
"Soin",
"Entreprise familiale"
]
},
"G.wu": {
"role": "Le partenaire : il construit des relations durables et harmonieuses.",
"metiers": [
"Binôme",
"Associé",
"Médiation",
"Accompagnement",
"Partenariats"
]
},
"WU/b": {
"role": "Le savant : il met ses connaissances au service de tous.",
"metiers": [
"Enseignement",
"Bibliothèque",
"Documentation",
"Support",
"Vulgarisation"
]
},
"WU/r": {
"role": "L'initié : il connaît chaque rôle de la maison et tient le sien avec compétence.",
"metiers": [
"Administration",
"Comptabilité",
"Métiers réglementés",
"Secrétariat",
"Banque"
]
},
"WU/g": {
"role": "Le rigoureux : il fait respecter les normes et les méthodes.",
"metiers": [
"Qualité",
"Audit",
"Contrôle",
"Conformité",
"Métrologie"
]
},
"WB/u": {
"role": "Le surveillant : il veille à ce que chacun reste dans le cadre.",
"metiers": [
"Inspection",
"Contrôle",
"Sécurité",
"Encadrement",
"Conformité"
]
},
"WB/r": {
"role": "Le garant : il répond des résultats dans la durée.",
"metiers": [
"Direction",
"Responsabilité d'exploitation",
"Magistrature",
"Fonctions d'autorité"
]
},
"WB/g": {
"role": "Le contrôleur : il fait fonctionner le système comme prévu.",
"metiers": [
"Contrôle de gestion",
"Audit",
"Processus",
"Supervision",
"Planification"
]
},
"UB/w": {
"role": "L'architecte : on l'appelle pour ce que personne d'autre ne sait faire.",
"metiers": [
"Architecture",
"Ingénierie",
"Conception de systèmes",
"Expertise technique"
]
},
"UB/r": {
"role": "Le minutieux : ce qu'il commence, il le finit à 100 %.",
"metiers": [
"Gestion de projet",
"Métiers de précision",
"Édition",
"Développement logiciel"
]
},
"UB/g": {
"role": "Le tenace : il s'acharne jusqu'à ce que ce soit fait.",
"metiers": [
"Recherche",
"Ingénierie",
"Sport d'endurance",
"Métiers de longue haleine"
]
},
"UR/w": {
"role": "Le défricheur : il trace des voies nouvelles.",
"metiers": [
"Innovation",
"Start-up",
"Création",
"Recherche exploratoire",
"Métiers d'improvisation"
]
},
"UR/b": {
"role": "L'éclaireur : il cherche, trouve et partage avec ceux qui en ont besoin.",
"metiers": [
"Support",
"Conseil",
"Recherche appliquée",
"Veille",
"Dépannage"
]
},
"UR/g": {
"role": "L'inventeur : il ose des idées en avance sur leur temps.",
"metiers": [
"R&D",
"Invention",
"Création d'entreprise innovante",
"Laboratoire"
]
},
"BR/w": {
"role": "L'hédoniste : il apporte plaisir et intensité.",
"metiers": [
"Gastronomie",
"Tourisme",
"Loisirs",
"Culture",
"Métiers du goût"
]
},
"BR/u": {
"role": "L'épicurien : il sait donner envie.",
"metiers": [
"Restauration",
"Vente de produits de qualité",
"Luxe",
"Art de vivre"
]
},
"BR/g": {
"role": "Le flamboyant : il brille, et les portes s'ouvrent devant lui.",
"metiers": [
"Commerce",
"Négoce",
"Mode",
"Immobilier",
"Métiers de l'image"
]
},
"BG/w": {
"role": "La diva : elle capte l'attention et la met au service du projet.",
"metiers": [
"Spectacle",
"Médias",
"Communication",
"Influence"
]
},
"BG/u": {
"role": "Le magnat : il fait prospérer et s'entoure de confort.",
"metiers": [
"Direction d'entreprise",
"Investissement",
"Immobilier",
"Gestion de fortune"
]
},
"BG/r": {
"role": "L'investisseur : il accroît patiemment les ressources.",
"metiers": [
"Finance",
"Gestion de patrimoine",
"Épargne",
"Comptabilité"
]
},
"RG/w": {
"role": "Le franc-tireur : il réussit à sa manière, souvent mieux seul.",
"metiers": [
"Indépendant",
"Free-lance",
"Artisan",
"Journalisme",
"Métiers d'auteur"
]
},
"RG/u": {
"role": "Le fonceur : il passe à l'action sans attendre.",
"metiers": [
"Terrain",
"Sport",
"Livraison",
"Urgence",
"Vente de terrain"
]
},
"RG/b": {
"role": "Le compère : il donne le meilleur avec ceux en qui il a confiance.",
"metiers": [
"Binôme",
"Artisanat en équipe",
"Métiers de compagnonnage",
"Associé"
]
},
"RW/u": {
"role": "Le soldat : il protège le groupe et monte la garde.",
"metiers": [
"Armée",
"Police",
"Sécurité",
"Pompiers",
"Protection"
]
},
"RW/b": {
"role": "Le héros : il se dévoue pour les autres, parfois à son détriment.",
"metiers": [
"Secours",
"Soin",
"Humanitaire",
"Enseignement",
"Urgence"
]
},
"RW/g": {
"role": "L'agent : il s'efface derrière la mission.",
"metiers": [
"Fonctions de l'ombre",
"Logistique",
"Assistanat",
"Renseignement",
"Service"
]
},
"GW/u": {
"role": "Le membre : il fait ce qu'il y a à faire pour que l'équipe tourne.",
"metiers": [
"Production",
"Exécution",
"Logistique",
"Services",
"Métiers en équipe"
]
},
"GW/b": {
"role": "Le camarade : il est présent dans les bons et les mauvais moments.",
"metiers": [
"Soutien",
"Aide",
"Accompagnement",
"Métiers du lien"
]
},
"GW/r": {
"role": "Le fidèle : il exécute avec empressement et fiabilité.",
"metiers": [
"Exécution",
"Assistanat",
"Production",
"Administration"
]
},
"GU/w": {
"role": "L'indépendant : il collabore à ses conditions.",
"metiers": [
"Indépendant",
"Consultant",
"Artisan",
"Travail à distance"
]
},
"GU/b": {
"role": "Le sage : il guide avec objectivité.",
"metiers": [
"Mentorat",
"Enseignement",
"Médiation",
"Conseil",
"Accompagnement"
]
},
"GU/r": {
"role": "L'imperturbable : il observe avant d'agir et rassure par son calme.",
"metiers": [
"Expertise",
"Maintenance",
"Pilotage",
"Métiers de sang-froid"
]
},
"WU.g": {
"role": "Le consciencieux : il connaît les méthodes, s'y tient et les fait appliquer.",
"metiers": [
"Formation",
"Qualité",
"Procédures",
"Administration",
"Enseignement"
]
},
"WU.b": {
"role": "Le référent : il fait autorité sur les faits.",
"metiers": [
"Expertise",
"Documentation",
"Journalisme",
"Référent métier"
]
},
"WU.r": {
"role": "Le perfectionneur : il améliore les méthodes pour simplifier la vie des autres.",
"metiers": [
"Amélioration continue",
"Méthodes",
"Ergonomie",
"Organisation"
]
},
"WB.g": {
"role": "Le seigneur : il représente le groupe et se montre à la hauteur.",
"metiers": [
"Représentation",
"Direction",
"Diplomatie",
"Protocole",
"Élu"
]
},
"WB.u": {
"role": "L'administrateur : il répond de chaque rouage.",
"metiers": [
"Administration",
"Direction des opérations",
"Gestion",
"Haute fonction publique"
]
},
"WB.r": {
"role": "Le décideur : il tranche vite et délègue.",
"metiers": [
"Direction",
"Management",
"Urgence",
"Gestion de crise"
]
},
"UB.g": {
"role": "Le virtuose : ses compétences impressionnent.",
"metiers": [
"Expertise de haut niveau",
"Chirurgie",
"Musique",
"Métiers d'excellence"
]
},
"UB.w": {
"role": "Le méthodique : il avance étape par étape jusqu'au but.",
"metiers": [
"Gestion de projet",
"Ingénierie",
"Recherche",
"Planification"
]
},
"UB.r": {
"role": "Le performeur : il relève les défis et livre des résultats spectaculaires.",
"metiers": [
"Conseil",
"Vente",
"Sport",
"Spectacle",
"Missions à défis"
]
},
"UR.g": {
"role": "L'explorateur : il découvre, cartographie et rapporte.",
"metiers": [
"Recherche",
"Exploration",
"Géographie",
"Journalisme",
"Métiers de terrain"
]
},
"UR.w": {
"role": "Le visionnaire : il imagine mieux pour le groupe.",
"metiers": [
"Innovation",
"Urbanisme",
"Prospective",
"Direction de projet"
]
},
"UR.b": {
"role": "L'innovateur : il concrétise des idées nouvelles.",
"metiers": [
"R&D",
"Entrepreneuriat",
"Design",
"Création de produits"
]
},
"BR.g": {
"role": "L'opportuniste : il ne rate aucune occasion.",
"metiers": [
"Commerce",
"Trading",
"Négociation",
"Achat-revente"
]
},
"BR.w": {
"role": "L'ambitieux : il entraîne le monde dans son sillage.",
"metiers": [
"Direction",
"Politique",
"Entrepreneuriat",
"Leadership"
]
},
"BR.u": {
"role": "Le spéculateur : il bâtit en pariant à coup sûr.",
"metiers": [
"Finance",
"Investissement",
"Promotion",
"Création d'entreprise"
]
},
"BG.r": {
"role": "Le collectionneur : il réunit ce qui a de la valeur.",
"metiers": [
"Art",
"Antiquités",
"Gestion de collections",
"Luxe",
"Achats"
]
},
"BG.w": {
"role": "L'influent : il fait fructifier son réseau.",
"metiers": [
"Relations publiques",
"Lobbying",
"Développement commercial",
"Réseau"
]
},
"BG.u": {
"role": "Le businessman : il multiplie les activités rentables.",
"metiers": [
"Entrepreneuriat",
"Direction commerciale",
"Investissement",
"Holding"
]
},
"RG.b": {
"role": "Le débrouillard : il trouve la faille et s'en sort.",
"metiers": [
"Négoce",
"Récupération",
"Débrouille",
"Brocante",
"Métiers d'opportunité"
]
},
"RG.w": {
"role": "Le pilier : utile, efficace, nécessaire.",
"metiers": [
"Terrain",
"Exploitation",
"Maintenance",
"Logistique",
"Métiers d'équipe"
]
},
"RG.u": {
"role": "Le curieux : il se passionne pour tout ce qu'il ne connaît pas.",
"metiers": [
"Journalisme",
"Recherche",
"Documentaire",
"Métiers polyvalents"
]
},
"RW.g": {
"role": "Le militant : il porte la voix du groupe.",
"metiers": [
"Syndicalisme",
"Associatif",
"Politique",
"ONG",
"Plaidoyer"
]
},
"RW.u": {
"role": "L'incitateur : il rallie par conviction.",
"metiers": [
"Leadership",
"Enseignement",
"Conduite du changement",
"Engagement public"
]
},
"RW.b": {
"role": "Le promoteur : il fait rayonner la cause.",
"metiers": [
"Communication",
"Collecte de fonds",
"Marketing de cause",
"Événementiel"
]
},
"GW.r": {
"role": "Le partisan : il motive les autres sans compter.",
"metiers": [
"Animation",
"Coaching",
"Management de proximité",
"Sport"
]
},
"GW.u": {
"role": "Le soutien : il est attentif aux besoins de chacun.",
"metiers": [
"Soin",
"Aide sociale",
"Accompagnement",
"Ressources humaines"
]
},
"GW.b": {
"role": "Le représentant : il prend la parole pour les siens.",
"metiers": [
"Représentation du personnel",
"Porte-parole",
"Médiation",
"Associatif"
]
},
"GU.r": {
"role": "Le visiteur : il rencontre le monde et ceux qui l'habitent.",
"metiers": [
"Tourisme",
"Journalisme",
"Métiers itinérants",
"Relations internationales"
]
},
"GU.w": {
"role": "Le contributeur : il entretient les bonnes relations.",
"metiers": [
"Relations publiques",
"Événementiel",
"Partenariats",
"Accueil"
]
},
"GU.b": {
"role": "L'agile : il s'adapte à tout.",
"metiers": [
"Polyvalence",
"Conseil",
"Intérim",
"Gestion de crise",
"Métiers changeants"
]
}
}
}
});
