import s from './CalendarWeekDays.module.css';

const CalendarWeekDays = () => {
  return (
    <div className={s.weekdays}>
      <p className={s.weekday}>пн</p>
      <p className={s.weekday}>вт</p>
      <p className={s.weekday}>ср</p>
      <p className={s.weekday}>чт</p>
      <p className={s.weekday}>пт</p>
      <p className={s.weekend}>сб</p>
      <p className={s.weekend}>вс</p>
    </div>
  );
};

export default CalendarWeekDays;
