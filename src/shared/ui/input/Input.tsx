import { ElementProps, TextInput, TextInputProps } from '@mantine/core'
import clsx from 'clsx'
import React from 'react'

import s from './Input.module.css'

interface InputProps
  extends TextInputProps,
    ElementProps<'input', keyof TextInputProps> {
  className?: string
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  const classes = clsx(className, {
    [s.input]: true,
  })

  return <TextInput className={classes} {...props} />
}

export default Input
