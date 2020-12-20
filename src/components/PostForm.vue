<template>
  <div class="border border-gray-400 rounded-xl overflow-hidden bg-white pt-3 pb-1 px-4 flex">
    <q-btn icon="create" :ripple="false" no-caps label="Start a post" rounded outline align="left" class="w-full text-gray-600 py-2 text-md" @click="createPostDialog.openDialog()" />
    <k-dialog ref="createPostDialog" title="Create a post" :hideBottom="true">
      <template v-slot:content>
        <div class="flex flex-col p-4">
          <!-- Profile Section -->
          <div class="flex">
            <q-avatar size="52px" class="mr-2">
              <img :src="$store.getters['auth/user'].profilePicture" alt="profile" class="object-center object-cover" />
            </q-avatar>
            <div class="flex flex-col">
              <div class="font-medium text-gray-800">
                {{ $store.getters["auth/user"].fullName }}
              </div>
              <k-round-button label="Anyone" icon="public" secondaryIcon="arrow_drop_down" class="text-darkgray hover:bg-gray-700" />
            </div>
          </div>
          <!-- Text Area -->
          <textarea v-model="postText" id="createPostTextArea" class="w-full mt-4 focus:outline-none" placeholder="What do you want to talk about?" rows="6"></textarea>
          <!-- Tools -->
          <!-- Hashtag shortcut -->
          <div class="flex items-center">
            <div class="font-medium select-none text-brand active:text-blue-900 hover:bg-brand hover:bg-opacity-25 rounded-sm px-2 py-1 cursor-pointer">Add hashtag</div>
            <div class="font-light text-darkgray ml-4">Help the right people see your post</div>
          </div>
          <!-- Toolbar -->
          <div class="flex justify-between items-center mt-2">
            <div class="flex items-center space-x-1">
              <q-icon
                name="add"
                size="sm"
                class="hover:bg-opacity-10 active:bg-opacity-25 active:text-gray-900 rounded-full p-2 cursor-pointer"
                :class="{'hover:bg-brand text-brand' : boilerplateOptions, 'hover:bg-darkgray text-darkgray' : !boilerplateOptions}"
                @click="boilerplateOptions = !boilerplateOptions"
              />
              <q-icon
                name="panorama"
                size="sm"
                class="hover:bg-darkgray hover:bg-opacity-10 active:bg-opacity-25 active:text-gray-900 text-darkgray rounded-full p-2 cursor-pointer"
                @click="createPostDialog.closeDialog();postPhotoDialog.openDialog()"
              />
              <q-icon
                name="movie_creation"
                size="sm"
                class="hover:bg-darkgray hover:bg-opacity-10 active:bg-opacity-25 active:text-gray-900 text-darkgray rounded-full p-2 cursor-pointer"
                @click="createPostDialog.closeDialog();postVideoDialog.openDialog()"
              />
              <q-icon
                name="description"
                size="sm"
                class="hover:bg-darkgray hover:bg-opacity-10 active:bg-opacity-25 active:text-gray-900 text-darkgray rounded-full p-2 cursor-pointer"
                @click="createPostDialog.closeDialog();postDocumentDialog.openDialog()"
              />
            </div>
            <button :disabled="postText === ''" class="rounded-full focus:outline-none bg-brand disabled:bg-gray-500 hover:bg-blue-800 transition-colors duration-150 active:bg-black active:text-gray-700 text-white font-medium px-3 py-1">Post</button>
          </div>
          <!-- Plus icon toolset -->
          <div :class="{'hidden' : !boilerplateOptions}" class="top-arrow py-4 px-6 gap-2 grid grid-cols-2 grid-flow-row -mx-4 -mb-4">
            <k-round-button
              v-for="(option, index) in boilerplateOptionsObject"
              :label="option"
              :key="index"
              class="bg-white text-darkgray hover:text-brand"
              flat
            >
            </k-round-button>
          </div>
        </div>
      </template>
    </k-dialog>
    <div class="w-full mt-1 flex items-center justify-around">
      <k-button label="Photo" icon="panorama" class="text-blue-500" @click="postPhotoDialog.openDialog()"></k-button>
      <k-dialog ref="postPhotoDialog" title="Edit your photo">
        <template v-slot:content>
          <div class="flex items-center justify-center py-8">
            <label
              class="text-brand font-medium tracking-wide hover:bg-brand hover:bg-opacity-10 transition-colors duration-150 rounded-lg cursor-pointer px-3 py-2">
              Select images to share
              <input type="file" class="hidden" />
            </label>
          </div>
        </template>
      </k-dialog>

      <k-button label="Video" icon="movie_creation" class="text-yellow-600" @click="postVideoDialog.openDialog()"></k-button>
      <k-dialog ref="postVideoDialog" title="Select/Edit your video">
        <template v-slot:content>
          <div class="flex items-center justify-center py-8">
            <label
              class="text-brand font-medium tracking-wide hover:bg-brand hover:bg-opacity-10 transition-colors duration-150 rounded-lg cursor-pointer px-3 py-2">
              Select video to share
              <input type="file" class="hidden" />
            </label>
          </div>
        </template>
      </k-dialog>

      <k-button label="Document" icon="description" class="text-red-400" @click="postDocumentDialog.openDialog()"></k-button>
      <k-dialog ref="postDocumentDialog" title="Share your document">
        <template v-slot:content>
          <div class="p-4">
            <label class="inline-flex">
              <k-round-button label="Choose file"></k-round-button>
              <input type="file" class="hidden" />
            </label>
            <div class="my-5">Or upload from the cloud:</div>
            <div class="flex space-x-3 items-center">
              <k-round-button label="Dropbox" icon="fab fa-dropbox" class="py-2 text-darkgray hover:bg-gray-700"></k-round-button>
              <k-round-button label="OneDrive" icon="fas fa-cloud-upload-alt" class="py-2 text-darkgray hover:bg-gray-700"></k-round-button>
              <k-round-button label="Google Drive" icon="fab fa-google-drive" class="py-2 text-darkgray hover:bg-gray-700"></k-round-button>
            </div>
            <div class="mt-6 text-blue-800 font-medium">
              <q-icon name="info" /> For accessibility purposes, LinkedIn members who can view your post will be able to download your document as a PDF. <span class="underline">Learn more</span>
            </div>
          </div>
        </template>
      </k-dialog>

      <k-button label="Write article" icon="article" class="text-green-500" @click="$router.push('/post/new')"></k-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import KButton from 'src/components/KButton.vue'
