<template>
  <q-layout view="lHh Lpr lFf">
    <app-header></app-header>
    <q-page-container class="bg-brandGray">
      <transition name="fade">
        <div class="fixed inset-0 bg-black opacity-75 z-50" v-if="$store.getters['global/tint']"></div>
      </transition>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

// Components
import AppHeader from 'src/components/AppHeader.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    AppHeader
  },
  setup () {
    const log = (msg: string) => console.log(msg)

    return {
      log
    }
  }
})
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
