import '../../../index.css';

import LoadImage from './LoadImage';

import userPhoto from '../../../assets/images/profile-photo.jpg';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'LoadImage',
  component: LoadImage,
} satisfies Meta<typeof LoadImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultLoadImage: Story = {
  args: {
    image: userPhoto,
  },
};