import KRoundButton from 'src/components/KRoundButton.vue'
import KDialog from 'src/components/KDialog.vue'

export default defineComponent({
  name: 'PostForm',
  components: {
    KButton,
    KRoundButton,
    KDialog
  },
  setup () {
    const createPostDialog = ref<typeof KDialog | null>(null)
    const postText = ref('')
    const boilerplateOptions = ref(true)
    const boilerplateOptionsObject = ref([
      'Celebrate an occasion',
      'Share that you\'re hiring',
      'Find an expert',
      'Create a poll',
      'Add a profile',
      'Offer help'
    ])
    const postPhotoDialog = ref<typeof KDialog | null>(null)
    const postVideoDialog = ref<typeof KDialog | null>(null)
    const postDocumentDialog = ref<typeof KDialog | null>(null)

    return {
      createPostDialog,
      postText,
      boilerplateOptions,
      boilerplateOptionsObject,
      postPhotoDialog,
      postVideoDialog,
      postDocumentDialog
    }
  }
})
</script>

<style lang="scss">
#createPostTextArea {
  resize: none;
}

.top-arrow {
  position: relative;
  margin-top: 15px;
  background: #eceae5;
}

.top-arrow::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 21px;
  margin-top: -15px;
  height: 0px;
  width: 0px;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid #eceae5;
}
</style>
