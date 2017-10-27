import React from 'react'
import PropTypes from 'prop-types'

import { StyledBook } from './styled.js'
import noimage from './assets/no-image.png'

const Book = (props) => {
  const { id, image, title, author, shelf, updateShelf } = props

  const thumb = image && image !== 'no-image'
              ? '#7c0053 url(' + image + ')'
              : 'black url(' + noimage + ') no-repeat 50%'

  const style = {
    width: '128px',
    height: '190px',
    background: thumb,
  }

  return (
    <StyledBook>
      <div className="book-top">
        <div className="book-cover" style={style} />
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
    </StyledBook>
  )
}

Book.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.any.isRequired,
  shelf: PropTypes.string,
  updateShelf: PropTypes.func.isRequired
}

export default Book
