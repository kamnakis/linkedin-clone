<template>
  <div class="flex py-1 items-center cursor-pointer">
    <q-separator class="flex-1 mr-2" />
    <div class="font-light text-xs text-gray-900">Sort by: <span class="font-medium capitalize">{{ sortBy }}<q-icon name="arrow_drop_down" size="sm" /></span></div>
    <q-menu anchor="bottom right" self="top right">
      <q-list style="min-width: 150px" dense>
        <q-item clickable v-close-popup :class="{'border-l-4  border-green-700 bg-gray-100' : sortBy === 'top'}" @click="handleSortChange('top')">
          <q-item-section>Top</q-item-section>
        </q-item>
        <q-item clickable v-close-popup :class="{'border-l-4  border-green-700 bg-gray-100' : sortBy === 'recent'}" @click="handleSortChange('recent')">
          <q-item-section>Recent</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'FeedFilters',
  setup () {
    const sortBy = ref('top')

    const handleSortChange = (to: 'top' | 'recent') => {
      sortBy.value = to
    }

    return {
      sortBy,
      handleSortChange
    }
  }
})
</script>
