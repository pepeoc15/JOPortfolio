import { education } from './education.js'
import { informanceCompany, otherJobs } from './jobs.js'

/**
 * @typedef {{ id: string, name: string, employer: string, sector: string, role: string, period: string, summary: string, highlights: string[], stack?: string[], tramites?: string[], links?: { label: string, url: string }[], photoKey?: string, compact?: boolean, draft?: boolean, parallelNote?: string }} ClientCard
 */

export const profile = {
  title: 'Clientes y producto',
  lead:
    'Analista-programador en Informance (2017–2026) y desarrollador en Datadec. El núcleo público son las instalaciones de TACTICA: sede electrónica, migraciones e integración con sistemas del cliente. Las fechas sin volcar no se inventan.',
}

export const productIntro = {
  name: informanceCompany.name,
  role: informanceCompany.role,
  period: informanceCompany.period,
  title: 'TACTICA',
  photoKey: 'portrait',
  contracts: informanceCompany.contracts,
  paragraphs: [
    'Framework propio de Informance. Un procedimiento se definía con un XML semilla; al desplegarlo, la plataforma generaba JSP externa e interna, XSD de validación, XSL + Apache FOP para el PDF y un .class Java 8 con la lógica.',
    'Tres piezas de cada instalación: Oficina_tactica (frontoffice / sede electrónica), Gestion_tactica (backoffice, suele estar oculta) y WS_tactica (integración con BBDD, solicitudes y plataforma).',
    'Entré en FP Dual a jornada parcial (sep 2017), pasé a prácticas y a indefinido en jun 2018 al terminar el CFGS. Las primeras entregas fueron PDF con FOP y formularios Struts 1.x + JSP.',
  ],
}

const datadec = otherJobs.find((job) => job.id === 'job-datadec')

