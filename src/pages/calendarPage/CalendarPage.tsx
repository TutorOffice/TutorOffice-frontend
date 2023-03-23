import s from './CalendarPage.module.css';
import Layout from '../../components/layout/Layout';
import Calendar from '../../components/calendar/Calendar';
import Wrapper from '../../components/wrapper/Wrapper';
import { btnClass, btnType, Button } from '../../shared/ui';

const CalendarPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Button variant={btnClass.back} type={btnType.button} bottom={70}>
          Назад
        </Button>
        <h2 className={s.calendarPage__title}>Расписание на месяц</h2>
        <Calendar />
      </Wrapper>
    </Layout>
  );
};

export default CalendarPage;
