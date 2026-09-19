<script setup>
import { useTheme } from '@/composables/useTheme.js'

const brandName = 'Jose Osuna'
const brandTag = 'JOPortfolio'

const { themeId, themes, setTheme } = useTheme()
</script>

<template>
  <header class="app-header">
    <div class="app-header__inner">
      <div class="app-header__brand">
        <p class="app-header__name">{{ brandName }}</p>
        <p class="app-header__tag">{{ brandTag }}</p>
      </div>
      <nav class="app-header__themes" aria-label="Estilos visuales">
        <button
          v-for="theme in themes"
          :key="theme.id"
          type="button"
          class="app-header__theme-btn"
          :class="{ 'is-active': themeId === theme.id }"
          :title="theme.description"
          :aria-pressed="themeId === theme.id"
          @click="setTheme(theme.id)"
        >
          {{ theme.label }}
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 1.25rem;
  max-width: var(--jo-main-max, 56rem);
  margin: 0 auto;
  padding: 1rem 1.25rem;
}

.app-header__name {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.app-header__tag {
  margin: 0.2rem 0 0;
  font-size: 0.8rem;
  color: var(--jo-muted, var(--p-text-muted-color));
}

.app-header__themes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  justify-content: flex-end;
}

@media (max-width: 640px) {
  .app-header__themes {
    width: 100%;
    justify-content: flex-start;
  }
}
</style>
