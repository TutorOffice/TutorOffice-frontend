import s from './Register.module.css';
import { btnClass, btnType, Button, Input } from '../../shared/ui/index';
// import Layout from '../../components/layout/Layout';
// import { isClassStaticBlockDeclaration } from 'typescript/lib/tsserverlibrary';
// import HeaderMain from '../../components/headerMain/HeaderMain';
import SubmitForm from '../../components/submitForm/SubmitForm';
import Checkbox from '../../components/checkbox/Checkbox';
import Policy from '../../components/policy/Policy';
import registerImage from '../../assets/images/register-image.png';

import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

const Register = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Layout>
      <button className={s.backLink} onClick={goBack}>
        Назад
      </button>
      <h2 className={s.register__title}>Регистрация</h2>
      <SubmitForm>
        <Input labelText='Фамилия' commentTip='' isPassword={false} isDisabled={false} />
        <Input labelText='Имя' commentTip='' />
        <Input labelText='Отчество' commentTip='' />
        <Input labelText='E-mail' commentTip='' />
        <Input labelText='Телефон' commentTip='' />
        <Input
          labelText='Пароль'
          isPassword={true}
          isRequired={true}
          commentTip='Пароль должен содержать не менее 7 символов, буквы в верхнем
          и нижнем регистре и цифры'
        />
        <Input labelText='Повторите пароль' isPassword={true} isRequired={true} commentTip='' />

        <Checkbox />
        <Policy />
        <Button type={btnType.submit} variant={btnClass.primary}>
          {' '}
          Зарегистрироваться
        </Button>

        <img className={s.registerImg} src={registerImage} alt='Регистрация' />
      </SubmitForm>
      <p>
        Уже есть аккаунт?{' '}
        <Link to='/login' className={s.backLink}>
          Войти
        </Link>
      </p>
    </Layout>
  );
};

export default Register;
