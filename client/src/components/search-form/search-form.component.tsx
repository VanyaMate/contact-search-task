import Vertical from "../ui/containers/vertical/vertical.component";
import Input from "../ui/inputs/input/input.component";
import {useInput} from "../../hooks/use-input.hook";
import Button from "../ui/buttons/button/button.component";
import {QueryType, useQuery} from "../../hooks/use-query.hook";
import {useEffect} from "react";
import {useActions} from "../../hooks/redux/use-actions.hook";
import NumberInput from "../number-input/number-input.component";
import Loading from "../ui/containers/loading/loading.component";
import {API_CONTACT} from "../../constants/urls.constants";
import {emailValidator, numberValidator} from "../../validators/form.validators";
import {convertToContactNumber} from "../../helpers/convert.helper";

const SearchForm = () => {
    const emailInput = useInput<string>('', emailValidator);
    const numberInput = useInput<string>('', numberValidator);
    const query = useQuery(API_CONTACT, {
        method: QueryType.GET,
        cache: 'force-cache',
        queries: [
            ['email', emailInput.value],
            ['number', convertToContactNumber(numberInput.value)],
        ]
    });
    const { contact } = useActions();

    useEffect(() => {
        contact.loading(query.fetching);
        if (!query.fetching && !query.error && !!query.data) {
            contact.set(JSON.parse(query.data));
        }
    }, [query.fetching])

    return (
        <Vertical offset={5}>
            <Input hook={emailInput} placeholder={'email'} type={'email'}/>
            <NumberInput hook={numberInput}/>
            <Loading loading={query.fetching}>
                <Vertical>
                    {
                        /**
                         * Если нужно оставить условие как в задании, что мол email обязательный -> убираем второе условие в active
                         */
                    }
                    <Button active={emailInput.valid || emailInput.value === ''} onClick={() => query.send()}>Поиск</Button>
                </Vertical>
            </Loading>
        </Vertical>
    );
};

export default SearchForm;