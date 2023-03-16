import React from 'react';
import s from './Information.module.css';
import Layout from '../layout/Layout';
import { Button, btnClass, btnType } from '../../shared/ui';
import { useNavigate } from 'react-router-dom';

interface InformationProps {
  title: string;
  children: React.ReactNode;
  btnText: string;
  image: string;
  onClick?: () => void;
}

const Information: React.FC<InformationProps> = ({ children, title, btnText, image, onClick }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <section className={s.information}>
        <button className={s.information__backBtn} onClick={goBack}>
          Назад
        </button>
        <div className={s.information__content}>
          <div className={s.information__text}>
            <h2 className={s.information__title}>{title}</h2>
            <p className={s.information__desc}>{children}</p>
            <Button onClick={onClick} variant={btnClass.primary} type={btnType.button}>
              {btnText}
            </Button>
          </div>
          <img src={image} alt='Конверт' />
        </div>
      </section>
    </Layout>
  );
};

export default Information;
