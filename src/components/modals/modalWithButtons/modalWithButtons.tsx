import { btnClass, btnType, Button, ButtonGroup, Modal } from '@/shared/ui';
import { ModalProps } from '@/shared/ui/modal/Modal';

import React from 'react';

interface ModalWithButtonsProps extends ModalProps {
  ghostBtnText: string;
  primaryBthText: string;
  onClickGhostBtn?: () => void;
  onClickPrimaryBtn?: () => void;
}

const ModalWithButtons: React.FC<ModalWithButtonsProps> = ({
  isOpen,
  onClose,
  width,
  title,
  ghostBtnText,
  primaryBthText,
  smallFont = false,
  onClickGhostBtn,
  onClickPrimaryBtn,
}) => {
  return (
    <>
      <Modal title={title} isOpen={isOpen} onClose={onClose} width={width} smallFont={smallFont}>
        <ButtonGroup justifyContent='center' width='100%' bottom={0}>
          <Button onClick={onClickGhostBtn} type={btnType.button} variant={btnClass.ghost}>
            {ghostBtnText}
          </Button>
          <Button onClick={onClickPrimaryBtn} type={btnType.button} variant={btnClass.primary}>
            {primaryBthText}
          </Button>
        </ButtonGroup>
      </Modal>
    </>
  );
};

export default ModalWithButtons;
