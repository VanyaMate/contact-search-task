import css from './content.module.scss';
import {cn} from "../../helpers/react.helper";
import React from "react";

const Content: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, ...other } = props;
    return (
        <div className={cn(className, css.container)} {...other}/>
    );
};

export default Content;