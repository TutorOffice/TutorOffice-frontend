import s from './Register.module.css';

import registerImage from '@/assets/images/register-image.png';
import { btnClass, btnType, Button, Checkbox, Input, inputTypes } from '@/shared/ui';
import { usePhoneMask } from '@/shared/utils';
import { IFormValues, TValidationSubmitFormResolver, validateType } from '@/shared/validation';
import SubmitForm from '@/components/submitForm/SubmitForm';
import Policy from '@/components/policy/Policy';
import Layout from '@/components/layout/Layout';
import CheckboxForm from '@/components/checkbox/Checkbox';

import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
  const phoneRef = React.useRef(null);

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  usePhoneMask();
  return (
    <Layout>
      <Button className={s.register__goBack} type={btnType.button} variant={btnClass.back}>
        Назад
      </Button>
      <h2 className={s.register__title}>Регистрация</h2>
      <div className={s.register__container}>
        <div className={s.register__formContainer}>
          <SubmitForm
            className={s.register__form}
            btnText='Зарегистрироваться'
            btnWidth='100%'
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
              inputRef={phoneRef}
              name={validateType.phone}
              type={inputTypes.phone}
              labelText='Телефон'
              placeholder='+7 999 999 99 99'
            />
            <Input
              name={validateType.password}
              type={inputTypes.password}
              labelText='Пароль'
              isRequired={true}
              commentTip='Пароль должен содержать не менее 7 символов, буквы в верхнем
					и нижнем регистре, цифры и спец. символ (ex: ! @ # $ % - & * _)'
            />
            <Input
              name={validateType.confirmPassword}
              type={inputTypes.password}
              labelText='Повторите пароль'
              isRequired={true}
            />
            <CheckboxForm>
              <Checkbox name='student' text='Ученик' type='radio' id='student' />
              <Checkbox name='tutor' text='Преподаватель' type='radio' id='tutor' />
            </CheckboxForm>
            <Policy name={validateType.policy} />
          </SubmitForm>
          <p className={s.register__desc}>
            Уже есть аккаунт?
            <Link to='/login' className={s.loginLink}>
              <Button variant={btnClass.common} type={btnType.button}>
                Войти
              </Button>
            </Link>
          </p>
        </div>
        <img className={s.register__img} src={registerImage} alt='Регистрация' />
      </div>
    </Layout>
  );
};

export default Register;
