/**
 * @typedef {{ id: string, title: string, period: string, client: string, role: string, summary: string, highlights: string[], tramites?: string[], links?: { label: string, url: string }[], photoKey: string }} InformanceStage
 */

/** @type {InformanceStage[]} */
export const informanceStages = [
  {
    id: 'inf-1',
    title: 'Prácticas / Dual + EPSAR',
    period: 'Sep 2017 — jun 2018',
    client: 'Informance SL · EPSAR',
    role: 'FP Dual y primeras entregas en TACTICA',
    summary:
      'Generación de PDF con Apache FOP; formularios Struts 1.x y JSP. Aplicación de tratamiento de aguas residuales para la EPSAR (JSP, jQuery, jQuery UI) y mantenimientos Struts 1.x en servidor.',
    highlights: [
      'Primer contacto con el ciclo completo de un procedimiento TACTICA',
      'EPSAR como proyecto JSP aparte del núcleo de trámites',
    ],
    photoKey: 'informance-epsar',
  },
  {
    id: 'inf-2',
    title: 'Universitat de València',
    period: 'Desde jun 2018 · ~2,5 años',
    client: 'UV · sede electrónica estudiantil',
    role: 'Analista-programador con contacto directo con el cliente',
    summary:
      'Solicitud y gestión de trámites de estudiantes. Comunicación con la UV para altas a demanda, incidencias y coordinación. Reediciones anuales de oposiciones PAS y PDI.',
    highlights: [
      'Diseño e implantación de generadores GEN_PAS y GEN_PDI dentro de TACTICA',
      'Oficina_tactica pública; Gestión_tactica oculta al público',
    ],
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
    id: 'inf-3',
    title: 'RECAPA',
    period: '~5 años · GVA / DGTIC',
    client: 'Registro de entidades, centros y servicios sociales',
    role: 'Desarrollo; ~12 meses después, líder de equipo de desarrollo',
    summary:
      'Proyecto con Sopra Steria (Informance subcontratada). TACTICA + RECESSO: tramitación y volcado al almacén de expedientes. Migración desde REGCEN con convivencia temporal y automigración.',
    highlights: [
      'Análisis de BBDD REGCEN y migraciones automáticas',
      'Colaboración en el mapa de servicios sociales del ICV',
      'El proyecto TACTICA fue sustituido por NOU-RECAPA (sin participación de Informance)',
    ],
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
    id: 'inf-4',
    title: 'CHGUV + OVICE',
    period: 'May 2025 — ago 2026',
    client: 'Consorcio Hospital General Universitario de Valencia · Conselleria de Educación (GVA)',
    role: 'Responsable de TACTICA in situ (CHGUV, 3 días/semana) · integración OVICE (jueves y viernes)',
    summary:
      'Dos clientes en paralelo. En el hospital: migración SQL Server → Oracle Cloud (RMAN PRE→PRO), actualización de TACTICA tras años sin subir versión, TLS, GlassFish 4 y diagnóstico JVM (Eclipse MAT). En Educación: trámite de integración con NEFIS vía plugins JAR y WS EDU-WS.',
    highlights: [
      'Migración de BBDD y configuración Oracle Cloud como sysdba',
      'SOLMED (medicamentos extraordinarios) iniciado y entregado; no visto en PRO',
      'Rediseño del trámite NEFIS con plugins TACTICA tras bloqueo PL/SQL',
    ],
    tramites: [
      'CHGUV: terapias respiratorias domiciliarias (VitalAire), interconsultas, permisos RRHH, firma de documentos, nóminas, IRPF, SOLMED',
      'OVICE: contabilización de subvenciones e integración NEFIS / EDU-WS',
    ],
    links: [{ label: 'Mapa CHGUV', url: 'https://maps.app.goo.gl/qdHEuE4SnGQLfMf4A' }],
    photoKey: 'informance-chguv',
  },
]
