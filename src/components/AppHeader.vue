<template>
  <q-header class="bg-white">
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
            <div class="bg-red absolute right-0 w-4 h-4 rounded-full"></div>
          </navbar-item>
          <navbar-item icon="people" label="My Network" to="/network" />
          <navbar-item icon="work" label="Jobs" to="/jobs" />
          <navbar-item icon="message" label="Messaging" to="/messages" />
          <navbar-item icon="notifications" label="Notifications" to="/notifications" />
          <navbar-item-dropdown :img="$store.getters['auth/user'].profilePicture" label="Me">
            <!-- Dropdown menu on click -->
            <template v-slot:menu>
              <q-menu anchor="bottom right" self="top right" :offset="[0, 8]">
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
                      <q-btn outline dense rounded color="primary" label="View Profile" class="w-full" />
                    </div>
                  </q-item>
                  <q-separator />
                  <q-item v-close-popup class="flex flex-col mt-2">
                    <div class="text-gray-800 font-medium text-base">Account</div>
                    <div class="text-gray-700 text-sm hover:underline cursor-pointer mt-3">Settings & Privacy</div>
                    <div class="text-gray-700 text-sm hover:underline cursor-pointer mt-3">Help</div>
                    <div class="text-gray-700 text-sm hover:underline cursor-pointer mt-3">Language</div>
                  </q-item>
                  <q-separator />
                  <q-item v-close-popup class="flex flex-col mt-2">
                    <div class="text-gray-800 font-medium text-base">Manage</div>
                    <div class="text-gray-700 text-sm hover:underline cursor-pointer mt-3">Posts & Activity</div>
                    <div class="text-gray-700 text-sm hover:underline cursor-pointer mt-3">My Posted Jobs</div>
                  </q-item>
                  <q-separator />
                  <q-item v-close-popup class="flex flex-col mt-2">
                    <div class="text-gray-700 text-sm hover:underline cursor-pointer">Sign out</div>
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
              <q-card class="fixed bottom-0 right-0 bg-white w-full rounded-l-xl q-override" style="max-width: 380px; top: 57px">
                <q-toolbar class="flex justify-end">
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

export default defineComponent({
  name: 'AppHeader',
  components: {
    NavbarItem,
    NavbarItemDropdown
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
      workSidebar.value || searchFocus.value === true ? await root.$store.dispatch('global/setTint', true) : await root.$store.dispatch('global/setTint', false)
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
