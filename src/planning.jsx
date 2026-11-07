import { createContext, useContext, useEffect, useState } from 'react';
import { lieuParId } from './data/lieux.js';

// Programme de visite du touriste : liste ordonnée de { id, jour } + nombre de jours.
// Gardé dans le localStorage du navigateur (aucun compte, aucun serveur).
const CLE = 'programme-visite';
const PlanningContext = createContext(null);

function etatInitial() {
  try {
    const brut = JSON.parse(localStorage.getItem(CLE));
    if (brut && Array.isArray(brut.etapes)) {
      // Ignore les lieux supprimés ou renommés depuis la sauvegarde.
      const etapes = brut.etapes.filter((e) => lieuParId(e.id));
      return { jours: Math.max(1, Number(brut.jours) || 1), etapes };
    }
  } catch {}
  return { jours: 1, etapes: [] };
}

export function PlanningProvider({ children }) {
  const [etat, setEtat] = useState(etatInitial);

  useEffect(() => {
    try {
      localStorage.setItem(CLE, JSON.stringify(etat));
    } catch {}
  }, [etat]);

  const contient = (id) => etat.etapes.some((e) => e.id === id);

  const ajouter = (id, jour = etat.jours) =>
    setEtat((s) => (s.etapes.some((e) => e.id === id) ? s : { ...s, etapes: [...s.etapes, { id, jour }] }));

  // Ajoute un itinéraire entier sur un nouveau jour (ou le jour 1 si le programme est vide).
  const ajouterPlusieurs = (ids) =>
    setEtat((s) => {
      const nouveaux = ids.filter((id) => !s.etapes.some((e) => e.id === id));
      if (nouveaux.length === 0) return s;
      const jour = s.etapes.length === 0 ? 1 : s.jours + 1;
      return { jours: Math.max(s.jours, jour), etapes: [...s.etapes, ...nouveaux.map((id) => ({ id, jour }))] };
    });

  const retirer = (id) => setEtat((s) => ({ ...s, etapes: s.etapes.filter((e) => e.id !== id) }));

  const changerJour = (id, jour) =>
    setEtat((s) => ({ ...s, etapes: s.etapes.map((e) => (e.id === id ? { ...e, jour } : e)) }));

  // Déplace un lieu d'un cran vers le haut (-1) ou le bas (+1) parmi les lieux du même jour.
  const deplacer = (id, sens) =>
    setEtat((s) => {
      const etapes = [...s.etapes];
      const i = etapes.findIndex((e) => e.id === id);
      const jour = etapes[i].jour;
      let j = i + sens;
      while (j >= 0 && j < etapes.length && etapes[j].jour !== jour) j += sens;
      if (j < 0 || j >= etapes.length) return s;
      [etapes[i], etapes[j]] = [etapes[j], etapes[i]];
      return { ...s, etapes };
    });

  // Réduire le nombre de jours ramène les lieux des jours supprimés sur le dernier jour.
  const changerJours = (n) =>
    setEtat((s) => ({ jours: n, etapes: s.etapes.map((e) => (e.jour > n ? { ...e, jour: n } : e)) }));

  const vider = () => setEtat({ jours: 1, etapes: [] });

  return (
    <PlanningContext.Provider
      value={{ ...etat, contient, ajouter, ajouterPlusieurs, retirer, changerJour, deplacer, changerJours, vider }}
    >
      {children}
    </PlanningContext.Provider>
  );
}

export const usePlanning = () => useContext(PlanningContext);
