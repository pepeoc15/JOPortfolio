/** @typedef {{ id: string, label: string, description: string }} ThemeOption */

/** @type {ThemeOption[]} */
export const themes = [
  {
    id: 'profesional',
    label: 'Profesional',
    description: 'Claro, ordenado y corporativo',
  },
  {
    id: 'developer',
    label: 'Developer',
    description: 'Oscuro, monospace y terminal',
  },
  {
    id: 'editorial',
    label: 'Editorial',
    description: 'Revista, columnas y titulares',
  },
  {
    id: 'fotografico',
    label: 'Fotográfico',
    description: 'La imagen guía el relato',
  },
  {
    id: 'tipografico',
    label: 'Tipográfico',
    description: 'Mínimo color, máximo tipo',
  },
]

export const defaultThemeId = 'profesional'

export const themeStorageKey = 'joportfolio-theme'
