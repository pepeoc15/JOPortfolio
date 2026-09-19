/**
 * Manifest de fotos personales. Sustituye el archivo en src/assets/photos/
 * manteniendo el mismo nombre de fichero.
 *
 * @typedef {{ file: string, alt: string, caption: string, placeholder?: boolean }} PhotoEntry
 */

/** @type {Record<string, PhotoEntry>} */
export const photoManifest = {
  portrait: {
    file: 'portrait.svg',
    alt: 'Jose Osuna',
    caption: 'Foto de perfil',
    placeholder: true,
  },
  'informance-epsar': {
    file: 'informance-epsar.svg',
    alt: 'Etapa prácticas y EPSAR',
    caption: 'Prácticas / EPSAR (2017–2018)',
    placeholder: true,
  },
  'informance-uv': {
    file: 'informance-uv.svg',
    alt: 'Universitat de València',
    caption: 'UV · trámites estudiantiles',
    placeholder: true,
  },
  'informance-recapa': {
    file: 'informance-recapa.svg',
    alt: 'RECAPA GVA',
    caption: 'RECAPA · registro de entidades',
    placeholder: true,
  },
  'informance-chguv': {
    file: 'informance-chguv.svg',
    alt: 'CHGUV',
    caption: 'CHGUV · hospital y TACTICA',
    placeholder: true,
  },
  'informance-ovice': {
    file: 'informance-ovice.svg',
    alt: 'OVICE Educación GVA',
    caption: 'OVICE · integración NEFIS',
    placeholder: true,
  },
}

/**
 * @param {string} key
 * @returns {string}
 */
export function photoUrl(key) {
  const entry = photoManifest[key]
  if (!entry) {
    return new URL('../assets/photos/placeholder.svg', import.meta.url).href
  }
  return new URL(`../assets/photos/${entry.file}`, import.meta.url).href
}

/**
 * @param {string} key
 * @returns {PhotoEntry | null}
 */
export function photoEntry(key) {
  return photoManifest[key] ?? null
}
