import { SubmitHandler } from 'react-hook-form'

import Layout from '@/components/layout/Layout'
import SubmitForm from '@/components/submitForm/SubmitForm'
import { Button, Input } from '@/shared/ui'
import { IFormValues, TValidationSubmitFormResolver } from '@/shared/validation'

import s from './ChangePassword.module.css'

const ChangePassword = () => {
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <Layout>
      <Button className={s.changePassword__goBackBtn}>Назад</Button>
      <h2 className={s.changePassword__title}>Сменить пароль</h2>
      <SubmitForm
        btnGroup={true}
        btnText="Сохранить"
        onSubmit={onSubmit}
        resolverType={TValidationSubmitFormResolver.CHANGE_PASS_FROM_MAIL}
      >
        <Input label="Введите текущий пароль" />
        <Input
          label="Введите новый пароль"
          description="Пароль должен содержать не менее 6 символов, буквы в верхнем и нижнем регистре и цифры"
        />
        <Input label="Повторите новый пароль" />
      </SubmitForm>
    </Layout>
  )
}

export default ChangePassword
