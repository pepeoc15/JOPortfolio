<script setup>
import { ref } from 'vue'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'

import ClientCard from './ClientCard.vue'

const props = defineProps({
  cards: {
    type: Array,
    required: true,
  },
})

const activeClientId = ref(props.cards[0]?.id ?? '')
</script>

<template>
  <Tabs v-model:value="activeClientId" scrollable lazy class="client-cards-viewer">
    <TabList>
      <Tab v-for="card in cards" :key="card.id" :value="card.id">{{ card.name }}</Tab>
    </TabList>
    <TabPanels>
      <TabPanel v-for="card in cards" :key="card.id" :value="card.id">
        <ClientCard :card="card" />
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>
