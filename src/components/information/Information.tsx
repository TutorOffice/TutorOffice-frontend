import s from './Information.module.css';

import InformationContent from './informationContent/InformationContent';

import Layout from '@/components/layout/Layout';
import { btnClass, btnType, Button } from '@/shared/ui';

import React from 'react';

export interface InformationProps {
  title: string;
  children: React.ReactNode;
  btnText: string;
  image: string;
  onClick?: () => void;
}

const Information: React.FC<InformationProps> = ({ children, title, btnText, image, onClick }) => {
  return (
    <Layout>
      <Button className={s.information__backBtn} variant={btnClass.back} type={btnType.button}>
        Назад
      </Button>
      <InformationContent onClick={onClick} title={title} btnText={btnText} image={image}>
        {children}
      </InformationContent>
    </Layout>
  );
};

export default Information;
