import s from './Burger.module.css';

import clsx from 'clsx';
import React from 'react';

interface BurgerProps {
  isVisibleMenu: boolean;
  onClickBurger: () => void;
}

const Burger: React.FC<BurgerProps> = ({ isVisibleMenu = false, onClickBurger }) => {
  const className = clsx({
    [s.burger]: true,
    [s.active]: isVisibleMenu,
  });

  return (
    <button type='button' className={className} onClick={onClickBurger}>
      <div className={s.burger__lines}>
        <span className={s.burger__line} />
        <span className={s.burger__line} />
        <span className={s.burger__line} />
      </div>
    </button>
  );
};

export default Burger;
