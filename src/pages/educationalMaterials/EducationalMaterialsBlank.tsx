import s from './EducationalMaterials.module.css';

import AddStudentModal from '@/components/modals/addStudentModal/AddStudentModal';
import { btnClass, btnType, Button } from '@/shared/ui';
import educationalMaterialsImage from '@/assets/images/EducationalMaterialsBlank.png';

import { useState } from 'react';

const EducationalMaterialsBlank = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className={s.educationalMaterialsBlank}>
        <div className={s.educationalMaterials__blank}>
          <h2 className={s.educationalMaterials__title}>Здесь будут учебные материалы</h2>
          <p className={s.educationalMaterials__content}>
            Когда у Вас появятся ученики, Вы сможете загружать учебные материалы для каждого из них.
          </p>
          <Button onClick={openModal} type={btnType.button} variant={btnClass.primary}>
            Добавить ученика
          </Button>
        </div>
        <img className={s.educationalMaterials__image} src={educationalMaterialsImage} alt='Учебные материалы' />
      </div>
      <AddStudentModal isOpen={isOpenModal} onClose={closeModal} />
    </>
  );
};

export default EducationalMaterialsBlank;
