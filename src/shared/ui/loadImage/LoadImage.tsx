import React from 'react';
import s from './LoadImage.module.css';

interface LoadImageProps {
  image: string;
  onClick?: () => void;
}

const LoadImage: React.FC<LoadImageProps> = ({ image, onClick }) => {
  return (
    <div onClick={onClick} className={s.loadPhoto}>
      <img src={image} alt='Аватар пользователя' className={s.loadPhoto__img} />
      <span className={s.loadPhoto__edit}></span>
    </div>
  );
};

export default LoadImage;
