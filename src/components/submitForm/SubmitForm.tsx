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
const schema = yup
  .object({
    lastName: yup.string().matches(cyrillicPattern, 'Фамилия указана некорректно').required('Введите фамилию'),
    firstName: yup.string().matches(cyrillicPattern, 'Имя указано некорректно').required('Введите имя'),
    patronymic: yup.string().matches(cyrillicPattern, 'Отчество указано некорректно').required('Введите отчество'),
    email: yup.string().email(' E-mail введен некорректно. Пример: example@domain.ru').required('Введите E-mail'),
    phone: yup.string().max(18).matches(/\d+/, ' ').required('Введите телефон'),
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
