import React from "react";

import "./SearchBar.css";

export default function SearchBar( {onSearch, placeHolder="Name"} ) {
    return (
        <div className="search-bar">
            <input className="search-bar-input" type="text" placeholder={"Search by " + placeHolder} onChange={onSearch} />
        </div>
    );
}