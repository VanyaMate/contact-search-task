import SearchForm from "./components/search-form/search-form.component";
import Content from "./components/content/content.component";
import SearchResults from "./components/search-results/search-results.component";

const App = () => {
    return (
        <Content>
            <SearchForm/>
            <SearchResults/>
        </Content>
    );
};

export default App;