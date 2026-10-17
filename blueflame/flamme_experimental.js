/* =====================================================================
   Flamme Bleue — contenus expérimentaux (1.0, 17/10/2026)
   Propositions de Claude, en cours de relecture par Pierre : affichées avec la mention « expérimental ».
   - personnalites : 2 personnages par profil (fiction, mythologie, figures historiques décédées ; jamais de personnes vivantes) ;
   - travail : le profil au travail, en trois couches combinées selon les scores (portrait) :
       profils (rôle en équipe, familles de métiers), valeurs présentes et absentes, motivations.
   Sources : « personnalites des profils » et « le profil au travail », 17-10-2026 (classeurs Excel).
   Une fois validés, ces contenus iront dans la base, éditables dans la console.
   ===================================================================== */
window.FLAMME_EXPERIMENTAL = Object.assign({ VERSION: { numero: "1.0", date: "2026-10-17 15:00" } }, {
"personnalites": {
"W.rg": [
{
"nom": "Ron Weasley",
"type": "Fiction",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Fidèle à sa bande et à sa famille, il suit le groupe dans toutes ses aventures, pour l'appartenance autant que pour l'action."
},
{
"nom": "Porthos",
"type": "Fiction",
"source": "Les Trois Mousquetaires, A. Dumas",
"pourquoi": "Il vit pour la compagnie des mousquetaires et met volontiers sa force au service des tâches communes."
}
],
"W.bg": [
{
"nom": "Monsieur Homais",
"type": "Fiction",
"source": "Madame Bovary, G. Flaubert",
"pourquoi": "Pharmacien installé et notable du bourg, il tire sa position et sa considération des institutions locales."
},
{
"nom": "Monsieur de Rênal",
"type": "Fiction",
"source": "Le Rouge et le Noir, Stendhal",
"pourquoi": "Maire de Verrières, il jouit d'une place à part dans sa ville et veille à ce qu'elle soit reconnue."
}
],
"W.br": [
{
"nom": "Vercingétorix",
"type": "Historique",
"source": "Gaule, Ier siècle av. J.-C.",
"pourquoi": "Il fédère des tribus rivales autour de lui et prend la tête de la coalition gauloise."
},
{
"nom": "Aragorn",
"type": "Fiction",
"source": "Le Seigneur des Anneaux, J. R. R. Tolkien",
"pourquoi": "Il rassemble les peuples libres et assume le commandement que les autres n'osent pas tenir."
}
],
"W.gu": [
{
"nom": "Charles Ingalls",
"type": "Fiction",
"source": "La Petite Maison dans la prairie, L. Ingalls Wilder",
"pourquoi": "Pilier honnête de sa communauté, il fait ce qui est attendu, comme c'est attendu, et y trouve sa paix."
},
{
"nom": "Ned Flanders",
"type": "Fiction",
"source": "Les Simpson",
"pourquoi": "Voisin modèle et paroissien exemplaire, il trouve ordre et sérénité dans les règles de sa communauté."
}
],
"W.ur": [
{
"nom": "Florence Nightingale",
"type": "Historique",
"source": "Angleterre, XIXe siècle",
"pourquoi": "Elle s'engage là où l'on a besoin d'elle et fait évoluer les soins pour servir son pays."
},
{
"nom": "Neville Londubat",
"type": "Fiction",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Il répond présent quand le groupe a besoin de lui et grandit à travers les missions qu'il accepte."
}
],
"W.ub": [
{
"nom": "Maximilien de Béthune, duc de Sully",
"type": "Historique",
"source": "France, règne d'Henri IV",
"pourquoi": "Serviteur efficace du royaume, il met ses compétences au service d'une organisation qui fonctionne."
},
{
"nom": "Docteur Watson",
"type": "Fiction",
"source": "Sherlock Holmes, A. Conan Doyle",
"pourquoi": "Collaborateur compétent et fiable, il permet au tandem d'aboutir et n'en tire pas moins une certaine fierté."
}
],
"U.rg": [
{
"nom": "Charles Darwin",
"type": "Historique",
"source": "Angleterre, XIXe siècle",
"pourquoi": "Il observe, réfléchit, documente pendant des années, puis partage une théorie qui repousse les frontières du savoir."
},
{
"nom": "Professeur Tournesol",
"type": "Fiction",
"source": "Les Aventures de Tintin, Hergé",
"pourquoi": "Savant absorbé par ses recherches, souvent abstraites, dont les découvertes finissent par servir à tous."
}
],
"U.bg": [
{
"nom": "Louis Pasteur",
"type": "Historique",
"source": "France, XIXe siècle",
"pourquoi": "Maître incontesté de son domaine, respecté, il accepte de grandes responsabilités au nom de la science."
},
{
"nom": "Docteur Gregory House",
"type": "Fiction",
"source": "Dr House (série)",
"pourquoi": "Compétence reconnue de tous, assurance totale, et une façon très personnelle d'exercer son art."
}
],
"U.br": [
{
"nom": "Cardinal de Richelieu",
"type": "Historique",
"source": "France, XVIIe siècle",
"pourquoi": "Il calcule chaque coup d'avance et mène ses projets avec ambition, entouré de subordonnés."
},
{
"nom": "Professeur Moriarty",
"type": "Fiction",
"source": "Sherlock Holmes, A. Conan Doyle",
"pourquoi": "Stratège froid qui planifie dans l'ombre et fait exécuter ses plans par d'autres."
}
],
"U.gw": [
{
"nom": "Denis Diderot",
"type": "Historique",
"source": "France, XVIIIe siècle",
"pourquoi": "Avec l'Encyclopédie, il rassemble et structure le savoir de son époque pour le transmettre au plus grand nombre."
},
{
"nom": "Merlin",
"type": "Fiction",
"source": "Légende arthurienne",
"pourquoi": "Conseiller du roi, il met son savoir au service de la cour et forme ceux qui en ont besoin."
}
],
"U.rw": [
{
"nom": "Gustave Eiffel",
"type": "Historique",
"source": "France, XIXe siècle",
"pourquoi": "Ingénieur qui améliore sans cesse les techniques de construction pour faire mieux avec moins de matière."
},
{
"nom": "Q",
"type": "Fiction",
"source": "James Bond, I. Fleming",
"pourquoi": "Il conçoit pour son service des outils toujours plus ingénieux, plus attaché à l'innovation qu'à la production."
}
],
"U.wb": [
{
"nom": "Hermione Granger",
"type": "Fiction",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Elle sait tout ce qu'il faut savoir et l'applique au bon moment : grâce à elle, les projets du groupe aboutissent."
},
{
"nom": "Montgomery Scott (Scotty)",
"type": "Fiction",
"source": "Star Trek",
"pourquoi": "Ingénieur en chef sur qui repose la fiabilité du vaisseau, il livre toujours, et souvent en avance."
}
],
"B.rg": [
{
"nom": "Alexandre le Grand",
"type": "Historique",
"source": "Macédoine, IVe siècle av. J.-C.",
"pourquoi": "Insatiable conquérant, il voit le monde comme un territoire à acquérir et à posséder."
},
{
"nom": "Charles Foster Kane",
"type": "Fiction",
"source": "Citizen Kane, O. Welles",
"pourquoi": "Il accumule journaux, objets d'art et domaines, toujours en quête de nouvelles acquisitions."
}
],
"B.gu": [
{
"nom": "Jules César",
"type": "Historique",
"source": "Rome, Ier siècle av. J.-C.",
"pourquoi": "« Je suis venu, j'ai vu, j'ai vaincu » : quand il décide d'une chose, il fait ce qu'il faut pour y parvenir."
},
{
"nom": "Hercule Poirot",
"type": "Fiction",
"source": "Romans d'A. Christie",
"pourquoi": "Il excelle dans son art, le sait, et ne laisse jamais une enquête inachevée."
}
],
"B.ur": [
{
"nom": "Achille",
"type": "Mythologie",
"source": "L'Iliade, Homère",
"pourquoi": "Le meilleur des guerriers grecs, qui ne vise rien de moins que la gloire éternelle."
},
{
"nom": "Jesse Owens",
"type": "Historique",
"source": "États-Unis, XXe siècle",
"pourquoi": "Quatre médailles d'or en 1936 : le talent et l'avance sur tous ses concurrents."
}
],
"B.gw": [
{
"nom": "Sarah Bernhardt",
"type": "Historique",
"source": "France, XIXe-XXe siècles",
"pourquoi": "Première vedette internationale, son prestige la précédait partout où elle allait."
},
{
"nom": "Gilderoy Lockhart",
"type": "Fiction",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Célébrité soigneusement entretenue, il adore être au centre de l'attention."
}
],
"B.rw": [
{
"nom": "Ramsès II",
"type": "Historique",
"source": "Égypte antique",
"pourquoi": "Il couvre le pays de monuments à son nom pour que sa gloire lui survive."
},
{
"nom": "John Hammond",
"type": "Fiction",
"source": "Jurassic Park, M. Crichton",
"pourquoi": "Il bâtit, brique après brique, un parc grandiose qui doit porter son nom."
}
],
"B.wu": [
{
"nom": "Otto von Bismarck",
"type": "Historique",
"source": "Allemagne, XIXe siècle",
"pourquoi": "Il organise patiemment son pouvoir et dirige l'État selon des plans de marche rigoureux."
},
{
"nom": "Tywin Lannister",
"type": "Fiction",
"source": "Le Trône de fer, G. R. R. Martin",
"pourquoi": "Dirigeant sérieux et déterminé, il fait passer l'organisation de sa maison avant tout."
}
],
"R.bg": [
{
"nom": "Barbe-Noire",
"type": "Historique",
"source": "Pirate, XVIIIe siècle",
"pourquoi": "Quand il convoite un navire ou un butin, il le prend, comme ses rivaux en feraient autant."
},
{
"nom": "Gargantua",
"type": "Fiction",
"source": "Gargantua, F. Rabelais",
"pourquoi": "Appétit démesuré pour tout ce qui le tente : il dévore la vie à pleines dents."
}
],
"R.gu": [
{
"nom": "Arthur Rimbaud",
"type": "Historique",
"source": "France, XIXe siècle",
"pourquoi": "Il fuit le quotidien qui l'ennuie et part chercher l'inconnu jusqu'en Abyssinie."
},
{
"nom": "Indiana Jones",
"type": "Fiction",
"source": "Les Aventuriers de l'arche perdue (films)",
"pourquoi": "Il va d'expérience en expérience, porté par le frisson de l'inconnu."
}
],
"R.ub": [
{
"nom": "Amelia Earhart",
"type": "Historique",
"source": "États-Unis, XXe siècle",
"pourquoi": "Aviatrice qui repousse ses limites et prend des risques que personne n'osait prendre."
},
{
"nom": "Han Solo",
"type": "Fiction",
"source": "Star Wars",
"pourquoi": "Il aime le danger, improvise et réussit là où les autres ne s'aventurent pas."
}
],
"R.gw": [
{
"nom": "Tigrou",
"type": "Fiction",
"source": "Winnie l'ourson, A. A. Milne",
"pourquoi": "Il bondit dans chaque instant et partage son enthousiasme avec toute la bande."
},
{
"nom": "Peregrin Touque (Pippin)",
"type": "Fiction",
"source": "Le Seigneur des Anneaux, J. R. R. Tolkien",
"pourquoi": "Il se jette dans l'aventure par amour de ses amis, avec une énergie qui déborde."
}
],
"R.wb": [
{
"nom": "Joachim Murat",
"type": "Historique",
"source": "France, Premier Empire",
"pourquoi": "Il mène les charges de cavalerie à un rythme soutenu : les autres n'ont qu'à suivre."
},
{
"nom": "Capitaine Achab",
"type": "Fiction",
"source": "Moby Dick, H. Melville",
"pourquoi": "Il entraîne tout son équipage dans sa propre direction, à toute vitesse."
}
],
"R.wu": [
{
"nom": "Roald Amundsen",
"type": "Historique",
"source": "Norvège, XXe siècle",
"pourquoi": "Premier au pôle Sud, il a tracé la voie et fait profiter les autres de ses expériences."
},
{
"nom": "Capitaine James T. Kirk",
"type": "Fiction",
"source": "Star Trek",
"pourquoi": "Il emmène son équipage là où personne n'est allé, toujours en tête."
}
],
"G.br": [
{
"nom": "Coco Chanel",
"type": "Historique",
"source": "France, XXe siècle",
"pourquoi": "Elle a construit sa vie selon ses propres décisions et obtenu ce qu'elle voulait, sans laisser personne interférer."
},
{
"nom": "Scarlett O'Hara",
"type": "Fiction",
"source": "Autant en emporte le vent, M. Mitchell",
"pourquoi": "Elle n'a besoin de personne pour décider de sa vie et se débrouille toujours pour obtenir ce qu'elle veut."
}
],
"G.ur": [
{
"nom": "Salvador Dalí",
"type": "Historique",
"source": "Espagne, XXe siècle",
"pourquoi": "Il cultive sa différence avec éclat et suit son inspiration du moment, sans se laisser influencer."
},
{
"nom": "Fifi Brindacier",
"type": "Fiction",
"source": "Fifi Brindacier, A. Lindgren",
"pourquoi": "Elle vit à sa façon, au gré de son imagination, et se moque des conventions."
}
],
"G.ub": [
{
"nom": "Henry David Thoreau",
"type": "Historique",
"source": "États-Unis, XIXe siècle",
"pourquoi": "Retiré à Walden, il montre qu'on peut se suffire à soi-même avec très peu."
},
{
"nom": "Robinson Crusoé",
"type": "Fiction",
"source": "Robinson Crusoé, D. Defoe",
"pourquoi": "Seul sur son île, il trouve en lui toutes les ressources pour s'en sortir."
}
],
"G.rw": [
{
"nom": "Alexandre Dumas",
"type": "Historique",
"source": "France, XIXe siècle",
"pourquoi": "Bon vivant entouré d'amis, il séduisait par son naturel et sa générosité."
},
{
"nom": "Ferris Bueller",
"type": "Fiction",
"source": "La Folle Journée de Ferris Bueller (film)",
"pourquoi": "Tout le monde l'aime : il entraîne ses amis avec un naturel désarmant."
}
],
"G.wb": [
{
"nom": "Molly Weasley",
"type": "Fiction",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Irremplaçable pour les siens, elle est solidaire dès que l'un d'eux a besoin de soutien."
},
{
"nom": "Marge Simpson",
"type": "Fiction",
"source": "Les Simpson",
"pourquoi": "Le pilier de sa famille, toujours là pour chacun, tout en restant elle-même."
}
],
"G.wu": [
{
"nom": "Horatio",
"type": "Fiction",
"source": "Hamlet, W. Shakespeare",
"pourquoi": "Ami loyal et mesuré, il reste fidèle aux quelques personnes qui comptent vraiment pour lui."
},
{
"nom": "Mélanie Hamilton",
"type": "Fiction",
"source": "Autant en emporte le vent, M. Mitchell",
"pourquoi": "Douce et fidèle, elle recherche l'harmonie et ne lâche jamais ceux qu'elle aime."
}
],
"WU/b": [
{
"nom": "Émile Littré",
"type": "Historique",
"source": "France, XIXe siècle",
"pourquoi": "Il met une immense somme de connaissances à la disposition de tous avec son dictionnaire."
},
{
"nom": "Jacques Paganel",
"type": "Fiction",
"source": "Les Enfants du capitaine Grant, J. Verne",
"pourquoi": "Géographe au savoir inépuisable, qu'il partage avec tout l'équipage."
}
],
"WU/r": [
{
"nom": "Mr Stevens",
"type": "Fiction",
"source": "Les Vestiges du jour, K. Ishiguro",
"pourquoi": "Majordome parfaitement compétent dans son rôle, sans jamais s'autoriser d'écart ni d'émotion."
},
{
"nom": "Percy Weasley",
"type": "Fiction",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Il connaît le règlement par cœur et se tient à jour de tout ce que son rôle exige."
}
],
"WU/g": [
{
"nom": "Emmanuel Kant",
"type": "Historique",
"source": "Prusse, XVIIIe siècle",
"pourquoi": "Réglé comme une horloge, il suit des principes rigoureux sans s'accorder d'exception."
},
{
"nom": "Sheldon Cooper",
"type": "Fiction",
"source": "The Big Bang Theory (série)",
"pourquoi": "Il exige que chaque chose suive la méthode établie et ne tolère aucun écart."
}
],
"WB/u": [
{
"nom": "Javert",
"type": "Fiction",
"source": "Les Misérables, V. Hugo",
"pourquoi": "Il veille à ce que chacun reste dans le cadre de la loi et se veut lui-même irréprochable."
},
{
"nom": "Dolores Ombrage",
"type": "Fiction",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Elle surveille chaque comportement et fait respecter le règlement à la lettre."
}
],
"WB/r": [
{
"nom": "Charles de Gaulle",
"type": "Historique",
"source": "France, XXe siècle",
"pourquoi": "Il se tient « en charge » de la nation et en répond dans la durée, avec sérieux."
},
{
"nom": "Eddard Stark",
"type": "Fiction",
"source": "Le Trône de fer, G. R. R. Martin",
"pourquoi": "Il tient son rôle avec sérieux et courage, jusqu'au bout."
}
],
"WB/g": [
{
"nom": "Mademoiselle Rottenmeier",
"type": "Fiction",
"source": "Heidi, J. Spyri",
"pourquoi": "Pour elle, la maison fonctionne si l'on respecte le règlement : aucune place à l'improvisation."
},
{
"nom": "Thomas Gradgrind",
"type": "Fiction",
"source": "Temps difficiles, C. Dickens",
"pourquoi": "Il encadre tout selon les faits et le système prévu, sans fantaisie aucune."
}
],
"UB/w": [
{
"nom": "Vauban",
"type": "Historique",
"source": "France, XVIIe siècle",
"pourquoi": "Il invente des méthodes de siège et de fortification que d'autres ne savaient pas concevoir."
},
{
"nom": "Tony Stark",
"type": "Fiction",
"source": "Iron Man (Marvel)",
"pourquoi": "Il réalise ce qui est impossible aux autres et s'ennuie profondément dans la routine."
}
],
"UB/r": [
{
"nom": "Gustave Flaubert",
"type": "Historique",
"source": "France, XIXe siècle",
"pourquoi": "Il reprend chaque phrase jusqu'à la perfection : rien n'est jamais « ni fait, ni à faire »."
},
{
"nom": "Phileas Fogg",
"type": "Fiction",
"source": "Le Tour du monde en 80 jours, J. Verne",
"pourquoi": "Il déroule son plan à la minute près et le mène à son terme."
}
],
"UB/g": [
{
"nom": "Marie Curie",
"type": "Historique",
"source": "France, XIXe-XXe siècles",
"pourquoi": "Elle traite des tonnes de minerai pour isoler le radium : elle ne s'arrête que quand c'est achevé."
},
{
"nom": "Edmond Dantès",
"type": "Fiction",
"source": "Le Comte de Monte-Cristo, A. Dumas",
"pourquoi": "Des années de patience et d'acharnement pour mener son projet jusqu'au bout."
}
],
"UR/w": [
{
"nom": "Galilée",
"type": "Historique",
"source": "Italie, XVIIe siècle",
"pourquoi": "Il explore des voies que personne n'a suivies, quitte à contredire toutes les consignes."
},
{
"nom": "MacGyver",
"type": "Fiction",
"source": "MacGyver (série)",
"pourquoi": "Roi de l'improvisation, il trouve toujours une voie nouvelle là où les autres suivent le manuel."
}
],
"UR/b": [
{
"nom": "Benjamin Franklin",
"type": "Historique",
"source": "États-Unis, XVIIIe siècle",
"pourquoi": "Inventeur curieux de tout, il partage ses découvertes et met son ingéniosité au service des autres."
},
{
"nom": "Tintin",
"type": "Fiction",
"source": "Les Aventures de Tintin, Hergé",
"pourquoi": "Il enquête, cherche et trouve, et se rend toujours disponible pour les problèmes des autres."
}
],
"UR/g": [
{
"nom": "Nikola Tesla",
"type": "Historique",
"source": "États-Unis, XIXe-XXe siècles",
"pourquoi": "En avance sur son temps, ses idées ont heurté avant de s'imposer."
},
{
"nom": "Doc Emmett Brown",
"type": "Fiction",
"source": "Retour vers le futur (films)",
"pourquoi": "Inventeur sans garde-fou, il expérimente d'abord et rassure ensuite."
}
],
"BR/w": [
{
"nom": "Giacomo Casanova",
"type": "Historique",
"source": "Venise, XVIIIe siècle",
"pourquoi": "Pour lui, la vie doit être agréable, intense et variée : il profite de chaque instant."
},
{
"nom": "Falstaff",
"type": "Fiction",
"source": "Henri IV et Les Joyeuses Commères de Windsor, W. Shakespeare",
"pourquoi": "Bon vivant qui préfère le plaisir du moment à toute forme de devoir."
}
],
"BR/u": [
{
"nom": "Jean Anthelme Brillat-Savarin",
"type": "Historique",
"source": "France, XVIIIe-XIXe siècles",
"pourquoi": "Gastronome qui écoute ses envies et s'organise pour les combler avec art."
},
{
"nom": "Dionysos",
"type": "Mythologie",
"source": "Mythologie grecque",
"pourquoi": "Dieu de la fête et du vin, qui ne tolère aucune frustration."
}
],
"BR/g": [
{
"nom": "Oscar Wilde",
"type": "Historique",
"source": "Irlande et Angleterre, XIXe siècle",
"pourquoi": "Dandy flamboyant, il savait choisir et être choisi, et menait sa vie avec éclat."
},
{
"nom": "Georges Duroy (Bel-Ami)",
"type": "Fiction",
"source": "Bel-Ami, G. de Maupassant",
"pourquoi": "Toujours à l'affût des bonnes affaires, de toutes les bonnes affaires, il réussit avec aisance."
}
],
"BG/w": [
{
"nom": "Maria Callas",
"type": "Historique",
"source": "Grèce et Italie, XXe siècle",
"pourquoi": "Diva absolue, elle captait l'attention de toute une salle et savait en tirer parti."
},
{
"nom": "Bianca Castafiore",
"type": "Fiction",
"source": "Les Aventures de Tintin, Hergé",
"pourquoi": "Elle adore briller et que tout tourne autour d'elle."
}
],
"BG/u": [
{
"nom": "John D. Rockefeller",
"type": "Historique",
"source": "États-Unis, XIXe-XXe siècles",
"pourquoi": "Il a mis toute son énergie à bâtir la fortune et le statut qui garantissent son confort."
},
{
"nom": "Balthazar Picsou",
"type": "Fiction",
"source": "Univers Disney",
"pourquoi": "Richissime, il tient à sa fortune et à son statut plus qu'à tout le reste."
}
],
"BG/r": [
{
"nom": "Jacob Fugger",
"type": "Historique",
"source": "Augsbourg, XVe-XVIe siècles",
"pourquoi": "Banquier qui a accru son patrimoine toute sa vie, avec une attention de chaque instant."
},
{
"nom": "Le père Grandet",
"type": "Fiction",
"source": "Eugénie Grandet, H. de Balzac",
"pourquoi": "Il accroît son patrimoine sou par sou, depuis toujours."
}
],
"RG/w": [
{
"nom": "Cyrano de Bergerac",
"type": "Fiction",
"source": "Cyrano de Bergerac, E. Rostand",
"pourquoi": "Ses propres idées, ses propres méthodes : il refuse de se plier aux attentes des autres."
},
{
"nom": "Corto Maltese",
"type": "Fiction",
"source": "Corto Maltese, H. Pratt",
"pourquoi": "Marin libre qui n'obéit qu'à ses propres projets, même quand il travaille pour d'autres."
}
],
"RG/u": [
{
"nom": "D'Artagnan",
"type": "Fiction",
"source": "Les Trois Mousquetaires, A. Dumas",
"pourquoi": "Spontané, il fonce et entraîne les autres dans sa course."
},
{
"nom": "Obélix",
"type": "Fiction",
"source": "Astérix, Goscinny et Uderzo",
"pourquoi": "Il suit son élan, a besoin de bouger, et ne se pose pas trop de questions."
}
],
"RG/b": [
{
"nom": "Friedrich Engels",
"type": "Historique",
"source": "Allemagne et Angleterre, XIXe siècle",
"pourquoi": "Compère fidèle de Marx, il agit avec la personne en qui il a toute confiance."
},
{
"nom": "Sancho Panza",
"type": "Fiction",
"source": "Don Quichotte, M. de Cervantes",
"pourquoi": "Il suit son maître partout : avec un compagnon de confiance, on peut tout lui demander."
}
],
"RW/u": [
{
"nom": "Le chevalier Bayard",
"type": "Historique",
"source": "France, XVe-XVIe siècles",
"pourquoi": "« Sans peur et sans reproche », il monte la garde et intervient quand il le faut."
},
{
"nom": "Boromir",
"type": "Fiction",
"source": "Le Seigneur des Anneaux, J. R. R. Tolkien",
"pourquoi": "Il protège son peuple de toute son énergie, quitte à s'y perdre."
}
],
"RW/b": [
{
"nom": "Jean Moulin",
"type": "Historique",
"source": "France, XXe siècle",
"pourquoi": "Il a servi la Résistance au péril de sa vie, jusqu'au sacrifice."
},
{
"nom": "Frodon Sacquet",
"type": "Fiction",
"source": "Le Seigneur des Anneaux, J. R. R. Tolkien",
"pourquoi": "Il porte le fardeau pour tous, à son propre détriment."
}
],
"RW/g": [
{
"nom": "Lucie Aubrac",
"type": "Historique",
"source": "France, XXe siècle",
"pourquoi": "Résistante qui s'efface derrière la mission et lui consacre son temps, son intelligence et sa loyauté."
},
{
"nom": "George Smiley",
"type": "Fiction",
"source": "Romans de J. le Carré",
"pourquoi": "Agent discret pour qui seule compte la mission, jamais sa propre personne."
}
],
"GW/u": [
{
"nom": "Malabar (Boxer)",
"type": "Fiction",
"source": "La Ferme des animaux, G. Orwell",
"pourquoi": "« Je travaillerai plus dur » : il fait ce qu'il y a à faire pour que la ferme fonctionne."
},
{
"nom": "Hodor",
"type": "Fiction",
"source": "Le Trône de fer, G. R. R. Martin",
"pourquoi": "Il épouse sa tâche sans discuter : on a besoin de gens comme lui."
}
],
"GW/b": [
{
"nom": "Samsagace Gamegie",
"type": "Fiction",
"source": "Le Seigneur des Anneaux, J. R. R. Tolkien",
"pourquoi": "Présent dans les bons comme dans les pires moments, toujours attentif et secourable."
},
{
"nom": "Chewbacca",
"type": "Fiction",
"source": "Star Wars",
"pourquoi": "Camarade indéfectible, il ne quitte jamais ses amis quand ça tourne mal."
}
],
"GW/r": [
{
"nom": "Waylon Smithers",
"type": "Fiction",
"source": "Les Simpson",
"pourquoi": "Il fait tout ce qu'on lui demande avec empressement, et en tire sa fierté."
},
{
"nom": "Nestor",
"type": "Fiction",
"source": "Les Aventures de Tintin, Hergé",
"pourquoi": "Majordome dévoué qui exécute chaque demande sans se plaindre."
}
],
"GU/w": [
{
"nom": "Diogène",
"type": "Historique",
"source": "Grèce antique",
"pourquoi": "Il vit selon ses propres critères et n'a que faire du regard des autres, même d'Alexandre."
},
{
"nom": "Sherlock Holmes",
"type": "Fiction",
"source": "Romans d'A. Conan Doyle",
"pourquoi": "Il travaille à ses conditions et décline sans état d'âme ce qui ne l'intéresse pas."
}
],
"GU/b": [
{
"nom": "Socrate",
"type": "Historique",
"source": "Athènes, Ve siècle av. J.-C.",
"pourquoi": "Il cherche à voir le monde tel qu'il est et guide les autres sans rien demander en retour."
},
{
"nom": "Maître Yoda",
"type": "Fiction",
"source": "Star Wars",
"pourquoi": "Il livre son expérience sans compter à ceux qui viennent le chercher."
}
],
"GU/r": [
{
"nom": "Marc Aurèle",
"type": "Historique",
"source": "Rome, IIe siècle",
"pourquoi": "Empereur stoïcien qui observe avant d'agir et ne se laisse pas emporter."
},
{
"nom": "Spock",
"type": "Fiction",
"source": "Star Trek",
"pourquoi": "Imperturbable, il analyse avant d'agir et n'entreprend que ce qu'il sait pouvoir réussir."
}
],
"WU.g": [
{
"nom": "Minerva McGonagall",
"type": "Fiction",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Elle enseigne les règles, les fait appliquer et sait y mettre la souplesse nécessaire."
},
{
"nom": "Inspecteur Lestrade",
"type": "Fiction",
"source": "Sherlock Holmes, A. Conan Doyle",
"pourquoi": "Policier qui s'en tient au cadre et aux procédures de Scotland Yard."
}
],
"WU.b": [
{
"nom": "Pierre Larousse",
"type": "Historique",
"source": "France, XIXe siècle",
"pourquoi": "Son dictionnaire fait autorité sur les faits, et il n'a cessé d'élargir ses propres connaissances."
},
{
"nom": "Mycroft Holmes",
"type": "Fiction",
"source": "Sherlock Holmes, A. Conan Doyle",
"pourquoi": "La référence du gouvernement britannique : tout le savoir utile passe par lui."
}
],
"WU.r": [
{
"nom": "Louis Braille",
"type": "Historique",
"source": "France, XIXe siècle",
"pourquoi": "Il améliore une méthode existante pour rendre la vie des autres beaucoup plus simple."
},
{
"nom": "Mary Poppins",
"type": "Fiction",
"source": "Mary Poppins, P. L. Travers",
"pourquoi": "Elle peaufine chaque détail de la vie de la maison pour la rendre plus simple et plus joyeuse."
}
],
"WB.g": [
{
"nom": "Robert Crawley, comte de Grantham",
"type": "Fiction",
"source": "Downton Abbey (série)",
"pourquoi": "Très honoré de représenter son domaine et les siens, il se veut à la hauteur de son rang."
},
{
"nom": "Le roi Arthur",
"type": "Fiction",
"source": "Légende arthurienne",
"pourquoi": "Il incarne son royaume et la Table ronde, et porte ce rang avec dignité."
}
],
"WB.u": [
{
"nom": "Jean-Baptiste Colbert",
"type": "Historique",
"source": "France, XVIIe siècle",
"pourquoi": "Il répond de chaque rouage de l'administration royale et fait appliquer ses décisions."
},
{
"nom": "Sir Humphrey Appleby",
"type": "Fiction",
"source": "Yes Minister (série)",
"pourquoi": "Haut fonctionnaire qui maîtrise chaque rouage de la machine d'État."
}
],
"WB.r": [
{
"nom": "Georges Clemenceau",
"type": "Historique",
"source": "France, XIXe-XXe siècles",
"pourquoi": "« Le Tigre » veut des résultats tout de suite et tranche sans attendre l'unanimité."
},
{
"nom": "Miranda Priestly",
"type": "Fiction",
"source": "Le Diable s'habille en Prada, L. Weisberger",
"pourquoi": "Elle tranche en un instant et délègue tout le reste."
}
],
"UB.g": [
{
"nom": "Niccolò Paganini",
"type": "Historique",
"source": "Italie, XVIIIe-XIXe siècles",
"pourquoi": "Un virtuose dont la maîtrise stupéfiait le public."
},
{
"nom": "Beth Harmon",
"type": "Fiction",
"source": "Le Jeu de la dame, W. Tevis",
"pourquoi": "Ses compétences aux échecs impressionnent tous ses adversaires."
}
],
"UB.w": [
{
"nom": "Jean-François Champollion",
"type": "Historique",
"source": "France, XIXe siècle",
"pourquoi": "Il déchiffre les hiéroglyphes étape par étape, avec une endurance intellectuelle hors du commun."
},
{
"nom": "Commissaire Maigret",
"type": "Fiction",
"source": "Romans de G. Simenon",
"pourquoi": "Il avance pas à pas, avec méthode, jusqu'à la solution."
}
],
"UB.r": [
{
"nom": "Harry Houdini",
"type": "Historique",
"source": "États-Unis, XIXe-XXe siècles",
"pourquoi": "Chaque évasion était un défi relevé devant un public impressionné."
},
{
"nom": "Ethan Hunt",
"type": "Fiction",
"source": "Mission impossible (films)",
"pourquoi": "Il relève les défis réputés impossibles et impressionne par ses résultats."
}
],
"UR.g": [
{
"nom": "Alexander von Humboldt",
"type": "Historique",
"source": "Allemagne, XVIIIe-XIXe siècles",
"pourquoi": "Il découvre, explore et cartographie des régions entières, prenant les risques qu'il faut."
},
{
"nom": "Professeur Lidenbrock",
"type": "Fiction",
"source": "Voyage au centre de la Terre, J. Verne",
"pourquoi": "Il s'engage en terres inconnues pour découvrir ce que personne n'a vu."
}
],
"UR.w": [
{
"nom": "Henry Dunant",
"type": "Historique",
"source": "Suisse, XIXe siècle",
"pourquoi": "Il imagine la Croix-Rouge et met sa vision au service de tous."
},
{
"nom": "Professeur Charles Xavier",
"type": "Fiction",
"source": "X-Men (Marvel)",
"pourquoi": "Il pense un monde meilleur et met son esprit au service de sa communauté."
}
],
"UR.b": [
{
"nom": "Léonard de Vinci",
"type": "Historique",
"source": "Italie, Renaissance",
"pourquoi": "Ses idées étaient nouvelles et formidables, et le monde n'était pas toujours prêt à les écouter."
},
{
"nom": "Géo Trouvetou",
"type": "Fiction",
"source": "Univers Disney",
"pourquoi": "Il concrétise sans cesse des idées nouvelles, pas toujours comprises."
}
],
"BR.g": [
{
"nom": "Talleyrand",
"type": "Historique",
"source": "France, XVIIIe-XIXe siècles",
"pourquoi": "Toujours à l'affût de ce qui pouvait lui être profitable, vif et implacable."
},
{
"nom": "Thénardier",
"type": "Fiction",
"source": "Les Misérables, V. Hugo",
"pourquoi": "Il ne rate aucune occasion d'en tirer profit."
}
],
"BR.w": [
{
"nom": "Napoléon Bonaparte",
"type": "Historique",
"source": "France, XVIIIe-XIXe siècles",
"pourquoi": "Il a agi pour se faire un nom et entraîné le monde dans son sillage."
},
{
"nom": "Eugène de Rastignac",
"type": "Fiction",
"source": "La Comédie humaine, H. de Balzac",
"pourquoi": "« À nous deux maintenant ! » : il veut conquérir Paris et y gagner de l'influence."
}
],
"BR.u": [
{
"nom": "John Law",
"type": "Historique",
"source": "Écosse et France, XVIIIe siècle",
"pourquoi": "Il crée, bâtit et parie gros sur son système, avec une volonté sans faille."
},
{
"nom": "Gordon Gekko",
"type": "Fiction",
"source": "Wall Street (film)",
"pourquoi": "Spéculateur qui ne parie que lorsqu'il croit le coup assuré."
}
],
"BG.r": [
{
"nom": "Peggy Guggenheim",
"type": "Historique",
"source": "États-Unis et Italie, XXe siècle",
"pourquoi": "Elle s'entoure d'œuvres et de confort, et développe sans cesse sa collection."
},
{
"nom": "Smaug",
"type": "Fiction",
"source": "Le Hobbit, J. R. R. Tolkien",
"pourquoi": "Il amasse un trésor immense et ne supporte pas d'en perdre la moindre pièce."
}
],
"BG.w": [
{
"nom": "Madame de Pompadour",
"type": "Historique",
"source": "France, XVIIIe siècle",
"pourquoi": "Elle sait se rendre incontournable et place son réseau au centre de la cour."
},
{
"nom": "Lord Varys",
"type": "Fiction",
"source": "Le Trône de fer, G. R. R. Martin",
"pourquoi": "Son réseau d'informateurs fait de lui un homme dont personne ne peut se passer."
}
],
"BG.u": [
{
"nom": "Jacques Cœur",
"type": "Historique",
"source": "France, XVe siècle",
"pourquoi": "Marchand aux activités nombreuses et variées, qui fait travailler beaucoup de monde pour lui."
},
{
"nom": "Rhett Butler",
"type": "Fiction",
"source": "Autant en emporte le vent, M. Mitchell",
"pourquoi": "Il trouve son bénéfice dans toutes sortes d'affaires, même en pleine guerre."
}
],
"RG.b": [
{
"nom": "Renart",
"type": "Fiction",
"source": "Le Roman de Renart",
"pourquoi": "Il s'en sort toujours gagnant en observant et en saisissant ce qui passe à sa portée."
},
{
"nom": "Tom Sawyer",
"type": "Fiction",
"source": "Les Aventures de Tom Sawyer, M. Twain",
"pourquoi": "Il fait repeindre sa palissade par les autres et en tire même profit."
}
],
"RG.w": [
{
"nom": "Rubeus Hagrid",
"type": "Fiction",
"source": "Harry Potter, J. K. Rowling",
"pourquoi": "Utile, loyal et fort : quand on a besoin de lui, il est là."
},
{
"nom": "Petit Jean",
"type": "Fiction",
"source": "Légende de Robin des Bois",
"pourquoi": "Le bras droit loyal et infatigable de la bande."
}
],
"RG.u": [
{
"nom": "Pline l'Ancien",
"type": "Historique",
"source": "Rome, Ier siècle",
"pourquoi": "Curieux de tout, il est mort en allant observer de près l'éruption du Vésuve."
},
{
"nom": "Alice",
"type": "Fiction",
"source": "Alice au pays des merveilles, L. Carroll",
"pourquoi": "Elle se rue derrière tout ce qui l'intrigue, et tout l'intrigue."
}
],
"RW.g": [
{
"nom": "Louise Michel",
"type": "Historique",
"source": "France, XIXe siècle",
"pourquoi": "Voix de la Commune, et parfois son bras."
},
{
"nom": "Enjolras",
"type": "Fiction",
"source": "Les Misérables, V. Hugo",
"pourquoi": "Il porte la cause de ses camarades jusque sur la barricade."
}
],
"RW.u": [
{
"nom": "Martin Luther King",
"type": "Historique",
"source": "États-Unis, XXe siècle",
"pourquoi": "Il rallie par la force de ses convictions et voit comment le monde doit progresser."
},
{
"nom": "John Keating",
"type": "Fiction",
"source": "Le Cercle des poètes disparus (film)",
"pourquoi": "Il éveille ses élèves et les entraîne par conviction."
}
],
"RW.b": [
{
"nom": "Eva Perón",
"type": "Historique",
"source": "Argentine, XXe siècle",
"pourquoi": "Elle a fait briller sa cause, et brillé avec elle."
},
{
"nom": "Katniss Everdeen",
"type": "Fiction",
"source": "Hunger Games, S. Collins",
"pourquoi": "Devenue le « geai moqueur », elle sait que son image porte la cause."
}
],
"GW.r": [
{
"nom": "Georges Danton",
"type": "Historique",
"source": "France, XVIIIe siècle",
"pourquoi": "Son énergie inépuisable galvanisait les siens : « De l'audace, encore de l'audace ! »"
},
{
"nom": "Ted Lasso",
"type": "Fiction",
"source": "Ted Lasso (série)",
"pourquoi": "Toujours là pour motiver les autres, avec un optimisme à toute épreuve."
}
],
"GW.u": [
{
"nom": "Sœur Emmanuelle",
"type": "Historique",
"source": "France et Égypte, XXe siècle",
"pourquoi": "Attentive aux besoins des plus démunis, elle était là pour eux dans la difficulté."
},
{
"nom": "Monseigneur Myriel",
"type": "Fiction",
"source": "Les Misérables, V. Hugo",
"pourquoi": "Il ouvre sa porte à celui qui est en difficulté, sans rien demander."
}
],
"GW.b": [
{
"nom": "Jean Jaurès",
"type": "Historique",
"source": "France, XIXe-XXe siècles",
"pourquoi": "Il prend la parole pour les ouvriers, dont il a fait sa cause et son identité."
},
{
"nom": "Atticus Finch",
"type": "Fiction",
"source": "Ne tirez pas sur l'oiseau moqueur, H. Lee",
"pourquoi": "Il prend la parole pour défendre sa communauté, même quand ce n'est pas facile."
}
],
"GU.r": [
{
"nom": "Marco Polo",
"type": "Historique",
"source": "Venise, XIIIe siècle",
"pourquoi": "Il sillonne le monde et rencontre ses habitants, fasciné par tout ce qu'il découvre."
},
{
"nom": "Le Petit Prince",
"type": "Fiction",
"source": "Le Petit Prince, A. de Saint-Exupéry",
"pourquoi": "Il visite les planètes une à une pour rencontrer leurs habitants."
}
],
"GU.w": [
{
"nom": "Juliette Récamier",
"type": "Historique",
"source": "France, XVIIIe-XIXe siècles",
"pourquoi": "Son salon réunissait tout Paris : entretenir de bonnes relations était son art."
},
{
"nom": "Clarissa Dalloway",
"type": "Fiction",
"source": "Mrs Dalloway, V. Woolf",
"pourquoi": "Hôtesse accomplie, elle rassemble les siens et fait réussir chaque réception."
}
],
"GU.b": [
{
"nom": "Joseph Fouché",
"type": "Historique",
"source": "France, XVIIIe-XIXe siècles",
"pourquoi": "Il a traversé tous les régimes : quoi qu'il arrive, il s'en sortait."
},
{
"nom": "Ulysse",
"type": "Mythologie",
"source": "L'Odyssée, Homère",
"pourquoi": "Le héros aux mille ruses, qui s'adapte à chaque épreuve pour rentrer chez lui."
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
"role": "Le professionnel conforme : il tient son rôle avec compétence.",
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
"role": "Le flamboyant : il saisit les bonnes affaires et brille en le faisant.",
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
"role": "L'aligné : il exécute avec empressement et fiabilité.",
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
"role": "L'appliqué : il diffuse et fait appliquer les méthodes.",
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
"role": "Le roublard : il trouve la faille et s'en sort.",
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
