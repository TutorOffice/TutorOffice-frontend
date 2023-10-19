import { SubmitHandler } from 'react-hook-form'

import Layout from '@/components/layout/Layout'
import SubmitForm from '@/components/submitForm/SubmitForm'
import { Button, Input } from '@/shared/ui'
import { IFormValues, TValidationSubmitFormResolver } from '@/shared/validation'

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
          label="Введите новый пароль"
          description="Пароль должен содержать не менее 6 символов, буквы в верхнем и нижнем регистре и цифры"
        />
        <Input label="Повторите новый пароль" />
      </SubmitForm>
    </Layout>
  )
}

export default ResetPassword
