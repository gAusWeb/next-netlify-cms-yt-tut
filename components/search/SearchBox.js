import React, { useState } from 'react'
import SearchForm from './SearchForm'
import propTypes from 'prop-types'


const SearchBox = () => {
    const [ searchQuery, setSearchQuery ] = useState('');

    const handleSearchFormSubmit = ({searchQuery, setSearchQuery , handleSearchFormSubmit}) => {
        return null;
    }

    return (
        <div>
            <SearchForm
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery} 
                handleSearchFormSubmit={handleSearchFormSubmit}
            />
        </div>
    )
}

SearchBox.propTypes = {
    earchQuery: propTypes.string, 
    setSearchQuery: propTypes.func,
    handleSearchFormSubmit: propTypes.func
}

SearchBox.defaultPops = {
    earchQuery: '', 
    setSearchQuery: () => null,
    handleSearchFormSubmit: () => null
}


export default SearchBox