/** @type {ClientCard[]} */
export const clientCards = [
  {
    id: 'client-datadec',
    name: datadec?.place ?? 'Datadec SA',
    employer: 'Datadec SA',
    sector: 'Puesto actual',
    role: datadec?.role ?? 'Desarrollador de Software',
    period: 'Por documentar',
    summary:
      'Detalle, stack y fechas pendientes de volcado.',
    highlights: [],
    links: datadec?.mapUrl ? [{ label: 'Ubicación', url: datadec.mapUrl }] : [],
    draft: true,
  },
  {
    id: 'client-uv',
    name: 'Universitat de València',
    employer: informanceCompany.name,
    sector: 'Educación · sede electrónica estudiantil',
    role: 'Analista-programador con contacto directo con el cliente',
    period: 'Desde jun 2018 · ~2,5 años',
    summary:
      'Solicitud y gestión de trámites de estudiantes. Altas a demanda, incidencias y coordinación con la UV. Reediciones anuales de oposiciones PAS y PDI.',
    highlights: [
      'Diseño e implantación de los generadores GEN_PAS y GEN_PDI dentro de TACTICA',
      'Oficina_tactica pública; Gestión_tactica oculta al público',
    ],
    stack: ['TACTICA', 'Struts 1.x', 'JSP', 'Oficina_tactica', 'Gestión_tactica'],
    tramites: [
      'Preinscripción a máster y doctorado',
      'Entrega de TFG y TFM',
      'Depósito de tesis doctoral',
      'Expedición y pago de título de postgrado propio UV',
      'Solicitud de título universitario y SET',
      'Certificado académico oficial (grado y máster)',
      'Convocatorias PAS / PDI (volumen alto, generadores anuales)',
    ],
    links: [{ label: 'UV Entreu (Oficina_tactica)', url: 'https://webges.uv.es/uvEntreuWeb' }],
    photoKey: 'informance-uv',
  },
  {
    id: 'client-recapa',
    name: 'RECAPA',
    employer: informanceCompany.name,
    sector: 'Servicios sociales · GVA / DGTIC',
    role: 'Desarrollo; ~12 meses después, líder de equipo de desarrollo',
    period: '~5 años',
    summary:
      'Registro de entidades, centros y servicios sociales. Proyecto liderado por Sopra Steria (Informance subcontratada). TACTICA tramitaba; al consolidar, volcado a RECESSO. Migración desde REGCEN con convivencia temporal y automigración.',
    highlights: [
      'Análisis de BBDD REGCEN y migraciones automáticas',
      'Colaboración en el mapa de servicios sociales del ICV',
      'TACTICA fue sustituido por NOU-RECAPA, sin participación de Informance',
    ],
    stack: ['TACTICA', 'RECESSO', 'REGCEN', 'migraciones BBDD'],
    tramites: [
      'Inscripción de entidades',
      'Autorización de funcionamiento de centros',
      'Modificación sustancial de centros',
      'Visado previo de centros',
      'Autorización de servicios',
      'Comunicación de variación de datos',
      'Cambio de titularidad de centros y servicios',
      'Cierre de centros y cese de servicios',
      'Baja de titulares',
    ],
    links: [
      { label: 'Oficina RECAPA (ovara)', url: 'https://ovara.gva.es/oficina_tactica' },
      {
        label: 'Visor ICV centros inclusivos',
        url: 'https://visor.gva.es/visor/?capas=spaicv19_centros_inclusivos',
      },
      {
        label: 'NOU-RECAPA (sucesor)',
        url: 'https://serviciossociales.gva.es/es/web/infraestructuras-sociosanitarias/nou-recapa',
      },
    ],
    photoKey: 'informance-recapa',
  },
  {
    id: 'client-chguv',
    name: 'CHGUV',
    employer: informanceCompany.name,
    sector: 'Sanidad · Consorcio Hospital General Universitario de Valencia',
    role: 'Responsable de TACTICA in situ (3 días/semana, casi total autonomía)',
    period: 'May 2025 — ago 2026',
    parallelNote: 'En paralelo con OVICE (jueves y viernes).',
    summary:
      'El hospital gestionaba parte de su actividad con TACTICA. Presencia física por la red interna. Migración de BBDD, subida de versión de TACTICA, certificado TLS, GlassFish 4 y diagnóstico JVM.',
    highlights: [
      'Migración SQL Server → Oracle Cloud (pruebas, RMAN PRE→PRO, configuración como sysdba)',
      'Actualización de versión de TACTICA tras años sin subir',
      'SOLMED (medicamentos extraordinarios) iniciado y entregado; no visto en PRO',
    ],
    stack: ['TACTICA', 'SQL Server', 'Oracle Cloud', 'RMAN', 'GlassFish 4', 'Eclipse MAT', 'TLS'],
    tramites: [
      'Terapias respiratorias domiciliarias (integración VitalAire)',
      'Interconsultas entre servicios',
      'Petición de permisos (RRHH y firma electrónica)',
      'Procedimiento genérico de firma de documentos',
      'Nóminas e IRPF (documentos vía WS)',
      'SOLMED — solicitud de medicamentos extraordinarios',
    ],
    links: [{ label: 'Mapa CHGUV', url: 'https://maps.app.goo.gl/qdHEuE4SnGQLfMf4A' }],
    photoKey: 'informance-chguv',
  },
  {
    id: 'client-ovice',
    name: 'OVICE',
    employer: informanceCompany.name,
    sector: 'Educación · Conselleria de Educación (GVA)',
    role: 'Integración TACTICA ↔ contabilidad (jueves y viernes)',
    period: 'May 2025 — ago 2026',
    parallelNote: 'En paralelo con CHGUV (3 días/semana).',
    summary:
      'Trámite de integración con NEFIS: las subvenciones de otros procedimientos TACTICA había que comunicarlas a la contabilidad del ministerio y de la GVA. El responsable de cada trámite cargaba un Excel; al registrarse, este procedimiento las contabilizaba.',
    highlights: [
      'Rediseño con plugins TACTICA (JARs externos) tras un bloqueo PL/SQL de acceso Oracle',
      'Clientes WS de EDU-WS (backend GVA) dentro del plugin',
      'Amplió el uso de Postman y SoapUI para TACTICA ↔ EDU-WS',
    ],
    stack: ['TACTICA', 'plugins JAR', 'NEFIS', 'EDU-WS', 'PL/SQL', 'Postman', 'SoapUI'],
    tramites: ['Contabilización de subvenciones e integración NEFIS / EDU-WS'],
    photoKey: 'informance-ovice',
  },
  {
    id: 'client-epsar',
    name: 'EPSAR',
    employer: informanceCompany.name,
    sector: 'Agua · tratamiento de residuales',
    role: 'Primeras entregas (FP Dual / prácticas)',
    period: 'Sep 2017 — jun 2018',
    summary:
      'Aplicación de tratamiento de aguas residuales (JSP, jQuery, jQuery UI) y mantenimientos Struts 1.x en servidor, al margen del núcleo de trámites TACTICA.',
    highlights: ['Proyecto JSP aparte del ciclo de procedimientos TACTICA'],
    stack: ['JSP', 'jQuery', 'jQuery UI', 'Struts 1.x'],
    photoKey: 'informance-epsar',
    compact: true,
  },
]

export const anchorEducation = education.filter((entry) => !entry.compact)

export const otherCourses = education.filter((entry) => entry.compact)

export const earlierJobs = otherJobs.filter((job) => job.id !== 'job-datadec')
