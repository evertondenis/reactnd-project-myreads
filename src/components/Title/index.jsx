import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { StyledTitle } from './styled'

const Title = (props) => {
  const { text } = props

  return (
    <StyledTitle>
      <h1>{text}</h1>
      <Link to='/about' className="btn-about">about 🙂</Link>
    </StyledTitle>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title
