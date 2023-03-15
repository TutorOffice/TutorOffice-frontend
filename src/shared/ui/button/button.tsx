import React from 'react';
import clsx from "clsx";
import s from './button.module.css'

export enum btnClass {
    primary = "primary",
    ghost = "ghost",
}

interface ButtonProps {
    onClick?(): void
    children: React.ReactNode
    variant: btnClass
    isDisabled? :boolean
}

const Button:React.FC<ButtonProps> = ({onClick,children,variant,isDisabled= false}) => {
    const className = clsx({
        [s.button] : true,
        [s.buttonPrimary] : variant === btnClass.primary,
        [s.buttonGhost] : variant === btnClass.ghost,
    })
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default Button;
