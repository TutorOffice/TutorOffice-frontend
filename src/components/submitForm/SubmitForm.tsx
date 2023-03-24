import React from 'react';
import s from './SubmitForm.module.css';
interface submitFormProps {
  children: React.ReactNode;
  onSubmit?: () => void;
}

const SubmitForm: React.FC<submitFormProps> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={s.submitForm}>
      {children}
    </form>
  );
};

export default SubmitForm;
