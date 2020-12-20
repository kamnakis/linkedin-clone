<template>
  <div
    class="fixed bottom-0 right-0 mr-4 z-10 w-full shadow-3 rounded-t-xl overflow-hidden transition-transform duration-300"
    style="max-width: 250px"
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
      <div class="absolute inset-0 px-2 overflow-y-scroll">
        <div class="bg-green-500 rounded-lg h-10 my-1"></div>
        <div class="bg-green-500 rounded-lg h-10 my-1"></div>
        <div class="bg-green-500 rounded-lg h-10 my-1"></div>
        <div class="bg-green-500 rounded-lg h-10 my-1"></div>
        <div class="bg-green-500 rounded-lg h-10 my-1"></div>
        <div class="bg-green-500 rounded-lg h-10 my-1"></div>
        <div class="bg-green-500 rounded-lg h-10 my-1"></div>
        <div class="bg-green-500 rounded-lg h-10 my-1"></div>
        <div class="bg-green-500 rounded-lg h-10 my-1"></div>
        <div class="bg-green-500 rounded-lg h-10 my-1"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'MessageWidget',
  setup () {
    const open = ref(false)
    const toggleOpen = () => {
      open.value = !open.value
    }

    const search = ref('')

    return {
      open,
      toggleOpen,
      search
    }
  }
})
</script>
