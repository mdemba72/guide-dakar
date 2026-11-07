import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useLangue } from '../i18n.jsx';

// Champ de recherche de l'en-tête : envoie vers /lieux?q=… (la page Lieux filtre).
export default function Recherche() {
  const { t } = useLangue();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [params] = useSearchParams();
  const [valeur, setValeur] = useState(params.get('q') ?? '');

  // Garde le champ synchronisé avec l'URL (ex. bouton « Effacer »).
  useEffect(() => {
    setValeur(params.get('q') ?? '');
  }, [params]);

  const changer = (e) => {
    const v = e.target.value;
    setValeur(v);
    // Recherche en direct sur la page Lieux, sinon on attend la validation.
    if (pathname === '/lieux') navigate(v ? `/lieux?q=${encodeURIComponent(v)}` : '/lieux', { replace: true });
  };

  const valider = (e) => {
    e.preventDefault();
    navigate(valeur ? `/lieux?q=${encodeURIComponent(valeur)}` : '/lieux');
  };

  return (
    <form className="recherche" role="search" onSubmit={valider}>
      <input type="search" value={valeur} onChange={changer} placeholder={t('rechercher')} aria-label={t('rechercher')} />
    </form>
  );
}
