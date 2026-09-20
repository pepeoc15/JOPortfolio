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

<style scoped>
.compact-block {
  padding-top: 0.25rem;
}

.compact-block__title {
  margin: 0 0 0.4rem;
  font-size: 1.05rem;
  font-weight: 600;
}

.compact-block__text {
  margin: 0 0 0.6rem;
  max-width: var(--jo-text-max, 42rem);
  color: var(--jo-muted);
  font-size: 0.9rem;
}

.compact-block__list {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.9rem;
}

.compact-block__list li {
  margin-bottom: 0.4rem;
}

.compact-block__link {
  display: inline-block;
  margin-left: 0.35rem;
  font-size: 0.82rem;
  color: var(--jo-link);
}

.compact-block__note {
  display: block;
  margin-top: 0.15rem;
  font-size: 0.82rem;
  color: var(--jo-muted);
}
</style>
