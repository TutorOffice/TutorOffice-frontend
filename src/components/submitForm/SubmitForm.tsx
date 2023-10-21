import clsx from 'clsx'
import React from 'react'

import { Button, ButtonGroup } from '@/shared/ui'
import { IFormValues } from '@/shared/validation'

import s from './SubmitForm.module.css'

interface SubmitFormProps {
  children: React.ReactNode
  onSubmit: () => void
  btnText?: string
  btnWidth?: string
  btnGroup?: boolean
  defaultValues?: IFormValues
  className?: string
  submitBtnClassName?: string
}

const SubmitForm: React.FC<SubmitFormProps> = ({
  children,
  onSubmit,
  btnText,
  btnGroup,
  className,
  submitBtnClassName,
}) => {
  let submitControls
  if (btnGroup) {
    submitControls = (
      <ButtonGroup width="100%">
        <Button className={submitBtnClassName}>{btnText}</Button>
        <Button>Отменить</Button>
      </ButtonGroup>
    )
  } else if (btnText) {
    submitControls = <Button type="submit">{btnText}</Button>
  }

  const formClassName = clsx(className, { [s.submitForm]: true })

  return (
    <form onSubmit={onSubmit} className={formClassName}>
      {children}
      {submitControls}
    </form>
  )
}

export default SubmitForm
