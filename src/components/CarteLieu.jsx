import { Link } from 'react-router-dom';
import Photo from './Photo.jsx';
import BoutonPlanning from './BoutonPlanning.jsx';
import { categories } from '../data/lieux.js';
import { useLangue } from '../i18n.jsx';

export default function CarteLieu({ lieu }) {
  const { loc } = useLangue();
  const l = loc(lieu);
  const cat = loc(categories[l.categorie]);
  return (
    <Link to={`/lieux/${l.id}`} className="carte-lieu">
      <div className="carte-lieu-image">
        <Photo lieu={lieu} />
        <span className="badge badge-flottant" style={{ background: cat.couleur }}>{cat.label}</span>
      </div>
      <div className="carte-lieu-corps">
        <h3>{l.nom}</h3>
        <p>{l.resume}</p>
        <div className="carte-lieu-pied">
          <p className="quartier-mini">{l.quartier}</p>
          <BoutonPlanning id={l.id} compact />
        </div>
      </div>
    </Link>
  );
}
