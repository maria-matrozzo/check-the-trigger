import React, {useState} from "react";

function SearchBar({searchProp}) {

    const [searchValue, setSearchValue] = useState('')

    return (
    <div className="search">
        <h4>Search By Title or Author</h4>
        <input
        className="search_bar"
        type = "text"
        placeholder="Search..."
        value={searchValue}
        onChange={(synthEvent) => {
            setSearchValue(synthEvent.target.value)
            searchProp(synthEvent.target.value)
        }} />

    </div>

    )
}

export default SearchBar;