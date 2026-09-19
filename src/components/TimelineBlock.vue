<script setup>
import Accordion from 'primevue/accordion'
import AccordionContent from 'primevue/accordioncontent'
import AccordionHeader from 'primevue/accordionheader'
import AccordionPanel from 'primevue/accordionpanel'

import PhotoSlot from './PhotoSlot.vue'

defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="timeline-block" :data-kind="item.kind">
    <header v-if="item.period" class="timeline-block__period">
      <time>{{ item.period }}</time>
    </header>

    <div
      v-if="item.kind === 'compact-education' || item.kind === 'compact-jobs'"
      class="timeline-block__compact"
    >
      <h2 class="timeline-block__title">{{ item.title }}</h2>
      <p v-if="item.text" class="timeline-block__text">{{ item.text }}</p>
      <ul class="timeline-block__list">
        <li v-for="row in item.items" :key="row.id">
          <strong>{{ row.title || row.role }}</strong>
          <span> — {{ row.center || row.place }}</span>
        </li>
      </ul>
    </div>

    <div v-else-if="item.kind === 'informance-intro'" class="timeline-block__informance-intro">
      <h2 class="timeline-block__title">{{ item.title }}</h2>
      <p class="timeline-block__subtitle">{{ item.subtitle }}</p>
      <p class="timeline-block__text">{{ item.text }}</p>
      <p class="timeline-block__note">
        Cuatro etapas en el detalle siguiente — no un bloque único de nueve años.
      </p>
    </div>

    <div v-else-if="item.kind === 'informance-stage' && item.stage" class="timeline-block__stage">
      <div class="timeline-block__stage-grid">
        <PhotoSlot :photo-key="item.photoKey" variant="thumb" class="timeline-block__photo" />
        <div class="timeline-block__stage-body">
          <h2 class="timeline-block__title">{{ item.title }}</h2>
          <p class="timeline-block__subtitle">{{ item.stage.client }}</p>
          <p class="timeline-block__role">{{ item.stage.role }}</p>
          <p class="timeline-block__text">{{ item.stage.summary }}</p>
          <ul v-if="item.stage.highlights?.length" class="timeline-block__highlights">
            <li v-for="(line, idx) in item.stage.highlights" :key="idx">{{ line }}</li>
          </ul>
          <ul v-if="item.stage.links?.length" class="timeline-block__links">
            <li v-for="link in item.stage.links" :key="link.url">
              <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
      <Accordion v-if="item.stage.tramites?.length" class="timeline-block__accordion">
        <AccordionPanel value="tramites">
          <AccordionHeader>Trámites y alcance</AccordionHeader>
          <AccordionContent>
            <ul class="timeline-block__tramites">
              <li v-for="(tramite, idx) in item.stage.tramites" :key="idx">{{ tramite }}</li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>

    <div v-else class="timeline-block__default">
      <PhotoSlot
        v-if="item.photoKey"
        :photo-key="item.photoKey"
        variant="thumb"
        class="timeline-block__photo timeline-block__photo--inline"
      />
      <div>
        <h2 class="timeline-block__title">{{ item.title }}</h2>
        <p v-if="item.subtitle" class="timeline-block__subtitle">{{ item.subtitle }}</p>
        <p v-if="item.text" class="timeline-block__text">{{ item.text }}</p>
        <a
          v-if="item.meta?.web"
          :href="item.meta.web"
          target="_blank"
          rel="noopener noreferrer"
          class="timeline-block__link"
        >
          {{ item.meta.web }}
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.timeline-block {
  position: relative;
}

.timeline-block__period {
  margin: 0 0 0.5rem;
  font-size: var(--jo-period-size, 0.8rem);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--jo-accent, var(--p-primary-color));
}

.timeline-block__title {
  margin: 0 0 0.35rem;
  font-size: var(--jo-title-size, 1.2rem);
  font-weight: var(--jo-title-weight, 600);
  line-height: 1.2;
}

.timeline-block__subtitle {
  margin: 0 0 0.5rem;
  color: var(--jo-muted, var(--p-text-muted-color));
  font-size: 0.95rem;
}

.timeline-block__role {
  margin: 0 0 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
}

.timeline-block__text {
  margin: 0 0 0.75rem;
  max-width: var(--jo-text-max, 42rem);
}

.timeline-block__note {
  margin: 0;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--jo-muted, var(--p-text-muted-color));
}

.timeline-block__list {
  margin: 0.5rem 0 0;
  padding-left: 1.1rem;
  font-size: 0.9rem;
}

.timeline-block__list li {
  margin-bottom: 0.35rem;
}

.timeline-block__stage-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: var(--jo-stage-photo-col, minmax(8rem, 10rem) 1fr);
  align-items: start;
}

.timeline-block__highlights {
  margin: 0.5rem 0 0;
  padding-left: 1.1rem;
  font-size: 0.9rem;
}

.timeline-block__links {
  margin: 0.75rem 0 0;
  padding: 0;
  list-style: none;
  font-size: 0.85rem;
}

.timeline-block__links a {
  color: var(--jo-link, var(--p-primary-color));
  text-decoration: underline;
  text-underline-offset: 2px;
}

.timeline-block__accordion {
  margin-top: 0.75rem;
}

.timeline-block__tramites {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.88rem;
}

.timeline-block__default {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
}

.timeline-block__link {
  font-size: 0.85rem;
  color: var(--jo-link, var(--p-primary-color));
}
</style>
