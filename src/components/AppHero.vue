<script setup>
import { computed } from 'vue'

import { useTheme } from '@/composables/useTheme.js'
import { timeline } from '@/data/timeline.js'

import TimelineBlock from './TimelineBlock.vue'

const { themeId } = useTheme()

const themesWithTimelineRail = ['profesional', 'consultora', 'compacto']

const useTimelineRail = computed(() => themesWithTimelineRail.includes(themeId.value))
</script>

<template>
  <section class="app-hero" :class="[`app-hero--${themeId}`]" aria-labelledby="hero-title">
    <header class="app-hero__intro">
      <h1 id="hero-title" class="app-hero__title">Trayectoria profesional</h1>
      <p class="app-hero__lead">
        Biografía cronológica a partir del inventario de formación y experiencia. Informance en
        cuatro etapas (prácticas/EPSAR → UV → RECAPA → CHGUV+OVICE); el resto aparece de forma
        más compacta. Las fechas sin volcar no se inventan.
      </p>
    </header>

    <div
      class="app-hero__entries"
      :class="{ 'app-hero__timeline-line': useTimelineRail }"
    >
      <TimelineBlock v-for="item in timeline" :key="item.id" :item="item" />
    </div>
  </section>
</template>

<style scoped>
.app-hero__intro {
  margin-bottom: 2rem;
}

.app-hero__title {
  margin: 0 0 0.5rem;
  font-size: var(--jo-hero-title-size, clamp(1.5rem, 4vw, 2.25rem));
  font-weight: inherit;
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.app-hero__lead {
  margin: 0;
  max-width: var(--jo-text-max, 42rem);
  color: var(--jo-muted, var(--p-text-muted-color));
  line-height: 1.55;
}
</style>
