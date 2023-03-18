import s from './TutorOffice.module.css';
import Layout from '../../components/layout/Layout';
import { btnClass, btnType, Button } from '../../shared/ui';
import userPhoto from '../../assets/images/user-photo.jpg';
import UserInfo from '../../components/userInfo/UserInfo';
import testPhoto from '../../assets/images/test-student.jpg';
import OfficeItem from '../../components/officeItem/OfficeItem';

const testStudents = [
  { id: 1, photo: testPhoto, time: '10:30', name: 'Алексей Ф.', theme: 'Pres.Perf', homeWork: true },
  { id: 2, photo: testPhoto, time: '10:30', name: 'Алексей Ф.', theme: 'Pres.Perf', homeWork: false },
  { id: 3, photo: testPhoto, time: '10:30', name: 'Алексей Ф.', theme: 'Pres.Perf', homeWork: true },
  { id: 4, photo: testPhoto, time: '10:30', name: 'Алексей Ф.', theme: 'Pres.Perf', homeWork: true },
];

const TutorOffice = () => {
  return (
    <Layout>
      <section className={s.office}>
        <header className={s.office__header}>
          <UserInfo
            photo={userPhoto}
            fullName='Гурин Александр Максимович'
            phone='+7 936 619-98-06'
            mail='gurinalex065@yandex.ru'
          />
          <Button type={btnType.button} variant={btnClass.primary}>
            Редактировать профиль
          </Button>
        </header>
        <div className={s.office__content}>
          <h2 className={s.office__title}>Расписание на сегодня</h2>
          <div className={s.list__title}>
            <p></p>
            <p>Время</p>
            <p>Ученик</p>
            <p>Тема</p>
            <p>Д/з</p>
            <p className={s.grid__item}></p>
          </div>
          <ul className={s.students__list}>
            {testStudents.map((stud) => (
              <OfficeItem
                key={stud.id}
                photo={stud.photo}
                time={stud.time}
                name={stud.name}
                theme={stud.theme}
                homeWork={stud.homeWork}
              />
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default TutorOffice;
