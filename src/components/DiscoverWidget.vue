<template>
  <div class="border border-gray-400 rounded-xl overflow-hidden bg-white pt-2">
    <div class="item">Groups</div>
    <div class="flex justify-between items-center">
      <div class="item flex-grow">Events</div>
      <q-btn icon="add" round flat class="text-xs text-darkgray" />
    </div>
    <div class="item">Followed Hashtags</div>
    <q-separator />
    <div class="w-full px-2 py-3 cursor-pointer hover:bg-gray-200 active:bg-gray-300">
      <div class="text-gray-800 text-xs font-medium text-center">Discover more</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "DiscoverWidget"
});
</script>

<style lang="scss">
.item {
  @apply px-2 py-1 text-xs font-medium text-blue-600 cursor-pointer;
}

.item:hover {
  @apply text-blue-700 underline;
}
</style>
