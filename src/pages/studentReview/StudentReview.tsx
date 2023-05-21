import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './StudentReview.module.css';
import Layout from '../../components/layout/Layout';
import { btnClass, btnType, Button, ButtonGroup } from '../../shared/ui';
import Wrapper from '../../components/wrapper/Wrapper';
import UserInfo from '../../components/userInfo/UserInfo';
import HeaderMain from '../../components/headerMain/HeaderMain';
import userPhoto from '../../assets/images/user-photo.jpg';

const StudentReview = () => {
  return (
    <Layout>
      <Wrapper>
      <HeaderMain bottom={50}>
          <UserInfo photo={userPhoto} fullName='Гурин Александр Максимович' />
          <Link to='/'>
            <Button variant={btnClass.ghost} type={btnType.button}>
              Выйти
            </Button>
          </Link>
        </HeaderMain>
        <Button type={btnType.button} variant={btnClass.back} bottom={200}>
        Назад
      </Button>
      </Wrapper>
    </Layout>
  );
};

export default StudentReview;