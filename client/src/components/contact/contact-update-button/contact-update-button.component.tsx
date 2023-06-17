import {IContact, IContactSearch} from "../../../store/contact/contact.interface";
import Button from "../../ui/buttons/button/button.component";
import {contactApi} from "../../../store/contact/contact.api";
import {useActions} from "../../../hooks/redux/use-actions.hook";
import React from "react";

interface IContactUpdateButtonProps {
    filter: IContactSearch,
    data: IContact,
    active: boolean,
}

const ContactUpdateButton: React.FC<IContactUpdateButtonProps> = (props) => {
    const [dispatchUpdate, { isFetching }] = contactApi.useLazyUpdateQuery();
    const {contact} = useActions();

    const update = function () {
        dispatchUpdate({ filter: props.filter, body: props.data })
            .then((response) => {
                if (!response.error && response.data === true) {
                    contact.update(props);
                }
            })
    }

    return (
        <Button active={!isFetching && props.active} onClick={() => update()}>Обновить</Button>
    );
};

export default ContactUpdateButton;