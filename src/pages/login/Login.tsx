import s from './Login.module.css';
import Layout from '../../components/layout/Layout';
import SubmitForm from '../../components/submitForm/SubmitForm';
import { btnClass, btnType, Button, Input, inputTypes } from '../../shared/ui';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Layout>
      <Button type={btnType.button} variant={btnClass.back} bottom={200}>
        Назад
      </Button>
      <h2 className={s.login__title}>Вход в личный кабинет</h2>
      <SubmitForm>
        <Input type={inputTypes.email} labelText='Введите e-mail' isRequired={true} />
        <Input type={inputTypes.password} labelText='Введите пароль' isRequired={true} isPassword={true} />
        <Button type={btnType.submit} variant={btnClass.primary}>
          Войти
        </Button>
      </SubmitForm>
      <div className={s.login__links}>
        <p>
          <Link to='/change-pass'>
            <Button type={btnType.button} variant={btnClass.back}>
              Забыли пароль?
            </Button>
          </Link>
        </p>
        <div className={s.login__links_row}>
          <span>Нет аккаунта?</span>
          <Button type={btnType.button} variant={btnClass.back}>
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
