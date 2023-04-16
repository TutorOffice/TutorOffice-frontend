import React, { createElement } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { FormValues } from '../../pages/register/Register';
import { yupResolver } from '@hookform/resolvers/yup';
import s from './SubmitForm.module.css';

interface submitFormProps {
  children: React.ReactNode;
  onSubmit?: any;
}

const schema = yup
  .object({
    firstName: yup.string().required('Имя указано некорректно'),
    lastName: yup.string().required('Фамилия указана некорректно'),
    patronymic: yup.string().required('Отчество указано некорректно'),
    email: yup.string().email().required('E-mail введен некорректно. Пример: example@domain.ru'),
    phone: yup.string().required('Телефон введен некорректно. Пример: +7 999 999 99 99'),
    password: yup
      .string()
      .min(8, '')
      .matches(/[a-z]+/, '')
      .matches(/[A-Z]+/, '')
      .matches(/\d+/, ''),
  })
  .required('');
const SubmitForm: React.FC<submitFormProps> = ({ children, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
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
