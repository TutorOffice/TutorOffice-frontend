import testData from './testStudents';
import EducationalMaterialsBlank, { UserStatus } from './EducationalMaterialsBlank';
import EducationalMaterialsWithCards from './EducationalMaterialsWithCards';

import HeaderAuth from '@/components/headerAuth/HeaderAuth';
import Layout from '@/components/layout/Layout';

const userStatus = UserStatus.Tutor;

const EducationalMaterials = () => {
  return (
    <Layout>
      <HeaderAuth bottom={testData.length ? 70 : 100} />
      {testData.length ? <EducationalMaterialsWithCards /> : <EducationalMaterialsBlank userStatus={userStatus} />}
    </Layout>
  );
};

export default EducationalMaterials;
