<template>
  <div
    class="relative flex flex-col items-center py-1 px-4 cursor-pointer text-darkgray hover:text-black border-b-2 border-transparent"
    @click="$emit('item-click')"
  >
    <q-avatar v-if="img" size="sm">
      <img :src="img" class="object-cover object-center">
    </q-avatar>
    <q-icon v-if="icon" :name="icon" size="sm" />

    <div class="text-xs font-light tracking-wide">
      {{ label }}
      <q-icon name="arrow_drop_down" size="xs" />
    </div>
    <slot name="menu"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'NavbarItemDropdown',
  props: {
    icon: {
      type: String
    },
    img: {
      type: String
    },
    label: {
      type: String,
      default: 'Label'
    }
  },
  setup () {
    const cl = () => console.log('cli')
    return {
      cl
    }
  }
})
</script>
