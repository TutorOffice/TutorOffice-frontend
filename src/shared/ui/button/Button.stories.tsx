/*
import '../../../index.css'

import type { Meta, StoryFn } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { Button, ButtonGroup } from '../index'

export default {
  title: 'Buttons',
  component: Button,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
} as Meta<typeof Button>
const STATES = [
  { variant: btnClass.primary, children: 'Primary', type: btnType.button },
  {
    variant: btnClass.ghost,
    children: 'Ghost',
    type: btnType.button,
  },
  {
    variant: btnClass.primary,
    children: 'Disabled',
    type: btnType.button,
    isDisabled: true,
  },
  { variant: btnClass.back, children: 'Back', type: btnType.button },
  { variant: btnClass.common, children: 'Common', type: btnType.button },
]
export const All: StoryFn<typeof Button> = () => (
  <ButtonGroup>
    {STATES.map((props, index) => (
      <Button key={index} {...props}>
        {props.children}
      </Button>
    ))}
  </ButtonGroup>
)
*/
