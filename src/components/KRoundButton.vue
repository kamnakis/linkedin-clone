<template>
  <div
    @click="$emit('click')"
    class="select-none flex justify-center items-center cursor-pointer rounded-full px-4 py-1 transition-all duration-150 border-inner text-brand font-medium text-center pressed hover:bg-brand hover:bg-opacity-10"
    :style="{ 'box-shadow': flat ? 'inset 0px 0px 0px 0px' : 'inset 0px 0px 0px 1px' }"
  >
    <q-icon v-if="icon" :name="icon" class="mr-2" size="1.25rem" />
    <div class="tracking-wide">{{ label }}</div>
    <q-icon v-if="secondaryIcon" :name="secondaryIcon" size="1.25rem" />
  </div>
</template>

<script>
export default {
  name: 'KRoundButton',
  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    secondaryIcon: {
      type: String,
      default: ''
    },
    flat: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.border-inner:hover {
  box-shadow: inset 0px 0px 0px 2px !important;
}

.pressed:active {
  filter: brightness(60%)
}
</style>
