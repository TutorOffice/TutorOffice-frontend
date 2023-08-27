import s from './CalendarItem.module.css';

import { formatDate, momentType } from '@/shared/utils';

import ModalWithButtons from '@/components/modals/modalWithButtons/modalWithButtons';

import React, { useState } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

interface CalendarItemProps {
  day: momentType;
  isCurrentDay: boolean;
  isCurrentMonth: boolean;
  isLessons?: boolean;
}

const CalendarItem: React.FC<CalendarItemProps> = ({ day, isCurrentDay, isCurrentMonth, isLessons }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const monthDay = day.format('DD.MM');
  const date = formatDate(day.format('DD MMMM YYYY'));

  const viewSchedule = () => {
    navigate(`/calendar/${date}`);
  };

  const viewAddLesson = () => {
    navigate(`/add-lesson`);
  };

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
      <ModalWithButtons
        width='714px'
        title={date}
        isOpen={isOpenModal}
        onClose={closeModal}
        ghostBtnText='Добавить урок'
        primaryBthText='Посмотреть расписание'
        onClickPrimaryBtn={viewSchedule}
        onClickGhostBtn={viewAddLesson}
      />
    </>
  );
};

export default CalendarItem;
