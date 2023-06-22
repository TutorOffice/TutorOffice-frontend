import s from './modal.module.css';

import { useOverlay } from '@/shared/hooks';

import React from 'react';

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
  const handleOverlay = useOverlay(isOpen, onClose);

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
