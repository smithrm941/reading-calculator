import React, { Component } from 'react'

class Calculator extends Component {

  render() {
    const currentPage = this.props.currentPage
    const totalPages = this.props.totalPages
    const pagesLeft = totalPages - currentPage
    const timeFrameNumber = this.props.timeFrameNumber
    const timeFrameType = this.props.timeFrameType
    const singularTimeFrameType = this.props.singularTimeFrameType
    const pagesPerTimeFrame = Math.round(pagesLeft/timeFrameNumber)

    //Trying out date stuff:::::::::::::::::::::::
    //Should take this difference in days between dates and use it in all of the else-ifs somehow!
    const startDate = new Date(this.props.startDate)
    const endDate = new Date(this.props.endDate)
    const daysBetweenDates = (startDate, endDate) => {
      let one_day = 1000*60*60*24;
      let startDate_ms = startDate.getTime();
      let endDate_ms = endDate.getTime();
      let difference_ms = endDate_ms - startDate_ms;

      return Math.round(difference_ms/one_day)
    }

    if(!totalPages || !currentPage) {
      return (
        <div>
        </div>
      )
    } else if (!timeFrameNumber) {
      return (
        <div>
          <h1>Pages Left: {pagesLeft}</h1>
          <h1>You can finish this book in one {singularTimeFrameType} by reading {pagesLeft} pages per {singularTimeFrameType}</h1>
          {/* //Trying out date stuff::::::::::::::::::::::: */}
            <h1>{typeof startDate}</h1>
            <h1>{typeof endDate}</h1>
            <h1>{daysBetweenDates(startDate, endDate)}</h1>
        </div>
      )
    } else if (timeFrameNumber <= 1) {
      return (
        <div>
          <h1>Pages Left: {pagesLeft}</h1>
          <h1>You can finish this book in one {singularTimeFrameType} by reading {pagesLeft} pages per {singularTimeFrameType}</h1>
        </div>
      )
    } else {
      if(timeFrameType === "weeks") {
        return (
          <div>
            <h1>Pages Left: {pagesLeft}</h1>
            <h1>You can finish this book in {timeFrameNumber} {timeFrameType} by reading {Math.round(pagesPerTimeFrame/7)} pages per day.</h1>
          </div>
        )
      } else if(timeFrameType === "months") {
        return (
          <div>
            <h1>Pages Left: {pagesLeft}</h1>
            <h1>You can finish this book in {timeFrameNumber} {timeFrameType} by reading {Math.round(pagesPerTimeFrame/30)} pages per day.</h1>
          </div>
        )
      } else {
        return (
          <div>
            <h1>Pages Left: {pagesLeft}</h1>
            <h1>You can finish this book in {timeFrameNumber} {timeFrameType} by reading {pagesPerTimeFrame} pages per day.</h1>
          </div>
        )
      }
    }

  }
}

export default Calculator;
