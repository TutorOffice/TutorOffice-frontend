import s from './Navbar.module.css';

import { navLinks } from '@/shared/utils';

import { NavLink } from 'react-router-dom';


const NavbarDefault = () => {
  return (
    <ul className={s.navbar__list}>
      {navLinks.map((item, index) => (
        <li key={index} className={s.navbar__item}>
          <NavLink className={({ isActive }) => (isActive ? s.navbar__link_active : s.navbar__link)} to={item.link}>
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavbarDefault;
