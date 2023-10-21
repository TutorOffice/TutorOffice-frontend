import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const primary: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
      <Button variant="filled">Button</Button>
      <Button disabled>Button</Button>
    </div>
  ),
}

export const secondary: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
      <Button color="secondaryColor" variant="filled">
        Button
      </Button>
      <Button color="secondaryColor" variant="outline">
        Button
      </Button>
      <Button disabled>Button</Button>
    </div>
  ),
}
export const textButtonAccent: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
      <Button variant="transparent">Button</Button>
      <Button variant="transparent">Button</Button>
      <Button variant="transparent" disabled>
        Button
      </Button>
    </div>
  ),
}

export const textButtonBlack: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
      <Button color="secondaryColor" variant="transparent">
        Button
      </Button>
      <Button color="secondaryColor" variant="transparent">
        Button
      </Button>
      <Button color="secondaryColor" variant="transparent" disabled>
        Button
      </Button>
    </div>
  ),
}
