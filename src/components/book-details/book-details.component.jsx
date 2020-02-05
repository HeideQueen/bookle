import React from 'react';

const BookDetails = ({ currentBook }) => {
  if (currentBook) {
    return (
      <div>
        <h1>Under Construction!</h1>
        <p>Current Book: {currentBook.title}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
};

export default BookDetails;
