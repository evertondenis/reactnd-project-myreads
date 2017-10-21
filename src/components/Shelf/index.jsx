import React from 'react'
import Book from '../Book'


const Shelf = (props) => {
  const { title, books, updateShelf } = props

  return (
    <div className="bookshelf">
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
    </div>
  )
}

export default Shelf
