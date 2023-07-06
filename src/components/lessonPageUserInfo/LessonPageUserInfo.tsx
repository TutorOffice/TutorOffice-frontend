import s from './LessonPageUserInfo.module.css';

import { Button, btnClass, btnType } from '@/shared/ui';
import testPhoto from '@/assets/images/test-student.jpg';
import statusTrue from '@/assets/icons/status-true.svg';
import statusFalse from '@/assets/icons/status-false.svg';

const testData = {
  id: 1,
  photo: testPhoto,
  time: '10:30 - 11:30',
  name: 'Алексей Феофанов',
  lessonStatus: true,
};

const LessonPageUserInfo = () => {
  return (
    <div className={s.user}>
      <img className={s.user__photo} src={testData.photo} alt='Фото пользователя' />
      <div className={s.user__info}>
        <p className={s.user__name}>{testData.name}</p>
        <div className={s.user__desc}>
          <p className={s.user__time}>{testData.time}</p>
          <img className={s.user__status} src={testData.lessonStatus ? statusTrue : statusFalse} alt='Статус задания' />
        </div>
        <Button type={btnType.button} variant={btnClass.common}>
          Написать
        </Button>
      </div>
    </div>
  );
};

export default LessonPageUserInfo;
