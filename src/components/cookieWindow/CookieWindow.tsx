import React from 'react';
import { btnClass, btnType, Button } from '../../shared/ui';
import s from './CookieWindow.module.css';

interface CookieWindowProps {
  onClose: () => void;
}

const CookieWindow: React.FC<CookieWindowProps> = ({ onClose }) => {
  return (
    <div className={s.cookie}>
      <p className={s.cookie__text}>
        При использовании данного сайта, вы подтверждаете свое согласие на использование файлов cookie и других похожих
        технологий в соответствии с настоящим уведомлением.
      </p>
      <div className={s.cookie__buttons}>
        <Button onClick={onClose} type={btnType.button} variant={btnClass.primary}>
          Ок
        </Button>
        <Button type={btnType.button} variant={btnClass.primary}>
          Не ок
        </Button>
      </div>
    </div>
  );
};

export default CookieWindow;
