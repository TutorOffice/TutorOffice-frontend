import React from 'react';
import clsx from 'clsx';
import s from './CalendarControls.module.css';

interface CalendarControlsProps {
  currentMonth: string;
  prevMonth: string;
  nextMonth: string;
}

const CalendarControls: React.FC<CalendarControlsProps> = ({ currentMonth, prevMonth, nextMonth }) => {
  const currentMonthClassName = clsx({
    [s.calendar__month]: true,
    [s.currentMonth]: currentMonth,
  });

  return (
    <div className={s.calendar__controls}>
      <div className={s.arrow__left}></div>
      <div className={s.calendar__month}>{prevMonth}</div>
      <div className={currentMonthClassName}>{currentMonth}</div>
      <div className={s.calendar__month}>{nextMonth}</div>
      <div className={s.arrow__right}></div>
    </div>
  );
};

export default CalendarControls;
