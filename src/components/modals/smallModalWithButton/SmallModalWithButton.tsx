import React from 'react'

import { Button, Modal } from '@/shared/ui'
import { ModalProps } from '@/shared/ui/modal/Modal'

interface SmallModalWithButtonProps extends ModalProps {
  btnText: string
  onClickButton: () => void
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
    <Modal
      title={title}
      smallFont={smallFont}
      isOpen={isOpen}
      onClose={onClose}
      width={width}
    >
      <Button onClick={onClickButton}>{btnText}</Button>
    </Modal>
  )
}

export default SmallModalWithButton
