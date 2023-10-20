import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Select from './Select'

const meta: Meta<typeof Select> = {
  component: Select,
  render: ({ ...args }) => (
    <div style={{ maxWidth: '490px' }}>
      <Select {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof Select>

const options = [
  {
    label: 'Феофанов Алексей',
    value: 'Феофанов Алексей',
  },
  {
    label: 'Никита Ок',
    value: 'Никита Ок',
  },
  {
    label: 'Коля Да',
    value: 'Коля Да',
  },
  {
    label: 'Максон Опа',
    value: 'Максон Опа',
  },
  {
    label: 'А это кто а',
    value: 'А это кто а',
  },
]

export const select: Story = {
  args: {
    label: 'Button',
    options,
    placeholder: 'placeholder',
    description: 'description',
    error: '',
  },
}
export const selectWithError: Story = {
  args: {
    ...select.args,
    error: true,
  },
}
