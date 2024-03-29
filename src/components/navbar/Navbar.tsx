import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '@/assets/images/logo.png'
import { useOverlay } from '@/shared/hooks'
import { Burger } from '@/shared/ui'

import s from './Navbar.module.css'
import NavbarAuth from './NavbarAuth'
import NavbarDefault from './NavbarDefault'

const isAuth = true

const Navbar = () => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false)
  const openMenu = () => {
    setIsVisibleMenu(true)
  }
  const closeMenu = () => {
    setIsVisibleMenu(false)
  }
  const handleOverlay = useOverlay(isVisibleMenu, closeMenu)

  return (
    <div onClick={handleOverlay} className={isVisibleMenu ? s.overlay : ''}>
      <Burger isVisibleMenu={isVisibleMenu} onClickBurger={openMenu} />
      <header className={clsx({ [s.navbar]: true, [s.active]: isVisibleMenu })}>
        <button className={s.closeButton} onClick={closeMenu} />
        <Link className={s.navbar__logo_link} to="/">
          <img src={logo} alt="Логотип" className={s.navbar__logo} />
        </Link>
        <nav className={s.navbar__menu}>
          {isAuth ? <NavbarAuth /> : <NavbarDefault />}
        </nav>
        <ul className={s.contacts}>
          <li className={s.contacts__item}>
            <a className={s.link} href="tel:+79211234567">
              <svg
                className={s.link__icon}
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7812 18.875C18.0937 18.875 18.3542 18.7708 18.5625 18.5625C18.7708 18.3542 18.875 18.0938 18.875 17.7812V13.5625C18.875 13.3194 18.7969 13.1066 18.6406 12.924C18.4844 12.7413 18.2847 12.6243 18.0417 12.5729L14.4479 11.8438C14.2049 11.809 13.9573 11.8309 13.7052 11.9094C13.4531 11.9878 13.2493 12.1049 13.0938 12.2604L10.6458 14.7083C9.32639 13.9097 8.11528 12.9635 7.0125 11.8698C5.90972 10.776 4.9941 9.60417 4.26563 8.35417L6.79167 5.80208C6.94792 5.64583 7.04757 5.46771 7.09063 5.26771C7.13368 5.06771 7.1382 4.84653 7.10417 4.60417L6.42708 0.958333C6.39236 0.715278 6.27951 0.515625 6.08854 0.359375C5.89757 0.203125 5.68056 0.125 5.4375 0.125H1.21875C0.90625 0.125 0.645834 0.229167 0.4375 0.4375C0.229166 0.645833 0.125 0.90625 0.125 1.21875C0.125 3.45833 0.624306 5.64167 1.62292 7.76875C2.62153 9.89583 3.94097 11.7795 5.58125 13.4198C7.22153 15.0601 9.10521 16.3795 11.2323 17.3781C13.3594 18.3767 15.5424 18.8757 17.7812 18.875ZM3.27604 6.375C2.9809 5.69792 2.75521 5.01215 2.59896 4.31771C2.44271 3.62326 2.32118 2.92014 2.23438 2.20833H4.55208L4.99479 4.65625L3.27604 6.375ZM12.599 15.6979L14.3438 13.9531L16.7917 14.4479V16.7396C16.0799 16.6875 15.3722 16.5747 14.6688 16.401C13.9653 16.2274 13.2753 15.9931 12.599 15.6979Z"
                  fill="white"
                />
              </svg>
              <span className={s.link__text}>+7 (921) 123-45-67</span>
            </a>
          </li>
          <li className={s.contacts__item}>
            <a className={s.link} href="mailto:repetitor@mail.ru">
              <svg
                className={s.link__icon}
                width="23"
                height="17"
                viewBox="0 0 23 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6562 3.03125V13.9688C21.6562 14.3832 21.4916 14.7806 21.1986 15.0736C20.9056 15.3666 20.5082 15.5312 20.0938 15.5312H2.90625C2.49185 15.5312 2.09442 15.3666 1.8014 15.0736C1.50837 14.7806 1.34375 14.3832 1.34375 13.9688V3.03125M21.6562 3.03125C21.6562 2.61685 21.4916 2.21942 21.1986 1.9264C20.9056 1.63337 20.5082 1.46875 20.0938 1.46875H2.90625C2.49185 1.46875 2.09442 1.63337 1.8014 1.9264C1.50837 2.21942 1.34375 2.61685 1.34375 3.03125M21.6562 3.03125L12.3891 9.44687C12.1278 9.62764 11.8177 9.72447 11.5 9.72447C11.1823 9.72447 10.8722 9.62764 10.6109 9.44687L1.34375 3.03125"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={s.link__text}>repetitor@mail.ru</span>
            </a>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Navbar
