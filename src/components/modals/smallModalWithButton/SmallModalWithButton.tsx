import { btnClass, btnType, Button, Modal } from '@/shared/ui';
import { ModalProps } from '@/shared/ui/modal/Modal';

import React from 'react';

interface SmallModalWithButtonProps extends ModalProps {
  btnText: string;
  onClickButton: () => void;
}

const SmallModalWithButton: React.FC<SmallModalWithButtonProps> = ({
  isOpen,
  onClose,
  width,
  title,
  btnText,
  smallFont = false,
  onClickButton,
}) => {
  return (
    <Modal title={title} smallFont={smallFont} isOpen={isOpen} onClose={onClose} width={width}>
      <Button onClick={onClickButton} type={btnType.button} variant={btnClass.primary}>
        {btnText}
      </Button>
    </Modal>
  );
};

export default SmallModalWithButton;
