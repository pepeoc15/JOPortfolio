<script setup>
import { useTheme } from '@/composables/useTheme.js'

import PhotoSlot from './PhotoSlot.vue'

const year = new Date().getFullYear()
const { themeId } = useTheme()
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__inner">
      <PhotoSlot
        v-if="themeId === 'fotografico'"
        photo-key="portrait"
        variant="thumb"
        class="app-footer__photo"
      />
      <p class="app-footer__copy">
        © {{ year }} Jose Osuna. Inventario completo en datos; en público se puede ocultar sin
        borrar.
      </p>
      <div class="app-footer__slots" aria-label="Enlaces sociales (pendiente)">
        <!-- Espacio reservado: email, LinkedIn, GitHub, etc. -->
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: var(--jo-main-max, 56rem);
  margin: 0 auto;
  padding: 1.5rem 1.25rem;
}

.app-footer__copy {
  margin: 0;
  flex: 1;
  font-size: 0.8125rem;
  color: var(--jo-muted, var(--p-text-muted-color));
}

.app-footer__slots {
  min-height: 1.5rem;
}
</style>
