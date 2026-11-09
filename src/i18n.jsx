import { createContext, useContext, useEffect, useState } from 'react';

// Textes de l'interface. Les données (lieux, itinéraires) portent leur traduction dans un bloc `en`.
const textes = {
  fr: {
    titreSite: 'Guide touristique du Sénégal',
    lieux: 'Lieux',
    carte: 'Carte',
    itineraires: 'Itinéraires',
    rechercher: 'Rechercher un lieu…',
    heroTitre: 'Découvrir le Sénégal',
    heroTexte: 'De Dakar à la Casamance, en passant par la Petite-Côte et le delta du Saloum : monuments, îles, réserves, plages et bonnes adresses.',
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
    horaires: 'Horaires',
    regions: 'Les régions',
    toutesRegions: 'Tout le Sénégal',
    nbLieux: (n) => `${n} lieu${n > 1 ? 'x' : ''}`,
    voirFiche: 'Voir la fiche',
    dansItineraires: 'Présent dans les itinéraires',
    lieuIntrouvable: 'Lieu introuvable.',
    retour: 'Retour',
    carteDakar: 'Carte des lieux',
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
    planifier: 'Planifier ma visite',
    planifierCourt: 'Planifier',
    planTitre: 'Planifier ma visite',
    planIntro: 'Choisissez vos lieux, répartissez-les par jour et retrouvez votre parcours sur la carte. Votre programme est gardé sur cet appareil.',
    planVide: 'Votre programme est vide. Ajoutez des lieux ci-dessous ou partez d’un itinéraire tout prêt.',
    partirItineraire: 'Partir d’un itinéraire',
    nbJours: 'Nombre de jours',
    jour: (n) => `Jour ${n}`,
    jourVide: 'Aucun lieu prévu ce jour-là.',
    ajouterLieux: 'Ajouter des lieux',
    ajouter: '+ Ajouter',
    ajouterVoyage: '+ Ajouter à ma visite',
    dansVoyage: '✓ Dans ma visite',
    ajouterItineraire: '+ Ajouter cet itinéraire à ma visite',
    monter: 'Monter',
    descendre: 'Descendre',
    retirer: 'Retirer',
    imprimer: 'Imprimer / PDF',
    vider: 'Tout effacer',
    lieuxPrevus: (n) => `${n} lieu${n > 1 ? 'x' : ''} prévu${n > 1 ? 's' : ''}`,
    heroChiffres: (n, i) => `${n} lieux · ${i} itinéraires · carte interactive`,
  },
  en: {
    titreSite: 'Senegal Travel Guide',
    lieux: 'Places',
    carte: 'Map',
    itineraires: 'Itineraries',
    rechercher: 'Search a place…',
    heroTitre: 'Discover Senegal',
    heroTexte: 'From Dakar to Casamance, via the Petite-Côte and the Saloum Delta: landmarks, islands, reserves, beaches and good addresses.',
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
    horaires: 'Opening hours',
    regions: 'Regions',
    toutesRegions: 'All of Senegal',
    nbLieux: (n) => `${n} place${n > 1 ? 's' : ''}`,
    voirFiche: 'View details',
    dansItineraires: 'Included in itineraries',
    lieuIntrouvable: 'Place not found.',
    retour: 'Back',
    carteDakar: 'Map of places',
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
    planifier: 'Plan my visit',
    planifierCourt: 'Plan',
    planTitre: 'Plan my visit',
    planIntro: 'Pick your places, spread them over days and see your route on the map. Your plan is kept on this device.',
    planVide: 'Your plan is empty. Add places below or start from a ready-made itinerary.',
    partirItineraire: 'Start from an itinerary',
    nbJours: 'Number of days',
    jour: (n) => `Day ${n}`,
    jourVide: 'Nothing planned that day.',
    ajouterLieux: 'Add places',
    ajouter: '+ Add',
    ajouterVoyage: '+ Add to my visit',
    dansVoyage: '✓ In my visit',
    ajouterItineraire: '+ Add this itinerary to my visit',
    monter: 'Move up',
    descendre: 'Move down',
    retirer: 'Remove',
    imprimer: 'Print / PDF',
    vider: 'Clear all',
    lieuxPrevus: (n) => `${n} place${n > 1 ? 's' : ''} planned`,
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
