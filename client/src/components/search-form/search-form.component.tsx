import {useInput} from "../../hooks/use-input.hook";
import Input from "../ui/inputs/input/input.component";
import InputWithMask from "../ui/inputs/input-mask/input-mask.component";
import Button from "../ui/buttons/button/button.component";
import Vertical from "../ui/containers/vertical/vertical.component";
import {emailValidator, numberValidator} from "../../validators/form.validators";
import {IContactSearch} from "../../store/contact/contact.interface";
import {useFindContacts} from "../../hooks/use-find-contacts.hook";
import {useActions} from "../../hooks/redux/use-actions.hook";
import {convertToContactNumber} from "../../helpers/convert.helper";

const SearchForm = () => {
    const {contact} = useActions();
    const setSearchParams = useFindContacts((data) => {
        contact.set(data)
    });
    const email = useInput<string>('', emailValidator);
    const number = useInput<string>('', numberValidator);

    const send = function () {
        const searchOptions: IContactSearch = {
            email: email.value,
        }
        if (number.valid) {
            searchOptions.number = convertToContactNumber(number.value);
        }

        setSearchParams(searchOptions);
    }

    return (
        <Vertical offset={5}>
            <Input
                hook={email}
                placeholder={'email'}
            />
            <InputWithMask
                mask={'99-99-99'}
                value={number.value}
                onChange={(e) => number.setValue(e.target.value)}
                placeholder={'number'}
            />
            <Button active={email.valid} onClick={send}>Получить</Button>
        </Vertical>
    );
};

export default SearchForm;