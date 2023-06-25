import s from './Select.module.css';

import { Input, inputTypes } from '@/shared/ui';
import { ReactComponent as Icon } from '@/assets/icons/select-down.svg';

import React, { useState } from 'react';
import clsx from 'clsx';

const options = [
  {
    label: 'Apple 🍎',
    value: 'Apple 🍎',
  },
  {
    label: 'Orange 🍊',
    value: 'Orange 🍊',
  },
  {
    label: 'Banana 🍌',
    value: 'Banana 🍌',
  },
];

const Select = () => {
  const [showOptions, setShowOptions] = useState(false);
  const classNameOptions = clsx(s.hide, {
    [s.showOptions]: showOptions,
    [s.closeOptions]: !showOptions,
  });

  const handlerOptions = () => {
    setShowOptions(!showOptions);
  };

  const closeDropdown = () => {
    setShowOptions(false);
  };

  return (
    <div className={s.root} onClick={handlerOptions} onBlur={closeDropdown}>
      <Input placeholder='Выберите ученика' className={s.input} type={inputTypes.text}>
        <button type='button' className={classNameOptions}>
          <Icon />
        </button>
        {showOptions && <Options options={options} />}
      </Input>
    </div>
  );
};
export default Select;

interface IOption {
  label: string;
  value: string | number;
}

interface IOptions {
  options: IOption[];
}

const Options = ({ options }: IOptions) => {
  return (
    <>
      {options.map((option, index) => (
        <div key={index}>{option.label}</div>
      ))}
    </>
  );
};
