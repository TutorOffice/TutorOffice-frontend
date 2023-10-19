import {
  ElementProps,
  PasswordInput as MantPasswordInput,
  PasswordInputProps as MantPasswordInputProps,
} from '@mantine/core'
import React from 'react'

import { ReactComponent as Close } from '@/assets/icons/pass-close.svg'
import { ReactComponent as Open } from '@/assets/icons/pass-open.svg'

import s from '../Input.module.css'

interface InputProps
  extends MantPasswordInputProps,
    ElementProps<'input', keyof MantPasswordInputProps> {
  className?: string
}

const classNames = {
  input: s.input,
  label: s.label,
  error: s.error,
  description: s.description,
  wrapper: s.wrapper,
}

const InputPassword: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <MantPasswordInput
      classNames={classNames}
      className={className}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
      visibilityToggleIcon={({ reveal }) => (reveal ? <Close /> : <Open />)}
      {...props}
    />
  )
}

export default InputPassword
