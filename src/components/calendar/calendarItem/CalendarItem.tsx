import React, { useState } from 'react';
import clsx from 'clsx';
import s from './CalendarItem.module.css';
import CalendarModal from '../../modals/calendarModal/CalendarModal';
import { momentType } from '../../../shared/utils';

interface CalendarItemProps {
  day: momentType;
  isWeekend: boolean;
  isCurrentDay: boolean;
  isLessons?: boolean;
}

const CalendarItem: React.FC<CalendarItemProps> = ({ day, isWeekend = false, isCurrentDay = false, isLessons }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const monthDay = day.format('D');
  const date = day.format('DD MMMM YYYY');

  const className = clsx({
    [s.calendarItem]: true,
    [s.weekends]: isWeekend,
    [s.currentDay]: isCurrentDay,
    [s.active]: isLessons,
  });

  return (
    <>
      <div onClick={openModal} className={className}>
        {monthDay}
      </div>
      <CalendarModal title={date} isOpen={isOpenModal} onClose={closeModal} />
    </>
  );
};

export default CalendarItem;
