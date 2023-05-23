import { SubmitHandler } from 'react-hook-form';
import Layout from '../../../components/layout/Layout';
import { btnClass, btnType, Button, Input, inputTypes, validateType } from '../../../shared/ui';
import s from './ChangePass.module.css';
import { FormValues } from '../../register/Register';
import { TValidationSubmitFormResolver } from '../../../shared/types/validation';
import SubmitForm from '../../../components/submitForm/SubmitForm';

const ChangePass = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  
  return (
    <Layout>
      <Button type={btnType.button} variant={btnClass.back} bottom={200}>
        Назад
      </Button>
      <h2 className={s.changePass__title}>Сбросить пароль</h2>
      <SubmitForm onSubmit={onSubmit} resolverType={TValidationSubmitFormResolver.CHANGE_PASS}>
        <Input
          name={validateType.email}
          type={inputTypes.email}
          labelText='E-mail, указанный при регистрации'
          isRequired={true}
        />
        <p className={s.changePass__comment}>Мы отправим Вам письмо на почту с ссылкой для смены пароля.</p>
        <Button type={btnType.submit} variant={btnClass.primary}>
          Получить ссылку
        </Button>
      </SubmitForm>
    </Layout>
  );
};

export default ChangePass;
