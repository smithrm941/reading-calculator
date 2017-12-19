import React, { Component } from 'react';

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchsearchTerm: '',
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
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
