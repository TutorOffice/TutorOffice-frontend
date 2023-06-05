import s from './ButtonGroup.module.css';

import React from 'react';
import clsx from 'clsx';

interface ButtonGroupProps {
  children: React.ReactNode;
  bottom?: number;
  width?: string;
  isRow?: boolean;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, bottom = 0, width = 'auto', isRow }) => {
  const className = clsx({
    [s.group__buttons]: true,
    [s.group__buttons_row]: isRow,
  });

  return (
    <div style={{ marginBottom: bottom, width: width }} className={className}>
      {children}
    </div>
  );
};

export default ButtonGroup;
