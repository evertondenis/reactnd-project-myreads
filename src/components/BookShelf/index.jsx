import React from 'react'
import Book from '../Book'


const BookShelf = (props) => {
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
                image={book.imageLinks.thumbnail}
                title={book.title}
                author={book.authors[0]}
                updateShelf={updateShelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
