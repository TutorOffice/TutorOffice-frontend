import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Profile.module.css';
import Layout from '../../components/layout/Layout';
import { btnClass, btnType, Button, Input, LoadImage } from '../../shared/ui';
import userPhoto from '../../assets/images/profile-photo.jpg';
import LoadPhotoModal from '../../components/modals/loadPhotoModal/LoadPhotoModal';

const Profile = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Layout>
        <Wrapper>
          <header className={s.profile__header}>
            <h2 className={s.profile__title}>Редактирование профиля</h2>
            <Link to='/' className={s.profile__button}>
              Назад на главную
            </Link>
          </header>
          <form className={s.profile__form}>
            <LoadImage image={userPhoto} onClick={openModal} />
            <fieldset className={s.profile__fieldset}>
              <Input labelText='Фамилия' />
              <Input labelText='Имя' />
              <Input labelText='Отчество' />
              <Input labelText='E-mail' />
              <Input labelText='Телефон' />
            </fieldset>
            <fieldset className={s.profile__pass}>
              <Input labelText='Пароль' />
              <Link to='/change-pass'>
                <Button type={btnType.button} variant={btnClass.ghost}>
                  Сменить пароль
                </Button>
              </Link>
            </fieldset>
            <div className={s.profile__controls}>
              <Button type={btnType.submit} variant={btnClass.primary}>
                Сохранить изменения
              </Button>
              <Button type={btnType.reset} variant={btnClass.ghost}>
                Отменить
              </Button>
            </div>
          </form>
        </Wrapper>
      </Layout>
      <LoadPhotoModal isOpen={isOpenModal} onClose={closeModal} />
    </>
  );
};

export default Profile;
