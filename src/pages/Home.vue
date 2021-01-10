<template>
  <q-page class="max-w-large mx-auto flex flex-col">
    <div class="w-full h-12"></div>
    <div class="w-full grid grid-cols-10">
      <!-- Left Column -->
      <div class="col-span-2">
        <!-- Profile Widget -->
        <profile-widget></profile-widget>
        <!-- Discover -->
        <discover-widget class="mt-2"></discover-widget>
      </div>

      <!-- Middle Column -->
      <div class="col-span-5 ml-5 pb-4">
        <!-- Create a Post -->
        <post-form></post-form>
        <!-- Feed filters -->
        <feed-filters></feed-filters>
        <!-- Feed -->
        <feed></feed>
      </div>

      <!-- Right Column -->
      <div class="col-span-3 ml-5">
        <div class="border border-gray-400 rounded-xl overflow-hidden bg-white p-3 flex flex-col">
          <div class="flex items-center justify-between">
            <div class="text-gray-900">Add to your feed</div>
            <q-icon name="info" size="1.2rem" class="cursor-pointer text-darkgray" />
          </div>
          <div class="flex flex-col mt-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <q-avatar size="40px" class="cursor-pointer mr-2">
                  <img
                    src="https://images.theconversation.com/files/242834/original/file-20181029-76408-2vkpwi.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                    alt="profile"
                    class="object-center object-cover"
                  />
                </q-avatar>
                <div class="text-gray-900 font-medium cursor-pointer">#jobsearch</div>
              </div>
              <k-round-button label="Follow" icon="add"></k-round-button>
            </div>
            <div class="flex items-center justify-between mt-4">
              <div class="flex items-center">
                <q-avatar size="40px" class="cursor-pointer mr-2">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4E0BAQGukVLFB7W5_A/company-logo_200_200/0?e=1613606400&v=beta&t=YSenuugedfcJpWn3_0vvWY7ijCGoukAClAn7Rq_QfCM"
                    alt="profile"
                    class="object-center object-cover"
                  />
                </q-avatar>
                <div class="flex flex-col cursor-pointer">
                  <div class="text-gray-900 font-medium">JavaScript Works</div>
                  <div class="text-gray-600 font-light text-xs">Company ● Information</div>
                  <div class="text-gray-600 font-light text-xs">Technology and Services</div>
                </div>
              </div>
              <k-round-button label="Follow" icon="add"></k-round-button>
            </div>
          </div>
          <div class="text-brand font-medium cursor-pointer active:text-blue-800 mt-4">View all recommendations</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PostForm from 'src/components/PostForm.vue'
import FeedFilters from 'src/components/FeedFilters.vue'
import Feed from 'src/components/Feed.vue'
import ProfileWidget from 'src/components/ProfileWidget.vue'
import DiscoverWidget from 'src/components/DiscoverWidget.vue'
import KRoundButton from 'src/components/KRoundButton.vue'

export default defineComponent({
  name: 'Home',
  components: {
    PostForm,
    FeedFilters,
    Feed,
    ProfileWidget,
    DiscoverWidget,
    KRoundButton
  },
  meta: {
    title: 'Feed | LinkedIn'
  }
})
</script>
