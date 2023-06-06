import s from './HomeWork.module.css';

import Layout from '@/components/layout/Layout';
import Wrapper from '@/components/wrapper/Wrapper';
import HeaderAuth from '@/components/headerAuth/HeaderAuth';
import userPhoto from '@/assets/images/user-photo.jpg';
import HomeWorkItem from '@/components/homeWorkItem/HomeWorkItem';

const testData = [
  {
    id: 1,
    photo: userPhoto,
    fullName: 'Феофанов Алексей',
    lesson: 'Английский язык',
    sent: 1,
    todo: 2,
    done: 10,
  },
  {
    id: 2,
    photo: userPhoto,
    fullName: 'Феофанов Алексей',
    lesson: 'Английский язык',
    sent: 1,
    todo: 2,
    done: 10,
  },
  {
    id: 3,
    photo: userPhoto,
    fullName: 'Феофанов Алексей',
    lesson: 'Английский язык',
    sent: 1,
    todo: 2,
    done: 10,
  },
  {
    id: 4,
    photo: userPhoto,
    fullName: 'Феофанов Алексей',
    lesson: 'Английский язык',
    sent: 1,
    todo: 2,
    done: 10,
  },
];

const HomeWork = () => {
  return (
    <Layout>
      <Wrapper>
        <HeaderAuth bottom={60} />
        <div className={s.homework}>
          <h2 className={s.homework__title}>Домашние задания</h2>
          <div className={s.homeWork__list}>
            {testData.map((s) => (
              <HomeWorkItem
                key={s.id}
                photo={s.photo}
                fullName={s.fullName}
                lesson={s.lesson}
                sent={s.sent}
                todo={s.todo}
                done={s.done}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default HomeWork;
