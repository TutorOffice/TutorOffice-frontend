import s from './Register.module.css';
import { btnClass, btnType, Button, Input } from '../../shared/ui/index'
// import Layout from '../../components/layout/Layout';
// import { isClassStaticBlockDeclaration } from 'typescript/lib/tsserverlibrary';
// import HeaderMain from '../../components/headerMain/HeaderMain';
import AuthForm from '../../components/auth-form/AuthForm';
import Checkbox from '../../components/checkbox/Checkbox';
import Policy from '../../components/policy/Policy';
import registerImage from '../../assets/images/register-image.png'

import { Link } from 'react-router-dom';

const Register = () => {
  return (
      <AuthForm title={'Регистрация'}>
        <Input labelText='Фамилия'
          commentTip='' isPassword={false}
          isDisabled={false}/>
        <Input labelText='Имя'
          commentTip='' />
        <Input labelText='Отчество'
          commentTip='' />
        <Input labelText='E-mail'
          commentTip='' />
        <Input labelText='Телефон'
          commentTip='' />
        <Input labelText='Пароль'
          isPassword={true}
          isRequired={true}
          commentTip='Пароль должен содержать не менее 7 символов, буквы в верхнем
          и нижнем регистре и цифры'/>
        <Input labelText='Повторите пароль'
          isPassword={true}
          isRequired={true}
          commentTip='' />

        <Checkbox />
        <Policy />
        <Button type={btnType.submit} variant={btnClass.primary} > Зарегистрироваться</Button>
        <p>Уже есть аккаунт? <Link to='/login' className={s.backLink}>Войти</Link></p>
        <img className={s.registerImg} src={registerImage} alt="Регистрация" />
      </AuthForm>
  )
};

export default Register;
