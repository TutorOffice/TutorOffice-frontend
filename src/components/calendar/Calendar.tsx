import { useState } from 'react';
import moment from 'moment';
import s from './Calendar.module.css';
import CalendarItem from './calendarItem/CalendarItem';
import CalendarControls from './calendarControls/CalendarControls';
import {
  getCurrentMonth,
  getNextMonth,
  getPrevMonth,
  momentConfig,
  getDaysArray,
  getIsWeekend,
} from '../../shared/utils';

const Calendar = () => {
  moment.updateLocale('ru', momentConfig);
  const [today, setToday] = useState(moment());

  const daysArray = getDaysArray(today);
  const currentMonth = getCurrentMonth(today);
  const prevMonth = getPrevMonth(today);
  const nextMonth = getNextMonth(today);

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
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <div className={s.calendar}>
        <div className={s.calendar__weekdays}></div>
        {daysArray.map((day) => (
          <CalendarItem
            key={day.unix()}
            day={day}
            isWeekend={getIsWeekend(day.day())}
            isCurrentDay={moment().isSame(day, 'day')}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
