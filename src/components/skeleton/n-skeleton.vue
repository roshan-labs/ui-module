<template>
  <div class="flex">
    <!-- AVATAR -->
    <div v-if="avatar" class="mr-md">
      <n-skeleton-avatar size="large" />
    </div>
    <!-- CONTENT -->
    <div class="flex-1">
      <!-- TITLE -->
      <h3
        v-if="title"
        :class="[
          'h-[16px] bg-[rgba(190,190,190,0.2)]',
          round ? 'rounded-full' : 'rounded-[4px]',
          avatar ? 'mt-sm' : '',
        ]"
        :style="titleWidth"
      ></h3>
      <!-- PARAGRAPH -->
      <ul v-if="paragraph" :class="[title ? 'mt-lg' : '']">
        <li
          v-for="(item, index) in rows"
          :key="index"
          :class="[
            'h-[16px] bg-[rgba(190,190,190,0.2)] not-last:mb-md',
            round ? 'rounded-full' : 'rounded-[4px]',
          ]"
          :style="item"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, StyleValue } from 'vue'
import { computed } from 'vue'

import { addUnit } from '../utils/utils'
import type { SkeletonTitle, SkeletonParagraph, SkeletonAvatar } from './types'
import NSkeletonAvatar from './n-skeleton-avatar.vue'

const props = defineProps({
  /** 是否展示动画效果 */
  active: { type: Boolean, default: false },
  /** 是否显示头像占位图 */
  avatar: { type: [Boolean, Object] as PropType<boolean | SkeletonAvatar>, default: false },
  /** 是否显示段落占位图 */
  paragraph: { type: [Boolean, Object] as PropType<boolean | SkeletonParagraph>, default: true },
  /** 段落和标题显示圆角 */
  round: { type: Boolean, default: false },
  /** 是否显示标题占位图 */
  title: { type: [Boolean, Object] as PropType<boolean | SkeletonTitle>, default: true },
})

// Title
const titleWidth = computed<StyleValue>(() => {
  let width = '38%'

  if (typeof props.title === 'object') {
    width = addUnit(props.title.width) ?? width
  }

  return { width }
})

// Paragraph
const rows = computed(() => {
  if (typeof props.paragraph === 'object') {
    const length =
      typeof props.paragraph.rows === 'number' ? props.paragraph.rows : props.avatar ? 2 : 3
    const result = Array.from({ length })
    const { width } = props.paragraph

    return result.map((_, index, array) => {
      if (typeof width === 'number' || typeof width === 'string') {
        return index === array.length - 1 ? { width: addUnit(width) } : { width: '' }
      }

      if (Array.isArray(width)) {
        const value = width[index]

        return index === array.length - 1
          ? { width: typeof value !== 'undefined' ? addUnit(value) : '61%' }
          : { width: typeof value !== 'undefined' ? addUnit(value) : '' }
      }

      return index === array.length - 1 ? { width: '61%' } : { width: '' }
    })
  }

  return Array.from({ length: props.avatar ? 2 : 3 }).map((_, index, array) =>
    index === array.length - 1 ? { width: '61%' } : { width: '' }
  )
})
</script>
