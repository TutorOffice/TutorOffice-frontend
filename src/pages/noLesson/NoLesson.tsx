import { useNavigate } from 'react-router-dom'

import noLesson from '@/assets/images/no-lesson.png'
import HeaderAuth from '@/components/header/headerAuth/HeaderAuth'
import InformationContent from '@/components/information/informationContent/InformationContent'
import Layout from '@/components/layout/Layout'

import s from './NoLesson.module.css'

const NoLesson = () => {
  const navigate = useNavigate()
  const goToCalendar = () => {
    navigate('/calendar')
  }

  return (
    <Layout>
      <HeaderAuth />
      <InformationContent
        className={s.noLesson__content}
        onClick={goToCalendar}
        title="Сегодня у тебя выходной!"
        btnText="Перейти к расписанию"
        image={noLesson}
      >
        <span>
          На сегодня уроков не запланировано. Вы можете посмотреть расписание
          занятий на другой день в своём календаре.
        </span>
      </InformationContent>
    </Layout>
  )
}

export default NoLesson
