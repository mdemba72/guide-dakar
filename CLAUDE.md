# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Tourist guide website for Dakar (Senegal): place pages, interactive map, photos, itineraries. The user writes in French; all UI text, identifiers in `src/`, and data are in French — keep it that way.

## Commands

- `npm install` — install dependencies
- `npm run dev` — dev server (Vite, http://localhost:5173)
- `npm run build` — production build into `dist/`
- `npm run preview` — serve the built `dist/`

No linter or test runner is configured yet.

## Architecture

Vite + React 18 + react-router-dom 6 (`BrowserRouter`, routes in `src/App.jsx`) + react-leaflet 4 / Leaflet with OpenStreetMap tiles (no API key).

Data-driven: everything is rendered from two plain JS modules, no backend.
- `src/data/lieux.js` — the single source of places (`id`, `categorie`, `coords` [lat, lng], `photo`, texts) plus the `categories` map (label + color). The category color is reused by badges, photo placeholders and map markers.
- `src/data/itineraires.js` — itineraries are ordered lists of place `id`s (`etapes`) resolved via `lieuParId`. Renaming a place `id` breaks itineraries that reference it.

`src/components/Carte.jsx` is the one map component used by all pages: pass `lieux`; `trace` numbers the markers and draws a polyline in order (itinerary view). Markers are `L.divIcon` styled by `.marqueur` in `index.css`, which avoids Leaflet's default-icon asset issue under Vite.

Bilingual FR/EN (`src/i18n.jsx`, `LangueProvider` + `useLangue()`): UI strings live in the `textes` dictionary (`t(key)`); data objects (places, categories, itineraries) carry their translation in an `en` sub-object, and `loc(obj)` merges it over the French fields for the current language. Any new place or itinerary needs an `en` block. Language choice persists in localStorage.

Search (`src/recherche.js`): accent/case-insensitive, all words must match, indexes both FR and EN fields. The header search box (`Recherche.jsx`) drives `/lieux?q=…`; the Lieux page reads `q` from the URL.

Deployment: static SPA. `netlify.toml`, `public/_redirects` and `vercel.json` rewrite all paths to `index.html` so deep links work with `BrowserRouter`.

Photos: `photo` is a filename in `public/photos/`. `Photo.jsx` falls back to a colored placeholder when the file is missing, so places can be added before their photos.

Place coordinates and practical info (opening days, durations) are approximate and unverified.
