import s from './Lesson.module.css';

import Layout from '@/components/layout/Layout';
import Wrapper from '@/components/wrapper/Wrapper';
import { btnClass, btnType, Button } from '@/shared/ui';
import testPhoto from '@/assets/images/test-student.jpg';
import statusTrue from '@/assets/icons/status-true.svg';
import statusFalse from '@/assets/icons/status-false.svg';
import HeaderAuth from '@/components/headerAuth/HeaderAuth';
import CancelLessonModal from '@/components/modals/cancelLessonModal/CancelLessonModal';

import { useState } from 'react';

const testData = { id: 1, photo: testPhoto, time: '10:30 - 11:30', name: 'Алексей Феофанов', lessonStatus: true };

const Lesson = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Layout>
      <Wrapper>
        <HeaderAuth bottom={40} />
        <Button type={btnType.button} variant={btnClass.back} bottom={60}>
          Назад
        </Button>
        <div className={s.lesson}>
          <div className={s.student}>
            <img className={s.student__photo} src={testData.photo} alt='Фото ученика' />
            <div className={s.student__info}>
              <p className={s.student__name}>{testData.name}</p>
              <div className={s.student__desc}>
                <p className={s.student__time}>{testData.time}</p>
                <img
                  className={s.student__status}
                  src={testData.lessonStatus ? statusTrue : statusFalse}
                  alt='Статус задания'
                />
              </div>
              <Button type={btnType.button} variant={btnClass.common}>
                Написать
              </Button>
            </div>
          </div>
          <div className={s.note}>
            <p className={s.note__title}>Заметки к уроку</p>
            <textarea className={s.note__textarea} placeholder='Здесь можно оставить заметку, чтобы ничего не забыть' />
          </div>
          <Button type={btnType.button} variant={btnClass.primary} onClick={openModal}>
            Отменить урок
          </Button>
        </div>
      </Wrapper>
      <CancelLessonModal isOpen={isOpenModal} onClose={closeModal} />
    </Layout>
  );
};

export default Lesson;
