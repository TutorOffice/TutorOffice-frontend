import HeaderMain from '../headerMain/HeaderMain';
import UserInfo from '../../userInfo/UserInfo';

import { Button, btnClass, btnType } from '@/shared/ui';
import userPhoto from '@/assets/images/user-photo.jpg';

import React from 'react';

interface HeaderAuthProps {
  className?: string;
}

const HeaderAuth: React.FC<HeaderAuthProps> = ({ className }) => {
  const logout = () => {
    // eslint-disable-next-line no-console
    console.log('Вы вышли из системы.');
  };

  return (
    <HeaderMain className={className}>
      <UserInfo
        photo={userPhoto}
        fullName='Грозный Иван Васильевич'
        phone='+7 936 619-98-06'
        mail='gurinalex065@yandex.ru'
      />
      <Button onClick={logout} type={btnType.button} variant={btnClass.ghost}>
        Выйти
      </Button>
    </HeaderMain>
  );
};

export default HeaderAuth;
