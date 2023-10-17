import '../../../index.css'

import type { Meta, StoryObj } from '@storybook/react'

import userPhoto from '../../../assets/images/profile-photo.jpg'
import LoadImage from './LoadImage'

const meta = {
  title: 'LoadImage',
  component: LoadImage,
} satisfies Meta<typeof LoadImage>

export default meta
type Story = StoryObj<typeof meta>

export const defaultLoadImage: Story = {
  args: {
    image: userPhoto,
  },
}
