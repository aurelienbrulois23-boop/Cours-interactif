/* Contenu des modules, en données.
 *
 * Les modules Markdown de knowledge-base/cours/ restent la référence rédigée
 * et sourcée ; ce fichier en est la transcription jouable. Toute divergence se
 * tranche en faveur du Markdown.
 *
 * Aucune référence, citation ni chiffre n'est ajouté ici : ce qui n'est pas
 * dans le module écrit n'entre pas dans le module joué.
 */

export const MODULES = [

{
  id: 'H6-04',
  niveau: '6e',
  theme: 'Thème 2 — Le monde des cités grecques',
  titre: 'Qui décide dans une cité grecque ?',
  duree: '2 séances de 55 min',
  affirmation: { id: 'CLM-H6-003bis', ref: 'CLM-H6-004', confiance: 'moyen' },

  cible: {
    enonce: 'le mot <em>démocratie</em>, à Athènes, désigne une participation politique réelle mais réservée aux citoyens',
    piece: '<em>Constitution des Athéniens</em>, chapitre 43, attribué à Aristote.',
    permet: 'Il existait des institutions réglées où des citoyens décidaient, avec tirage au sort et rotation des charges.',
    nePermetPas: 'Ni que tous les habitants participaient, ni ce que vivaient ceux qui ne participaient pas. Le texte est de plus postérieur à la période étudiée.'
  },

  porte: {
    duree: '4 min',
    scene: [
      'Une salle de musée, un vendredi de montage. Sur le cartel imprimé, neuf mots.'
    ],
    cartel: '« À Athènes, tous les habitants décidaient ensemble. »',
    suite: [
      "L'exposition ouvre lundi. Le cartel est déjà collé. Quelqu'un, dans l'équipe, trouve que la phrase va trop vite — sans savoir encore dire pourquoi."
    ],
    mission: "Écrire le cartel qui remplacera celui-là. Trois lignes, exactes, et défendables devant un visiteur qui demande : <em>« comment le savez-vous ? »</em>",
    image: { etiquette: 'AMBIANCE', note: "Aucune vue de musée ne prouve quoi que ce soit sur Athènes. Elle plante la scène, rien de plus." }
  },

  anticipation: {
    duree: '6 min',
    consigne: "Avant d'ouvrir le moindre document. Votre réponse ne sera ni ramassée ni notée : elle sert à ce que la suite ait quelque chose à corriger.",
    question: "Le texte que nous allons lire décrit qui siège au Conseil d'Athènes. Quand il écrit <strong>« les Athéniens »</strong>, de qui parle-t-il ?",
    options: [
      { cle: 'A', texte: "de toutes les personnes vivant à Athènes" },
      { cle: 'B', texte: "d'une partie d'entre elles seulement" }
    ],
    relance: "Et la question qui compte : <strong>à quoi verra-t-on qu'on a raison ?</strong>",
    note: "On aurait pu demander : « sur cent habitants, combien votaient ? » Nous ne le demandons pas, parce que notre source ne l'établit pas. Un chiffre qu'on ne peut pas sourcer ne se met pas dans un cours — même s'il ferait un bel effet."
  },

  collision: {
    duree: '20 min',
    piece: {
      nom: "Constitution des Athéniens, chapitre 43",
      attribution: 'Aristote',
      ou: 'Perseus Digital Library, Tufts University',
      url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0046:chapter=43',
      src: 'SRC-H6-006',
      statut: 'rapporté',
      contenu: "Le chapitre décrit le fonctionnement du Conseil : la répartition en sections, la rotation des charges, le recours au tirage au sort.",
      etiquette: 'PIÈCE',
      note: "Le fragment lu est la reproduction d'un texte transmis et traduit — pas une photographie de l'Athènes du Ve siècle."
    },
    taches: {
      intro: "Trois choses à faire dire au texte.",
      lignes: [
        { titre: 'Une pratique', consigne: "Relever un mécanisme de décision.", cherche: "Tirage au sort, rotation, siège au Conseil." },
        { titre: 'Une condition', consigne: "Relever ce qu'il faut être pour l'exercer.", cherche: "Avoir le statut de citoyen." },
        { titre: 'Un silence', consigne: "Chercher ce dont le texte <strong>ne parle pas</strong>.", cherche: "Il ne décrit pas les femmes, les étrangers installés, les personnes réduites en esclavage, les enfants." }
      ],
      apres: "La troisième ligne est la plus difficile, et c'est celle qui compte. Chercher ce qu'un document ne dit pas est un geste d'historien, pas un exercice de lecture."
    },
    outil: {
      nom: 'Le guichet',
      texte: "Une source institutionnelle est un guichet. Elle répond très bien à la question qu'on lui a apprise — <em>comment siège-t-on au Conseil ?</em> — et absolument pas aux autres. Si vous lui demandez ce que pensaient ceux qui n'y siégeaient pas, elle vous regarde poliment et ferme le rideau."
    },
    garde: "Aucun élève ne joue le rôle d'une personne exclue ou réduite en esclavage."
  },

  transformation: {
    duree: '12 min',
    etablit: "Athènes disposait d'institutions réglées, où des citoyens exerçaient des charges selon des procédures précises. Le cartel a donc raison sur un point : il s'y décidait bien quelque chose, collectivement.",
    netablitPas: "Que tous les habitants y prenaient part. Le texte ne le nie pas non plus : il n'en parle pas. Et il est <strong>postérieur</strong> à la période classique étudiée, lu par une chaîne de copies et de traductions.",
    bascule: "Le cartel est donc faux sur un mot : <strong>« tous »</strong>.",
    residu: {
      categorie: 'archivistique',
      texte: "Ceux qui ne siégeaient pas n'ont pas laissé de texte décrivant leur point de vue. Leur absence dans notre source <strong>n'est pas une preuve de leur absence dans la cité</strong> : c'est une conséquence de qui écrivait, et pour qui."
    },
    garde: "Un document nous renseigne d'abord sur celui qui l'a produit. Le silence d'une archive est une information sur l'archive, pas nécessairement sur le monde."
  },

  extraction: {
    duree: '8 min',
    consigne: "Après le verdict, sans document sous les yeux.",
    questions: [
      { enonce: "Quel mot du cartel d'origine fallait-il changer, et par quoi ?",
        attendu: "« tous » → « les citoyens », avec mention d'au moins une catégorie exclue." },
      { enonce: "Le texte d'Aristote prouve-t-il que les femmes ne participaient pas — ou seulement qu'il n'en parle pas ?",
        attendu: "Il n'en parle pas : c'est un silence de la source. Le savoir vient d'ailleurs, en croisant d'autres documents ; ce texte-là ne le démontre pas à lui seul." }
    ],
    laVraie: "La seconde question est la vraie. Un élève qui répond « il le prouve » a retenu le fait et manqué la méthode."
  },

  rappels: [
    { quand: 'J+1', forme: 'Question éclair, 30 secondes',
      indice: "Le guichet. Qu'est-ce qu'une source institutionnelle ne sait pas faire ?" },
    { quand: 'H6-05', forme: 'Application à un cas différent',
      indice: "Distinguer un récit de fondation d'un document institutionnel. Même geste, autre matière." },
    { quand: 'H6-07', forme: 'Transfert',
      indice: "Comparer citoyenneté athénienne et citoyenneté romaine sans les confondre." }
  ],

  trace: "Dans la Grèce antique, les cités sont des communautés politiques distinctes. À Athènes, des <strong>citoyens</strong> participent aux institutions par des procédures réglées, dont le tirage au sort. Tous les habitants ne sont pas citoyens : cette démocratie est <strong>limitée</strong>. Le texte qui nous renseigne décrit très bien les règles du Conseil et ne dit rien de ceux qui n'y siègent pas — c'est un guichet. Le silence d'une source nous renseigne sur la source avant de nous renseigner sur le monde.",
  reussite: "Je situe une cité, j'explique une institution avec le bon vocabulaire, je distingue habitants, citoyens et exclus de la participation, et je sais dire ce que ma source ne prouve pas."
},

{
  id: 'H6-05',
  niveau: '6e',
  theme: "Thème 2 — Rome du mythe à l'histoire",
  titre: 'Quand une ville raconte ses origines',
  duree: '2 séances de 55 min',
  affirmation: { ref: 'CLM-H6-003', confiance: 'élevé' },

  cible: {
    enonce: "un récit de fondation renseigne d'abord sur <strong>ceux qui le racontent</strong>",
    piece: "<em>Histoire romaine</em>, livre I, chapitre 7. Tite-Live.",
    permet: "Qu'à l'époque de Tite-Live, on racontait ainsi la naissance de Rome, avec ces personnages et ces valeurs.",
    nePermetPas: "Le déroulement des origines elles-mêmes. Le texte est tardif par rapport aux origines supposées."
  },

  // Le rappel du module précédent : reconstruit par l'élève, jamais réénoncé.
  rappelEntrant: {
    module: 'H6-04',
    outil: 'le guichet',
    question: "La semaine dernière, un outil vous a servi à démonter un cartel : <strong>le guichet</strong>. En une phrase, à quoi servait-il ?",
    attendu: "Une source institutionnelle répond très bien à la question qu'on lui a apprise, et pas aux autres.",
    puis: "Maintenant, essayez-le sur le cartel qui suit.",
    echec: "L'outil ne prend pas. Tite-Live ne décrit pas une procédure de son temps : il raconte un passé lointain. Le guichet servait à repérer ce qu'une source refuse de dire. Ici, la source parle volontiers — le problème est ailleurs.",
    lecon: "Un outil qui ne convient pas n'est pas un outil raté : c'est un outil dont on vient d'apprendre la portée."
  },

  porte: {
    duree: '5 min',
    scene: ["Deuxième salle du même musée. Un autre cartel, deux lignes."],
    cartel: '« Rome a été fondée par Romulus, comme le raconte Tite-Live. »',
    suite: [],
    mission: "Dire ce qui cloche — sachant que, cette fois, la phrase n'est pas fausse.",
    image: { etiquette: 'AMBIANCE', note: "Décor. Aucune valeur probatoire." }
  },

  anticipation: {
    duree: '6 min',
    consigne: "Chacun écrit sa réponse avant d'ouvrir le texte.",
    question: "Tite-Live écrit son <em>Histoire romaine</em> <strong>longtemps après</strong> les origines qu'il raconte. Cela signifie-t-il :",
    options: [
      { cle: 'A', texte: "que son texte ne sert à rien pour connaître Rome" },
      { cle: 'B', texte: "qu'il sert, mais pas à ce qu'on croyait" }
    ],
    relance: "Et la question qui compte : <strong>s'il sert, à quoi ?</strong>",
    note: "De combien de temps parle-t-on ? Le module ne le chiffre pas : notre source dit « tardif », elle ne donne pas d'écart. Ceux qui veulent le savoir iront le chercher — et devront citer où ils l'ont trouvé."
  },

  collision: {
    duree: '20 min',
    piece: {
      nom: "Histoire romaine, livre I, chapitre 7",
      attribution: 'Tite-Live',
      ou: 'Perseus Digital Library, Tufts University',
      url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.02.0151:book=1:chapter=7',
      src: 'SRC-H6-007',
      statut: 'rapporté',
      contenu: "L'extrait est bref, adapté, et signalé comme traduction.",
      etiquette: 'PIÈCE',
      note: "Nous lisons une traduction numérisée d'un texte transmis par copies. Ce n'est pas l'écriture de Tite-Live sous les yeux."
    },
    taches: {
      intro: "Faire parler la pièce.",
      lignes: [
        { titre: 'Qui écrit, quand, dans quel genre ?', consigne: "Situer l'auteur par rapport au temps raconté.", cherche: "Tite-Live ; postérieur ; récit littéraire et historique." },
        { titre: 'Que raconte le texte ?', consigne: "Relever <strong>sans ajouter</strong> un détail absent.", cherche: "Les personnages et l'épisode, tels qu'ils sont écrits." },
        { titre: 'Que rend-il visible malgré la distance ?', consigne: "Chercher ce que le récit met en valeur.", cherche: "Une façon de raconter la fondation, et ce qu'elle valorise." },
        { titre: 'Que ne prouve-t-il pas directement ?', consigne: "Nommer la limite.", cherche: "Le déroulement des origines." },
        { titre: 'Quelle autre preuve chercher ?', consigne: "Proposer une source complémentaire.", cherche: "Vestiges datés, autre texte indépendant, contexte." }
      ],
      apres: "Le verdict de source s'obtient quand les cinq lignes sont justifiées. Aucun score de vitesse : ni chronomètre, ni classement."
    },
    outil: {
      nom: 'Le train',
      texte: "Trois wagons, toujours dans le même ordre : <strong>temps raconté</strong> → <strong>temps de l'auteur</strong> → <strong>temps de l'historien</strong>. Tite-Live est dans le deuxième, les origines dans le premier. <strong>Un train ne roule pas en arrière :</strong> il n'a pas pu voir ce qu'il raconte. Nous sommes dans le troisième, et nous ne voyons le premier que par ce que les autres transmettent, et par ce que le sol a gardé."
    }
  },

  transformation: {
    duree: '12 min',
    etablit: "Qu'à l'époque de Tite-Live, on racontait ainsi la naissance de Rome. Ce récit, ces personnages, ce qu'ils mettent en valeur : tout cela est attesté par le texte lui-même, puisqu'il en est l'exemple.",
    netablitPas: "Le déroulement des origines. Le texte est tardif par rapport à elles, et nous le lisons par une chaîne de copies et de traductions.",
    bascule: "<strong>Le cartel n'est donc pas faux : il est mal branché.</strong> « Comme le raconte Tite-Live » est exact — c'est bien ce qu'il raconte. Ce qui manque, c'est que Tite-Live raconte, il n'atteste pas.",
    residu: {
      categorie: 'réflexif',
      texte: "Le cas est expliqué, et il découvre une mécanique qui n'a rien d'antique : <strong>les sociétés se racontent une naissance, et ce récit dit ce qu'elles valorisent.</strong> Les États, les villes, les familles, les clubs le font encore. L'historien ne commence pas par demander si c'est vrai : il demande qui raconte, à qui, et à quelle occasion."
    },
    garde: "« Mythe » ne veut pas dire « mensonge sans intérêt », et « texte ancien » ne veut pas dire « témoin direct ». Les deux erreurs sont symétriques, et la seconde est la plus fréquente.",
    outils: {
      intro: "Deux outils, deux emplois. Aucun n'est meilleur.",
      lignes: [
        { outil: 'Guichet', quand: 'Une institution décrit ses propres règles', repere: "Ce que la source <strong>refuse</strong> de dire" },
        { outil: 'Train', quand: "Un auteur raconte un temps qu'il n'a pas vu", repere: "La <strong>distance</strong> entre ce qui est raconté et celui qui raconte" }
      ],
      apres: "Se tromper d'outil est la faute la plus ordinaire — et la plus facile à corriger quand on sait qu'ils sont deux."
    }
  },

  extraction: {
    duree: '8 min',
    consigne: "Après le verdict, sans document.",
    questions: [
      { enonce: "Pourquoi le guichet ne convenait-il pas à Tite-Live, et le train si ?",
        attendu: "Le guichet sert quand une source décrit ses propres règles et tait le reste. Tite-Live ne décrit pas son institution : il raconte un temps qu'il n'a pas vu. C'est une question de distance, donc de train." },
      { enonce: "« Tite-Live est ancien, donc son récit est sûr. » Que répondez-vous, en une phrase ?",
        attendu: "L'ancienneté d'un texte ne le rapproche pas de ce qu'il raconte. Il faut regarder l'écart entre le temps raconté et le temps de l'auteur." }
    ],
    laVraie: "La première est la vraie. Elle teste la portée d'un outil, pas son nom — ce qui distingue l'élève qui a retenu un mot de celui qui sait s'en servir."
  },

  rappels: [
    { quand: 'J+1', forme: 'Question éclair, 30 s',
      indice: "Le train. Quel wagon un auteur ne peut-il jamais occuper ?" },
    { quand: 'H6-06', forme: 'Application, autre matière',
      indice: "Un manuscrit : où placer le temps du texte, le temps de la copie, le temps de la lecture ?" },
    { quand: "Fin d'année", forme: 'Transfert',
      indice: "Récit de fondation, inscription, carte : quel outil pour chacune ?" }
  ],

  trace: "Les récits de Romulus et Rémus sont des <strong>récits fondateurs</strong> de Rome. Tite-Live les écrit longtemps après les origines qu'il raconte : il occupe le <strong>temps de l'auteur</strong>, pas le <strong>temps raconté</strong>. Son texte est une source importante pour étudier la mémoire et les valeurs romaines, et il ne permet pas d'établir seul les faits des origines. Un récit peut compter beaucoup pour une société sans prouver ce qu'il raconte.",
  reussite: "Je ne confonds pas ancienneté, vérité et intérêt historique ; je place correctement les trois temps ; et je sais dire pourquoi le guichet ne servait pas ici."
}

];

export function moduleParId(id) {
  return MODULES.find(m => m.id === id) || null;
}
