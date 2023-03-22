import s from './Calendar.module.css';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import Layout from '../../components/layout/Layout';
import CalendarItem from './calendarItem/CalendarItem';
import CalendarControls from './calendarControls/CalendarControls';

const Calendar = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  moment.updateLocale('ru', {
    week: { dow: 1 },
    months: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    weekdays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  });
  const today = moment();
  const startDay = today.clone().startOf('month').startOf('week');
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());

  const currentMonth = today.clone().format('MMMM');
  const prevMonth = today.clone().subtract(1, 'month').format('MMMM');
  const nextMonth = today.clone().add(1, 'month').format('MMMM');

  const isWeekend: (day: number) => boolean = (day) => {
    return day === 6 || day === 0;
  };

  return (
    <Layout>
      <section className={s.calendarPage}>
        <button className={s.calendarPage__backBtn} onClick={goBack}>
          Назад
        </button>
        <div className={s.calendarWrapper}>
          <h2 className={s.calendarPage__title}>Расписание на месяц</h2>
          <CalendarControls currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
          <div className={s.calendar}>
            <div className={s.calendar__weekday}></div>
            {daysArray.map((day) => (
              <CalendarItem
                key={day.format('DDMMYYYY')}
                day={day.format('D')}
                isWeekend={isWeekend(day.day())}
                isCurrentDay={today.isSame(day, 'day')}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Calendar;
