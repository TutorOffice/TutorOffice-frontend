import clsx from 'clsx'
import React from 'react'

import s from './ButtonGroup.module.css'

interface ButtonGroupProps {
  children: React.ReactNode
  width?: string
  className?: string
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className,
  children,
  width = 'auto',
}) => {
  const buttonGroupClassName = clsx(className, {
    [s.group__buttons]: true,
  })

  return (
    <div style={{ width }} className={buttonGroupClassName}>
      {children}
    </div>
  )
}

export default ButtonGroup
