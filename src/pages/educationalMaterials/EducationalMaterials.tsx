import testStudents from './testStudents';
import EducationalMaterialsWithCards from './educationalMaterialWithCards/EducationalMaterialsWithCards';

import educationalMaterialsImage from '@/assets/images/EducationalMaterialsBlank.png';
import HeaderAuth from '@/components/headerAuth/HeaderAuth';
import Layout from '@/components/layout/Layout';
import NoStudents from '@/components/noStudents/NoStudents';

const EducationalMaterials = () => {
  return (
    <Layout>
      <HeaderAuth />
      {testStudents.length ? (
        <EducationalMaterialsWithCards />
      ) : (
        <NoStudents
          title='Здесь будут учебные материалы'
          text='Когда у Вас появятся ученики, Вы сможете загружать учебные материалы для каждого из них.'
          image={educationalMaterialsImage}
          withButton={true}
        />
      )}
    </Layout>
  );
};

export default EducationalMaterials;
