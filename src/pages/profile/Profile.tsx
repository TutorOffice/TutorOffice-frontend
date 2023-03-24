import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Profile.module.css';
import Layout from '../../components/layout/Layout';
import { btnClass, btnType, Button, ButtonGroup, Input, inputTypes, LoadImage } from '../../shared/ui';
import userPhoto from '../../assets/images/profile-photo.jpg';
import LoadPhotoModal from '../../components/modals/loadPhotoModal/LoadPhotoModal';
import Wrapper from '../../components/wrapper/Wrapper';

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
              <Input type={inputTypes.text} labelText='Фамилия' />
              <Input type={inputTypes.text} labelText='Имя' />
              <Input type={inputTypes.text} labelText='Отчество' />
              <Input type={inputTypes.email} labelText='E-mail' />
              <Input type={inputTypes.phone} labelText='Телефон' />
            </fieldset>
            <fieldset className={s.profile__pass}>
              <Input type={inputTypes.password} iconVisibility={false} isPassword={true} labelText='Пароль' />
              <Link to='/change-pass'>
                <Button type={btnType.button} variant={btnClass.ghost}>
                  Сменить пароль
                </Button>
              </Link>
            </fieldset>
            <ButtonGroup>
              <Button type={btnType.submit} variant={btnClass.primary}>
                Сохранить изменения
              </Button>
              <Button type={btnType.reset} variant={btnClass.ghost}>
                Отменить
              </Button>
            </ButtonGroup>
          </form>
        </Wrapper>
      </Layout>
      <LoadPhotoModal isOpen={isOpenModal} onClose={closeModal} />
    </>
  );
};

export default Profile;
