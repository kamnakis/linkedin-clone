<template>
  <div class="border border-gray-400 rounded-xl overflow-hidden bg-white">
    <div
      class="h-16 bg-gray-300 bg-cover bg-center"
      :style="{ 'background-image': `url('${$store.getters['auth/user'].backgroundPicture}')` }"
    ></div>
    <div class="flex justify-center -mt-10">
      <q-avatar size="76px" class="cursor-pointer">
        <img
          :src="$store.getters['auth/user'].profilePicture"
          alt="profile"
          class="border-4 border-white object-center object-cover"
        />
      </q-avatar>
    </div>
    <div class="flex justify-center text-center">
      <div class="px-6 mt-6 text-lg font-medium text-gray-800">
        {{ $store.getters["auth/user"].fullName }}
      </div>
      <div class="px-6 mt-1 mb-3 text-xs font-light text-gray-700">
        {{ $store.getters["auth/user"].description }}
      </div>
      <q-separator />
      <div class="list__item mt-3 text-xs font-medium tracking-wide">
        <div class=" text-darkgray">
          Who viewed your profile
        </div>
        <div class="text-brand">25</div>
      </div>
      <div class="list__item mb-3 text-xs font-medium tracking-wide">
        <div class="text-darkgray">
          Views of your post
        </div>
        <div class="text-brand">137</div>
      </div>
      <div class="w-full px-2 py-1 flex justify-between cursor-pointer group hover:bg-gray-200  active:bg-gray-300">
        <div class="text-xs text-darkgray font-light tracking-wide group-hover:underline">
          Access exclusive tools & insights
        </div>
        <div class="flex">
          <q-icon name="emoji_events" class="text-yellow-700 mr-1" />
          <div class="text-xs text-darkgray font-medium tracking-wide group-hover:underline group-hover:text-brand">
            Try Premium Free for 1 Month
          </div>
        </div>
      </div>
      <q-separator />
      <div class="list__icon-item">
        <q-icon name="turned_in" size="xs" class="text-darkgray" />
        <div class="text-gray-800 text-xs tracking-wide font-medium ml-2">
          Saved items
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "ProfileWidget"
});
</script>

<style lang="scss">
.list__item{
  @apply w-full px-2 flex justify-between py-1 cursor-pointer;
}

.list__item:hover{
  @apply bg-gray-200;
}

.list__item:active{
  @apply bg-gray-300;
}

.list__icon-item{
  @apply w-full px-2 py-3 flex cursor-pointer;
}

.list__icon-item:hover{
  @apply bg-gray-200;
}

.list__icon-item:active{
  @apply bg-gray-300;
}
</style>
