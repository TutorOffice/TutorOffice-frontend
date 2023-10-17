import '../../../index.css'

import type { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

import Checkbox from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>

export const Checkboxes: StoryFn<typeof Checkbox> = () => <Checkbox />
