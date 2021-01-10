<template>
  <div class="flex flex-col space-y-2">
    <div
      v-for="user in users"
      :key="user.login.uuid"
      class="rounded-lg bg-white border border-gray-400 flex flex-col pt-4 overflow-hidden"
    >
      <div class="flex items-center justify-between px-4">
        <div class="flex items-center cursor-pointer">
          <q-avatar>
            <q-img
              :src="user.picture.medium"
            />
          </q-avatar>
          <div class="flex flex-col ml-3">
            <div class="text-sm font-medium hover:text-blue-700 hover:underline">{{ `${user.name.first} ${user.name.last}` }}</div>
            <div class="text-xs font-light">165,234 Followers</div>
            <div class="flex items-center text-xs font-light">
              {{ `${Math.floor(Math.random() * 10) + 1}${Math.random() > 0.7 ? 'd' : 'h'}` }} • <q-icon class="ml-1" name="public" /></div>
          </div>
        </div>
        <q-btn class="text-gray-800" icon="more_horiz" round flat />
      </div>
      <div class="mt-3 font-sans text-sm text-gray-900 px-4">
        {{ loremIpsum({ count: 2, units: 'sentences' }) }}
      </div>
      <div class="mt-3 border-b cursor-pointer" style="height: 300px">
        <q-img
          :src="`https://picsum.photos/id/${Math.floor(Math.random() * 15) + 1000}/500/300`"
          :ratio="16/9"
          spinner-color="primary"
          spinner-size="82px"
          class="w-full h-full"
        />
      </div>
      <div class="bg-gray-200 text-gray-800 p-3 flex flex-col cursor-pointer">
        <div class="capitalize font-medium">{{ loremIpsum({count: 3, units: 'words'}) }}</div>
        <div class="text-xs font-light mt-2 tracking-wide">api.dsad.io • 2m read</div>
      </div>
      <div class="flex items-center px-4 pt-4 text-xs text-gray-800 cursor-pointer group">
        <q-icon
          name="thumb_up"
          size="0.6rem"
          class="mr-2 bg-blue-600 text-white rounded-full p-1"
          style="transform: scaleX(-1)"
        />
        <q-icon
          v-if="Math.random() < 0.5"
          name="favorite"
          size="0.6rem"
          class="mr-2 bg-red-600 text-white rounded-full p-1"
        />
        <span class="group-hover:text-blue-700 group-hover:underline">
          {{ Math.floor(Math.random() * 2000) + 1000 }}
        </span>
        <q-separator class="mt-3" />
      </div>
      <div class="flex items-center px-4 py-2 space-x-2 text-gray-800">
        <k-button label="Like" icon="o_thumb_up" />
        <k-button label="Comment" icon="o_chat" />
        <k-button label="Share" icon="o_redo" />
        <k-button label="Send" icon="o_send" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import KButton from 'src/components/KButton.vue'
import { loremIpsum } from 'lorem-ipsum'
import { User } from 'src/models/Users'
import { RandomUserInfo } from 'src/models/Models'

export default defineComponent({
  name: 'Feed',
  components: {
    KButton
  },
  setup (_props, { root }) {
    const users = ref<User[]>([])

    onMounted(async () => {
      try {
        const response = await root.$axios.get<{
          info: RandomUserInfo, results: User[]
        }>('https://randomuser.me/api/?results=10', {
          headers: { 'Access-Control-Allow-Origin': '*' }
        })
        if (response.data) {
          users.value = response.data.results
        }
      } catch (error) {
        console.log(error)
      }
    })

    return {
      loremIpsum,
      users
    }
  }
})
</script>
