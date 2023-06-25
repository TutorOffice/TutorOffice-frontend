import '../../../index.css';

import Select from './Select';

import type { Meta } from '@storybook/react';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Select',
  component: Select,
} as Meta<typeof Select>;

export const Selects: StoryFn<typeof Select> = () => (
  <div style={{ width: '500px' }}>
    <Select />
    <div>123</div>
    <div>submit</div>
  </div>
);
