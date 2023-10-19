// eslint-disable-next-line import/namespace, import/default
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

import SubmitForm from '@/components/submitForm/SubmitForm'
import { Input, Modal } from '@/shared/ui'
import { TValidationSubmitFormResolver } from '@/shared/validation'

interface AddStudentModalProps {
  isOpen: boolean
  onClose: () => void
}

export interface IFormValues {
  firstName: string
  lastName: string
  email: string
  patronymic: string
  password: string
  phone: string
}

const AddStudentModal: React.FC<AddStudentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <Modal
      title="Добавление ученика"
      isOpen={isOpen}
      onClose={onClose}
      width="590px"
    >
      <SubmitForm
        btnText="Сохранить"
        btnWidth="100%"
        resolverType={TValidationSubmitFormResolver.ADD_STUDENT}
        onSubmit={onSubmit}
      >
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </SubmitForm>
    </Modal>
  )
}

export default AddStudentModal
