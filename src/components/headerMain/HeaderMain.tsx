import React from 'react';
import s from './HeaderMain.module.css';
interface HeaderMainProps {
  children: React.ReactNode;
}

const HeaderMain: React.FC<HeaderMainProps> = ({ children }) => {
  return <header className={s.header}>{children}</header>;
};

export default HeaderMain;
