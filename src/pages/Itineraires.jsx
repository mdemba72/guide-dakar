import { Link } from 'react-router-dom';
import { itineraires } from '../data/itineraires.js';
import { lieuParId } from '../data/lieux.js';
import { useLangue } from '../i18n.jsx';

export default function Itineraires() {
  const { t, loc } = useLangue();
  return (
    <>
      <h1>{t('itineraires')}</h1>
      <div className="grille">
        {itineraires.map(loc).map((it) => (
          <Link key={it.id} to={`/itineraires/${it.id}`} className="carte-lieu carte-lieu-corps">
            <h3>{it.titre}</h3>
            <p>{it.duree} · {t('etapes', it.etapes.length)}</p>
            <p>{it.resume}</p>
            <p className="etapes">{it.etapes.map((e) => loc(lieuParId(e))?.nom).join(' → ')}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
