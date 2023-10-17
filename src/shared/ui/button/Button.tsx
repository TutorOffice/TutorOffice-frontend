import {
  Button as MantButton,
  ButtonProps as MantButtonProps,
  ElementProps,
} from '@mantine/core'
import clsx from 'clsx'
import React, { ReactNode } from 'react'

import s from './Button.module.css'

interface ButtonProps
  extends MantButtonProps,
    ElementProps<'button', keyof MantButtonProps> {
  children: ReactNode
  color?: 'primaryColor' | 'secondaryColor'
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primaryColor',
  className,
  ...props
}) => {
  const classes = clsx(className, {
    [s.root]: true,
    [s.primary]: color === 'primaryColor',
    [s.secondary]: color === 'secondaryColor',
  })

  return (
    <MantButton color={color} className={classes} {...props}>
      {children}
    </MantButton>
  )
}

export default Button
