import { ElementProps, TextInput, TextInputProps } from '@mantine/core'
import React from 'react'

import s from './Input.module.css'

interface InputProps
  extends TextInputProps,
    ElementProps<'input', keyof TextInputProps> {
  className?: string
}

const classNames = {
  input: s.input,
  label: s.label,
  error: s.error,
  description: s.description,
  wrapper: s.wrapper,
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <TextInput
      classNames={classNames}
      className={className}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
      {...props}
    />
  )
}

export default Input
