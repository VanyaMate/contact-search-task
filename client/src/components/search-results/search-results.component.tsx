import {useSlice} from "../../hooks/redux/use-store.hook";
import ContactItem from "../contact-item/contact-item.component";
import css from './search-results.module.scss';
import {cn} from "../../helpers/react.helper";
import Vertical from "../ui/containers/vertical/vertical.component";

const SearchResults = () => {
    const contacts = useSlice((state) => state.contact);

    return (
        <Vertical offset={15} className={cn(css.container, contacts.loading ? css.loading : undefined)}>
            <h1>{ contacts.loading ? 'Loading..' : 'Results:' }</h1>
            {
                contacts.list.map((item, index) => <ContactItem key={index} email={item.email} number={item.number}/>)
            }
        </Vertical>
    );
};

export default SearchResults;