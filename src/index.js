import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import registerServiceWorker from './registerServiceWorker';

import DateCalculator from './components/date_calculator'
import NoDateCalculator from './components/no_date_calculator'
import BookSearch from './components/book_search'


//Google API stuff:::::::::
import books from 'google-books-search'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: '',
      totalPages: '',
      timeFrameNumber: '',
      timeFrameType: 'days',
      singularTimeFrameType: 'day',
      startDate: '',
      endDate: '',
      books: []
    }
  }

  //Google API stuff:::::::::
  handleSearchResult(foundBooks) {
    this.setState({
      books: foundBooks,
    });
  }

  bookSearch(term) {
    books.search(term, (error, results) => {
      if ( ! error ) {
        console.log('Argh:::::', results)
        this.handleSearchResult(results)
      } else {
        console.log(error);
      }
    })
  };

  //Google API stuff:::::::::


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
    // const bookSearch = _.debounce((term) => { this.bookSearch(term) }, 300)

    const currentPage = this.state.currentPage;
    const totalPages = this.state.totalPages;
    const pagesLeft = totalPages - currentPage;
    const timeFrameNumber = this.state.timeFrameNumber;
    const timeFrameType = this.state.timeFrameType;
    const singularTimeFrameType = this.state.singularTimeFrameType;
    const startDate = this.state.startDate;
    const endDate = this.state.endDate;

    return (
      <div>
        <h1>How Many Pages Per Day to Finish That Book?*</h1>
        <h6>*<i>Approximately</i></h6>
        <form className="page-numbers-form">
          <ul>


            {/* //Google API Stuff:::: */}
            <li>
              <BookSearch onSearchTermChange={term => this.bookSearch(term)}/>
            </li>
            {/* //Google API Stuff:::: */}


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
            <li>When do you want to start reading?</li>
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
        <h1>Pages Left: {pagesLeft}</h1>

        <DateCalculator
          totalPages={totalPages}
          currentPage={currentPage}
          pagesLeft={pagesLeft}
          timeFrameNumber={timeFrameNumber}
          timeFrameType={timeFrameType}
          singularTimeFrameType={singularTimeFrameType}
          startDate={startDate}
          endDate={endDate}
        />

        <NoDateCalculator
          totalPages={totalPages}
          currentPage={currentPage}
          pagesLeft={pagesLeft}
          timeFrameNumber={timeFrameNumber}
          timeFrameType={timeFrameType}
          singularTimeFrameType={singularTimeFrameType}
          startDate={startDate}
          endDate={endDate}
        />

      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
