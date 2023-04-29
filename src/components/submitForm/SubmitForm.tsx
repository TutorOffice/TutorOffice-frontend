import React, { createElement } from 'react';
import { useForm } from 'react-hook-form';
import { FormValues } from '../../pages/register/Register';
import { yupResolver } from '@hookform/resolvers/yup';
import s from './SubmitForm.module.css';
import { loginSchema, registerSchema } from '../../shared/utils/validationSchemas';

interface SubmitFormProps {
  children: React.ReactNode;
  onSubmit: (data: FormValues) => void;
  isRegister: boolean;
}

const SubmitForm: React.FC<SubmitFormProps> = ({ children, onSubmit, isRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: isRegister ? yupResolver(registerSchema) : yupResolver(loginSchema),
    mode: 'onBlur',
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.submitForm}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    // @ts-ignore
                    errors: errors[child.props.name],
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
};

export default SubmitForm;
