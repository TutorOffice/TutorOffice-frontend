import React from 'react';
import s from './SubmitForm.module.css';
import { useValid } from '../../pages/login/useValid';

interface submitFormProps {
  children: React.ReactNode;
}

const SubmitForm: React.FC<submitFormProps> = ({ children }) => { 
  const { onSubmit, handleSubmit } = useValid();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.submitForm}>
      {children}
    </form>
  );
};

export default SubmitForm;
