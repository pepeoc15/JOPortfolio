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

<style scoped>
.photo-slot {
  margin: 0;
}

.photo-slot__frame {
  position: relative;
  overflow: hidden;
  background: var(--jo-photo-bg, #e8e8e8);
  border: 1px solid var(--jo-photo-border, rgba(0, 0, 0, 0.12));
}

.photo-slot__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-slot__badge {
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  padding: 0.15rem 0.45rem;
  font-size: 0.65rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  border-radius: 2px;
}

.photo-slot__caption {
  margin-top: 0.45rem;
  font-size: 0.75rem;
  color: var(--jo-muted, #666);
  line-height: 1.35;
}

.photo-slot__hint {
  display: block;
  font-size: 0.65rem;
  opacity: 0.75;
  font-family: var(--jo-mono, ui-monospace, monospace);
}

.photo-slot--round .photo-slot__frame {
  border-radius: 50%;
  aspect-ratio: 1;
}

.photo-slot--hero .photo-slot__frame {
  aspect-ratio: 4 / 5;
}

.photo-slot--wide .photo-slot__frame {
  aspect-ratio: 16 / 10;
}

.photo-slot--thumb .photo-slot__frame {
  aspect-ratio: 3 / 2;
  max-width: 12rem;
}
</style>
