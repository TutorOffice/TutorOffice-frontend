import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';
import Checkbox from '../shared/ui/checkbox/Checkbox';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultCheckbox: Story = {
  // @ts-ignore
  args: {},
};
