import React from 'react';

const IndividualBook = ({book, onBookSelect}) => {
  return (
    <li onClick={() => onBookSelect(book)}>
      <h6>{book.title}</h6>
      <img className="media-object" src={book.thumbnail}/>
    </li>
  )
}


export default IndividualBook;
