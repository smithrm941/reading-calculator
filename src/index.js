import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import registerServiceWorker from './registerServiceWorker';

import DateCalculator from './components/date_calculator'
import NoDateCalculator from './components/no_date_calculator'
import BookSearch from './components/book_search'
import SearchResults from './components/search_results'


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
      books: [],
      selectedBook: null,
    }
  }

  bookSearch(term) {
    if(term) {
      let options = {
        key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
      };
      books.search(term, options, (error, results) => {
        if ( !error ) {
          console.log('Argh:::::', results)
          this.setState({
            books: results,
          });
        } else {
          console.log(error);
        }
      })
    } else if (term === '') {
      console.log(term)
      this.setState({
        books: []
      });
    }
  };

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
    const books = this.state.books;
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
        <b>Bold text</b> = required
        <form className="page-numbers-form">
          <ul>
            <li>
              What book are you reading?
            </li>
            <li>
              <BookSearch onSearchTermChange={term => this.bookSearch(term)}/>
            </li>
            <li>
              <SearchResults
                books={books}
                onBookSelect={selectedBook =>
                  this.setState({
                    selectedBook: selectedBook,
                    totalPages: selectedBook.pageCount})}
              />
            </li>
            <li>
              <b>How many pages are in that book?</b>
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
              <b>When do you want to be done with your book?</b>
            </li>
            <li>
              <i>Choose a time frame:</i>
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
            <li>
              <i>Or choose specific dates:</i>
            </li>
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
