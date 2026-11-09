import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { lieux, categories, regions } from '../data/lieux.js';
import { rechercherLieux } from '../recherche.js';
import CarteLieu from '../components/CarteLieu.jsx';
import FiltreRegions from '../components/FiltreRegions.jsx';
import { useLangue } from '../i18n.jsx';

export default function Lieux() {
  const { t, loc } = useLangue();
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const region = regions[params.get('region')] ? params.get('region') : 'toutes';
  const [filtre, setFiltre] = useState('tous');

  // La région est gardée dans l'URL (?region=…) pour que les liens de l'accueil y mènent directement.
  const choisirRegion = (r) => {
    const p = new URLSearchParams(params);
    if (r === 'toutes') p.delete('region');
    else p.set('region', r);
    setParams(p, { replace: true });
  };

  const trouves = rechercherLieux(lieux, categories, q);
  const visibles = trouves.filter(
    (l) => (region === 'toutes' || l.region === region) && (filtre === 'tous' || l.categorie === filtre),
  );

  return (
    <>
      <h1>{region === 'toutes' ? t('lieuxAVisiter') : loc(regions[region]).label}</h1>
      {q && (
        <p className="resultats">
          {t('resultats', visibles.length, q)} · <Link to="/lieux">{t('effacer')}</Link>
        </p>
      )}
      <FiltreRegions valeur={region} onChange={choisirRegion} />
      <div className="filtres">
        <button className={filtre === 'tous' ? 'actif' : ''} onClick={() => setFiltre('tous')}>{t('tous')}</button>
        {Object.entries(categories).map(([cle, c]) => (
          <button key={cle} className={filtre === cle ? 'actif' : ''} onClick={() => setFiltre(cle)}>
            {loc(c).label}
          </button>
        ))}
      </div>
      {visibles.length === 0 ? (
        <p>{t('aucunResultat')}</p>
      ) : (
        <div className="grille">
          {visibles.map((l) => <CarteLieu key={l.id} lieu={l} />)}
        </div>
      )}
    </>
  );
}
