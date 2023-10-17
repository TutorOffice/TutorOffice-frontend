// eslint-disable-next-line import/namespace, import/default
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

import SubmitForm from '@/components/submitForm/SubmitForm'
import { Input, inputTypes, Modal } from '@/shared/ui'
import {
  TValidationSubmitFormResolver,
  validateType,
} from '@/shared/validation'

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
        <Input
          name={validateType.firstName}
          type={inputTypes.text}
          labelText="Имя"
          isRequired={true}
        />
        <Input
          name={validateType.lastName}
          type={inputTypes.text}
          labelText="Фамилия"
          isRequired={true}
        />
        <Input
          name={validateType.patronymic}
          type={inputTypes.text}
          labelText="Отчество"
        />
        <Input
          name={validateType.phone}
          type={inputTypes.phone}
          labelText="Телефон"
        />
        <Input
          name={validateType.email}
          type={inputTypes.email}
          labelText="E-mail"
        />
        <Input
          name={validateType.level}
          type={inputTypes.text}
          labelText="Уровень"
        />
      </SubmitForm>
    </Modal>
  )
}

export default AddStudentModal
