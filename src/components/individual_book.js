import React from 'react';

const IndividualBook = ({book, onBookSelect}) => {
  return (
    <li>
      <h6>{book.title}</h6>
      <img
        className="book-cover" src={book.thumbnail}
        onClick={() => onBookSelect(book)}
      />
    </li>
  )
}


export default IndividualBook;
