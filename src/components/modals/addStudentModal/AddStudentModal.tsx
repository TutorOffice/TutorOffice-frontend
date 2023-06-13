import SubmitForm from '@/components/submitForm/SubmitForm';

import { Button, Input, Modal, btnClass, btnType, inputTypes, validateType } from '@/shared/ui';
import { TValidationSubmitFormResolver } from '@/shared/types/validation';

import { SubmitHandler } from 'react-hook-form';
import React from 'react';

interface AddStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  patronymic: string;
  password: string;
  phone: string;
}

const AddStudentModal: React.FC<AddStudentModalProps> = ({ isOpen, onClose }) => {
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };

  return (
    <Modal title='Добавление ученика' isOpen={isOpen} onClose={onClose} width='590px'>
      <SubmitForm top='10px' resolverType={TValidationSubmitFormResolver.ADD_STUDENT} onSubmit={onSubmit}>
        <Input name={validateType.firstName} type={inputTypes.text} labelText='Имя' isRequired={true} />
        <Input name={validateType.lastName} type={inputTypes.text} labelText='Фамилия' isRequired={true} />
        <Input name={validateType.patronymic} type={inputTypes.text} labelText='Отчество' />
        <Input name={validateType.phone} type={inputTypes.phone} labelText='Телефон' />
        <Input name={validateType.email} type={inputTypes.email} labelText='E-mail' />
        <Input name={validateType.level} type={inputTypes.text} labelText='Уровень' />
        <Button width='100%' type={btnType.submit} variant={btnClass.primary} isDisabled={false}>
          Сохранить
        </Button>
      </SubmitForm>
    </Modal>
  );
};

export default AddStudentModal;
