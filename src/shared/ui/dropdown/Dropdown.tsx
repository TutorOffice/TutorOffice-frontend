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
}

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
]

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

const Dropdown: React.FC<DropdownProps> = ({ className, ...props }) => {
  const combobox = useCombobox()

  const [value, setValue] = useState<string>('')

  const options = groceries.map((item) => (
    <Radio
      key={item}
      style={{ padding: '9px 16px' }}
      onClick={() => setValue(item)}
      value={item}
      label={item}
    />
  ))

  return (
    <Combobox
      classNames={classNames}
      store={combobox}
      onOptionSubmit={(optionValue) => {
        setValue(optionValue)
        combobox.closeDropdown()
      }}
      withinPortal={false}
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
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <MantRadio.Group>{options}</MantRadio.Group>
      </Combobox.Dropdown>
    </Combobox>
  )
}

export default Dropdown
