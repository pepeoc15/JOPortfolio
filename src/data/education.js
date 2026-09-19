/**
 * @typedef {{ id: string, title: string, center: string, period?: string, note?: string, mapUrl?: string, webUrl?: string, compact?: boolean }} EducationEntry
 */

/** @type {EducationEntry[]} */
export const education = [
  {
    id: 'edu-lab',
    title: 'Técnico Superior en Laboratorio de Análisis y de Control de Calidad (primer curso, inacabado)',
    center: 'CIPFP Vicente Blasco Ibáñez',
    mapUrl: 'https://maps.app.goo.gl/QarAf7X6FvFTVwMn8',
    note: 'Solo primer curso; no finalizado.',
    compact: true,
  },
  {
    id: 'edu-socorrismo',
    title: 'Curso de Socorrismo y Primeros Auxilios',
    center: 'Centro de Formación Profesional Rodrigo Giorgeta',
    compact: true,
  },
  {
    id: 'edu-monitor',
    title: 'Curso de Monitor Federativo de Natación',
    center: 'Complex Esportiu Cultural Petxina',
    mapUrl: 'https://maps.app.goo.gl/jVBbQ3tDC9DM45gU6',
    compact: true,
  },
  {
    id: 'edu-dam',
    title: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
    center: 'IES Abastos',
    period: 'Hasta jun 2018',
    mapUrl: 'https://maps.app.goo.gl/XUJ1QCGVQ196x7Er7',
    note: 'Formación en paralelo al inicio en Informance (FP Dual).',
  },
  {
    id: 'edu-uoc',
    title: 'Grado en Ciencia de Datos',
    center: 'UOC',
    webUrl: 'https://www.uoc.edu/',
    note: 'Estado académico por confirmar (en curso / finalizado).',
  },
]
