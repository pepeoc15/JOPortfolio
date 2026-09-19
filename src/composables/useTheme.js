import { readonly, ref, watch } from 'vue'

import { defaultThemeId, themeStorageKey, themes } from '@/data/themes.js'

const themeId = ref(defaultThemeId)
let bootstrapped = false

function isValidTheme(id) {
  return themes.some((theme) => theme.id === id)
}

function applyThemeToDocument(id) {
  if (typeof document === 'undefined') {
    return
  }
  document.documentElement.setAttribute('data-theme', id)
}

function bootstrapTheme() {
  if (bootstrapped || typeof window === 'undefined') {
    return
  }
  const stored = localStorage.getItem(themeStorageKey)
  if (stored && isValidTheme(stored)) {
    themeId.value = stored
  }
  applyThemeToDocument(themeId.value)
  bootstrapped = true
}

/**
 * Estado compartido del tema visual (sin remontar la app al cambiar).
 */
export function useTheme() {
  bootstrapTheme()

  function setTheme(id) {
    if (!isValidTheme(id)) {
      return
    }
    themeId.value = id
    localStorage.setItem(themeStorageKey, id)
    applyThemeToDocument(id)
  }

  watch(themeId, (id) => {
    applyThemeToDocument(id)
  })

  return {
    themeId: readonly(themeId),
    themes,
    setTheme,
  }
}
