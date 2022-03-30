import PropTypes from "prop-types";

function SearchResults({ searchResults }) {
  if (!searchResults.length) {
    return <p>No search results found.</p>;
  }

  return (
    <>
      <p>Search Results</p>
      {searchResults.map((src) => (
        <img key={src} src={src} alt="" />
      ))}
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
