import s from './CalendarPage.module.css';

import Calendar from '@/components/calendar/Calendar';
import Layout from '@/components/layout/Layout';
import Wrapper from '@/components/wrapper/Wrapper';

import HeaderAuth from '@/components/headerAuth/HeaderAuth';

const CalendarPage = () => {
  return (
    <Layout>
      <Wrapper>
        <HeaderAuth bottom={50} />
        <h2 className={s.calendar__title}>Расписание на месяц</h2>
        <Calendar />
      </Wrapper>
    </Layout>
  );
};

export default CalendarPage;
