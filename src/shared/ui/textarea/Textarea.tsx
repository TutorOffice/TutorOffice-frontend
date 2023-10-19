import {
  ElementProps,
  Textarea as MantTextarea,
  TextareaProps as MantTextareaProps,
} from '@mantine/core'
import React from 'react'

import s from './Textarea.module.css'

interface TextAreaProps
  extends MantTextareaProps,
    ElementProps<'input', keyof MantTextareaProps> {
  className?: string
}

const classNames = {
  input: s.input,
  label: s.label,
  error: s.error,
  description: s.description,
}

const TextArea: React.FC<TextAreaProps> = ({ className, ...props }) => {
  return (
    <MantTextarea
      classNames={classNames}
      className={className}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
      autosize
      {...props}
    />
  )
}

export default TextArea
