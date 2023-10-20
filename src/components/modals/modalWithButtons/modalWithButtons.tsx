import React from 'react'

import { Button, ButtonGroup, Modal } from '@/shared/ui'
import { ModalProps } from '@/shared/ui/modal/Modal'

import s from './ModalWithButtons.module.css'

interface ModalWithButtonsProps extends ModalProps {
  ghostBtnText: string
  primaryBthText: string
  onClickGhostBtn?: () => void
  onClickPrimaryBtn?: () => void
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
      <Modal
        title={title}
        isOpen={isOpen}
        onClose={onClose}
        width={width}
        smallFont={smallFont}
      >
        <ButtonGroup className={s.modal__btnGroup} width="100%">
          <Button onClick={onClickGhostBtn}>{ghostBtnText}</Button>
          <Button onClick={onClickPrimaryBtn}>{primaryBthText}</Button>
        </ButtonGroup>
      </Modal>
    </>
  )
}

export default ModalWithButtons
