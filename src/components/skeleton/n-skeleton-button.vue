<template>
  <div
    :class="[
      'inline-block rounded-base align-top',
      active
        ? 'relative bg-white overflow-hidden after:(content-[attr(data-content)] absolute inset-y-0 -inset-x-[150%] bg-skeleton animate-skeleton-loading)'
        : 'bg-[rgba(190,190,190,0.2)]',
      shape === 'circle' ? 'w-base rounded-1/2' : block ? 'w-full' : 'w-[64px]',
      shape === 'round' ? 'rounded-full' : '',
      size === 'default' ? 'w-[64px] h-base' : '',
      size === 'small' ? 'w-[48px] h-sm' : '',
      size === 'large' ? 'w-[80px] h-lg' : '',
    ]"
    data-content=""
  ></div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

defineProps({
  /** 是否展示动画效果 */
  active: { type: Boolean, default: false },
  /** 将按钮宽度调整为其父宽度的选项 */
  block: { type: Boolean, default: false },
  /** 指定按钮的形状 */
  shape: { type: String as PropType<'default' | 'circle' | 'round'>, default: 'default' },
  /** 设置按钮的大小 */
  size: { type: String as PropType<'default' | 'small' | 'large'>, default: 'default' },
})
</script>
