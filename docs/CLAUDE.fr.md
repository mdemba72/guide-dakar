# CLAUDE.md — Guide touristique du Sénégal : fiche projet pour l'assistant IA

## Qu'est-ce qu'un fichier CLAUDE.md ?

CLAUDE.md est un fichier texte placé à la racine d'un projet. Claude Code (l'assistant de programmation d'Anthropic) le lit automatiquement au début de chaque session. Il lui donne le contexte qu'il ne peut pas deviner en lisant le code : les commandes à lancer, l'architecture, les conventions, les règles à respecter et les pièges connus. C'est en quelque sorte le « mode d'emploi » du projet, destiné à l'IA comme aux développeurs. Il est versionné avec le code et doit rester court et à jour.

Le fichier original du projet compte **38 lignes** (en anglais). Ce document en est la traduction française, enrichie et organisée par thème.

## 1. Identité du projet

- **Nom :** Guide touristique du Sénégal (en anglais : Senegal Travel Guide)
- **Objet :** site de guide touristique centré sur Dakar et ses environs (Petite-Côte, îles, réserves) : fiches de lieux, carte interactive, photos, itinéraires et planificateur de visite.
- **Propriétaire :** mdemba72 (GitHub)
- **Dépôt :** https://github.com/mdemba72/guide-dakar
- **Site public :** https://mdemba72.github.io/guide-dakar/

## 2. Contexte métier

- Public visé : touristes francophones et anglophones préparant ou vivant un séjour au Sénégal.
- Contenu actuel : 31 lieux en 7 catégories (monument, nature, culture, marché, plage & îles, restaurant, hôtel), 4 itinéraires, 33 photos.
- Fonctions : recherche, carte, itinéraires commentés, page « Planifier ma visite » (programme sur 1 à 7 jours, carte avec tracé, impression), bascule FR/EN.
- Aucun compte utilisateur, aucun serveur : le programme du visiteur est gardé dans son navigateur.

## 3. Stack technique

