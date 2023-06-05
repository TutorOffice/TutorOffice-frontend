import s from './checkbox.module.css';

import React, { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface CheckboxProps {
  register?: UseFormRegister<FieldValues>;
  name: string;
  type: string;
  id: string;
  TextValue: string;
  isTutor?: boolean;
  setIsTutor?: (isTutor: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({ isTutor = false, setIsTutor, TextValue, name, register, type, id }) => {
  const onChange = () => {
    if (setIsTutor) {
      setIsTutor(!isTutor);
    }
  };
  return (
    <div className={s.checkbox__wrapper}>
      <input
        {...(register && { ...register(name) })}
        className={s.customRadio}
        name={!isTutor ? 'tutor' : 'student'}
        type={type}
        id={id}
        value={!isTutor ? 'tutor' : 'student'}
        checked={name === 'student' ? !isTutor : isTutor}
        onClick={onChange}
      />
      <label htmlFor={name === 'student' ? 'student' : 'tutor'}>{TextValue}</label>
    </div>
  );
};

export default Checkbox;
