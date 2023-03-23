import React from 'react';
import Layout from '../layout/Layout';
import InformationContent from './informationContent/InformationContent';
import { btnClass, btnType, Button } from '../../shared/ui';
import Wrapper from '../wrapper/Wrapper';

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
        <Button variant={btnClass.back} type={btnType.submit} bottom={200}>
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
