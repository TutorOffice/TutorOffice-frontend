import React from 'react';
import s from './ButtonGroup.module.css';
interface ButtonGroupProps {
  children: React.ReactNode;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children }) => {
  return <div className={s.group__buttons}>{children}</div>;
};

export default ButtonGroup;
