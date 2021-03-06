import React, { Component } from 'react';

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          id="search-bar"
          placeholder= "Search Google Books"
          value= {this.state.searchTerm}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(searchTerm) {
    this.setState({searchTerm});
    this.props.onSearchTermChange(searchTerm);
  }
}

export default BookSearch;
