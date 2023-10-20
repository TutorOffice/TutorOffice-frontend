import {
  ElementProps,
  Radio as MantRadio,
  RadioProps as MantRadioProps,
} from '@mantine/core'
import React from 'react'

import s from './Radio.module.css'

interface TextAreaProps
  extends MantRadioProps,
    ElementProps<'input', keyof MantRadioProps> {
  className?: string
}

const classNames = {
  root: s.root,
  radio: s.radio,
  body: s.body,
  icon: s.icon,
  inner: s.inner,
  label: s.label,
  labelWrapper: s.labelWrapper,
}

const Radio: React.FC<TextAreaProps> = ({ className, ...props }) => {
  return (
    <MantRadio
      size="lg"
      classNames={classNames}
      className={className}
      {...props}
    />
  )
}

export default Radio
