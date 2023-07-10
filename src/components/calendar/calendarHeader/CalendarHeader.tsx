import s from './CalendarHeader.module.css';

import React from 'react';

interface CalendarHeaderProps {
  currentMonth: string;
  currentYear: string;
  prevHandler: () => void;
  nextHandler: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ currentMonth, currentYear, prevHandler, nextHandler }) => {
  return (
    <div className={s.calendar__header}>
      <h2 className={s.calendar__title}>Расписание на месяц</h2>
      <div className={s.calendar__controls}>
        <button className={s.button} onClick={prevHandler}>
          <span className={s.button__arrow_left}></span>
        </button>
        <div className={s.calendar__month}>{`${currentMonth} ${currentYear}`}</div>
        <button className={s.button} onClick={nextHandler}>
          <span className={s.button__arrow_right}></span>
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
