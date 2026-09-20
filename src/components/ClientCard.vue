<script setup>
import Accordion from 'primevue/accordion'
import AccordionContent from 'primevue/accordioncontent'
import AccordionHeader from 'primevue/accordionheader'
import AccordionPanel from 'primevue/accordionpanel'

import PhotoSlot from './PhotoSlot.vue'

defineProps({
  card: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="client-card"
    :class="{ 'client-card--compact': card.compact, 'client-card--draft': card.draft }"
  >
    <div class="client-card__grid" :class="{ 'client-card__grid--text-only': !card.photoKey }">
      <PhotoSlot
        v-if="card.photoKey"
        :photo-key="card.photoKey"
        variant="thumb"
        class="client-card__photo"
      />
      <div class="client-card__body">
        <p class="client-card__meta">
          <span>{{ card.sector }}</span>
          <span v-if="card.period" class="client-card__period">{{ card.period }}</span>
        </p>
        <p v-if="card.draft" class="client-card__draft">Volcado pendiente</p>
        <h3 class="client-card__name">{{ card.name }}</h3>
        <p class="client-card__role">{{ card.role }}</p>
        <p class="client-card__employer">{{ card.employer }}</p>
        <p v-if="card.parallelNote" class="client-card__note">{{ card.parallelNote }}</p>
        <p class="client-card__summary">{{ card.summary }}</p>
        <ul v-if="card.highlights?.length" class="client-card__highlights">
          <li v-for="(line, idx) in card.highlights" :key="idx">{{ line }}</li>
        </ul>
        <p v-if="card.stack?.length" class="client-card__stack">
          <span v-for="item in card.stack" :key="item">{{ item }}</span>
        </p>
        <ul v-if="card.links?.length" class="client-card__links">
          <li v-for="link in card.links" :key="link.url">
            <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>
    <Accordion v-if="card.tramites?.length" class="client-card__accordion">
      <AccordionPanel value="tramites">
        <AccordionHeader>Trámites y alcance</AccordionHeader>
        <AccordionContent>
          <ul class="client-card__tramites">
            <li v-for="(tramite, idx) in card.tramites" :key="idx">{{ tramite }}</li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </article>
</template>

<style scoped>
.client-card {
  background: var(--jo-surface);
  border: 1px solid var(--jo-border);
  padding: 1.1rem 1.15rem 1.15rem;
}

.client-card--compact {
  padding: 0.9rem 1rem 1rem;
}

.client-card__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(6rem, 8rem) 1fr;
  align-items: start;
}

.client-card__photo :deep(.photo-slot--thumb .photo-slot__frame) {
  max-width: 100%;
}

.client-card__grid--text-only {
  grid-template-columns: 1fr;
}

@media (max-width: 520px) {
  .client-card__grid {
    grid-template-columns: 1fr;
  }
}

.client-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.85rem;
  margin: 0 0 0.4rem;
  font-size: var(--jo-period-size, 0.75rem);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--jo-accent);
}

.client-card__period {
  color: var(--jo-muted);
}

.client-card__name {
  margin: 0 0 0.3rem;
  font-size: var(--jo-title-size, 1.25rem);
  font-weight: var(--jo-title-weight, 600);
  line-height: 1.2;
}

.client-card__draft {
  margin: 0 0 0.45rem;
  font-size: 0.8rem;
  color: var(--jo-muted);
}

.client-card__role {
  margin: 0 0 0.2rem;
  font-weight: 600;
  font-size: 0.92rem;
}

.client-card__employer {
  margin: 0 0 0.55rem;
  color: var(--jo-muted);
  font-size: 0.9rem;
}

.client-card__note {
  margin: 0 0 0.55rem;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--jo-muted);
}

.client-card__summary {
  margin: 0 0 0.65rem;
  max-width: var(--jo-text-max, 42rem);
}

.client-card--compact .client-card__summary {
  margin-bottom: 0.45rem;
  font-size: 0.92rem;
}

.client-card__highlights {
  margin: 0 0 0.7rem;
  padding-left: 1.1rem;
  font-size: 0.9rem;
}

.client-card__highlights li {
  margin-bottom: 0.3rem;
}

.client-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin: 0 0 0.7rem;
}

.client-card__stack span {
  border: 1px solid var(--jo-border);
  padding: 0.12rem 0.4rem;
  font-size: 0.72rem;
  color: var(--jo-muted);
}

.client-card__links {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.85rem;
}

.client-card__links li {
  margin-bottom: 0.25rem;
}

.client-card__links a {
  color: var(--jo-link);
  text-underline-offset: 2px;
}

.client-card__accordion {
  margin-top: 0.75rem;
}

.client-card__tramites {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.88rem;
}
</style>
