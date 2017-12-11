import React, { Component } from 'react'
import moment from 'moment-es6';

class Calculator extends Component {

  render() {
    const currentPage = this.props.currentPage
    const totalPages = this.props.totalPages
    const difference = totalPages - currentPage

    if(!totalPages || !currentPage) {
      return (
        <div>
          <h1>Pages Left: </h1>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Pages Left: {totalPages - currentPage}</h1>
        </div>
      )
    }

  }
}

export default Calculator;
