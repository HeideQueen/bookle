import React from 'react';

const SearchBar = ({ handleInput, handleSearch, input }) => {
  return (
    <div>
      <select name="search-type" id="search-type">
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>

      <input type="text" onChange={event => handleInput(event)} value={input} />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
