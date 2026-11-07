import { useState } from 'react';
import { Link } from 'react-router-dom';
import { lieux, lieuParId, categories } from '../data/lieux.js';
import { itineraires } from '../data/itineraires.js';
import Carte from '../components/Carte.jsx';
import Photo from '../components/Photo.jsx';
import BoutonPlanning from '../components/BoutonPlanning.jsx';
import { usePlanning } from '../planning.jsx';
import { useLangue } from '../i18n.jsx';

export default function Planifier() {
  const { t, loc } = useLangue();
  const p = usePlanning();
  const [filtre, setFiltre] = useState('tous');

  const ordonnes = [];
  for (let j = 1; j <= p.jours; j++) ordonnes.push(...p.etapes.filter((e) => e.jour === j));
  const lieuxCarte = ordonnes.map((e) => lieuParId(e.id));
  const aAjouter = lieux.filter((l) => !p.contient(l.id) && (filtre === 'tous' || l.categorie === filtre));

  return (
    <>
      <h1>{t('planTitre')}</h1>
      <p className="plan-intro">{t('planIntro')}</p>

      {p.etapes.length === 0 ? (
        <div className="plan-vide">
          <p>{t('planVide')}</p>
          <p><strong>{t('partirItineraire')} :</strong></p>
          <div className="filtres">
            {itineraires.map(loc).map((it) => (
              <button key={it.id} onClick={() => p.ajouterPlusieurs(it.etapes)}>{it.titre}</button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="plan-barre">
            <label>
              {t('nbJours')}{' '}
              <select value={p.jours} onChange={(e) => p.changerJours(Number(e.target.value))}>
                {[1, 2, 3, 4, 5, 6, 7].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </label>
            <span className="plan-compte">{t('lieuxPrevus', p.etapes.length)}</span>
            <span className="plan-actions">
              <button className="bouton-plan" onClick={() => window.print()}>{t('imprimer')}</button>
              <button className="bouton-plan bouton-plan-danger" onClick={p.vider}>{t('vider')}</button>
            </span>
          </div>

          <div className="plan-grille">
            <div>
              {Array.from({ length: p.jours }, (_, k) => k + 1).map((jour) => {
                const duJour = p.etapes.filter((e) => e.jour === jour);
                return (
                  <section key={jour} className="plan-jour">
                    <h2>{t('jour', jour)}</h2>
                    {duJour.length === 0 && <p className="plan-jour-vide">{t('jourVide')}</p>}
                    <ol>
                      {duJour.map((e) => {
                        const l = loc(lieuParId(e.id));
                        const numero = ordonnes.findIndex((o) => o.id === e.id) + 1;
                        return (
                          <li key={e.id} className="plan-etape">
                            <span className="plan-numero" style={{ background: categories[l.categorie].couleur }}>{numero}</span>
                            <div className="plan-vignette"><Photo lieu={lieuParId(e.id)} /></div>
                            <div className="plan-texte">
                              <Link to={`/lieux/${l.id}`}><strong>{l.nom}</strong></Link>
                              <small>{l.quartier} · {l.infos.duree}</small>
                            </div>
                            <div className="plan-controles">
                              {p.jours > 1 && (
                                <select aria-label={t('nbJours')} value={e.jour} onChange={(ev) => p.changerJour(e.id, Number(ev.target.value))}>
                                  {Array.from({ length: p.jours }, (_, k) => (
                                    <option key={k} value={k + 1}>{t('jour', k + 1)}</option>
                                  ))}
                                </select>
                              )}
                              <button title={t('monter')} aria-label={t('monter')} onClick={() => p.deplacer(e.id, -1)}>↑</button>
                              <button title={t('descendre')} aria-label={t('descendre')} onClick={() => p.deplacer(e.id, 1)}>↓</button>
                              <button title={t('retirer')} aria-label={t('retirer')} onClick={() => p.retirer(e.id)}>✕</button>
                            </div>
                          </li>
                        );
                      })}
                    </ol>
                  </section>
                );
              })}
            </div>
            <div className="plan-carte">
              <Carte key={ordonnes.map((e) => e.id).join(',')} lieux={lieuxCarte} trace hauteur={460} />
            </div>
          </div>
        </>
      )}

      <h2 className="titre-section non-imprime">{t('ajouterLieux')}</h2>
      <div className="filtres non-imprime">
        <button className={filtre === 'tous' ? 'actif' : ''} onClick={() => setFiltre('tous')}>{t('tous')}</button>
        {Object.entries(categories).map(([cle, c]) => (
          <button key={cle} className={filtre === cle ? 'actif' : ''} onClick={() => setFiltre(cle)}>{loc(c).label}</button>
        ))}
      </div>
      <ul className="plan-ajout non-imprime">
        {aAjouter.map(loc).map((l) => (
          <li key={l.id}>
            <span className="plan-pastille" style={{ background: categories[l.categorie].couleur }} />
            <Link to={`/lieux/${l.id}`}>{l.nom}</Link>
            <BoutonPlanning id={l.id} compact />
          </li>
        ))}
      </ul>
    </>
  );
}
