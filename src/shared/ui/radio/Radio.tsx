import s from './Radio.module.css';

import RadioItem from './radioItem/RadioItem';

import clsx from 'clsx';
import React, { ChangeEvent, useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface CheckboxProps {
  name: string;
  radioItems: Array<{ id: string | number; value: string; text: string }>;
  register?: UseFormRegister<FieldValues>;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, radioItems, register, className }) => {
  const [value, setValue] = useState(radioItems[0].value);
  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const radioClassName = clsx(className, { [s.radio]: true });

  return (
    <div className={radioClassName}>
      {radioItems.map((obj) => {
        return (
          <RadioItem
            key={obj.id}
            itemValue={obj.value}
            labelText={obj.text}
            register={register}
            name={name}
            value={value}
            changeValue={changeValue}
          />
        );
      })}
    </div>
  );
};

export default Checkbox;
