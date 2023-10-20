import {
  ComboboxData,
  ElementProps,
  Select as MantSelect,
  SelectProps as MantSelectProps,
} from '@mantine/core'
import React from 'react'

import { ReactComponent as ArrowIcon } from '@/assets/icons/select-down.svg'

import s from './Select.module.css'

interface SelectProps
  extends MantSelectProps,
    ElementProps<'input', keyof MantSelectProps> {
  className?: string
  options: ComboboxData | undefined
}

const classNames = {
  input: s.input,
  label: s.label,
  error: s.error,
  description: s.description,
  wrapper: s.wrapper,
  option: s.option,
  options: s.options,
  dropdown: s.dropdown,
}

const Select: React.FC<SelectProps> = ({ className, options, ...props }) => {
  return (
    <MantSelect
      withCheckIcon={false}
      rightSection={<ArrowIcon />}
      classNames={classNames}
      className={className}
      data={options}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
      {...props}
    />
  )
}

export default Select
