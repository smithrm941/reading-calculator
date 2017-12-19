import React, { Component } from 'react';

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Google API stuff:::::::::
      searchTerm: '',
    }
    // this.bookSearch('Motorhead');
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value= {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default BookSearch;
