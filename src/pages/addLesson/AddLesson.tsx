import addLesson from '@/assets/images/add-lesson.png'
import HeaderAuth from '@/components/header/headerAuth/HeaderAuth'
import InformationContent from '@/components/information/informationContent/InformationContent'
import Layout from '@/components/layout/Layout'
import { Button } from '@/shared/ui'
import Select from '@/shared/ui/select/Select'
import Textarea from '@/shared/ui/textarea/Textarea'

import s from './AddLesson.module.css'

const students = [
  {
    label: 'Феофанов Алексей',
    value: 'Феофанов Алексей',
  },
  {
    label: 'Никита Ок',
    value: 'Никита Ок',
  },
  {
    label: 'Коля Да',
    value: 'Коля Да',
  },
  {
    label: 'Максон Опа',
    value: 'Максон Опа',
  },
  {
    label: 'А это кто а',
    value: 'А это кто а',
  },
]

const time = [
  {
    label: '06',
    value: '06',
  },
]

const AddLesson = () => {
  return (
    <Layout>
      <HeaderAuth />
      <Button variant="back" className={s.lesson__goBackBtn}>
        Назад
      </Button>
      <InformationContent
        className={s.InformationContent}
        title="Добавить урок "
        btnText="Сохранить"
        image={addLesson}
      >
        <div className={s.addLessonContent}>
          <Select
            options={students}
            label="Выберите ученика из списка"
            placeholder="Выберите ученика"
          />
          <div className={s.row__time}>
            <div>
              <p className={s.text__item}>
                Начало урока <span className={s.last}>*</span>
              </p>
              <div className={s.item__time}>
                <Select options={time} />
                <span className={s.separator__time}>:</span>
                <Select options={time} />
              </div>
            </div>
            <div>
              <p className={s.text__item}>
                Окончание урока <span className={s.last}>*</span>
              </p>
              <div className={s.item__time}>
                <Select options={time} />
                <span className={s.separator__time}>:</span>
                <Select options={time} />
              </div>
            </div>
          </div>
          <Textarea label="Комментарий" minRows={4} />
        </div>
      </InformationContent>
    </Layout>
  )
}

export default AddLesson
