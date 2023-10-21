import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import LoadImage from './LoadImage'

const meta: Meta<typeof LoadImage> = {
  component: LoadImage,
  render: ({ ...args }) => (
    <div style={{ maxWidth: '490px' }}>
      <LoadImage {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof LoadImage>

export const loadImage: Story = {
  args: {
    image:
      'https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  },
}
