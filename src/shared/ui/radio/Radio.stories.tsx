import { Radio as MantRadio } from '@mantine/core'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import s from '@/pages/register/Register.module.css'

import Radio from './Radio'

const meta: Meta<typeof Radio> = {
  component: Radio,
}

export default meta
type Story = StoryObj<typeof Radio>

export const radio: Story = {
  render: () => (
    <div style={{ maxWidth: '490px' }}>
      <Radio label="Label" />
    </div>
  ),
}

export const radioGroup: Story = {
  render: () => (
    <div style={{ maxWidth: '490px' }}>
      <MantRadio.Group className={s.register__radio}>
        <Radio value="Tutor" label="Преподователь" />
        <Radio value="Student" label="Ученик" />
      </MantRadio.Group>
    </div>
  ),
}
