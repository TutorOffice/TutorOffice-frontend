import { Radio as MantRadio } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import React, { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'

import registerImage from '@/assets/images/register-image.png'
import Layout from '@/components/layout/Layout'
import Policy from '@/components/policy/Policy'
import SubmitForm from '@/components/submitForm/SubmitForm'
import { useRegistrationMutation } from '@/entities/auth/api'
import { Button, Checkbox, Input, Radio } from '@/shared/ui'
import InputPassword from '@/shared/ui/input/InputPassword/InputPassword'
import InputPhone from '@/shared/ui/input/InputPhone/InputPhone'
import { RegisterForm } from '@/shared/validation/formValues'
import {
  registerInitialValues,
  registerSchema,
} from '@/shared/validation/validationSchemas'

import s from './Register.module.css'

const Register = () => {
  const form = useForm<RegisterForm>({
    validate: yupResolver(registerSchema),
    validateInputOnBlur: true,
    initialValues: registerInitialValues,
  })
  const [isAgreed, setIsAgreed] = useState(false)
  const [registration] = useRegistrationMutation()

  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
    // eslint-disable-next-line no-console
    const isTeacher = data.is_teacher === 'tutor'
    const user = { ...data, is_teacher: isTeacher }
    registration(user)
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
            disabledButton={!(form.isValid() && isAgreed)}
            btnText="Зарегистрироваться"
            className={s.register__form}
            onSubmit={form.onSubmit(onSubmit)}
          >
            <Input
              label="Фамилия"
              required
              {...form.getInputProps('last_name')}
            />
            <Input label="Имя" required {...form.getInputProps('first_name')} />
            <Input
              label="Отчество"
              {...form.getInputProps('patronymic_name')}
            />
            <Input label="E-mail" required {...form.getInputProps('email')} />
            <InputPhone
              label="Телефон"
              placeholder="+7 999 999 99 99"
              {...form.getInputProps('phone')}
            />
            <InputPassword
              required
              label="Пароль"
              description="Пароль должен содержать не менее 7 символов, буквы в верхнем
					и нижнем регистре, цифры и спец. символ (ex: ! @ # $ % - & * _)"
              {...form.getInputProps('password')}
            />
            <InputPassword
              required
              label="Повторите пароль"
              {...form.getInputProps('password2')}
            />
            <MantRadio.Group
              withAsterisk
              className={s.register__radio}
              {...form.getInputProps('is_teacher')}
            >
              <Radio value="tutor" label="Преподаватель" />
              <Radio value="student" label="Ученик" />
            </MantRadio.Group>
            <Policy
              checkbox={
                <Checkbox
                  checked={isAgreed}
                  onChange={(event) => setIsAgreed(event.currentTarget.checked)}
                />
              }
              className={s.register__policy}
            />
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
