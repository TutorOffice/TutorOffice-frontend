import React from 'react'

import { Button, Modal } from '@/shared/ui'

import s from './LoadFileModal.module.css'

interface LoadFileModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  modalDescription: string
}

const LoadFileModal: React.FC<LoadFileModalProps> = ({
  isOpen,
  onClose,
  title,
  modalDescription,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} width="590px">
      <span className={s.modalText}>{modalDescription}</span>
      <div className={s.input__wrapper}>
        <Button>
          <input className={s.loadFileInput} type="file" />
          Выбрать файл
        </Button>
      </div>
    </Modal>
  )
}

export default LoadFileModal
