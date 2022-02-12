import React, {useState} from "react";

function SearchBar({searchFunction}) {

    const [searchValue, setSearchValue] = useState('')

    return (
    <div className = "container">
        <div className="search">
            <h3>Search By Title or Author</h3>
            <input
            className="search_bar"
            type = "text"
            placeholder="Search..."
            value={searchValue}
            onChange={(synthEvent) => {
                setSearchValue(synthEvent.target.value)
                searchFunction(synthEvent.target.value)
            }} />
        </div>
    </div>

    )
}

export default SearchBar;