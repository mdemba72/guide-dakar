import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import { categories } from '../data/lieux.js';
import { useLangue } from '../i18n.jsx';

const CENTRE_DAKAR = [14.7167, -17.4677];

// Marqueur coloré selon la catégorie (évite le bug des icônes Leaflet avec Vite).
function icone(categorie, numero) {
  const couleur = categories[categorie]?.couleur ?? '#333';
  return L.divIcon({
    className: '',
    html: `<span class="marqueur" style="background:${couleur}">${numero ?? ''}</span>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

// lieux : liste de lieux à afficher. trace : true pour relier les lieux dans l'ordre (itinéraire).
export default function Carte({ lieux, trace = false, hauteur = 420 }) {
  const { t, loc } = useLangue();
  const bounds = lieux.length > 1 ? L.latLngBounds(lieux.map((l) => l.coords)).pad(0.2) : undefined;

  return (
    <MapContainer
      center={lieux.length === 1 ? lieux[0].coords : CENTRE_DAKAR}
      zoom={lieux.length === 1 ? 15 : 12}
      bounds={bounds}
      style={{ height: hauteur }}
      className="carte"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {lieux.map((brut, i) => {
        const l = loc(brut);
        return (
          <Marker key={l.id} position={l.coords} icon={icone(l.categorie, trace ? i + 1 : null)}>
            <Popup>
              <strong>{l.nom}</strong>
              <br />
              {l.resume}
              <br />
              <Link to={`/lieux/${l.id}`}>{t('voirFiche')}</Link>
            </Popup>
          </Marker>
        );
      })}
      {trace && <Polyline positions={lieux.map((l) => l.coords)} pathOptions={{ color: '#c2410c', dashArray: '6 8' }} />}
    </MapContainer>
  );
}
