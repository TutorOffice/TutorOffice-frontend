import s from './Input.module.css';

import { validateType } from '@/shared/validation';

import InputPassword from '@/shared/ui/input/InputPassword/InputPassword';

import clsx from 'clsx';
import React, { InputHTMLAttributes, ReactNode } from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

export enum inputTypes {
  text = 'text',
  password = 'password',
  phone = 'phone',
  email = 'email',
  button = 'button',
  textarea = 'textarea',
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: inputTypes;
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

const Input: React.FC<InputProps> = ({
  inputRef,
  type,
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
  children,
  right,
  ...props
}) => {
  const classNameInput = clsx(className, {
    [s.input]: true,
    [s.textarea]: type === inputTypes.textarea,
    [s.error]: isError,
  });
  const classNameTip = clsx({
    [s.commentTip]: true,
    [s.errorTip]: isError,
  });

  if (type === inputTypes.password) {
    return (
      <InputPassword
        inputRef={inputRef}
        isDisabled={isDisabled}
        placeholder={placeholder}
        labelText={labelText}
        commentTip={commentTip}
        isRequired={isRequired}
        isError={isError}
        name={name}
        register={register}
        className={className}
        {...props}
      />
    );
  }

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
          {type === 'textarea' ? (
            <textarea
              {...(register && name && { ...register(name) })}
              placeholder={placeholder}
              className={classNameInput}
            />
          ) : (
            <input
              ref={inputRef}
              {...(register && name && { ...register(name) })}
              type={type}
              maxLength={type === 'phone' ? 13 : undefined}
              data-tel-input={type === 'phone' ? 'data-tel-input' : null}
              placeholder={placeholder}
              disabled={isDisabled}
              className={classNameInput}
              {...props}
            />
          )}
        </div>
        <div className={s.right}>
          <div className={s.rightCentered}>{right}</div>
        </div>
        {children}
      </div>
      {errors && <p className={s.required}>{errors.message}</p>}
      <p className={classNameTip}>{commentTip}</p>
    </div>
  );
};

export default Input;
