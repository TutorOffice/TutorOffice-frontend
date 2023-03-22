import React from 'react';
import s from './ButtonGroup.module.css';
import clsx from 'clsx';
interface ButtonGroupProps {
  children: React.ReactNode;
  bottom: number;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, bottom }) => {
  const className = clsx({
    [s.group__buttons]: true,
  });
  return (
    <div style={{ marginBottom: bottom }} className={className}>
      {children}
    </div>
  );
};

export default ButtonGroup;
