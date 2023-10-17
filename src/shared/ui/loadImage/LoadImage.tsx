import clsx from 'clsx'
import React from 'react'

import s from './LoadImage.module.css'

interface LoadImageProps {
  image: string
  className?: string
  onClick?: () => void
}

const LoadImage: React.FC<LoadImageProps> = ({ image, className, onClick }) => {
  const loadPhotoClassName = clsx(className, { [s.loadPhoto]: true })

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div onClick={onClick} className={loadPhotoClassName}>
      <img src={image} alt="Аватар пользователя" className={s.loadPhoto__img} />
      <span className={s.loadPhoto__edit} />
    </div>
  )
}

export default LoadImage
