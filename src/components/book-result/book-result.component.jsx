import React, { useContext } from 'react';

import { Store } from '../../store/store';
import { goToPage, setCurrentBook } from '../../store/actions';

const BookResult = ({ book }) => {
  const { dispatch } = useContext(Store);

  const handleMoreInfo = () => {
    goToPage('bookDetailsPage', dispatch);
    setCurrentBook(book, dispatch);
  };

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
        <button onClick={handleMoreInfo}>More Info</button>
      </p>
    </div>
  );
};

export default BookResult;
