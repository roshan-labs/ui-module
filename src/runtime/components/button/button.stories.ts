import type { Meta, Story } from '@storybook/vue3'

import NButton from './button.vue'
import IconSearchOutlined from '~icons/ant-design/search-outlined'

const meta: Meta = {
  title: 'design-system/Button',
  component: NButton,
  argTypes: {
    // Events
    onClick: {
      description: '点击按钮时的回调',
      action: 'click',
    },
    // Props
    type: {
      description: '按钮类型',
      control: { type: 'select' },
      options: ['default', 'primary', 'dashed', 'text', 'link'],
    },
    block: {
      description: '将按钮宽度调整为其父宽度的选项',
    },
    danger: {
      description: '设置危险按钮',
    },
    disabled: {
      description: '按钮失效状态',
    },
    ghost: {
      description: '幽灵属性，使按钮背景透明',
    },
    href: {
      description: '点击跳转的地址，指定此属性 button 的行为和 a 链接一致',
    },
    htmlType: {
      description: '设置 button 原生 type 值',
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    shape: {
      description: '设置按钮形状',
      control: { type: 'select' },
      options: ['default', 'circle', 'round'],
    },
    size: {
      description: '设置按钮大小',
      control: { type: 'select' },
      options: ['large', 'middle', 'small'],
    },
    target: {
      description: '相当于 a 链接的 target 属性，href 存在时生效',
    },
  },
}

const Template: Story = (args) => ({
  components: { NButton },
  setup() {
    return { args }
  },
  template: '<n-button v-bind="args">{{ args.default }}</n-button>',
})

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  default: 'Button',
}

export const Primary = Template.bind({})
Primary.args = {
  ...Default.args,
  type: 'primary',
}

export const Dashed = Template.bind({})
Dashed.args = {
  ...Default.args,
  type: 'dashed',
}

export const Text = Template.bind({})
Text.args = {
  ...Default.args,
  type: 'text',
}

export const Link = Template.bind({})
Link.args = {
  ...Default.args,
  type: 'link',
}

export const Block = Template.bind({})
Block.args = {
  ...Primary.args,
  block: true,
}

export const Danger: Story = (args) => ({
  components: { NButton },
  setup: () => ({ args }),
  template: `
    <div class="children:mr-[8px]">
      <n-button v-bind="args" type="primary" danger>Primary</n-button>
      <n-button v-bind="args" danger>Default</n-button>
      <n-button v-bind="args" type="dashed" danger>Dashed</n-button>
      <n-button v-bind="args" type="text" danger>Text</n-button>
      <n-button v-bind="args" type="link" danger>Link</n-button>
    </div>
  `,
})

export const Disabled: Story = (args) => ({
  components: { NButton },
  setup: () => ({ args }),
  template: `
    <div class="children:(block mb-[8px])">
      <n-button v-bind="args" type="primary">Primary(disabled)</n-button>
      <n-button v-bind="args">Default(disabled)</n-button>
      <n-button v-bind="args" type="dashed">Dashed(disabled)</n-button>
      <n-button v-bind="args" type="text">Text(disabled)</n-button>
      <n-button v-bind="args" type="link">Link(disabled)</n-button>
      <n-button v-bind="args" danger>Danger Default(disabled)</n-button>
      <n-button v-bind="args" type="text" danger>Danger Text(disabled)</n-button>
      <n-button v-bind="args" type="link" danger>Danger Link(disabled)</n-button>
    </div>
  `,
})
Disabled.args = {
  disabled: true,
}

export const Ghost: Story = (args) => ({
  components: { NButton },
  setup: () => ({ args }),
  template: `
    <div class="bg-gray-400 p-md children:mr-[8px]">
      <n-button v-bind="args" type="primary">Primary Button</n-button>
      <n-button v-bind="args">Default Button</n-button>
      <n-button v-bind="args" type="dashed">Dashed Button</n-button>
      <n-button v-bind="args" type="primary" danger>Primary Danger</n-button>
    </div>
  `,
})
Ghost.args = {
  ghost: true,
}

export const Href = Template.bind({})
Href.args = {
  default: 'Baidu',
  type: 'link',
  href: 'https://www.baidu.com',
}

export const HtmlType = Template.bind({})
HtmlType.args = {
  ...Primary.args,
  htmlType: 'button',
}

export const Shape: Story = (args) => ({
  components: {
    NButton,
    IconSearchOutlined,
  },
  setup: () => ({ args }),
  template: `
    <div class="children:mr-[8px]">
      <n-button v-bind="args" type="primary">A</n-button>
      <n-button v-bind="args">A</n-button>
      <n-button v-bind="args" type="dashed">A</n-button>
      <n-button v-bind="args" type="primary">
        <template #icon>
          <icon-search-outlined />
        </template>
      </n-button>
      <n-button v-bind="args">
        <template #icon>
          <icon-search-outlined />
        </template>
      </n-button>
      <n-button v-bind="args" type="dashed">
        <template #icon>
          <icon-search-outlined />
        </template>
      </n-button>
    </div>
  `,
})
Shape.args = {
  shape: 'circle',
}

export const Size: Story = (args) => ({
  components: { NButton },
  setup: () => ({ args }),
  template: `
    <div class="mb-[16px] children:mr-[8px]">
      <n-button v-bind="args" type="primary">Button</n-button>
      <n-button v-bind="args">Button</n-button>
      <n-button v-bind="args" type="dashed">Button</n-button>
      <n-button v-bind="args" type="link">Button</n-button>
    </div>
    <div class="children:mr-[8px]">
      <n-button v-bind="args" type="primary">A</n-button>
      <n-button v-bind="args" type="primary" shape="circle">A</n-button>
      <n-button v-bind="args" type="primary" shape="round">A</n-button>
      <n-button v-bind="args" type="primary" shape="round">Button</n-button>
    </div>
  `,
})
Size.args = {
  size: 'large',
}

export const Target = Template.bind({})
Target.args = {
  ...Href.args,
  target: '_blank',
}

export const Icon: Story = (args) => ({
  components: {
    NButton,
    IconSearchOutlined,
  },
  setup: () => ({ args }),
  template: `
    <div>
      <n-button v-bind="args">
        <template #icon>
          <icon-search-outlined />
        </template>
        search
      </n-button>
    </div>
  `,
})
Icon.args = {
  type: 'primary',
}

export default meta
