<script setup>
const brandName = 'Jose Osuna'
const brandTag = 'JOPortfolio'
const primeVueDocsUrl = 'https://v4.primevue.org/'
</script>

<template>
  <header class="app-header">
    <div class="app-header__inner">
      <div class="app-header__brand">
        <p class="app-header__name">{{ brandName }}</p>
        <p class="app-header__tag">{{ brandTag }}</p>
      </div>
      <a
        class="app-header__docs"
        :href="primeVueDocsUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Documentación PrimeVue 4.5.5
      </a>
    </div>
  </header>
</template>
