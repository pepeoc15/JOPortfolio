<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__inner">
      <p class="app-footer__copy">
        © {{ year }} Jose Osuna. Todos los derechos reservados.
      </p>
      <div class="app-footer__slots" aria-label="Enlaces sociales (pendiente)">
        <!-- Espacio reservado: email, LinkedIn, GitHub, etc. -->
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid var(--p-content-border-color);
  background: var(--p-content-background);
}

.app-footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: 56rem;
  margin: 0 auto;
  padding: 1.5rem 1.25rem;
}

.app-footer__copy {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--p-text-muted-color);
}

.app-footer__slots {
  min-height: 1.5rem;
}
</style>
