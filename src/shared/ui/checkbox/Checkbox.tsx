import s from './Checkbox.module.css';

import { validateType } from '@/shared/validation';

import clsx from 'clsx';
import React, { useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface CheckboxProps {
  name?: validateType;
  register?: UseFormRegister<FieldValues>;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, register, className }) => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };

  const checkboxClassName = clsx(className, { [s.checkbox]: true });

  return (
    <div className={s.checkbox__wrapper}>
      <input
        {...(register && name && { ...register(name) })}
        type='checkbox'
        id='checkbox'
        className={checkboxClassName}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor='checkbox' />
    </div>
  );
};

export default Checkbox;
