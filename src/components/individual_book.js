import React, { Component } from 'react'

class IndividualBook extends Component {

  componentDidMount() {
    console.log('Component has mounted')

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
    const coverPhoto = this.props.coverPhoto
    const totalPages = this.props.totalPages
    const currentPage = this.props.currentPage
    const pagesLeft = this.props.pagesLeft

    if(selectedBook && pagesLeft) {
      return (
      <div>
        <form>
          <h1>Selected Book: <input type="text" ref="title" value={selectedBook}/></h1>
          <img alt="No book selected or cover not available" src={coverPhoto} />
          <h1>Pages Left: <input type="number" ref="pages" value={pagesLeft}/></h1>
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
      <div><h1>Enter some stuff...</h1></div>
        // <h1>Selected Book: {selectedBook.title}</h1>
        // <img alt="No book selected or cover not available" src={selectedBook.thumbnail} />
        // <h1>Pages Left: {pagesLeft}</h1>
      )
    }
  }
}

export default IndividualBook;
