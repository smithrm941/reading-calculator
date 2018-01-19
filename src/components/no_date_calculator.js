import React, { Component } from 'react'

class NoDateCalculator extends Component {

  render() {
    const timeFrameNumber = this.props.timeFrameNumber
    const timeFrameType = this.props.timeFrameType
    const singularTimeFrameType = this.props.singularTimeFrameType
    const currentPage = this.props.currentPage
    const totalPages = this.props.totalPages
    const pagesLeft = this.props.pagesLeft
    const pagesPerTimeFrame = Math.round(pagesLeft/timeFrameNumber)

    if(!totalPages) {
      //No calculation if there is no total page count::::
      return (
        <div>
        </div>
      )
    } else if ((totalPages && currentPage) || (totalPages && !currentPage)) {
      //If there is a total page count::::
      if (!timeFrameNumber) {
        return (
          <div>
          </div>
        )
      } else if (timeFrameNumber <= 1) {
          if(timeFrameType === "weeks") {
            return (
              <div>
                <h4>Based on the time frame you chose:</h4>
                <h4>You can finish this book in one {singularTimeFrameType} by reading {Math.round(pagesPerTimeFrame/7)} pages per day.</h4>
              </div>
            )
          } else if(timeFrameType === "months"){
            return (
              <div>
                <h4>Based on the time frame you chose:</h4>
                <h4>You can finish this book in one {singularTimeFrameType} by reading {Math.round(pagesPerTimeFrame/30)} pages per day.</h4>
              </div>
            )
          } else {
            return (
              <div>
                <h4>Based on the time frame you chose:</h4>
                <h4>You can finish this book in one {singularTimeFrameType} by reading {pagesPerTimeFrame} pages per day.</h4>
              </div>
            )
          }
      } else if (timeFrameNumber > 1){
        if(timeFrameType === "weeks") {
          return (
            <div>
              <h4>Based on the time frame you chose:</h4>
              <h4>You can finish this book in {timeFrameNumber} {timeFrameType} by reading {Math.round(pagesPerTimeFrame/7)} pages per day.</h4>
            </div>
          )
        } else if(timeFrameType === "months") {
          return (
            <div>
              <h4>Based on the time frame you chose:</h4>
              <h4>You can finish this book in {timeFrameNumber} {timeFrameType} by reading {Math.round(pagesPerTimeFrame/30)} pages per day.</h4>
            </div>
          )
        } else if (timeFrameType === "days"){
          return (
            <div>
              <h4>Based on the time frame you chose:</h4>
              <h4>You can finish this book in {timeFrameNumber} {timeFrameType} by reading {pagesPerTimeFrame} pages per day.</h4>
            </div>
          )
        }
      }
    }
  }
}


export default NoDateCalculator;
