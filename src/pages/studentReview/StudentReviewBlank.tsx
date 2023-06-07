import s from './StudentReview.module.css';

import { btnClass, btnType, Button } from '../../shared/ui';
import studentsImage from '../../assets/images/students.png';

const StudentReviewBlank = () => {
  return (
    <div className={s.studentReviewBlank}>
      <div className={s.studentReview__blank}>
        <h2 className={s.studentReview__title}>У Вас пока нет ни одного ученика</h2>
        <p className={s.studentReview__content}>Вы можете добавить нового ученика, указав его фамилию, имя и e-mail.</p>
        <Button type={btnType.button} variant={btnClass.primary}>
          Добавить ученика
        </Button>
      </div>
      <img className={s.studentReview__image} src={studentsImage} alt='Ученики' />
    </div>
  );
};

export default StudentReviewBlank;
