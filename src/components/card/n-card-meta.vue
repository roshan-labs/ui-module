<template>
  <div class="flex -my-xss">
    <div v-if="$slots.avatar" class="pr-md">
      <slot name="avatar" />
    </div>
    <div v-if="title || $slots.title || description || $slots.description" class="overflow-hidden">
      <div
        v-if="title || $slots.title"
        class="text-lg font-medium text-content whitespace-nowrap overflow-ellipsis overflow-hidden not-last:mb-xs"
      >
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="description || $slots.description" class="text-[#00000073]">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  /** 标题 */
  title: { type: String, default: '' },
  /** 描述内容 */
  description: { type: String, default: '' },
})
</script>
