import { Link } from 'react-router-dom';
import s from './StudentCard.module.css';
import { btnClass, btnType, Button } from '../../shared/ui';
import virtualStudentPhoto from '../../assets/images/virtual-student.png';

interface StudentCardProps {
  photo: string;
  studentStatus: boolean;
  name: string;
  subject: string;
  subjectLevel: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ photo, studentStatus, name, subject, subjectLevel }) => {
  return (
    <div className={s.card}>
      <div className={s.card__wrapper}>
        <img className={s.card__photo} src={studentStatus ? photo : virtualStudentPhoto} alt='Фото ученика' />
        <div className={!studentStatus && s.studentStatus}>
          <p className={s.card__name}>
            {name.split(' ')[0]}
            <br></br>
            {name.split(' ')[1]}
          </p>
          <p className={s.card__subject}>{subject}</p>
          <p>Уровень - {subjectLevel}</p>
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

export default StudentCard;
