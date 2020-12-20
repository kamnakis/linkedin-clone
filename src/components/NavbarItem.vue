<template>
  <router-link
    class="relative flex flex-col items-center py-1 px-4 cursor-pointer text-darkgray hover:text-black border-b-2 border-transparent"
    :to="to"
    exact
  >
    <q-icon v-if="icon" :name="icon" size="sm" class="icon">
      <slot name="notifications"></slot>
    </q-icon>
    <div class="text-xs font-light tracking-wide">{{ label }}</div>
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
  animation: scaleInOut 300ms forwards;
}

@keyframes scaleInOut {
  0% {
    transform: scale(0.8)
  }
  50% {
    transform: scale(1.2)
  }
  100% {
    transform: scale(1);
  }
}

.router-link-active:after {
  content: '';
  position: absolute;
  bottom: -2px;
  height: 2px;
  background-color: black;
  animation: borderGrow 300ms forwards;
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
