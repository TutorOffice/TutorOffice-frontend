import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'

import userPhoto from '@/assets/images/profile-photo.jpg'
import HeaderMain from '@/components/header/headerMain/HeaderMain'
import Layout from '@/components/layout/Layout'
import LoadFileModal from '@/components/modals/loadFileModal/LoadFileModal'
import SubmitForm from '@/components/submitForm/SubmitForm'
import { Button, Input, LoadImage } from '@/shared/ui'
import { IFormValues, TValidationSubmitFormResolver } from '@/shared/validation'

import s from './Profile.module.css'

const Profile = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const openModal = () => {
    setIsOpenModal(true)
  }
  const closeModal = () => {
    setIsOpenModal(false)
  }

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <>
      <Layout>
        <HeaderMain className={s.profile__header}>
          <h2 className={s.profile__title}>Редактирование профиля</h2>
          <Link to="/">
            <Button>Назад на главную</Button>
          </Link>
        </HeaderMain>
        <div className={s.profile__formWrapper}>
          <SubmitForm
            className={s.profile__form}
            resolverType={TValidationSubmitFormResolver.PROFILE}
            btnGroup={true}
            btnText="Сохранить изменения"
            submitBtnClassName={s.profile__submitButton}
            onSubmit={onSubmit}
          >
            <LoadImage
              className={s.profile__loadPhoto}
              image={userPhoto}
              onClick={openModal}
            />
            <Input label="Фамилия" />
            <Input label="Имя" />
            <Input label="Отчество" />
            <Input label="E-mail" />
            <Input label="Телефон" />
            <Input label="Пароль" />
            <Input label="Предмет" />
          </SubmitForm>
          <Link to="/change-pass" className={s.change_pass}>
            <Button className={s.changePass__button}>Сменить пароль</Button>
          </Link>
        </div>
      </Layout>
      <LoadFileModal
        isOpen={isOpenModal}
        onClose={closeModal}
        title="Загрузка новой фотографии"
        modalDescription="Ученикам будет проще узнать вас, если вы загрузите свою настоящую фотографию. Вы можете загрузить изображение
        размером не больше 3Мб, в формате JPG, GIF или PNG."
      />
    </>
  )
}

export default Profile
