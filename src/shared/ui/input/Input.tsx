import s from './Input.module.css';

import { usePassword } from './usePassword';

import { validateType } from '@/shared/validation';
import close from '@/assets/icons/pass-close.svg';
import open from '@/assets/icons/pass-open.svg';

import clsx from 'clsx';
import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

export enum inputTypes {
  text = 'text',
  password = 'password',
  phone = 'phone',
  email = 'email',
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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
  register?: UseFormRegister<FieldValues>;
  errors?: FieldError | undefined;
  ref?: React.RefObject<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  ref,
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
          {isRequired && <span className={s.required__icon}>*</span>}
        </p>
      </label>
      <div className={s.inputBlock}>
        <input
          {...(ref ? ref : undefined)}
          {...(register && name && { ...register(name) })}
          type={isOpen ? 'text' : type}
          maxLength={type === 'phone' ? 13 : undefined}
          data-tel-input={type === 'phone' ? 'data-tel-input' : null}
          placeholder={placeholder}
          disabled={isDisabled}
          className={classNameInput}
        />
        {isPassword && iconVisibility && (
          <button type='button' onClick={setIsOpen} className={s.passHide}>
            <img className={s.passHide__icon} src={isOpen ? open : close} alt='Иконка скрытия/отображения пароля' />
          </button>
        )}
      </div>
      {errors && <p className={s.required}>{errors.message}</p>}
      <p className={classNameTip}>{commentTip}</p>
    </div>
  );
};

export default Input;
