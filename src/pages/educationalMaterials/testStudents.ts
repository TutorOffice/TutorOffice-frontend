import testPhoto from '@/assets/images/test-student.jpg';

type testDataStatus = 'student' | 'tutor';

interface ITestData {
  id: number;
  statusUser: testDataStatus;
  activeStatus: boolean;
  photo: string;
  name: string;
  studentSubject?: string;
  studentSubjectLevel?: string;
  isTutorials: boolean;
}

const testData: ITestData[] = [
  {
    id: 1,
    statusUser: 'student',
    activeStatus: true,
    photo: testPhoto,
    name: 'Иван Иванович Иванов',
    studentSubject: 'Английский',
    studentSubjectLevel: 'B2',
    isTutorials: true,
  },
  {
    id: 2,
    statusUser: 'student',
    activeStatus: true,
    photo: testPhoto,
    name: 'Петр Петров',
    studentSubject: 'Английский',
    studentSubjectLevel: 'A1',
    isTutorials: true,
  },
  {
    id: 3,
    statusUser: 'student',
    activeStatus: true,
    photo: testPhoto,
    name: 'Денис Денисов',
    studentSubject: 'Английский',
    studentSubjectLevel: 'B2',
    isTutorials: true,
  },
  {
    id: 4,
    statusUser: 'student',
    activeStatus: true,
    photo: testPhoto,
    name: 'Евгения Евгеньевна',
    studentSubject: 'Английский',
    studentSubjectLevel: 'A2',
    isTutorials: true,
  },
  {
    id: 5,
    statusUser: 'student',
    activeStatus: false,
    photo: testPhoto,
    name: 'Иван Иванов',
    studentSubject: 'Китайский',
    studentSubjectLevel: 'B2',
    isTutorials: true,
  },
  {
    id: 6,
    statusUser: 'student',
    activeStatus: false,
    photo: testPhoto,
    name: 'Семен Семенович',
    studentSubject: 'Английский',
    studentSubjectLevel: 'C1',
    isTutorials: true,
  },
];

export default testData;
