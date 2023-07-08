import s from './Student.module.css';

import HeaderAuth from '@/components/headerAuth/HeaderAuth';
import Layout from '@/components/layout/Layout';
import Wrapper from '@/components/wrapper/Wrapper';
import { Button, btnClass, btnType } from '@/shared/ui';

const Student = () => {
  return (
    <Layout>
      <Wrapper>
        <HeaderAuth bottom={40} />
        <Button type={btnType.button} variant={btnClass.back} bottom={60}>
          Назад
        </Button>
        <h2 className={s.student__title}>Профиль ученика</h2>
      </Wrapper>
    </Layout>
  );
};

export default Student;
