import { usePreset } from '@primeuix/themes'
import { readonly, ref } from 'vue'

import { defaultPresetId, primevuePresets } from '@/data/primevue-presets.js'

const presetId = ref(defaultPresetId)

function findPreset(id) {
  return primevuePresets.find((entry) => entry.id === id)
}

export function usePrimevuePreset() {
  function setPreset(id) {
    const entry = findPreset(id)
    if (!entry) {
      return
    }
    presetId.value = entry.id
    usePreset(entry.preset)
  }

  return {
    presetId: readonly(presetId),
    presets: primevuePresets,
    setPreset,
  }
}
