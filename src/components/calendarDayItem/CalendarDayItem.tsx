import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import statusFalse from '@/assets/icons/status-false.svg'
import statusTrue from '@/assets/icons/status-true.svg'
import { Button } from '@/shared/ui'

import s from './CalendarDayItem.module.css'

interface CalendarDayItemProps {
  photo: string
  time: string
  name: string
  lessonStatus: boolean
  lessonId: number
  date: string
}

const CalendarDayItem: React.FC<CalendarDayItemProps> = ({
  photo,
  time,
  name,
  lessonStatus,
  lessonId,
  date,
}) => {
  const [status, setStatusIcon] = useState(lessonStatus)
  const onSetStatus = () => {
    setStatusIcon((prev) => !prev)
  }

  return (
    <li className={s.calendarDayItem}>
      <div className={s.calendarDayItem__user}>
        <img
          className={s.calendarDayItem__photo}
          src={photo}
          alt="Фото пользователя"
        />
        <p>{name}</p>
      </div>
      <p className={s.calendarDayItem__time}>{time}</p>
      <p className={s.lookHomework}>Посмотреть</p>
      <img
        onClick={onSetStatus}
        className={s.statusIcon}
        src={status ? statusTrue : statusFalse}
        alt="Статус задания"
      />
      <Link to={`/calendar/${date}/${lessonId}`}>
        <Button className={s.calendarDayItem__button}>Открыть</Button>
      </Link>
    </li>
  )
}

export default CalendarDayItem
