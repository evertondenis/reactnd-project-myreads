import React from 'react'
import noimage from './no-image.png'

const Book = (props) => {
  const { id, image, title, author, shelf, updateShelf } = props

  let thumb = image !== 'no-image' ? '#7c0053 url(' + image + ')' : '#7c0053 url(' + noimage + ') no-repeat 50%'

  const style = {
    width: '128px',
    height: '190px',
    background: thumb,
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
