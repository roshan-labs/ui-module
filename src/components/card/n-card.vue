<template>
  <div
    :class="[
      'text-base text-content leading-base bg-white rounded-base',
      bordered ? 'border-1 border-solid border-[rgba(0,0,0,0.06)]' : '',
    ]"
  >
    <div
      v-if="title || $slots.title"
      :class="[
        'flex items-center font-medium border-b border-solid border-[rgba(0,0,0,0.06)] mb-[-1px]',
        size === 'small' ? 'px-sm' : 'text-lg px-lg',
      ]"
    >
      <div :class="['flex-1', size === 'small' ? 'py-xs' : 'py-md']">
        <slot name="title">{{ title }}</slot>
      </div>
      <div
        v-if="$slots.extra"
        :class="['text-base font-normal', size === 'small' ? 'py-xs' : 'py-md']"
      >
        <slot name="extra" />
      </div>
    </div>
    <div
      v-if="$slots.cover"
      class="mt-[-1px] mr-[-1px] ml-[-1px] overflow-hidden rounded-tr-base rounded-tl-base children:(block w-full)"
    >
      <slot name="cover" />
    </div>
    <div :class="[size === 'small' ? 'p-sm' : 'p-lg']" :style="bodyStyle">
      <slot />
    </div>
    <ul v-if="$slots.actions" class="flex border-t border-solid border-[rgba(0,0,0,0.06)]">
      <li
        v-for="(item, index) in actionChilds"
        :key="index"
        class="flex justify-center leading-[22px] my-sm text-[#00000073] cursor-pointer transition-colors duration-300 hover:text-primary-6 not-last:(border-r border-solid border-[rgba(0,0,0,0.06)])"
        :style="actionStyle"
      >
        <n-icon v-if="(item as any).key" :size="16">
          <component :is="item" />
        </n-icon>
        <component :is="item" v-else />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, StyleValue } from 'vue'
import { shallowRef, computed, useSlots, onUpdated } from 'vue'

import NIcon from '../icon/n-icon.vue'
import { filterChildren } from '../utils/utils'

defineProps({
  /** 内容区域自定义样式 */
  bodyStyle: { type: [String, Object, Array] as PropType<StyleValue> },
  /** 是否有边框 */
  bordered: { type: Boolean, default: true },
  /** 尺寸 */
  size: { type: String as PropType<'default' | 'small'>, default: 'default' },
  /** 卡片标题 */
  title: { type: String, default: '' },
})

// actions
const slots = useSlots()
const getActionChilds = () => filterChildren(slots.actions?.())
const actionChilds = shallowRef(getActionChilds())
const actionStyle = computed<StyleValue>(() => ({
  width: `${(1 / actionChilds.value.length) * 100}%`,
}))

onUpdated(() => {
  if (slots.actions) {
    actionChilds.value = getActionChilds()
  }
})
</script>
