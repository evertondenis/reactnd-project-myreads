import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ text }) => {
  return (
    <div className="list-books-title">
      <h1>{text}</h1>
    </div>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title
