import s from './UserCard.module.css';

import { btnClass, btnType, Button } from '@/shared/ui';
import virtualStudentPhoto from '@/assets/images/virtual-student.png';

import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface UserCardProps {
  id: number;
  photo: string;
  first_name: string;
  last_name: string;
  patronymic?: string;
  studentStatus?: boolean;
  studentSubject?: string;
  studentSubjectLevel?: string;
  tutorSubject?: string;
  isTutorials?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({
  id,
  photo,
  studentStatus,
  first_name,
  last_name,
  patronymic,
  studentSubject,
  studentSubjectLevel,
  tutorSubject,
  isTutorials,
}: UserCardProps) => {
  const studentStatusClass = clsx({ [s.studentStatus]: !studentStatus });
  return (
    <div className={s.card}>
      <div className={s.card__wrapper}>
        <img className={s.card__photo} src={studentStatus ? photo : virtualStudentPhoto} alt='Фото пользователя' />
        <div className={studentStatusClass}>
          <p className={s.card__name}>
            {last_name}
            <br />
            {first_name}
            <br />
            {patronymic || <br />}
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
      <Link to={isTutorials ? '#' : `/student/${id}`}>
        <Button type={btnType.button} variant={btnClass.common}>
          {isTutorials ? 'Учебные материалы' : 'Посмотреть'}
        </Button>
      </Link>
    </div>
  );
};

export default UserCard;
