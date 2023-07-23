import s from './RadioItem.module.css';

import React, { ChangeEvent } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface RadioItemProps {
  name: string;
  itemValue: string;
  labelText: string;
  value: string;
  changeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegister<FieldValues>;
}

const RadioItem: React.FC<RadioItemProps> = ({ name, itemValue, labelText, register, value, changeValue }) => {
  return (
    <div className={s.radioItem}>
      <input
        {...(register && { ...register(name) })}
        className={s.radioItem__input}
        name={name}
        id={itemValue}
        type='radio'
        value={itemValue}
        checked={value === itemValue}
        onChange={changeValue}
      />
      <label htmlFor={itemValue} className={s.radioItem__label}>
        {labelText}
      </label>
    </div>
  );
};

export default RadioItem;
