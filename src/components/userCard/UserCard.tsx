import { Link } from 'react-router-dom';
import s from './UserCard.module.css';
import { btnClass, btnType, Button } from '../../shared/ui';
import virtualStudentPhoto from '../../assets/images/virtual-student.png';
import clsx from 'clsx';

interface UserCardProps {
  photo: string;
  name: string;
  studentStatus?: boolean;
  studentSubject?: string;
  studentSubjectLevel?: string;
  tutorSubject?: string;
  isTutorials?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({
  photo,
  studentStatus,
  name,
  studentSubject,
  studentSubjectLevel,
  tutorSubject,
  isTutorials,
}) => {
  const studentStatusClass = clsx({ [s.studentStatus]: !studentStatus });
  return (
    <div className={s.card}>
      <div className={s.card__wrapper}>
        <img className={s.card__photo} src={studentStatus ? photo : virtualStudentPhoto} alt='Фото пользователя' />
        <div className={studentStatusClass}>
          <p className={s.card__name}>
            {name.split(' ')[0]}
            <br />
            {name.split(' ')[1]}
          </p>
          {studentSubject && <p className={s.card__subject}>{studentSubject}</p>}
          {tutorSubject && (
            <p className={s.card__subject}>
              Преподаватель
              <br />
              {tutorSubject}
            </p>
          )}
          {studentSubjectLevel && <p>Уровень - {studentSubjectLevel}</p>}
        </div>
      </div>
      <Link to='#'>
        <Button type={btnType.button} variant={btnClass.back}>
          {isTutorials ? 'Учебные материалы' : 'Посмотреть'}
        </Button>
      </Link>
    </div>
  );
};

export default UserCard;
