import { lieux, categories } from '../data/lieux.js';
import Carte from '../components/Carte.jsx';
import { useLangue } from '../i18n.jsx';

export default function PageCarte() {
  const { t, loc } = useLangue();
  return (
    <>
      <h1>{t('carteDakar')}</h1>
      <div className="legende">
        {Object.entries(categories).map(([cle, c]) => (
          <span key={cle}><i style={{ background: c.couleur }} /> {loc(c).label}</span>
        ))}
      </div>
      <Carte lieux={lieux} hauteur={560} />
    </>
  );
}
