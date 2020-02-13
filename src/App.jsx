import React, { useContext } from 'react';

import { Store } from './store/store';

import SearchBar from './components/search-bar/search-bar.component';
import ResultsDisplay from './components/results-display/results-display.component';
import BookDetails from './components/book-details/book-details.component';
import Navbar from './components/navbar/navbar.component';

import './styles.css';

export default function App() {
  const {
    state: { currentPage }
  } = useContext(Store);

  switch (currentPage) {
    case 'landingPage':
      return (
        <div className="App">
          <h1>Bookle</h1>
          <h3>A Book Search Engine</h3>
          <SearchBar />
          <p>Powered by Open Library</p>
        </div>
      );
    case 'resultsPage':
      return (
        <div>
          <Navbar />
          <ResultsDisplay />
        </div>
      );
    case 'bookDetailsPage':
      return (
        <div>
          <Navbar />
          <BookDetails />
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
