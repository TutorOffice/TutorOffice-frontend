import s from './ButtonGroup.module.css';

import React from 'react';
import clsx from 'clsx';

interface ButtonGroupProps {
  children: React.ReactNode;
  width?: string;
  className?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ className, children, width = 'auto' }) => {
  const buttonGroupClassName = clsx(className, {
    [s.group__buttons]: true,
  });

  return (
    <div style={{ width: width }} className={buttonGroupClassName}>
      {children}
    </div>
  );
};

export default ButtonGroup;
