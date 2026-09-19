/** @typedef {{ id: string, label: string, description: string }} ThemeOption */

/** @type {ThemeOption[]} */
export const themes = [
  {
    id: 'profesional',
    label: 'Profesional',
    description: 'Claro, ordenado y corporativo',
  },
  {
    id: 'consultora',
    label: 'Consultora',
    description: 'Azul marino, conservador y denso',
  },
  {
    id: 'luminoso',
    label: 'Luminoso',
    description: 'Más aire, lectura amplia y serena',
  },
  {
    id: 'papel',
    label: 'Papel cálido',
    description: 'Crema y tonos papel, sobrio',
  },
  {
    id: 'compacto',
    label: 'Compacto',
    description: 'Alta densidad, más información por pantalla',
  },
]

export const defaultThemeId = 'profesional'

export const themeStorageKey = 'joportfolio-theme'
