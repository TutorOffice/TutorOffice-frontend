import s from './LoadPhotoModal.module.css';

import { btnClass, btnType, Button, Modal } from '@/shared/ui';

import React from 'react';

interface LoadPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoadPhotoModal: React.FC<LoadPhotoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Загрузка новой фотографии' width='590px'>
      <span className={s.modalText}>
        Ученикам будет проще узнать вас, если вы загрузите свою настоящую фотографию. Вы можете загрузить изображение
        размером не больше 3Мб, в формате JPG, GIF или PNG.
      </span>
      <div className={s.input__wrapper}>
        <Button variant={btnClass.primary} type={btnType.button}>
          <input className={s.loadFileInput} type='file' />
          Выбрать файл
        </Button>
      </div>
    </Modal>
  );
};

export default LoadPhotoModal;
