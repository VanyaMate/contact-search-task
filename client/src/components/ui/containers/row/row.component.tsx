import React from 'react';
import styled from 'styled-components';

export interface IRow extends React.HTMLAttributes<HTMLDivElement> {
    offset?: number
}

const RowContainer = styled.div`
    display: flex;
    
    & > * {
        margin-right: ${(props: { offset?: number }) => props.offset ? `${props.offset}px` : '10px'};
    }
    
    & > *:last-child {
        margin-right: 0;
    }
`

const Row: React.FC<IRow> = (props) => {
    return (
        <RowContainer {...props}/>
    );
};

export default Row;