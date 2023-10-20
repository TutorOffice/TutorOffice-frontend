import clsx from 'clsx'
import React from 'react'

import { Button } from '@/shared/ui'

import { InformationProps } from '../Information'
import s from '../Information.module.css'

interface InformationContentProps extends InformationProps {
  className?: string
}

const InformationContent: React.FC<InformationContentProps> = ({
  className,
  children,
  title,
  image,
  onClick,
  btnText,
}) => {
  const informationClassName = clsx(className, {
    [s.information__content]: true,
  })

  return (
    <div className={informationClassName}>
      <div className={s.information__text}>
        <h2 className={s.information__title}>{title}</h2>
        <p className={s.information__desc}>{children}</p>
        <Button onClick={onClick}>{btnText}</Button>
      </div>
      <img className={s.information__image} src={image} alt="Конверт" />
    </div>
  )
}

export default InformationContent
