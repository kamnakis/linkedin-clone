<template>
  <router-link
    class="relative flex flex-col items-center py-1 px-4 cursor-pointer text-darkgray hover:text-black border-b-2 border-transparent"
    :to="to"
    exact
  >
    <q-icon v-if="icon" :name="icon" size="sm" class="icon" />
    <div class="text-xs font-light tracking-wide mt-1">{{ label }}</div>
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'NavbarItem',
  props: {
    icon: {
      type: String
    },
    label: {
      type: String,
      default: 'Label'
    },
    to: {
      type: String,
      default: '/'
    }
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.router-link-active {
  color: black;
}

.router-link-active > .icon {
  transform: rotate(10deg);
}

.router-link-active:after {
  content: '';
  position: absolute;
  bottom: -2px;
  border-bottom: 2px solid black;
  animation-name: borderGrow;
  animation-duration: .3s;
  animation-fill-mode: forwards;
}

@keyframes borderGrow {
  from {
    width: 0%
  }
  to {
    width: 100%;
  }
}
</style>
