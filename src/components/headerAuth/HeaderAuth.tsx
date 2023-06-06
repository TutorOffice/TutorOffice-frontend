import HeaderMain from '../headerMain/HeaderMain';
import UserInfo from '../userInfo/UserInfo';

import { Button, btnClass, btnType } from '@/shared/ui';
import userPhoto from '@/assets/images/user-photo.jpg';

import React from 'react';

interface HeaderAuthProps {
  bottom: number;
}

const HeaderAuth: React.FC<HeaderAuthProps> = ({ bottom }) => {
  const logout = () => {
    console.log('Вы вышли из системы.');
  };

  return (
    <HeaderMain bottom={bottom}>
      <UserInfo
        photo={userPhoto}
        fullName='Гурин Александр Максимович'
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
