import '../../../index.css';

import Select from './Select';

import type { Meta } from '@storybook/react';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Select',
  component: Select,
} as Meta<typeof Select>;

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
];

export const Selects: StoryFn<typeof Select> = () => (
  <div style={{ maxWidth: '500px' }}>
    <Select options={options} />
  </div>
);
