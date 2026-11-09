import { Link } from 'react-router-dom';
import { lieux, regions } from '../data/lieux.js';
import { itineraires } from '../data/itineraires.js';
import CarteLieu from '../components/CarteLieu.jsx';
import { useLangue } from '../i18n.jsx';

export default function Accueil() {
  const { t, loc } = useLangue();
  return (
    <>
      <section className="hero" style={{ '--hero-photo': `url(${import.meta.env.BASE_URL}photos/hero-dakar.jpg)` }}>
        <h1>{t('heroTitre')}</h1>
        <p className="hero-texte">{t('heroTexte')}</p>
        <p className="hero-chiffres">{t('heroChiffres', lieux.length, itineraires.length)}</p>
        <div className="hero-actions">
          <Link className="bouton" to="/lieux">{t('voirLieux')}</Link>
          <Link className="bouton bouton-clair" to="/carte">{t('ouvrirCarte')}</Link>
          <Link className="bouton bouton-clair" to="/planifier">{t('planifier')}</Link>
        </div>
      </section>

      <h2 className="titre-section">{t('regions')}</h2>
      <div className="regions">
        {Object.entries(regions).map(([cle, brut]) => {
          const r = loc(brut);
          const n = lieux.filter((l) => l.region === cle).length;
          return (
            <Link key={cle} to={`/lieux?region=${cle}`} className="region"
              style={{ '--region-photo': `url(${import.meta.env.BASE_URL}photos/${r.photo})` }}>
              <strong>{r.label}</strong>
              <span>{t('nbLieux', n)}</span>
            </Link>
          );
        })}
      </div>

      <h2 className="titre-section">{t('incontournables')}</h2>
      <div className="grille">
        {lieux.slice(0, 6).map((l) => <CarteLieu key={l.id} lieu={l} />)}
      </div>

      <h2 className="titre-section">{t('itineraires')}</h2>
      <ul className="liste-itineraires">
        {itineraires.map(loc).map((it) => (
          <li key={it.id}>
            <Link to={`/itineraires/${it.id}`}><strong>{it.titre}</strong></Link> — {it.duree}. {it.resume}
          </li>
        ))}
      </ul>
    </>
  );
}
