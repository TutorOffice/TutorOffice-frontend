// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import clsx from 'clsx'
import React, { InputHTMLAttributes, ReactNode, useEffect } from 'react'
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form'

import { validateType } from '@/shared/validation'

import s from '../Input.module.css'

interface InputPhone extends InputHTMLAttributes<HTMLInputElement> {
  isDisabled?: boolean
  placeholder?: string
  labelText?: string
  commentTip?: string
  isRequired?: boolean
  isError?: boolean
  isPassword?: boolean
  iconVisibility?: boolean
  name?: validateType
  register?: UseFormRegister<FieldValues>
  errors?: FieldError | undefined
  inputRef?: React.RefObject<HTMLInputElement>
  className?: string
  children?: ReactNode
  right?: ReactNode | ReactNode[]
}

const InputPhone: React.FC<InputPhone> = ({
  inputRef,
  isDisabled = false,
  placeholder = '',
  labelText = '',
  commentTip = '',
  errors,
  isRequired = false,
  isError = Boolean(errors),
  name,
  register,
  className,
  ...props
}) => {
  const classNameInput = clsx(className, {
    [s.input]: true,
    [s.error]: isError,
  })
  const classNameTip = clsx({
    [s.commentTip]: true,
    [s.errorTip]: isError,
  })
  const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, '')
  }

  const onPhonePaste = (e: ClipboardEvent) => {
    const input = e.target
    const inputNumbersValue = getInputNumbersValue(input)
    const pasted = e.clipboardData || window.clipboardData

    if (pasted) {
      const pastedText = pasted.getData('Text')
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue
      }
    }
  }

  const onPhoneInput = (e) => {
    const input = e.target
    let inputNumbersValue = getInputNumbersValue(input)
    const selectionStart = input.selectionStart
    let formattedInputValue = ''

    if (!inputNumbersValue) {
      input.value = ''
      return
    }

    if (input.value.length !== selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue
      }
      return
    }

    if (['7', '8', '9'].includes(inputNumbersValue[0])) {
      if (inputNumbersValue[0] === '9')
        inputNumbersValue = '7' + inputNumbersValue
      const firstSymbols = inputNumbersValue[0] === '8' ? '8' : '+7'
      formattedInputValue = input.value = firstSymbols + ' '
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.slice(1, 4)
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.slice(4, 7)
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.slice(7, 9)
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.slice(9, 11)
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue.slice(0, 16)
    }
    input.value = formattedInputValue
  }

  const onPhoneKeyDown = (e) => {
    const inputValue = e.target.value.replace(/\D/g, '')
    if (e.keyCode === 8 && inputValue.length === 1) {
      e.target.value = ''
    }
  }

  useEffect(() => {
    const phoneInputs = document.querySelectorAll('input[data-tel-input]')
    for (const phoneInput of phoneInputs) {
      phoneInput.addEventListener('keydown', onPhoneKeyDown)
      phoneInput.addEventListener('input', onPhoneInput, false)
      phoneInput.addEventListener('paste', onPhonePaste, false)
    }

    return () => {
      for (const phoneInput of phoneInputs) {
        phoneInput.removeEventListener('keydown', onPhoneKeyDown)
        phoneInput.removeEventListener('input', onPhoneInput)
        phoneInput.removeEventListener('paste', onPhonePaste)
      }
    }
  }, [])

  return (
    <div className={s.inputs}>
      <label>
        <p className={s.labelText}>
          {labelText}
          {isRequired && <span className={s.required__icon}>*</span>}
        </p>
      </label>
      <div className={s.inputBlock}>
        <div>
          <input
            {...props}
            ref={inputRef}
            {...(register && name && { ...register(name) })}
            maxLength={18}
            data-tel-input
            placeholder={placeholder}
            disabled={isDisabled}
            className={classNameInput}
          />
        </div>
      </div>
      {errors && <p className={s.required}>{errors.message}</p>}
      <p className={classNameTip}>{commentTip}</p>
    </div>
  )
}

export default InputPhone