- **Vite 5** (outil de build et serveur de développement)
- **React 18** + **react-router-dom 6** (`BrowserRouter`, routes dans `src/App.jsx`)
- **Leaflet 1.9** + **react-leaflet 4**, tuiles OpenStreetMap (aucune clé d'API)
- Pas de backend, pas de base de données : site statique (SPA)
- Hébergement : **GitHub Pages**, déploiement par GitHub Actions

## 4. Commandes

- `npm install` — installer les dépendances
- `npm run dev` — serveur de développement (http://localhost:5173)
- `npm run build` — build de production dans `dist/`
- `npm run preview` — servir le dossier `dist/` construit
- `npm run build:github` — build pour GitHub Pages (base `/guide-dakar/`)

Aucun linter ni outil de test n'est encore configuré.

## 5. Contexte technique (architecture)

Tout est généré à partir de deux modules de données en JavaScript, sans backend :

- `src/data/lieux.js` — source unique des lieux (`id`, `categorie`, `coords` [lat, lng], `photo`, textes) et table `categories` (libellé + couleur). La couleur de catégorie sert aux badges, aux vignettes de remplacement et aux marqueurs de la carte.
- `src/data/itineraires.js` — chaque itinéraire est une liste ordonnée d'`id` de lieux (`etapes`), résolus par `lieuParId`.
- `src/components/Carte.jsx` — composant de carte unique, utilisé par toutes les pages : on lui passe `lieux` ; l'option `trace` numérote les marqueurs et dessine le tracé dans l'ordre. Les marqueurs sont des `L.divIcon` stylés par `.marqueur` dans `index.css`, ce qui évite le problème d'icônes par défaut de Leaflet avec Vite.
- `src/i18n.jsx` — bilinguisme FR/EN (`LangueProvider`, `useLangue()`). Les textes d'interface sont dans le dictionnaire `textes` (`t(clé)`). Les données portent leur traduction dans un sous-objet `en`, fusionné par `loc(obj)` selon la langue. Le choix de langue est mémorisé dans le localStorage.
- `src/recherche.js` — recherche insensible aux accents et à la casse ; tous les mots doivent correspondre ; indexe les champs FR et EN. La barre de recherche (`Recherche.jsx`) pilote `/lieux?q=…`.
- `src/planning.jsx` — programme de visite (`PlanningProvider`, `usePlanning()`), sauvegardé dans le localStorage.
- Photos : `photo` est un nom de fichier dans `public/photos/`. `Photo.jsx` affiche une vignette colorée si le fichier manque.
- Déploiement : un push sur `main` déclenche `.github/workflows/pages.yml`. Le basename du routeur et les URL des photos utilisent `import.meta.env.BASE_URL`. `netlify.toml`, `public/_redirects` et `vercel.json` redirigent toutes les URL vers `index.html` pour que les liens profonds fonctionnent.

## 6. Conventions

- **Langue :** l'utilisateur écrit en français. Les textes d'interface, les identifiants dans `src/` et les données sont en français. À conserver.
- Nommage en français : `lieux`, `etapes`, `categorie`, `Carte`, `Planifier`, etc.
- Composants React dans `src/components/`, pages dans `src/pages/`, données dans `src/data/`.
- Les messages de commit sont rédigés en français.

## 7. Règles

- Tout nouveau lieu ou itinéraire doit avoir un bloc `en` (traduction anglaise).
- Toute nouvelle photo doit avoir une entrée de crédit dans `src/data/photos.js` (`creditsPhotos`, clé = nom du fichier). Les crédits s'affichent sous la grande photo de la fiche et sur la page `/credits`.
- `illustration: true` signale une photo d'ambiance qui ne montre pas l'établissement lui-même (certains restaurants et hôtels).
- Les photos proviennent de Wikimedia Commons, sous licences libres.
- Sous Git Bash, préfixer par `MSYS_NO_PATHCONV=1` les commandes qui passent `--base=/...`.

## 8. Interdits et points de vigilance

- **Ne pas renommer l'`id` d'un lieu** sans mettre à jour les itinéraires qui y font référence (sinon ils cassent).
- Ne pas ajouter de photo sans licence libre ni sans crédit.
- Ne pas introduire de clé d'API ni de service payant pour la carte (OpenStreetMap suffit).
- Ne pas passer l'interface ni le code en anglais.
- Ne pas présenter comme vérifiées les coordonnées GPS et les infos pratiques (jours d'ouverture, durées) : elles sont approximatives et non vérifiées.
- Ne pas pousser sur `main` sans le vouloir : chaque push met le site en ligne.

## 9. Design

- Couleurs : fond sable `#fdf8f1`, texte `#1f2937`, accent orange `#c2410c`, gris `#6b7280` ; dégradé orange vers bleu (`#c2410c` → `#0369a1`) pour le bandeau d'accueil et le logo.
- Couleurs de catégories : monument `#c2410c`, nature `#15803d`, culture `#7c3aed`, marché `#b45309`, plage & îles `#0369a1`, restaurant `#be123c`, hôtel `#334155`.
- Typographie : Poppins (titres et logo, Google Fonts), police système pour le texte.
- En-tête collant semi-transparent, boutons arrondis, cartes à coins arrondis, largeur maximale de 1100 px.
- Mise en page adaptée au mobile ; version imprimable de la page « Planifier ».

## 10. Instructions pour l'assistant

- Répondre en français.
- Lire les données avant de modifier une page : tout le site en dépend.
- Après une modification, vérifier avec `npm run build` puis dans le navigateur (`npm run dev`).
- Commiter et pousser uniquement à la demande de l'utilisateur.

## Conclusion

Pour ce projet, CLAUDE.md est la mémoire de référence : en 38 lignes, il permet à l'assistant de reprendre le travail à chaque session sans tout redécouvrir, de respecter le choix du français, le modèle « données en JS + rendu React » et le déploiement automatique sur GitHub Pages. Le guide est aujourd'hui en ligne, bilingue, avec 31 lieux, 4 itinéraires et un planificateur de visite. Les prochaines étapes naturelles sont de vérifier les coordonnées et les infos pratiques, d'étendre le contenu au reste du Sénégal (le titre a déjà été élargi) et de tenir ce fichier à jour à chaque évolution importante.
