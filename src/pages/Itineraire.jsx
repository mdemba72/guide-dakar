import { Link, useNavigate, useParams } from 'react-router-dom';
import { usePlanning } from '../planning.jsx';
import { itineraireParId } from '../data/itineraires.js';
import { lieuParId } from '../data/lieux.js';
import Carte from '../components/Carte.jsx';
import Photo from '../components/Photo.jsx';
import { useLangue } from '../i18n.jsx';

export default function Itineraire() {
  const { t, loc } = useLangue();
  const { id } = useParams();
  const { ajouterPlusieurs } = usePlanning();
  const navigate = useNavigate();
  const brut = itineraireParId(id);
  if (!brut) return <p>{t('itineraireIntrouvable')} <Link to="/itineraires">{t('retour')}</Link></p>;

  const it = loc(brut);
  const etapes = it.etapes.map(lieuParId).filter(Boolean);

  return (
    <article>
      <Link to="/itineraires">{t('tousLesItineraires')}</Link>
      <h1>{it.titre}</h1>
      <p>{it.duree} · {it.resume}</p>
      <button className="bouton-plan" onClick={() => { ajouterPlusieurs(it.etapes); navigate('/planifier'); }}>
        {t('ajouterItineraire')}
      </button>
      <Carte lieux={etapes} trace hauteur={380} />
      <ol className="etapes-photos">
        {etapes.map((brutLieu, i) => {
          const l = loc(brutLieu);
          return (
            <li key={l.id}>
              <Link to={`/lieux/${l.id}`} className="etape-photo">
                <Photo lieu={brutLieu} />
                <span className="etape-numero">{i + 1}</span>
              </Link>
              <div>
                <Link to={`/lieux/${l.id}`}><strong>{l.nom}</strong></Link>
                <p>{l.resume}</p>
                <p className="etape-infos">{l.infos.duree} · {l.infos.conseil}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </article>
  );
}
