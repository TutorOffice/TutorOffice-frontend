import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import InputPhone from './InputPhone/InputPhone'

const meta: Meta<typeof InputPhone> = {
  component: InputPhone,
  render: ({ ...args }) => (
    <div style={{ maxWidth: '490px' }}>
      <InputPhone {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof InputPhone>

export const input: Story = {
  args: {
    label: 'Input',
    placeholder: 'placeholder',
    mask: '+7 000 000 00 00',
    description: 'description',
  },
}

export const inputWithErrorBoolean: Story = {
  args: {
    mask: '+7 000 000 00 00',
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
    mask: '+7 000 000 00 00',
  },
}

export const inputWithCustomOrder: Story = {
  args: {
    label: 'Input',
    placeholder: 'placeholder',
    description: 'description',
    inputWrapperOrder: ['label', 'description', 'input', 'error'],
    mask: '+7 000 000 00 00',
  },
}
