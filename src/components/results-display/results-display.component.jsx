import React from 'react';

import BookResult from '../book-result/book-result.component';

const ResultsDisplay = ({ results, handleMoreInfo }) => {
  if (results) {
    const foundBooks = results.numFound;
    const books = results.docs.slice(0, 10);

    return (
      <div>
        <p>Displaying top 10 results from {foundBooks} found books:</p>

        {books.map(book => (
          <BookResult
            key={book.key}
            book={book}
            handleMoreInfo={handleMoreInfo}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Searching...</h1>
      </div>
    );
  }
};

export default ResultsDisplay;
