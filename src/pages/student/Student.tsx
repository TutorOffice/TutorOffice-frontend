import s from './Student.module.css';
import testStudents from './testStudents';

import HeaderAuth from '@/components/headerAuth/HeaderAuth';
import UserCardFull from '@/components/userCardFull/UserCardFull';
import Layout from '@/components/layout/Layout';
import studentImage from '@/assets/images/student.png';
import { Button, btnClass, btnType } from '@/shared/ui';

import { useState } from 'react';

const Student = () => {
  const [id] = useState(document.location.pathname.slice(9));
  const stud = testStudents[+id];

  return (
    <Layout>
      <HeaderAuth className={s.student__header} />
      <Button type={btnType.button} variant={btnClass.back} className={s.student__backButton}>
        Назад
      </Button>
      <h2 className={s.student__title}>Профиль ученика</h2>
      <div className={s.student__info}>
        <UserCardFull
          key={stud.id}
          studentStatus={stud.activeStatus}
          photo={stud.photo}
          first_name={stud.first_name}
          last_name={stud.last_name}
          patronymic={stud.patronymic}
          studentSubject={stud.studentSubject}
          studentSubjectLevel={stud.studentSubjectLevel}
          email={stud.email}
          phone={stud.phone}
          homeWorkDone={stud.homeWorkDone}
          homeWorkArrowUp={stud.homeWorkArrowUp}
          homeWorkToDo={stud.homeWorkToDo}
        />
        <img className={s.student__image} src={studentImage} alt='Профиль ученика' />
      </div>
    </Layout>
  );
};

export default Student;
