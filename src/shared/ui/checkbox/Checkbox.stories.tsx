import '../../../index.css';

import Checkbox from './Checkbox';

import CheckboxForm from '../../../components/checkbox/Checkbox';

import type { Meta } from '@storybook/react';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const Checkboxes: StoryFn<typeof Checkbox> = () => (
  <CheckboxForm>
    <Checkbox text='Ученик' name='student' type='radio' id='student' />
    <Checkbox text='Преподователь' name='tutor' type='radio' id='tutor' />
  </CheckboxForm>
);
