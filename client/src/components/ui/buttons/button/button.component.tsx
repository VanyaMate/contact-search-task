import css from './button.module.scss';
import React from "react";
import {cn} from "../../../../helpers/react.helper";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}

const Button: React.FC<IButtonProps> = (props) => {
    const { className, active, ...other } = props;
    return (
        <button {...other} className={cn(className, css.container, active ? css.active : undefined)}/>
    );
};

export default Button;