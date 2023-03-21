import React from 'react';
import s from './Information.module.css';
import Layout from '../layout/Layout';
import { Button, btnClass, btnType } from '../../shared/ui';
import { useNavigate } from 'react-router-dom';
import InformationContent from './informationContent/InformationContent';

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
        <InformationContent title={title} btnText={btnText} image={image}>
          {children}
        </InformationContent>
      </section>
    </Layout>
  );
};

export default Information;
