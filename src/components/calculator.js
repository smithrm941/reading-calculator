import React, { Component } from 'react'

class Calculator extends Component {

  render() {
    const currentPage = this.props.currentPage
    const totalPages = this.props.totalPages
    const pagesLeft = totalPages - currentPage

    //want to toggle between using these and using the calendar::::::
    const timeFrameNumber = this.props.timeFrameNumber
    const timeFrameType = this.props.timeFrameType
    const singularTimeFrameType = this.props.singularTimeFrameType
    const pagesPerTimeFrame = Math.round(pagesLeft/timeFrameNumber)

    //Trying out date stuff:::::::::::::::::::::::
    const startDate = new Date(this.props.startDate)
    const endDate = new Date(this.props.endDate)
    const daysBetweenDates = (startDate, endDate) => {
      let one_day = 1000*60*60*24;
      let startDate_ms = startDate.getTime();
      let endDate_ms = endDate.getTime();
      let difference_ms = endDate_ms - startDate_ms;

      return Math.round(difference_ms/one_day)
    }

    //Don't show anything if no page information is entered::::
    if(!totalPages || !currentPage) {
      return (
        <div>
        </div>
      )
    //Show stuff if page information is entered::::
    } else if (totalPages && currentPage) {
      //If no start or end dates, so should this include the time frame stuff too???
      if(!this.props.startDate || !this.props.endDate) {
        return (
          <div>
            <h1>Pages Left: {pagesLeft}</h1>
          </div>
        )
      } else if(this.props.startDate === this.props.endDate) {
        return (
          <div>
            <h1>Pages Left: {pagesLeft}</h1>
            <h1>You can finish this book on time if you read {pagesLeft} pages per day!</h1>
          </div>
        )
      } else if(Math.round(pagesLeft/daysBetweenDates(startDate, endDate)) > 0) {
        return (
          <div>
            <h1>Pages Left: {pagesLeft}</h1>
            <h1>You can finish this book on time if you read {Math.round(pagesLeft/daysBetweenDates(startDate, endDate))} pages per day!</h1>
          </div>
        )
      }
    //End of "Show stuff if page information is entered::::"
    }

    
    // } else if (!timeFrameNumber) {
    //   return (
    //     <div>
    //       <h1>Pages Left: {pagesLeft}</h1>
    //       <h1>You can finish this book in one {singularTimeFrameType} by reading {pagesLeft} pages per {singularTimeFrameType}</h1>
    //     </div>
    //   )
    // } else if (timeFrameNumber <= 1) {
    //   return (
    //     <div>
    //       <h1>Pages Left: {pagesLeft}</h1>
    //       <h1>You can finish this book in one {singularTimeFrameType} by reading {pagesLeft} pages per {singularTimeFrameType}</h1>
    //     </div>
    //   )
    // } else {
    //   if(timeFrameType === "weeks") {
    //     return (
    //       <div>
    //         <h1>Pages Left: {pagesLeft}</h1>
    //         <h1>You can finish this book in {timeFrameNumber} {timeFrameType} by reading {Math.round(pagesPerTimeFrame/7)} pages per day.</h1>
    //       </div>
    //     )
    //   } else if(timeFrameType === "months") {
    //     return (
    //       <div>
    //         <h1>Pages Left: {pagesLeft}</h1>
    //         <h1>You can finish this book in {timeFrameNumber} {timeFrameType} by reading {Math.round(pagesPerTimeFrame/30)} pages per day.</h1>
    //       </div>
    //     )
    //   } else {
    //     return (
    //       <div>
    //         <h1>Pages Left: {pagesLeft}</h1>
    //         <h1>You can finish this book in {timeFrameNumber} {timeFrameType} by reading {pagesPerTimeFrame} pages per day.</h1>
    //       </div>
    //     )
    //   }
    // }
  }
}

export default Calculator;
