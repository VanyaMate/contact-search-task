import {useInput} from "../../hooks/use-input.hook";
import Vertical from "../ui/containers/vertical/vertical.component";
import Input from "../ui/inputs/input/input.component";
import Button from "../ui/buttons/button/button.component";
import {contactApi} from "../../store/contact/contact.api";
import NumberInput from "../number-input/number-input.component";
import Loading from "../ui/containers/loading/loading.component";
import {emailValidator, numberValidator} from "../../validators/form.validators";
import {convertToContactNumber} from "../../helpers/convert.helper";

const AddForm = () => {
    const emailInput = useInput<string>('', emailValidator);
    const numberInput = useInput<string>('', numberValidator);
    const [dispatchCreate, { isFetching }] = contactApi.useLazyCreateQuery();

    const create = function () {
        emailInput.valid && numberInput.valid && dispatchCreate({email: emailInput.value, number: convertToContactNumber(numberInput.value)});
    }

    return (
        <Vertical offset={5}>
            <Input hook={emailInput} placeholder={'email'} type={'email'}/>
            <NumberInput hook={numberInput}/>
            <Loading loading={isFetching}>
                <Vertical>
                    <Button active={!isFetching} onClick={create}>Добавить</Button>
                </Vertical>
            </Loading>
        </Vertical>
    );
};

export default AddForm;