import s from './Textarea.module.css';

import { FC, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ITextarea extends TextareaHTMLAttributes<HTMLAreaElement> {
  labelText?: string;
  commentTip?: string;
}

const Textarea: FC<ITextarea> = ({ labelText, commentTip, className }) => {
  const ClassName = clsx(className, s.root);

  return (
    <div className={s.root}>
      <label>{labelText}</label>
      <textarea className={ClassName}></textarea>
      <p>{commentTip}</p>
    </div>
  );
};

export default Textarea;
