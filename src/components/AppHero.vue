<script setup>
import Timeline from 'primevue/timeline'

import { timeline } from '@/data/timeline.js'
</script>

<template>
  <section class="app-hero" aria-labelledby="hero-title">
    <header class="app-hero__intro">
      <h1 id="hero-title" class="app-hero__title">Trayectoria profesional</h1>
      <p class="app-hero__lead">
        Recorrido cronológico de roles y experiencias. Los datos son placeholders hasta
        completar la biografía.
      </p>
    </header>

    <Timeline :value="timeline" align="left" class="app-hero__timeline">
      <template #marker="slotProps">
        <span
          class="app-hero__marker"
          :aria-label="`Entrada: ${slotProps.item.period}`"
        />
      </template>
      <template #content="slotProps">
        <article class="app-hero__entry">
          <time class="app-hero__period" :datetime="slotProps.item.period">
            {{ slotProps.item.period }}
          </time>
          <h2 class="app-hero__role">
            {{ slotProps.item.role }}
            <span class="app-hero__company">· {{ slotProps.item.company }}</span>
          </h2>
          <p class="app-hero__text">{{ slotProps.item.text }}</p>
        </article>
      </template>
    </Timeline>
  </section>
</template>

<style scoped>
.app-hero__intro {
  margin-bottom: 2rem;
}

.app-hero__title {
  margin: 0 0 0.5rem;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.03em;
}

.app-hero__lead {
  margin: 0;
  max-width: 42rem;
  color: var(--p-text-muted-color);
}

.app-hero__timeline {
  margin-top: 0.5rem;
}

.app-hero__marker {
  display: block;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: var(--p-primary-color);
  box-shadow: 0 0 0 3px var(--p-primary-100);
}

.app-hero__entry {
  padding-bottom: 0.5rem;
}

.app-hero__period {
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--p-primary-color);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.app-hero__role {
  margin: 0.35rem 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
}

.app-hero__company {
  font-weight: 500;
  color: var(--p-text-muted-color);
}

.app-hero__text {
  margin: 0;
  color: var(--p-text-color);
}
</style>
