import React from 'react'

import Layout from '@/components/layout/Layout'
import { Button } from '@/shared/ui'

import s from './Information.module.css'
import InformationContent from './informationContent/InformationContent'

export interface InformationProps {
  title: string
  children: React.ReactNode
  btnText: string
  image: string
  onClick?: () => void
}

const Information: React.FC<InformationProps> = ({
  children,
  title,
  btnText,
  image,
  onClick,
}) => {
  return (
    <Layout>
      <Button className={s.information__backBtn}>Назад</Button>
      <InformationContent
        onClick={onClick}
        title={title}
        btnText={btnText}
        image={image}
      >
        {children}
      </InformationContent>
    </Layout>
  )
}

export default Information
