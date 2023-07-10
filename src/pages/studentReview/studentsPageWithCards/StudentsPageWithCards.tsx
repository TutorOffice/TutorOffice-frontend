import s from './StudentsPageWithCards.module.css';

import testStudents from '../testStudents';

import { btnClass, btnType, Button } from '@/shared/ui';
import UserCard from '@/components/userCard/UserCard';
import AddStudentModal from '@/components/modals/addStudentModal/AddStudentModal';
import { userRole } from '@/shared/types/userRole';

import { useState } from 'react';

const StudentsPageWithCards = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className={s.studentsPageWithCards}>
        <div className={s.studentsPageWithCards__header}>
          <h2 className={s.studentsPageWithCards__title}>Ученики</h2>
          <Button onClick={openModal} type={btnType.button} variant={btnClass.primary}>
            Добавить ученика
          </Button>
        </div>
        <div className={s.studentsPageWithCards__desc}>
          <p>
            Если Ваш ученик примет Ваше приглашение зарегистрироваться на сайте, то он станет{' '}
            <span className={s.student_active}>активным учеником</span> и будет полноценным участником процесса: сможет
            общаться с Вами, получать и выполнять домашние задания, менять информацию о себе, смотреть учебные
            материалы.
          </p>
          <p>
            Если ученик не хочет или не имеет возможности пользоваться сайтом, Вы можете добавить его как{' '}
            <span className={s.student_virtual}>виртуального ученика</span>. У Вас будет возможность вносить и
            отслеживать информацию о нём: его уроки в расписании, выданные ему д/з (без возможности отслеживать их
            статус), его учебные материалы.
          </p>
        </div>
        <div className={s.studentsPageWithCards__container}>
          {testStudents.map((stud) => (
            <UserCard
              key={stud.id}
              role={userRole.student}
              isActive={stud.isActive}
              photo={stud.photo}
              firstName={stud.firstName}
              lastName={stud.lastName}
              subject={stud.subject}
              studentSubjectLevel={stud.studentSubjectLevel}
              btnText='Посмотреть'
            />
          ))}
        </div>
      </div>
      <AddStudentModal isOpen={isOpenModal} onClose={closeModal} />
    </>
  );
};

export default StudentsPageWithCards;
