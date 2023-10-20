import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import HeaderAuth from '@/components/header/headerAuth/HeaderAuth'
import Layout from '@/components/layout/Layout'
import LessonPageUserInfo from '@/components/lessonPageUserInfo/LessonPageUserInfo'
import ModalWithButtons from '@/components/modals/modalWithButtons/modalWithButtons'
import SmallModalWithButton from '@/components/modals/smallModalWithButton/SmallModalWithButton'
import { Button } from '@/shared/ui'

import s from './Lesson.module.css'

const Lesson = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenSmallModal, setIsOpenSmallModal] = useState(false)
  const navigate = useNavigate()

  const openModal = () => {
    setIsOpenModal(true)
  }
  const closeModal = () => {
    setIsOpenModal(false)
  }

  const openSmallModal = () => {
    closeModal()
    setIsOpenSmallModal(true)
  }
  const closeSmallModal = () => {
    setIsOpenSmallModal(false)
  }

  const goToMainPage = () => {
    navigate('/')
  }

  return (
    <>
      <Layout>
        <HeaderAuth />
        <Button className={s.lesson__goBackBtn}>Назад</Button>
        <LessonPageUserInfo />
        <div className={s.note}>
          <p className={s.note__title}>Заметки к уроку</p>
          <textarea
            className={s.note__textarea}
            placeholder="Здесь можно оставить заметку, чтобы ничего не забыть"
          />
        </div>
        <Button onClick={openModal}>Отменить урок</Button>
      </Layout>
      <ModalWithButtons
        width="590px"
        isOpen={isOpenModal}
        onClose={closeModal}
        title="Вы уверены, что хотите отменить урок?"
        ghostBtnText="Отменить урок"
        primaryBthText="Назад"
        onClickGhostBtn={openSmallModal}
        onClickPrimaryBtn={closeModal}
      />
      <SmallModalWithButton
        isOpen={isOpenSmallModal}
        onClose={closeSmallModal}
        width="322px"
        smallFont={true}
        title="Урок отменен!"
        btnText="На главную"
        onClickButton={goToMainPage}
      />
    </>
  )
}

export default Lesson
