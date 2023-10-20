import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import InputPassword from './InputPassword/InputPassword'

const meta: Meta<typeof InputPassword> = {
  component: InputPassword,
  render: ({ ...args }) => (
    <div style={{ maxWidth: '490px' }}>
      <InputPassword {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof InputPassword>

export const input: Story = {
  args: {
    label: 'Password',
    placeholder: 'placeholder',
    description: 'description',
  },
}

export const inputWithErrorBoolean: Story = {
  args: {
    label: 'Password',
    placeholder: 'placeholder',
    description: 'description',
    error: true,
  },
}
export const inputWithErrorString: Story = {
  args: {
    label: 'Password',
    placeholder: 'placeholder',
    description: 'description',
    error: 'error',
  },
}

export const inputWithCustomOrder: Story = {
  args: {
    label: 'Button',
    placeholder: 'placeholder',
    description: 'description',
    inputWrapperOrder: ['label', 'description', 'input', 'error'],
  },
}
