import {useStore} from "../../hooks/redux/use-store.hook";
import Vertical from "../ui/containers/vertical/vertical.component";
import Contact from "../contact/contact.component";
import Loading from "../ui/containers/loading/loading.component";

const SearchResults = () => {
    const contactStore = useStore((state) => state.contact)

    return (
        <Loading loading={contactStore.loading}>
            <Vertical offset={5}>
                {
                    /**
                     * Лучше тут использовать конечно уникальный индекс из бд, но так как его нету
                     * а email может повторяться - пусть email + number, но это фигня
                     */
                    contactStore.list.map((item, index) => {
                        return (
                            <Contact key={item.email + item.number + index} email={item.email} number={item.number}/>
                        )
                    })
                }
            </Vertical>
        </Loading>
    );
};

export default SearchResults;