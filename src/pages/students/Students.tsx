import s from './Students.module.css';

import StudentsWithCard from './StudentsWithCard';
import StudentsBlank from './StudentsBlank';
import testStudents from './testStudents';

import Layout from '@/components/layout/Layout';
import HeaderAuth from '@/components/headerAuth/HeaderAuth';

const Students = () => {
  return (
    <Layout>
      <HeaderAuth className={s.students__header} />
      {testStudents.length ? <StudentsWithCard /> : <StudentsBlank />}
    </Layout>
  );
};

export default Students;
