import '../../../index.css'

import type { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

import Dropdown from '@/shared/ui/dropdown/Dropdown'

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta<typeof Dropdown>

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
]

export const Dropdowns: StoryFn<typeof Dropdown> = () => (
  <div style={{ maxWidth: '500px' }}>
    <Dropdown />
  </div>
)
