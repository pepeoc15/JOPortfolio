<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__inner">
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
