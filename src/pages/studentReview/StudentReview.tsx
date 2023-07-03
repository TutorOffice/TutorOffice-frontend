import s from './StudentReview.module.css';

import StudentReviewWithCard from './StudentReviewWithCard';
import StudentReviewBlank from './StudentReviewBlank';
import testStudents from './testStudents';

import Layout from '@/components/layout/Layout';
import HeaderAuth from '@/components/headerAuth/HeaderAuth';
import { btnClass, btnType, Button } from '@/shared/ui';

const StudentReview = () => {
  return (
    <Layout>
      <HeaderAuth className={s.students__header} />
      <Button className={s.students__goBackBtn} type={btnType.button} variant={btnClass.back}>
        Назад
      </Button>
      {testStudents.length ? <StudentReviewWithCard /> : <StudentReviewBlank />}
    </Layout>
  );
};

export default StudentReview;
