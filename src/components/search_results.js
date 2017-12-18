import React, { Component } from 'react';

import IndividualBook from './individual_book'

const SearchResults = (props) => {
  const individualBooks = props.books.map((book) => {
    return (
      <IndividualBook
        key={book.id}
        book={book}/>
    );
  })
  return (
    <ul className="list-group">
      {individualBooks}
    </ul>
  )
}


export default SearchResults;
