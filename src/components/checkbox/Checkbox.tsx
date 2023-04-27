import React, { createElement, FC, useState } from 'react';
import s from './Checkbox.module.css';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface checkboxProps {
  register?: UseFormRegister<FieldValues>;
  children: React.ReactNode;
  name: string;
}

const CheckboxForm: FC<checkboxProps> = ({ name, register, children }) => {
  const [isTutor, setIsTutor] = useState(false);

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
