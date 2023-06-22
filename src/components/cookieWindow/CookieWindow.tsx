import s from './CookieWindow.module.css';

import { btnClass, btnType, Button } from '@/shared/ui';
import { ReactComponent as CloseCookie } from '@/assets/icons/close-cookie.svg';

import React from 'react';

interface CookieWindowProps {
  onClose: () => void;
}

const CookieWindow: React.FC<CookieWindowProps> = ({ onClose }) => {
  return (
    <div className={s.cookie}>
      <span className={s.cookie__text}>
        Этот сайт использует cookie и другие похожие технологии для хранения данных в соответствии с настоящим
        Уведомлением. <br /> Продолжая использовать сайт, Вы даете свое согласие на работу с этими файлами.
      </span>
      <Button onClick={onClose} type={btnType.button} variant={btnClass.primary}>
        Ок
      </Button>
      <div className={s.close__cookie} onClick={onClose}>
        <CloseCookie />
      </div>
    </div>
  );
};

export default CookieWindow;
