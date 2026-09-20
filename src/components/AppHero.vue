<script setup>
import {
  anchorEducation,
  clientCards,
  earlierJobs,
  otherCourses,
  productIntro,
  profile,
} from '@/data/clients.js'

import ClientCard from './ClientCard.vue'
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

    <section class="product-intro" aria-labelledby="product-title">
      <PhotoSlot
        :photo-key="productIntro.photoKey"
        variant="thumb"
        class="product-intro__photo"
      />
      <div>
        <p class="product-intro__meta">{{ productIntro.role }} · {{ productIntro.name }}</p>
        <h2 id="product-title" class="product-intro__title">{{ productIntro.title }}</h2>
        <p class="product-intro__period">{{ productIntro.period }}</p>
        <p class="product-intro__contracts">{{ productIntro.contracts }}</p>
        <p v-for="(paragraph, idx) in productIntro.paragraphs" :key="idx" class="product-intro__text">
          {{ paragraph }}
        </p>
      </div>
    </section>

    <section class="app-hero__clients" aria-labelledby="clients-title">
      <h2 id="clients-title" class="app-hero__section-title">Fichas de cliente</h2>
      <p class="app-hero__section-lead">
        Cada ficha es un cliente. Datadec es el puesto actual (volcado pendiente). CHGUV y OVICE
        coincidieron en el calendario; no es un relevo.
      </p>
      <div class="app-hero__cards">
        <ClientCard v-for="card in clientCards" :key="card.id" :card="card" />
      </div>
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

<style scoped>
.app-hero {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.app-hero__intro {
  margin: 0;
}

.app-hero__title {
  margin: 0 0 0.5rem;
  font-size: var(--jo-hero-title-size, clamp(1.5rem, 4vw, 2.25rem));
  font-weight: inherit;
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.app-hero__lead,
.app-hero__section-lead {
  margin: 0;
  max-width: var(--jo-text-max, 42rem);
  color: var(--jo-muted);
  line-height: 1.55;
}

.app-hero__section-title {
  margin: 0 0 0.4rem;
  font-size: 1.15rem;
  font-weight: 600;
}

.app-hero__section-lead {
  margin-bottom: 1rem;
  font-size: 0.92rem;
}

.product-intro {
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(7rem, 9rem) 1fr;
  align-items: start;
}

.product-intro__photo :deep(.photo-slot--thumb .photo-slot__frame) {
  max-width: 100%;
}

@media (max-width: 520px) {
  .product-intro {
    grid-template-columns: 1fr;
  }
}

.product-intro__meta,
.product-intro__period {
  margin: 0 0 0.35rem;
  font-size: var(--jo-period-size, 0.75rem);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--jo-accent);
}

.product-intro__period {
  color: var(--jo-muted);
}

.product-intro__title {
  margin: 0 0 0.35rem;
  font-size: var(--jo-title-size, 1.25rem);
  font-weight: var(--jo-title-weight, 600);
}

.product-intro__contracts,
.product-intro__text {
  margin: 0 0 0.65rem;
  max-width: var(--jo-text-max, 42rem);
}

.product-intro__contracts {
  font-size: 0.9rem;
  color: var(--jo-muted);
}

.app-hero__cards {
  display: grid;
  gap: 1.15rem;
  grid-template-columns: 1fr;
}

@media (min-width: 800px) {
  .app-hero__cards {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
