<template>
  <div
    :class="[
      'inline-block align-top',
      size === 'small' ? 'w-sm h-sm' : '',
      size === 'default' ? 'w-base h-base' : '',
      size === 'large' ? 'w-lg h-lg' : '',
      shape === 'circle' ? 'rounded-1/2' : '',
      active
        ? 'relative bg-white overflow-hidden after:(content-[attr(data-content)] absolute inset-y-0 -inset-x-[150%] bg-skeleton animate-skeleton-loading)'
        : 'bg-[rgba(190,190,190,0.2)]',
    ]"
    :style="style"
  ></div>
</template>

<script lang="ts" setup>
import type { PropType, StyleValue } from 'vue'
import { computed } from 'vue'

import type { Size } from '../utils/types'
import { addUnit } from '../utils/utils'

const props = defineProps({
  /** 是否展示动画效果，仅在单独使用头像骨架时生效 */
  active: { type: Boolean, default: false },
  /** 头像的形状 */
  shape: { type: String as PropType<'circle' | 'square'>, default: 'circle' },
  /** 头像占位图的大小 */
  size: { type: [Number, String] as PropType<number | Size>, default: 'default' },
})

const style = computed<StyleValue>(() => {
  if (typeof props.size === 'number') {
    const value = addUnit(props.size)

    return { width: value, height: value }
  }

  return ''
})
</script>
