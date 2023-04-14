import React, { ChangeEvent } from 'react';
import clsx from 'clsx';
import s from './Input.module.css';
import close from '../../../assets/icons/pass-close.svg';
import open from '../../../assets/icons/pass-open.svg';
import { usePassword } from './usePassword';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../../pages/register/Register';
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
  register?: UseFormRegister<FormValues>;
  errors?: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  type,
  isDisabled = false,
  placeholder = '',
  labelText = '',
  commentTip = '',
  isRequired = false,
  isError = false,
  isPassword = false,
  iconVisibility = true,
  name,
  register,
  errors = '',
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
          {...(register && name ? { ...register(name) } : null)}
          type={isOpen ? 'text' : type}
          placeholder={placeholder}
          onChange={onChange}
          disabled={isDisabled}
          className={classNameInput}
        />
        {errors && <p>{errors}</p>}
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
