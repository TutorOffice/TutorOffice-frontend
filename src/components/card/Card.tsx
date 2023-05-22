import { useState } from 'react';
import s from './Card.module.css';
import { btnClass, btnType, Button } from '../../shared/ui';

interface CardProps {
  photo: string;
  name: string;
  subject: string;
  subjectLevel: string;
}

const Card: React.FC<CardProps> = ({ photo, name, subject, subjectLevel }) => {
  return (
    <div className={s.card}>
      
    </div>
  );
}

export default Card;