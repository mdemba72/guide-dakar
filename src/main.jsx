import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import './index.css';
import App from './App.jsx';
import { LangueProvider } from './i18n.jsx';
import { PlanningProvider } from './planning.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LangueProvider>
        <PlanningProvider>
          <App />
        </PlanningProvider>
      </LangueProvider>
    </BrowserRouter>
  </React.StrictMode>
);
