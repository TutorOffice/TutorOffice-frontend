import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Input from './Input'

const meta: Meta<typeof Input> = {
  component: Input,
  render: ({ ...args }) => (
    <div style={{ maxWidth: '490px' }}>
      <Input {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof Input>

export const input: Story = {
  args: {
    label: 'Input',
    placeholder: 'placeholder',
    description: 'description',
  },
}

export const inputWithErrorBoolean: Story = {
  args: {
    label: 'Input',
    placeholder: 'placeholder',
    description: 'description',
    error: true,
  },
}
export const inputWithErrorString: Story = {
  args: {
    label: 'Input',
    placeholder: 'placeholder',
    description: 'description',
    error: 'error',
  },
}

export const inputWithCustomOrder: Story = {
  args: {
    label: 'Input',
    placeholder: 'placeholder',
    description: 'description',
    inputWrapperOrder: ['label', 'description', 'input', 'error'],
  },
}
