import type { Meta, StoryObj } from '@storybook/react'

import Textarea from './Textarea'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  render: ({ ...args }) => (
    <div style={{ maxWidth: '490px' }}>
      <Textarea {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof Textarea>

export const textarea: Story = {
  args: {
    label: 'Textarea',
    description: 'description',
    placeholder: 'placeholder',
    minRows: 4,
  },
}
