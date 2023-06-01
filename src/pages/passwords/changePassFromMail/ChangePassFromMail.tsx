import s from './ChangePassFromMail.module.css';

import { btnClass, btnType, Button, ButtonGroup, Input, inputTypes } from '../../../shared/ui';


import Layout from '@/components/layout/Layout';
import SubmitForm from '@/components/submitForm/SubmitForm';
import { FormValues } from '@/pages/register/Register';
import { TValidationSubmitFormResolver } from '@/shared/types/validation';

import { SubmitHandler } from 'react-hook-form';

const ChangePassFromMail = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    return;
  };

  return (
    <Layout>
      <Button type={btnType.button} variant={btnClass.back} bottom={200}>
        Назад
      </Button>
      <h2 className={s.changePassFromMail__title}>Сбросить пароль</h2>
      <SubmitForm onSubmit={onSubmit} resolverType={TValidationSubmitFormResolver.CHANGE_PASS}>
        <Input
          type={inputTypes.password}
          labelText='Введите новый пароль'
          isRequired={true}
          isPassword={true}
          commentTip='Пароль должен содержать не менее 7 символов, буквы в верхнем
                      и нижнем регистре и цифры'
        />
        <Input type={inputTypes.password} labelText='Повторите новый пароль' isRequired={true} isPassword={true} />
        <ButtonGroup width='100%'>
          <Button type={btnType.submit} variant={btnClass.primary} isDisabled={true}>
            Сохранить
          </Button>
          <Button type={btnType.button} variant={btnClass.ghost}>
            Отменить
          </Button>
        </ButtonGroup>
      </SubmitForm>
    </Layout>
  );
};

export default ChangePassFromMail;
