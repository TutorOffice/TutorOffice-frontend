import s from './Policy.module.css';

import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface PolicyProps {
  name: string;
  register?: UseFormRegister<FieldValues>;
}

const Policy: FC<PolicyProps> = ({ name, register }) => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={s.policy}>
      <div className={s.checkbox__wrapper}>
        <input
          {...(register && { ...register(name) })}
          type='checkbox'
          id='policy'
          name='policy'
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
