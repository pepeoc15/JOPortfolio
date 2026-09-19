/**
 * @typedef {{ id: string, role: string, place: string, mapUrl?: string, compact?: boolean }} JobEntry
 */

/** @type {JobEntry[]} */
export const otherJobs = [
  {
    id: 'job-mareny',
    role: 'Monitor de natación de verano',
    place: 'Piscina de Mareny Blau',
    mapUrl: 'https://maps.app.goo.gl/k7KGn93vGfZCXHGBA',
    compact: true,
  },
  {
    id: 'job-ett',
    role: 'Trabajador temporal',
    place: 'ETT Atles Cargas SL',
    mapUrl: 'https://maps.app.goo.gl/mK84Th11zKq7s58E6',
    compact: true,
  },
  {
    id: 'job-romman',
    role: 'Camarero y recepcionista',
    place: 'The Romman Camp Inn, Inglaterra',
    mapUrl: 'https://maps.app.goo.gl/o8M3LpDC2CTEuGX98',
    compact: true,
  },
  {
    id: 'job-socorrista',
    role: 'Socorrista',
    place: 'Playa del Perelló',
    mapUrl: 'https://maps.app.goo.gl/mVzapYtujsDjdC3q9',
    compact: true,
  },
  {
    id: 'job-aquah',
    role: 'Monitor de natación',
    place: 'Centro deportivo Aquah-fit',
    mapUrl: 'https://maps.app.goo.gl/sxAW8NxdyrprtHQ68',
    compact: true,
  },
  {
    id: 'job-datadec',
    role: 'Desarrollador de Software',
    place: 'Datadec SA',
    mapUrl: 'https://maps.app.goo.gl/Ykh4e58xRgJBfpWi7',
    compact: true,
  },
]

export const informanceCompany = {
  name: 'Informance SL',
  role: 'Analista-Programador',
  period: 'Sep 2017 — ago 2026',
  mapUrl: 'https://maps.app.goo.gl/TKNTjQBZodTZqr7X6',
  contracts:
    'FP Dual a jornada parcial (sep 2017) → ampliación en contrato de prácticas → indefinido en jun 2018 al terminar el CFGS.',
  productSummary:
    'Producto principal TACTICA: procedimientos desde XML semilla (JSP, XSD, XSL/FOP, Java 8), Oficina_tactica, Gestión_tactica y WS_tactica.',
}
