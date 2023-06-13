import StudentReviewWithCard from './StudentReviewWithCard';
import StudentReviewBlank from './StudentReviewBlank';
import testStudents from './testStudents';

import Layout from '../../components/layout/Layout';
import { btnClass, btnType, Button } from '../../shared/ui';
import Wrapper from '../../components/wrapper/Wrapper';

import HeaderAuth from '@/components/headerAuth/HeaderAuth';

const StudentReview = () => {
  return (
    <Layout>
      <Wrapper>
        <HeaderAuth bottom={40} />
        <Button type={btnType.button} variant={btnClass.back} bottom={60}>
          Назад
        </Button>
        {testStudents.length ? <StudentReviewWithCard /> : <StudentReviewBlank />}
      </Wrapper>
    </Layout>
  );
};

export default StudentReview;
