import { useState } from "react";

import "../styles/Search.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <form className="search-form">
        <input
          type="text"
          name="search"
          id="search"
          className="search-form__input"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-form__button">Search</button>
      </form>
    </>
  );
}

export default Search;
