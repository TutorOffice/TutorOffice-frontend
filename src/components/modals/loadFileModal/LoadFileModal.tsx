import s from './LoadFileModal.module.css';

import { btnClass, btnType, Button, Modal } from '@/shared/ui';

import React from 'react';

interface LoadFileModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  modalDescription: string;
}

const LoadFileModal: React.FC<LoadFileModalProps> = ({ isOpen, onClose, title, modalDescription }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} width='590px'>
      <span className={s.modalText}>{modalDescription}</span>
      <div className={s.input__wrapper}>
        <Button variant={btnClass.primary} type={btnType.button}>
          <input className={s.loadFileInput} type='file' />
          Выбрать файл
        </Button>
      </div>
    </Modal>
  );
};

export default LoadFileModal;
