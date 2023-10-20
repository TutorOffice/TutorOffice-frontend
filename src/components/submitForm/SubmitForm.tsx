import clsx from 'clsx'
import React, { createElement } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button, ButtonGroup } from '@/shared/ui'
import { IFormValues } from '@/shared/validation'
import { getResolver } from '@/shared/validation/getResolver'

import s from './SubmitForm.module.css'

interface SubmitFormProps {
  children: React.ReactNode
  onSubmit: SubmitHandler<IFormValues>
  resolverType: string
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
  resolverType,
  btnText,
  btnWidth,
  btnGroup,
  defaultValues,
  className,
  submitBtnClassName,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<IFormValues>({
    defaultValues,
    resolver: getResolver(resolverType),
    mode: 'onBlur',
  })

  let submitControls
  if (btnGroup) {
    submitControls = (
      <ButtonGroup width="100%">
        <Button className={submitBtnClassName}>{btnText}</Button>
        <Button>Отменить</Button>
      </ButtonGroup>
    )
  } else if (btnText) {
    submitControls = <Button>{btnText}</Button>
  }

  const formClassName = clsx(className, { [s.submitForm]: true })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClassName}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    control,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    errors: errors[child.props.name],
                    key: child.props.name,
                  },
                })
              : child
          })
        : children}
      {submitControls}
    </form>
  )
}

export default SubmitForm
