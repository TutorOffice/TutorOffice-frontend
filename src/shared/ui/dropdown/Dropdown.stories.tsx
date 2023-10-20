import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Dropdown from './Dropdown'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  render: ({ ...args }) => (
    <div style={{ maxWidth: '490px' }}>
      <Dropdown {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof Dropdown>

const options = [
  {
    label: 'Apple 🍎',
    value: 'Apple 🍎',
  },
  {
    label: 'Orange 🍊',
    value: 'Orange 🍊',
  },
  {
    label: 'Banana 🍌',
    value: 'Banana 🍌',
  },
]

export const dropdown: Story = {
  args: {
    options,
  },
}
