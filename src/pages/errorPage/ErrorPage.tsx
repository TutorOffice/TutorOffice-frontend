import s from './ErrorPage.module.css';
import Layout from '../../components/layout/Layout';
import Wrapper from '../../components/wrapper/Wrapper';
import errorImg404 from '../../assets/images/404.png';
import { btnClass, btnType, Button, ButtonGroup } from '../../shared/ui';

const ErrorPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Wrapper>
          <div className={s.content}>
            <img src={errorImg404} alt='404' className={s.image} />
            <h2 className={s.title}>Запрашиваемая страница не найдена!</h2>
            <ButtonGroup>
              <Button type={btnType.submit} variant={btnClass.primary}>
                На Главную
              </Button>
              <Button type={btnType.reset} variant={btnClass.ghost}>
                Написать в поддержку
              </Button>
            </ButtonGroup>
          </div>
        </Wrapper>
      </Wrapper>
    </Layout>
  );
};

export default ErrorPage;
