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
      timeFrameNumber: '',
      timeFrameType: 'days',
      singularTimeFrameType: 'day'
    }
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

  handleTimeFrameNumber(event) {
    this.setState({
      timeFrameNumber: event.target.value,
    });
  }

  handleTimeFrameType(event) {
    //Need to figure out how to get singular at end of sentence
    this.setState({
      timeFrameType: event.target.value,
      singularTimeFrameType: event.target.value.slice(0, event.target.value.length - 1)
    });
  }

  render() {
    const currentPage = this.state.currentPage;
    const totalPages = this.state.totalPages;
    const timeFrameNumber = this.state.timeFrameNumber;
    const timeFrameType = this.state.timeFrameType;
    const singularTimeFrameType = this.state.singularTimeFrameType;

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
          I want to finish this book in <input
            type="number"
            className="time-frame-number"
            value={this.state.timeFrameNumber}
            onChange={event => this.handleTimeFrameNumber(event)}/>
          <select
            value={this.state.timeFrameNumber}
            onChange={event => this.handleTimeFrameType(event)}>
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </select>
        </form>
        <Calculator
          totalPages={totalPages}
          currentPage={currentPage}
          timeFrameNumber={timeFrameNumber}
          timeFrameType={timeFrameType}
          singularTimeFrameType={singularTimeFrameType}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
