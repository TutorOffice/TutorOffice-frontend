import '../../../index.css';

import Checkbox from './Checkbox';

import type { Meta } from '@storybook/react';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const Checkboxes: StoryFn<typeof Checkbox> = () => (
    <Checkbox />
);
