# JOPortfolio

Portfolio personal de Jose Osuna: Vue 3, Vite y PrimeVue.

## Requisitos

- Node.js 18+

## Desarrollo

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite (por defecto `http://localhost:5173`). En desarrollo aparece Vue DevTools (botón flotante) para inspeccionar componentes. No se incluye en el build de producción.

## Build

```bash
npm run build
npm run preview
```

## Estructura (v1)

- `AppHeader` — marca / nombre
- `AppHero` — producto TACTICA y fichas de cliente (`src/data/clients.js`)
- `AppFooter` — copyright y huecos para redes

Sin router ni Pinia en esta versión. Sin CSS propio: solo markup Vue y el tema de PrimeVue.
