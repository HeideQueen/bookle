import React from 'react';

const SearchBar = ({ handleInput, handleSearch, input }) => {
  return (
    <div>
      <input type="text" onChange={event => handleInput(event)} value={input} />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
