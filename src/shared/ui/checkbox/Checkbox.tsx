import {
  Checkbox as MantCheckbox,
  CheckboxProps as MantCheckboxProps,
  ElementProps,
} from '@mantine/core'
import React from 'react'

import { ReactComponent as CheckIcon } from '@/assets/icons/checkbox.svg'

import s from './Checkbox.module.css'

interface CheckboxProps
  extends MantCheckboxProps,
    ElementProps<'input', keyof MantCheckboxProps> {
  className?: string
}

const classNames = {
  root: s.root,
  input: s.input,
  body: s.body,
  icon: s.icon,
  inner: s.inner,
  label: s.label,
}

const Checkbox: React.FC<CheckboxProps> = ({ className, ...props }) => {
  return (
    <MantCheckbox
      size="xl"
      icon={CheckIcon}
      classNames={classNames}
      className={className}
      {...props}
    />
  )
}

export default Checkbox
