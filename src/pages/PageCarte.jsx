import { useState } from 'react';
import { lieux, categories } from '../data/lieux.js';
import Carte from '../components/Carte.jsx';
import FiltreRegions from '../components/FiltreRegions.jsx';
import { useLangue } from '../i18n.jsx';

export default function PageCarte() {
  const { t, loc } = useLangue();
  const [region, setRegion] = useState('toutes');
  const visibles = region === 'toutes' ? lieux : lieux.filter((l) => l.region === region);
  return (
    <>
      <h1>{t('carteDakar')}</h1>
      <FiltreRegions valeur={region} onChange={setRegion} />
      <div className="legende">
        {Object.entries(categories).map(([cle, c]) => (
          <span key={cle}><i style={{ background: c.couleur }} /> {loc(c).label}</span>
        ))}
      </div>
      {/* La clé recrée la carte pour recadrer sur la région choisie. */}
      <Carte key={region} lieux={visibles} hauteur={560} />
    </>
  );
}
