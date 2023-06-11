import s from './Login.module.css';

import { FormValues } from '../register/Register';

import Layout from '@/components/layout/Layout';
import SubmitForm from '@/components/submitForm/SubmitForm';
import { btnClass, btnType, Button, Input, inputTypes, validateType } from '@/shared/ui';
import { TValidationSubmitFormResolver } from '@/shared/types/validation';

import { SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Layout>
      <Button type={btnType.button} variant={btnClass.back} bottom={200}>
        Назад
      </Button>
      <h2 className={s.login__title}>Вход в личный кабинет</h2>
      <SubmitForm
        btnText='Войти'
        top='35px'
        bottom='30px'
        resolverType={TValidationSubmitFormResolver.LOGIN}
        onSubmit={onSubmit}
      >
        <Input name={validateType.email} type={inputTypes.email} labelText='Введите e-mail' isRequired={true} />
        <Input
          name={validateType.password}
          type={inputTypes.password}
          labelText='Введите пароль'
          isRequired={true}
          isPassword={true}
        />
        {/* <Button type={btnType.submit} variant={btnClass.primary}>
          Войти
        </Button> */}
      </SubmitForm>
      <div className={s.login__links}>
        <p>
          <Link to='/change-pass'>
            <Button type={btnType.button} variant={btnClass.common}>
              Забыли пароль?
            </Button>
          </Link>
        </p>
        <div className={s.login__links_row}>
          <span>Нет аккаунта?</span>
          <Link to='/register'>
            <Button type={btnType.button} variant={btnClass.common}>
              Зарегистрироваться
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
