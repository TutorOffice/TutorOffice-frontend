import React, { createElement, FC, useState } from 'react';
import s from './Checkbox.module.css';

interface checkboxProps {
  register?: any; // fix
  children: React.ReactNode;
  name: string;
}

const CheckboxForm: FC<checkboxProps> = ({ name, register, children }) => {
  const [isTutor, setIsTutor] = useState<boolean>(false);

  return (
    <div className={s.checkbox}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    isTutor: isTutor,
                    setIsTutor: setIsTutor,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </div>
  );
};

export default CheckboxForm;
