import s from './UserEducationalMaterials.module.css';

import testEdMaterials from './testEdMaterials';

import testPhoto from '../../assets/images/test-student.jpg';

import Layout from '@/components/layout/Layout';
import HeaderAuth from '@/components/header/headerAuth/HeaderAuth';
import { Button, Checkbox, btnClass, btnType } from '@/shared/ui';
import ModalWithButtons from '@/components/modals/modalWithButtons/ModalWithButtons';
import SmallModalWithButton from '@/components/modals/smallModalWithButton/SmallModalWithButton';

import LoadFileModal from '@/components/modals/loadFileModal/LoadFileModal';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserEducationalMaterials = () => {
  const [isOpenAddMaterialModal, setIsOpenAddMaterialModal] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSmallModal, setIsOpenSmallModal] = useState(false);
  const navigate = useNavigate();

  const openAddMaterialModal = () => {
    setIsOpenAddMaterialModal(true);
  };
  const closeAddMaterialModal = () => {
    setIsOpenAddMaterialModal(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const openSmallModal = () => {
    closeModal();
    setIsOpenSmallModal(true);
  };
  const closeSmallModal = () => {
    setIsOpenSmallModal(false);
  };

  const goToMainPage = () => {
    navigate('/');
  };

  return (
    <>
      <Layout>
        <HeaderAuth />
        <div className={s.topContent}>
          <div className={s.topContent__userInfo}>
            <img className={s.userInfo__photo} src={testPhoto} alt='Фото пользователя' />
            <div className={s.userInfo}>
              <p className={s.userInfo__name}>
                Феофанов
                <br />
                Алексей
                <br />
                Иванович
              </p>
              <p className={s.userInfo__subject}>Английский</p>
              <p className={s.userInfo__level}>Уровень - B2</p>
            </div>
          </div>
          <div className={s.topContent__controls}>
            <Button onClick={openAddMaterialModal} type={btnType.button} variant={btnClass.primary}>
              Добавить учебный материал
            </Button>
            <div className={s.sort}></div>
          </div>
        </div>
        <ul className={s.edMaterials__list}>
          {testEdMaterials.map((obj) => (
            <div key={obj.id} className={s.edMaterialsItem}>
              <Checkbox />
              <p className={s.edMaterialsItem__name}>{obj.materialName}</p>
              <p>{obj.date}</p>
              <p>{obj.size}</p>
              <p>{obj.format}</p>
              <p>{obj.tutorName}</p>
            </div>
          ))}
        </ul>
        <Button onClick={openModal} type={btnType.button} variant={btnClass.primary}>
          Удалить
        </Button>
      </Layout>
      <LoadFileModal
        isOpen={isOpenAddMaterialModal}
        onClose={closeAddMaterialModal}
        title='Добавить учебный материал'
        modalDescription='Формат PDF, JPEG, Word или Excel не больше 25 Мб'
      />
      <ModalWithButtons
        width='714px'
        isOpen={isOpenModal}
        onClose={closeModal}
        title='Вы уверены, что хотите удалить учебный материал?'
        ghostBtnText='Удалить'
        primaryBthText='Отменить'
        onClickGhostBtn={openSmallModal}
        onClickPrimaryBtn={closeModal}
      />
      <SmallModalWithButton
        isOpen={isOpenSmallModal}
        onClose={closeSmallModal}
        width='420px'
        smallFont={true}
        title='Учебный материал удален!'
        btnText='На главную'
        onClickButton={goToMainPage}
      />
    </>
  );
};

export default UserEducationalMaterials;
