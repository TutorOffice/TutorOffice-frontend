import clsx from 'clsx'
import React from 'react'

import s from './HeaderMain.module.css'

interface HeaderMainProps {
  children: React.ReactNode
  className?: string
}

const HeaderMain: React.FC<HeaderMainProps> = ({ children, className }) => {
  const headerClassName = clsx(className, { [s.header]: true })

  return <header className={headerClassName}>{children}</header>
}

export default HeaderMain
