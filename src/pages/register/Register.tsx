import s from './Register.module.css';

import { btnClass, btnType, Button, Input, inputTypes } from '../../shared/ui';

import SubmitForm from '@/components/submitForm/SubmitForm';
import Policy from '@/components/policy/Policy';
import registerImage from '@/assets/images/register-image.png';
import Layout from '@/components/layout/Layout';
import { usePhoneMask } from '@/shared/utils';
import CheckboxForm from '@/components/checkbox/Checkbox';
import Checkbox from '@/shared/ui/checkbox/Checkbox';
import { TValidationSubmitFormResolver } from '@/shared/types/validation';
import { validateType } from '@/shared/validation/validateTypes';

import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  patronymic: string;
  password: string;
  phone: string;
}

const Register = () => {
  const phoneRef = React.useRef(null);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  usePhoneMask();
  return (
    <Layout>
      <Button type={btnType.button} variant={btnClass.back} bottom={100}>
        Назад
      </Button>
      <h2 className={s.register__title}>Регистрация</h2>
      <SubmitForm
        btnText='Зарегистрироваться'
        top='35px'
        bottom='30px'
        resolverType={TValidationSubmitFormResolver.REGISTER}
        onSubmit={onSubmit}
      >
        <Input name={validateType.lastName} type={inputTypes.text} labelText='Фамилия' isRequired={true} />
        <Input name={validateType.firstName} type={inputTypes.text} labelText='Имя' isRequired={true} />
        <Input name={validateType.patronymic} type={inputTypes.text} labelText='Отчество' />
        <Input
          name={validateType.email}
          type={inputTypes.email}
          labelText='E-mail'
          isRequired={true}
          placeholder='example@domaim.ru'
        />
        <Input
          ref={phoneRef}
          name={validateType.phone}
          type={inputTypes.phone}
          labelText='Телефон'
          placeholder='+7 999 999 99 99'
        />
        <Input
          name={validateType.password}
          type={inputTypes.password}
          labelText='Пароль'
          isPassword={true}
          isRequired={true}
          commentTip='Пароль должен содержать не менее 7 символов, буквы в верхнем
          и нижнем регистре и цифры'
        />
        <Input
          name={validateType.confirmPassword}
          type={inputTypes.password}
          labelText='Повторите пароль'
          isPassword={true}
          isRequired={true}
        />
        <CheckboxForm>
          <Checkbox name='student' TextValue='Ученик' type='radio' id='student' />
          <Checkbox name='tutor' TextValue='Преподаватель' type='radio' id='tutor' />
        </CheckboxForm>
        <Policy name={validateType.policy} />
        <img className={s.registerImg} src={registerImage} alt='Регистрация' />
      </SubmitForm>
      <p>
        Уже есть аккаунт?
        <Link to='/login' className={s.backLink}>
          <Button variant={btnClass.common} type={btnType.button}>
            Войти
          </Button>
        </Link>
      </p>
    </Layout>
  );
};

export default Register;
