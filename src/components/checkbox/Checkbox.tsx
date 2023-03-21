import React, { useState } from 'react';
import s from './Checkbox.module.css';

interface CheckboxProps {
    children?: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({ children }) => {

    const [isTutor, setIsTutor] = useState(true)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsTutor(!isTutor);
      };

   return (
        <div className={s.checkbox}>
            <div className={s.checkbox__wrapper}>
                <input className={s.customRadio} name="tutor" type="radio" id="tutor" value='tutor' 
                checked={isTutor} onChange={onChange} />
                <label htmlFor="tutor">
                    Преподаватель
                </label>
            </div>
            <div className={s.checkbox__wrapper}>
                <input className={s.customRadio} name="student" type="radio" id="student" value="student" 
                checked={!isTutor} onChange={onChange}/>
                <label htmlFor="student">Ученик</label>
            </div>
        </div>);
};

export default Checkbox;