import React from 'react';
import s from './Checkbox.module.css';
import icon from '../../assets/icons/chbox.svg';
import iconSelected from '../../assets/icons/chbox-selected.svg';
import check from '../../assets/icons/check.svg';

interface CheckboxProps {
    children?: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({ children }) => {
    return (

        <div className={s.checkbox}>
            <div className={s.checkbox__wrapper}>
                <img src={iconSelected} alt="Преподаватель" />
                <span>Преподаватель</span>
            </div>

            <div className={s.checkbox__wrapper}>
                <img src={icon} alt="Ученик" />
                <span>Ученик</span>
            </div>

            <div className={s.checkbox__wrapper}>
                <img src={check} alt="Согласен" />
                <span>Я согласен с <a href="#" className={s.policy__link}>Политикой конфиденциальности</a>
                   <br /> и  <a href="#" className={s.policy__link}>Условиями использования сервиса</a>
                </span>
            </div>

        </div>);

};

export default Checkbox;