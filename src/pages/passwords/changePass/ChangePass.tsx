import s from './ChangePass.module.css';

import Layout from '@/components/layout/Layout';
import { btnClass, btnType, Button, Input, inputTypes } from '@/shared/ui';
import { TValidationSubmitFormResolver } from '@/shared/types/validation';
import SubmitForm from '@/components/submitForm/SubmitForm';
import { FormValues } from '@/pages/register/Register';
import { validateType } from '@/shared/validation/validateTypes';

import { SubmitHandler } from 'react-hook-form';

const ChangePass = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Layout>
      <Button type={btnType.button} variant={btnClass.back} bottom={200}>
        Назад
      </Button>
      <h2 className={s.changePass__title}>Сбросить пароль</h2>
      <SubmitForm
        btnText='Получить ссылку'
        onSubmit={onSubmit}
        resolverType={TValidationSubmitFormResolver.CHANGE_PASS}
      >
        <Input
          name={validateType.email}
          type={inputTypes.email}
          labelText='E-mail, указанный при регистрации'
          isRequired={true}
        />
        <p className={s.changePass__comment}>Мы отправим Вам письмо на почту с ссылкой для смены пароля.</p>
      </SubmitForm>
    </Layout>
  );
};

export default ChangePass;
