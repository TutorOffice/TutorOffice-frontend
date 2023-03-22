import React from 'react';
import clsx from 'clsx';
import s from './CalendarControls.module.css';

interface CalendarControlsProps {
  currentMonth: string;
  prevMonth: string;
  nextMonth: string;
  prevHandler: () => void;
  nextHandler: () => void;
}

const CalendarControls: React.FC<CalendarControlsProps> = ({
  currentMonth,
  prevMonth,
  nextMonth,
  prevHandler,
  nextHandler,
}) => {
  const currentMonthClassName = clsx({
    [s.calendar__month]: true,
    [s.currentMonth]: currentMonth,
  });

  return (
    <div className={s.calendar__controls}>
      <div className={s.arrow__left} onClick={prevHandler}></div>
      <div className={s.calendar__month} onClick={prevHandler}>
        {prevMonth}
      </div>
      <div className={currentMonthClassName}>{currentMonth}</div>
      <div className={s.calendar__month} onClick={nextHandler}>
        {nextMonth}
      </div>
      <div className={s.arrow__right} onClick={nextHandler}></div>
    </div>
  );
};

export default CalendarControls;
