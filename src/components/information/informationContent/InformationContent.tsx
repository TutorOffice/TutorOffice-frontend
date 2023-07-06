import s from '../Information.module.css';
import { InformationProps } from '../Information';

import { btnClass, btnType, Button } from '@/shared/ui';

import React from 'react';

type InformationContentProps = InformationProps;

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
      <img className={s.information__image} src={image} alt='Конверт' />
    </div>
  );
};

export default InformationContent;
