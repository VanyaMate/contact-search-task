import React from 'react';
import css from './page-container.module.scss';

const PageContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div className={css.container}>
            <div className={css.content}>
                { props.children }
            </div>
        </div>
    );
};

export default PageContainer;