import React from 'react';
import css from '../input/input.module.scss';
import {Props} from "react-input-mask";
import InputMask from 'react-input-mask';
import {cn} from "../../../../helpers/react.helper";

const InputWithMask: React.FC<Props> = (props) => {
    const { className, ...other } = props;
    return (
        <InputMask
            {...other}
            className={cn(className, css.container)}
        />
    );
};

export default InputWithMask;