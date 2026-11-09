// Itinéraires : suites ordonnées d'identifiants de lieux (voir lieux.js).
// Le bloc `en` surcharge les champs traduits.

export const itineraires = [
  {
    id: 'corniche-ouest',
    titre: 'La corniche ouest en une journée',
    duree: '1 jour',
    resume: 'Monuments, mosquée face à la mer et coucher de soleil aux Almadies.',
    etapes: ['phare-mamelles', 'renaissance-africaine', 'la-calebasse', 'mosquee-divinite', 'pointe-almadies'],
    en: {
      titre: 'The western Corniche in one day',
      duree: '1 day',
      resume: 'Landmarks, a seafront mosque and sunset at Almadies.',
    },
  },
  {
    id: 'dakar-historique',
    titre: 'Dakar historique et culturel',
    duree: '1 jour',
    resume: 'Musée, marché du centre, déjeuner puis traversée vers Gorée.',
    etapes: ['musee-civilisations-noires', 'marche-sandaga', 'chez-loutcha', 'ile-de-goree'],
    en: {
      titre: 'Historic and cultural Dakar',
      duree: '1 day',
      resume: 'Museum, downtown market, lunch, then the ferry to Gorée.',
    },
  },
  {
    id: 'mer-et-nature',
    titre: 'Mer et nature',
    duree: '1 jour',
    resume: "Île de Ngor le matin, Lac Rose l'après-midi.",
    etapes: ['ile-de-ngor', 'lac-rose'],
    en: {
      titre: 'Sea and nature',
      duree: '1 day',
      resume: 'Ngor Island in the morning, Pink Lake in the afternoon.',
    },
  },
  {
    id: 'plages-du-nord',
    titre: 'Les plages du nord',
    duree: '1 jour',
    resume: 'Surf au Virage, pêcheurs de Yoff et baignade à Ngor.',
    etapes: ['plage-du-virage', 'plage-de-yoff', 'plage-de-ngor'],
    en: {
      titre: 'Northern beaches',
      duree: '1 day',
      resume: 'Surfing at Virage, Yoff fishermen and a swim at Ngor.',
    },
  },
  {
    id: 'petite-cote',
    titre: 'La Petite-Côte en 3 jours',
    duree: '3 jours',
    resume: 'Villages et falaises, safari à Bandia, lagune de la Somone, pêcheurs de Mbour et île aux coquillages.',
    etapes: ['toubab-dialaw', 'reserve-popenguine', 'basilique-popenguine', 'reserve-bandia', 'lagune-somone', 'saly', 'marche-poisson-mbour', 'nianing', 'plage-mbodiene', 'joal-fadiouth', 'cimetiere-fadiouth', 'baobab-fadial'],
    en: {
      titre: 'The Petite-Côte in 3 days',
      duree: '3 days',
      resume: 'Villages and cliffs, a safari at Bandia, Somone lagoon, Mbour fishermen and the shell island.',
    },
  },
  {
    id: 'delta-du-saloum',
    titre: 'Le delta du Saloum',
    duree: '4 jours',
    resume: 'Mangroves et bolongs en pirogue, îles sans voitures, safari à Fathala.',
    etapes: ['palmarin', 'pointe-sangomar', 'dionewar', 'parc-national-delta-saloum', 'ndangane', 'ile-mar-lodj', 'foundiougne', 'toubacouta', 'diorom-boumak', 'missirah', 'reserve-fathala'],
    en: {
      titre: 'The Saloum Delta',
      duree: '4 days',
      resume: 'Mangroves and creeks by pirogue, car-free islands, a safari at Fathala.',
    },
  },
  {
    id: 'casamance',
    titre: 'La Casamance, du fleuve aux plages',
    duree: '5 jours',
    resume: 'Ziguinchor, royaume d’Oussouye, cases à étages, île de Carabane et plages de Cap Skirring à Abéné.',
    etapes: ['ziguinchor', 'oussouye', 'cases-etages-mlomp', 'ile-de-carabane', 'cap-skirring', 'kafountine', 'abene'],
    en: {
      titre: 'Casamance, from the river to the beaches',
      duree: '5 days',
      resume: 'Ziguinchor, the Kingdom of Oussouye, two-storey houses, Carabane Island and beaches from Cap Skirring to Abéné.',
    },
  },
];

export const itineraireParId = (id) => itineraires.find((i) => i.id === id);
