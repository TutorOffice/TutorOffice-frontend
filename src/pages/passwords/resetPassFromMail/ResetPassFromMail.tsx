import { SubmitHandler } from 'react-hook-form'

import Layout from '@/components/layout/Layout'
import SubmitForm from '@/components/submitForm/SubmitForm'
import { Button, Input, inputTypes } from '@/shared/ui'
import {
  IFormValues,
  TValidationSubmitFormResolver,
  validateType,
} from '@/shared/validation'

import s from './ResetPassFromMail.module.css'

const ResetPassFromMail = () => {
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <Layout>
      <Button className={s.resetPassFromMail__goBackBtn}>Назад</Button>
      <h2 className={s.resetPassFromMail__title}>Сбросить пароль</h2>
      <SubmitForm
        btnWidth="100%"
        btnText="Получить ссылку"
        onSubmit={onSubmit}
        resolverType={TValidationSubmitFormResolver.CHANGE_PASS}
      >
        <Input
          name={validateType.email}
          type={inputTypes.email}
          labelText="E-mail, указанный при регистрации"
          isRequired={true}
        />
        <p className={s.resetPassFromMail__comment}>
          Мы отправим Вам на почту письмо со ссылкой для сброса пароля.
        </p>
      </SubmitForm>
    </Layout>
  )
}

export default ResetPassFromMail
