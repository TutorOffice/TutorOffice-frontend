import s from './HeaderMain.module.css';

import clsx from 'clsx';

import React from 'react';

interface HeaderMainProps {
  children: React.ReactNode;
  bottom?: number;
  className?: string;
}

const HeaderMain: React.FC<HeaderMainProps> = ({ children, className, bottom }) => {
  const headerClassName = clsx(className, { [s.header]: true });

  return (
    <header style={{ marginBottom: bottom }} className={headerClassName}>
      {children}
    </header>
  );
};

export default HeaderMain;
