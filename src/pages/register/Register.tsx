import s from './Register.module.css';
import { btnClass, btnType, Button, Input } from '../../shared/ui/index'
// import Layout from '../../components/layout/Layout';
// import { isClassStaticBlockDeclaration } from 'typescript/lib/tsserverlibrary';
// import HeaderMain from '../../components/headerMain/HeaderMain';
import AuthForm from '../../components/auth-form/AuthForm';
import Checkbox from '../../components/checkbox/Checkbox';

const Register = () => {
  return (
      <AuthForm title={'Регистрация'}>
        <Input labelText='Фамилия'
          commentTip='' />
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
        <Button type={btnType.submit} variant={btnClass.primary} > Зарегистрироваться</Button>
        <p>Уже есть аккаунт? <a href="#" className={s.backLink}>Войти</a></p>
      </AuthForm>
  )
};

export default Register;
