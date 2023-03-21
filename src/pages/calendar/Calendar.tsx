import s from './Calendar.module.css';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

const Calendar = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <section className={s.calendar}>
        <button className={s.calendar__backBtn} onClick={goBack}>
          Назад
        </button>
        <h2 className={s.calendar__title}>Расписание на месяц</h2>
      </section>
    </Layout>
  );
};

export default Calendar;
