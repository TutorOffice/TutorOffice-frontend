import React from 'react';
import s from './SubmitForm.module.css';
interface submitFormProps {
  children: React.ReactNode;
  onSubmit?: () => void;
}

const submitForm: React.FC<submitFormProps> = ({ children }) => {
  return <form className={s.submitForm}>{children}</form>;
};

export default submitForm;
