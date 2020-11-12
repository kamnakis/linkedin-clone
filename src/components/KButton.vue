<template>
  <div class="inline-flex items-center hover:bg-gray-200 py-3 px-2 cursor-pointer transition-colors duration-150 rounded-lg active:bg-gray-400 select-none">
    <q-icon v-if="icon" :name="icon" size="sm" />
    <div class="text-gray-600 font-medium" :class="{'ml-2': icon}">{{ label }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'KButton',
  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      icon: String,
      default: ''
    }
  }
})
</script>

<style>

</style>
