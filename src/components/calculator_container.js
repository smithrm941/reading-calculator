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
              <h4><textarea className="selectedBook" type="text" ref="title" value={selectedBook} onChange={this.handleChange.bind(this)} readOnly/></h4>
              <img className="selectedBookCover" alt="No book selected or cover not available" src={coverPhoto} />
              <div className="totalPages">
                <h4>Total Pages:</h4>
                <input type="number" ref="total_pages" value={totalPages} onChange={this.handleChange.bind(this)} readOnly/>
              </div>
              <div className="pagesLeft">
                <h4>Pages Left:</h4>
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
              <h4><textarea className="selectedBook" type="text" ref="title" value={selectedBook} onChange={this.handleChange.bind(this)} readOnly/>
              </h4>
              <img alt="No book selected or cover not available" src={coverPhoto} />
              <div className="totalPages">
                <h4>Total Pages:</h4>
                <input type="number" ref="total_pages" value={totalPages} onChange={this.handleChange.bind(this)} readOnly/>
              </div>
              <h4>Current page cannot be greater than total pages</h4>
            </form>
          </div>
        )
      } else if (!totalPages) {
        return (
          <div>
            <form className="specific-book-data">
              <h4><textarea className="selectedBook" type="text" ref="title" value={selectedBook} onChange={this.handleChange.bind(this)} readOnly/>
              </h4>
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
              <h4><textarea className="selectedBook" type="text" ref="title" value={enteredBook} onChange={this.handleChange.bind(this)} readOnly/>
              </h4>
              <div className="totalPages">
                <h4>Total Pages:</h4>
                <input type="number" ref="total_pages" value={totalPages} onChange={this.handleChange.bind(this)} readOnly/>
              </div>
              <div className="pagesLeft">
                <h4>Pages Left:</h4>
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
              <h4><textarea className="selectedBook" type="text" ref="title" value={enteredBook} onChange={this.handleChange.bind(this)} readOnly/></h4>
              <h4>Current page cannot be greater than total pages</h4>
            </form>
          </div>
        )
      } else if (!totalPages) {
        return (
          <div>
            <form className="specific-book-data">
              <h4><textarea className="selectedBook" type="text" ref="title" value={enteredBook} onChange={this.handleChange.bind(this)} readOnly/></h4>
            </form>
          </div>
        )
      }
    } else if ((!selectedBook || !enteredBook) && totalPages && pagesLeft) {
      if(pagesLeft >= 0) {
        return (
          <div>
            <h4>Pages Left: {pagesLeft}</h4>
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
            <h4>Current page cannot be greater than total pages</h4>
          </div>
        )
      }
    } else if ((!selectedBook || !enteredBook) && !totalPages) {
      return (
      <div>
        <h4>Keep your eye on this area to find out how many pages you have to read to meet your goals!</h4>
        <h4></h4>
        <h4>Make sure to take a screenshot for your records!</h4>
      </div>
      )
    }
  }
}

export default CalculatorContainer;
