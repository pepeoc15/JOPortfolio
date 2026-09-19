<script setup>
const brandName = 'Jose Osuna'
const brandTag = 'JOPortfolio'
</script>

<template>
  <header class="app-header">
    <div class="app-header__inner">
      <div class="app-header__brand">
        <p class="app-header__name">{{ brandName }}</p>
        <p class="app-header__tag">{{ brandTag }}</p>
      </div>
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
</style>
