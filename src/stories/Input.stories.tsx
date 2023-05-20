import type { Meta, StoryObj } from '@storybook/react';
import { Input, inputTypes } from '../shared/ui';
import '../index.css';

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultInput: Story = {
  args: {
    type: inputTypes.text,
  },
};
