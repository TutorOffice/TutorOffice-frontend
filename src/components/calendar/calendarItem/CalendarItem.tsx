import s from './CalendarItem.module.css';

import { formatDate, momentType } from '@/shared/utils';

import CalendarModal from '@/components/modals/calendarModal/CalendarModal';

import React, { useState } from 'react';
import clsx from 'clsx';


interface CalendarItemProps {
  day: momentType;
  isCurrentDay: boolean;
  isCurrentMonth: boolean;
  isLessons?: boolean;
}

const CalendarItem: React.FC<CalendarItemProps> = ({ day, isCurrentDay, isCurrentMonth, isLessons }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const monthDay = day.format('DD.MM');
  const date = formatDate(day.format('DD MMMM YYYY'));

  const className = clsx({
    [s.calendarItem]: true,
    [s.notCurrentMonth]: !isCurrentMonth,
    [s.currentDay]: isCurrentDay,
    [s.isLessons]: isLessons,
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
