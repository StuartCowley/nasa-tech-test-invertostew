import PropTypes from "prop-types";
import { useState } from "react";

import getImages from "../requests/getImages";

import "../styles/Search.css";

function Search({ setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const searchResults = await getImages(searchTerm);

    setSearchResults(searchResults);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        name="search"
        id="search"
        className="search-form__input"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
}

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Search;
