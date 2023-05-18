import React, { useState } from 'react';
import s from './OfficeItem.module.css';
import { btnClass, btnType, Button } from '../../shared/ui';
import statusTrue from '../../assets/icons/status-true.svg';
import statusFalse from '../../assets/icons/status-false.svg';

interface OfficeItemProps {
  photo: string;
  time: string;
  name: string;
  lessonStatus: boolean;
}

const OfficeItem: React.FC<OfficeItemProps> = ({ photo, time, name, lessonStatus }) => {
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
      <p>{time}</p>
      <p className={s.lookHomework}>Посмотреть</p>
      <img
        onClick={onSetStatus}
        className={s.statusIcon}
        src={status ? statusTrue : statusFalse}
        alt='Статус задания'
      />
      <Button type={btnType.button} variant={btnClass.ghost}>
        Открыть
      </Button>
    </li>
  );
};

export default OfficeItem;
