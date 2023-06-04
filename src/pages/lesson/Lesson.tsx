import s from './Lesson.module.css';

import HeaderMain from '@/components/headerMain/HeaderMain';
import Layout from '@/components/layout/Layout';
import UserInfo from '@/components/userInfo/UserInfo';
import Wrapper from '@/components/wrapper/Wrapper';
import { btnClass, btnType, Button } from '@/shared/ui';
import userPhoto from '@/assets/images/user-photo.jpg';
import testPhoto from '@/assets/images/test-student.jpg';
import statusTrue from '@/assets/icons/status-true.svg';
import statusFalse from '@/assets/icons/status-false.svg';

import { Link } from 'react-router-dom';

const testData = { id: 1, photo: testPhoto, time: '10:30 - 11:30', name: 'Алексей Феофанов', lessonStatus: true };

const Lesson = () => {
  return (
    <Layout>
      <Wrapper>
        <HeaderMain bottom={40}>
          <UserInfo
            photo={userPhoto}
            fullName='Гурин Александр Максимович'
            phone='+7 936 619-98-06'
            mail='gurinalex065@yandex.ru'
          />
          <Link to='/profile'>
            <Button type={btnType.button} variant={btnClass.ghost}>
              Выйти
            </Button>
          </Link>
        </HeaderMain>
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
              <Button type={btnType.button} variant={btnClass.back}>
                Написать
              </Button>
            </div>
          </div>
          <div className={s.note}>
            <p className={s.note__title}>Заметки к уроку</p>
            <textarea className={s.note__textarea} placeholder='Здесь можно оставить заметку, чтобы ничего не забыть' />
          </div>
          <Button type={btnType.button} variant={btnClass.primary}>
            Отменить урок
          </Button>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Lesson;
