import s from './CalendarPage.module.css';

import Calendar from '@/components/calendar/Calendar';
import Layout from '@/components/layout/Layout';

import HeaderAuth from '@/components/header/headerAuth/HeaderAuth';

const CalendarPage = () => {
  return (
    <Layout>
      <HeaderAuth className={s.calendarPage__header} />
      <Calendar />
    </Layout>
  );
};

export default CalendarPage;
