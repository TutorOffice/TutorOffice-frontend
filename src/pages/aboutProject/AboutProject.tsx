import { Link } from 'react-router-dom'

import aboutImage from '@/assets/images/about.png'
import firstImage from '@/assets/images/about-first.jpg'
import firstImage819px from '@/assets/images/about-first-819px.jpg'
import fourthImage from '@/assets/images/about-fourth.jpg'
import fourthImage819px from '@/assets/images/about-fourth-819px.jpg'
import secondImage from '@/assets/images/about-second.jpg'
import secondImage819px from '@/assets/images/about-second-819px.jpg'
import thirdImage from '@/assets/images/about-third.jpg'
import thirdImage819px from '@/assets/images/about-third-819px.jpg'
import HeaderAuth from '@/components/header/headerAuth/HeaderAuth'
import HeaderNoAuth from '@/components/header/headerNoAuth/HeaderNoAuth'
import Layout from '@/components/layout/Layout'
import { Button } from '@/shared/ui'

import s from './AboutProject.module.css'

const AboutProject = () => {
  const isAuth = false
  return (
    <Layout>
      {isAuth ? <HeaderAuth /> : <HeaderNoAuth />}
      <h2 className={s.about__title}>О проекте</h2>
      <div className={s.about__content_top}>
        <div className={s.about__desc}>
          <p className={s.about__text}>
            Платформа Личный кабинет «Репетитор» дает возможность легко
            взаимодействовать между преподавателем и учеником.
          </p>
          <p className={s.about__text}>
            Как органайзер - где можно держать всю информацию об
            учениках/преподавателях, расписании, свои заметки, материалы по
            урокам и все это в одном месте!
          </p>
          <p className={s.about__text}>
            А также невероятная возможность для преподавателей — теперь можно
            вносить и отслеживать информацию об ученике, который не имеет
            возможности пользоваться сайтом.
          </p>
        </div>
        <img className={s.about__image} src={aboutImage} alt="О проекте" />
      </div>
      <Link className={s.about__button} to="/register">
        <Button>Зарегистрироваться</Button>
      </Link>
      <h2 className={s.ability__title}>Вы сможете:</h2>
      <ul className={s.ability__list}>
        <li className={s.abilityItem}>
          <h3 className={s.abilityItem__title}>
            С легкостью составлять расписание
          </h3>
          <picture>
            <source srcSet={firstImage819px} media="(max-width: 1100px)" />
            <img
              className={s.abilityItem__image}
              src={firstImage}
              alt="Составить расписание"
            />
          </picture>
        </li>
        <li className={s.abilityItem}>
          <h3 className={s.abilityItem__title}>Хранить учебные материалы</h3>
          <picture>
            <source srcSet={secondImage819px} media="(max-width: 1100px)" />
            <img
              className={s.abilityItem__image}
              src={secondImage}
              alt="Составить расписание"
            />
          </picture>
        </li>
        <li className={s.abilityItem}>
          <h3 className={s.abilityItem__title}>Отправлять ДЗ и сообщения</h3>
          <picture>
            <source srcSet={thirdImage819px} media="(max-width: 1100px)" />
            <img
              className={s.abilityItem__image}
              src={thirdImage}
              alt="Составить расписание"
            />
          </picture>
        </li>
        <li className={s.abilityItem}>
          <h3 className={s.abilityItem__title}>Посмотреть расписание </h3>
          <picture>
            <source srcSet={fourthImage819px} media="(max-width: 1100px)" />
            <img
              className={s.abilityItem__image}
              src={fourthImage}
              alt="Составить расписание"
            />
          </picture>
        </li>
      </ul>
      <footer className={s.about__footer}>
        <p className={s.footer__desc}>
          Присоединяйтесь к платформе Личный кабинет «Репетитор»
          и&nbsp;упростите&nbsp;себе рутину записей по урокам!
        </p>
        <Link to="/register">
          <Button>Зарегистрироваться</Button>
        </Link>
      </footer>
    </Layout>
  )
}

export default AboutProject
