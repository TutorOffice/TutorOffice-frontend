import s from './CalendarControls.module.css';

import React from 'react';

interface CalendarControlsProps {
  currentMonth: string;
  currentYear: string;
  prevHandler: () => void;
  nextHandler: () => void;
}

const CalendarControls: React.FC<CalendarControlsProps> = ({ currentMonth, currentYear, prevHandler, nextHandler }) => {
  return (
    <div className={s.calendar__controls}>
      <button className={s.button} onClick={prevHandler}>
        <span className={s.button__arrow_left}></span>
      </button>
      <div className={s.calendar__month}>{`${currentMonth} ${currentYear}`}</div>
      <button className={s.button} onClick={nextHandler}>
        <span className={s.button__arrow_right}></span>
      </button>
    </div>
  );
};

export default CalendarControls;
