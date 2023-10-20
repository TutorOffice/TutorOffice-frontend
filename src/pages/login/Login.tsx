import { SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'

import Layout from '@/components/layout/Layout'
import SubmitForm from '@/components/submitForm/SubmitForm'
import { Button, Input } from '@/shared/ui'
import { IFormValues, TValidationSubmitFormResolver } from '@/shared/validation'

import s from './Login.module.css'

const Login = () => {
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <Layout>
      <Button variant="back" className={s.login__goBack}>
        Назад
      </Button>
      <h2 className={s.login__title}>Вход в личный кабинет</h2>
      <SubmitForm
        className={s.login__form}
        btnText="Войти"
        btnWidth="100%"
        resolverType={TValidationSubmitFormResolver.LOGIN}
        onSubmit={onSubmit}
      >
        <Input label="Введите e-mail" />
        <Input label="Введите пароль" />
      </SubmitForm>
      <Link to="/change-pass" className={s.link_changePass}>
        <Button variant="transparent">Забыли пароль?</Button>
      </Link>
      <div className={s.login__links_row}>
        <span>Нет аккаунта?</span>
        <Link to="/register">
          <Button variant="transparent">Зарегистрироваться</Button>
        </Link>
      </div>
    </Layout>
  )
}

export default Login
