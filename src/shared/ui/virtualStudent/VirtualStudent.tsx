import styles from './virtualStudent.module.css';

import { FC, useState } from 'react';
import clsx from 'clsx';

interface IVirtualStudent {
  classname?: string;
}

const VirtualStudent: FC<IVirtualStudent> = ({ classname }) => {
  const [showTip, setShowTip] = useState(false);
  const className = clsx(classname, styles.root, { [styles.rootClicked]: showTip });
  return (
    <button onClick={() => setShowTip(!showTip)} className={className}>
      <span>Активный и виртуальный ученик</span>
      <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30' fill='none'>
        <path
          className={styles.svg}
          d='M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z'
          stroke='#9EA1A6'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          className={styles.svg}
          d='M11.3625 11.25C11.6564 10.4146 12.2365 9.71011 13 9.2614C13.7635 8.81268 14.6612 8.64865 15.534 8.79837C16.4069 8.94809 17.1986 9.40188 17.7689 10.0794C18.3392 10.7569 18.6514 11.6144 18.6501 12.5C18.6501 15 14.9 16.25 14.9 16.25'
          stroke='#9EA1A6'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />

        <path
          className={styles.svg}
          d='M15 21.25H15.0125'
          stroke='#9EA1A6'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      {showTip && (
        <div className={styles.popup}>
          <span>
            Если Ваш ученик примет приглашение зарегистрироваться на сайте, то станет <strong>активным учеником</strong>
            и полноценно будет участвовать в процессе: общаться с Вами, получать и выполнять домашние задания, менять
            информацию о себе, смотреть учебные материалы. <br />
            <br /> Если ученик не имеет возможности пользоваться сайтом, Вы можете добавить его как
            <span className={styles.virtualTipq}> виртуального ученика </span>, без указания и подтверждения им
            контактных данных. Вы сможете вносить и отслеживать информацию о нём: уроки в расписании, выданные д/з,
            учебные материалы.
          </span>
        </div>
      )}
    </button>
  );
};
export default VirtualStudent;
