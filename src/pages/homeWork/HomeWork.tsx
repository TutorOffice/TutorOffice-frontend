import s from './HomeWork.module.css';

import { testData } from './testStudents';

import Layout from '@/components/layout/Layout';
import HeaderAuth from '@/components/headerAuth/HeaderAuth';
import HomeWorkItem from '@/components/homeWorkItem/HomeWorkItem';

const HomeWork = () => {
  return (
    <Layout>
      <HeaderAuth />
      <h2 className={s.homework__title}>Домашние задания</h2>
      <ul className={s.homeWork__list}>
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
      </ul>
    </Layout>
  );
};

export default HomeWork;
