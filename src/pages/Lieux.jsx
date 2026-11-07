import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { lieux, categories } from '../data/lieux.js';
import { rechercherLieux } from '../recherche.js';
import CarteLieu from '../components/CarteLieu.jsx';
import { useLangue } from '../i18n.jsx';

export default function Lieux() {
  const { t, loc } = useLangue();
  const [params] = useSearchParams();
  const q = params.get('q') ?? '';
  const [filtre, setFiltre] = useState('tous');

  const trouves = rechercherLieux(lieux, categories, q);
  const visibles = filtre === 'tous' ? trouves : trouves.filter((l) => l.categorie === filtre);

  return (
    <>
      <h1>{t('lieuxAVisiter')}</h1>
      {q && (
        <p className="resultats">
          {t('resultats', visibles.length, q)} · <Link to="/lieux">{t('effacer')}</Link>
        </p>
      )}
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
