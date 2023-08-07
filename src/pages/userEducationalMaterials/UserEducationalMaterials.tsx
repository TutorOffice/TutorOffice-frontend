import s from './UserEducationalMaterials.module.css';

import testStudents from './testStudents';

import Layout from '@/components/layout/Layout';
import HeaderAuth from '@/components/header/headerAuth/HeaderAuth';
import { btnClass, btnType, Button } from '@/shared/ui';

import AddEducationMaterials from '@/components/modals/addEducationalMaterials/addEducationalMaterials';

import { useState } from 'react';

const UserEducationalMaterials = () => {
  const [modal, setModal] = useState(false);
  const onClose = () => {
    setModal(false);
  };

  const onOpen = () => {
    setModal(true);
  };

  return (
    <>
      <Layout>
        <HeaderAuth />
        <div className={s.topContent}>
          <div className={s.topContent__userInfo}>
            <img src={testStudents[1].photo} alt='Фото пользователя' />
            <div className={s.userInfo}>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className={s.topContent__controls}>
            <Button type={btnType.button} variant={btnClass.primary} onClick={onOpen}>
              Добавить учебный материал
            </Button>
            <div className={s.sort}></div>
          </div>
        </div>
        <ul className={s.edMaterials__list}>
          <div className={s.edMaterialsItem}></div>
        </ul>
      </Layout>
      <AddEducationMaterials isOpen={modal} onClose={onClose} width={'590px'} />
    </>
  );
};

export default UserEducationalMaterials;
