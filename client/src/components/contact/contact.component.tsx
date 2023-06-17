import Row from "../ui/containers/row/row.component";
import Vertical from "../ui/containers/vertical/vertical.component";
import {cn} from "../../helpers/react.helper";
import React from "react";
import Input from "../ui/inputs/input/input.component";
import {useInput} from "../../hooks/use-input.hook";
import css from './contact.module.scss';
import ContactUpdateButton from "./contact-update-button/contact-update-button.component";
import ContactDeleteButton from "./contact-delete-button/contact-delete-button.component";
import NumberInput from "../number-input/number-input.component";
import {emailValidator, numberValidator} from "../../validators/form.validators";
import {convertToContactNumber} from "../../helpers/convert.helper";

export interface IContactProps {
    email: string;
    number: string;
    className?: string;
}

const Contact: React.FC<IContactProps> = (props) => {
    const email = props.email;
    const number = props.number;

    const emailInput = useInput<string>(props.email, emailValidator);
    const numberInput = useInput<string>(props.number, numberValidator);

    return (
        <Row offset={5} className={cn(props.className, css.container)}>
            <Vertical offset={5} className={css.info}>
                <Input hook={emailInput} placeholder={'email'}/>
                <NumberInput hook={numberInput}/>
            </Vertical>
            <Vertical offset={5}>
                <ContactUpdateButton
                    active={emailInput.valid && numberInput.valid}
                    filter={{ email, number: convertToContactNumber(number) }}
                    data={{ email: emailInput.value, number: convertToContactNumber(numberInput.value) }}
                />
                <ContactDeleteButton email={email} number={convertToContactNumber(number)}/>
            </Vertical>
        </Row>
    );
};

export default Contact;