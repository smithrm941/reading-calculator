import React from 'react';

import SelectedBook from './selected_book'

const SearchResults = (props) => {
  const individualSearchResults = props.books.map((book) => {
      return (
          <SelectedBook
            onBookSelect={props.onBookSelect}
            key={book.id}
            book={book}/>
      );
  })
  return (
    <ul className="search-results">
      {individualSearchResults}
    </ul>
  )
}


export default SearchResults;
