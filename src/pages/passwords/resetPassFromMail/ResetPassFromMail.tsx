import s from './ResetPassFromMail.module.css';

import Layout from '@/components/layout/Layout';
import SubmitForm from '@/components/submitForm/SubmitForm';
import { btnClass, btnType, Button, Input, inputTypes } from '@/shared/ui';
import { TValidationSubmitFormResolver, IFormValues, validateType } from '@/shared/validation';

import { SubmitHandler } from 'react-hook-form';

const ResetPassFromMail = () => {
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Layout>
      <Button className={s.resetPassFromMail__goBackBtn} type={btnType.button} variant={btnClass.back}>
        Назад
      </Button>
      <h2 className={s.resetPassFromMail__title}>Сбросить пароль</h2>
      <SubmitForm
        btnWidth='100%'
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
        <p className={s.resetPassFromMail__comment}>Мы отправим Вам на почту письмо со ссылкой для сброса пароля.</p>
      </SubmitForm>
    </Layout>
  );
};

export default ResetPassFromMail;
