import React from 'react';
import { Link } from 'react-router-dom';
import { btnClass, btnType, Button, ButtonGroup, Modal } from '../../../shared/ui';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose, title }) => {
  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose} width='714px'>
      <ButtonGroup bottom={0}>
        <Link to={`/calendar/${title}`}>
          <Button type={btnType.button} variant={btnClass.primary}>
            Посмотреть расписание
          </Button>
        </Link>
        <Button type={btnType.button} variant={btnClass.primary}>
          Добавить урок
        </Button>
      </ButtonGroup>
    </Modal>
  );
};

export default CalendarModal;
