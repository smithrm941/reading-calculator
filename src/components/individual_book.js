import React, { Component } from 'react'

class IndividualBook extends Component {

  componentDidMount() {
    console.log('Component has mounted')
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  addBook(event) {
    event.preventDefault()
    let data = {
      title: this.refs.title.value,
      pages: this.refs.pages.value
    }
    let request = new Request('http://localhost:3000/api/newBook', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json'}),
      body: JSON.stringify(data)
    })

    fetch(request)
      .then((response) => {
        response.json()
          .then((data) => {
            console.log(data)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const selectedBook = this.props.selectedBook
    const enteredBook = this.props.enteredBook
    const coverPhoto = this.props.coverPhoto
    const totalPages = this.props.totalPages
    const currentPage = this.props.currentPage
    const pagesLeft = this.props.pagesLeft

    if(selectedBook && pagesLeft) {
      return (
      <div>
        <form className="specific-book-data">
          <h1>Selected Book: <input type="text" ref="title" value={selectedBook} onChange={this.handleChange.bind(this)} readOnly/></h1>
          <img alt="No book selected or cover not available" src={coverPhoto} />
          <h1>Pages Left: <input type="number" ref="pages" value={pagesLeft} onChange={this.handleChange.bind(this)} readOnly/></h1>
          <button onClick={this.addBook.bind(this)}>Add Book</button>
        </form>
      </div>
      )
    } else if(enteredBook && pagesLeft) {
          return (
          <div>
            <form className="specific-book-data">
              <h1>Selected Book: <input type="text" ref="title" value={enteredBook} onChange={this.handleChange.bind(this)} readOnly/></h1>
              <img alt="No book selected or cover not available" src={coverPhoto} />
              <h1>Pages Left: <input type="number" ref="pages" value={pagesLeft} onChange={this.handleChange.bind(this)} readOnly/></h1>
              <button onClick={this.addBook.bind(this)}>Add Book</button>
            </form>
          </div>
          )
    } else if (!selectedBook && totalPages && pagesLeft) {
      if(pagesLeft >= 0) {
        return (
          <div>
            {/* // <h1>Selected Book: {selectedBook.title}</h1>
            // <img alt="No book selected or cover not available" src={selectedBook.thumbnail} /> */}
            <h1>Pages Left: {pagesLeft}</h1>
          </div>
        )
      } else {
        return (
          <div>
            {/* // <h1>Selected Book: {selectedBook.title}</h1>
            // <img alt="No book selected or cover not available" src={selectedBook.thumbnail} /> */}
            <h1>Current page cannot be greater than total pages</h1>
          </div>
        )
      }
    } else if (!selectedBook && !totalPages) {
      return (
      <div><h1>Keep your eye on this area to find out how many pages you have to read to meet your goals!</h1></div>
        // <h1>Selected Book: {selectedBook.title}</h1>
        // <img alt="No book selected or cover not available" src={selectedBook.thumbnail} />
        // <h1>Pages Left: {pagesLeft}</h1>
      )
    }
  }
}

export default IndividualBook;
