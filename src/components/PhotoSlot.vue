<script setup>
import { computed } from 'vue'

import { photoEntry, photoUrl } from '@/data/photos.js'

const props = defineProps({
  photoKey: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'default',
  },
})

const entry = computed(() => photoEntry(props.photoKey))
const src = computed(() => photoUrl(props.photoKey))
</script>

<template>
  <figure class="photo-slot" :class="[`photo-slot--${variant}`]">
    <div class="photo-slot__frame">
      <img
        :src="src"
        :alt="entry?.alt ?? 'Foto pendiente'"
        class="photo-slot__img"
        loading="lazy"
        decoding="async"
      />
      <span v-if="entry?.placeholder" class="photo-slot__badge">Placeholder</span>
    </div>
    <figcaption v-if="entry?.caption" class="photo-slot__caption">
      {{ entry.caption }}
      <span class="photo-slot__hint">→ {{ entry.file }}</span>
    </figcaption>
  </figure>
</template>
