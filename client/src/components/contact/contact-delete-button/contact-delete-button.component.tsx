import {IContact} from "../../../store/contact/contact.interface";
import Button from "../../ui/buttons/button/button.component";
import {contactApi} from "../../../store/contact/contact.api";
import {useActions} from "../../../hooks/redux/use-actions.hook";
import React from "react";

const ContactDeleteButton: React.FC<IContact> = (props) => {
    const [dispatchDelete, { isFetching }] = contactApi.useLazyDeleteQuery();
    const {contact} = useActions();

    const remove = function () {
        dispatchDelete(props)
            .then((response) => {
                if (!response.error && response.data === true) {
                    contact.remove(props);
                }
            })
    }

    return (
        <Button active={!isFetching} onClick={() => remove()}>Удалить</Button>
    );
};

export default ContactDeleteButton;