import s from './ButtonGroup.module.css';

import React from 'react';
import clsx from 'clsx';

interface ButtonGroupProps {
  children: React.ReactNode;
  width?: string;
  className?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, width = 'auto' }) => {
  const className = clsx({
    [s.group__buttons]: true,
  });

  return (
    <div style={{ width: width }} className={className}>
      {children}
    </div>
  );
};

export default ButtonGroup;
