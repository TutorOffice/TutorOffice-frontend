import {
  Combobox,
  ComboboxProps,
  ElementProps,
  Radio as MantRadio,
  TextInput,
  useCombobox,
} from '@mantine/core'
import React, { useState } from 'react'

import { ReactComponent as ArrowIcon } from '@/assets/icons/select-down.svg'
import { Radio } from '@/shared/ui'

import s from './Dropdown.module.css'

interface DropdownProps
  extends ComboboxProps,
    ElementProps<'input', keyof ComboboxProps> {
  className?: string
  options: {
    label: string
    value: string
  }[]
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

const Dropdown: React.FC<DropdownProps> = ({
  className,
  options,
  ...props
}) => {
  const combobox = useCombobox()

  const [value, setValue] = useState<string>('')

  const data = options.map((item) => (
    <Radio
      key={item.value}
      style={{ padding: '9px 16px' }}
      onClick={() => setValue(item.value)}
      value={item.value}
      label={item.label}
    />
  ))

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(optionValue) => {
        setValue(optionValue)
        combobox.closeDropdown()
      }}
      withinPortal={false}
      size="xl"
      transitionProps={{ duration: 200, transition: 'pop' }}
      classNames={classNames}
      {...props}
    >
      <Combobox.Target>
        <TextInput
          className={className}
          classNames={classNames}
          placeholder="Сортировать"
          value={value}
          rightSection={<ArrowIcon />}
          readOnly
          onFocus={() => combobox.openDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <MantRadio.Group>{data}</MantRadio.Group>
      </Combobox.Dropdown>
    </Combobox>
  )
}

export default Dropdown
