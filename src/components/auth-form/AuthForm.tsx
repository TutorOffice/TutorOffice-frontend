import React from 'react';
import s from './AuthForm.module.css';
import Layout from '../layout/Layout';
//import { Button, btnClass, btnType } from '../../shared/ui';
import { useNavigate } from 'react-router-dom';

interface AuthFormProps {
    title: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ children, title }) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <Layout>
            <section className={s.authForm}>
                <button className={s.authForm__backBtn} onClick={goBack}>
                    Назад
                </button>
                <h2 className={s.authForm__title}>{ title }</h2>
                {children}
            </section>
        </Layout>
    );
};

export default AuthForm;