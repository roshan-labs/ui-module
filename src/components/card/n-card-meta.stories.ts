import type { Meta, Story } from '@storybook/vue3'

import NAvatar from '../avatar/n-avatar.vue'
import NCard from './n-card.vue'
import NCardMeta from './n-card-meta.vue'

const meta: Meta = {
  title: '设计系统/数据展示/卡片元信息 CardMeta',
  component: NCardMeta,
  decorators: [() => ({ template: '<div class="w-[300px]"><story /></div>' })],
}

export default meta

export const Default: Story = (args) => ({
  components: {
    NCard,
    NCardMeta,
    NAvatar,
  },
  setup: () => ({ args }),
  template: `
    <n-card>
      <n-card-meta v-bind="args">
        <template #avatar>
          <n-avatar src="https://joeschmoe.io/api/v1/jess" />
        </template>
      </n-card-meta>
    </n-card>
  `,
})
Default.args = {
  title: '元信息标题',
}
