import type { Meta, StoryObj } from '@storybook/react';
import { btnClass, btnType, Button } from '../shared/ui';
import { withRouter } from 'storybook-addon-react-router-v6';
import '../index.css';

const meta = {
  title: 'Button',
  component: Button,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const buttonPrimary: Story = {
  args: {
    variant: btnClass.primary,
    children: 'Click me',
    type: btnType.button,
  },
};

export const buttonGhost: Story = {
  args: {
    variant: btnClass.ghost,
    children: 'Click me',
    type: btnType.button,
  },
};

export const buttonBack: Story = {
  args: {
    variant: btnClass.back,
    children: 'Click me',
    type: btnType.button,
  },
};
