import { useState } from 'react';
import moment from 'moment';
import s from './Calendar.module.css';
import CalendarItem from './calendarItem/CalendarItem';
import CalendarControls from './calendarControls/CalendarControls';
import { getCurrentMonth, momentConfig, getDaysArray, getCurrentYear } from '../../shared/utils';
import CalendarWeekDays from './calendarWeekDays/CalendarWeekDays';

const Calendar = () => {
  moment.updateLocale('ru', momentConfig);
  const [today, setToday] = useState(moment());

  const daysArray = getDaysArray(today);
  const currentMonth = getCurrentMonth(today);
  const currentYear = getCurrentYear(today);

  const prevHandler = () => {
    setToday((prev) => prev.clone().subtract(1, 'month'));
  };
  const nextHandler = () => {
    setToday((prev) => prev.clone().add(1, 'month'));
  };

  return (
    <div className={s.calendarWrapper}>
      <CalendarControls
        currentMonth={currentMonth}
        currentYear={currentYear}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <CalendarWeekDays />
      <div className={s.calendar}>
        {daysArray.map((day) => (
          <CalendarItem
            key={day.unix()}
            day={day}
            isCurrentDay={moment().isSame(day, 'day')}
            isCurrentMonth={moment().isSame(day, 'month')}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
