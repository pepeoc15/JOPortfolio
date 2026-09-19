<script setup>
const brandName = 'Jose Osuna'
const brandTag = 'JOPortfolio'
</script>

<template>
  <header class="app-header">
    <div class="app-header__inner">
      <p class="app-header__name">{{ brandName }}</p>
      <p class="app-header__tag">{{ brandTag }}</p>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  border-bottom: 1px solid var(--p-content-border-color);
  background: var(--p-content-background);
}

.app-header__inner {
  max-width: 56rem;
  margin: 0 auto;
  padding: 1.25rem 1.25rem;
}

.app-header__name {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.app-header__tag {
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  color: var(--p-text-muted-color);
}
</style>
