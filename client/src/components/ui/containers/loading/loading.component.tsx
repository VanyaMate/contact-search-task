import React from 'react';
import {cn} from "../../../../helpers/react.helper";
import css from './loading.module.scss';

export interface ILoadingProps extends React.HTMLAttributes<HTMLDivElement> {
    loading: boolean;
}

const Loading: React.FC<ILoadingProps> = (props) => {
    const { loading, className, ...other } = props;
    return (
        <div {...other} className={cn(className, css.container, loading ? css.loading : undefined)}/>
    );
};

export default Loading;