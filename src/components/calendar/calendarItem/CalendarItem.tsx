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

  const itemClassName = clsx({
    [s.calendarItem]: true,
    [s.notCurrentMonth]: !isCurrentMonth,
    [s.currentDay]: isCurrentDay,
    [s.isLessons]: isLessons,
  });

  const contentClassName = clsx({
    [s.item__content]: true,
    [s.notCurrentMonth]: !isCurrentMonth,
    [s.currentDay_content]: isCurrentDay,
    [s.isLessons]: isLessons,
  });

  return (
    <>
      <div onClick={openModal} className={itemClassName}>
        <div className={contentClassName}>{monthDay}</div>
      </div>
      <CalendarModal title={date} isOpen={isOpenModal} onClose={closeModal} />
    </>
  );
};

export default CalendarItem;
