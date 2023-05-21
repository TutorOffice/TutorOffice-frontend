import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';
import LoadImage from '../shared/ui/loadImage/LoadImage';
import userPhoto from '../assets/images/profile-photo.jpg';

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
