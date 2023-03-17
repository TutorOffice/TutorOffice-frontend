import React from 'react';
import clsx from 'clsx';
import s from './Input.module.css';
import close from '../../../assets/icons/pass-close.svg';
import open from '../../../assets/icons/pass-open.svg';
import { usePassword } from './usePassword';

interface InputProps {
  onChange?: () => void;
  isDisabled?: boolean;
  placeholder?: string;
  labelText?: string;
  commentTip?: string;
  isRequired?: boolean;
  isError?: boolean;
  isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({
  onChange,
  isDisabled = false,
  placeholder = '',
  labelText = '',
  commentTip = 'Комментарий подсказка',
  isRequired = false,
  isError = false,
  isPassword = false,
}) => {
  const classNameInput = clsx({
    [s.input]: true,
    [s.error]: isError,
  });
  const classNameTip = clsx({
    [s.commentTip]: true,
    [s.errorTip]: isError,
  });

  const [isOpen, setIsOpen] = usePassword();

  return (
    <div className={s.inputs}>
      <label>
        <p className={s.labelText}>
          {labelText}
          {isRequired && <span className={s.required}>*</span>}
        </p>
      </label>
      <div className={s.inputBlock}>
        <input
          type={!isOpen ? 'password' : 'text'}
          placeholder={placeholder}
          onChange={onChange}
          disabled={isDisabled}
          className={classNameInput}
        />
        {isPassword && (
          <button onClick={setIsOpen} className={s.passHide}>
            <img src={isOpen ? open : close} alt='' />
          </button>
        )}
      </div>
      <p className={classNameTip}>{commentTip}</p>
    </div>
  );
};

export default Input;
