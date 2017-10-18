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
                image={book.image}
                title={book.title}
                author={book.author}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf