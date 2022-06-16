import type { Meta, Story } from '@storybook/vue3'

import NSkeletonAvatar from './n-skeleton-avatar.vue'

const meta: Meta = {
  title: '设计系统/反馈/骨架屏头像 SkeletonAvatar',
  component: NSkeletonAvatar,
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
    },
  },
}

export default meta

export const Default: Story = (args) => ({
  components: { NSkeletonAvatar },
  setup: () => ({ args }),
  template: '<n-skeleton-avatar v-bind="args" />',
})

export const Shape = Default.bind({})
Shape.args = {
  shape: 'square',
}

export const Size = Default.bind({})
Size.args = {
  size: 'large',
}

export const SizeByNumber = Default.bind({})
SizeByNumber.args = {
  size: 48,
}
