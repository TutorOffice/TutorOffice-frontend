import React from 'react';
import clsx from 'clsx';

import s from './Input.module.css';
import close from '../../../assets/icons/pass-close.svg';
import open from '../../../assets/icons/pass-open.svg';
import { usePassword } from './usePassword';
import { useValid } from '../../../pages/login/useValid';

export enum inputTypes {
  text = 'text',
  password = 'password',
  phone = 'phone',
  email = 'email',
}
interface InputProps {
  type: inputTypes;
  onChange?: () => void;
  isDisabled?: boolean;
  placeholder?: string;
  labelText?: string;
  commentTip?: string;
  isRequired?: boolean;
  isError?: boolean;
  isPassword?: boolean;
  iconVisibility?: boolean;
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
  const { register, formState } = useValid();

  return (
    <div className={s.inputs}>
      <label>
        <p className={s.labelText}>
          {labelText}
          {isRequired && <span className={s.required}>*</span>}
        </p>
      </label>
      <div className={s.inputBlock}>
        {!isPassword ? (
          <>
            <input
              type={isOpen ? 'text' : type}
              placeholder={placeholder}
              className={classNameInput}
              {...register(inputTypes.email, {
                required: true,
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                minLength: 7,
                maxLength: 50,
              })}
            />
            {formState.errors.email?.type === 'required' && <p style={{ color: 'red' }}>Введите E-mail</p>}
            {formState.errors.email?.type === 'pattern' && (
              <p style={{ color: 'red' }}>E-mail введен некорректно. Пример: example@domain.ru</p>
            )}
          </>
        ) : (
          <>
            <input
              type={isOpen ? 'text' : type}
              placeholder={placeholder}
              className={classNameInput}
              {...register(inputTypes.password, {
                required: true,
                minLength: 7,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/i,
              })}
            />
            {isPassword && iconVisibility && (
              <button type='button' onClick={setIsOpen} className={s.passHide}>
                <img src={isOpen ? open : close} alt='Иконка скрытия/отображения пароля' />
              </button>
            )}
            {formState.errors.password?.type === 'required' && <p className={s.errorTip}>Введите пароль</p>}
            {formState.errors.password?.type === 'minLength' && (
              <p className={s.errorTip}>
                Пароль должен содержать не менее 7 символов, буквы в верхнем и нижнем регистре и цифры
              </p>
            )}
            {formState.errors.password?.type === 'pattern' && (
              <p className={s.errorTip}>
                Пароль должен содержать не менее 7 символов, буквы в верхнем и нижнем регистре и цифры
              </p>
            )}
          </>
        )}
      </div>
      <p className={classNameTip}>{commentTip}</p>
    </div>
  );
};

export default Input;
