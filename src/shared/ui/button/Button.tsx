import s from './Button.module.css';

import { useBack } from './useBack';

import React from 'react';
import clsx from 'clsx';

export enum btnClass {
  primary = 'primary',
  ghost = 'ghost',
  back = 'back',
  common = 'common',
}

export enum btnType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant: btnClass;
  isDisabled?: boolean;
  type: btnType;
  bottom?: number;
  width?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant, isDisabled, type, bottom, width, className }) => {
  const buttonClassName = clsx(className, {
    [s.button]: true,
    [s.buttonPrimary]: variant === btnClass.primary && !isDisabled,
    [s.buttonGhost]: variant === btnClass.ghost && !isDisabled,
    [s.buttonBack]: variant === btnClass.back && !isDisabled,
    [s.buttonCommon]: variant === btnClass.common && !isDisabled,
  });
  const [goBack] = useBack();

  return (
    <button
      type={type}
      onClick={variant === btnClass.back ? goBack : onClick}
      disabled={isDisabled}
      className={buttonClassName}
      style={{ marginBottom: bottom, width: width }}
    >
      {children}
    </button>
  );
};

export default Button;
