import moment from 'moment'
import React, { useState } from 'react'

import {
  getCurrentMonth,
  getCurrentYear,
  getDaysArray,
  momentConfig,
} from '@/shared/utils'

import s from './Calendar.module.css'
import CalendarHeader from './calendarHeader/CalendarHeader'
import CalendarItem from './calendarItem/CalendarItem'
import CalendarWeekDays from './calendarWeekDays/CalendarWeekDays'

const Calendar = () => {
  moment.updateLocale('ru', momentConfig)
  const [today, setToday] = useState(moment())

  const daysArray = getDaysArray(today)
  const currentMonth = getCurrentMonth(today)
  const currentYear = getCurrentYear(today)

  const prevHandler = () => {
    setToday((prev) => prev.clone().subtract(1, 'month'))
  }
  const nextHandler = () => {
    setToday((prev) => prev.clone().add(1, 'month'))
  }

  return (
    <div className={s.calendarWrapper}>
      <CalendarHeader
        currentMonth={currentMonth}
        currentYear={currentYear}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <CalendarWeekDays />
      <div className={s.calendar}>
        {daysArray.map((day) => (
          <CalendarItem
            key={day.unix()}
            day={day}
            isCurrentDay={moment().isSame(day, 'day')}
            isCurrentMonth={moment().isSame(day, 'month')}
          />
        ))}
      </div>
    </div>
  )
}

export default Calendar
