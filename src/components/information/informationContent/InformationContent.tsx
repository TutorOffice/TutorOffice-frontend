import s from '../Information.module.css';
import { InformationProps } from '../Information';

import { btnClass, btnType, Button } from '@/shared/ui';

import React from 'react';
import clsx from 'clsx';

interface InformationContentProps extends InformationProps {
  className?: string;
}

const InformationContent: React.FC<InformationContentProps> = ({
  className,
  children,
  title,
  image,
  onClick,
  btnText,
}) => {
  const informationClassName = clsx(className, { [s.information__content]: true });

  return (
    <div className={informationClassName}>
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
