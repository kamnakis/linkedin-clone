<template>
  <div class="border border-gray-400 rounded-xl overflow-hidden bg-white pt-3 pb-1 px-4 flex">
    <q-btn icon="create" :ripple="false" no-caps label="Start a post" rounded outline align="left" class="w-full text-gray-600 py-2 text-md" />
    <div class="w-full mt-1 flex items-center justify-around">
      <k-button label="Photo" icon="panorama" class="text-blue-500"></k-button>
      <k-button label="Video" icon="movie_creation" class="text-yellow-600"></k-button>
      <k-button label="Document" icon="description" class="text-red-400"></k-button>
      <k-button label="Write article" icon="article" class="text-green-500"></k-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import KButton from 'src/components/KButton.vue'

export default defineComponent({
  name: 'PostForm',
  components: {
    KButton
  },
})
</script>
