import testStudents from './testStudents';
import StudentsPageWithCards from './studentsPageWithCards/StudentsPageWithCards';

import Layout from '@/components/layout/Layout';
import HeaderAuth from '@/components/headerAuth/HeaderAuth';
import NoStudents from '@/components/noStudents/NoStudents';
import studentsImage from '@/assets/images/students.png';

const StudentsPage = () => {
  return (
    <Layout>
      <HeaderAuth />
      {testStudents.length ? (
        <StudentsPageWithCards />
      ) : (
        <NoStudents
          title='У Вас пока нет ни одного ученика'
          text='Вы можете добавить нового ученика, указав его фамилию, имя и e-mail.'
          image={studentsImage}
          withButton={true}
        />
      )}
    </Layout>
  );
};

export default StudentsPage;
