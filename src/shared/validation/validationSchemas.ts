import * as yup from 'yup'

import {
  cyrillicLatinPattern,
  emailMessages,
  firstNameMessages,
  lastNameMessages,
  passwordMessages,
  passwordPattern,
  patronymicMessages,
  phoneMessages,
} from './validationConstants'

export const registerSchema = yup
  .object({
    lastName: yup
      .string()
      .matches(cyrillicLatinPattern, lastNameMessages.incorrect)
      .required(lastNameMessages.required),

    firstName: yup
      .string()
      .matches(cyrillicLatinPattern, firstNameMessages.incorrect)
      .required(firstNameMessages.required),

    patronymic: yup.string().matches(cyrillicLatinPattern, {
      excludeEmptyString: true,
      message: patronymicMessages.incorrect,
    }),

    email: yup
      .string()
      .email(emailMessages.incorrect)
      .required(emailMessages.required),

    phone: yup.string().max(18).matches(/\d+/, {
      excludeEmptyString: true,
      message: phoneMessages.incorrect,
    }),

    password: yup
      .string()
      .min(passwordPattern.min, passwordMessages.min)
      .matches(passwordPattern.special, passwordMessages.special)
      .matches(passwordPattern.latin, passwordMessages.latin)
      .matches(passwordPattern.upperCase, passwordMessages.upperCase)
      .matches(passwordPattern.valid, passwordMessages.valid)
      .matches(passwordPattern.number, passwordMessages.number)
      .required(passwordMessages.required),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], passwordMessages.mismatch)
      .required(''),

    userRole: yup.string().required('Выберите роль'),

    policy: yup.boolean().isTrue(' ').required(' '),
  })
  .required('')

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required(emailMessages.required)
      .email(emailMessages.incorrect),
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
  .required('')

export const changePassSchema = yup
  .object({
    email: yup
      .string()
      .required(emailMessages.required)
      .email(emailMessages.incorrect),
  })
  .required('')

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
  .required('')

export const addStudentSchema = yup.object({
  firstName: yup
    .string()
    .required(firstNameMessages.required)
    .matches(cyrillicLatinPattern, firstNameMessages.incorrect),
  lastName: yup
    .string()
    .required(lastNameMessages.required)
    .matches(cyrillicLatinPattern, lastNameMessages.incorrect),
  patronymic: yup.string().matches(cyrillicLatinPattern, {
    excludeEmptyString: true,
    message: patronymicMessages.incorrect,
  }),
  phone: yup.string().max(18).matches(/\d+/, {
    excludeEmptyString: true,
    message: phoneMessages.incorrect,
  }),
  email: yup.string().email(emailMessages.incorrect),
  level: yup.string().max(2),
})

export const profileSchema = yup.object({
  lastName: yup
    .string()
    .matches(cyrillicLatinPattern, lastNameMessages.incorrect),
  firstName: yup
    .string()
    .matches(cyrillicLatinPattern, firstNameMessages.incorrect),
  patronymic: yup
    .string()
    .matches(cyrillicLatinPattern, patronymicMessages.incorrect),
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
})

export const feedbackSchema = yup.object({
  firstName: yup
    .string()
    .required(firstNameMessages.required)
    .matches(cyrillicLatinPattern, firstNameMessages.incorrect),
  email: yup
    .string()
    .required(emailMessages.required)
    .email(emailMessages.incorrect),
  feedbackMessage: yup
    .string()
    .matches(cyrillicLatinPattern, { excludeEmptyString: true }),
})
