import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil.jsx';
import Lieux from './pages/Lieux.jsx';
import Lieu from './pages/Lieu.jsx';
import PageCarte from './pages/PageCarte.jsx';
import Itineraires from './pages/Itineraires.jsx';
import Itineraire from './pages/Itineraire.jsx';
import Credits from './pages/Credits.jsx';
import Planifier from './pages/Planifier.jsx';
import { usePlanning } from './planning.jsx';
import Recherche from './components/Recherche.jsx';
import { useLangue } from './i18n.jsx';

export default function App() {
  const { t, basculer } = useLangue();
  const { etapes } = usePlanning();
  return (
    <>
      <header className="entete">
        <NavLink to="/" className="logo">{t('titreSite')}</NavLink>
        <Recherche />
        <nav>
          <NavLink to="/lieux">{t('lieux')}</NavLink>
          <NavLink to="/carte">{t('carte')}</NavLink>
          <NavLink to="/itineraires">{t('itineraires')}</NavLink>
          <NavLink to="/planifier" className="nav-planifier" title={t('planifier')}>
            {t('planifier')}
            {etapes.length > 0 && <span className="nav-compteur">{etapes.length}</span>}
          </NavLink>
          <button className="langue" onClick={basculer} title={t('autreLangueTitre')}>{t('autreLangue')}</button>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/lieux" element={<Lieux />} />
          <Route path="/lieux/:id" element={<Lieu />} />
          <Route path="/carte" element={<PageCarte />} />
          <Route path="/itineraires" element={<Itineraires />} />
          <Route path="/itineraires/:id" element={<Itineraire />} />
          <Route path="/planifier" element={<Planifier />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<p>{t('pageIntrouvable')}</p>} />
        </Routes>
      </main>
      <footer className="pied">
        <p className="pied-logo">{t('titreSite')}</p>
        <p>{t('piedCarte')} · <Link to="/credits">{t('creditsLien')}</Link></p>
      </footer>
    </>
  );
}
