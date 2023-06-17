import Row from "../../components/ui/containers/row/row.component";
import Vertical from "../../components/ui/containers/vertical/vertical.component";
import SearchForm from "../../components/search-form/search-form.component";
import SearchResults from "../../components/search-results/search-results.component";
import AddForm from "../../components/add-form/add-form.component";
import css from './home.module.scss';
import TitledContainer from "../../components/ui/containers/titled-container/titled-container.component";

const HomePage = () => {
    return (
        <Vertical offset={10} className={css.container}>
            <Row offset={10} className={css.forms}>
                <TitledContainer title={'Поиск'}>
                    <SearchForm/>
                </TitledContainer>
                <TitledContainer title={'Добавить'}>
                    <AddForm/>
                </TitledContainer>
            </Row>
            <div className={css.results}>
                <TitledContainer title={'Результаты поиска'}>
                    <SearchResults/>
                </TitledContainer>
            </div>
        </Vertical>
    );
};

export default HomePage;