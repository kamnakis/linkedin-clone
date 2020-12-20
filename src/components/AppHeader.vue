<template>
  <q-header class="bg-white z-40">
    <q-toolbar>
      <div class="max-w-large w-full mx-auto flex items-center justify-between">
        <!-- Logo and Search bar -->
        <div class="flex">
          <router-link class="cursor-pointer" to="/"><q-icon name="fab fa-linkedin" size="lg" class="text-brand" /></router-link>
          <q-input
            v-model="search"
            type="text"
            placeholder="Search"
            @focus="toggleSearchFocus()"
            @blur="toggleSearchFocus()"
            class="mx-2 pl-2 pr-12 rounded-md text-brandGray bg-gray-200"
            borderless
            dense
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <!-- Nav Items -->
        <div class="flex">
          <navbar-item icon="home" label="Home" to="/">
            <template v-slot:notifications>
              <div class="bg-red-700 absolute top-0 right-0 -mr-2 w-4 h-4 rounded-full border border-white flex items-center justify-center">
                <div class="bg-white rounded-full" style="width: 0.375rem; height: 0.375rem"></div>
              </div>
            </template>
          </navbar-item>
          <navbar-item icon="people" label="My Network" to="/network" />
          <navbar-item icon="work" label="Jobs" to="/jobs" />
          <navbar-item icon="message" label="Messaging" to="/messages" />
          <navbar-item icon="notifications" label="Notifications" to="/notifications" />
          <navbar-item-dropdown :img="$store.getters['auth/user'].profilePicture" label="Me">
            <!-- Dropdown menu on click -->
            <template v-slot:menu>
              <q-menu anchor="bottom right" self="top right" :offset="[0, 6]">
                <q-list style="max-width: 264px">
                  <q-item v-close-popup class="cursor-pointer flex flex-col">
                    <div class="flex flex-no-wrap">
                      <q-avatar size="60px"><img :src="$store.getters['auth/user'].profilePicture" class="object-cover object-center"></q-avatar>
                      <div class="flex flex-col ml-4">
                        <div class="font-medium text-base text-darkgray flex-initial">{{ $store.getters['auth/user'].fullName }}</div>
                        <div class="font-light text-xs text-darkgray flex-initial">{{ $store.getters['auth/user'].description }}</div>
                      </div>
                    </div>
                    <div class="mt-2">
                      <k-round-button label="View Profile"></k-round-button>
                    </div>
                  </q-item>
                  <q-separator />
                  <q-item v-close-popup class="flex flex-col mt-2">
                    <div class="text-gray-800 font-medium text-base">Account</div>
                    <div class="text-gray-600 text-sm hover:underline cursor-pointer mt-1">Settings & Privacy</div>
                    <div class="text-gray-600 text-sm hover:underline cursor-pointer mt-1">Help</div>
                    <div class="text-gray-600 text-sm hover:underline cursor-pointer mt-1">Language</div>
                  </q-item>
                  <q-separator />
                  <q-item v-close-popup class="flex flex-col mt-2">
                    <div class="text-gray-800 font-medium text-base">Manage</div>
                    <div class="text-gray-600 text-sm hover:underline cursor-pointer mt-1">Posts & Activity</div>
                    <div class="text-gray-600 text-sm hover:underline cursor-pointer mt-1">My Posted Jobs</div>
                  </q-item>
                  <q-separator />
                  <q-item v-close-popup class="flex items-center">
                    <div class="text-gray-600 text-sm hover:underline cursor-pointer">Sign out</div>
                  </q-item>
                </q-list>
              </q-menu>
            </template>
          </navbar-item-dropdown>
          <q-separator vertical />
          <template>
            <navbar-item-dropdown icon="apps" label="Work" @item-click="toggleWorkSidebar()" />
            <!-- Right Side dialog on click -->
            <q-dialog v-model="workSidebar" transition-show="slide-left" transition-hide="slide-right" >
              <q-card class="fixed bottom-0 right-0 bg-white w-full rounded-l-xl q-override" style="max-width: 380px; top: 53px">
                <q-toolbar class="flex justify-end sticky top-0 bg-white z-10">
                  <q-btn flat round dense icon="close" class="text-darkgray" v-close-popup />
                </q-toolbar>

                <q-card-section class="px-6">
                  <q-item class="flex flex-col border border-gray-300 rounded-lg p-0">
                    <div class="p-4 text-gray-800 text-lg font-medium">
                      Visit More LinkedIn Products
                    </div>
                    <q-separator />
                    <div class="p-4">
                      <div class="grid grid-cols-4 grid-flow-row gap-4">
                        <div class="flex flex-col items-center cursor-pointer" v-for="i in linkedInProducts" :key="i.icon">
                          <div class="h-12 w-12 flex items-center justify-center border rounded-md shadow-sm transition-all duration-150 hover:shadow-md hover:border-gray-500">
                            <q-icon :name="i.icon" size="md" class="text-lightblue" />
                          </div>
                          <div class="text-gray-600 text-center text-xs mt-2">
                            {{ i.title }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-item>

                  <q-item class="flex flex-col border border-gray-300 rounded-lg p-0 mt-4">
                    <div class="p-4 text-gray-800 text-lg font-medium">
                      LinkedIn Business Services
                    </div>
                    <q-separator />
                    <div class="px-4">
                      <div class="flex flex-col mt-2">
                        <div v-for="(i, index) in linkedInServices" :key="index" class="hover:underline cursor-pointer mb-2">
                          <div class="text-sm text-gray-800 font-medium">{{i.header}}</div>
                          <div class="text-xs text-gray-600 font-light">{{i.caption}}</div>
                        </div>
                      </div>
                    </div>
                    <q-separator />
                    <div class="px-4 py-3 text-sm text-gray-800 font-medium cursor-pointer hover:underline">Create a Company Page <q-icon name="add" /></div>
                  </q-item>
                </q-card-section>
              </q-card>
            </q-dialog>
          </template>
          <div class="w-24 flex items-center text-center">
            <a href="/#" class="text-xs text-yellow-800 hover:underline text-center break-words">Try Premium Free for 1 Month</a>
          </div>
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent, ref, watch, reactive } from '@vue/composition-api'

