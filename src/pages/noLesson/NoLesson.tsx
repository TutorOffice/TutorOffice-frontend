
import Layout from '@/components/layout/Layout';
import UserInfo from '@/components/userInfo/UserInfo';
import userPhoto from '@/assets/images/user-photo.jpg';
import HeaderMain from '@/components/headerMain/HeaderMain';
import { btnClass, btnType, Button } from '@/shared/ui';
import noLesson from '@/assets/images/no-lesson.png';
import InformationContent from '@/components/information/informationContent/InformationContent';
import Wrapper from '@/components/wrapper/Wrapper';

import { Link, useNavigate } from 'react-router-dom';

const NoLesson = () => {
  const navigate = useNavigate();
  const goToCalendar = () => {
    navigate('/calendar');
  };

  return (
    <Layout>
      <Wrapper>
        <HeaderMain bottom={200}>
          <UserInfo
            photo={userPhoto}
            fullName='Гурин Александр Максимович'
            phone='+7 936 619-98-06'
            mail='gurinalex065@yandex.ru'
          />
          <Link to='/profile'>
            <Button type={btnType.button} variant={btnClass.primary}>
              Редактировать профиль
            </Button>
          </Link>
        </HeaderMain>
        <InformationContent
          onClick={goToCalendar}
          title='Сегодня у тебя выходной!'
          btnText='Перейти к расписанию'
          image={noLesson}
        >
          <span>
            На сегодня уроков не запланированно. Вы можете посмотреть расписание занятий на другой день в своём
            календаре.
          </span>
        </InformationContent>
      </Wrapper>
    </Layout>
  );
};

export default NoLesson;
