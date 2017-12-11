import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Calculator from './components/calculator'

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
          Total Pages <input
            type="number"
            className="total-pages"
            value={this.state.totalPages}
            onChange={event => this.handleTotalPages(event)}/>
          Current Page <input
            type="number"
            className="current-page"
            value={this.state.currentPage}
            onChange={event => this.handleCurrentPage(event)}/>
        </form>
            <Calculator
              currentPage={currentPage}
              totalPages={totalPages}
            />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
