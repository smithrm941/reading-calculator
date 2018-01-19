import React, { Component } from 'react'

class DateCalculator extends Component {

  render() {
    const currentPage = this.props.currentPage
    const totalPages = this.props.totalPages
    const pagesLeft = this.props.pagesLeft
    const startDate = new Date(this.props.startDate)
    const endDate = new Date(this.props.endDate)
    const daysBetweenDates = (startDate, endDate) => {
      let one_day = 1000*60*60*24;
      let startDate_ms = startDate.getTime();
      let endDate_ms = endDate.getTime();
      let difference_ms = endDate_ms - startDate_ms;

      return Math.round(difference_ms/one_day)
    }

    if(!totalPages) {
      return (
        <div>
        </div>
      )
    } else if ((totalPages && currentPage) || (totalPages && !currentPage) || (!totalPages && currentPage)) {
      if(!this.props.startDate || !this.props.endDate) {
        return (
          <div>
          </div>
        )
      } else if(this.props.startDate >= this.props.endDate) {
        return (
          <div>
            <h3>Please choose an end date that is later than your start date</h3>
          </div>
        )
      } else if(Math.round(pagesLeft/daysBetweenDates(startDate, endDate)) >= 0) {
        return (
          <div>
            <h3>Based on the dates you chose:</h3>
            <h3>You can finish this book on time by reading {Math.round(pagesLeft/(daysBetweenDates(startDate, endDate)+1))} pages per day!</h3>
          </div>
        )
      } else if(currentPage > totalPages) {
        return (
          <div></div>
        )
      }
    }
  }
}

export default DateCalculator;
