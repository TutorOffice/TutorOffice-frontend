import s from './Policy.module.css';

import { Button, Checkbox, btnClass, btnType } from '@/shared/ui';

import { validateType } from '@/shared/validation';

import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';

interface PolicyProps {
  name: validateType;
  register?: UseFormRegister<FieldValues>;
  className?: string;
}

const Policy: FC<PolicyProps> = ({ register, name, className }) => {
  const policyClassName = clsx(className, { [s.policy]: true });

  return (
    <div className={policyClassName}>
      <Checkbox register={register} name={name} />
      <p className={s.policy__text}>
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
      </p>
    </div>
  );
};

export default Policy;
