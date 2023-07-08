import s from './Lesson.module.css';

import Layout from '@/components/layout/Layout';
import HeaderAuth from '@/components/headerAuth/HeaderAuth';
// eslint-disable-next-line import/no-unresolved
import ModalWithButtons from '@/components/modals/modalWithButtons/ModalWithButtons';
import SmallModalWithButton from '@/components/modals/smallModalWithButton/SmallModalWithButton';
import LessonPageUserInfo from '@/components/lessonPageUserInfo/LessonPageUserInfo';
import { btnClass, btnType, Button } from '@/shared/ui';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Lesson = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSmallModal, setIsOpenSmallModal] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const openSmallModal = () => {
    closeModal();
    setIsOpenSmallModal(true);
  };
  const closeSmallModal = () => {
    setIsOpenSmallModal(false);
  };

  const goToMainPage = () => {
    navigate('/');
  };

  return (
    <Layout>
      <HeaderAuth className={s.lesson__header} />
      <Button className={s.lesson__goBackBtn} type={btnType.button} variant={btnClass.back}>
        Назад
      </Button>
      <div className={s.lesson}>
        <LessonPageUserInfo />
        <div className={s.note}>
          <p className={s.note__title}>Заметки к уроку</p>
          <textarea className={s.note__textarea} placeholder='Здесь можно оставить заметку, чтобы ничего не забыть' />
        </div>
        <Button type={btnType.button} variant={btnClass.primary} onClick={openModal}>
          Отменить урок
        </Button>
      </div>
      <ModalWithButtons
        width='590px'
        isOpen={isOpenModal}
        onClose={closeModal}
        title='Вы уверены, что хотите отменить урок?'
        ghostBtnText='Отменить урок'
        primaryBthText='Назад'
        onClickGhostBtn={openSmallModal}
        onClickPrimaryBtn={closeModal}
      />
      <SmallModalWithButton
        isOpen={isOpenSmallModal}
        onClose={closeSmallModal}
        width='322px'
        smallFont={true}
        title='Урок отменен!'
        btnText='На главную'
        onClickButton={goToMainPage}
      />
    </Layout>
  );
};

export default Lesson;
