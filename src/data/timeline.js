import { education } from './education.js'
import { informanceCompany, otherJobs } from './jobs.js'
import { informanceStages } from './informance-stages.js'

/**
 * @typedef {'compact-education' | 'compact-jobs' | 'education' | 'informance-intro' | 'informance-stage' | 'job'} TimelineKind
 *
 * @typedef {{ id: string, kind: TimelineKind, period?: string, title?: string, subtitle?: string, text?: string, photoKey?: string, stage?: import('./informance-stages.js').InformanceStage, items?: unknown[], meta?: Record<string, string> }} TimelineItem
 */

/** @type {TimelineItem[]} */
export const timeline = [
  {
    id: 'block-edu-courses',
    kind: 'compact-education',
    period: 'Formación inicial',
    title: 'Cursos y primeros estudios',
    items: education.filter((e) => e.compact),
  },
  {
    id: 'block-jobs-early',
    kind: 'compact-jobs',
    period: 'Antes de Informance',
    title: 'Otros empleos',
    text: 'Fechas concretas pendientes de volcado; se mantienen en el inventario.',
    items: otherJobs.filter((j) => j.id !== 'job-datadec'),
  },
  {
    id: 'edu-dam',
    kind: 'education',
    period: education.find((e) => e.id === 'edu-dam')?.period ?? '',
    title: education.find((e) => e.id === 'edu-dam')?.title ?? '',
    subtitle: education.find((e) => e.id === 'edu-dam')?.center ?? '',
    text: education.find((e) => e.id === 'edu-dam')?.note ?? '',
    photoKey: 'portrait',
  },
  {
    id: 'informance-intro',
    kind: 'informance-intro',
    period: informanceCompany.period,
    title: `${informanceCompany.role} · ${informanceCompany.name}`,
    subtitle: informanceCompany.contracts,
    text: informanceCompany.productSummary,
    photoKey: 'portrait',
  },
  ...informanceStages.map((stage) => ({
    id: stage.id,
    kind: 'informance-stage',
    period: stage.period,
    title: stage.title,
    subtitle: stage.client,
    stage,
    photoKey: stage.photoKey,
  })),
  {
    id: 'edu-uoc',
    kind: 'education',
    period: 'Formación continua',
    title: education.find((e) => e.id === 'edu-uoc')?.title ?? '',
    subtitle: education.find((e) => e.id === 'edu-uoc')?.center ?? '',
    text: education.find((e) => e.id === 'edu-uoc')?.note ?? '',
    meta: {
      web: education.find((e) => e.id === 'edu-uoc')?.webUrl ?? '',
    },
  },
  {
    id: 'job-datadec',
    kind: 'job',
    period: 'Por documentar',
    title: otherJobs.find((j) => j.id === 'job-datadec')?.role ?? '',
    subtitle: otherJobs.find((j) => j.id === 'job-datadec')?.place ?? '',
    text: 'Detalle y fechas pendientes de volcado (mismo inventario que el resto del portfolio).',
  },
]
