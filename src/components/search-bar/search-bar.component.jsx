import React, { useContext } from 'react';

import { Store } from '../../store/store';
import {
  handleInput,
  handleSelect,
  getResults,
  goToPage
} from '../../store/actions';

const SearchBar = () => {
  const {
    state: { input, searchType },
    dispatch
  } = useContext(Store);

  const handleSearch = async () => {
    if (!input) return;

    getResults(null, dispatch);
    goToPage('resultsPage', dispatch);

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?${searchType}=${input}`
      );

      const data = await res.json();

      getResults(data, dispatch);
    } catch (error) {
      console.log('Something went wrong!', error);
    }
  };

  return (
    <div>
      <select
        value={searchType}
        onChange={event => handleSelect(event.target.value, dispatch)}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>

      <input
        type="text"
        onChange={event => handleInput(event.target.value, dispatch)}
        value={input}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
