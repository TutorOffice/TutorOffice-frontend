import s from './MainPage.module.css';

import { btnClass, btnType, Button } from '@/shared/ui';
import Layout from '@/components/layout/Layout';
import mainImage from '@/assets/images/main-image.png';
import CookieWindow from '@/components/cookieWindow/CookieWindow';
import HeaderNoAuth from '@/components/header/headerNoAuth/HeaderNoAuth';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [showCookieWindow, setShowCookieWindow] = useState(true);
  const closeCookieWindow = () => {
    setShowCookieWindow(false);
  };

  return (
    <Layout>
      <div className={s.main}>
        <HeaderNoAuth className={s.main__header} />
        <div className={s.main__content}>
          <h1 className={s.main__title}>Добро пожаловать в Личный кабинет «Репетитор»!</h1>
          <p className={s.main__desc}>
            Как репетитор или ученик ты можешь составлять здесь расписание, отправлять домашние работы или хранить
            информацию и многое другое.
          </p>
          <Link to='/about'>
            <Button type={btnType.button} variant={btnClass.primary}>
              О проекте
            </Button>
          </Link>
        </div>
        <img className={s.main__image} src={mainImage} alt='Репетитор и ученик' />
        {showCookieWindow && <CookieWindow onClose={closeCookieWindow} />}
      </div>
    </Layout>
  );
};

export default MainPage;
