import s from './Button.module.css';

import { useBack } from './useBack';

import React from 'react';
import clsx from 'clsx';


export enum btnClass {
  primary = 'primary',
  ghost = 'ghost',
  back = 'back',
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
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant, isDisabled = false, type, bottom = 0 }) => {
  const className = clsx({
    [s.button]: true,
    [s.buttonPrimary]: variant === btnClass.primary && !isDisabled,
    [s.buttonGhost]: variant === btnClass.ghost && !isDisabled,
    [s.buttonBack]: variant === btnClass.back && !isDisabled,
  });
  const [goBack] = useBack();

  return (
    <button
      type={type}
      onClick={variant === btnClass.back ? goBack : onClick}
      disabled={isDisabled}
      className={className}
      style={{ marginBottom: bottom }}
    >
      {children}
    </button>
  );
};

export default Button;
