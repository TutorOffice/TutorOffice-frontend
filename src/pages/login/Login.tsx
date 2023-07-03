import s from './Login.module.css';

import Layout from '@/components/layout/Layout';
import SubmitForm from '@/components/submitForm/SubmitForm';
import { btnClass, btnType, Button, Input, inputTypes } from '@/shared/ui';
import { TValidationSubmitFormResolver, IFormValues, validateType } from '@/shared/validation';

import { SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Layout>
      <Button className={s.login__goBack} type={btnType.button} variant={btnClass.back}>
        Назад
      </Button>
      <h2 className={s.login__title}>Вход в личный кабинет</h2>
      <SubmitForm
        className={s.login__form}
        btnText='Войти'
        btnWidth='100%'
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
      </SubmitForm>
      <Link to='/change-pass' className={s.link_changePass}>
        <Button type={btnType.button} variant={btnClass.common}>
          Забыли пароль?
        </Button>
      </Link>
      <div className={s.login__links_row}>
        <span>Нет аккаунта?</span>
        <Link to='/register'>
          <Button type={btnType.button} variant={btnClass.common}>
            Зарегистрироваться
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default Login;
