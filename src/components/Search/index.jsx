import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book'

class Search extends Component {

  state = {
    listBooks: []
  }

  searchBooks(query) {
    BooksAPI.search(query).then((books) => {
      console.log(books)

      const listBooks = books
      this.setState({ listBooks })
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.searchBooks(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.listBooks &&
              this.state.listBooks.map((book, index) => (
                <li key={index}>
                  <Book
                    image={book.imageLinks.thumbnail}
                    title={book.title}
                    author={book.authors}
                  />
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
