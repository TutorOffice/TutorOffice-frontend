import InformationContent from './informationContent/InformationContent';

import Layout from '../layout/Layout';

import Wrapper from '../wrapper/Wrapper';

import { btnClass, btnType, Button } from '@/shared/ui';

import React from 'react';

interface InformationProps {
  title: string;
  children: React.ReactNode;
  btnText: string;
  image: string;
  onClick?: () => void;
}

const Information: React.FC<InformationProps> = ({ children, title, btnText, image, onClick }) => {
  return (
    <Layout>
      <Wrapper>
        <Button variant={btnClass.back} type={btnType.button} bottom={200}>
          Назад
        </Button>
        <InformationContent onClick={onClick} title={title} btnText={btnText} image={image}>
          {children}
        </InformationContent>
      </Wrapper>
    </Layout>
  );
};

export default Information;
