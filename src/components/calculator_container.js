import React, { Component } from 'react'
import NoDateCalculator from './no_date_calculator'
import DateCalculator from './date_calculator'

class CalculatorContainer extends Component {

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const selectedBook = this.props.selectedBook
    const enteredBook = this.props.enteredBook
    const coverPhoto = this.props.coverPhoto
    const totalPages = this.props.totalPages
    const currentPage = this.props.currentPage
    const pagesLeft = this.props.pagesLeft
    const timeFrameNumber = this.props.timeFrameNumber
    const timeFrameType = this.props.timeFrameType
    const singularTimeFrameType = this.props.singularTimeFrameType
    const startDate = this.props.startDate
    const endDate = this.props.endDate


    if(selectedBook) {
      if(pagesLeft >= 0) {
        return (
          <div>
            <form className="specific-book-data">
              <h3>Selected Book:
              <textarea className="selectedBook" type="text" ref="title" value={selectedBook} onChange={this.handleChange.bind(this)} readOnly/></h3>
              <img className="selectedBookCover" alt="No book selected or cover not available" src={coverPhoto} />
              <div className="totalPages">
                <h3>Total Pages:</h3>
                <input type="number" ref="total_pages" value={totalPages} onChange={this.handleChange.bind(this)} readOnly/>
              </div>
              <div className="pagesLeft">
                <h3>Pages Left:</h3>
                <input type="number" ref="pages" value={pagesLeft} onChange={this.handleChange.bind(this)} readOnly/>
              </div>
            </form>
            <NoDateCalculator
              totalPages={totalPages}
              currentPage={currentPage}
              pagesLeft={pagesLeft}
              timeFrameNumber={timeFrameNumber}
              timeFrameType={timeFrameType}
              singularTimeFrameType={singularTimeFrameType}
            />
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
          </div>
        )
      } else if ((totalPages && currentPage) && pagesLeft < 0) {
        return (
          <div>
            <form className="specific-book-data">
              <h3>Selected Book:
              <textarea className="selectedBook" type="text" ref="title" value={selectedBook} onChange={this.handleChange.bind(this)} readOnly/>
              </h3>
              <img alt="No book selected or cover not available" src={coverPhoto} />
              <div className="totalPages">
                <h3>Total Pages:</h3>
                <input type="number" ref="total_pages" value={totalPages} onChange={this.handleChange.bind(this)} readOnly/>
              </div>
              <h3>Current page cannot be greater than total pages</h3>
            </form>
          </div>
        )
      } else if (!totalPages) {
        return (
          <div>
            <form className="specific-book-data">
              <h3>Selected Book:
              <textarea className="selectedBook" type="text" ref="title" value={selectedBook} onChange={this.handleChange.bind(this)} readOnly/>
              </h3>
              <img alt="No book selected or cover not available" src={coverPhoto} />
            </form>
          </div>
        )
      }
    } else if(enteredBook) {
      if(pagesLeft >= 0) {
        return (
          <div>
            <form className="specific-book-data">
              <h3>Selected Book:
              <textarea className="selectedBook" type="text" ref="title" value={enteredBook} onChange={this.handleChange.bind(this)} readOnly/>
              </h3>
              <div className="pagesLeft">
                <h3>Pages Left:</h3>
                <input type="number" ref="pages" value={pagesLeft} onChange={this.handleChange.bind(this)} readOnly/>
              </div>
            </form>
            <NoDateCalculator
              totalPages={totalPages}
              currentPage={currentPage}
              pagesLeft={pagesLeft}
              timeFrameNumber={timeFrameNumber}
              timeFrameType={timeFrameType}
              singularTimeFrameType={singularTimeFrameType}
            />
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
          </div>
        )
      } else if ((totalPages && currentPage) && pagesLeft < 0) {
        return (
          <div>
            <form className="specific-book-data">
              <h3>Selected Book:
              <textarea className="selectedBook" type="text" ref="title" value={enteredBook} onChange={this.handleChange.bind(this)} readOnly/></h3>
              <h3>Current page cannot be greater than total pages</h3>
            </form>
          </div>
        )
      } else if (!totalPages) {
        return (
          <div>
            <form className="specific-book-data">
              <h3>Selected Book:
              <textarea className="selectedBook" type="text" ref="title" value={enteredBook} onChange={this.handleChange.bind(this)} readOnly/></h3>
            </form>
          </div>
        )
      }
    } else if ((!selectedBook || !enteredBook) && totalPages && pagesLeft) {
      if(pagesLeft >= 0) {
        return (
          <div>
            <h3>Pages Left: {pagesLeft}</h3>
            <NoDateCalculator
              totalPages={totalPages}
              currentPage={currentPage}
              pagesLeft={pagesLeft}
              timeFrameNumber={timeFrameNumber}
              timeFrameType={timeFrameType}
              singularTimeFrameType={singularTimeFrameType}
            />
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
          </div>
        )
      } else if (pagesLeft < 0) {
        return (
          <div>
            <h3>Current page cannot be greater than total pages</h3>
          </div>
        )
      }
    } else if ((!selectedBook || !enteredBook) && !totalPages) {
      return (
      <div>
        <h3>Keep your eye on this area to find out how many pages you have to read to meet your goals!</h3>
        <h3></h3>
        <h3>Make sure to take a screenshot for your records!</h3>
      </div>
      )
    }
  }
}

export default CalculatorContainer;
