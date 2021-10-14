import React from 'react';
import propTypes from 'prop-types';

const SearchForm = ({searchQuery, setSearchQuery , handleSearchFormSubmit}) => {
    // console.log('searchQuery: =>', searchQuery);
    return (
        <form id="search" onSubmit={handleSearchFormSubmit}>
            <div>
                <span>search icon</span>
                <input 
                    type="text"
                    placeholder="Search.."
                    value={searchQuery}
                    onChange={(event => setSearchQuery(event.target.value))}
                    id="search"
                />
            </div>
        </form>
    )
}

SearchForm.propTypes = {
    earchQuery: propTypes.string, 
    setSearchQuery: propTypes.func,
    handleSearchFormSubmit: propTypes.func
}

SearchForm.defaultPops = {
    earchQuery: '', 
    setSearchQuery: () => null,
    handleSearchFormSubmit: () => null
}

export default SearchForm
