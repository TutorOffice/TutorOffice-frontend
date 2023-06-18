import testData from './testStudents';
import EducationalMaterialsBlank, { UserStatus } from './EducationalMaterialsBlank';
import EducationalMaterialsWithCards from './EducationalMaterialsWithCards';

import HeaderAuth from '@/components/headerAuth/HeaderAuth';
import Layout from '@/components/layout/Layout';
import Wrapper from '@/components/wrapper/Wrapper';

const userStatus = UserStatus.Student;

const EducationalMaterials = () => {
  return (
    <Layout>
      <Wrapper>
        <HeaderAuth bottom={testData.length ? 70 : 100} />
        {testData.length ? <EducationalMaterialsWithCards /> : <EducationalMaterialsBlank userStatus={userStatus} />}
      </Wrapper>
    </Layout>
  );
};

export default EducationalMaterials;
