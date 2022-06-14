import type { Meta, Story } from '@storybook/vue3'

import NCard from './n-card.vue'
import NCardGrid from './n-card-grid.vue'

const meta: Meta = {
  title: '设计系统/数据展示/卡片网格 CardGrid',
  component: NCardGrid,
  decorators: [() => ({ template: '<div class="w-1/2"><story /></div>' })],
}

export default meta

export const Default: Story = (args) => ({
  components: {
    NCard,
    NCardGrid,
  },
  setup: () => ({ args }),
  template: `
    <n-card title="内嵌网格卡片">
      <n-card-grid class="text-center" v-for="n in 5" :key="n" v-bind="args">网格</n-card-grid>
    </n-card>
  `,
})
