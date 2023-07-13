import s from './ChangePassword.module.css';

import { btnClass, btnType, Button, Input, inputTypes } from '@/shared/ui';
import Layout from '@/components/layout/Layout';
import SubmitForm from '@/components/submitForm/SubmitForm';
import { TValidationSubmitFormResolver, IFormValues, validateType } from '@/shared/validation';

import { SubmitHandler } from 'react-hook-form';

const ChangePassword = () => {
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Layout>
      <Button className={s.changePassword__goBackBtn} type={btnType.button} variant={btnClass.back}>
        Назад
      </Button>
      <h2 className={s.changePassword__title}>Сменить пароль</h2>
      <SubmitForm
        btnGroup={true}
        btnText='Сохранить'
        onSubmit={onSubmit}
        resolverType={TValidationSubmitFormResolver.CHANGE_PASS_FROM_MAIL}
      >
        <Input
          name={validateType.currentPassword}
          type={inputTypes.password}
          labelText='Введите текущий пароль'
          isRequired={true}
          isPassword={true}
        />
        <Input
          name={validateType.password}
          type={inputTypes.password}
          labelText='Введите новый пароль'
          isRequired={true}
          isPassword={true}
          commentTip='Пароль должен содержать не менее 6 символов, буквы в верхнем и нижнем регистре и цифры'
        />
        <Input
          name={validateType.confirmPassword}
          type={inputTypes.password}
          labelText='Повторите новый пароль'
          isRequired={true}
          isPassword={true}
        />
      </SubmitForm>
    </Layout>
  );
};

export default ChangePassword;
