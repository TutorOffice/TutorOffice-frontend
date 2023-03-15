import React from 'react';
import clsx from 'clsx';
import s from './button.module.css';

export enum btnClass {
  primary = 'primary',
  ghost = 'ghost',
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
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant, isDisabled = false, type }) => {
  const className = clsx({
    [s.button]: true,
    [s.buttonPrimary]: variant === btnClass.primary && !isDisabled,
    [s.buttonGhost]: variant === btnClass.ghost && !isDisabled,
  });
  return (
    <button type={type} onClick={onClick} disabled={isDisabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
