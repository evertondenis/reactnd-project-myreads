import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../core/provider/BooksAPI'
import { debounce } from 'throttle-debounce'
import Book from '../../components/Book'
import Preloader from '../../components/Preloader'

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

  componentDidMount() {
    this.searchInput.focus()
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
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              ref={(input) => { this.searchInput = input }}
              onChange={(event) => this.searchBooks(event.target.value)}
            />

          </div>
        </div>
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
                    author={book.authors}
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

export default Search
