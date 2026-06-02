// ==================== DONNÉES COMMUNES HISTOIRE-GÉO & EMC (276 CARTES – 32 CHAPITRES) ====================
const CHAPITRES_HG = {
  // ==================== PARTIE 1 : HISTOIRE (chapitres 1 à 10) ====================
  1: { titre: "Première Guerre mondiale (1914-1918)", cartes: [
    { q: "Quelles sont les causes de la Première Guerre mondiale ?", r: "Rivalités coloniales, nationalisme, système d'alliances (Triple Entente/Triple Alliance), assassinat de François-Ferdinand (28 juin 1914)." },
    { q: "Quelles étaient les deux alliances avant 1914 ?", r: "Triple Entente (France, Royaume-Uni, Russie) / Triple Alliance (Allemagne, Autriche-Hongrie, Italie)." },
    { q: "Qu'est-ce que la guerre des tranchées ?", r: "Guerre de position où les soldats vivent dans des tranchées boueuses, sous les bombardements." },
    { q: "Que s'est-il passé à Verdun en 1916 ?", r: "Bataille emblématique, symbole de la résistance française. 'Ils ne passeront pas !'" },
    { q: "Que s'est-il passé à la bataille de la Somme (1916) ?", r: "Bataille britannique avec pertes massives (1 million). Première utilisation de chars." },
    { q: "Qu'est-ce que le génocide arménien (1915-1916) ?", r: "Extermination des Arméniens par l'Empire ottoman : 1,2 à 1,5 million de morts." },
    { q: "Pourquoi les États-Unis entrent-ils en guerre en 1917 ?", r: "Guerre sous-marine allemande et volonté de faire respecter le droit international." },
    { q: "Quand l'armistice est-il signé ?", r: "11 novembre 1918, dans le wagon du maréchal Foch." },
    { q: "Quel est le bilan humain de la Première Guerre mondiale ?", r: "10 millions de morts, 20 millions de blessés." },
    { q: "Que sont les mutineries de 1917 ?", r: "Révoltes de soldats français refusant les attaques suicidaires." }
  ]},
  2: { titre: "Sortie de guerre et traités", cartes: [
    { q: "Quand le traité de Versailles est-il signé ?", r: "28 juin 1919, dans la galerie des Glaces." },
    { q: "Que sont les '14 points' du président Wilson ?", r: "Programme de paix américain : liberté des mers, création SDN, droit des peuples." },
    { q: "Qu'est-ce que la SDN ?", r: "Société des Nations, ancêtre de l'ONU, créée en 1920." },
    { q: "Quelles sont les clauses du traité de Versailles ?", r: "Culpabilité allemande, réparations, pertes territoriales, démilitarisation." },
    { q: "Pourquoi dit-on que le traité de Versailles est un 'diktat' ?", r: "L'Allemagne n'a pas participé aux négociations, elle est forcée de signer." },
    { q: "Quels nouveaux États apparaissent après 1918 ?", r: "Pologne, Tchécoslovaquie, Yougoslavie, Hongrie, Autriche, Finlande, Estonie, Lettonie, Lituanie." },
    { q: "Pourquoi la SDN a-t-elle échoué ?", r: "Pas d'armée, absence des États-Unis, montée des totalitarismes." },
    { q: "Quel est le traumatisme français après 1918 ?", r: "Les 'gueules cassées', peur de l'Allemagne, ligne Maginot." },
    { q: "Que sont les réparations allemandes ?", r: "Sommes que l'Allemagne doit payer aux vainqueurs (132 milliards de marks-or)." },
    { q: "Qu'est-ce que la ligne Maginot ?", r: "Ligne de fortifications française pour se protéger d'une invasion allemande." }
  ]},
  3: { titre: "Montée des totalitarismes", cartes: [
    { q: "Qu'est-ce qu'un régime totalitaire ?", r: "Parti unique, culte du chef, police politique, propagande, contrôle total de la société." },
    { q: "Décris l'URSS de Staline.", r: "Collectivisation des terres, plans quinquennaux, Goulag (camps de travail)." },
    { q: "Décris l'Allemagne de Hitler.", r: "Nazisme, antisémitisme, Lebensraum (espace vital), Führerprinzip." },
    { q: "Décris l'Italie de Mussolini.", r: "Fascisme, marche sur Rome (1922), culte du Duce, État corporatiste." },
    { q: "Qu'est-ce que le culte de la personnalité ?", r: "Mise en scène omniprésente du dictateur, présenté comme guide infaillible." },
    { q: "Comment fonctionne la propagande totalitaire ?", r: "Contrôle des médias, affiches, cinéma, meetings de masse." },
    { q: "Quels sont les instruments de la terreur totalitaire ?", r: "Police politique (NKVD, Gestapo), camps, dénonciation." },
    { q: "Quand les premiers camps sont-ils créés ?", r: "Dès 1933 en Allemagne (Dachau), pour les opposants politiques." },
    { q: "Qu'est-ce que le Front populaire (1936) en France ?", r: "Gouvernement de gauche (Léon Blum) : congés payés, semaine de 40h." },
    { q: "Pourquoi les JO de Berlin (1936) sont-ils importants ?", r: "Hitler utilise les JO comme vitrine. Jesse Owens remporte 4 médailles." }
  ]},
  4: { titre: "Guerre-éclair (1939-1941)", cartes: [
    { q: "Quand la Seconde Guerre mondiale commence-t-elle ?", r: "1er septembre 1939 : invasion de la Pologne." },
    { q: "Qu'est-ce que la 'drôle de guerre' ?", r: "Période d'inactivité militaire (sept. 1939 – mai 1940)." },
    { q: "Qu'est-ce que la Blitzkrieg ?", r: "Guerre-éclair allemande : attaque surprise avec avions, chars, infanterie motorisée." },
    { q: "Quand l'Allemagne envahit-elle la France ?", r: "Mai-juin 1940, percée dans les Ardennes." },
    { q: "Quand l'armistice est-il signé ?", r: "22 juin 1940 à Rethondes." },
    { q: "Comment la France est-elle coupée ?", r: "Zone occupée (Nord) par les Allemands, zone libre (Sud) par Pétain (régime de Vichy)." },
    { q: "Qu'est-ce que l'appel du 18 juin 1940 ?", r: "Appel du général de Gaulle sur la BBC, naissance de la France libre." },
    { q: "Que s'est-il passé lors de la bataille d'Angleterre (1940) ?", r: "Victoire britannique, Hitler renonce à envahir l'Angleterre." },
    { q: "Qui est Winston Churchill ?", r: "Premier ministre britannique, symbole de la résistance." },
    { q: "Qu'est-ce que le régime de Vichy ?", r: "Régime collaborationniste dirigé par Pétain (1940-1944)." }
  ]},
  5: { titre: "Guerre d'anéantissement (1941-1945)", cartes: [
    { q: "Qu'est-ce que l'opération Barbarossa ?", r: "Invasion de l'URSS par l'Allemagne (22 juin 1941)." },
    { q: "Que s'est-il passé à Pearl Harbor ?", r: "Attaque japonaise (7 déc. 1941), entrée en guerre des États-Unis." },
    { q: "Qu'est-ce qu'une 'guerre totale' ?", r: "Mobilisation de toutes les ressources, civils ciblés." },
    { q: "Pourquoi Stalingrad (1942-1943) est un tournant ?", r: "Première grande défaite allemande, l'URSS repasse à l'offensive." },
    { q: "Quand a lieu le débarquement de Normandie ?", r: "6 juin 1944 (opération Overlord)." },
    { q: "Quand Paris est-elle libérée ?", r: "Août 1944 (capitulation allemande le 25 août)." },
    { q: "Qu'est-ce que la Shoah ?", r: "Extermination des Juifs par les nazis : 6 millions de morts." },
    { q: "Quels sont les camps d'extermination ?", r: "Auschwitz-Birkenau, Treblinka, Sobibor, Belzec." },
    { q: "Que sont les Einsatzgruppen ?", r: "Unités mobiles d'extermination en URSS." },
    { q: "Qu'est-ce que la conférence de Wannsee (1942) ?", r: "Organisation de la 'solution finale'." },
    { q: "Quand sont larguées les bombes atomiques ?", r: "Hiroshima (6 août 1945) et Nagasaki (9 août 1945)." },
    { q: "Quand l'Allemagne capitule-t-elle ?", r: "8 mai 1945." }
  ]},
  6: { titre: "Libération et bilan", cartes: [
    { q: "Quel est le bilan humain de la Seconde Guerre mondiale ?", r: "60 millions de morts (URSS : 27 millions)." },
    { q: "Que sont les procès de Nuremberg (1945-1946) ?", r: "Procès des criminels nazis pour 'crimes contre l'humanité'." },
    { q: "Que signifie 'crime contre l'humanité' ?", r: "Acte inhumain contre une population civile." },
    { q: "Quand l'ONU est-elle créée ?", r: "1945, remplace la SDN." },
    { q: "Qu'est-ce que la Déclaration universelle des droits de l'homme (1948) ?", r: "Texte proclamant les droits inaliénables de tout être humain." },
    { q: "Qu'est-ce que le plan Marshall (1947) ?", r: "Aide américaine pour reconstruire l'Europe (13 milliards de dollars)." }
  ]},
  7: { titre: "Guerre froide (1947-1991)", cartes: [
    { q: "Qu'est-ce que le 'rideau de fer' ?", r: "Frontière idéologique entre Est et Ouest (discours de Churchill, 1946)." },
    { q: "Qu'est-ce que la doctrine Truman ?", r: "Endiguement du communisme." },
    { q: "Qu'est-ce que le plan Marshall (1947) ?", r: "Aide américaine à l'Europe de l'Ouest (refusée par l'URSS)." },
    { q: "Comment l'Allemagne est-elle coupée ?", r: "RFA (Ouest) et RDA (Est). Berlin divisée en 4 secteurs." },
    { q: "Qu'est-ce que le blocus de Berlin (1948-1949) ?", r: "URSS bloque Berlin-Ouest, pont aérien américain." },
    { q: "Qu'est-ce que l'OTAN (1949) ?", r: "Alliance militaire des pays capitalistes." },
    { q: "Qu'est-ce que le pacte de Varsovie (1955) ?", r: "Alliance militaire des pays communistes." },
    { q: "Qu'est-ce que la crise de Cuba (1962) ?", r: "Missiles soviétiques à Cuba, le monde frôle la guerre nucléaire." },
    { q: "Qu'est-ce qu'une 'guerre par procuration' ?", r: "Guerre où les superpuissances s'affrontent par pays interposés (Vietnam)." },
    { q: "Qu'est-ce que la détente (années 1970) ?", r: "Apaisement : accords SALT, Helsinki (1975)." },
    { q: "Quand le mur de Berlin tombe-t-il ?", r: "9 novembre 1989." },
    { q: "Quand l'URSS disparaît-elle ?", r: "1991." }
  ]},
  8: { titre: "Construction européenne", cartes: [
    { q: "Qu'est-ce que la CECA (1951) ?", r: "Communauté européenne du charbon et de l'acier." },
    { q: "Qu'est-ce que la CEE (1957) ?", r: "Communauté économique européenne (traité de Rome)." },
    { q: "Quels sont les 6 pays fondateurs ?", r: "France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg." },
    { q: "Qu'est-ce que la PAC ?", r: "Politique agricole commune." },
    { q: "Qu'est-ce que l'Acte unique européen (1986) ?", r: "Création du marché unique." },
    { q: "Qu'est-ce que le traité de Maastricht (1992) ?", r: "Création de l'UE, citoyenneté européenne, prépare l'euro." },
    { q: "Quand l'euro entre-t-il en circulation ?", r: "2002." },
    { q: "Qu'est-ce que l'espace Schengen ?", r: "Libre circulation des personnes." },
    { q: "Qu'est-ce que le Brexit (2020) ?", r: "Sortie du Royaume-Uni de l'UE." },
    { q: "Qu'est-ce que le programme Erasmus+ ?", r: "Mobilité étudiante européenne." }
  ]},
  9: { titre: "Décolonisation (1945-1975)", cartes: [
    { q: "Qu'est-ce que la conférence de Bandung (1955) ?", r: "Conférence des non-alignés." },
    { q: "Qu'est-ce que la guerre d'Indochine (1946-1954) ?", r: "Défaite française à Diên Biên Phu." },
    { q: "Qu'est-ce que la guerre d'Algérie (1954-1962) ?", r: "Accords d'Évian (1962)." },
    { q: "Qu'est-ce que le FLN ?", r: "Front de libération nationale algérien." },
    { q: "Que s'est-il passé en 1960 en Afrique ?", r: "Année de l'Afrique : 17 indépendances." },
    { q: "Comment l'Inde devient-elle indépendante (1947) ?", r: "Indépendance négociée avec Gandhi, partition avec le Pakistan." },
    { q: "Qu'est-ce que la guerre du Vietnam (1955-1975) ?", r: "Victoire du Nord communiste." },
    { q: "Quand la décolonisation portugaise a-t-elle lieu ?", r: "1974-1975 (révolution des Œillets)." },
    { q: "Qu'est-ce que la 'Françafrique' ?", r: "Influence de la France en Afrique post-indépendances." },
    { q: "Pourquoi les mémoires de la colonisation sont-elles douloureuses ?", r: "Reconnaissance des crimes coloniaux, restitution d'œuvres d'art." }
  ]},
  10: { titre: "Après-guerre froide (1991 à nos jours)", cartes: [
    { q: "Qu'est-ce que la guerre du Golfe (1990-1991) ?", r: "Intervention contre l'Irak après l'invasion du Koweït." },
    { q: "Que sont les guerres de Yougoslavie (1991-2001) ?", r: "Guerres civiles, nettoyage ethnique (Bosnie, Kosovo)." },
    { q: "Qu'est-ce que le génocide au Rwanda (1994) ?", r: "Extermination des Tutsis (800 000 morts)." },
    { q: "Que s'est-il passé le 11 septembre 2001 ?", r: "Attentats d'Al-Qaïda (tours jumelles)." },
    { q: "Qu'est-ce que la 'guerre contre le terrorisme' ?", r: "Invasions de l'Afghanistan (2001) et de l'Irak (2003)." },
    { q: "Que sont les BRICS ?", r: "Brésil, Russie, Inde, Chine, Afrique du Sud." },
    { q: "Pourquoi la crise des migrants (2015 →) ?", r: "Guerres (Syrie), pauvreté, changements climatiques." },
    { q: "Qu'est-ce que l'Accord de Paris (2015) ?", r: "Lutter contre le réchauffement climatique." },
    { q: "Qu'est-ce que la pandémie de Covid-19 (2020) ?", r: "Pandémie mondiale, confinements, vaccins." },
    { q: "Quels sont les défis actuels ?", r: "Climat, migrations, IA, montée des populismes." }
  ]},
  // ==================== PARTIE 2 : GÉOGRAPHIE (chapitres 11 à 22) ====================
  11: { titre: "Les aires urbaines françaises", cartes: [
    { q: "Qu'est-ce que la métropolisation ?", r: "Concentration des activités et de la population dans les grandes métropoles." },
    { q: "Qu'est-ce qu'une aire urbaine ?", r: "Pôle urbain + couronne périurbaine." },
    { q: "Quelles sont les principales métropoles françaises ?", r: "Paris, Lyon, Marseille, Lille, Toulouse, Bordeaux, Nice, Nantes." },
    { q: "Qu'est-ce que la ségrégation socio-spatiale ?", r: "Séparation des populations selon leurs revenus." },
    { q: "Qu'est-ce que l'étalement urbain ?", r: "Consommation d'espaces naturels par les villes." },
    { q: "Qu'est-ce que la périurbanisation ?", r: "Installation des citadins dans les communes périurbaines." },
    { q: "Quel est le sort des villes moyennes françaises ?", r: "En difficulté face aux métropoles." },
    { q: "Qu'est-ce qu'un éco-quartier ?", r: "Quartier durable (bâtiments basse consommation, espaces verts)." }
  ]},
  12: { titre: "Les espaces productifs français", cartes: [
    { q: "Quels sont les espaces agricoles français ?", r: "Céréales (Bassin parisien), élevage (Massif central), viticulture." },
    { q: "Qu'est-ce que la désindustrialisation ?", r: "Baisse de l'emploi industriel, apparition de friches." },
    { q: "Qu'est-ce que la tertiarisation ?", r: "Augmentation de la part des services." },
    { q: "Qu'est-ce qu'un pôle de compétitivité ?", r: "Regroupement d'entreprises, chercheurs et universités pour innover." },
    { q: "Qu'est-ce qu'une zone industrialo-portuaire ?", r: "Zone industrielle liée à un port (Le Havre, Fos-sur-Mer)." },
    { q: "Pourquoi le tourisme est-il important en France ?", r: "1er pays touristique mondial (86M de visiteurs)." },
    { q: "Quels sont les espaces des énergies renouvelables en France ?", r: "Parcs éoliens, centrales solaires, barrages hydrauliques." },
    { q: "Comment les friches industrielles se reconvertissent-elles ?", r: "Sites culturels, numériques ou logistiques." }
  ]},
  13: { titre: "Les espaces de faible densité français", cartes: [
    { q: "Quels sont les atouts des espaces ruraux ?", r: "Cadre de vie, tourisme vert, agriculture, énergies renouvelables." },
    { q: "Quelles sont les fragilités des espaces ruraux ?", r: "Vieillissement, enclavement, désertification médicale." },
    { q: "Que sont les néoruraux ?", r: "Citadins s'installant à la campagne (télétravail)." },
    { q: "Que sont les ZRR ?", r: "Zones de revitalisation rurale (aides fiscales)." },
    { q: "Comment le télétravail transforme-t-il les espaces ruraux ?", r: "Dynamise certains territoires." },
    { q: "Quelles sont les spécificités des espaces de montagne ?", r: "Contraintes (froid, pente) et atouts (tourisme, hydroélectricité)." },
    { q: "Quelles sont les spécificités des espaces littoraux ?", r: "Pression touristique, conflits d'usage, risques de submersion." },
    { q: "Qu'est-ce que la diagonale du vide ?", r: "Zone de faible densité traversant la France du nord-est au sud-ouest." }
  ]},
  14: { titre: "Les espaces transfrontaliers français", cartes: [
    { q: "Qu'est-ce qu'une eurocité ?", r: "Coopération transfrontalière entre villes de pays différents." },
    { q: "Qu'est-ce que le corridor Rhin-Rhône ?", r: "Infrastructure de transport majeure." },
    { q: "Quels sont les principaux espaces transfrontaliers français ?", r: "Avec Allemagne, Suisse, Italie, Espagne." },
    { q: "Qu'est-ce que la zone industrialo-portuaire de Dunkerque ?", r: "Zone transfrontalière avec la Belgique." },
    { q: "Quels sont les défis des espaces transfrontaliers ?", r: "Harmonisation des lois, barrières linguistiques." },
    { q: "Qu'est-ce que le tunnel du Mont-Blanc ?", r: "Infrastructure reliant la France à l'Italie (1965)." },
    { q: "Qu'est-ce que l'Eurodistrict Strasbourg-Ortenau ?", r: "Coopération entre Strasbourg et l'Allemagne." },
    { q: "Quels sont les avantages de la coopération transfrontalière ?", r: "Échanges économiques, mobilité des travailleurs." }
  ]},
  15: { titre: "Les régions ultramarines françaises", cartes: [
    { q: "Quelles sont les régions ultramarines françaises (DROM) ?", r: "Guadeloupe, Martinique, Guyane, La Réunion, Mayotte." },
    { q: "Quels sont les COM ?", r: "Saint-Pierre-et-Miquelon, Saint-Barthélemy, Saint-Martin, Wallis-et-Futuna, Polynésie." },
    { q: "Quelles sont les spécificités des DROM ?", r: "Mêmes lois que la métropole." },
    { q: "Quels sont les défis des régions ultramarines ?", r: "Éloignement, chômage élevé, dépendance économique." },
    { q: "Quels sont les atouts des régions ultramarines ?", r: "Biodiversité, tourisme, ZEE." },
    { q: "Qu'est-ce que la ZEE ?", r: "Zone économique exclusive (droits d'exploitation des ressources maritimes)." },
    { q: "Pourquoi la Guyane est-elle stratégique ?", r: "Base de lancement de fusées (Kourou)." },
    { q: "Qu'est-ce que le plan Chlordécone ?", r: "Dépollution des sols en Guadeloupe et Martinique." }
  ]},
  16: { titre: "L'Union européenne (géographie)", cartes: [
    { q: "Combien de pays compte l'Union européenne ?", r: "27 (depuis le Brexit, 2020)." },
    { q: "Qu'est-ce que la PAC ?", r: "Politique agricole commune." },
    { q: "Que sont les fonds structurels de l'UE ?", r: "FEDER (développement régional), FSE (emploi)." },
    { q: "Qu'est-ce que l'espace Schengen ?", r: "Libre circulation des personnes." },
    { q: "Quelles sont les inégalités territoriales dans l'UE ?", r: "Opposition Est/Ouest (PIB)." },
    { q: "Qu'est-ce que le corridor Rhin-Rhône ?", r: "Infrastructure de transport majeure." },
    { q: "Quelles sont les capitales européennes ?", r: "Bruxelles (Commission), Strasbourg (Parlement), Luxembourg (Justice)." },
    { q: "Que sont les régions ultrapériphériques ?", r: "Territoires européens hors continent (Guadeloupe, Guyane, Réunion)." }
  ]},
  17: { titre: "La France dans la mondialisation", cartes: [
    { q: "Quelles sont les principales FMN françaises ?", r: "TotalEnergies, LVMH, AXA, Carrefour." },
    { q: "Quels sont les hubs français ?", r: "Roissy-Charles-de-Gaulle, Le Havre, Marseille-Fos." },
    { q: "Quels sont les territoires gagnants de la mondialisation ?", r: "Métropoles (Paris, Lyon), pôles de compétitivité." },
    { q: "Quels sont les territoires perdants ?", r: "Campagnes isolées, villes moyennes désindustrialisées." },
    { q: "Qu'est-ce que la French Tech ?", r: "Écosystème des startups françaises." },
    { q: "Quel est le rôle de Paris dans la mondialisation ?", r: "Ville mondiale (finance, mode, tourisme, culture)." },
    { q: "Qu'est-ce que le Grand Paris ?", r: "Projet d'aménagement de la métropole parisienne." },
    { q: "Quels sont les flux touristiques mondiaux concernant la France ?", r: "1ère destination touristique mondiale (86M visiteurs)." }
  ]},
  18: { titre: "Les inégalités en France", cartes: [
    { q: "Qu'est-ce que l'IDH en France ?", r: "0,903 (très élevé)." },
    { q: "Quelles sont les principales inégalités territoriales ?", r: "Opposition Est/Ouest, Nord/Sud, métropoles/périphéries." },
    { q: "Qu'est-ce que le chômage en France ?", r: "Environ 7-8%." },
    { q: "Qu'est-ce que la pauvreté en France ?", r: "14% sous le seuil de pauvreté (1 102 €/mois)." },
    { q: "Qu'est-ce que la fracture numérique ?", r: "Inégalité d'accès à Internet entre villes et campagnes." },
    { q: "Quelles sont les politiques de lutte contre les inégalités ?", r: "Minima sociaux, allocations logement, services publics." },
    { q: "Qu'est-ce que le zonage prioritaire ?", r: "QPV (quartiers prioritaires), ZRR (zones rurales)." },
    { q: "Qu'est-ce que le revenu médian en France ?", r: "Environ 1 800 € par mois." }
  ]},
  19: { titre: "La mondialisation", cartes: [
    { q: "Qu'est-ce que la mondialisation ?", r: "Mise en relation des différentes parties du monde par les échanges." },
    { q: "Qu'est-ce qu'une FMN ?", r: "Firme multinationale (Apple, Total, Nestlé)." },
    { q: "Quels sont les trois piliers institutionnels ?", r: "OMC (commerce), FMI (finance), Banque mondiale." },
    { q: "Quels sont les flux de la mondialisation ?", r: "Marchandises (conteneurs), capitaux, informations, personnes." },
    { q: "Qu'est-ce qu'un hub ?", r: "Plateforme de transport où transitent les flux mondiaux." },
    { q: "Qu'est-ce qu'une mégalopole ?", r: "Région urbaine très peuplée (Tokyo, New York, Londres, Shanghai, Paris)." },
    { q: "Que sont les pays émergents ?", r: "Pays en développement à forte croissance (BRICS)." },
    { q: "Quelles sont les inégalités spatiales de la mondialisation ?", r: "Métropoles gagnantes / territoires perdants." }
  ]},
  20: { titre: "Les inégalités de développement", cartes: [
    { q: "Qu'est-ce que l'IDH ?", r: "Indice de développement humain (PIB, santé, éducation)." },
    { q: "Qu'est-ce que la distinction Nord/Sud ?", r: "Nord = pays développés, Sud = pays en développement." },
    { q: "Que sont les PMA ?", r: "Pays les moins avancés (Afrique subsaharienne, Afghanistan)." },
    { q: "Pourquoi le taux d'alphabétisation est-il important ?", r: "Mesure l'accès à l'éducation." },
    { q: "Qu'est-ce que l'espérance de vie ?", r: "Durée de vie moyenne, reflet de la qualité du système de santé." },
    { q: "Que sont les OMD ?", r: "Objectifs du millénaire (ONU, 2000)." },
    { q: "Que sont les ODD ?", r: "Objectifs de développement durable (ONU, 2015, pour 2030)." },
    { q: "Qu'est-ce que la fracture numérique ?", r: "Inégalité d'accès à Internet." }
  ]},
  21: { titre: "Les défis du XXIe siècle", cartes: [
    { q: "Qu'est-ce que le changement climatique ?", r: "Augmentation de la température moyenne due aux GES." },
    { q: "Qu'est-ce que la transition énergétique ?", r: "Passage des énergies fossiles aux énergies renouvelables." },
    { q: "Quels sont les types de migrations ?", r: "Économiques, politiques (réfugiés), climatiques." },
    { q: "Qu'est-ce qu'un conflit asymétrique ?", r: "Conflit entre armée régulière et groupes non étatiques." },
    { q: "Qu'est-ce que le développement durable ?", r: "Répondre aux besoins actuels sans compromettre l'avenir." },
    { q: "Qu'est-ce que l'économie circulaire ?", r: "Recycler, réparer, réutiliser." },
    { q: "Quels sont les défis de l'IA ?", r: "Éthique, suppression d'emplois, désinformation." },
    { q: "Qu'est-ce que la désinformation (fake news) ?", r: "Fausses informations diffusées pour manipuler." }
  ]},
  22: { titre: "Les aires urbaines mondiales", cartes: [
    { q: "Qu'est-ce qu'une mégalopole ?", r: "Région urbaine de plusieurs millions d'habitants." },
    { q: "Qu'est-ce qu'une ville mondiale ?", r: "Ville concentrant les fonctions de commandement." },
    { q: "Quelles sont les principales villes mondiales ?", r: "New York, Londres, Tokyo, Paris, Singapour." },
    { q: "Qu'est-ce que l'urbanisation croissante ?", r: "55% de la population mondiale vit en ville." },
    { q: "Quels sont les problèmes des mégapoles du Sud ?", r: "Bidonvilles, transports saturés, pollution." },
    { q: "Qu'est-ce que l'étalement urbain ?", r: "Consommation d'espaces naturels par les villes." },
    { q: "Qu'est-ce que la gentrification ?", r: "Remplacement des populations modestes par des classes aisées." },
    { q: "Quelles sont les politiques de développement urbain durable ?", r: "Éco-quartiers, transports en commun, végétalisation." }
  ]},
  // ==================== PARTIE 3 : EMC (chapitres 23 à 32) ====================
  23: { titre: "Valeurs de la République (EMC)", cartes: [
    { q: "Que signifie 'liberté' ?", r: "Liberté d'expression, de presse, de conscience." },
    { q: "Que signifie 'égalité' ?", r: "Égalité des droits, lutte contre les discriminations." },
    { q: "Que signifie 'fraternité' ?", r: "Solidarité, sécurité sociale." },
    { q: "Qu'est-ce que la laïcité ?", r: "Neutralité de l'État, séparation Églises/État (loi 1905)." },
    { q: "Quelle est la devise de la République ?", r: "Liberté, Égalité, Fraternité." },
    { q: "Que signifie la neutralité des agents publics ?", r: "Les fonctionnaires ne manifestent pas leurs opinions religieuses." },
    { q: "Qu'est-ce que la charte de la laïcité (2013) ?", r: "Texte sur la laïcité à l'école." },
    { q: "Quelles sont les limites à la liberté d'expression ?", r: "Diffamation, incitation à la haine, négationnisme." }
  ]},
  24: { titre: "Citoyenneté française (EMC)", cartes: [
    { q: "Qu'est-ce que le droit du sol ?", r: "Nationalité par naissance en France." },
    { q: "Qu'est-ce que le droit du sang ?", r: "Nationalité par filiation (parents français)." },
    { q: "Qu'est-ce que la naturalisation ?", r: "Procédure pour devenir français." },
    { q: "Quelles sont les conditions pour voter ?", r: "Être majeur (18 ans), français, jouir de ses droits civils." },
    { q: "Qu'est-ce que le devoir de défense ?", r: "JDC (journée défense citoyenneté)." },
    { q: "Qu'est-ce que le SNU ?", r: "Service national universel (12 jours)." },
    { q: "Qu'est-ce que le service civique ?", r: "Engagement volontaire dans une association." },
    { q: "Quels sont les trois niveaux des institutions françaises ?", r: "Communes, départements, régions. L'État (Président, Parlement)." }
  ]},
  25: { titre: "Justice en France (EMC)", cartes: [
    { q: "Quels sont les trois grands principes de la justice ?", r: "Indépendance, égalité devant la loi, présomption d'innocence." },
    { q: "Qu'est-ce que la présomption d'innocence ?", r: "Innocent tant qu'il n'est pas jugé coupable." },
    { q: "Différence justice civile et pénale ?", r: "Civile : litiges entre personnes. Pénale : infractions." },
    { q: "Qu'est-ce que la cour d'assises ?", r: "Juge les crimes (juges + jury populaire)." },
    { q: "Qu'est-ce que le TIG ?", r: "Travail d'intérêt général (peine alternative)." },
    { q: "Qu'est-ce que le juge des enfants ?", r: "Magistrat spécialisé dans la protection des mineurs." },
    { q: "Qu'est-ce que le tribunal de proximité ?", r: "Juge les petits litiges (-10 000 €)." },
    { q: "Qu'est-ce que l'aide juridictionnelle ?", r: "Prise en charge des frais de justice pour les revenus modestes." }
  ]},
  26: { titre: "Débat démocratique et médias (EMC)", cartes: [
    { q: "Quels sont les trois rôles des médias ?", r: "Informer, permettre le débat, contrôler le pouvoir." },
    { q: "Qu'est-ce que la liberté de la presse ?", r: "Droit d'informer sans censure (loi 1881)." },
    { q: "Que sont les fake news ?", r: "Fausses informations diffusées pour manipuler." },
    { q: "Qu'est-ce que le fact-checking ?", r: "Vérification des faits par les journalistes." },
    { q: "Quels sont les dangers des réseaux sociaux ?", r: "Bulles de filtre, harcèlement, fake news." },
    { q: "Qu'est-ce que la loi de 1881 ?", r: "Loi sur la liberté de la presse." },
    { q: "Qu'est-ce que le droit de grève ?", r: "Droit des salariés de cesser le travail." },
    { q: "Que sont les associations loi 1901 ?", r: "Associations à but non lucratif." }
  ]},
  27: { titre: "La France et l'Europe", cartes: [
    { q: "Quel est le rôle de la France dans l'UE ?", r: "Pays fondateur, membre du conseil." },
    { q: "Quel est le poids démographique de la France en Europe ?", r: "2e pays le plus peuplé (68M)." },
    { q: "Quelles sont les frontières naturelles de la France ?", r: "Rhin, Alpes, Pyrénées, Méditerranée, Atlantique, Manche." },
    { q: "Qu'est-ce que la coopération transfrontalière ?", r: "Projets communs avec les pays voisins." },
    { q: "Quels sont les atouts agricoles de la France ?", r: "Première puissance agricole de l'UE." },
    { q: "Quel est le PIB de la France ?", r: "Environ 2 800 milliards d'euros (7e économie mondiale)." },
    { q: "Quels sont les secteurs d'excellence français ?", r: "Aéronautique (Airbus), luxe (LVMH), nucléaire (EDF)." },
    { q: "Quels sont les défis économiques de la France ?", r: "Chômage, dette publique, transitions écologique/numérique." }
  ]},
  28: { titre: "Défense et sécurité en France", cartes: [
    { q: "Quelles sont les missions de l'armée française ?", r: "Défense du territoire, OPEX, sécurité." },
    { q: "Qu'est-ce que l'OTAN ?", r: "Alliance militaire des pays occidentaux." },
    { q: "Qu'est-ce que la dissuasion nucléaire ?", r: "Stratégie de défense basée sur l'arme atomique." },
    { q: "Qu'est-ce que le SNU ?", r: "Service national universel." },
    { q: "Qu'est-ce que la JDC ?", r: "Journée défense et citoyenneté." },
    { q: "Quelles sont les OPEX récentes de la France ?", r: "Mali (Serval/Barkhane), Sahel." },
    { q: "Qu'est-ce que la gendarmerie nationale ?", r: "Sécurité publique en zones rurales." },
    { q: "Qu'est-ce que la police nationale ?", r: "Sécurité publique en zones urbaines." }
  ]},
  29: { titre: "Environnement et développement durable", cartes: [
    { q: "Qu'est-ce que la transition écologique ?", r: "Transformation de l'économie pour réduire l'impact environnemental." },
    { q: "Qu'est-ce que l'empreinte carbone ?", r: "Quantité de CO₂ émise par une activité." },
    { q: "Qu'est-ce que la loi Grenelle (2009) ?", r: "Loi française sur l'environnement." },
    { q: "Qu'est-ce que la taxe carbone ?", r: "Taxe sur les émissions de CO₂." },
    { q: "Qu'est-ce que le ZAN ?", r: "Zéro artificialisation nette d'ici 2050." },
    { q: "Qu'est-ce que la Convention citoyenne pour le climat ?", r: "Citoyens tirés au sort proposant des mesures." },
    { q: "Qu'est-ce que l'Accord de Paris (2015) ?", r: "Accord international sur le climat." },
    { q: "Qu'est-ce que la COP ?", r: "Conférence des Parties (négociations climatiques)." }
  ]},
  30: { titre: "Les espaces productifs mondiaux", cartes: [
    { q: "Qu'est-ce que la Silicon Valley ?", r: "Pôle technologique mondial en Californie." },
    { q: "Qu'est-ce qu'une ZES ?", r: "Zone économique spéciale (avantages fiscaux)." },
    { q: "Quels sont les grands espaces agricoles mondiaux ?", r: "Corn Belt (USA), soja (Brésil), rizières (Asie)." },
    { q: "Quels sont les grands espaces industriels mondiaux ?", r: "Chine (usine du monde), Europe, Amérique du Nord." },
    { q: "Qu'est-ce que la délocalisation ?", r: "Transfert d'activités vers des pays à bas coûts." },
    { q: "Qu'est-ce que la relocalisation ?", r: "Retour d'activités dans le pays d'origine." },
    { q: "Quels sont les principaux hubs aéroportuaires mondiaux ?", r: "Atlanta, Dubaï, Londres, Tokyo, Paris CDG." },
    { q: "Quels sont les principaux ports mondiaux ?", r: "Shanghai, Singapour, Rotterdam, Anvers." }
  ]},
  31: { titre: "Les mobilités humaines mondiales", cartes: [
    { q: "Quels sont les types de migrations ?", r: "Économiques, politiques (réfugiés), climatiques." },
    { q: "Qu'est-ce qu'un réfugié ?", r: "Personne fuyant la guerre ou les persécutions." },
    { q: "Qu'est-ce qu'un migrant économique ?", r: "Personne cherchant à améliorer ses conditions de vie." },
    { q: "Quelles sont les principales routes migratoires ?", r: "Afrique/Asie vers Europe, Amérique latine vers États-Unis." },
    { q: "Qu'est-ce que le tourisme de masse ?", r: "Déplacements touristiques nombreux." },
    { q: "Quels sont les effets des migrations sur les pays d'accueil ?", r: "Main-d'œuvre, tensions sociales." },
    { q: "Quels sont les effets des migrations sur les pays de départ ?", r: "Envois d'argent, fuite des cerveaux." },
    { q: "Qu'est-ce que le droit d'asile ?", r: "Droit d'être protégé pour une personne persécutée." }
  ]},
  32: { titre: "Les ressources mondiales", cartes: [
    { q: "Quelles sont les ressources énergétiques mondiales ?", r: "Pétrole, gaz, charbon, uranium, solaire, éolien." },
    { q: "Quels sont les principaux producteurs de pétrole ?", r: "États-Unis, Arabie saoudite, Russie." },
    { q: "Qu'est-ce que l'eau bleue ?", r: "Eau des rivières, lacs et nappes souterraines." },
    { q: "Qu'est-ce que l'eau virtuelle ?", r: "Eau utilisée pour produire un bien." },
    { q: "Quels sont les minerais stratégiques ?", r: "Lithium, cobalt, terres rares (pour batteries, électronique)." },
    { q: "Qu'est-ce que l'OPEP ?", r: "Organisation des pays exportateurs de pétrole." },
    { q: "Quels sont les enjeux géopolitiques des ressources ?", r: "Conflits, dépendance, tensions." },
    { q: "Qu'est-ce que la transition énergétique ?", r: "Passage aux énergies renouvelables." }
  ]}
};

// Vérification
console.log("Chapitres chargés :", Object.keys(CHAPITRES_HG).length);