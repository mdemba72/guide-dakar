import { Link, useParams } from 'react-router-dom';
import { itineraireParId } from '../data/itineraires.js';
import { lieuParId } from '../data/lieux.js';
import Carte from '../components/Carte.jsx';
import { useLangue } from '../i18n.jsx';

export default function Itineraire() {
  const { t, loc } = useLangue();
  const { id } = useParams();
  const brut = itineraireParId(id);
  if (!brut) return <p>{t('itineraireIntrouvable')} <Link to="/itineraires">{t('retour')}</Link></p>;

  const it = loc(brut);
  const etapes = it.etapes.map(lieuParId).filter(Boolean);

  return (
    <article>
      <Link to="/itineraires">{t('tousLesItineraires')}</Link>
      <h1>{it.titre}</h1>
      <p>{it.duree} · {it.resume}</p>
      <Carte lieux={etapes} trace hauteur={380} />
      <ol className="etapes-liste">
        {etapes.map(loc).map((l) => (
          <li key={l.id}>
            <Link to={`/lieux/${l.id}`}><strong>{l.nom}</strong></Link>
            <span> — {l.infos.duree}. {l.infos.conseil}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}
