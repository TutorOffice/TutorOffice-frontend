import { btnClass, btnType, Button, Modal } from '../../../shared/ui';

import React from 'react';
import { Link } from 'react-router-dom';

interface LessonIsCanceledModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LessonIsCanceledModal: React.FC<LessonIsCanceledModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal title='Урок отменен!' smallFont isOpen={isOpen} onClose={onClose} width='322px'>
      <Link to='/'>
        <Button type={btnType.button} variant={btnClass.primary}>
          На главную
        </Button>
      </Link>
    </Modal>
  );
};

export default LessonIsCanceledModal;
