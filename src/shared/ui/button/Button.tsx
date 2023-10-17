import {
  Button as MantButton,
  ButtonProps as MantButtonProps,
  ElementProps,
} from '@mantine/core'
import React, { ReactNode } from 'react'

interface ButtonProps
  extends MantButtonProps,
    ElementProps<'button', keyof MantButtonProps> {
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return <MantButton {...props}>{children}</MantButton>
}

export default Button
