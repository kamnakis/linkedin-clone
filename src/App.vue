<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'App'
})
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
