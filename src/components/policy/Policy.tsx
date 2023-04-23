import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Policy.module.css';

interface policyProps {
  name: string;
  register?: any; // fix
}

const Policy: FC<policyProps> = ({ name, register }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={s.policy}>
      <div className={s.checkbox__wrapper}>
        <input
          {...register(name)}
          type='checkbox'
          id='policy'
          name='policy'
          value={isChecked}
          className={s.customCheckbox}
          checked={isChecked}
          onChange={onChange}
        />
        <label htmlFor='policy'>
          <span>
            Я согласен с
            <Link to='/' className={s.policy__link}>
              Политикой конфиденциальности
            </Link>
            <br /> и
            <Link to='/' className={s.policy__link}>
              Условиями использования сервиса
            </Link>
          </span>
        </label>
      </div>
    </div>
  );
};

export default Policy;
