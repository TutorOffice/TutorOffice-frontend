import React, { useEffect } from 'react';
import s from './modal.module.css';

interface modalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  width: string;
  isErrorUpload?: boolean;
  isErrorUploadText?: string;
}

const Modal: React.FC<modalProps> = ({
  children,
  isOpen,
  onClose,
  title = '',
  width,
  isErrorUpload = false,
  isErrorUploadText = '',
}) => {
  useEffect(() => {
    document.addEventListener('keydown', keyboardHandler);
    if (isOpen) document.body.style.overflowY = 'hidden';

    return () => {
      document.removeEventListener('keydown', keyboardHandler);
      document.body.style.overflowY = 'auto';
    };
  }, [isOpen, onClose]);

  const handleOverlay = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const keyboardHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (isOpen) {
    return (
      <div onClick={handleOverlay} className={s.overlay}>
        <div style={{ maxWidth: `${width}` }} className={s.modal}>
          <div className={s.modalContent}>
            {title && <h1 className={s.title}>{title}</h1>}
            {children}
            {isErrorUpload && (
              <div className={s.errorText}>
                <p>{isErrorUploadText}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default Modal;
