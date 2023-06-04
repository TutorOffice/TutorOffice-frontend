import s from './MainPage.module.css';

import { btnClass, btnType, Button, ButtonGroup } from '../../shared/ui';

import Layout from '@/components/layout/Layout';
import mainImage from '@/assets/images/main-image.png';

import CookieWindow from '@/components/cookieWindow/CookieWindow';
import Wrapper from '@/components/wrapper/Wrapper';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const MainPage = () => {
  const [showCookieWindow, setShowCookieWindow] = useState(true);
  const closeCookieWindow = () => {
    setShowCookieWindow(false);
  };

  return (
    <Layout>
      <Wrapper>
        <ButtonGroup bottom={150}>
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
        <div className={s.main__content}>
          <h1 className={s.main__title}>Добро пожаловать в Личный кабинет «Репетитор»!</h1>
          <p className={s.main__desc}>
            Как репетитор или ученик ты можешь составлять здесь расписание, отправлять домашние работы или хранить
            информацию и многое другое.
          </p>
          <Button type={btnType.button} variant={btnClass.primary}>
            Попробовать
          </Button>
        </div>
        <img className={s.main__image} src={mainImage} alt='Репетитор и ученик' />
        {showCookieWindow && <CookieWindow onClose={closeCookieWindow} />}
      </Wrapper>
    </Layout>
  );
};

export default MainPage;
