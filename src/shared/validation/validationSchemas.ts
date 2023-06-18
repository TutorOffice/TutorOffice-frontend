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
      .matches(cyrillicPattern, { excludeEmptyString: true, message: patronymicMessages.incorrect }),
    email: yup.string().required(emailMessages.required).email(emailMessages.incorrect),
    phone: yup.string().max(18).matches(/\d+/, { excludeEmptyString: true, message: phoneMessages.incorrect }),
    password: yup
      .string()
      .required('')
      .min(passwordPattern.min, '')
      .matches(passwordPattern.number, '')
      .matches(passwordPattern.special, '')
      .matches(passwordPattern.latin, '')
      .matches(passwordPattern.upperCase, '')
      .matches(passwordPattern.valid, ''),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], passwordMessages.mismatch)
      .required(''),
  })
  .required('');

export const loginSchema = yup
  .object({
    email: yup.string().required(emailMessages.required).email(emailMessages.incorrect),
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

export const changePassFromMailSchema = yup
  .object({
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

export const addStudentSchema = yup.object({
  firstName: yup.string().required(firstNameMessages.required).matches(cyrillicPattern, firstNameMessages.incorrect),
  lastName: yup.string().required(lastNameMessages.required).matches(cyrillicPattern, lastNameMessages.incorrect),
  patronymic: yup
    .string()
    .matches(cyrillicPattern, { excludeEmptyString: true, message: patronymicMessages.incorrect }),
  phone: yup.string().max(18).matches(/\d+/, { excludeEmptyString: true, message: phoneMessages.incorrect }),
  email: yup.string().email(emailMessages.incorrect),
  level: yup.string().max(2),
});

export const profileSchema = yup.object({
  lastName: yup.string().matches(cyrillicPattern, lastNameMessages.incorrect),
  firstName: yup.string().matches(cyrillicPattern, firstNameMessages.incorrect),
  patronymic: yup.string().matches(cyrillicPattern, patronymicMessages.incorrect),
  email: yup.string().email(emailMessages.incorrect),
  phone: yup.string().max(18).matches(/\d+/, phoneMessages.incorrect),
  password: yup
    .string()
    .min(passwordPattern.min, '')
    .matches(passwordPattern.number, '')
    .matches(passwordPattern.special, '')
    .matches(passwordPattern.latin, '')
    .matches(passwordPattern.upperCase, '')
    .matches(passwordPattern.valid, ''),
});
