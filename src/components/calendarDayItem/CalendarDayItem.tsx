import s from './CalendarDayItem.module.css';

import { btnClass, btnType, Button } from '@/shared/ui';
import statusTrue from '@/assets/icons/status-true.svg';
import statusFalse from '@/assets/icons/status-false.svg';

import { Link } from 'react-router-dom';
import React, { useState } from 'react';

interface CalendarDayItemProps {
  photo: string;
  time: string;
  name: string;
  lessonStatus: boolean;
  lessonId: number;
  date: string;
}

const CalendarDayItem: React.FC<CalendarDayItemProps> = ({ photo, time, name, lessonStatus, lessonId, date }) => {
  const [status, setStatusIcon] = useState(lessonStatus);
  const onSetStatus = () => {
    setStatusIcon(!status);
  };

  return (
    <li className={s.calendarDayItem}>
      <div className={s.calendarDayItem__user}>
        <img className={s.calendarDayItem__photo} src={photo} alt='Фото пользователя' />
        <p>{name}</p>
      </div>
      <p className={s.calendarDayItem__time}>{time}</p>
      <p className={s.lookHomework}>Посмотреть</p>
      <img
        onClick={onSetStatus}
        className={s.statusIcon}
        src={status ? statusTrue : statusFalse}
        alt='Статус задания'
      />
      <Link to={`/calendar/${date}/${lessonId}`}>
        <Button type={btnType.button} variant={btnClass.ghost}>
          Открыть
        </Button>
      </Link>
    </li>
  );
};

export default CalendarDayItem;
