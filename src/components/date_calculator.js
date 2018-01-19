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
            <h4>Please choose an end date that is later than your start date</h4>
          </div>
        )
      } else if(Math.round(pagesLeft/daysBetweenDates(startDate, endDate)) >= 0) {
        return (
          <div>
            <h4>If you read each day between {startDate.toDateString().substring(4, 15)} and {endDate.toDateString().substring(4, 15)}</h4>
            <h4>You can finish with {Math.round(pagesLeft/(daysBetweenDates(startDate, endDate)+1))} pages per day!</h4>
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
