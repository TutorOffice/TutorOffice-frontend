import s from './HeaderNoAuth.module.css';

import HeaderMain from '../headerMain/HeaderMain';

import { Button, ButtonGroup, btnClass, btnType } from '@/shared/ui';

import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface HeaderNoAuthProps {
  className?: string;
}

const HeaderNoAuth: React.FC<HeaderNoAuthProps> = ({ className }) => {
  const headerClassName = clsx(className, { [s.headerNoAuth]: true });

  return (
    <HeaderMain className={headerClassName}>
      <ButtonGroup>
        <Link to='/login'>
          <Button type={btnType.button} variant={btnClass.ghost}>
            Вход
          </Button>
        </Link>
        <Link to='/register'>
          <Button type={btnType.button} variant={btnClass.primary}>
            Регистрация
          </Button>
        </Link>
      </ButtonGroup>
    </HeaderMain>
  );
};

export default HeaderNoAuth;
