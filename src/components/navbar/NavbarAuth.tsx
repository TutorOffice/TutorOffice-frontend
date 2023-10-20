import { NavLink } from 'react-router-dom'

import { navLinksAuth } from '@/shared/constants'

import s from './Navbar.module.css'

const NavbarAuth = () => {
  return (
    <ul className={s.navbar__list}>
      {navLinksAuth.map((item, index) => (
        <li key={index} className={s.navbar__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.navbar__link_active : s.navbar__link
            }
            to={item.link}
          >
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default NavbarAuth
