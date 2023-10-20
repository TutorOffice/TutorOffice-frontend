import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  render: ({ ...args }) => (
    <div style={{ maxWidth: '490px' }}>
      <Checkbox {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const checkbox: Story = {
  args: {
    label: 'Password',
    description: 'description',
  },
}
export const checkboxWithError: Story = {
  args: {
    label: 'Password',
    description: 'description',
    error: 'error',
  },
}
