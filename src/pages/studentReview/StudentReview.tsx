import { Link } from 'react-router-dom';
import s from './StudentReview.module.css';
import Layout from '../../components/layout/Layout';
import { btnClass, btnType, Button } from '../../shared/ui';
import Wrapper from '../../components/wrapper/Wrapper';
import UserInfo from '../../components/userInfo/UserInfo';
import HeaderMain from '../../components/headerMain/HeaderMain';
import userPhoto from '../../assets/images/user-photo.jpg';
import testPhoto from '../../assets/images/test-student.jpg';
import studentsImage from '../../assets/images/students.png';
import Card from '../../components/card/Card';

const testStudents: any[] = [
  { id: 1, photo: testPhoto, name: 'Иван Иванов', subject: 'Английский', subjectLevel: 'Уровень - B2' },
  { id: 2, photo: testPhoto, name: 'Петр Петров', subject: 'Английский', subjectLevel: 'Уровень - А1' },
  { id: 3, photo: testPhoto, name: 'Денис Денисов', subject: 'Английский', subjectLevel: 'Уровень - B2' },
  { id: 4, photo: testPhoto, name: 'Евгения Евгеньевна', subject: 'Английский', subjectLevel: 'Уровень - А2' },
  { id: 5, photo: testPhoto, name: 'Иван Иванов', subject: 'Китайский', subjectLevel: 'Уровень - B2' },
  { id: 6, photo: testPhoto, name: 'Семен Семенович', subject: 'Английский', subjectLevel: 'Уровень - С1' },
];

const dataAvaible: boolean = Boolean(testStudents.length);

const StudentReview = () => {
  return (
    <Layout>
      <Wrapper>
        <HeaderMain bottom={40}>
          <UserInfo photo={userPhoto} fullName='Гурин Александр Максимович' />
          <Link to='/'>
            <Button variant={btnClass.ghost} type={btnType.button}>
              Выйти
            </Button>
          </Link>
        </HeaderMain>
        <Button type={btnType.button} variant={btnClass.back} bottom={60}>
          Назад
        </Button>
        <div className={s.studentReview}>
          <div className={dataAvaible ? s.studentReview__withCards : s.studentReview__blank}>
            {dataAvaible ? (
              <h2 className={s.studentReview__title}>Ученики</h2>
            ) : (
              <h2 className={s.studentReview__title}>У Вас пока нет ни одного ученика</h2>
            )}
            {!dataAvaible && (
              <p className={s.studentReview__content}>
                Вы можете добавить нового ученика, указав его фамилию, имя и e-mail.
              </p>
            )}
            <Link to='/add-student'>
              <Button type={btnType.button} variant={btnClass.primary}>
                Добавить ученика
              </Button>
            </Link>
          </div>
          {!dataAvaible && <img className={s.studentReview__image} src={studentsImage} alt='Ученики' />}
        </div>
        {dataAvaible && (
          <div className={s.studentReview__cards_container}>
            {testStudents.map((stud) => (
              <Card
                key={stud.id}
                photo={stud.photo}
                name={stud.name}
                subject={stud.subject}
                subjectLevel={stud.subjectLevel}
              />
            ))}
          </div>
        )}
      </Wrapper>
    </Layout>
  );
};

export default StudentReview;
