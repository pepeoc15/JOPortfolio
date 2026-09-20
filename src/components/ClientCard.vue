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
