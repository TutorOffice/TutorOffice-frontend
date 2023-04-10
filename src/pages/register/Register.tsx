import { Link } from 'react-router-dom';
import s from './Register.module.css';
import { btnClass, btnType, Button, Input, inputTypes, validateType } from '../../shared/ui/index';
import SubmitForm from '../../components/submitForm/SubmitForm';
import Checkbox from '../../components/checkbox/Checkbox';
import Policy from '../../components/policy/Policy';
import registerImage from '../../assets/images/register-image.png';
import Layout from '../../components/layout/Layout';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  patronymic: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      patronymic: '',
      email: 'example@domaim.ru',
    },
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <Layout>
      <Button type={btnType.button} variant={btnClass.back} bottom={100}>
        Назад
      </Button>
      <h2 className={s.register__title}>Регистрация</h2>
      <SubmitForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          name={validateType.lastName}
          register={register}
          type={inputTypes.text}
          labelText='Фамилия'
          isRequired={true}
        />
        <Input
          name={validateType.firstName}
          register={register}
          type={inputTypes.text}
          labelText='Имя'
          isRequired={true}
        />
        <Input type={inputTypes.text} labelText='Отчество' isRequired={true} />
        <Input
          register={register}
          name={validateType.patronymic}
          type={inputTypes.email}
          labelText='E-mail'
          isRequired={true}
          placeholder={'example@domaim.ru'}
        />
        <Input type={inputTypes.phone} labelText='Телефон' placeholder={'+7 999 999 99 99'} />
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
