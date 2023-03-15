import React from 'react';
import clsx from 'clsx';
import s from './Input.module.css';

interface InputProps {
  onChange?: () => void;
  isDisabled?: boolean;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ onChange, isDisabled = false, placeholder = '' }) => {
  const className = clsx({
    [s.input]: true,
  });
  return (
    <>
      <label>
        <p>test</p>
      </label>
      <input placeholder={placeholder} onChange={onChange} disabled={isDisabled} className={className} />
    </>
  );
};

export default Input;
