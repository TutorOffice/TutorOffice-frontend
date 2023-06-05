import { btnClass, btnType, Button, ButtonGroup, Modal } from '../../../shared/ui';
import LessonIsCanceledModal from '../lessonIsCanceledModal/LessonIsCanceledModal';

import React, { useState } from 'react';

interface CancelLessonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CancelLessonModal: React.FC<CancelLessonModalProps> = ({ isOpen, onClose }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    onClose();
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Modal title='Вы уверены, что хотите отменить урок?' smallFont isOpen={isOpen} onClose={onClose} width='556px'>
        <ButtonGroup bottom={0}>
          <Button onClick={openModal} type={btnType.button} variant={btnClass.primary}>
            Отменить урок
          </Button>
          <Button onClick={onClose} type={btnType.button} variant={btnClass.ghost}>
            Назад
          </Button>
        </ButtonGroup>
      </Modal>
      <LessonIsCanceledModal isOpen={isOpenModal} onClose={closeModal} />
    </>
  );
};

export default CancelLessonModal;
