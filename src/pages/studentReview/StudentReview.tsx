import s from './StudentReview.module.css';

import StudentReviewWithCard from './StudentReviewWithCard';
import StudentReviewBlank from './StudentReviewBlank';
import testStudents from './testStudents';

import Layout from '@/components/layout/Layout';
import HeaderAuth from '@/components/headerAuth/HeaderAuth';

const StudentReview = () => {
  return (
    <Layout>
      <HeaderAuth className={s.students__header} />
      {testStudents.length ? <StudentReviewWithCard /> : <StudentReviewBlank />}
    </Layout>
  );
};

export default StudentReview;
