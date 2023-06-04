import s from './StudentReview.module.css';
import { btnClass, btnType, Button } from '../../shared/ui';
import StudentCard from '../../components/studentCard/StudentCard';
import testStudents from './testStudents';

const StudentReviewWithCard = () => {
  return (
    <div className={s.studentReviewWithCard}>
      <div className={s.studentReview__withCards}>
        <h2 className={s.studentReview__title}>Ученики</h2>
        <Button type={btnType.button} variant={btnClass.primary}>
          Добавить ученика
        </Button>
      </div>
      <p className={s.studentReviewWithCard__description}>
        Если Ваш ученик примет Ваше приглашение зарегистрироваться на сайте, то он станет{' '}
        <span className={s.student_activ}>активным учеником</span> и будет полноценным участником процесса: сможет
        общаться с Вами, получать и выполнять домашние задания, менять информацию о себе, смотреть учебные материалы.
      </p>
      <p className={s.studentReviewWithCard__description}>
        Если ученик не хочет или не имеет возможности пользоваться сайтом, Вы можете добавить его как{' '}
        <span className={s.student_virtual}>виртуального ученика</span>. У Вас будет возможность вносить и отслеживать
        информацию о нём: его уроки в расписании, выданные ему д/з (без возможности отслеживать их статус), его учебные
        материалы.
      </p>
      <div className={s.studentReview__cards_container}>
        {testStudents.map((stud) => (
          <StudentCard
            key={stud.id}
            studentStatus={stud.activStatus}
            photo={stud.photo}
            name={stud.name}
            subject={stud.subject}
            subjectLevel={stud.subjectLevel}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentReviewWithCard;
