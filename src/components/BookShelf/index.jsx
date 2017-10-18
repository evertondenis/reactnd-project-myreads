import React from 'react'
import Book from '../Book'


const BookShelf = (props) => {
  const { title, books } = props

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => (
            <li key={index}>
              <Book
                image={book.imageLinks.thumbnail}
                title={book.title}
                author={book.authors[0]}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
