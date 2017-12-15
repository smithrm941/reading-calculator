import React, { Component } from 'react'

class NoDateCalculator extends Component {

  render() {
    const timeFrameNumber = this.props.timeFrameNumber
    const timeFrameType = this.props.timeFrameType
    const singularTimeFrameType = this.props.singularTimeFrameType
    const currentPage = this.props.currentPage
    const totalPages = this.props.totalPages
    const pagesLeft = totalPages - currentPage
    const pagesPerTimeFrame = Math.round(pagesLeft/timeFrameNumber)


    if (!timeFrameNumber) {
      return (
        <div>
          <h1>Pages Left: {pagesLeft}</h1>
          <h1>You can finish this book in one {singularTimeFrameType} by reading {pagesLeft} pages per {singularTimeFrameType}</h1>
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


export default NoDateCalculator;
