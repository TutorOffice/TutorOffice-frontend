import s from './LoadImage.module.css';

import clsx from 'clsx';
import React from 'react';

interface LoadImageProps {
  image: string;
  className?: string;
  onClick?: () => void;
}

const LoadImage: React.FC<LoadImageProps> = ({ image, className, onClick }) => {
  const loadPhotoClassName = clsx(className, { [s.loadPhoto]: true });

  return (
    <div onClick={onClick} className={loadPhotoClassName}>
      <img src={image} alt='Аватар пользователя' className={s.loadPhoto__img} />
      <span className={s.loadPhoto__edit}></span>
    </div>
  );
};

export default LoadImage;
