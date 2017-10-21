import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from '../../core/provider/BooksAPI'
import { debounce } from 'throttle-debounce'
import Book from '../../components/Book'
import Preloader from '../../components/Preloader'
import InputSearch from '../../components/InputSearch'

import './style.css'

class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      listBooks: [],
      showloader: false,
      noResults: false
    }

    this.searchBooks = debounce(500, this.searchBooks.bind(this))
  }

  searchBooks(query) {
    if (query === '') {
      this.setState({ noResults: false, listBooks: [] })
    } else {
      this.setState({ showloader: true })
      BooksAPI.search(query).then((books) => {
        const listBooks = books
        this.setState({ noResults: false, showloader: false, listBooks })
      })
    }
  }

  render() {
    const { loader, updateShelf } = this.props
    const books = this.state.listBooks

    return (
      <div className="search-books">
        <InputSearch onChange={this.searchBooks} />

        <div className="search-books-results">
          <Preloader condition={this.state.showloader} />
          <Preloader condition={loader} />

          <ol className="books-grid">
            {this.state.noResults && <h2>No results</h2>}

            {(books.length > 0) &&
              books.map((book, index) => (
                <li key={index}>
                  <Book
                    id={book.id}
                    image={book.imageLinks ? book.imageLinks.thumbnail : 'no-image'}
                    title={book.title}
                    author={book.authors ? book.authors.join(', ') : 'Unknown Author'}
                    shelf={book.shelf}
                    updateShelf={updateShelf}
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

Search.propTypes = {
  loader: PropTypes.bool,
  updateShelf: PropTypes.func.isRequired
}

export default Search
