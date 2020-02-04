import React from 'react';

const BookResult = ({ book }) => {
  return (
    <div>
      <p>
        <strong>Title: </strong>
        {book.title}
      </p>
      <p>
        <strong>Author: </strong>
        {book.author_name ? book.author_name[0] : '-No Author Found-'}
      </p>
    </div>
  );
};

export default BookResult;
