import { createContext, useContext, useEffect, useState } from 'react';

// Textes de l'interface. Les données (lieux, itinéraires) portent leur traduction dans un bloc `en`.
const textes = {
  fr: {
    titreSite: 'Guide de Dakar',
    lieux: 'Lieux',
    carte: 'Carte',
    itineraires: 'Itinéraires',
    rechercher: 'Rechercher un lieu…',
    heroTitre: 'Découvrir Dakar',
    heroTexte: "Monuments, îles, marchés, plages et bonnes adresses sur l'Atlantique.",
    voirLieux: 'Voir les lieux',
    ouvrirCarte: 'Ouvrir la carte',
    incontournables: 'Incontournables',
    lieuxAVisiter: 'Les lieux à visiter',
    tous: 'Tous',
    resultats: (n, q) => `${n} résultat${n > 1 ? 's' : ''} pour « ${q} »`,
    aucunResultat: 'Aucun lieu ne correspond à votre recherche.',
    effacer: 'Effacer',
    tousLesLieux: '← Tous les lieux',
    quartier: 'Quartier',
    duree: 'Durée conseillée',
    conseil: 'Conseil',
    voirFiche: 'Voir la fiche',
    dansItineraires: 'Présent dans les itinéraires',
    lieuIntrouvable: 'Lieu introuvable.',
    retour: 'Retour',
    carteDakar: 'Carte de Dakar',
    tousLesItineraires: '← Tous les itinéraires',
    etapes: (n) => `${n} étapes`,
    itineraireIntrouvable: 'Itinéraire introuvable.',
    pageIntrouvable: 'Page introuvable.',
    piedCarte: 'Fonds de carte © OpenStreetMap',
    autreLangue: 'EN',
    autreLangueTitre: 'View in English',
    photo: 'Photo',
    photoIllustration: "Photo d'illustration",
    creditsLien: 'Crédits photos',
    creditsTitre: 'Crédits photos',
    creditsTexte: 'Les photos proviennent de Wikimedia Commons et sont publiées sous licences libres. Merci à leurs auteurs.',
    voirSource: 'source',
    heroChiffres: (n, i) => `${n} lieux · ${i} itinéraires · carte interactive`,
  },
  en: {
    titreSite: 'Dakar Guide',
    lieux: 'Places',
    carte: 'Map',
    itineraires: 'Itineraries',
    rechercher: 'Search a place…',
    heroTitre: 'Discover Dakar',
    heroTexte: 'Landmarks, islands, markets, beaches and good addresses on the Atlantic.',
    voirLieux: 'See the places',
    ouvrirCarte: 'Open the map',
    incontournables: 'Must-sees',
    lieuxAVisiter: 'Places to visit',
    tous: 'All',
    resultats: (n, q) => `${n} result${n > 1 ? 's' : ''} for “${q}”`,
    aucunResultat: 'No place matches your search.',
    effacer: 'Clear',
    tousLesLieux: '← All places',
    quartier: 'District',
    duree: 'Suggested time',
    conseil: 'Tip',
    voirFiche: 'View details',
    dansItineraires: 'Included in itineraries',
    lieuIntrouvable: 'Place not found.',
    retour: 'Back',
    carteDakar: 'Map of Dakar',
    tousLesItineraires: '← All itineraries',
    etapes: (n) => `${n} stops`,
    itineraireIntrouvable: 'Itinerary not found.',
    pageIntrouvable: 'Page not found.',
    piedCarte: 'Map data © OpenStreetMap',
    autreLangue: 'FR',
    autreLangueTitre: 'Voir en français',
    photo: 'Photo',
    photoIllustration: 'Illustrative photo',
    creditsLien: 'Photo credits',
    creditsTitre: 'Photo credits',
    creditsTexte: 'Photos come from Wikimedia Commons and are published under free licences. Thanks to their authors.',
    voirSource: 'source',
    heroChiffres: (n, i) => `${n} places · ${i} itineraries · interactive map`,
  },
};

const LangueContext = createContext(null);

function langueInitiale() {
  try {
    const sauvee = localStorage.getItem('langue');
    if (sauvee === 'fr' || sauvee === 'en') return sauvee;
  } catch {}
  return 'fr';
}

export function LangueProvider({ children }) {
  const [langue, setLangue] = useState(langueInitiale);

  useEffect(() => {
    document.documentElement.lang = langue;
    try {
      localStorage.setItem('langue', langue);
    } catch {}
  }, [langue]);

  const t = (cle, ...args) => {
    const v = textes[langue][cle] ?? textes.fr[cle];
    return typeof v === 'function' ? v(...args) : v;
  };

  // Renvoie l'objet de données avec ses champs traduits dans la langue courante.
  const loc = (objet) => {
    if (!objet || langue === 'fr' || !objet[langue]) return objet;
    const tr = objet[langue];
    return { ...objet, ...tr, infos: tr.infos ? { ...objet.infos, ...tr.infos } : objet.infos };
  };

  const basculer = () => setLangue((l) => (l === 'fr' ? 'en' : 'fr'));

  return <LangueContext.Provider value={{ langue, t, loc, basculer }}>{children}</LangueContext.Provider>;
}

export const useLangue = () => useContext(LangueContext);
