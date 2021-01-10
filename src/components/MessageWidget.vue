<template>
  <div
    class="fixed bottom-0 right-0 mr-4 z-10 w-full shadow-3 rounded-t-xl overflow-hidden transition-transform duration-300"
    style="max-width: 280px"
    :style="{ 'transform': open ? 'translateY(0px)' : 'translateY(450px)'}"
  >
    <div class="flex items-center justify-between px-3 py-1 bg-white cursor-pointer" @click="toggleOpen()">
      <div class="flex items-center">
        <q-avatar size="32px" class="relative cursor-pointer mr-2">
          <img :src="$store.getters['auth/user'].profilePicture" alt="profile" class="object-center object-cover" />
          <div class="absolute bottom-0 right-0 border w-3 h-3 rounded-full bg-green-700"></div>
        </q-avatar>
        <div class="text-gray-800 font-medium text-xs">Messaging</div>
      </div>
      <div class="flex items-center text-gray-800">
        <q-icon name="fas fa-edit" class="hover:bg-darkgray hover:bg-opacity-10 active:bg-opacity-25 p-2 rounded-full" />
        <q-icon name="more_horiz" size="sm" class="hover:bg-darkgray hover:bg-opacity-10 active:bg-opacity-25 p-1 rounded-full" />
        <q-icon
          name="expand_less"
          size="sm"
          class="hover:bg-darkgray hover:bg-opacity-10 active:bg-opacity-25 p-1 rounded-full transition-transform duration-200"
          :style="{ 'transform': open ? 'rotate(180deg)' : ''}"
        />
      </div>
    </div>
    <div class="flex items-center justify-center bg-white px-2" style="height: 50px">
      <q-input
        v-model="search"
        type="text"
        placeholder="Search messages"
        class="w-full px-2 rounded-md text-brandGray bg-gray-200"
        borderless
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" size="sm" />
        </template>
        <template v-slot:append>
          <q-icon name="tune" size="sm" />
        </template>
      </q-input>
    </div>
    <div class="relative bg-white" style="max-height: 400px; height: 400px">
      <q-list class="absolute inset-0 overflow-y-auto">
        <q-item
          v-for="user in users"
          :key="user.login.uuid"
          clickable
          v-ripple
          class="px-2"
        >
          <q-item-section avatar>
            <q-avatar>
              <img :src="user.picture.medium">
            </q-avatar>
          </q-item-section>

          <q-item-section class="flex flex-col overflow-x-hidden -ml-2">
            <div class="truncate text-sm">
              {{ `${user.name.first} ${user.name.last}` }}
            </div>
            <div class="text-gray-700 text-xs truncate">
              {{ `You: ${loremIpsum({count: 5, units: 'words' })}` }}
            </div>
            <q-separator class="mt-1" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import { loremIpsum } from 'lorem-ipsum'
import { User } from 'src/models/Users'
import { RandomUserInfo } from 'src/models/Models'

export default defineComponent({
  name: 'MessageWidget',
  setup (_props, { root }) {
    const open = ref(false)
    const toggleOpen = () => {
      open.value = !open.value
    }

    const search = ref('')

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
      open,
      toggleOpen,
      search,
      users
    }
  }
})
</script>

<style lang="scss" scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
