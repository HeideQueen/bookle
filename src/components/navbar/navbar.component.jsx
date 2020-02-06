import React from 'react';

import SearchBar from '../search-bar/search-bar.component';

const Navbar = ({ handleInput, handleSearch, input, backToHomepage }) => {
  return (
    <div>
      <button onClick={backToHomepage}>Bookle</button>
      <SearchBar
        handleInput={handleInput}
        handleSearch={handleSearch}
        input={input}
      />
    </div>
  );
};

export default Navbar;
