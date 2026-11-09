// Recherche plein texte insensible aux accents et à la casse.
// Cherche dans les deux langues pour qu'un visiteur trouve "Gorée Island" ou "Île de Gorée" quelle que soit la langue affichée.

import { regions } from './data/lieux.js';

const normaliser = (s) =>
  (s ?? '')
    .toString()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

function texteIndexe(lieu, categories) {
  const cat = categories[lieu.categorie];
  const reg = regions[lieu.region];
  const champs = [
    lieu.nom, lieu.resume, lieu.description, lieu.quartier, cat?.label, cat?.en?.label, reg?.label, reg?.en?.label,
    lieu.en?.nom, lieu.en?.resume, lieu.en?.description,
  ];
  return normaliser(champs.join(' '));
}

export function rechercherLieux(lieux, categories, requete) {
  const mots = normaliser(requete).split(/\s+/).filter(Boolean);
  if (mots.length === 0) return lieux;
  return lieux.filter((l) => {
    const texte = texteIndexe(l, categories);
    return mots.every((m) => texte.includes(m));
  });
}
