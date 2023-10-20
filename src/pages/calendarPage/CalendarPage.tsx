import Calendar from '@/components/calendar/Calendar'
import HeaderAuth from '@/components/header/headerAuth/HeaderAuth'
import Layout from '@/components/layout/Layout'

import s from './CalendarPage.module.css'

const CalendarPage = () => {
  return (
    <Layout>
      <HeaderAuth className={s.calendarPage__header} />
      <Calendar />
    </Layout>
  )
}

export default CalendarPage
