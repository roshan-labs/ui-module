import type { Meta, Story } from '@storybook/vue3'

import NCard from './n-card.vue'
import NCardMeta from './n-card-meta.vue'

const meta: Meta = {
  title: '设计系统/数据展示/卡片元信息 CardMeta',
  component: NCardMeta,
}

export default meta

export const Default: Story = (args) => ({
  components: {
    NCard,
    NCardMeta,
  },
  setup: () => ({ args }),
  template: ``,
})
