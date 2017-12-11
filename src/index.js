import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import moment from 'moment-es6';

import TestComponent from './components/test_component'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: '',
      totalPages: '',
    }

    this.handleCurrentPage = this.handleCurrentPage.bind(this);
    this.handleTotalPages = this.handleTotalPages.bind(this);
  }

  handleCurrentPage(event) {
    this.setState({
      currentPage: event.target.value,
    });
  }

  handleTotalPages(event) {
    this.setState({
      totalPages: event.target.value,
    });
  }

  render() {
    const currentPage = this.state.currentPage;
    const totalPages = this.state.totalPages;

    return (
      <div>
        <form className="page-numbers-form" onSubmit={this.handleSubmit}>
          Current Page <input
            className="current-page"
            value={this.state.currentPage}
            onChange={event => this.handleCurrentPage(event)}/>
            Total Pages <input
              className="total-pages"
              value={this.state.totalPages}
              onChange={event => this.handleTotalPages(event)}/>
            </form>
            <TestComponent
              currentPage={currentPage}
              totalPages={totalPages}
            />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
