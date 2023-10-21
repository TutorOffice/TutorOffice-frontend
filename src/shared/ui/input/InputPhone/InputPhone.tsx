import {
  ElementProps,
  InputBase,
  InputBaseProps as MantInputBaseProps,
} from '@mantine/core'
import React from 'react'
import InputMask from 'react-input-mask'

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

const maskDefaultValue = '+7 999 999 99 99'

const InputPhone: React.FC<InputProps> = ({
  className,
  mask = maskDefaultValue,
  ...props
}) => {
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <InputBase<any>
        classNames={classNames}
        component={InputMask}
        mask={mask}
        maskChar=""
        {...props}
      />
    </>
  )
}

export default InputPhone
