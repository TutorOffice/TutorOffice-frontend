import Layout from '@/components/layout/Layout';
import UserInfo from '@/components/userInfo/UserInfo';
import userPhoto from '@/assets/images/user-photo.jpg';
import HeaderMain from '@/components/headerMain/HeaderMain';
import { btnClass, btnType, Button } from '@/shared/ui';
import noLesson from '@/assets/images/no-lesson.png';
import InformationContent from '@/components/information/informationContent/InformationContent';
import Wrapper from '@/components/wrapper/Wrapper';

import HeaderAuth from '@/components/headerAuth/HeaderAuth';

import { useNavigate } from 'react-router-dom';

const NoLesson = () => {
  const navigate = useNavigate();
  const goToCalendar = () => {
    navigate('/calendar');
  };

  return (
    <Layout>
      <HeaderAuth bottom={200} />
      <InformationContent
        onClick={goToCalendar}
        title='Сегодня у тебя выходной!'
        btnText='Перейти к расписанию'
        image={noLesson}
      >
        <span>
          На сегодня уроков не запланированно. Вы можете посмотреть расписание занятий на другой день в своём календаре.
        </span>
      </InformationContent>
    </Layout>
  );
};

export default NoLesson;
