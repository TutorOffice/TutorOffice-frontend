import s from '../Information.module.css';

import { btnClass, btnType, Button } from '@/shared/ui';

import React from 'react';

interface InformationContentProps {
  children: React.ReactNode;
  title: string;
  btnText: string;
  image: string;
  onClick?: () => void;
}

const InformationContent: React.FC<InformationContentProps> = ({ children, title, image, onClick, btnText }) => {
  return (
    <div className={s.information__content}>
      <div className={s.information__text}>
        <h2 className={s.information__title}>{title}</h2>
        <p className={s.information__desc}>{children}</p>
        <Button onClick={onClick} variant={btnClass.primary} type={btnType.button}>
          {btnText}
        </Button>
      </div>
      <img src={image} alt='Конверт' />
    </div>
  );
};

export default InformationContent;
