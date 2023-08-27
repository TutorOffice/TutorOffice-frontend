import s from './AddLesson.module.css';

import HeaderAuth from '@/components/header/headerAuth/HeaderAuth';
import Layout from '@/components/layout/Layout';
import { btnClass, btnType, Button } from '@/shared/ui';
import addLesson from '@/assets/images/add-lesson.png';
import InformationContent from '@/components/information/informationContent/InformationContent';
import Select from '@/shared/ui/select/Select';
import Textarea from '@/shared/ui/textarea/Textarea';

const students = [
  { label: 'Феофанов Алексей', value: 'Феофанов Алексей' },
  {
    label: 'Феофанов Алексей',
    value: 'Феофанов Алексей',
  },
  {
    label: 'Феофанов Алексей',
    value: 'Феофанов Алексей',
  },
  {
    label: 'Феофанов Алексей',
    value: 'Феофанов Алексей',
  },
  {
    label: 'Максон Опа',
    value: 'Максон Опа',
  },
];

const time = [
  {
    label: '06',
    value: '06',
  },
];

const AddLesson = () => {
  return (
    <Layout>
      <HeaderAuth />
      <Button className={s.lesson__goBackBtn} type={btnType.button} variant={btnClass.back}>
        Назад
      </Button>
      <InformationContent className={s.InformationContent} title='Добавить урок ' btnText='Сохранить' image={addLesson}>
        <Select options={students} placeholder='Выберите ученика' />
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
        <Textarea labelText='Комментарий' commentTip='Tip' />
      </InformationContent>
    </Layout>
  );
};

export default AddLesson;
