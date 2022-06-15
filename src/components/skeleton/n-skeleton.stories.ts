import type { Meta, Story } from '@storybook/vue3'

import NSkeleton from './n-skeleton.vue'

const meta: Meta = {
  title: '设计系统/反馈/骨架屏 Skeleton',
  component: NSkeleton,
}

export default meta

export const Default: Story = (args) => ({
  components: { NSkeleton },
  setup: () => ({ args }),
  template: '<n-skeleton v-bind="args" />',
})
