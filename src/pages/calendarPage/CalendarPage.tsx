import s from './CalendarPage.module.css';
import Layout from '../../components/layout/Layout';
import Calendar from '../../components/calendar/Calendar';
import Wrapper from '../../components/wrapper/Wrapper';
import { btnClass, btnType, Button } from '../../shared/ui';
import UserInfo from '../../components/userInfo/UserInfo';
import userPhoto from '../../assets/images/user-photo.jpg';
import HeaderMain from '../../components/headerMain/HeaderMain';
import { Link } from 'react-router-dom';

const CalendarPage = () => {
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
        <h2 className={s.calendar__title}>Расписание на месяц</h2>
        <Calendar />
      </Wrapper>
    </Layout>
  );
};

export default CalendarPage;
