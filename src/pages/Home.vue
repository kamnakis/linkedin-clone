<template>
  <q-page class="max-w-large mx-auto flex flex-col">
    <div class="w-full h-12"></div>
    <div class="w-full grid grid-cols-10">
      <!-- 1st Column -->
      <div class="col-span-2">
        <!-- Profile -->
        <div class="border border-gray-400 rounded-xl overflow-hidden bg-white">
          <div
            class="h-16 bg-gray-300 bg-cover bg-center"
            :style="{ 'background-image': `url('${$store.getters['auth/user'].backgroundPicture}')` }"
          ></div>
          <div class="flex justify-center -mt-10">
            <q-avatar size="76px" class="cursor-pointer">
              <img :src="$store.getters['auth/user'].profilePicture" alt="profile" class="border-4 border-white object-center object-cover">
            </q-avatar>
          </div>
          <div class="flex justify-center text-center">
            <div class="px-6 mt-6 text-lg font-medium text-gray-800">{{ $store.getters['auth/user'].fullName }}</div>
            <div class="px-6 mt-1 mb-3 text-xs font-light text-gray-700">{{ $store.getters['auth/user'].description }}</div>
            <q-separator />
            <div class="w-full px-2 flex justify-between mt-3 py-1 hover:bg-gray-200 cursor-pointer active:bg-gray-300">
              <div class="text-xs text-darkgray font-medium tracking-wide">Who viewed your profile</div>
              <div class="text-xs text-brand font-medium tracking-wide">25</div>
            </div>
            <div class="w-full px-2 flex justify-between mb-3 py-1 hover:bg-gray-200 cursor-pointer active:bg-gray-300">
              <div class="text-xs text-darkgray font-medium tracking-wide">Views of your post</div>
              <div class="text-xs text-brand font-medium tracking-wide">137</div>
            </div>
            <div class="w-full px-2 flex justify-between py-1 hover:bg-gray-200 cursor-pointer group active:bg-gray-300">
              <div class="text-xs text-darkgray font-light tracking-wide group-hover:underline">Access exclusive tools & insights</div>
              <div class="flex">
                <q-icon name="emoji_events" class="text-yellow-700 mr-1" />
                <div class="text-xs text-darkgray font-medium tracking-wide group-hover:underline group-hover:text-brand">Try Premium Free for 1 Month</div>
              </div>
            </div>
            <q-separator />
            <div class="w-full px-2 py-3 cursor-pointer hover:bg-gray-200 flex items-center active:bg-gray-300">
              <q-icon name="turned_in" size="xs" class="text-darkgray" />
              <div class="text-gray-800 text-xs tracking-wide font-medium ml-2">Saved items</div>
            </div>
          </div>
        </div>
        <!-- Discover -->
        <div class="border border-gray-400 rounded-xl overflow-hidden bg-white mt-2 pt-2">
            <div class="px-2 py-1 text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">Groups</div>
            <div class="px-2 py-1 text-xs font-medium text-blue-600 hover:text-blue-700 cursor-pointer flex justify-between items-center">
              <div class="hover:underline flex-grow">Events</div>
              <q-btn icon="add" round flat class="text-xs text-darkgray" />
            </div>
            <div class="px-2 py-1 mb-1 text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">Followed Hashtags</div>
            <q-separator />
            <div class="w-full px-2 py-3 cursor-pointer hover:bg-gray-200 active:bg-gray-300">
              <div class="text-gray-800 text-xs font-medium text-center">Discover more</div>
            </div>
        </div>
      </div>

      <!-- Feed -->
      <div class="col-span-5 ml-5">
        <!-- Create a Post -->
        <div class="border border-gray-400 rounded-xl overflow-hidden bg-white pt-3 pb-1 px-4 flex">
          <q-btn icon="create" :ripple="false" no-caps label="Start a post" rounded outline align="left" class="w-full text-gray-600 py-2 text-md" />
          <div class="w-full mt-1 flex items-center justify-around">
            <k-button label="Photo" icon="panorama" class="text-blue-500"></k-button>
            <k-button label="Video" icon="movie_creation" class="text-yellow-600"></k-button>
            <k-button label="Document" icon="description" class="text-red-400"></k-button>
            <k-button label="Write article" icon="article" class="text-green-500"></k-button>
          </div>
        </div>
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
import KButton from 'src/components/KButton.vue'

export default defineComponent({
  name: 'Home',
  components: {
    KButton
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
