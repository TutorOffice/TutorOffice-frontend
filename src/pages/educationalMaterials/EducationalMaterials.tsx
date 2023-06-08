import HeaderAuth from '@/components/headerAuth/HeaderAuth';
import Layout from '@/components/layout/Layout';
import Wrapper from '@/components/wrapper/Wrapper';
import { Button, btnClass, btnType } from '@/shared/ui';

const EducationalMaterials = () => {
  return (
    <Layout>
      <Wrapper>
        <HeaderAuth bottom={40} />
        <Button bottom={60} variant={btnClass.back} type={btnType.button}>
          Назад
        </Button>
      </Wrapper>
    </Layout>
  );
};

export default EducationalMaterials;
