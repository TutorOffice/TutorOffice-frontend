/* eslint-disable react/prop-types */
import s from './UserCard.module.css';

import { btnClass, btnType, Button } from '@/shared/ui';
import virtualStudentPhoto from '@/assets/images/virtual-student.png';
import { userRole } from '@/shared/types/userRole';

import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface UserCardProps {
  isActive: boolean;
  photo: string;
  firstName: string;
  lastName: string;
  patronymic?: string;
  subject: string;
  studentSubjectLevel: string;
  role: userRole;
  btnText: string;
  linkPath: string;
}

const UserCard: React.FC<UserCardProps> = ({
  role,
  photo,
  isActive = false,
  firstName,
  lastName,
  patronymic,
  subject,
  studentSubjectLevel,
  btnText,
  linkPath,
}) => {
  const cardClassName = clsx(s.card__wrapper, { [s.virtualStudent]: !isActive });

  return (
    <li className={s.card}>
      <div className={cardClassName}>
        <div className={s.card__header}>
          <img className={s.card__photo} src={isActive ? photo : virtualStudentPhoto} alt='Фото пользователя' />
          <p className={s.card__name}>
            {lastName}
            <br />
            {firstName}
            <br />
            {patronymic || <br />}
          </p>
        </div>
        <div className={s.card__subjectBlock}>
          <p className={s.card__subject}>
            {role === userRole.student ? subject : `Преподаватель английского\u00A0языка`}
          </p>
          {role === userRole.student && <p>{`Уровень - ${studentSubjectLevel}`}</p>}
        </div>
      </div>
      <Link to={linkPath}>
        <Button className={s.card__button} type={btnType.button} variant={btnClass.common}>
          {btnText}
        </Button>
      </Link>
    </li>
  );
};

export default UserCard;
