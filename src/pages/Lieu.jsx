import { Link, useParams } from 'react-router-dom';
import { lieuParId, categories } from '../data/lieux.js';
import { itineraires } from '../data/itineraires.js';
import Photo from '../components/Photo.jsx';
import Carte from '../components/Carte.jsx';
import BoutonPlanning from '../components/BoutonPlanning.jsx';
import { useLangue } from '../i18n.jsx';

export default function Lieu() {
  const { t, loc } = useLangue();
  const { id } = useParams();
  const brut = lieuParId(id);
  if (!brut) return <p>{t('lieuIntrouvable')} <Link to="/lieux">{t('retour')}</Link></p>;

  const lieu = loc(brut);
  const cat = loc(categories[lieu.categorie]);
  const dansItineraires = itineraires.filter((it) => it.etapes.includes(lieu.id)).map(loc);

  return (
    <article>
      <Link to="/lieux">{t('tousLesLieux')}</Link>
      <Photo lieu={brut} grande />
      <span className="badge" style={{ background: cat.couleur }}>{cat.label}</span>
      <h1>{lieu.nom}</h1>
      <BoutonPlanning id={lieu.id} />
      <p className="quartier">{t('quartier')} : {lieu.quartier}</p>
      <p>{lieu.description}</p>
      <ul className="infos">
        <li><strong>{t('duree')} :</strong> {lieu.infos.duree}</li>
        <li><strong>{t('conseil')} :</strong> {lieu.infos.conseil}</li>
      </ul>
      <Carte lieux={[brut]} hauteur={300} />
      {dansItineraires.length > 0 && (
        <>
          <h2>{t('dansItineraires')}</h2>
          <ul>
            {dansItineraires.map((it) => (
              <li key={it.id}><Link to={`/itineraires/${it.id}`}>{it.titre}</Link></li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
}
