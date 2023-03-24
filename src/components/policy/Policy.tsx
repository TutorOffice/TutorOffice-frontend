import React, { useState } from 'react';
import s from './Policy.module.css';
import { Link } from 'react-router-dom';

interface PolicyProps {
    children?: React.ReactNode;
}

const Policy: React.FC<PolicyProps> = ({ children }) => {

    const [isChecked, setIsChecked] = useState(false)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={s.policy}>
            <div className={s.checkbox__wrapper}>

                <input type="checkbox" id="policy" name="policy" value="yes" className={s.customCheckbox} checked={isChecked}
                    onChange={onChange} />

                <label htmlFor="policy">
                    <span>Я согласен с <Link to='/' className={s.policy__link}>Политикой конфиденциальности</Link>
                        <br /> и  <Link to='/' className={s.policy__link}>Условиями использования сервиса</Link></span></label>
            </div>

        </div>);
};

export default Policy;