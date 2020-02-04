import React from 'react';

import BookResult from '../book-result/book-result.component';

const ResultsDisplay = ({ results }) => {
  if (results) {
    const foundBooks = results.numFound;
    const books = results.docs.slice(0, 10);

    return (
      <div>
        <p>Displaying top 10 results from {foundBooks} found books:</p>

        {books.map(book => (
          <BookResult key={book.isbn[0]} book={book} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <p>Waiting for your input...</p>
      </div>
    );
  }
};

export default ResultsDisplay;
