import React from 'react'

const Book = (props) => {
  const { id, image, title, author, shelf, updateShelf } = props

  const style = {
    width: '128px',
    height: '193px',
    backgroundImage: 'url(' + image + ')',
  }

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover"
          style={style}>
        </div>
        <div className="book-shelf-changer">
          <select onChange={(input)=> updateShelf({id: id}, input)} defaultValue={shelf || 'none'}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  )
}

export default Book
