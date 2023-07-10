import s from './NoStudents.module.css';

import AddStudentModal from '@/components/modals/addStudentModal/AddStudentModal';
import { btnClass, btnType, Button } from '@/shared/ui';

import React, { useState } from 'react';

interface NoStudentsProps {
  title: string;
  text: string;
  image: string;
  withButton: boolean;
}

const NoStudents: React.FC<NoStudentsProps> = ({ title, text, image, withButton }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className={s.noStudents}>
        <div className={s.noStudents__content}>
          <h2 className={s.noStudents__title}>{title}</h2>
          <p className={s.noStudents__text}>{text}</p>
          {withButton && (
            <Button onClick={openModal} type={btnType.button} variant={btnClass.primary}>
              Добавить ученика
            </Button>
          )}
        </div>
        <img className={s.noStudents__image} src={image} alt='Ученики' />
      </div>
      <AddStudentModal isOpen={isOpenModal} onClose={closeModal} />
    </>
  );
};

export default NoStudents;
