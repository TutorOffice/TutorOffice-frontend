import s from './EducationalMaterials.module.css';

import testData from './testStudents';

import UserCard from '@/components/userCard/UserCard';

const EducationalMaterialsWithCards = () => {
  return (
    <>
      <h2 className={s.educationalMaterials__titleWithCards}>Учебные материалы</h2>
      <div className={s.educationalMaterials__cards_container}>
        {testData.map((stud) => (
          <UserCard
            key={stud.id}
            studentStatus={stud.activeStatus}
            photo={stud.photo}
            name={stud.name}
            studentSubject={stud.studentSubject}
            studentSubjectLevel={stud.studentSubjectLevel}
            isTutorials={stud.isTutorials}
          />
        ))}
      </div>
    </>
  );
};

export default EducationalMaterialsWithCards;
