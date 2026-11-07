import { usePlanning } from '../planning.jsx';
import { useLangue } from '../i18n.jsx';

// Bouton « Ajouter à ma visite » / « Dans ma visite » (un second clic retire le lieu).
export default function BoutonPlanning({ id, compact = false }) {
  const { t } = useLangue();
  const { contient, ajouter, retirer } = usePlanning();
  const present = contient(id);
  const action = (e) => {
    e.preventDefault(); // le bouton peut se trouver dans une carte cliquable
    e.stopPropagation();
    present ? retirer(id) : ajouter(id);
  };
  return (
    <button className={`bouton-plan${present ? ' bouton-plan-actif' : ''}${compact ? ' bouton-plan-compact' : ''}`}
      onClick={action} aria-pressed={present}>
      {present ? t('dansVoyage') : compact ? t('ajouter') : t('ajouterVoyage')}
    </button>
  );
}
