import { Button, Input, inputTypes } from '../index';

import { StoryFn } from '@storybook/react';

import type { Meta } from '@storybook/react';
import '../../../index.css';

export default {
  title: 'Input',
  component: Input,
} as Meta<typeof Input>;

const STATES = [
  { type: inputTypes.text, labelText: 'Text', commentTip: 'commentTip' },
  { type: inputTypes.phone, labelText: 'Phone' },
  { type: inputTypes.email, labelText: 'Email' },
  { type: inputTypes.password, labelText: 'Password', isPassword: true },
  { type: inputTypes.text, labelText: 'Error', isError: true },
  { type: inputTypes.text, labelText: 'Required', isRequired: true },
  { type: inputTypes.text, labelText: 'Disabled', isDisabled: true },
];
export const All: StoryFn<typeof Button> = () => (
  <div style={{ display: 'grid', gap: '20px' }}>
    {STATES.map((props, index) => (
      <Input key={index} {...props} />
    ))}
  </div>
);
