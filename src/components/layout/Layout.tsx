import React from 'react'

import Navbar from '../navbar/Navbar'
import s from './Layout.module.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={s.layout}>
      <Navbar />
      <main className={s.main}>{children}</main>
    </div>
  )
}

export default Layout
