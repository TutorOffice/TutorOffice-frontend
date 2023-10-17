import { SubmitHandler } from 'react-hook-form'

import Layout from '@/components/layout/Layout'
import SubmitForm from '@/components/submitForm/SubmitForm'
import { Button, Input, inputTypes } from '@/shared/ui'
import {
  IFormValues,
  TValidationSubmitFormResolver,
  validateType,
} from '@/shared/validation'

import s from './ResetPassword.module.css'

const ResetPassword = () => {
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <Layout>
      <Button className={s.resetPassword__goBackBtn}>Назад</Button>
      <h2 className={s.resetPassword__title}>Сбросить пароль</h2>
      <SubmitForm
        btnGroup={true}
        btnText="Сохранить"
        onSubmit={onSubmit}
        resolverType={TValidationSubmitFormResolver.CHANGE_PASS_FROM_MAIL}
      >
        <Input
          name={validateType.password}
          type={inputTypes.password}
          labelText="Введите новый пароль"
          isRequired={true}
          isPassword={true}
          commentTip="Пароль должен содержать не менее 6 символов, буквы в верхнем и нижнем регистре и цифры"
        />
        <Input
          name={validateType.confirmPassword}
          type={inputTypes.password}
          labelText="Повторите новый пароль"
          isRequired={true}
          isPassword={true}
        />
      </SubmitForm>
    </Layout>
  )
}

export default ResetPassword
