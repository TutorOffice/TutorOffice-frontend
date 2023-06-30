import s from './InputPassword.module.css';

import { validateType } from '@/shared/validation';

import { usePassword } from '@/shared/ui/input/usePassword';
import close from '@/assets/icons/pass-close.svg';
import open from '@/assets/icons/pass-open.svg';

import clsx from 'clsx';
import React, { InputHTMLAttributes, ReactNode } from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputPassword extends InputHTMLAttributes<HTMLInputElement> {
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
  inputRef?: React.RefObject<HTMLInputElement>;
  className?: string;
  children?: ReactNode;
  right?: ReactNode | ReactNode[];
}

const InputPassword: React.FC<InputPassword> = ({
  inputRef,
  isDisabled = false,
  placeholder = '',
  labelText = '',
  commentTip = '',
  errors,
  isRequired = false,
  isError = Boolean(errors),
  name,
  register,
  className,
  right,
  ...props
}) => {
  const classNameInput = clsx(className, {
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
        <div>
          <input
            ref={inputRef}
            {...(register && name && { ...register(name) })}
            placeholder={placeholder}
            disabled={isDisabled}
            type={isOpen ? 'text' : 'password'}
            className={classNameInput}
            {...props}
          />
        </div>
        <div className={s.right}>
          <div className={s.rightCentered}>
            {right}
            <button type='button' onClick={setIsOpen}>
              <img className={s.passHide__icon} src={isOpen ? open : close} alt='Иконка скрытия/отображения пароля' />
            </button>
          </div>
        </div>
      </div>
      {errors && <p className={s.required}>{errors.message}</p>}
      <p className={classNameTip}>{commentTip}</p>
    </div>
  );
};

export default InputPassword;
