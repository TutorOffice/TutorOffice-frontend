import React, { ChangeEvent } from 'react';
import clsx from 'clsx';
import s from './Input.module.css';
import close from '../../../assets/icons/pass-close.svg';
import open from '../../../assets/icons/pass-open.svg';
import { usePassword } from './usePassword';
import { validateType } from '../index';

export enum inputTypes {
  text = 'text',
  password = 'password',
  phone = 'phone',
  email = 'email',
}

interface InputProps {
  type: inputTypes;
  onChange?: (e: ChangeEvent) => void;
  isDisabled?: boolean;
  placeholder?: string;
  labelText?: string;
  commentTip?: string;
  isRequired?: boolean;
  isError?: boolean;
  isPassword?: boolean;
  iconVisibility?: boolean;
  name?: validateType;
  register?: any;
  errors?: any;
}

const Input: React.FC<InputProps> = ({
  onChange,
  type,
  isDisabled = false,
  placeholder = '',
  labelText = '',
  commentTip = '',
  errors,
  isRequired = false,
  isError = Boolean(errors),
  isPassword = false,
  iconVisibility = true,
  name,
  register,
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
          {...register(name)}
          type={isOpen ? 'text' : type}
          placeholder={placeholder}
          disabled={isDisabled}
          className={classNameInput}
        />
        {errors && <p className={s.required}>{errors.message}</p>}
        {isPassword && iconVisibility && (
          <button type='button' onClick={setIsOpen} className={s.passHide}>
            <img src={isOpen ? open : close} alt='Иконка скрытия/отображения пароля' />
          </button>
        )}
      </div>
      <p className={classNameTip}>{commentTip}</p>
    </div>
  );
};

export default Input;
