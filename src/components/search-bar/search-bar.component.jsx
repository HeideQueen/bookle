import React from 'react';

const SearchBar = ({
  handleInput,
  handleSearch,
  handleSelect,
  input,
  searchType
}) => {
  return (
    <div>
      <select value={searchType} onChange={event => handleSelect(event)}>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>

      <input type="text" onChange={event => handleInput(event)} value={input} />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
