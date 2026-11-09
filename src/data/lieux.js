// Données des lieux. Source unique utilisée par les pages, la carte, la recherche et les itinéraires.
// Champs en français ; le bloc `en` surcharge les champs traduits (voir `loc` dans src/i18n.jsx).
// Coordonnées et infos pratiques approximatives : à vérifier avant mise en ligne.
// `photo` : nom de fichier dans public/photos/ (affiche un visuel de remplacement si absent).

export const categories = {
  monument: { label: 'Monument', couleur: '#c2410c', en: { label: 'Landmark' } },
  nature: { label: 'Nature', couleur: '#15803d', en: { label: 'Nature' } },
  culture: { label: 'Culture', couleur: '#7c3aed', en: { label: 'Culture' } },
  marche: { label: 'Marché', couleur: '#b45309', en: { label: 'Market' } },
  plage: { label: 'Plage & îles', couleur: '#0369a1', en: { label: 'Beaches & islands' } },
  restaurant: { label: 'Restaurant', couleur: '#be123c', en: { label: 'Restaurant' } },
  hotel: { label: 'Hôtel', couleur: '#334155', en: { label: 'Hotel' } },
};

// Régions touristiques : chaque lieu porte un champ `region` (clé de cet objet).
export const regions = {
  dakar: { label: 'Dakar et presqu’île du Cap-Vert', photo: 'goree.jpg', en: { label: 'Dakar and the Cap-Vert peninsula' } },
  'petite-cote': { label: 'Petite-Côte', photo: 'saly.jpg', en: { label: 'Petite-Côte' } },
  saloum: { label: 'Delta du Saloum', photo: 'palmarin.jpg', en: { label: 'Saloum Delta' } },
  casamance: { label: 'Casamance', photo: 'cap-skirring.jpg', en: { label: 'Casamance' } },
};

