import {
  ElementProps,
  InputBase,
  InputBaseProps as MantInputBaseProps,
} from '@mantine/core'
import React from 'react'
import { IMaskInput } from 'react-imask'

import s from '../Input.module.css'

interface InputProps
  extends MantInputBaseProps,
    ElementProps<'input', keyof MantInputBaseProps> {
  className?: string
  mask?: string
}

const classNames = {
  input: s.input,
  label: s.label,
  error: s.error,
  description: s.description,
  wrapper: s.wrapper,
}

const maskDefaultValue = '+7 000 000 00 00'

const InputPhone: React.FC<InputProps> = ({
  className,
  mask = maskDefaultValue,
  ...props
}) => {
  return (
    <>
      <InputBase<any>
        classNames={classNames}
        component={IMaskInput}
        mask={mask}
        {...props}
      />
    </>
  )
}

export default InputPhone
