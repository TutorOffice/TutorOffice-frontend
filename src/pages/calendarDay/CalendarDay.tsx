import s from './CalendarDay.module.css';
import { testStudents } from './testStudents';

import HeaderAuth from '@/components/header/headerAuth/HeaderAuth';
import Layout from '@/components/layout/Layout';
import CalendarDayItem from '@/components/calendarDayItem/CalendarDayItem';
import { Button, btnClass, btnType } from '@/shared/ui';
import { getToday, momentConfig } from '@/shared/utils';

import { useParams } from 'react-router-dom';
import moment from 'moment';

const CalendarDay = () => {
  type Params = {
    date: string;
  };
  const { date } = useParams<Params>() as Params;

  moment.updateLocale('ru', momentConfig);
  const today = getToday(moment());
  const currentDate = date === today ? `сегодня (${date})` : date;

  return (
    <Layout>
      <HeaderAuth />
      <Button className={s.calendarDay__goBack} type={btnType.button} variant={btnClass.back}>
        Назад
      </Button>
      <h2 className={s.calendarDay__title}>Расписание на {currentDate}</h2>
      <ul className={s.students__list}>
        <div className={s.list__title}>
          <span>Ученик</span>
          <span>Время</span>
          <span>Д/з</span>
          <span>Статус</span>
          <span></span>
        </div>
        {testStudents.map((stud) => (
          <CalendarDayItem
            key={stud.id}
            date={date}
            lessonId={stud.id}
            photo={stud.photo}
            time={stud.time}
            name={stud.name}
            lessonStatus={stud.lessonStatus}
          />
        ))}
      </ul>
    </Layout>
  );
};

export default CalendarDay;
