<script setup>
import Card from 'primevue/card'

import {
  anchorEducation,
  clientCards,
  earlierJobs,
  otherCourses,
  productIntro,
  profile,
} from '@/data/clients.js'

import ClientCardsViewer from './ClientCardsViewer.vue'
import CompactBlock from './CompactBlock.vue'
import PhotoSlot from './PhotoSlot.vue'

const educationItems = [
  ...anchorEducation.map((entry) => ({
    id: entry.id,
    label: entry.title,
    detail: entry.center,
    href: entry.webUrl,
    hrefLabel: entry.webUrl,
    note: [entry.period, entry.note].filter(Boolean).join(' · '),
  })),
  ...otherCourses.map((entry) => ({
    id: entry.id,
    label: entry.title,
    detail: entry.center,
    note: entry.note,
  })),
]

const earlierJobItems = earlierJobs.map((job) => ({
  id: job.id,
  label: job.role,
  detail: job.place,
}))
</script>

<template>
  <div class="app-hero">
    <header class="app-hero__intro">
      <h1 id="hero-title" class="app-hero__title">{{ profile.title }}</h1>
      <p class="app-hero__lead">{{ profile.lead }}</p>
    </header>

    <Card class="product-intro">
      <template #title>
        <span id="product-title">{{ productIntro.title }}</span>
      </template>
      <template #subtitle>{{ productIntro.role }} · {{ productIntro.name }}</template>
      <template #content>
        <PhotoSlot
          :photo-key="productIntro.photoKey"
          variant="thumb"
          class="product-intro__photo"
        />
        <p class="product-intro__period">{{ productIntro.period }}</p>
        <p class="product-intro__contracts">{{ productIntro.contracts }}</p>
        <p v-for="(paragraph, idx) in productIntro.paragraphs" :key="idx" class="product-intro__text">
          {{ paragraph }}
        </p>
      </template>
    </Card>

    <section class="app-hero__clients" aria-labelledby="clients-title">
      <h2 id="clients-title" class="app-hero__section-title">Fichas de cliente</h2>
      <p class="app-hero__section-lead">
        Cada ficha es un cliente. Datadec es el puesto actual (volcado pendiente). CHGUV y OVICE
        coincidieron en el calendario; no es un relevo.
      </p>
      <ClientCardsViewer :cards="clientCards" />
    </section>

    <CompactBlock
      title="Formación"
      text="Ancla técnica: DAM y el grado en Ciencia de Datos. El resto queda en una lista; en público se puede ocultar."
      :items="educationItems"
    />

    <CompactBlock
      title="Otros empleos"
      text="Anteriores a Informance. Fechas concretas pendientes; se mantienen en el inventario."
      :items="earlierJobItems"
    />
  </div>
</template>
