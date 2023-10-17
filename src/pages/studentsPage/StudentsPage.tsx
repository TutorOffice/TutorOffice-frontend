import studentsImage from '@/assets/images/students.png'
import HeaderAuth from '@/components/header/headerAuth/HeaderAuth'
import Layout from '@/components/layout/Layout'
import NoStudents from '@/components/noStudents/NoStudents'

import StudentsPageWithCards from './studentsPageWithCards/StudentsPageWithCards'
import testStudents from './testStudents'

const StudentsPage = () => {
  return (
    <Layout>
      <HeaderAuth />
      {testStudents.length > 0 ? (
        <StudentsPageWithCards />
      ) : (
        <NoStudents
          title="У Вас пока нет ни одного ученика"
          text="Вы можете добавить нового ученика, указав его фамилию, имя и e-mail."
          image={studentsImage}
          withButton={true}
        />
      )}
    </Layout>
  )
}

export default StudentsPage
