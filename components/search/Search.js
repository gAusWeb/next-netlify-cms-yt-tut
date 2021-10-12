import React, { useState } from 'react'
import SearchBox from './SearchBox'

export default function Search() {
    const [ searchQuery, setSearchQuery ] = useState('');

    return (
        <div>
            <h2>Search</h2>
            <SearchBox />
        </div>
    )
}
