import { useState } from 'react';
import { categories } from '../data/lieux.js';
import { useLangue } from '../i18n.jsx';

// Affiche public/photos/<photo>, ou un visuel coloré si le fichier n'existe pas encore.
export default function Photo({ lieu, grande = false }) {
  const { loc } = useLangue();
  const [erreur, setErreur] = useState(false);
  const l = loc(lieu);
  const classe = grande ? 'photo photo-grande' : 'photo';

  if (!l.photo || erreur) {
    const couleur = categories[l.categorie]?.couleur ?? '#555';
    return (
      <div className={`${classe} photo-vide`} style={{ background: couleur }}>
        <span>{l.nom}</span>
      </div>
    );
  }
  return <img className={classe} src={`${import.meta.env.BASE_URL}photos/${l.photo}`} alt={l.nom} onError={() => setErreur(true)} />;
}
