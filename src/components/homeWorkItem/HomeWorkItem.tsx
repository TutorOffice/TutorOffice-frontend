import s from './HomeWorkItem.module.css';

import sentIcon from '@/assets/icons/arrow-up.svg';
import todoIcon from '@/assets/icons/alert.svg';
import doneIcon from '@/assets/icons/status-true.svg';
import mailIcon from '@/assets/icons/mail.svg';

import React from 'react';

interface HomeWorkItemProps {
  photo: string;
  fullName: string;
  lesson: string;
  sent: number;
  todo: number;
  done: number;
}

const HomeWorkItem: React.FC<HomeWorkItemProps> = ({ photo, fullName, lesson, sent, todo, done }) => {
  return (
    <li className={s.homeworkItem}>
      <div className={s.homeworkItem__stud}>
        <img className={s.homeworkItem__photo} src={photo} alt='Фото ученика' />
        <p className={s.homeworkItem__name}>{fullName}</p>
      </div>
      <p className={s.homeworkItem__subject}>{lesson}</p>
      <div className={s.status}>
        <img className={s.status__img} src={sentIcon} alt='Отправлено' />
        <span className={s.status__count_sent}>{sent}</span>
      </div>
      <div className={s.status}>
        <img className={s.status__img} src={todoIcon} alt='На проверку' />
        <span className={s.status__count_todo}>{todo}</span>
      </div>
      <div className={s.status}>
        <img className={s.status__img} src={doneIcon} alt='Принято' />
        <span className={s.status__count_done}>{done}</span>
      </div>
      <button className={s.mailButton}>
        <img className={s.mailButton__img} src={mailIcon} alt='Сообщения' />
      </button>
    </li>
  );
};

export default HomeWorkItem;
