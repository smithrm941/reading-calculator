import React, { Component } from 'react'

class IndividualBook extends Component {

  handleChange(event) {
    this.props.onChange(event.target.value);
    console.log('Changing stuff:::', event.target.value)
  }

  render() {

    const selectedBook = this.props.selectedBook
    const enteredBook = this.props.enteredBook
    const coverPhoto = this.props.coverPhoto
    const totalPages = this.props.totalPages
    const currentPage = this.props.currentPage
    const pagesLeft = this.props.pagesLeft

    if(selectedBook) {
      if(pagesLeft >= 0) {
        return (
          <div>
            <form className="specific-book-data">
              <h1>Selected Book: <input type="text" ref="title" value={selectedBook} onChange={this.handleChange.bind(this)} readOnly/></h1>
              <img alt="No book selected or cover not available" src={coverPhoto} />
              <h1>Total Pages: <input type="number" ref="total_pages" value={totalPages} onChange={this.handleChange.bind(this)} readOnly/></h1>
              <h1>Pages Left: <input type="number" ref="pages" value={pagesLeft} onChange={this.handleChange.bind(this)} readOnly/></h1>
            </form>
          </div>
        )
      } else if (!totalPages && currentPage) {
        return (
          <div>
            <form className="specific-book-data">
              <h1>Selected Book: <input type="text" ref="title" value={selectedBook} onChange={this.handleChange.bind(this)} readOnly/></h1>
              <img alt="No book selected or cover not available" src={coverPhoto} />
              <h1>Total Pages: <input type="number" ref="total_pages" value={totalPages} onChange={this.handleChange.bind(this)} readOnly/></h1>
              <h1>Please enter the total number of pages in the book you're reading.</h1>
            </form>
          </div>
        )
      } else if (totalPages && currentPage && currentPage > totalPages) {
        return (
          <div>
            <form className="specific-book-data">
              <h1>Selected Book: <input type="text" ref="title" value={selectedBook} onChange={this.handleChange.bind(this)} readOnly/></h1>
              <img alt="No book selected or cover not available" src={coverPhoto} />
              <h1>Total Pages: <input type="number" ref="total_pages" value={totalPages} onChange={this.handleChange.bind(this)} readOnly/></h1>
              <h1>Current page cannot be higher than total pages.</h1>
            </form>
          </div>
        )
       }
    } else if (enteredBook) {
      if(pagesLeft >= 0) {
        return (
          <div>
            <form className="specific-book-data">
              <h1>Selected Book: <input type="text" ref="title" value={enteredBook} onChange={this.handleChange.bind(this)} readOnly/></h1>
              <h1>Total Pages: <input type="number" ref="total_pages" value={totalPages} onChange={this.handleChange.bind(this)} readOnly/></h1>
              <h1>Pages Left: <input type="number" ref="pages" value={pagesLeft} onChange={this.handleChange.bind(this)} readOnly/></h1>
            </form>
          </div>
        )
      } else if (!totalPages && currentPage) {
        return (
          <div>
            <form className="specific-book-data">
              <h1>Selected Book: <input type="text" ref="title" value={enteredBook} onChange={this.handleChange.bind(this)} readOnly/></h1>
              <img alt="No book selected or cover not available" src={coverPhoto} />
              <h1>Total Pages: <input type="number" ref="total_pages" value={totalPages} onChange={this.handleChange.bind(this)} readOnly/></h1>
              <h1>Please enter the total number of pages in the book you're reading.</h1>
            </form>
          </div>
        )
      } else if (totalPages && currentPage && currentPage > totalPages) {
        return (
          <div>
            <form className="specific-book-data">
              <h1>Selected Book: <input type="text" ref="title" value={enteredBook} onChange={this.handleChange.bind(this)} readOnly/></h1>
              <img alt="No book selected or cover not available" src={coverPhoto} />
              <h1>Total Pages: <input type="number" ref="total_pages" value={totalPages} onChange={this.handleChange.bind(this)} readOnly/></h1>
              <h1>Current page cannot be higher than total pages.</h1>
            </form>
          </div>
        )
      }
    } else if ((!selectedBook || !enteredBook) && pagesLeft) {
      if(pagesLeft >= 0) {
        return (
          <div>
            <h1>Pages Left: {pagesLeft}</h1>
          </div>
        )
      } else if (!totalPages && currentPage) {
        return (
          <div>
            <h1>Please enter the total number of pages in the book you're reading.</h1>
          </div>
        )
      } else if (totalPages && currentPage && currentPage > totalPages) {
        return (
          <div>
            <h1>Current page cannot be higher than total pages.</h1>
          </div>
        )
      }
    } else if (!totalPages) {
      return (
      <div></div>
      )
    }
  }
}

export default IndividualBook;
