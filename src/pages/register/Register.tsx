import { Link } from 'react-router-dom';
import s from './Register.module.css';
import { btnClass, btnType, Button, Input, inputTypes } from '../../shared/ui/index';
import SubmitForm from '../../components/submitForm/SubmitForm';
import Checkbox from '../../components/checkbox/Checkbox';
import Policy from '../../components/policy/Policy';
import registerImage from '../../assets/images/register-image.png';
import Layout from '../../components/layout/Layout';

const Register = () => {
  return (
    <Layout>
      <Button type={btnType.button} variant={btnClass.back} bottom={100}>
        Назад
      </Button>
      <h2 className={s.register__title}>Регистрация</h2>
      <SubmitForm>
        <Input type={inputTypes.text} labelText='Фамилия' />
        <Input type={inputTypes.text} labelText='Имя' />
        <Input type={inputTypes.text} labelText='Отчество' />
        <Input type={inputTypes.email} labelText='E-mail' />
        <Input type={inputTypes.phone} labelText='Телефон' />
        <Input
          type={inputTypes.password}
          labelText='Пароль'
          isPassword={true}
          isRequired={true}
          commentTip='Пароль должен содержать не менее 7 символов, буквы в верхнем
          и нижнем регистре и цифры'
        />
        <Input type={inputTypes.password} labelText='Повторите пароль' isPassword={true} isRequired={true} />
        <Checkbox />
        <Policy />
        <Button type={btnType.submit} variant={btnClass.primary}>
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
