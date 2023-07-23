import { validateType } from '@/shared/validation';
import '../../../index.css';

import Radio from './Radio';

import type { Meta } from '@storybook/react';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Radio',
  component: Radio,
} as Meta<typeof Radio>;

const radioItems=[
	{ id: 1, value: 'tutor', text: 'Преподаватель' },
	{ id: 2, value: 'student', text: 'Ученик' },
]

export const Radios: StoryFn<typeof Radio> = () => (
	<Radio radioItems={radioItems} name={validateType.userRole} />
);
