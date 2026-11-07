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
];

export const itineraireParId = (id) => itineraires.find((i) => i.id === id);
