import React from 'react'

import userPhoto from '@/assets/images/user-photo.jpg'
import { Button } from '@/shared/ui'

import UserInfo from '../../userInfo/UserInfo'
import HeaderMain from '../headerMain/HeaderMain'
import s from './HeaderAuth.module.css'

interface HeaderAuthProps {
  className?: string
}

const ExitButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M15.75 33.25H9.91667C9.14312 33.25 8.40125 32.9427 7.85427 32.3957C7.30729 31.8487 7 31.1069 7 30.3333V9.91667C7 9.14312 7.30729 8.40125 7.85427 7.85427C8.40125 7.30729 9.14312 7 9.91667 7H15.75M25.958 27.4167L33.2497 20.125M33.2497 20.125L25.958 12.8333M33.2497 20.125L15.75 20.125"
        stroke="#2459BF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const HeaderAuth: React.FC<HeaderAuthProps> = ({ className }) => {
  const logout = () => {
    // eslint-disable-next-line no-console
    console.log('Вы вышли из системы.')
  }

  return (
    <HeaderMain className={className}>
      <UserInfo
        photo={userPhoto}
        fullName="Грозный Иван Васильевич"
        phone="+7 936 619-98-06"
        mail="gurinalex065@yandex.ru"
      />
      <Button onClick={logout} className={s.button}>
        <span className={s.exitText}>Выйти</span>
        <ExitButton />
      </Button>
    </HeaderMain>
  )
}

export default HeaderAuth
