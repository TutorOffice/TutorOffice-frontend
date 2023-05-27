import { Link } from 'react-router-dom';
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
      <div className={s.card__wrapper}>
        <img className={s.card__photo} src={photo} alt='Фото ученика' />
        <div>
          <p className={s.card__name}>
            {name.split(' ')[0]}
            <br></br>
            {name.split(' ')[1]}
          </p>
          <p className={s.card__subject}>{subject}</p>
          <p>{subjectLevel}</p>
        </div>
      </div>
      <Link to='#'>
        <Button type={btnType.button} variant={btnClass.back}>
          Посмотреть
        </Button>
      </Link>
    </div>
  );
};

export default Card;
