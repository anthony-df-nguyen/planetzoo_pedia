import React from 'react'
import removeActiveButton from "../functions/removeButtonActive";

export default function Searchbar(props) {
    const updateSearchTerm = (e)=> {
        removeActiveButton();
        const search = e.target.value
        props.function(search)
    }
    return (
        <div>
            <input type="text" placeholder="Search animal name" className="searchBar" onChange={(e)=> updateSearchTerm(e)}/>
        </div>
    )
}
