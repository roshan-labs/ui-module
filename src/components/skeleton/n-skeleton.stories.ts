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

export const Title = Default.bind({})
Title.args = {
  title: { width: '50%' },
}

export const Paragraph = Default.bind({})
Paragraph.args = {
  paragraph: {
    rows: 5,
    width: '50%',
  },
}

export const ParagraphConfig = Default.bind({})
ParagraphConfig.args = {
  paragraph: {
    rows: 5,
    width: ['10%', '20%', '30%', '40%', 100],
  },
}

export const Round = Default.bind({})
Round.args = {
  round: true,
}

export const Avatar = Default.bind({})
Avatar.args = {
  avatar: true,
}

export const AvatarWithParagraph = Default.bind({})
AvatarWithParagraph.args = {
  ...Avatar.args,
  paragraph: { width: 100 },
}

export const Active = Default.bind({})
Active.args = {
  active: true,
}
