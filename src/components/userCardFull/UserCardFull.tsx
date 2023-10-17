import clsx from 'clsx'
import { Link } from 'react-router-dom'

import arrowUpIcon from '@/assets/icons/arrow-up.svg'
import toDoIcon from '@/assets/icons/status-false.svg'
import doneIcon from '@/assets/icons/status-true.svg'
import virtualStudentPhoto from '@/assets/images/virtual-student.png'
import { Button } from '@/shared/ui'

import s from './UserCardFull.module.css'

interface UserCardFullProps {
  photo: string
  firstName: string
  lastName: string
  patronymic?: string
  email: string
  phone: string
  studentStatus?: boolean
  studentSubject?: string
  studentSubjectLevel?: string
  tutorSubject?: string
  isTutorials?: boolean
  homeWorkDone: number | string
  homeWorkArrowUp: number | string
  homeWorkToDo: number | string
}

const UserCardFull: React.FC<UserCardFullProps> = ({
  photo,
  studentStatus,
  firstName,
  lastName,
  patronymic,
  email,
  phone,
  studentSubject,
  studentSubjectLevel,
  homeWorkDone,
  homeWorkArrowUp,
  homeWorkToDo,
}: UserCardFullProps) => {
  const studentStatusClass = clsx({ [s.studentStatus]: !studentStatus })

  return (
    <div className={s.userCardFull}>
      <div className={s.userCardFull__wrapper}>
        <img
          className={s.userCardFull__photo}
          src={studentStatus ? photo : virtualStudentPhoto}
          alt="Фото пользователя"
        />
        <div className={studentStatusClass}>
          <p className={s.userCardFull__name}>
            {lastName}
            <br />
            {firstName}
            <br />
            {patronymic || <br />}
          </p>
          {studentSubject && (
            <p className={s.userCardFull__subject}>{studentSubject}</p>
          )}
          {studentSubjectLevel && (
            <p className={s.userCardFull_subjectLevel}>
              Уровень - {studentSubjectLevel}
            </p>
          )}
        </div>
      </div>
      <div className={s.userCardFull__contactItem}>
        E-mail: <span>{email}</span>
      </div>
      <div className={s.userCardFull__contactItem}>
        Телефон: <span>{phone}</span>
      </div>
      <Button className={s.userCardFull__button_common}>Удалить ученика</Button>
      <div className={s.userCardFull__homeWorkTitle}>Домашние задания</div>
      <div className={s.userCardFull__homeWorkStatusContainer}>
        <p className={s.userCardFull__homeWorkStatusDone}>
          <img
            className={s.userCardFull__homeWorkStatusIcon}
            src={doneIcon}
            alt="Done"
          />{' '}
          {homeWorkDone}
        </p>
        <p className={s.userCardFull__homeWorkStatusArrowUp}>
          <img
            className={s.userCardFull__homeWorkStatusIcon}
            src={arrowUpIcon}
            alt="ArrowUp"
          />{' '}
          {homeWorkArrowUp}
        </p>
        <p className={s.userCardFull__homeWorkStatusToDo}>
          <img
            className={s.userCardFull__homeWorkStatusIcon}
            src={toDoIcon}
            alt="ToDo"
          />{' '}
          {homeWorkToDo}
        </p>
      </div>
      <Link to="#" className={s.userCardFull__button_primary}>
        <Button width="100%">Написать</Button>
      </Link>
    </div>
  )
}

export default UserCardFull
