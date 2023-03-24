import Layout from '../../../components/layout/Layout';
import SubmitForm from '../../../components/submitForm/SubmitForm';
import { btnClass, btnType, Button, Input, inputTypes } from '../../../shared/ui';
import s from './ChangePass.module.css';

const ChangePass = () => {
  return (
    <Layout>
      <Button type={btnType.button} variant={btnClass.back} bottom={200}>
        Назад
      </Button>
      <h2 className={s.changePass__title}>Сбросить пароль</h2>
      <SubmitForm>
        <Input type={inputTypes.email} labelText='E-mail, указанный при регистрации' isRequired={true} />
        <p className={s.changePass__comment}>Мы отправим Вам письмо на почту с ссылкой для смены пароля.</p>
        <Button type={btnType.submit} variant={btnClass.primary}>
          Получить ссылку
        </Button>
      </SubmitForm>
    </Layout>
  );
};

export default ChangePass;
