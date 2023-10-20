import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import HeaderAuth from '@/components/header/headerAuth/HeaderAuth'
import HeaderNoAuth from '@/components/header/headerNoAuth/HeaderNoAuth'
import Layout from '@/components/layout/Layout'
import ModalWithButtons from '@/components/modals/modalWithButtons/modalWithButtons'
import SubmitForm from '@/components/submitForm/SubmitForm'
import { Input } from '@/shared/ui'
import TextArea from '@/shared/ui/textarea/Textarea'
import { IFormValues, TValidationSubmitFormResolver } from '@/shared/validation'

import s from './Feedback.module.css'

const Feedback = () => {
  const isAuth = false

  const [isOpenModal, setIsOpenModal] = useState(false)
  const navigate = useNavigate()

  const openModal = () => {
    setIsOpenModal(true)
  }
  const closeModal = () => {
    setIsOpenModal(false)
  }
  const goToMainPage = () => {
    navigate('/')
  }

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
    openModal()
  }

  return (
    <>
      <Layout>
        {isAuth ? <HeaderAuth /> : <HeaderNoAuth />}
        <h2 className={s.feedback__title}>Обратная связь</h2>
        <SubmitForm
          className={s.feedback__form}
          onSubmit={onSubmit}
          resolverType={TValidationSubmitFormResolver.FEEDBACK}
          btnText="Отправить"
        >
          <Input label="Имя" className={s.feedback__input} />
          <Input label="Email" className={s.feedback__input} />
          <TextArea
            label="Ваше сообщение:"
            className={s.feedback__message}
            minRows={5}
            placeholder="Здесь можно оставить любой отзыв, вопрос или предложение по работе сайта"
          />
        </SubmitForm>
      </Layout>
      <ModalWithButtons
        width="590px"
        isOpen={isOpenModal}
        onClose={closeModal}
        title="Ваше сообщение отправлено!"
        ghostBtnText="Написать ещё"
        primaryBthText="На Главную"
        onClickGhostBtn={closeModal}
        onClickPrimaryBtn={goToMainPage}
      />
    </>
  )
}

export default Feedback
