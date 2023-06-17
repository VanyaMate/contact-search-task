import css from './titled-container.module.scss';
import {cn} from "../../../../helpers/react.helper";
import React from "react";

interface ITitledContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
}

const TitledContainer: React.FC<ITitledContainerProps> = (props) => {
    const { title, className, children, ...other } = props;
    return (
        <div {...other} className={cn(css.container, className)}>
            <h2 className={css.title}>{ title }</h2>
            {
                children
            }
        </div>
    );
};

export default TitledContainer;