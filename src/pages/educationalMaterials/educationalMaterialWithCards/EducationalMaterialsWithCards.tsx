import UserCard from '@/components/userCard/UserCard'
import { userRole } from '@/shared/types/userRole'

import testData from '../testStudents'
import s from './EducationalMaterialWithCards.module.css'

const EducationalMaterialsWithCards = () => {
  return (
    <>
      <h2 className={s.educationalMaterialsWithCards__title}>
        Учебные материалы
      </h2>
      <ul className={s.educationalMaterialsWithCards__container}>
        {testData.map((stud) => (
          <UserCard
            key={stud.id}
            role={userRole.student}
            isActive={stud.isActive}
            photo={stud.photo}
            firstName={stud.firstName}
            lastName={stud.lastName}
            subject={stud.subject}
            studentSubjectLevel={stud.studentSubjectLevel}
            btnText="Учебные материалы"
            linkPath={stud.id.toString()}
          />
        ))}
      </ul>
    </>
  )
}

export default EducationalMaterialsWithCards
