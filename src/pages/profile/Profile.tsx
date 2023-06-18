import s from './Profile.module.css';

import Layout from '@/components/layout/Layout';
import HeaderMain from '@/components/headerMain/HeaderMain';
import LoadPhotoModal from '@/components/modals/loadPhotoModal/LoadPhotoModal';
import SubmitForm from '@/components/submitForm/SubmitForm';
import userPhoto from '@/assets/images/profile-photo.jpg';
import { btnClass, btnType, Button, Input, inputTypes, LoadImage } from '@/shared/ui';
import { IFormValues, TValidationSubmitFormResolver, validateType } from '@/shared/validation';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';

const Profile = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <>
      <Layout>
        <HeaderMain bottom={100}>
          <h2 className={s.profile__title}>Редактирование профиля</h2>
          <Link to='/'>
            <Button variant={btnClass.common} type={btnType.button}>
              Назад на главную
            </Button>
          </Link>
        </HeaderMain>
        <SubmitForm
          defaultValues={{
            firstName: 'Иван',
            lastName: 'Грозный',
            email: 'grozniyIvan@gmail.com',
            patronymic: 'Васильевич',
            password: 'Gr0zniy_',
            subject: 'Английский язык',
            phone: '+7(999) 999-99-99',
          }}
          resolverType={TValidationSubmitFormResolver.PROFILE}
          btnGroup={true}
          btnText='Сохранить изменения'
          onSubmit={onSubmit}
        >
          <LoadImage image={userPhoto} onClick={openModal} />
          <Input name={validateType.lastName} type={inputTypes.text} labelText='Фамилия' />
          <Input name={validateType.firstName} type={inputTypes.text} labelText='Имя' />
          <Input name={validateType.patronymic} type={inputTypes.text} labelText='Отчество' />
          <Input name={validateType.email} type={inputTypes.email} labelText='E-mail' />
          <Input name={validateType.phone} type={inputTypes.phone} labelText='Телефон' />
          <Input
            name={validateType.password}
            type={inputTypes.password}
            isPassword={true}
            iconVisibility={false}
            labelText='Пароль'
          />
          <Link to='/change-pass' className={s.change_pass}>
            <Button width='100%' type={btnType.button} variant={btnClass.ghost}>
              Сменить пароль
            </Button>
          </Link>
          <Input name={validateType.subject} type={inputTypes.text} labelText='Предмет' />
        </SubmitForm>
      </Layout>
      <LoadPhotoModal isOpen={isOpenModal} onClose={closeModal} />
    </>
  );
};

export default Profile;
