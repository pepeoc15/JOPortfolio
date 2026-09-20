<script setup>
import SelectButton from 'primevue/selectbutton'

import { usePrimevuePreset } from '@/composables/usePrimevuePreset.js'

const brandName = 'Jose Osuna'
const brandTag = 'JOPortfolio'

const { presetId, presets, setPreset } = usePrimevuePreset()

const presetOptions = presets.map((entry) => ({
  label: entry.label,
  value: entry.id,
}))
</script>

<template>
  <header class="app-header">
    <div class="app-header__inner">
      <div class="app-header__brand">
        <p class="app-header__name">{{ brandName }}</p>
        <p class="app-header__tag">{{ brandTag }}</p>
      </div>
      <SelectButton
        :model-value="presetId"
        :options="presetOptions"
        option-label="label"
        option-value="value"
        aria-label="Tema PrimeVue"
        @update:model-value="setPreset"
      />
    </div>
  </header>
</template>
