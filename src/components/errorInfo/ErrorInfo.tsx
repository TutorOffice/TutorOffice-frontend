import React from 'react'
import { Link } from 'react-router-dom'

import { Button, ButtonGroup } from '@/shared/ui'

import s from './ErrorInfo.module.css'

interface ErrorInfoProps {
  imageUrl: string
  title: string
  description: string
  errorCode: string | number
}

const ErrorInfo: React.FC<ErrorInfoProps> = ({
  imageUrl,
  title,
  description,
  errorCode,
}) => {
  return (
    <div className={s.content}>
      <img src={imageUrl} alt="not-found" className={s.image} />
      <h2 className={s.title}>{title}</h2>
      <div className={s.description}>{description}</div>
      <ButtonGroup>
        <Link to={errorCode === '401' ? '/login' : '/'}>
          <Button>{errorCode === '401' ? 'Вход' : 'На Главную'}</Button>
        </Link>
        <Button>
          {errorCode === '401' ? 'Регистрация' : 'Написать в поддержку'}
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default ErrorInfo
