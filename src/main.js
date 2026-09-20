import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Nora from '@primeuix/themes/nora'

import App from './App.vue'

import 'primeicons/primeicons.css'
import '@/styles/primevue-document.css'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Nora,
    options: {
      darkModeSelector: false,
    },
  },
})

app.mount('#app')
