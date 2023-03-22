import React from 'react';
import clsx from 'clsx';
import s from './CalendarItem.module.css';

interface CalendarItemProps {
  day: string;
  isWeekend: boolean;
  isCurrentDay: boolean;
  isLessons?: boolean;
}

const CalendarItem: React.FC<CalendarItemProps> = ({ day, isWeekend = false, isCurrentDay = false, isLessons }) => {
  const className = clsx({
    [s.calendarItem]: true,
    [s.weekends]: isWeekend,
    [s.currentDay]: isCurrentDay,
    [s.active]: isLessons,
  });

  return <div className={className}>{day}</div>;
};

export default CalendarItem;
