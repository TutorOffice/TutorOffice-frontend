import * as yup from 'yup';

export const cyrillicPattern = /^[\u0400-\u04FF]+$/;
export const registerSchema = yup
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

export const loginSchema = yup
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
