import StudentReviewWithCard from './StudentReviewWithCard';
import StudentReviewBlank from './StudentReviewBlank';
import testStudents from './testStudents';

import Layout from '../../components/layout/Layout';
import { btnClass, btnType, Button } from '../../shared/ui';
import Wrapper from '../../components/wrapper/Wrapper';
import UserInfo from '../../components/userInfo/UserInfo';
import HeaderMain from '../../components/headerMain/HeaderMain';
import userPhoto from '../../assets/images/user-photo.jpg';

const StudentReview = () => {
  return (
    <Layout>
      <Wrapper>
        <HeaderMain bottom={40}>
          <UserInfo photo={userPhoto} fullName='Гурин Александр Максимович' />
          <Button variant={btnClass.ghost} type={btnType.button}>
            Выйти
          </Button>
        </HeaderMain>
        <Button type={btnType.button} variant={btnClass.back} bottom={60}>
          Назад
        </Button>
        {testStudents.length ? <StudentReviewWithCard /> : <StudentReviewBlank />}
      </Wrapper>
    </Layout>
  );
};

export default StudentReview;
