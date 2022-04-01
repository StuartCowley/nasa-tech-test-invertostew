import PropTypes from "prop-types";

import "../styles/SearchResults.css";

function SearchResults({ searchResults }) {
  if (!searchResults.length) {
    return <h3 className="search-results">No search results found.</h3>;
  }

  return (
    <>
      <h3 className="search-results">Search Results</h3>
      <div className="search-results__container">
        {searchResults.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            className="search-results-img"
            data-testid="image"
          />
        ))}
      </div>
    </>
  );
}

SearchResults.defaultProps = {
  searchResults: [],
};

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.string),
};

export default SearchResults;
