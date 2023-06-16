import testData from './testStudents';
import EducationalMaterialsBlank, { UserStatus } from './EducationalMaterialsBlank';
import EducationalMaterialsWithCards from './EducationalMaterialsWithCards';

import HeaderAuth from '@/components/headerAuth/HeaderAuth';
import Layout from '@/components/layout/Layout';
import Wrapper from '@/components/wrapper/Wrapper';

const userStatus = UserStatus.Sudent;

const EducationalMaterials = () => {
  return (
    <Layout>
      <Wrapper>
        <HeaderAuth bottom={100} />
        {testData.length ? <EducationalMaterialsWithCards /> : <EducationalMaterialsBlank userStatus={userStatus} />}
      </Wrapper>
    </Layout>
  );
};

export default EducationalMaterials;
