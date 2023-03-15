import Layout from '../../components/layout/Layout';
import s from './MainPage.module.css';
import mainImage from '../../assets/images/main-image.png';

const MainPage = () => {
  return (
    <Layout>
      <section className={s.main}>
        <div className={s.main__buttons}>
          <button className={s.main__button}>Вход</button>
          <button className={s.main__button}>Регистрация</button>
        </div>
        <div className={s.main__content}>
          <h1 className={s.main__title}>Добро пожаловать в Личный кабинет «Репетитор»!</h1>
          <p className={s.main__desc}>
            Как репетитор или ученик ты можешь составлять здесь расписание, отправлять домашние работы или хранить
            информацию и многое другое.
          </p>
          <button className={s.main__button}>
            Попробовать <span>(без регистрации)</span>
          </button>
        </div>
        <img className={s.main__image} src={mainImage} alt='Репетитор и ученик' />
      </section>
    </Layout>
  );
};

export default MainPage;
