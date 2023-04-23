import React, { FC } from 'react';
import s from './checkbox.module.css';

interface checkboxProps {
  RegisterName: string;
  register?: any; // fix
  name: string;
  type: string;
  id: string;
  TextValue: string;
  isTutor?: boolean;
  setIsTutor?: (isTutor: boolean) => void;
}

const Checkbox: FC<checkboxProps> = ({
  isTutor = false,
  setIsTutor,
  TextValue,
  name,
  RegisterName,
  register,
  type,
  id,
}) => {
  const onChange = () => {
    setIsTutor(!isTutor);
  };
  return (
    <div className={s.checkbox__wrapper}>
      <input
        {...register(RegisterName)}
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
