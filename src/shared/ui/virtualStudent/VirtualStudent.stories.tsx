import type { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

import VirtualStudent from './VirtualStudent'

export default {
  title: 'VirtualStudent',
  component: VirtualStudent,
} as Meta<typeof VirtualStudent>

export const VirtualStudents: StoryFn<typeof VirtualStudent> = () => (
  <div style={{ maxWidth: '500px' }}>
    <VirtualStudent />
  </div>
)
