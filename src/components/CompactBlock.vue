<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: '',
  },
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="compact-block">
    <h2 class="compact-block__title">{{ title }}</h2>
    <p v-if="text" class="compact-block__text">{{ text }}</p>
    <ul class="compact-block__list">
      <li v-for="row in items" :key="row.id">
        <strong>{{ row.label }}</strong>
        <span v-if="row.detail"> — {{ row.detail }}</span>
        <a
          v-if="row.href"
          :href="row.href"
          target="_blank"
          rel="noopener noreferrer"
          class="compact-block__link"
        >
          {{ row.hrefLabel || row.href }}
        </a>
        <span v-if="row.note" class="compact-block__note">{{ row.note }}</span>
      </li>
    </ul>
  </section>
</template>
