import s from './HeaderMain.module.css';

import React from 'react';


interface HeaderMainProps {
  children: React.ReactNode;
  bottom: number;
}

const HeaderMain: React.FC<HeaderMainProps> = ({ children, bottom }) => {
  return (
    <header style={{ marginBottom: bottom }} className={s.header}>
      {children}
    </header>
  );
};

export default HeaderMain;
