import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

import { Button, ButtonGroup } from '@/shared/ui'

import HeaderMain from '../headerMain/HeaderMain'
import s from './HeaderNoAuth.module.css'

interface HeaderNoAuthProps {
  className?: string
}

const HeaderNoAuth: React.FC<HeaderNoAuthProps> = ({ className }) => {
  const headerClassName = clsx(className, { [s.headerNoAuth]: true })

  return (
    <HeaderMain className={headerClassName}>
      <ButtonGroup>
        <Link to="/login">
          <Button color="secondaryColor" variant="outline">
            Вход
          </Button>
        </Link>
        <Link to="/register">
          <Button>Регистрация</Button>
        </Link>
      </ButtonGroup>
    </HeaderMain>
  )
}

export default HeaderNoAuth
