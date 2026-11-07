import { NavLink, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil.jsx';
import Lieux from './pages/Lieux.jsx';
import Lieu from './pages/Lieu.jsx';
import PageCarte from './pages/PageCarte.jsx';
import Itineraires from './pages/Itineraires.jsx';
import Itineraire from './pages/Itineraire.jsx';
import Recherche from './components/Recherche.jsx';
import { useLangue } from './i18n.jsx';

export default function App() {
  const { t, basculer } = useLangue();
  return (
    <>
      <header className="entete">
        <NavLink to="/" className="logo">{t('titreSite')}</NavLink>
        <Recherche />
        <nav>
          <NavLink to="/lieux">{t('lieux')}</NavLink>
          <NavLink to="/carte">{t('carte')}</NavLink>
          <NavLink to="/itineraires">{t('itineraires')}</NavLink>
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
          <Route path="*" element={<p>{t('pageIntrouvable')}</p>} />
        </Routes>
      </main>
      <footer className="pied">{t('piedCarte')}</footer>
    </>
  );
}
