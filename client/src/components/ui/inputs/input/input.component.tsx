import React from 'react';
import {IUseInput} from "../../../../hooks/use-input.hook";
import {cn} from "../../../../helpers/react.helper";
import css from './input.module.scss';

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hook: IUseInput<any>,
}

const Input: React.FC<IInputProps> = (props) => {
    const { hook, className, ...other } = props;

    return (
        <input
            {...other}
            value={hook.value}
            onChange={(e) => hook.setValue(e.target.value)}
            className={cn(className, css.container)}
        />
    );
};

export default Input;