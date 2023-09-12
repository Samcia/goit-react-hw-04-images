import PropTypes from 'prop-types';

export const SearchBar = ({ getQuery }) => {
  return (
    <header className="Searchbar">
      <form onSubmit={getQuery} className="SearchForm">
        <button type="submit" className="SearchForm-button"></button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  getQuery: PropTypes.func.isRequired,
};
