import { regions } from '../data/lieux.js';
import { useLangue } from '../i18n.jsx';

// Boutons de choix de région ('toutes' ou une clé de `regions`).
export default function FiltreRegions({ valeur, onChange }) {
  const { t, loc } = useLangue();
  return (
    <div className="filtres filtres-regions" role="group" aria-label={t('regions')}>
      <button className={valeur === 'toutes' ? 'actif' : ''} onClick={() => onChange('toutes')}>{t('toutesRegions')}</button>
      {Object.entries(regions).map(([cle, r]) => (
        <button key={cle} className={valeur === cle ? 'actif' : ''} onClick={() => onChange(cle)}>
          {loc(r).label}
        </button>
      ))}
    </div>
  );
}
