import React from 'react';
import s from './OfficeItem.module.css';
import { btnClass, btnType, Button } from '../../shared/ui';

interface OfficeItemProps {
  photo: string;
  time: string;
  name: string;
  theme: string;
  homeWork: boolean;
}

const OfficeItem: React.FC<OfficeItemProps> = ({ photo, time, name, theme, homeWork }) => {
  return (
    <li className={s.officeItem}>
      <img className={s.item__photo} src={photo} alt='Фото пользователя' />
      <p>{time}</p>
      <p>{name}</p>
      <p>{theme}</p>
      <p>{homeWork ? 'Есть' : 'Нет'}</p>
      <Button type={btnType.button} variant={btnClass.primary}>
        Открыть
      </Button>
    </li>
  );
};

export default OfficeItem;
