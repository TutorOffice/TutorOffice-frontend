import { useNavigate } from 'react-router-dom';
import s from './CalendarPage.module.css';
import Layout from '../../components/layout/Layout';
import Calendar from '../../components/calendar/Calendar';

const CalendarPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <section className={s.calendarPage}>
        <button className={s.calendarPage__backBtn} onClick={goBack}>
          Назад
        </button>
        <h2 className={s.calendarPage__title}>Расписание на месяц</h2>
        <Calendar />
      </section>
    </Layout>
  );
};

export default CalendarPage;
