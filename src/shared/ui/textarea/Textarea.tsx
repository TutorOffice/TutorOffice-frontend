import clsx from 'clsx'
import { FC, TextareaHTMLAttributes } from 'react'

import s from './Textarea.module.css'

interface ITextarea extends TextareaHTMLAttributes<HTMLAreaElement> {
  labelText?: string
  commentTip?: string
}

const Textarea: FC<ITextarea> = ({ labelText, commentTip, className }) => {
  const ClassName = clsx(className, s.root)

  return (
    <div className={s.root}>
      <label>{labelText}</label>
      <textarea className={ClassName} />
      <p>{commentTip}</p>
    </div>
  )
}

export default Textarea
