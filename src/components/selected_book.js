import React from 'react';

const SelectedBook = ({book, onBookSelect}) => {
  return (
    <li className="individual-book">
      <h6>{book.title}</h6>
      <img
        alt="Cover not available"
        className="book-cover" src={book.thumbnail}
        onClick={() => onBookSelect(book)}
      />
    </li>
  )
}


export default SelectedBook;
