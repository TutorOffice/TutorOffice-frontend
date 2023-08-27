import s from './StudentsPageWithCards.module.css';

import testStudents from '../testStudents';

import { btnClass, btnType, Button } from '@/shared/ui';
import UserCard from '@/components/userCard/UserCard';
import AddStudentModal from '@/components/modals/addStudentModal/AddStudentModal';
import { userRole } from '@/shared/types/userRole';

import VirtualStudent from '@/shared/ui/virtualStudent/VirtualStudent';

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
          <VirtualStudent />
        </div>
        <ul className={s.studentsPageWithCards__container}>
          {testStudents.map((stud) => (
            <UserCard
              key={stud.id}
              role={userRole.student}
              isActive={stud.isActive}
              photo={stud.photo}
              firstName={stud.firstName}
              lastName={stud.lastName}
              patronymic={stud.patronymic}
              subject={stud.subject}
              studentSubjectLevel={stud.studentSubjectLevel}
              btnText='Посмотреть'
              linkPath={stud.id.toString()}
            />
          ))}
        </ul>
      </div>
      <AddStudentModal isOpen={isOpenModal} onClose={closeModal} />
    </>
  );
};

export default StudentsPageWithCards;
