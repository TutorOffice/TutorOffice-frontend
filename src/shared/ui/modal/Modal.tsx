import s from './modal.module.css';

import React, { useEffect } from 'react';

interface modalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  width: string;
  isErrorUpload?: boolean;
  isErrorUploadText?: string;
  smallFont?: boolean;
}

const Modal: React.FC<modalProps> = ({
  children,
  isOpen,
  onClose,
  title = '',
  smallFont = false,
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
            {title && <h2 className={smallFont ? s.smallTitle : s.title}>{title}</h2>}
            {children}
            {isErrorUpload && (
              <div className={s.errorText}>
                <p>{isErrorUploadText}</p>
              </div>
            )}
          </div>
          <button className={s.closeButton} onClick={onClose} />
        </div>
      </div>
    );
  } else return null;
};

export default Modal;
