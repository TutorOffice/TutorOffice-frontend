import s from './ButtonGroup.module.css';

import React from 'react';
import clsx from 'clsx';

interface ButtonGroupProps {
  children: React.ReactNode;
  bottom?: number;
  width?: string;
  justifyContent?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, bottom = 0, width = 'auto', justifyContent }) => {
  const className = clsx({
    [s.group__buttons]: true,
  });

  return (
    <div style={{ marginBottom: bottom, width: width, justifyContent: justifyContent }} className={className}>
      {children}
    </div>
  );
};

export default ButtonGroup;
