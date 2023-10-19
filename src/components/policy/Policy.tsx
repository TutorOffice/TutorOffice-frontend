import clsx from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Button, Checkbox } from '@/shared/ui'

import s from './Policy.module.css'

interface PolicyProps {
  className?: string
}

const Policy: FC<PolicyProps> = ({ className }) => {
  const policyClassName = clsx(className, { [s.policy]: true })

  return (
    <div className={policyClassName}>
      <Checkbox />
      <p className={s.policy__text}>
        Я согласен с
        <Link to="/" className={s.policy__link}>
          <Button variant="transparent">Политикой конфиденциальности</Button>
        </Link>
        <br /> и
        <Link to="/" className={s.policy__link}>
          <Button variant="transparent">Условиями использования сервиса</Button>
        </Link>
      </p>
    </div>
  )
}

export default Policy
