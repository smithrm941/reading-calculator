import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import registerServiceWorker from './registerServiceWorker';
import BookSearch from './components/book_search'
import SearchResults from './components/search_results'
import CalculatorContainer from './components/calculator_container'
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
      selectedBook: '',
      enteredBook: ''
    }
    this.baseState = this.state;
  }

  bookSearch(term) {
    if(term) {
      let options = {
        key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
      };
      books.search(term, options, (error, results) => {
        if ( !error ) {
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
        books: [],
        selectedBook: 'No book selected',
        totalPages: ''
      });
    }
  };

  handleEnteredBook(event) {
    this.setState({
      enteredBook: event.target.value
    })
  }

  handleCurrentPage(event) {
    if(event.target.value < 0) {
      this.setState({
        currentPage: Math.abs(event.target.value),
      });
    } else {
      this.setState({
        currentPage: event.target.value,
      });
    }
  }

  handleTotalPages(event) {
    if(event.target.value < 0) {
      this.setState({
        totalPages: Math.abs(event.target.value),
      });
    } else {
      this.setState({
        totalPages: event.target.value,
      });
    }
  }

  handleTimeFrameNumber(event) {
    if(event.target.value < 0) {
      this.setState({
        timeFrameNumber: Math.abs(event.target.value),
      });
    } else {
      this.setState({
        timeFrameNumber: event.target.value,
      });
    }
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

  clearForm = () => {
    this.setState(this.baseState)
    let startDate = document.getElementById('startDate')
    let endDate = document.getElementById('endDate')
    startDate.value = ''
    endDate.value = ''
  }

  render() {
    const books = this.state.books;
    const selectedBook = this.state.selectedBook;
    const enteredBook = this.state.enteredBook;
    const currentPage = this.state.currentPage;
    const totalPages = this.state.totalPages;
    const pagesLeft = totalPages - currentPage
    const timeFrameNumber = this.state.timeFrameNumber;
    const timeFrameType = this.state.timeFrameType;
    const singularTimeFrameType = this.state.singularTimeFrameType;
    const startDate = this.state.startDate;
    const endDate = this.state.endDate;

    return (
      <div>
      <div className="info-entry-form">
        <h3 className="pageTitle">How Many Pages Per Day to Finish That Book?*</h3>
        <h6>*<i>Approximately</i></h6>
        <form id="info-entry-form">
          <input id="clear-form-button" type="button" name="clearForm" value="Clear Form" onClick={this.clearForm}/>
          <ul>
            <li>
              <h4>What are you reading?</h4>
            </li>
            <li>
              <BookSearch onSearchTermChange={term => this.bookSearch(term)}/>
            </li>
            <li>
              <input
                placeholder= "Or enter any title"
                onChange={event => this.handleEnteredBook(event)}/>
            </li>
            <li>
             <SearchResults
              books={books}
              onBookSelect={selectedBook =>
                this.setState({
                  selectedBook: selectedBook,
                  books: [],
                  totalPages: selectedBook.pageCount}
                )}
              />
            </li>
            <li>
              <input
                placeholder="Total Pages"
                type="number"
                min="0"
                className="total-pages"
                value={this.state.totalPages}
                onChange={event => this.handleTotalPages(event)}/>
            </li>
            <li>
              <input
                placeholder="Current Page"
                type="number"
                min="0"
                className="current-page"
                value={this.state.currentPage}
                onChange={event => this.handleCurrentPage(event)}/>
            </li>
            <li>
              <b>When do you want to finish?</b>
            </li>
            <li>
              <input
                placeholder="Enter a Number"
                type="number"
                min="1"
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
              <i>Or choose dates:</i>
            </li>
            <li></li>
            <li>Start/Resume:</li>
            <li><input
              id="startDate"
              type="date"
              onChange={event => this.handleStartDate(event)}/>
            </li>
            <li>Finish:</li>
            <li><input
              id="endDate"
              type="date"
              onChange={event => this.handleEndDate(event)}/>
            </li>
          </ul>
        </form>
      </div>
      <div className="results-calculator">
        <CalculatorContainer
          selectedBook={selectedBook.title}
          enteredBook={enteredBook}
          coverPhoto={selectedBook.thumbnail}
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
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
