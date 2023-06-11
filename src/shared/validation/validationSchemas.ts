import {
  cyrillicPattern,
  passwordPattern,
  passwordMessages,
  lastNameMessages,
  firstNameMessages,
  patronymicMessages,
  emailMessages,
  phoneMessages,
} from './validationConstants';

import * as yup from 'yup';

export const registerSchema = yup
  .object({
    lastName: yup.string().required(lastNameMessages.required).matches(cyrillicPattern, lastNameMessages.incorrect),
    firstName: yup.string().required(firstNameMessages.required).matches(cyrillicPattern, firstNameMessages.incorrect),
    patronymic: yup
      .string()
      .required(patronymicMessages.required)
      .matches(cyrillicPattern, patronymicMessages.incorrect),
    email: yup.string().required(emailMessages.required).email(emailMessages.incorrect),
    phone: yup.string().required(phoneMessages.required).max(18).matches(/\d+/, phoneMessages.incorrect),
    password: yup
      .string()
      .required(passwordMessages.required)
      .min(passwordPattern.min, passwordMessages.min)
      .matches(passwordPattern.number, passwordMessages.number)
      .matches(passwordPattern.special, passwordMessages.special)
      .matches(passwordPattern.latin, passwordMessages.latin)
      .matches(passwordPattern.upperCase, passwordMessages.upperCase)
      .matches(passwordPattern.valid, passwordMessages.valid),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], passwordMessages.mismatch)
      .required(passwordMessages.required),
  })
  .required('');

export const loginSchema = yup
  .object({
    email: yup.string().required('Введите E-mail').email('E-mail введен некорректно. Пример: example@domain.ru'),
    password: yup
      .string()
      .required(passwordMessages.required)
      .min(passwordPattern.min, passwordMessages.min)
      .matches(passwordPattern.number, passwordMessages.number)
      .matches(passwordPattern.special, passwordMessages.special)
      .matches(passwordPattern.latin, passwordMessages.latin)
      .matches(passwordPattern.upperCase, passwordMessages.upperCase)
      .matches(passwordPattern.valid, passwordMessages.valid),
  })
  .required('');

export const changePassSchema = yup
  .object({
    email: yup.string().required(emailMessages.required).email(emailMessages.incorrect),
  })
  .required('');

export const addStudentSchema = yup.object({
  firstName: yup.string().required(firstNameMessages.required).matches(cyrillicPattern, firstNameMessages.incorrect),
  lastName: yup.string().required(lastNameMessages.required).matches(cyrillicPattern, lastNameMessages.incorrect),
  patronymic: yup.string().matches(cyrillicPattern, patronymicMessages.incorrect),
  phone: yup.string().max(18).matches(/\d+/, phoneMessages.incorrect),
  email: yup.string().email(emailMessages.incorrect),
  level: yup.string().max(2),
});
