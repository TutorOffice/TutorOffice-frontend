import React from 'react';
import { btnClass, btnType, Button, Modal } from '../../../shared/ui';
import s from './LoadPhotoModal.module.css';

interface LoadPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoadPhotoModal: React.FC<LoadPhotoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title='Загрузка новой фотографии'
      width='590px'
      isErrorUpload={true}
      isErrorUploadText='Если у вас возникают проблемы с загрузкой, попробуйте выбрать фотографию меньшего размера.'
    >
      <span className={s.modalText}>
        Ученикам будет проще узнать вас, если вы загрузите свою настоящую фотографию. Вы можете загрузить изображение в
        формате JPG, GIF или PNG.
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
