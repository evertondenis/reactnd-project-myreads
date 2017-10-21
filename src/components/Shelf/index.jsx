import React from 'react'
import PropTypes from 'prop-types'
import Book from '../Book'

import { StyledShelf } from './styled.js'

const Shelf = (props) => {
  const { title, books, updateShelf } = props

  return (
    <StyledShelf>
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => (
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
          ))}
        </ol>
      </div>
    </StyledShelf>
  )
}

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default Shelf