// Components
import NavbarItem from 'src/components/NavbarItem.vue'
import NavbarItemDropdown from 'src/components/NavbarItemDropdown.vue'
import KRoundButton from 'src/components/KRoundButton.vue'

export default defineComponent({
  name: 'AppHeader',
  components: {
    NavbarItem,
    NavbarItemDropdown,
    KRoundButton
  },
  setup (_props, { root }) {
    const search = ref('')
    const workSidebar = ref(false)
    const searchFocus = ref(false)

    const toggleSearchFocus = () => {
      searchFocus.value = !searchFocus.value
    }
    const toggleWorkSidebar = () => {
      workSidebar.value = !workSidebar.value
    }

    watch([workSidebar, searchFocus], async () => {
      await root.$store.dispatch('global/setTint', workSidebar.value || searchFocus.value)
    })

    const linkedInProducts = reactive([
      { icon: 'markunread_mailbox', title: 'Post a Job' },
      { icon: 'live_tv', title: 'Learning' },
      { icon: 'insights', title: 'Insights' },
      { icon: 'addchart', title: 'Advertise' },
      { icon: 'explore', title: 'Find Leeds' },
      { icon: 'group', title: 'Groups' },
      { icon: 'add_task', title: 'ProFinder' },
      { icon: 'monetization_on', title: 'Salary' }
    ])
    const linkedInServices = reactive([
      { header: 'Talent Solutions', caption: 'Find, attract and recruit talent' },
      { header: 'Sales Solutions', caption: 'Unlock sales opportunities' },
      { header: 'Post a job for free', caption: 'Get your job in front of quality candidates' },
      { header: 'Marketing Solutions', caption: 'Acquire customers and grow your business' },
      { header: 'Learning Solutions', caption: 'Develop talent across your organization' }
    ])

    return {
      search,
      workSidebar,
      toggleWorkSidebar,
      linkedInProducts,
      linkedInServices,
      toggleSearchFocus
    }
  }
})
</script>

<style lang="scss">
.q-dialog__backdrop {
  background: rgba(0, 0, 0, 0) !important;
}

.q-override {
  border-radius: 10px 0px 0px 10px !important;
  box-shadow: none !important ;
}
</style>
