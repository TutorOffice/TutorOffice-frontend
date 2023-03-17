import s from './TutorOffice.module.css';
import Layout from '../../components/layout/Layout';
import { btnClass, btnType, Button } from '../../shared/ui';
import userPhoto from '../../assets/images/user-photo.jpg';
import UserInfo from '../../components/userInfo/UserInfo';

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
        </div>
      </section>
    </Layout>
  );
};

export default TutorOffice;
