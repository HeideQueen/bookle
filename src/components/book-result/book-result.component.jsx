import React from 'react';

const BookResult = ({ book, handleMoreInfo }) => {
  return (
    <div>
      {book.cover_edition_key ? (
        <img
          src={`https://covers.openlibrary.org/b/olid/${
            book.cover_edition_key
          }-M.jpg`}
          alt="book cover"
        />
      ) : (
        <p>- no cover found -</p>
      )}
      <p>
        <strong>Title: </strong>
        {book.title}
      </p>
      <p>
        <strong>Author: </strong>
        {book.author_name ? book.author_name[0] : '-No Author Found-'}
      </p>
      <p>
        <strong>Year: </strong>
        {book.first_publish_year}
      </p>
      <p>
        <button onClick={() => handleMoreInfo(book)}>More Info</button>
      </p>
    </div>
  );
};

export default BookResult;
