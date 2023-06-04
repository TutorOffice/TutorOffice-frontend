import '../../../index.css';

import Checkbox from './Checkbox';

import { validateType } from '../index';
import CheckboxForm from '../../../components/checkbox/Checkbox';

import { StoryFn } from '@storybook/react';

import type { Meta } from '@storybook/react';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const Checkboxes: StoryFn<typeof Checkbox> = () => (
  <CheckboxForm>
    <Checkbox name='student' RegisterName={validateType.userType} TextValue='Ученик' type='radio' id='student' />
    <Checkbox name='tutor' RegisterName={validateType.userType} TextValue='Преподаватель' type='radio' id='tutor' />
  </CheckboxForm>
);
