import React from 'react';

import SearchBar from '../search-bar/search-bar.component';

const Navbar = ({
  handleInput,
  handleSearch,
  handleSelect,
  input,
  searchType,
  backToHomepage
}) => {
  return (
    <div>
      <button onClick={backToHomepage}>Bookle</button>
      <SearchBar
        handleInput={handleInput}
        handleSearch={handleSearch}
        handleSelect={handleSelect}
        input={input}
        searchType={searchType}
      />
    </div>
  );
};

export default Navbar;
