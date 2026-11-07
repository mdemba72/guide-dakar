import { Link } from 'react-router-dom';
import Photo from './Photo.jsx';
import { categories } from '../data/lieux.js';
import { useLangue } from '../i18n.jsx';

export default function CarteLieu({ lieu }) {
  const { loc } = useLangue();
  const l = loc(lieu);
  const cat = loc(categories[l.categorie]);
  return (
    <Link to={`/lieux/${l.id}`} className="carte-lieu">
      <Photo lieu={lieu} />
      <div className="carte-lieu-corps">
        <span className="badge" style={{ background: cat.couleur }}>{cat.label}</span>
        <h3>{l.nom}</h3>
        <p>{l.resume}</p>
      </div>
    </Link>
  );
}
