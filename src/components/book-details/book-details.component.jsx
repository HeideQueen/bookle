import React from 'react';

const BookDetails = ({ currentBook, backToResults }) => {
  let book = currentBook;

  if (book) {
    return (
      <div>
        <h1>{book.title}</h1>

        {book.author_name ? (
          <h3>by {book.author_name[0]}</h3>
        ) : (
          <h3>by Anonymous</h3>
        )}

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

        <h4>Publish Date</h4>
        <p>{book.publish_date[0]}</p>

        <h4>Publisher</h4>
        <p>{book.publisher[0]}</p>

        {book.id_amazon ? (
          <a href={`https://www.amazon.com/dp/${book.id_amazon[0]}`}>
            Buy on Amazon
          </a>
        ) : (
          <p>Amazon is not available for this edition</p>
        )}

        <br />

        <button onClick={backToResults}>Back to search results</button>
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
