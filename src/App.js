import React, { useState } from 'react';

import SearchBar from './components/search-bar/search-bar.component';
import ResultsDisplay from './components/results-display/results-display.component';

import './styles.css';

export default function App() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const handleInput = event => setInput(event.target.value);

  const handleSearch = async () => {
    if (!input) return;

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${input}`
      );

      const data = await res.json();

      setResults(data);
    } catch (error) {
      console.log('Something went wrong!', error);
    }

    setInput('');
  };

  console.log(results);

  return (
    <div className="App">
      <h1>Bookle</h1>
      <h2>Search by Book Title</h2>
      <SearchBar
        handleInput={handleInput}
        handleSearch={handleSearch}
        input={input}
      />
      <ResultsDisplay results={results} />
    </div>
  );
}
