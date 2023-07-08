import s from './Student.module.css';

import HeaderAuth from '@/components/headerAuth/HeaderAuth';
import Layout from '@/components/layout/Layout';

import { Button, btnClass, btnType } from '@/shared/ui';

const Student = () => {
  return (
    <Layout>
      <HeaderAuth className={s.student__header} />
      <Button type={btnType.button} variant={btnClass.back} className={s.student__backButton}>
        Назад
      </Button>
      <h2 className={s.student__title}>Профиль ученика</h2>
    </Layout>
  );
};

export default Student;
