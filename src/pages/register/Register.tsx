import { Link } from 'react-router-dom';
import s from './Register.module.css';
import { btnClass, btnType, Button, Input, inputTypes, validateType } from '../../shared/ui/index';
import SubmitForm from '../../components/submitForm/SubmitForm';
import Checkbox from '../../components/checkbox/Checkbox';
import Policy from '../../components/policy/Policy';
import registerImage from '../../assets/images/register-image.png';
import Layout from '../../components/layout/Layout';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  patronymic: string;
  password: string;
  phone: string;
}

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    patronymic: yup.string().required(),
    email: yup.string().email(),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  })
  .required();

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(123);
  };
  return (
    <Layout>
      <Button type={btnType.button} variant={btnClass.back} bottom={100}>
        Назад
      </Button>
      <h2 className={s.register__title}>Регистрация</h2>
      <SubmitForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          errors={errors.lastName?.message}
          name={validateType.lastName}
          register={register}
          type={inputTypes.text}
          labelText='Фамилия'
          isRequired={true}
        />

        <Input
          errors={errors.firstName?.message}
          name={validateType.firstName}
          register={register}
          type={inputTypes.text}
          labelText='Имя'
          isRequired={true}
        />

        <Input
          errors={errors.patronymic?.message}
          name={validateType.patronymic}
          type={inputTypes.text}
          labelText='Отчество'
          isRequired={true}
        />

        <Input
          errors={errors.email?.message}
          register={register}
          name={validateType.email}
          type={inputTypes.email}
          labelText='E-mail'
          isRequired={true}
          placeholder={'example@domaim.ru'}
        />
        <Input
          errors={errors.phone?.message}
          name={validateType.phone}
          type={inputTypes.phone}
          labelText='Телефон'
          placeholder={'+7 999 999 99 99'}
        />
        <Input
          name={validateType.password}
          errors={errors.password?.message}
          type={inputTypes.password}
          labelText='Пароль'
          isPassword={true}
          isRequired={true}
          commentTip='Пароль должен содержать не менее 7 символов, буквы в верхнем
          и нижнем регистре и цифры'
        />
        <Input
          name={validateType.password}
          errors={errors.password?.message}
          type={inputTypes.password}
          labelText='Повторите пароль'
          isPassword={true}
          isRequired={true}
        />
        <Checkbox />
        <Policy />
        <Button type={btnType.submit} variant={btnClass.primary} isDisabled={false}>
          Зарегистрироваться
        </Button>
        <img className={s.registerImg} src={registerImage} alt='Регистрация' />
      </SubmitForm>
      <p>
        Уже есть аккаунт?
        <Link to='/login' className={s.backLink}>
          Войти
        </Link>
      </p>
    </Layout>
  );
};

export default Register;
