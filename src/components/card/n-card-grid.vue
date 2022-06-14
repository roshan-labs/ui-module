<template>
  <div
    :class="[
      'w-1/3 p-lg transition-all duration-300 shadow-card-grid',
      hoverable ? 'hover:(relative z-1 shadow-card-grid-hover)' : '',
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { inject, onMounted } from 'vue'

import { injectionKey } from './utils'

defineProps({
  /** 鼠标移过时可浮起 */
  hoverable: { type: Boolean, default: true },
})

const hasCardGrid = inject(injectionKey)

onMounted(() => {
  if (hasCardGrid) {
    hasCardGrid.value = true
  }
})
</script>
