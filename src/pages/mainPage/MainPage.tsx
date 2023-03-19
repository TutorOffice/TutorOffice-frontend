import Layout from '../../components/layout/Layout';
import s from './MainPage.module.css';
import mainImage from '../../assets/images/main-image.png';
import { btnClass, btnType, Button } from '../../shared/ui';
import ButtonGroup from '../../components/buttonGroup/ButtonGroup';

const MainPage = () => {
  return (
    <Layout>
      <section className={s.main}>
        <ButtonGroup>
          <Button type={btnType.button} variant={btnClass.ghost}>
            Вход
          </Button>
          <Button type={btnType.button} variant={btnClass.primary}>
            Регистрация
          </Button>
        </ButtonGroup>
        <div className={s.main__content}>
          <h1 className={s.main__title}>Добро пожаловать в Личный кабинет «Репетитор»!</h1>
          <p className={s.main__desc}>
            Как репетитор или ученик ты можешь составлять здесь расписание, отправлять домашние работы или хранить
            информацию и многое другое.
          </p>

          <Button type={btnType.button} variant={btnClass.primary}>
            Попробовать <br />
            (без регистрации)
          </Button>
        </div>
        <img className={s.main__image} src={mainImage} alt='Репетитор и ученик' />
      </section>
    </Layout>
  );
};

export default MainPage;
