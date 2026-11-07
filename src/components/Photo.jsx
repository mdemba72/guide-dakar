import { useState } from 'react';
import { categories } from '../data/lieux.js';
import { creditsPhotos } from '../data/photos.js';
import { useLangue } from '../i18n.jsx';

// Affiche public/photos/<photo>, ou un visuel coloré si le fichier n'existe pas encore.
// En grand format (fiche lieu), affiche aussi le crédit de la photo, exigé par sa licence.
export default function Photo({ lieu, grande = false }) {
  const { t, loc } = useLangue();
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
  const img = (
    <img className={classe} src={`${import.meta.env.BASE_URL}photos/${l.photo}`} alt={l.nom}
      loading={grande ? 'eager' : 'lazy'} onError={() => setErreur(true)} />
  );
  const credit = creditsPhotos[l.photo];
  if (!grande || !credit) return img;
  return (
    <figure className="figure-photo">
      {img}
      <figcaption>
        {credit.illustration && <>{t('photoIllustration')} · </>}
        {t('photo')} : {credit.auteur} · <a href={credit.source} target="_blank" rel="noreferrer">{credit.licence}</a>
      </figcaption>
    </figure>
  );
}
