import * as css from './Searchbar.styled'
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const Searchbar = ({ upQuery, fetchData }) => {



    return (
        <css.Searchbar>
            <css.SearchForm onSubmit={(e) => { e.preventDefault(); fetchData() }}>
                <css.SearchFormButton type="submit">
                    <FaSearch />
                    <css.SearchFormButtonLabel>Search</css.SearchFormButtonLabel>
                </css.SearchFormButton>

                <css.SearchFormInput  
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={upQuery}
                />
            </css.SearchForm>
        </css.Searchbar>
    )
}



Searchbar.propTypes = {
    upQuery: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
};