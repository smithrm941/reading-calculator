import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

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
      singularTimeFrameType: 'day',

      //Trying out date stuff:::::::::::::::::::::::
      startDate: '',
      endDate: '',
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
    this.setState({
      timeFrameType: event.target.value,
      singularTimeFrameType: event.target.value.slice(0, event.target.value.length - 1)
    });
  }

  //Trying out date stuff:::::::::::::::::::::::
  handleStartDate(event) {
    this.setState({
      startDate: event.target.value
    })
  }

  handleEndDate(event) {
    this.setState({
      endDate: event.target.value
    })
  }

  render() {
    const currentPage = this.state.currentPage;
    const totalPages = this.state.totalPages;
    const timeFrameNumber = this.state.timeFrameNumber;
    const timeFrameType = this.state.timeFrameType;
    const singularTimeFrameType = this.state.singularTimeFrameType;

    //Trying out date stuff:::::::::::::::::::::::
    const startDate = this.state.startDate
    const endDate = this.state.endDate

    return (
      <div>
        <h1>How Many Pages Per Day to Finish That Book?*</h1>
        <h6>*<i>Approximately</i></h6>
        <form className="page-numbers-form" onSubmit={this.handleSubmit}>
          <ul>
            <li>
              How many pages are in that book?
            </li>
            <li>
              <input
                type="number"
                className="total-pages"
                value={this.state.totalPages}
                onChange={event => this.handleTotalPages(event)}/>
            </li>
            <li>
              What page are you on right now?
            </li>
            <li>
              <input
                type="number"
                className="current-page"
                value={this.state.currentPage}
                onChange={event => this.handleCurrentPage(event)}/>
            </li>
            <li>
              When do you want to be done with your book?
            </li>
            <li>
              <input
                type="number"
                className="time-frame-number"
                value={this.state.timeFrameNumber}
                onChange={event => this.handleTimeFrameNumber(event)}/>
              <select
                value={this.state.timeFrameType}
                onChange={event => this.handleTimeFrameType(event)}>
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>
              </select>
            </li>
            <br></br>

            {/* //Trying out date stuff::::::::::::::::::::::: */}
            <li>When did you start this book?</li>
            <li><input
              id="startDate"
              type="date"
              onChange={event => this.handleStartDate(event)}/>
            </li>
            <li>When do you want to finish this book?</li>
            <li><input
              id="endDate"
              type="date"
              onChange={event => this.handleEndDate(event)}/>
            </li>
          </ul>
        </form>
        <Calculator
          totalPages={totalPages}
          currentPage={currentPage}
          timeFrameNumber={timeFrameNumber}
          timeFrameType={timeFrameType}
          singularTimeFrameType={singularTimeFrameType}

          //Trying out date stuff:::::::::::::::::::::::
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
