import s from './OfficeItem.module.css';

import { btnClass, btnType, Button } from '@/shared/ui';
import statusTrue from '@/assets/icons/status-true.svg';
import statusFalse from '@/assets/icons/status-false.svg';

import { Link } from 'react-router-dom';
import React, { useState } from 'react';

interface OfficeItemProps {
  photo: string;
  time: string;
  name: string;
  lessonStatus: boolean;
  lessonId: number;
  date: string;
}

const OfficeItem: React.FC<OfficeItemProps> = ({ photo, time, name, lessonStatus, lessonId, date }) => {
  const [status, setStatusIcon] = useState(lessonStatus);
  const onSetStatus = () => {
    setStatusIcon(!status);
  };

  return (
    <li className={s.officeItem}>
      <div className={s.officeItem__user}>
        <img className={s.officeItem__photo} src={photo} alt='Фото пользователя' />
        <p>{name}</p>
      </div>
      <p className={s.officeItem__time}>{time}</p>
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

export default OfficeItem;
