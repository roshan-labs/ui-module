<template>
  <div class="flex my-[-4px]">
    <div v-if="$slots.avatar" class="mr-md">
      <slot name="avatar" />
    </div>
    <div v-if="title || $slots.title" class="overflow-hidden">
      <div v-if="title || $slots.title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  /** 标题 */
  title: { type: String, default: '' },
})
</script>