export const lieux = [
  // --- Monuments, culture, nature, marchés ---
  {
    id: 'renaissance-africaine',
    nom: 'Monument de la Renaissance africaine',
    categorie: 'monument',
    region: 'dakar',
    quartier: 'Ouakam',
    coords: [14.7221, -17.495],
    photo: 'renaissance.jpg',
    resume: 'Statue monumentale de 52 m dominant Dakar depuis la colline des Mamelles.',
    description:
      "Inauguré en 2010, le monument offre une vue panoramique sur la presqu'île du Cap-Vert. Un ascenseur mène jusqu'à la tête de la statue.",
    infos: { duree: '1 h 30', horaires: 'Tous les jours, environ 9 h – 18 h 45 (à confirmer sur place).', conseil: "Venir en fin d'après-midi pour le coucher de soleil." },
    en: {
      nom: 'African Renaissance Monument',
      resume: 'A 52 m monumental statue overlooking Dakar from the Mamelles hill.',
      description:
        'Opened in 2010, the monument offers a panoramic view of the Cap-Vert peninsula. A lift takes visitors up to the head of the statue.',
      infos: { duree: '1 h 30', horaires: 'Daily, about 9 am – 6:45 pm (check on site).', conseil: 'Come in the late afternoon for the sunset.' },
    },
  },
  {
    id: 'ile-de-goree',
    nom: 'Île de Gorée',
    categorie: 'culture',
    region: 'dakar',
    quartier: 'Gorée',
    coords: [14.6672, -17.3986],
    photo: 'goree.jpg',
    resume: "Île classée au patrimoine mondial de l'UNESCO, à 20 minutes de chaloupe.",
    description:
      "Ruelles colorées, Maison des Esclaves, Fort d'Estrées et ateliers d'artistes. Lieu de mémoire de la traite atlantique.",
    infos: { duree: 'Demi-journée', horaires: 'Maison des Esclaves : du mardi au dimanche, 10 h 30 – 12 h et 15 h – 18 h ; fermée le lundi.', conseil: 'Chaloupe au départ du port de Dakar.' },
    en: {
      nom: 'Gorée Island',
      resume: 'UNESCO World Heritage island, a 20-minute ferry ride away.',
      description:
        "Colourful lanes, the House of Slaves, Fort d'Estrées and artists' studios. A memorial site of the Atlantic slave trade.",
      infos: { duree: 'Half a day', horaires: 'House of Slaves: Tuesday to Sunday, 10:30 am – 12 pm and 3 – 6 pm; closed on Mondays.', conseil: 'Ferry from the port of Dakar.' },
    },
  },
  {
    id: 'lac-rose',
    nom: 'Lac Rose (lac Retba)',
    categorie: 'nature',
    region: 'dakar',
    quartier: 'Niaga',
    coords: [14.8389, -17.2342],
    photo: 'lac-rose.jpg',
    resume: 'Lac salé à la couleur rose, célèbre pour la récolte artisanale du sel.',
    description:
      'La teinte rose, due à une micro-algue, est plus visible en saison sèche. Dunes et villages de pêcheurs à proximité.',
    infos: { duree: 'Demi-journée', conseil: 'Environ 1 h de route depuis le centre.' },
    en: {
      nom: 'Pink Lake (Lake Retba)',
      resume: 'A pink salt lake, famous for its traditional salt harvesting.',
      description:
        'The pink colour, caused by a micro-alga, is strongest in the dry season. Dunes and fishing villages nearby.',
      infos: { duree: 'Half a day', conseil: 'About 1 hour by road from the city centre.' },
    },
  },
  {
    id: 'mosquee-divinite',
    nom: 'Mosquée de la Divinité',
    categorie: 'monument',
    region: 'dakar',
    quartier: 'Ouakam',
    coords: [14.7158, -17.4905],
    photo: 'mosquee-divinite.jpg',
    resume: "Mosquée blanche posée au bord de l'océan, au pied des falaises.",
    description:
      "Édifice emblématique de la corniche ouest, apprécié pour son architecture et son cadre face à l'Atlantique.",
    infos: { duree: '45 min', conseil: 'Tenue couvrante exigée.' },
    en: {
      nom: 'Mosque of the Divinity',
      resume: 'A white mosque on the edge of the ocean, below the cliffs.',
      description:
        'An iconic building of the western Corniche, admired for its architecture and its Atlantic setting.',
      infos: { duree: '45 min', conseil: 'Modest clothing required.' },
    },
  },
  {
    id: 'phare-mamelles',
    nom: 'Phare des Mamelles',
    categorie: 'monument',
    region: 'dakar',
    quartier: 'Ouakam',
    coords: [14.7238, -17.5018],
    photo: 'phare.jpg',
    resume: 'Phare historique perché sur une colline volcanique.',
    description: "Vue à 360° sur Dakar et l'océan. Petit café en terrasse au sommet.",
    infos: { duree: '1 h', conseil: "Montée à pied d'environ 15 min." },
    en: {
      nom: 'Mamelles Lighthouse',
      resume: 'A historic lighthouse on top of a volcanic hill.',
      description: '360° view over Dakar and the ocean. Small terrace café at the top.',
      infos: { duree: '1 h', conseil: 'About a 15-minute walk up.' },
    },
  },
  {
    id: 'musee-civilisations-noires',
    nom: 'Musée des Civilisations noires',
    categorie: 'culture',
    region: 'dakar',
    quartier: 'Plateau',
    coords: [14.6775, -17.4351],
    photo: 'mcn.jpg',
    resume: "Grand musée consacré aux cultures d'Afrique et de la diaspora.",
    description:
      'Collections permanentes et expositions temporaires dans un bâtiment circulaire inspiré des cases à impluvium.',
    infos: { duree: '2 h', horaires: 'Du mardi au dimanche, 10 h – 19 h ; fermé le lundi.', conseil: 'Horaires et tarifs à confirmer sur mcn.sn.' },
    en: {
      nom: 'Museum of Black Civilisations',
      resume: 'A major museum devoted to the cultures of Africa and its diaspora.',
      description:
        'Permanent collections and temporary exhibitions in a circular building inspired by traditional impluvium huts.',
      infos: { duree: '2 h', horaires: 'Tuesday to Sunday, 10 am – 7 pm; closed on Mondays.', conseil: 'Check opening hours and prices on mcn.sn.' },
    },
  },
  {
    id: 'marche-sandaga',
    nom: 'Marché Sandaga',
    categorie: 'marche',
    region: 'dakar',
    quartier: 'Plateau',
    coords: [14.6699, -17.4377],
    photo: 'sandaga.jpg',
    resume: 'Marché animé du centre-ville : tissus, artisanat, épices.',
    description: 'Cœur commerçant de Dakar, dense et vivant. Idéal pour les tissus wax.',
    infos: { duree: '1 h 30', conseil: 'Négocier les prix, surveiller ses affaires.' },
    en: {
      nom: 'Sandaga Market',
      resume: 'A lively downtown market: fabrics, crafts, spices.',
      description: "Dakar's busy commercial heart. Great for wax-print fabrics.",
      infos: { duree: '1 h 30', conseil: 'Bargain, and keep an eye on your belongings.' },
    },
  },
  {
    id: 'soumbedioune',
    nom: 'Village artisanal de Soumbédioune',
    categorie: 'marche',
    region: 'dakar',
    quartier: 'Médina',
    coords: [14.6787, -17.4608],
    photo: 'soumbedioune.jpg',
    resume: 'Artisans du bois, du cuir et de la bijouterie, face à la baie des pirogues.',
    description:
      "En fin d'après-midi, retour des pirogues de pêche et marché aux poissons sur la plage voisine.",
    infos: { duree: '1 h', conseil: 'Venir vers 17 h pour le retour des pêcheurs.' },
    en: {
      nom: 'Soumbédioune Craft Village',
      resume: 'Wood, leather and jewellery craftsmen facing the bay of pirogues.',
      description:
        'In the late afternoon the fishing pirogues return and a fish market sets up on the nearby beach.',
      infos: { duree: '1 h', conseil: 'Come around 5 pm to see the fishermen return.' },
    },
  },
  {
    id: 'pointe-almadies',
    nom: 'Pointe des Almadies',
    categorie: 'plage',
    region: 'dakar',
    quartier: 'Almadies',
    coords: [14.7411, -17.5298],
    photo: 'almadies.jpg',
    resume: "Point le plus occidental de l'Afrique continentale.",
    description: "Restaurants de fruits de mer, spots de surf et couchers de soleil sur l'océan.",
    infos: { duree: '2 h', conseil: 'Goûter les oursins en saison.' },
    en: {
      nom: 'Pointe des Almadies',
      resume: 'The westernmost point of mainland Africa.',
      description: 'Seafood restaurants, surf spots and sunsets over the ocean.',
      infos: { duree: '2 h', conseil: 'Try the sea urchins in season.' },
    },
  },
  {
    id: 'ile-de-ngor',
    nom: 'Île de Ngor',
    categorie: 'plage',
    region: 'dakar',
    quartier: 'Ngor',
    coords: [14.7593, -17.5137],
    photo: 'ngor.jpg',
    resume: 'Petite île sans voitures, plages calmes et vagues de surf.',
    description: 'Accessible en pirogue en 5 minutes depuis la plage de Ngor.',
    infos: { duree: 'Demi-journée', conseil: "Prévoir de l'argent liquide pour la pirogue." },
    en: {
      nom: 'Ngor Island',
      resume: 'A small car-free island with calm beaches and surf waves.',
      description: 'A 5-minute pirogue ride from Ngor beach.',
      infos: { duree: 'Half a day', conseil: 'Bring cash for the pirogue.' },
    },
  },

  // --- Plages ---
  {
    id: 'plage-de-ngor',
    nom: 'Plage de Ngor',
    categorie: 'plage',
    region: 'dakar',
    quartier: 'Ngor',
    coords: [14.7509, -17.5148],
    photo: 'plage-ngor.jpg',
    resume: 'Plage familiale, point de départ des pirogues pour l’île de Ngor.',
    description: 'Sable fin, eau souvent calme, petits restaurants de poisson grillé en bord de plage.',
    infos: { duree: '2 h', conseil: 'Plus calme en semaine.' },
    en: {
      nom: 'Ngor Beach',
      resume: 'A family beach and departure point for pirogues to Ngor Island.',
      description: 'Fine sand, usually calm water, small grilled-fish restaurants along the beach.',
      infos: { duree: '2 h', conseil: 'Quieter on weekdays.' },
    },
  },
  {
    id: 'plage-de-yoff',
    nom: 'Plage de Yoff',
    categorie: 'plage',
    region: 'dakar',
    quartier: 'Yoff',
    coords: [14.7625, -17.476],
    photo: 'plage-yoff.jpg',
    resume: 'Grande plage de pêcheurs lébous, très animée au retour des pirogues.',
    description: 'Ambiance authentique de village de pêcheurs, pirogues peintes alignées sur le sable.',
    infos: { duree: '1 h', conseil: 'Baignade à éviter par forte houle.' },
    en: {
      nom: 'Yoff Beach',
      resume: 'A large Lebu fishing beach, very lively when the pirogues return.',
      description: 'An authentic fishing-village atmosphere with painted pirogues lined up on the sand.',
      infos: { duree: '1 h', conseil: 'Avoid swimming when the swell is strong.' },
    },
  },
  {
    id: 'plage-du-virage',
    nom: 'Plage du Virage',
    categorie: 'plage',
    region: 'dakar',
    quartier: 'Ngor',
    coords: [14.7549, -17.4955],
    photo: 'plage-virage.jpg',
    resume: 'Plage prisée des surfeurs et des sportifs le week-end.',
    description: 'Écoles de surf, terrains de foot sur le sable et paillotes.',
    infos: { duree: '2 h', conseil: 'Cours de surf possibles sur place.' },
    en: {
      nom: 'Virage Beach',
      resume: 'A beach popular with surfers and sports lovers at weekends.',
      description: 'Surf schools, beach football pitches and straw-hut cafés.',
      infos: { duree: '2 h', conseil: 'Surf lessons available on site.' },
    },
  },
  {
    id: 'anse-bernard',
    nom: "Plage de l'Anse Bernard",
    categorie: 'plage',
    region: 'dakar',
    quartier: 'Plateau',
    coords: [14.6595, -17.434],
    photo: 'anse-bernard.jpg',
    resume: 'Petite plage urbaine du centre-ville, au pied du Plateau.',
    description: 'Pratique pour une pause en bord de mer entre deux visites du centre.',
    infos: { duree: '1 h', conseil: 'Idéale en fin de journée.' },
    en: {
      nom: 'Anse Bernard Beach',
      resume: 'A small downtown beach below the Plateau district.',
      description: 'Handy for a seaside break between two visits in the centre.',
      infos: { duree: '1 h', conseil: 'Best at the end of the day.' },
    },
  },

  // --- Restaurants ---
  {
    id: 'le-lagon',
    nom: 'Le Lagon 1',
    categorie: 'restaurant',
    region: 'dakar',
    quartier: 'Plateau',
    coords: [14.6675, -17.4286],
    photo: 'lagon.jpg',
    resume: 'Restaurant de poissons et fruits de mer sur pilotis, face à Gorée.',
    description: 'Terrasse au-dessus de l’eau avec vue sur la baie et l’île de Gorée.',
    infos: { duree: '1 h 30', conseil: 'Réserver le soir et le week-end.' },
    en: {
      nom: 'Le Lagon 1',
      resume: 'Fish and seafood restaurant on stilts, facing Gorée.',
      description: 'A terrace over the water with views of the bay and Gorée Island.',
      infos: { duree: '1 h 30', conseil: 'Book for evenings and weekends.' },
    },
  },
  {
    id: 'chez-loutcha',
    nom: 'Chez Loutcha',
    categorie: 'restaurant',
    region: 'dakar',
    quartier: 'Plateau',
    coords: [14.6687, -17.435],
    photo: 'loutcha.jpg',
    resume: 'Cuisine sénégalaise et cap-verdienne, copieuse et abordable.',
    description: 'Adresse populaire du centre pour goûter thiéboudienne, yassa et cachupa.',
    infos: { duree: '1 h', conseil: 'Venir tôt au déjeuner, souvent complet.' },
    en: {
      nom: 'Chez Loutcha',
      resume: 'Generous, affordable Senegalese and Cape Verdean food.',
      description: 'A popular downtown spot to try thieboudienne, yassa and cachupa.',
      infos: { duree: '1 h', conseil: 'Come early at lunchtime, it is often full.' },
    },
  },
  {
    id: 'la-calebasse',
    nom: 'La Calebasse',
    categorie: 'restaurant',
    region: 'dakar',
    quartier: 'Mamelles',
    coords: [14.725, -17.495],
    photo: 'calebasse.jpg',
    resume: 'Cuisine africaine dans un décor traditionnel, près du monument.',
    description: 'Salle décorée d’artisanat et terrasse en hauteur, cuisine du Sénégal et d’Afrique de l’Ouest.',
    infos: { duree: '1 h 30', conseil: 'À combiner avec la visite du monument.' },
    en: {
      nom: 'La Calebasse',
      resume: 'African cuisine in a traditional setting, near the monument.',
      description: 'A dining room decorated with crafts and a rooftop terrace; Senegalese and West African dishes.',
      infos: { duree: '1 h 30', conseil: 'Combine it with a visit to the monument.' },
    },
  },

  // --- Hôtels ---
  {
    id: 'terrou-bi',
    nom: 'Hôtel Terrou-Bi',
    categorie: 'hotel',
    region: 'dakar',
    quartier: 'Fann',
    coords: [14.6772, -17.4671],
    photo: 'terrou-bi.jpg',
    resume: 'Hôtel de standing sur la corniche ouest, avec plage privée.',
    description: 'Piscine face à l’océan, restaurants et casino. Proche du centre et de la corniche.',
    infos: { duree: 'Séjour', conseil: 'Demander une chambre vue mer.' },
    en: {
      nom: 'Terrou-Bi Hotel',
      resume: 'Upscale hotel on the western Corniche with a private beach.',
      description: 'Ocean-facing pool, restaurants and casino. Close to the centre and the Corniche.',
      infos: { duree: 'Stay', conseil: 'Ask for a sea-view room.' },
    },
  },
  {
    id: 'radisson-sea-plaza',
    nom: 'Radisson Blu Dakar Sea Plaza',
    categorie: 'hotel',
    region: 'dakar',
    quartier: 'Corniche ouest',
    coords: [14.693, -17.473],
    photo: 'radisson.jpg',
    resume: 'Hôtel moderne en bord de mer, relié à un centre commercial.',
    description: 'Piscine à débordement face à l’Atlantique, adapté aux séjours d’affaires comme de loisirs.',
    infos: { duree: 'Séjour', conseil: 'Coucher de soleil depuis la piscine.' },
    en: {
      nom: 'Radisson Blu Dakar Sea Plaza',
      resume: 'Modern seafront hotel connected to a shopping centre.',
      description: 'Infinity pool facing the Atlantic, suited to both business and leisure stays.',
      infos: { duree: 'Stay', conseil: 'Watch the sunset from the pool.' },
    },
  },
  {
    id: 'king-fahd-palace',
    nom: 'King Fahd Palace',
    categorie: 'hotel',
    region: 'dakar',
    quartier: 'Almadies',
    coords: [14.7475, -17.5246],
    photo: 'king-fahd.jpg',
    resume: 'Grand complexe hôtelier aux Almadies, jardins et piscines.',
    description: 'Vaste domaine en bord d’océan, proche de la Pointe des Almadies et des restaurants de la zone.',
    infos: { duree: 'Séjour', conseil: 'Pratique pour explorer Ngor et les Almadies.' },
    en: {
      nom: 'King Fahd Palace',
      resume: 'Large resort hotel in Almadies with gardens and pools.',
      description: 'A vast oceanfront estate close to Pointe des Almadies and the area’s restaurants.',
      infos: { duree: 'Stay', conseil: 'Convenient for exploring Ngor and Almadies.' },
    },
  },
  {
    id: 'pullman-teranga',
    nom: 'Pullman Dakar Teranga',
    categorie: 'hotel',
    region: 'dakar',
    quartier: 'Plateau',
    coords: [14.6672, -17.4309],
    photo: 'pullman.jpg',
    resume: 'Hôtel du centre-ville, à quelques minutes du port et de Sandaga.',
    description: 'Idéal pour visiter le Plateau à pied et prendre la chaloupe pour Gorée.',
    infos: { duree: 'Séjour', conseil: 'Bon point de départ pour Gorée.' },
    en: {
      nom: 'Pullman Dakar Teranga',
      resume: 'Downtown hotel, minutes from the port and Sandaga.',
      description: 'Ideal for exploring the Plateau on foot and catching the ferry to Gorée.',
      infos: { duree: 'Stay', conseil: 'A good base for Gorée.' },
    },
  },

  // --- Lieux ajoutés en novembre 2026 ---
  {
    id: 'iles-madeleine',
    nom: 'Parc national des Îles de la Madeleine',
    categorie: 'nature',
    region: 'dakar',
    quartier: 'Au large de Dakar',
    coords: [14.6564, -17.4706],
    photo: 'madeleine.jpg',
    resume: "Plus petit parc national d'Afrique : îlots volcaniques, oiseaux marins et eaux turquoise.",
    description:
      "Accessible en pirogue avec un guide agréé, l'île de Sarpan abrite des colonies d'oiseaux marins, des baobabs nains et des criques propices à la baignade.",
    infos: { duree: 'Demi-journée', conseil: 'Sorties seulement par mer calme ; réserver auprès du parc.' },
    en: {
      nom: 'Madeleine Islands National Park',
      resume: "Africa's smallest national park: volcanic islets, seabirds and turquoise water.",
      description:
        'Reached by pirogue with an approved guide, Sarpan island is home to seabird colonies, dwarf baobabs and coves for swimming.',
      infos: { duree: 'Half a day', conseil: 'Trips only run in calm seas; book with the park.' },
    },
  },
  {
    id: 'musee-theodore-monod',
    nom: "Musée Théodore Monod d'art africain",
    categorie: 'culture',
    region: 'dakar',
    quartier: 'Plateau',
    coords: [14.6637, -17.4383],
    photo: 'theodore-monod.jpg',
    resume: "L'un des plus anciens musées d'Afrique de l'Ouest, riche en masques et objets rituels.",
    description:
      "Installé dans un bâtiment colonial de la place Soweto, le musée de l'IFAN présente masques, statuaire, textiles et instruments de toute l'Afrique de l'Ouest.",
    infos: { duree: '1 h 30', horaires: 'Du mardi au dimanche, 9 h – 17 h ; fermé le lundi et les jours fériés.', conseil: "À combiner avec la place de l'Indépendance toute proche." },
    en: {
      nom: 'Théodore Monod Museum of African Art',
      resume: 'One of the oldest museums in West Africa, rich in masks and ritual objects.',
      description:
        'Housed in a colonial building on Place Soweto, the IFAN museum displays masks, statues, textiles and instruments from across West Africa.',
      infos: { duree: '1 h 30', horaires: 'Tuesday to Sunday, 9 am – 5 pm; closed on Mondays and public holidays.', conseil: 'Combine with the nearby Independence Square.' },
    },
  },
  {
    id: 'cathedrale-souvenir-africain',
    nom: 'Cathédrale du Souvenir africain',
    categorie: 'monument',
    region: 'dakar',
    quartier: 'Plateau',
    coords: [14.6654, -17.4376],
    photo: 'cathedrale.jpg',
    resume: 'Cathédrale des années 1930 aux coupoles et vitraux remarquables.',
    description:
      'Construite à la mémoire des pionniers morts en Afrique, elle mêle influences soudano-sahéliennes et byzantines. Fresques et vitraux colorés à l’intérieur.',
    infos: { duree: '30 min', conseil: 'Visite libre en dehors des offices, tenue correcte.' },
    en: {
      nom: 'Cathedral of African Remembrance',
      resume: 'A 1930s cathedral with striking domes and stained glass.',
      description:
        'Built in memory of pioneers who died in Africa, it blends Sudano-Sahelian and Byzantine influences. Frescoes and colourful stained glass inside.',
      infos: { duree: '30 min', conseil: 'Free entry outside services, dress respectfully.' },
    },
  },
  {
    id: 'grande-mosquee',
    nom: 'Grande Mosquée de Dakar',
    categorie: 'monument',
    region: 'dakar',
    quartier: 'Médina',
    coords: [14.6782, -17.4425],
    photo: 'grande-mosquee.jpg',
    resume: 'Mosquée de 1964 au minaret de 67 m, emblème du quartier de la Médina.',
    description:
      "Inspirée de l'architecture marocaine, elle se distingue par son minaret élancé et ses décors de zellige. Le quartier alentour est animé et populaire.",
    infos: { duree: '30 min', conseil: "Visite de l'extérieur ; intérieur sur autorisation, hors heures de prière." },
    en: {
      nom: 'Great Mosque of Dakar',
      resume: 'A 1964 mosque with a 67 m minaret, landmark of the Medina district.',
      description:
        'Inspired by Moroccan architecture, it stands out for its slender minaret and zellige tilework. The surrounding district is lively and popular.',
      infos: { duree: '30 min', conseil: 'View from outside; inside with permission, outside prayer times.' },
    },
  },
  {
    id: 'marche-kermel',
    nom: 'Marché Kermel',
    categorie: 'marche',
    region: 'dakar',
    quartier: 'Plateau',
    coords: [14.6704, -17.4289],
    photo: 'kermel.jpg',
    resume: 'Halle circulaire de 1910 : poissons, fruits, fleurs et paniers tressés.',
    description:
      "Reconstruit à l'identique après un incendie, ce pavillon en fer forgé est plus calme que Sandaga. Artisans et vanniers autour de la halle.",
    infos: { duree: '1 h', conseil: 'Venir le matin pour les étals de poisson et de fruits.' },
    en: {
      nom: 'Kermel Market',
      resume: 'A round 1910 market hall: fish, fruit, flowers and woven baskets.',
      description:
        'Rebuilt identically after a fire, this wrought-iron pavilion is calmer than Sandaga. Craftspeople and basket weavers around the hall.',
      infos: { duree: '1 h', conseil: 'Come in the morning for the fish and fruit stalls.' },
    },
  },
  {
    id: 'village-des-arts',
    nom: 'Village des Arts',
    categorie: 'culture',
    region: 'dakar',
    quartier: 'Yoff',
    coords: [14.7464, -17.4573],
    photo: 'village-arts.jpg',
    resume: "Cité d'ateliers où peintres et sculpteurs reçoivent les visiteurs.",
    description:
      "Une cinquantaine d'artistes y travaillent et exposent. On flâne d'atelier en atelier, on discute avec les créateurs et on peut acheter des œuvres directement.",
    infos: { duree: '1 h 30', conseil: 'Ateliers ouverts en journée, de préférence en semaine.' },
    en: {
      nom: 'Village des Arts',
      resume: "An artists' village where painters and sculptors welcome visitors.",
      description:
        'About fifty artists work and exhibit here. Wander from studio to studio, chat with the makers and buy works directly.',
      infos: { duree: '1 h 30', conseil: 'Studios open during the day, best on weekdays.' },
    },
  },
  {
    id: 'parc-de-hann',
    nom: 'Parc forestier et zoologique de Hann',
    categorie: 'nature',
    region: 'dakar',
    quartier: 'Hann',
    coords: [14.7256, -17.4335],
    photo: 'hann.jpg',
    resume: 'Grand poumon vert de Dakar : forêt, lac, parcours sportifs et petit zoo.',
    description:
      "Plus de 60 hectares d'arbres en pleine ville, appréciés des familles et des joggeurs. Le jardin zoologique présente des espèces de la faune sénégalaise.",
    infos: { duree: '2 h', conseil: 'Venir tôt le matin, quand il fait encore frais.' },
    en: {
      nom: 'Hann Forest and Zoological Park',
      resume: "Dakar's green lung: forest, lake, fitness trails and a small zoo.",
      description:
        'Over 60 hectares of trees in the middle of the city, popular with families and joggers. The zoo shows species of Senegalese wildlife.',
      infos: { duree: '2 h', conseil: 'Come early in the morning while it is still cool.' },
    },
  },
  {
    id: 'reserve-bandia',
    nom: 'Réserve de Bandia',
    categorie: 'nature',
    region: 'petite-cote',
    quartier: 'Sindia (65 km)',
    coords: [14.5587, -17.0092],
    photo: 'bandia.jpg',
    resume: 'Safari en 4x4 : girafes, rhinocéros, zèbres et baobabs géants.',
    description:
      "Réserve privée de 3 500 hectares sur la route de Saly. Les visites guidées en véhicule permettent d'approcher les animaux dans la savane.",
    infos: { duree: 'Demi-journée', horaires: 'Tous les jours, 8 h – 19 h.', conseil: 'Environ 1 h 15 de route ; partir tôt pour voir plus d’animaux.' },
    en: {
      nom: 'Bandia Reserve',
      resume: '4x4 safari: giraffes, rhinos, zebras and giant baobabs.',
      description:
        'A 3,500-hectare private reserve on the road to Saly. Guided vehicle tours get you close to the animals in the savannah.',
      infos: { duree: 'Half a day', horaires: 'Daily, 8 am – 7 pm.', conseil: 'About 1 h 15 by road; leave early to see more animals.' },
    },
  },
  {
    id: 'lagune-somone',
    nom: 'Lagune de la Somone',
    categorie: 'nature',
    region: 'petite-cote',
    quartier: 'Somone (80 km)',
    coords: [14.487, -17.083],
    photo: 'somone.jpg',
    resume: 'Lagune protégée bordée de mangroves, à explorer en pirogue.',
    description:
      'Réserve naturelle fréquentée par les pélicans, hérons et flamants. Balade en pirogue dans la mangrove puis baignade sur la longue plage voisine.',
    infos: { duree: '1 jour', conseil: 'À combiner avec la réserve de Bandia, sur la même route.' },
    en: {
      nom: 'Somone Lagoon',
      resume: 'A protected lagoon fringed with mangroves, to explore by pirogue.',
      description:
        'A nature reserve visited by pelicans, herons and flamingos. Pirogue trip through the mangroves, then a swim on the long beach nearby.',
      infos: { duree: '1 day', conseil: 'Combine with Bandia Reserve on the same road.' },
    },
  },
  {
    id: 'gare-de-dakar',
    nom: 'Gare de Dakar',
    categorie: 'monument',
    region: 'dakar',
    quartier: 'Plateau',
    coords: [14.6756, -17.4333],
    photo: 'gare.jpg',
    resume: 'Gare coloniale de 1914 restaurée, terminus du Train express régional.',
    description:
      "Façade colorée et grande verrière rénovées. Le TER relie le centre à Diamniadio et à l'aéroport AIBD, pratique pour sortir de la ville.",
    infos: { duree: '20 min', conseil: 'Prendre le TER pour éviter les embouteillages.' },
    en: {
      nom: 'Dakar Railway Station',
      resume: 'A restored 1914 colonial station, terminus of the Regional Express Train.',
      description:
        'Colourful façade and large glass roof renovated. The TER links downtown to Diamniadio and AIBD airport, handy for leaving the city.',
      infos: { duree: '20 min', conseil: 'Take the TER to avoid traffic jams.' },
    },
  },
  // --- Petite-Côte ---
  {
    id: 'toubab-dialaw',
    nom: 'Toubab Dialaw',
    categorie: 'culture',
    region: 'petite-cote',
    quartier: 'Toubab Dialaw (50 km)',
    coords: [14.6042, -17.1491],
    photo: 'toubab-dialaw.jpg',
    resume: "Village de pêcheurs et d'artistes au pied de falaises ocre.",
    description:
      'Première étape de la Petite-Côte en venant de Dakar : plage de pirogues, falaises rouges, ateliers et soirées de percussions. Ambiance bohème, loin de la foule.',
    infos: { duree: 'Demi-journée', conseil: 'Environ 1 h de route depuis Dakar, à combiner avec Popenguine.' },
    en: {
      resume: 'A fishing and artists’ village below ochre cliffs.',
      description:
        'The first stop on the Petite-Côte when coming from Dakar: a beach lined with pirogues, red cliffs, studios and drumming evenings. A bohemian feel, away from the crowds.',
      infos: { duree: 'Half a day', conseil: 'About 1 hour by road from Dakar; combine with Popenguine.' },
    },
  },
  {
    id: 'reserve-popenguine',
    nom: 'Réserve naturelle de Popenguine',
    categorie: 'nature',
    region: 'petite-cote',
    quartier: 'Popenguine (60 km)',
    coords: [14.5437, -17.0905],
    photo: 'popenguine.jpg',
    resume: 'Falaises, criques et sentiers au-dessus de la mer, gérés avec les femmes du village.',
    description:
      'Petite réserve littorale protégeant falaises et brousse côtière, réhabilitée par un collectif de femmes des villages voisins. Popenguine est aussi un lieu de pèlerinage marial très suivi à la Pentecôte.',
    infos: { duree: '2 h', conseil: 'Bonnes chaussures pour les sentiers ; éviter les heures chaudes.' },
    en: {
      nom: 'Popenguine Nature Reserve',
      resume: 'Cliffs, coves and trails above the sea, run with the village women.',
      description:
        'A small coastal reserve protecting cliffs and coastal bush, restored by a women’s collective from nearby villages. Popenguine is also a major Marian pilgrimage site at Pentecost.',
      infos: { duree: '2 h', conseil: 'Wear good shoes for the trails; avoid the hottest hours.' },
    },
  },
  {
    id: 'saly',
    nom: 'Saly',
    categorie: 'plage',
    region: 'petite-cote',
    quartier: 'Saly Portudal (80 km)',
    coords: [14.433, -16.9985],
    photo: 'saly.jpg',
    resume: 'La station balnéaire de la Petite-Côte : longues plages, hôtels et sports nautiques.',
    description:
      "Grande station touristique bordée d'hôtels, de restaurants et de clubs de plage. Base pratique pour rayonner vers Bandia, la Somone, Mbour et Joal-Fadiouth.",
    infos: { duree: '1 à 3 jours', conseil: 'Éviter de se baigner seul hors des zones surveillées.' },
    en: {
      resume: 'The Petite-Côte’s seaside resort: long beaches, hotels and water sports.',
      description:
        'A large tourist resort lined with hotels, restaurants and beach clubs. A handy base for trips to Bandia, Somone, Mbour and Joal-Fadiouth.',
      infos: { duree: '1 to 3 days', conseil: 'Avoid swimming alone outside supervised areas.' },
    },
  },
  {
    id: 'marche-poisson-mbour',
    nom: 'Plage des pêcheurs de Mbour',
    categorie: 'marche',
    region: 'petite-cote',
    quartier: 'Mbour (85 km)',
    coords: [14.415, -16.966],
    photo: 'mbour.jpg',
    resume: "Retour des pirogues et criée sur l'un des plus grands quais de pêche du pays.",
    description:
      "En fin d'après-midi, des centaines de pirogues colorées débarquent leur pêche sur la plage. Mareyeuses, porteurs et fumoirs : une plongée dans l'économie de la mer.",
    infos: { duree: '1 h', conseil: 'Venir vers 16–17 h ; demander avant de photographier.' },
    en: {
      nom: 'Mbour fishermen’s beach',
      resume: 'Pirogues returning and a fish auction on one of the country’s biggest fishing beaches.',
      description:
        'In the late afternoon, hundreds of colourful pirogues land their catch on the beach. Fish traders, porters and smokehouses: a dive into the sea economy.',
      infos: { duree: '1 h', conseil: 'Come around 4–5 pm; ask before taking photos.' },
    },
  },
  {
    id: 'joal-fadiouth',
    nom: 'Joal-Fadiouth',
    categorie: 'culture',
    region: 'petite-cote',
    quartier: 'Joal-Fadiouth (115 km)',
    coords: [14.1521, -16.8234],
    photo: 'fadiouth.jpg',
    resume: "L'île aux coquillages, reliée à Joal par un long pont de bois.",
    description:
      'Fadiouth est bâtie sur des amas de coquillages. On y visite les greniers à mil sur pilotis et le cimetière partagé par chrétiens et musulmans. Joal est la ville natale de Léopold Sédar Senghor.',
    infos: { duree: 'Demi-journée', conseil: 'Visite guidée proposée à l’entrée du pont ; convenir du prix avant.' },
    en: {
      resume: 'The shell island, linked to Joal by a long wooden bridge.',
      description:
        'Fadiouth is built on heaps of shells. Visit the millet granaries on stilts and the cemetery shared by Christians and Muslims. Joal is the birthplace of Léopold Sédar Senghor.',
      infos: { duree: 'Half a day', conseil: 'Guided tours are offered at the bridge; agree on the price first.' },
    },
  },

  {
    id: 'basilique-popenguine',
    nom: 'Basilique Notre-Dame de la Délivrance de Popenguine',
    categorie: 'monument',
    region: 'petite-cote',
    quartier: 'Popenguine (60 km)',
    coords: [14.5547, -17.1115],
    photo: 'basilique-popenguine.jpg',
    resume: 'Sanctuaire marial et grand lieu de pèlerinage du Sénégal.',
    description:
      'Fondée à la fin du XIXe siècle par les missionnaires, la basilique attire chaque lundi de Pentecôte des dizaines de milliers de pèlerins venus à pied de Dakar. Le reste de l’année, le village est calme, entre falaises et réserve naturelle.',
    infos: { duree: '1 h', conseil: 'Tenue correcte exigée ; éviter le week-end de Pentecôte si l’on cherche le calme.' },
    en: {
      nom: 'Basilica of Our Lady of Deliverance, Popenguine',
      resume: 'A Marian shrine and Senegal’s great pilgrimage site.',
      description:
        'Founded by missionaries in the late 19th century, the basilica draws tens of thousands of pilgrims every Whit Monday, many walking from Dakar. The rest of the year the village is quiet, between cliffs and the nature reserve.',
      infos: { duree: '1 hour', conseil: 'Dress modestly; avoid the Pentecost weekend if you want peace and quiet.' },
    },
  },
  {
    id: 'nianing',
    nom: 'Nianing',
    categorie: 'plage',
    region: 'petite-cote',
    quartier: 'Nianing (95 km)',
    coords: [14.344, -16.9294],
    photo: 'nianing.jpg',
    resume: 'Longue plage de pêcheurs, plus paisible que Saly.',
    description:
      'Au sud de Mbour, Nianing aligne pirogues colorées, petits hôtels et campements les pieds dans le sable. On y voit les retours de pêche et l’église de style soudanais du village.',
    infos: { duree: 'Demi-journée', conseil: 'Bonne base pour rayonner vers Joal-Fadiouth et le Saloum.' },
    en: {
      resume: 'A long fishing beach, quieter than Saly.',
      description:
        'South of Mbour, Nianing lines up colourful pirogues, small hotels and beach camps. Watch the fishing boats come in and see the village’s Sudanese-style church.',
      infos: { duree: 'Half a day', conseil: 'A good base for trips to Joal-Fadiouth and the Saloum.' },
    },
  },
  {
    id: 'plage-mbodiene',
    nom: 'Plage et lagune de Mbodiène',
    categorie: 'plage',
    region: 'petite-cote',
    quartier: 'Mbodiène (105 km)',
    coords: [14.2423, -16.8655],
    photo: 'mbodiene.jpg',
    resume: 'Plage de sable blanc bordée de filaos, à côté d’une lagune.',
    description:
      'Une des plus belles plages de la Petite-Côte : eau turquoise par beau temps, peu de monde et une lagune où l’on observe des oiseaux. Quelques hôtels et villas, pas de grand centre touristique.',
    infos: { duree: 'Demi-journée', conseil: 'Apporter eau et pique-nique, les services sont rares hors des hôtels.' },
    en: {
      nom: 'Mbodiène beach and lagoon',
      resume: 'A white-sand beach lined with casuarinas, next to a lagoon.',
      description:
        'One of the finest beaches on the Petite-Côte: turquoise water on sunny days, few people, and a lagoon for birdwatching. A few hotels and villas, no big resort.',
      infos: { duree: 'Half a day', conseil: 'Bring water and a picnic; services are scarce outside the hotels.' },
    },
  },
  {
    id: 'cimetiere-fadiouth',
    nom: 'Cimetière mixte de Fadiouth',
    categorie: 'culture',
    region: 'petite-cote',
    quartier: 'Fadiouth (115 km)',
    coords: [14.1562, -16.8261],
    photo: 'cimetiere-fadiouth.jpg',
    resume: 'Cimetière sur une île de coquillages, partagé par chrétiens et musulmans.',
    description:
      'Relié à l’île de Fadiouth par une passerelle, ce cimetière bâti sur les coquillages accueille côte à côte tombes chrétiennes et musulmanes, symbole de la coexistence religieuse au Sénégal. Vue sur la mangrove et les greniers sur pilotis.',
    infos: { duree: '45 min', conseil: 'À visiter avec Joal-Fadiouth ; rester respectueux, c’est un cimetière en activité.' },
    en: {
      nom: 'Fadiouth mixed cemetery',
      resume: 'A cemetery on a shell island, shared by Christians and Muslims.',
      description:
        'Reached from Fadiouth island by a footbridge, this cemetery built on shells holds Christian and Muslim graves side by side, a symbol of religious coexistence in Senegal. Views over the mangrove and the granaries on stilts.',
      infos: { duree: '45 min', conseil: 'Visit with Joal-Fadiouth; be respectful, it is still in use.' },
    },
  },
  {
    id: 'baobab-fadial',
    nom: 'Baobab sacré de Fadial',
    categorie: 'nature',
    region: 'petite-cote',
    quartier: 'Fadial, près de Joal (120 km)',
    coords: [14.1625, -16.7684],
    photo: 'baobab-fadial.jpg',
    resume: 'Baobab géant et sacré, l’un des plus grands du Sénégal.',
    description:
      'Ce baobab plusieurs fois centenaire, au tronc creux de plus de 30 m de circonférence, servait autrefois de sépulture aux griots sérères. On peut entrer dans sa cavité.',
    infos: { duree: '30 min', conseil: 'À 5 km de Joal ; une petite contribution est demandée à l’entrée.' },
    en: {
      nom: 'Sacred baobab of Fadial',
      resume: 'A giant sacred baobab, one of the largest in Senegal.',
      description:
        'This centuries-old baobab, with a hollow trunk over 30 m round, was once a burial place for Serer griots. You can step inside its cavity.',
      infos: { duree: '30 min', conseil: '5 km from Joal; a small contribution is asked at the entrance.' },
    },
  },
  // --- Delta du Saloum ---
  {
    id: 'palmarin',
    nom: 'Palmarin',
    categorie: 'nature',
    region: 'saloum',
    quartier: 'Palmarin',
    coords: [14.0131, -16.7645],
    photo: 'palmarin.jpg',
    resume: "Entre océan et mangrove, porte d'entrée sud du delta du Saloum.",
    description:
      'Lagunes, palmeraies, salines et bolongs bordés de palétuviers. Réserve naturelle riche en oiseaux, balades en pirogue et levers de soleil sur la mangrove.',
    infos: { duree: '1 à 2 jours', conseil: 'Environ 3 h de route depuis Dakar ; dormir dans un campement.' },
    en: {
      resume: 'Between ocean and mangrove, the southern gateway to the Saloum Delta.',
      description:
        'Lagoons, palm groves, salt pans and creeks (bolongs) lined with mangroves. A nature reserve rich in birds, pirogue trips and sunrises over the mangrove.',
      infos: { duree: '1 to 2 days', conseil: 'About 3 hours by road from Dakar; stay in a campement.' },
    },
  },
  {
    id: 'ile-mar-lodj',
    nom: 'Île de Mar Lodj',
    categorie: 'nature',
    region: 'saloum',
    quartier: 'Mar Lodj (via Ndangane)',
    coords: [14.043, -16.6789],
    photo: 'mar-lodj.jpg',
    resume: 'Île sans voitures au cœur du delta, ses villages et ses arbres sacrés.',
    description:
      "Accessible en pirogue depuis Ndangane. On s'y promène à pied ou en charrette entre villages, baobabs et les trois arbres sacrés entrelacés, symbole de la cohabitation des religions.",
    infos: { duree: '1 jour', conseil: 'Pirogue au départ de Ndangane, à négocier ou réserver via un campement.' },
    en: {
      nom: 'Mar Lodj Island',
      resume: 'A car-free island in the heart of the delta, with villages and sacred trees.',
      description:
        'Reached by pirogue from Ndangane. Explore on foot or by cart between villages, baobabs and the three intertwined sacred trees, a symbol of religious coexistence.',
      infos: { duree: '1 day', conseil: 'Pirogue from Ndangane; negotiate or book through a campement.' },
    },
  },
  {
    id: 'dionewar',
    nom: 'Dionewar et les îles du Saloum',
    categorie: 'plage',
    region: 'saloum',
    quartier: 'Îles du Saloum',
    coords: [13.8878, -16.7301],
    photo: 'dionewar.jpg',
    resume: 'Îles de pêcheurs niominkas, plages désertes et amas coquilliers.',
    description:
      'Les îles du Gandoul (Dionewar, Niodior, Falia) vivent de la pêche et de la cueillette des coquillages par les femmes. Paysage de bolongs, de dunes et de longues plages sauvages.',
    infos: { duree: '1 jour', conseil: 'Pirogue depuis Djiffer ; vérifier la marée et la météo avant de partir.' },
    en: {
      nom: 'Dionewar and the Saloum islands',
      resume: 'Niominka fishing islands, empty beaches and shell mounds.',
      description:
        'The Gandoul islands (Dionewar, Niodior, Falia) live from fishing and shellfish gathering by women. A landscape of creeks, dunes and long wild beaches.',
      infos: { duree: '1 day', conseil: 'Pirogue from Djiffer; check tide and weather before leaving.' },
    },
  },
  {
    id: 'foundiougne',
    nom: 'Foundiougne',
    categorie: 'culture',
    region: 'saloum',
    quartier: 'Foundiougne',
    coords: [14.1264, -16.4675],
    photo: 'foundiougne.jpg',
    resume: 'Petite ville ancienne au bord du fleuve Saloum, reliée par bac et par pont.',
    description:
      'Ancien comptoir de commerce sur le Saloum, aux maisons anciennes face à l’eau. Bon point de départ pour les balades en pirogue dans les bolongs et la pêche sportive.',
    infos: { duree: 'Demi-journée', conseil: 'Coucher de soleil sur le fleuve depuis les berges.' },
    en: {
      resume: 'A small old town on the Saloum river, reached by ferry and bridge.',
      description:
        'A former trading post on the Saloum river, with old houses facing the water. A good starting point for pirogue trips in the creeks and sport fishing.',
      infos: { duree: 'Half a day', conseil: 'Watch the sunset over the river from the banks.' },
    },
  },
  {
    id: 'toubacouta',
    nom: 'Toubacouta et le delta du Saloum',
    categorie: 'nature',
    region: 'saloum',
    quartier: 'Toubacouta',
    coords: [13.7839, -16.4748],
    photo: 'toubacouta.jpg',
    resume: 'Bolongs, mangroves et reposoirs d’oiseaux du delta classé par l’UNESCO.',
    description:
      "Le delta du Saloum est inscrit au patrimoine mondial et classé réserve de biosphère. Depuis Toubacouta, pirogues et kayaks sillonnent la mangrove jusqu'aux îles où les oiseaux se posent au coucher du soleil.",
    infos: { duree: '1 à 2 jours', conseil: 'Sortie en pirogue en fin de journée pour les oiseaux.' },
    en: {
      nom: 'Toubacouta and the Saloum Delta',
      resume: 'Creeks, mangroves and bird roosts in the UNESCO-listed delta.',
      description:
        'The Saloum Delta is a World Heritage site and a biosphere reserve. From Toubacouta, pirogues and kayaks wind through the mangrove to islands where birds roost at sunset.',
      infos: { duree: '1 to 2 days', conseil: 'Take a late-afternoon pirogue trip for the birds.' },
    },
  },
  {
    id: 'reserve-fathala',
    nom: 'Réserve de Fathala',
    categorie: 'nature',
    region: 'saloum',
    quartier: 'Karang (Fathala)',
    coords: [13.6416, -16.4314],
    photo: 'fathala.jpg',
    resume: 'Safari en forêt sèche : élands de Derby, girafes, rhinocéros.',
    description:
      "Réserve privée en bordure du parc national du delta du Saloum, près de la frontière gambienne. Safaris en véhicule ; l'activité « marche avec les lions » y est proposée mais fait débat.",
    infos: { duree: 'Demi-journée', conseil: 'Réserver à l’avance ; horaires et tarifs auprès de la réserve ou de l’agence.' },
    en: {
      nom: 'Fathala Wildlife Reserve',
      resume: 'Dry-forest safari: Derby elands, giraffes, rhinos.',
      description:
        'A private reserve next to the Saloum Delta National Park, near the Gambian border. Vehicle safaris; a “walk with lions” activity is offered but is controversial.',
      infos: { duree: 'Half a day', conseil: 'Book ahead; check times and prices with the reserve or your agency.' },
    },
  },

  {
    id: 'pointe-sangomar',
    nom: 'Pointe de Sangomar',
    categorie: 'nature',
    region: 'saloum',
    quartier: 'Djifer (en pirogue)',
    coords: [13.8250, -16.7552],
    photo: 'sangomar.jpg',
    resume: 'Flèche de sable sauvage entre océan et delta, aux baobabs couverts d’oiseaux.',
    description:
      'Au bout de la langue de sable de Djifer, la pointe de Sangomar est un lieu sacré pour les Sérères et un refuge pour les cormorans, sternes et pélicans. Plages désertes et baobabs isolés.',
    infos: { duree: 'Demi-journée', conseil: 'Accès uniquement en pirogue depuis Djifer ou Palmarin, avec un guide.' },
    en: {
      nom: 'Sangomar Point',
      resume: 'A wild sand spit between ocean and delta, with baobabs full of birds.',
      description:
        'At the end of the Djifer sand spit, Sangomar Point is sacred to the Serer and a refuge for cormorants, terns and pelicans. Empty beaches and lone baobabs.',
      infos: { duree: 'Half a day', conseil: 'Only reachable by pirogue from Djifer or Palmarin, with a guide.' },
    },
  },
  {
    id: 'parc-national-delta-saloum',
    nom: 'Parc national du delta du Saloum',
    categorie: 'nature',
    region: 'saloum',
    quartier: 'Delta du Saloum',
    coords: [13.83, -16.68],
    photo: 'parc-saloum.jpg',
    resume: 'Mangroves, bolongs et îles aux oiseaux classés à l’UNESCO.',
    description:
      'Le parc protège un labyrinthe de chenaux (bolongs), de mangroves et d’îlots où nichent cormorans, flamants, pélicans et sternes. Le delta est inscrit au patrimoine mondial de l’UNESCO pour ses amas coquilliers et sa culture sérère.',
    infos: { duree: '1 jour', conseil: 'Sortie en pirogue depuis Ndangane, Mar Lodj ou Toubacouta ; meilleure période pour les oiseaux : novembre à avril.' },
    en: {
      nom: 'Saloum Delta National Park',
      resume: 'UNESCO-listed mangroves, creeks and bird islands.',
      description:
        'The park protects a maze of channels (bolongs), mangroves and islets where cormorants, flamingos, pelicans and terns nest. The delta is a UNESCO World Heritage Site for its shell mounds and Serer culture.',
      infos: { duree: '1 day', conseil: 'Pirogue trips from Ndangane, Mar Lodj or Toubacouta; best for birds from November to April.' },
    },
  },
  {
    id: 'ndangane',
    nom: 'Ndangane',
    categorie: 'culture',
    region: 'saloum',
    quartier: 'Ndangane (160 km)',
    coords: [14.078, -16.6909],
    photo: 'ndangane.jpg',
    resume: 'Village-embarcadère du nord du delta, porte vers Mar Lodj.',
    description:
      'Point de départ des pirogues vers l’île de Mar Lodj et les bolongs. Campements et petits hôtels au bord du fleuve, couchers de soleil sur les pirogues colorées.',
    infos: { duree: 'Demi-journée', conseil: 'Environ 3 h de route depuis Dakar ; réserver la pirogue la veille.' },
    en: {
      resume: 'A landing village in the north of the delta, gateway to Mar Lodj.',
      description:
        'The starting point for pirogues to Mar Lodj island and the creeks. Camps and small hotels on the riverbank, sunsets over colourful pirogues.',
      infos: { duree: 'Half a day', conseil: 'About 3 hours by road from Dakar; book the pirogue the day before.' },
    },
  },
  {
    id: 'diorom-boumak',
    nom: 'Île aux coquillages de Diorom Boumak',
    categorie: 'culture',
    region: 'saloum',
    quartier: 'Aire marine protégée de Bamboung',
    coords: [13.79, -16.57],
    photo: 'diorom-boumak.jpg',
    resume: 'Île formée d’amas de coquillages millénaires, avec baobabs et tumulus.',
    description:
      'Au cœur de l’aire marine protégée de Bamboung, cette île est faite de coquillages accumulés depuis des siècles. On y trouve des tumulus funéraires et de grands baobabs : un des sites qui valent au delta son classement UNESCO.',
    infos: { duree: 'Demi-journée', conseil: 'Excursion en pirogue depuis Toubacouta ou Missirah ; emporter de l’eau.' },
    en: {
      nom: 'Diorom Boumak shell island',
      resume: 'An island made of ancient shell mounds, with baobabs and burial mounds.',
      description:
        'In the heart of the Bamboung marine protected area, this island is built from shells piled up over centuries. It holds burial mounds and large baobabs: one of the sites behind the delta’s UNESCO listing.',
      infos: { duree: 'Half a day', conseil: 'Pirogue trip from Toubacouta or Missirah; bring water.' },
    },
  },
  {
    id: 'missirah',
    nom: 'Missirah',
    categorie: 'culture',
    region: 'saloum',
    quartier: 'Missirah, près de Toubacouta',
    coords: [13.6824, -16.5019],
    photo: 'missirah.jpg',
    resume: 'Village de pêcheurs au bord des bolongs, avec un fromager géant.',
    description:
      'Grand quai de pêche animé au retour des pirogues, fumage du poisson et forêt de Fathala toute proche. Le village est connu pour son fromager géant aux racines immenses.',
    infos: { duree: '2 h', conseil: 'Venir en fin d’après-midi pour le débarquement du poisson.' },
    en: {
      resume: 'A fishing village on the creeks, with a giant kapok tree.',
      description:
        'A big fishing quay that comes alive when the pirogues return, fish smoking and the Fathala forest close by. The village is known for its giant kapok tree with huge roots.',
      infos: { duree: '2 hours', conseil: 'Come in the late afternoon to see the catch landed.' },
    },
  },
  // --- Casamance ---
  {
    id: 'ziguinchor',
    nom: 'Ziguinchor',
    categorie: 'culture',
    region: 'casamance',
    quartier: 'Ziguinchor',
    coords: [12.5741, -16.2758],
    photo: 'ziguinchor.jpg',
    resume: 'Capitale de la Casamance, au bord du fleuve, arrivée du bateau de Dakar.',
    description:
      'Ville verte aux bâtiments coloniaux, marché Saint-Maur animé et quais sur le fleuve Casamance. Le ferry Aline Sitoé Diatta la relie à Dakar en une nuit de traversée.',
    infos: { duree: '1 jour', conseil: 'Réserver le ferry Dakar–Ziguinchor plusieurs jours à l’avance.' },
    en: {
      resume: 'The capital of Casamance on the river, where the boat from Dakar arrives.',
      description:
        'A green town with colonial buildings, the lively Saint-Maur market and quays on the Casamance river. The Aline Sitoé Diatta ferry links it to Dakar in an overnight crossing.',
      infos: { duree: '1 day', conseil: 'Book the Dakar–Ziguinchor ferry several days ahead.' },
    },
  },
  {
    id: 'oussouye',
    nom: 'Oussouye',
    categorie: 'culture',
    region: 'casamance',
    quartier: 'Oussouye',
    coords: [12.489, -16.5433],
    photo: 'oussouye.jpg',
    resume: 'Cœur du pays diola et siège du royaume d’Oussouye.',
    description:
      'Village de Basse-Casamance entouré de rizières et de forêts sacrées. Le roi d’Oussouye, autorité religieuse traditionnelle, peut parfois être rencontré selon les règles de la cour royale.',
    infos: { duree: 'Demi-journée', conseil: 'Passer par un guide local pour respecter les bois sacrés et les coutumes.' },
    en: {
      resume: 'The heart of Diola country and seat of the Kingdom of Oussouye.',
      description:
        'A Lower Casamance village surrounded by rice fields and sacred forests. The King of Oussouye, a traditional religious authority, can sometimes be met, following the royal court’s rules.',
      infos: { duree: 'Half a day', conseil: 'Go with a local guide to respect sacred woods and customs.' },
    },
  },
  {
    id: 'cases-etages-mlomp',
    nom: 'Cases à étages de Mlomp',
    categorie: 'monument',
    region: 'casamance',
    quartier: 'Mlomp (Oussouye)',
    coords: [12.5592, -16.5805],
    photo: 'mlomp.jpg',
    resume: 'Maisons traditionnelles en banco à étage, rares en Afrique de l’Ouest.',
    description:
      "Construites en terre crue et en bois, ces cases à étage témoignent du savoir-faire diola. Le village est aussi connu pour ses immenses fromagers.",
    infos: { duree: '1 h 30', conseil: 'À combiner avec Oussouye et l’embarcadère d’Elinkine.' },
    en: {
      nom: 'Mlomp two-storey houses',
      resume: 'Traditional two-storey mud houses, rare in West Africa.',
      description:
        'Built of raw earth and wood, these two-storey houses show Diola building skills. The village is also known for its huge kapok trees.',
      infos: { duree: '1 h 30', conseil: 'Combine with Oussouye and the Elinkine landing stage.' },
    },
  },
  {
    id: 'ile-de-carabane',
    nom: 'Île de Carabane',
    categorie: 'culture',
    region: 'casamance',
    quartier: 'Carabane',
    coords: [12.534, -16.7],
    photo: 'carabane.jpg',
    resume: "Île historique à l'embouchure de la Casamance, ancien comptoir français.",
    description:
      "Vestiges de l'ancienne mission, église, cimetières et maisons de comptoir au milieu des palmiers. Plages calmes et mangrove tout autour.",
    infos: { duree: '1 jour', conseil: 'Pirogue depuis Elinkine ; prévoir de dormir sur place.' },
    en: {
      nom: 'Carabane Island',
      resume: 'A historic island at the mouth of the Casamance, a former French trading post.',
      description:
        'Remains of the old mission, a church, cemeteries and trading houses among palm trees. Calm beaches and mangrove all around.',
      infos: { duree: '1 day', conseil: 'Pirogue from Elinkine; plan to stay overnight.' },
    },
  },
  {
    id: 'cap-skirring',
    nom: 'Cap Skirring',
    categorie: 'plage',
    region: 'casamance',
    quartier: 'Cap Skirring',
    coords: [12.3885, -16.7385],
    photo: 'cap-skirring.jpg',
    resume: 'Parmi les plus belles plages du Sénégal : sable blanc et cocotiers.',
    description:
      'Station balnéaire de Basse-Casamance, proche de la frontière avec la Guinée-Bissau. Longues plages, villages de pêcheurs et excursions vers Diembéring et les bolongs.',
    infos: { duree: '2 à 4 jours', conseil: 'Vols saisonniers vers l’aéroport de Cap Skirring, sinon route depuis Ziguinchor.' },
    en: {
      resume: 'Among Senegal’s finest beaches: white sand and coconut palms.',
      description:
        'A Lower Casamance resort near the Guinea-Bissau border. Long beaches, fishing villages and trips to Diembéring and the creeks.',
      infos: { duree: '2 to 4 days', conseil: 'Seasonal flights to Cap Skirring airport, otherwise by road from Ziguinchor.' },
    },
  },
  {
    id: 'kafountine',
    nom: 'Kafountine',
    categorie: 'plage',
    region: 'casamance',
    quartier: 'Kafountine',
    coords: [12.9155, -16.7465],
    photo: 'kafountine.jpg',
    resume: 'Grand port de pêche artisanale et plages bordées de forêt.',
    description:
      "Au nord de la Casamance, Kafountine vit au rythme des pirogues et des fumeries de poisson. Plages immenses, lagunes et observation d'oiseaux.",
    infos: { duree: '1 à 2 jours', conseil: 'Le retour des pêcheurs, en fin de journée, est impressionnant.' },
    en: {
      resume: 'A big artisanal fishing port and forest-fringed beaches.',
      description:
        'In northern Casamance, Kafountine lives to the rhythm of pirogues and fish smokehouses. Vast beaches, lagoons and birdwatching.',
      infos: { duree: '1 to 2 days', conseil: 'The fishermen’s return at the end of the day is impressive.' },
    },
  },
  {
    id: 'abene',
    nom: 'Abéné',
    categorie: 'plage',
    region: 'casamance',
    quartier: 'Abéné',
    coords: [12.9981, -16.7214],
    photo: 'abene.jpg',
    resume: 'Village de percussions et de plages tranquilles.',
    description:
      "Réputé pour ses écoles de djembé et de danse, Abéné accueille en fin d'année un festival de musique. Plage sauvage et fromagers géants.",
    infos: { duree: '1 à 2 jours', conseil: 'Venir pour le festival de fin décembre (dates à vérifier).' },
    en: {
      resume: 'A drumming village with quiet beaches.',
      description:
        'Known for its djembe and dance schools, Abéné hosts a music festival at the end of the year. A wild beach and giant kapok trees.',
      infos: { duree: '1 to 2 days', conseil: 'Come for the late-December festival (check the dates).' },
    },
  },
];

export const lieuParId = (id) => lieux.find((l) => l.id === id);
