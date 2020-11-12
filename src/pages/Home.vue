<template>
  <q-page class="max-w-large mx-auto flex flex-col">
    <div class="w-full h-12"></div>
    <div class="w-full grid grid-cols-10">
      <!-- 1st Column -->
      <div class="col-span-2">
        <!-- Profile Widget -->
        <profile-widget></profile-widget>
        <!-- Discover -->
        <discover-widget class="mt-2"></discover-widget>
      </div>

      <!-- Feed -->
      <div class="col-span-5 ml-5">
        <!-- Create a Post -->
        <post-form></post-form>
        <!-- Feed filters -->
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
        <!-- Posts -->
      </div>

      <!-- 3rd Column -->
      <div class="col-span-3 ml-5">
        <div class="border border-gray-400 rounded-xl overflow-hidden bg-white h-64">
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import PostForm from 'src/components/PostForm.vue'
import ProfileWidget from 'src/components/ProfileWidget.vue'
import DiscoverWidget from 'src/components/DiscoverWidget.vue'

export default defineComponent({
  name: 'Home',
  components: {
    PostForm,
    ProfileWidget,
    DiscoverWidget
  },
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
