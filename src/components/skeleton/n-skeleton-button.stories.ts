import type { Meta, Story } from '@storybook/vue3'

import NSkeletonButton from './n-skeleton-button.vue'

const meta: Meta = {
  title: '设计系统/反馈/占位图形按钮 SkeletonButton',
  component: NSkeletonButton,
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['default', 'circle', 'round'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
    },
  },
}

export default meta

export const Default: Story = (args) => ({
  components: { NSkeletonButton },
  setup: () => ({ args }),
  template: '<n-skeleton-button v-bind="args" />',
})

export const Active = Default.bind({})
Active.args = {
  active: true,
}

export const Block = Default.bind({})
Block.args = {
  block: true,
}

export const Shape = Default.bind({})
Shape.args = {
  shape: 'round',
}

export const Size = Default.bind({})
Size.args = {
  size: 'large',
}
