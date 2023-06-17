import s from './Policy.module.css';

import { Button, btnClass, btnType } from '@/shared/ui';

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
        <label className={s.policy__label} htmlFor='policy'>
          <span>
            Я согласен с
            <Link to='/' className={s.policy__link}>
              <Button type={btnType.button} variant={btnClass.common}>
                Политикой конфиденциальности
              </Button>
            </Link>
            <br /> и
            <Link to='/' className={s.policy__link}>
              <Button type={btnType.button} variant={btnClass.common}>
                Условиями использования сервиса
              </Button>
            </Link>
          </span>
        </label>
      </div>
    </div>
  );
};

export default Policy;
