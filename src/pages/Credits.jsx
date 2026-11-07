import { creditsPhotos } from '../data/photos.js';
import { useLangue } from '../i18n.jsx';

export default function Credits() {
  const { t } = useLangue();
  return (
    <article>
      <h1>{t('creditsTitre')}</h1>
      <p>{t('creditsTexte')}</p>
      <ul className="credits">
        {Object.entries(creditsPhotos).map(([fichier, c]) => (
          <li key={fichier}>
            <img src={`${import.meta.env.BASE_URL}photos/${fichier}`} alt="" loading="lazy" />
            <span>
              {c.auteur} · <a href={c.licenceUrl} target="_blank" rel="noreferrer">{c.licence}</a> ·{' '}
              <a href={c.source} target="_blank" rel="noreferrer">{t('voirSource')}</a>
              {c.illustration && <em> ({t('photoIllustration')})</em>}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
