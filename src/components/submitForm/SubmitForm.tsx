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

const cyrillicPattern = /^[\u0400-\u04FF]+$/;
const registerSchema = yup
  .object({
    lastName: yup.string().required('Введите фамилию').matches(cyrillicPattern, 'Фамилия указана некорректно'),
    firstName: yup.string().required('Введите имя').matches(cyrillicPattern, 'Имя указано некорректно'),
    patronymic: yup.string().required('Введите отчество').matches(cyrillicPattern, 'Отчество указано некорректно'),
    email: yup.string().required('Введите E-mail').email(' E-mail введен некорректно. Пример: example@domain.ru'),
    phone: yup.string().required('Введите телефон').max(18).matches(/\d+/, ' '),
    password: yup
      .string()
      .min(8, '')
      .matches(/[a-z]+/, ' ')
      .matches(/[A-Z]+/, ' ')
      .matches(/\d+/, ' '),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
      .required(''),
  })
  .required('');

const loginSchema = yup
  .object({
    email: yup.string().required('Введите E-mail').email(' E-mail введен некорректно. Пример: example@domain.ru'),
    password: yup
      .string()
      .min(8, '')
      .matches(/[a-z]+/, ' ')
      .matches(/[A-Z]+/, ' ')
      .matches(/\d+/, ' '),
  })
  .required('');

// вписать тип формы registerSchema or loginSchema
const SubmitForm: React.FC<submitFormProps> = ({ children, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(registerSchema),
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
