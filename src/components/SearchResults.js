import PropTypes from "prop-types";

function SearchResults({ searchResults }) {
  return (
    <>
      <p>Search Results</p>
      {searchResults.map((e) => console.log(e))}
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
