import educationalMaterialsImage from '@/assets/images/EducationalMaterialsBlank.png'
import HeaderAuth from '@/components/header/headerAuth/HeaderAuth'
import Layout from '@/components/layout/Layout'
import NoStudents from '@/components/noStudents/NoStudents'

import EducationalMaterialsWithCards from './educationalMaterialWithCards/EducationalMaterialsWithCards'
import testStudents from './testStudents'

const EducationalMaterials = () => {
  return (
    <Layout>
      <HeaderAuth />
      {testStudents.length > 0 ? (
        <EducationalMaterialsWithCards />
      ) : (
        <NoStudents
          title="Здесь будут учебные материалы"
          text="Когда у Вас появятся ученики, Вы сможете загружать учебные материалы для каждого из них."
          image={educationalMaterialsImage}
          withButton={true}
        />
      )}
    </Layout>
  )
}

export default EducationalMaterials
