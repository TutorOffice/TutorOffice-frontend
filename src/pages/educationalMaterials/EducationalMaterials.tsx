import testData from './testData';
import EducationalMaterialsBlank from './EducationalMaterialsBlank';

import HeaderAuth from '@/components/headerAuth/HeaderAuth';
import Layout from '@/components/layout/Layout';
import Wrapper from '@/components/wrapper/Wrapper';
import { Button, btnClass, btnType } from '@/shared/ui';

const EducationalMaterials = () => {
  return (
    <Layout>
      <Wrapper>
        <HeaderAuth bottom={testData.length ? 40 : 100} />
        {Boolean(testData.length) && (
          <Button bottom={60} variant={btnClass.back} type={btnType.button}>
            Назад
          </Button>
        )}
        <EducationalMaterialsBlank />
      </Wrapper>
    </Layout>
  );
};

export default EducationalMaterials;
