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
      <div className={s.studentReview__cards_container}>
        {testStudents.map((stud) => (
          <StudentCard
            key={stud.id}
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
