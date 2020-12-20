<template>
  <div v-if="visible">
    <div v-if="visible" class="fixed inset-0 bg-black z-50 opacity-75 pointer-events-none"></div>
    <q-dialog v-model="visible" transition-show="none" transition-hide="none">
      <q-card class="rounded-2xl fixed top-0 mt-10" style="min-width:552px">
        <q-card-section class="row items-center py-4">
          <div class="text-h6 font-normal text-gray-800">{{ title }}</div>
          <q-space />
          <q-btn icon="close" flat round dense @click="closeDialog()" />
        </q-card-section>
        <q-separator />
        <q-card-section class="p-0">
          <slot name="content"></slot>
        </q-card-section>
        <q-separator v-if="!hideBottom" />
        <q-card-section class="flex items-center justify-end" v-if="!hideBottom">
          <k-round-button label="Cancel" @click="closeDialog()" class="mr-2"></k-round-button>
          <q-btn
            label="Done"
            dense
            no-caps
            rounded
            class="bg-brand text-white px-3"
            disable
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import KRoundButton from 'src/components/KRoundButton.vue'

export default defineComponent({
  name: 'KDialog',
  components: { KRoundButton },
  props: {
    title: {
      type: String,
      default: ''
    },
    hideBottom: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const visible = ref(false)

    const openDialog = () => {
      visible.value = true
      console.log('Open Dialog', visible.value)
    }

    const closeDialog = () => {
      visible.value = false
      console.log('Close Dialog', visible.value)
    }

    return {
      visible,
      closeDialog,
      openDialog
    }
  }
})
</script>
