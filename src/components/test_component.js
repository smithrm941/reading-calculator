import React, { Component } from 'react'

class TestComponent extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.currentPage}</h1>
        <h1>{this.props.totalPages}</h1>
      </div>

    )
  }
}

export default TestComponent;
