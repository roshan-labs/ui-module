<template>
  <div class="flex">
    <!-- CONTENT -->
    <div class="flex-1">
      <!-- TITLE -->
      <h3
        v-if="title"
        class="h-[16px] bg-[rgba(190,190,190,0.2)] rounded-[4px]"
        :style="titleWidth"
      ></h3>
      <!-- PARAGRAPH -->
      <ul v-if="paragraph" :class="[title ? 'mt-lg' : '']">
        <li
          v-for="(item, index) in rows"
          :key="index"
          class="h-[16px] bg-[rgba(190,190,190,0.2)] rounded-[4px] not-last:mb-md"
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
import type { SkeletonTitle, SkeletonParagraph } from './types'

const props = defineProps({
  /** 是否显示段落占位图 */
  paragraph: { type: [Boolean, Object] as PropType<boolean | SkeletonParagraph>, default: true },
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
    const result = Array.from({
      length: typeof props.paragraph.rows === 'number' ? props.paragraph.rows : 3,
    })
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

  return Array.from({ length: 3 }).map((_, index, array) =>
    index === array.length - 1 ? { width: '61%' } : { width: '' }
  )
})
</script>
