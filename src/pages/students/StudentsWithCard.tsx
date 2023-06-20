import s from './Students.module.css';
import testStudents from './testStudents';

import { btnClass, btnType, Button } from '../../shared/ui';
import UserCard from '../../components/userCard/UserCard';

import AddStudentModal from '@/components/modals/addStudentModal/AddStudentModal';

import { useState } from 'react';

const StudentsWithCard = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className={s.studentsWithCard}>
        <div className={s.students__withCards}>
          <h2 className={s.students__title}>Ученики</h2>
          <Button onClick={openModal} type={btnType.button} variant={btnClass.primary}>
            Добавить ученика
          </Button>
        </div>
        <p className={s.studentsWithCard__description}>
          Если Ваш ученик примет Ваше приглашение зарегистрироваться на сайте, то он станет{' '}
          <span className={s.student_activ}>активным учеником</span> и будет полноценным участником процесса: сможет
          общаться с Вами, получать и выполнять домашние задания, менять информацию о себе, смотреть учебные материалы.
        </p>
        <p className={s.studentsWithCard__description}>
          Если ученик не хочет или не имеет возможности пользоваться сайтом, Вы можете добавить его как{' '}
          <span className={s.student_virtual}>виртуального ученика</span>. У Вас будет возможность вносить и отслеживать
          информацию о нём: его уроки в расписании, выданные ему д/з (без возможности отслеживать их статус), его
          учебные материалы.
        </p>
        <div className={s.students__cards_container}>
          {testStudents.map((stud) => (
            <UserCard
              key={stud.id}
              studentStatus={stud.activeStatus}
              photo={stud.photo}
              name={stud.name}
              studentSubject={stud.studentSubject}
              studentSubjectLevel={stud.studentSubjectLevel}
            />
          ))}
        </div>
      </div>
      <AddStudentModal isOpen={isOpenModal} onClose={closeModal} />
    </>
  );
};

export default StudentsWithCard;
