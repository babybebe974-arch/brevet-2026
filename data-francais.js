// ==================== DONNÉES COMMUNES FRANÇAIS (260 CARTES) ====================
const CHAPITRES_FR = {
  1: { titre: "Classes grammaticales", cartes: [
    { q: "Quelles sont les 9 classes grammaticales ?", r: "Nom, déterminant, adjectif, pronom, verbe, adverbe, préposition, conjonction, interjection." },
    { q: "Donnez 3 déterminants.", r: "le, la, les / un, une, des / mon, ton, son" },
    { q: "Citez les 7 conjonctions de coordination.", r: "Mais, ou, et, donc, or, ni, car." },
    { q: "Différence entre adverbe et préposition ?", r: "Adverbe modifie un verbe/adjectif. Préposition introduit un complément." },
    { q: "Qu'est-ce qu'un déterminant possessif ?", r: "mon, ton, son, notre, votre, leur" },
    { q: "Qu'est-ce qu'un déterminant démonstratif ?", r: "ce, cet, cette, ces" },
    { q: "Qu'est-ce qu'un pronom personnel ?", r: "je, tu, il, elle, on, nous, vous, ils, elles, me, te, se, le, la, lui, y, en" },
    { q: "Qu'est-ce qu'un pronom relatif ?", r: "qui, que, quoi, dont, où, lequel" },
    { q: "Qu'est-ce qu'un pronom démonstratif ?", r: "celui, celle, ceux, celles, ce, ceci, cela" },
    { q: "Qu'est-ce qu'une interjection ?", r: "Mot-phrase exprimant une émotion (Ah ! Oh ! Hélas !)" }
  ]},
  2: { titre: "Fonctions grammaticales", cartes: [
    { q: "Qu'est-ce que le COD ?", r: "Complément d'objet direct. Répond à 'quoi ?' ou 'qui ?'" },
    { q: "Qu'est-ce que le COI ?", r: "Complément d'objet indirect. Répond à 'à qui ?' ou 'de quoi ?'" },
    { q: "Qu'est-ce que l'attribut du sujet ?", r: "Donne une qualité au sujet, relié par verbe d'état" },
    { q: "Qu'est-ce qu'un complément d'agent ?", r: "Dans une phrase passive, indique qui fait l'action" },
    { q: "Qu'est-ce qu'un complément circonstanciel de temps ?", r: "Indique quand l'action se passe" },
    { q: "Qu'est-ce qu'un complément circonstanciel de lieu ?", r: "Indique où l'action se passe" },
    { q: "Qu'est-ce qu'un complément circonstanciel de manière ?", r: "Indique comment l'action se passe" },
    { q: "Qu'est-ce qu'un complément circonstanciel de cause ?", r: "Indique pourquoi l'action se passe" },
    { q: "Qu'est-ce qu'un complément circonstanciel de but ?", r: "Indique dans quel but" },
    { q: "Qu'est-ce qu'un complément circonstanciel de concession ?", r: "Indique une opposition" }
  ]},
  3: { titre: "La phrase", cartes: [
    { q: "Qu'est-ce qu'une phrase simple ?", r: "Une seule proposition (un verbe)" },
    { q: "Qu'est-ce qu'une phrase complexe ?", r: "Plusieurs propositions" },
    { q: "Qu'est-ce qu'une proposition indépendante ?", r: "Ne dépend d'aucune autre" },
    { q: "Qu'est-ce qu'une proposition principale ?", r: "Dont dépend une subordonnée" },
    { q: "Qu'est-ce qu'une subordonnée relative ?", r: "Introduite par qui, que, dont, où" },
    { q: "Qu'est-ce qu'une subordonnée complétive ?", r: "Introduite par 'que'" },
    { q: "Subordonnée circonstancielle de cause", r: "parce que, puisque, comme" },
    { q: "Subordonnée circonstancielle de conséquence", r: "si bien que, de sorte que" },
    { q: "Subordonnée circonstancielle de but", r: "pour que, afin que" },
    { q: "Subordonnée circonstancielle de temps", r: "quand, lorsque, pendant que" }
  ]},
  4: { titre: "Temps et modes verbaux", cartes: [
    { q: "À quoi sert l'imparfait ?", r: "Description ou habitude dans le passé" },
    { q: "À quoi sert le passé composé ?", r: "Action ponctuelle ou bilan (oral)" },
    { q: "À quoi sert le passé simple ?", r: "Action ponctuelle (récit littéraire)" },
    { q: "À quoi sert le plus-que-parfait ?", r: "Antériorité par rapport à une action passée" },
    { q: "À quoi sert le futur simple ?", r: "Action à venir" },
    { q: "À quoi sert le futur antérieur ?", r: "Action achevée avant une autre future" },
    { q: "À quoi sert le présent ?", r: "Actualité, vérité générale, habitude" },
    { q: "À quoi sert le subjonctif ?", r: "Doute, souhait, émotion, obligation" },
    { q: "À quoi sert le conditionnel ?", r: "Hypothèse, condition, souhait" },
    { q: "À quoi sert l'impératif ?", r: "Ordre ou conseil" }
  ]},
  5: { titre: "Les accords", cartes: [
    { q: "Règle d'accord sujet-verbe", r: "Le verbe s'accorde en personne et nombre avec le sujet" },
    { q: "Participe passé avec avoir", r: "S'accorde avec le COD si placé avant" },
    { q: "Participe passé avec être", r: "S'accorde avec le sujet" },
    { q: "Accord des adjectifs de couleur", r: "Invariables s'ils viennent d'un nom (marron, orange)" },
    { q: "Accord des adjectifs composés", r: "Seul le dernier adjectif s'accorde" },
    { q: "Accord dans le groupe nominal", r: "Déterminant, nom et adjectif s'accordent" },
    { q: "Accord du verbe avec plusieurs sujets", r: "Le verbe se met au pluriel" },
    { q: "Accord du participe passé des verbes pronominaux", r: "S'accorde avec le sujet si COD" },
    { q: "Règle de l'accord de 'tout'", r: "Tout = déterminant, adverbe, pronom ou nom" },
    { q: "Accord des noms composés", r: "Dépend de la nature des mots" }
  ]},
  6: { titre: "Les homophones", cartes: [
    { q: "Différence a/à", r: "a = avoir ; à = préposition" },
    { q: "Différence ou/où", r: "ou = conjonction ; où = pronom/adverbe" },
    { q: "Différence on/ont", r: "on = pronom ; ont = avoir" },
    { q: "Différence son/sont", r: "son = possessif ; sont = être" },
    { q: "Différence ce/se", r: "ce = démonstratif ; se = pronom" },
    { q: "Différence ces/ses", r: "ces = démonstratif ; ses = possessif" },
    { q: "Différence quand/quant", r: "quand = temps ; quant = en ce qui concerne" },
    { q: "Différence peu/peut/peuvent", r: "peu = quantité ; peut/peuvent = pouvoir" },
    { q: "Différence leur/leurs", r: "leur = pronom ; leurs = déterminant" },
    { q: "Différence quel/qu'elle", r: "quel = interrogatif ; qu'elle = que + elle" }
  ]},
  7: { titre: "Conjugaison", cartes: [
    { q: "Terminaisons du présent (1er groupe)", r: "e, es, e, ons, ez, ent" },
    { q: "Terminaisons du présent (2e groupe)", r: "is, is, it, issons, issez, issent" },
    { q: "Terminaisons de l'imparfait", r: "ais, ais, ait, ions, iez, aient" },
    { q: "Terminaisons du futur simple", r: "ai, as, a, ons, ez, ont" },
    { q: "Terminaisons du passé simple (1er groupe)", r: "ai, as, a, âmes, âtes, èrent" },
    { q: "Conjuguez 'être' au présent", r: "suis, es, est, sommes, êtes, sont" },
    { q: "Conjuguez 'avoir' au présent", r: "ai, as, a, avons, avez, ont" },
    { q: "Conjuguez 'aller' au présent", r: "vais, vas, va, allons, allez, vont" },
    { q: "Conjuguez 'faire' au présent", r: "fais, fais, fait, faisons, faites, font" },
    { q: "Conjuguez 'prendre' au présent", r: "prends, prends, prend, prenons, prenez, prennent" }
  ]},
  8: { titre: "Valeurs des temps", cartes: [
    { q: "Valeur du présent", r: "Actualité, vérité générale, habitude" },
    { q: "Valeur de l'imparfait", r: "Description, habitude, action qui dure" },
    { q: "Valeur du passé simple", r: "Action ponctuelle (récit écrit)" },
    { q: "Valeur du passé composé", r: "Action ponctuelle (oral)" },
    { q: "Valeur du plus-que-parfait", r: "Antériorité par rapport à une action passée" },
    { q: "Valeur du futur simple", r: "Action à venir" },
    { q: "Valeur du futur antérieur", r: "Action achevée avant une autre future" },
    { q: "Valeur du conditionnel", r: "Hypothèse, condition, souhait" },
    { q: "Valeur du subjonctif", r: "Doute, souhait, émotion, obligation" },
    { q: "Valeur de l'impératif", r: "Ordre, conseil, interdiction" }
  ]},
  9: { titre: "Formation des mots", cartes: [
    { q: "Qu'est-ce qu'un radical ?", r: "Partie qui porte le sens principal" },
    { q: "Qu'est-ce qu'un préfixe ?", r: "Élément avant le radical (re-, in-, dé-)" },
    { q: "Qu'est-ce qu'un suffixe ?", r: "Élément après le radical (-able, -age, -tion)" },
    { q: "Qu'est-ce qu'une famille de mots ?", r: "Mots formés à partir du même radical" },
    { q: "Exemple de mot avec préfixe et suffixe", r: "'in-juste-ment'" },
    { q: "Donnez 3 préfixes de négation", r: "in-, im-, il-, ir-, dé-, dés-" },
    { q: "Donnez 3 suffixes de nom", r: "-tion, -age, -ment, -eur, -ance" },
    { q: "Donnez 3 suffixes d'adjectif", r: "-able, -ible, -eux, -al, -ique" },
    { q: "Qu'est-ce qu'un mot composé ?", r: "Mot formé de plusieurs mots (ex: porte-monnaie)" },
    { q: "Qu'est-ce qu'un néologisme ?", r: "Mot nouveau créé dans une langue" }
  ]},
  10: { titre: "Figures de style", cartes: [
    { q: "Qu'est-ce qu'une comparaison ?", r: "Rapprochement avec outil (comme, tel)" },
    { q: "Qu'est-ce qu'une métaphore ?", r: "Analogie sans outil" },
    { q: "Qu'est-ce qu'une personnification ?", r: "Qualités humaines à un objet" },
    { q: "Qu'est-ce qu'une antithèse ?", r: "Deux termes opposés rapprochés" },
    { q: "Qu'est-ce qu'un oxymore ?", r: "Mots contradictoires" },
    { q: "Qu'est-ce qu'une hyperbole ?", r: "Exagération" },
    { q: "Qu'est-ce qu'une litote ?", r: "Dire moins pour suggérer plus" },
    { q: "Qu'est-ce que l'euphémisme ?", r: "Atténuer une réalité désagréable" },
    { q: "Qu'est-ce qu'une énumération ?", r: "Succession de mots" },
    { q: "Qu'est-ce qu'une gradation ?", r: "Suite de mots d'intensité croissante" }
  ]},
  11: { titre: "Champs lexicaux", cartes: [
    { q: "Qu'est-ce qu'un champ lexical ?", r: "Ensemble des mots liés à un même thème" },
    { q: "Citez 3 registres de langue", r: "Soutenu, courant, familier" },
    { q: "Qu'est-ce que l'argot ?", r: "Langage propre à un groupe" },
    { q: "Donnez 3 mots du champ lexical de la mer", r: "vague, bateau, pêche, marée, port, plage" },
    { q: "Donnez 3 mots du champ lexical de la guerre", r: "combat, arme, soldat, bataille, victoire, mort" },
    { q: "Donnez 3 mots du champ lexical de l'amour", r: "cœur, passion, désir, tendresse, amoureux" },
    { q: "Donnez 3 mots du champ lexical de la peur", r: "crainte, terreur, angoisse, panique, effroi" },
    { q: "Donnez 3 mots du champ lexical de la joie", r: "bonheur, gaieté, sourire, plaisir, rire" },
    { q: "Qu'est-ce qu'un champ sémantique ?", r: "Ensemble des sens d'un même mot" },
    { q: "Différence entre champ lexical et champ sémantique", r: "Lexical = thème ; Sémantique = sens d'un mot" }
  ]}
};

// Chapitres 12 à 26 avec structure minimale (à compléter avec les vraies cartes)
for (let i = 12; i <= 26; i++) {
  CHAPITRES_FR[i] = { titre: "Chapitre " + i, cartes: [
    { q: "Question 1 du chapitre " + i, r: "Réponse 1" },
    { q: "Question 2 du chapitre " + i, r: "Réponse 2" },
    { q: "Question 3 du chapitre " + i, r: "Réponse 3" },
    { q: "Question 4 du chapitre " + i, r: "Réponse 4" }
  ]};
}