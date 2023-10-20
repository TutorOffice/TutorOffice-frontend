import { Radio as MantRadio } from '@mantine/core'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'

import registerImage from '@/assets/images/register-image.png'
import Layout from '@/components/layout/Layout'
import Policy from '@/components/policy/Policy'
import SubmitForm from '@/components/submitForm/SubmitForm'
import { Button, Input, Radio } from '@/shared/ui'
import InputPassword from '@/shared/ui/input/InputPassword/InputPassword'
import InputPhone from '@/shared/ui/input/InputPhone/InputPhone'
import { IFormValues, TValidationSubmitFormResolver } from '@/shared/validation'

import s from './Register.module.css'

const Register = () => {
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <Layout>
      <Button variant="back" className={s.register__goBack}>
        Назад
      </Button>
      <h2 className={s.register__title}>Регистрация</h2>
      <div className={s.register__container}>
        <div className={s.register__formContainer}>
          <SubmitForm
            className={s.register__form}
            btnText="Зарегистрироваться"
            btnWidth="100%"
            resolverType={TValidationSubmitFormResolver.REGISTER}
            onSubmit={onSubmit}
          >
            <Input label="Фамилия" />
            <Input label="Имя" />
            <Input label="Отчество" />
            <Input label="E-mail" />
            <InputPhone label="Телефон" placeholder="+7 999 999 99 99" />
            <InputPassword
              label="Пароль"
              description="Пароль должен содержать не менее 7 символов, буквы в верхнем
					и нижнем регистре, цифры и спец. символ (ex: ! @ # $ % - & * _)"
            />
            <InputPassword label="Повторите пароль" />
            <MantRadio.Group className={s.register__radio}>
              <Radio value="Tutor" label="Преподователь" />
              <Radio value="Student" label="Ученик" />
            </MantRadio.Group>
            <Policy className={s.register__policy} />
          </SubmitForm>
          <p className={s.register__desc}>
            Уже есть аккаунт?
            <Link to="/login" className={s.loginLink}>
              <Button variant="transparent">Войти</Button>
            </Link>
          </p>
        </div>
        <img
          className={s.register__img}
          src={registerImage}
          alt="Регистрация"
        />
      </div>
    </Layout>
  )
}

export default Register
