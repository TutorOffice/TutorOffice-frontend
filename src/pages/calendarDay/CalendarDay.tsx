import s from './CalendarDay.module.css';

import testPhoto from '@/assets/images/test-student.jpg';
import HeaderAuth from '@/components/headerAuth/HeaderAuth';
import Layout from '@/components/layout/Layout';
import OfficeItem from '@/components/officeItem/OfficeItem';
import Wrapper from '@/components/wrapper/Wrapper';
import { Button, btnClass, btnType } from '@/shared/ui';

import { useParams } from 'react-router-dom';

const testStudents = [
  { id: 1, photo: testPhoto, time: '10:30 - 11:30', name: 'Алексей Феофанов', lessonStatus: true },
  { id: 2, photo: testPhoto, time: '10:30 - 11:30', name: 'Алексей Феофанов', lessonStatus: false },
  { id: 3, photo: testPhoto, time: '10:30 - 11:30', name: 'Алексей Феофанов ', lessonStatus: true },
  { id: 4, photo: testPhoto, time: '10:30 - 11:30', name: 'Алексей Феофанов', lessonStatus: true },
];

const CalendarDay = () => {
  type Params = {
    date: string;
  };
  const { date } = useParams<Params>() as Params;

  return (
    <Layout>
      <Wrapper>
        <HeaderAuth bottom={40} />
        <Button bottom={60} variant={btnClass.back} type={btnType.button}>
          Назад
        </Button>
        <div className={s.office__content}>
          <h2 className={s.office__title}>Расписание на {date}</h2>
          <ul className={s.students__list}>
            <div className={s.list__title}>
              <span>Ученик</span>
              <span>Время</span>
              <span>Д/з</span>
              <span>Статус</span>
              <span></span>
            </div>
            {testStudents.map((stud) => (
              <OfficeItem
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
        </div>
      </Wrapper>
    </Layout>
  );
};

export default CalendarDay;
