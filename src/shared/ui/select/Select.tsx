import clsx from 'clsx'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'

import { ReactComponent as Icon } from '@/assets/icons/select-down.svg'
import { Input } from '@/shared/ui'
import Options from '@/shared/ui/select/Options/Options'
import { validateType } from '@/shared/validation'

import s from './Select.module.css'

interface Option {
  readonly label: string
  readonly value: string
}

interface ISelect {
  options?: Option[]
  placeholder?: string
  className?: string
  name?: validateType
  register?: UseFormRegister<FieldValues>
  control?: Control<FieldValues>
}

const initialSelectOptions = [{ label: 'Виноград 🍇', value: '🍇' }]

const Select = ({
  options = initialSelectOptions,
  placeholder,
  className,
  name = validateType.firstName,
  register,
  control,
}: ISelect) => {
  const [showOptions, setShowOptions] = useState(false)
  const [optionValue, setOptionValue] = useState<string>('')

  const classNameOptions = clsx(s.hide, {
    [s.showOptions]: showOptions,
    [s.closeOptions]: !showOptions,
  })

  const classNameSelect = clsx(className, s.input, {
    [s.inputFocus]: showOptions,
  })

  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handlerOptionValue = (event: ChangeEvent<HTMLInputElement>) => {
    setOptionValue(event.target.value)
  }

  const handlerOptions = () => {
    setShowOptions(!showOptions)
    inputRef.current?.focus()
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: TouchEvent | MouseEvent) => {
      if (
        showOptions &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setShowOptions(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [showOptions])

  useEffect(() => {
    if (showOptions) {
      setOptionValue('')
    }
  }, [showOptions])

  return (
    <div ref={ref} className={s.root} onClick={handlerOptions}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            register={register}
            name={name}
            inputRef={inputRef}
            value={optionValue}
            onChange={handlerOptionValue}
            placeholder={placeholder}
            className={classNameSelect}
            type={inputTypes.text}
            right={
              <button type="button" className={classNameOptions}>
                <Icon />
              </button>
            }
          >
            {showOptions && (
              <Options
                optionValue={optionValue}
                options={options}
                setHookFormValue={field.onChange}
                setOptionValue={setOptionValue}
              />
            )}
          </Input>
        )}
      />
    </div>
  )
}

export default Select
