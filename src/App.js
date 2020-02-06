import React, { useState } from 'react';

import SearchBar from './components/search-bar/search-bar.component';
import ResultsDisplay from './components/results-display/results-display.component';
import BookDetails from './components/book-details/book-details.component';
import Navbar from './components/navbar/navbar.component';

import './styles.css';

export default function App() {
  const [input, setInput] = useState('');
  const [searchType, setSearchType] = useState('title');
  const [results, setResults] = useState(null);
  const [currentPage, setCurrentPage] = useState('landingPage');
  const [currentBook, setCurrentBook] = useState(null);

  const handleInput = event => setInput(event.target.value);

  const handleSelect = event => setSearchType(event.target.value);

  const backToHomepage = () => {
    setCurrentPage('landingPage');
    setInput('');
  };

  const backToResults = () => {
    setCurrentPage('resultsPage');
  };

  const handleMoreInfo = book => {
    setCurrentPage('bookDetailsPage');
    setCurrentBook(book);
  };

  const handleSearch = async () => {
    if (!input) return;

    setResults(null);
    setCurrentPage('resultsPage');

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?${searchType}=${input}`
      );

      const data = await res.json();

      setResults(data);
    } catch (error) {
      console.log('Something went wrong!', error);
    }
  };

  switch (currentPage) {
    case 'landingPage':
      return (
        <div className="App">
          <h1>Bookle</h1>
          <h3>A Book Search Engine</h3>
          <SearchBar
            handleInput={handleInput}
            handleSearch={handleSearch}
            handleSelect={handleSelect}
            input={input}
          />
          <p>Powered by Open Library</p>
        </div>
      );
    case 'resultsPage':
      return (
        <div>
          <Navbar
            handleInput={handleInput}
            handleSearch={handleSearch}
            handleSelect={handleSelect}
            input={input}
            searchType={searchType}
            backToHomepage={backToHomepage}
          />
          <ResultsDisplay results={results} handleMoreInfo={handleMoreInfo} />
        </div>
      );
    case 'bookDetailsPage':
      return (
        <div>
          <Navbar
            handleInput={handleInput}
            handleSearch={handleSearch}
            handleSelect={handleSelect}
            input={input}
            searchType={searchType}
            backToHomepage={backToHomepage}
          />
          <BookDetails
            currentBook={currentBook}
            backToResults={backToResults}
          />
        </div>
      );
    default:
      return (
        <div>
          <h1>loading...</h1>
        </div>
      );
  }
}
