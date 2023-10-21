import {
  Button as MantButton,
  ButtonProps as MantButtonProps,
  ButtonVariant as MantButtonVariant,
  ElementProps,
} from '@mantine/core'
import clsx from 'clsx'
import React, { ReactNode } from 'react'

import { useBack } from '@/shared/ui/button/useBack'

import s from './Button.module.css'

type ButtonVariant = MantButtonVariant | 'back'

export interface ButtonProps
  extends MantButtonProps,
    ElementProps<'button', keyof MantButtonProps> {
  children: ReactNode
  color?: 'primaryColor' | 'secondaryColor'
  variant?: ButtonVariant
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primaryColor',
  className,
  variant,
  size = 'md',
  ...props
}) => {
  const classes = clsx(className, {
    [s.root]: true,
    [s.primary]: color === 'primaryColor',
    [s.secondary]: color === 'secondaryColor',
  })
  const goBack = useBack()
  const isBack = (variant === 'back' && goBack) || undefined

  return (
    <MantButton
      onClick={isBack}
      color={color}
      variant={variant}
      className={classes}
      size={size}
      {...props}
    >
      {children}
    </MantButton>
  )
}

export default Button
