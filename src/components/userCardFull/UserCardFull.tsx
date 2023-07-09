import s from './UserCardFulll.module.css';

import { btnClass, btnType, Button } from '../../shared/ui';
import virtualStudentPhoto from '../../assets/images/virtual-student.png';
import doneIcon from '../../assets/icons/status-true.svg';
import arrowUpIcon from '../../assets/icons/arrow-up.svg';
import toDoIcon from '../../assets/icons/status-false.svg';

import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface UserCardFullProps {
  photo: string;
  name: string;
  email: string;
  phone: string;
  studentStatus?: boolean;
  studentSubject?: string;
  studentSubjectLevel?: string;
  tutorSubject?: string;
  isTutorials?: boolean;
  homeWorkDone: number;
  homeWorkArrowUp: number;
  homeWorkToDo: number;
}

const UserCardFull: React.FC<UserCardFullProps> = ({
  photo,
  studentStatus,
  name,
  email,
  phone,
  studentSubject,
  studentSubjectLevel,
  homeWorkDone,
  homeWorkArrowUp,
  homeWorkToDo,
}: UserCardFullProps) => {
  const studentStatusClass = clsx({ [s.studentStatus]: !studentStatus });
  return (
    <div className={s.userCardFull}>
      <div className={s.userCardFull__wrapper}>
        <img
          className={s.userCardFull__photo}
          src={studentStatus ? photo : virtualStudentPhoto}
          alt='Фото пользователя'
        />
        <div className={studentStatusClass}>
          <p className={s.userCardFull__name}>
            {name.split(' ')[0]}
            <br />
            {name.split(' ')[1]}
            <br />
            {name.split(' ')[2] || <br />}
          </p>
          {studentSubject && <p className={s.userCardFull__subject}>{studentSubject}</p>}
          {studentSubjectLevel && <p>Уровень - {studentSubjectLevel}</p>}
        </div>
      </div>
      <div className={s.userCardFull__contactItem}>
        E-mail: <span>{email}</span>
      </div>
      <div className={s.userCardFull__contactItem}>
        Телефон: <span>{phone}</span>
      </div>
      <Button type={btnType.button} variant={btnClass.common} className={s.userCardFull__button_common}>
        Удалить ученика
      </Button>
      <div className={s.userCardFull__homeWorkTitle}>Домашние задания</div>
      <div className={s.userCardFull__homeWorkStatusContainer}>
        <p className={s.userCardFull__homeWorkStatusDone}>
          <img className={s.userCardFull__homeWorkStatusIcon} src={doneIcon} alt='Done' /> {homeWorkDone}
        </p>
        <p className={s.userCardFull__homeWorkStatusArrowUp}>
          <img className={s.userCardFull__homeWorkStatusIcon} src={arrowUpIcon} alt='ArrowUp' /> {homeWorkArrowUp}
        </p>
        <p className={s.userCardFull__homeWorkStatusToDo}>
          <img className={s.userCardFull__homeWorkStatusIcon} src={toDoIcon} alt='ToDo' /> {homeWorkToDo}
        </p>
      </div>
      <Link to='#' className={s.userCardFull__button_primary}>
        <Button type={btnType.button} variant={btnClass.primary} className={s.userCardFull__button_primary}>
          Написать
        </Button>
      </Link>
    </div>
  );
};

export default UserCardFull;
