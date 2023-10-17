import {
  Button as MantButton,
  ButtonProps as MantButtonProps,
} from '@mantine/core'
import React from 'react'

import { useBack } from './useBack'

interface ButtonProps extends MantButtonProps {
  onClick?: () => void
  children: React.ReactNode
  isDisabled?: boolean
  width?: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant,
  isDisabled,
  className,
  ...props
}) => {
  const [goBack] = useBack()

  return <MantButton {...props}>{children}</MantButton>
}

export default Button
