import React from "react";
import {cn} from "../../helpers/react.helper";

export interface IContactItem extends React.HTMLAttributes<HTMLDivElement> {
    email: string;
    number: string;
}

const ContactItem: React.FC<IContactItem> = (props) => {
    const { email, number, className } = props;
    return (
        <div className={cn(className)}>
            <h2>{ email }</h2>
            <p>{ number }</p>
        </div>
    );
};

export default ContactItem;