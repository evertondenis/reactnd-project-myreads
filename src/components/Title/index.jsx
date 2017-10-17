import React from 'react'
import PropTypes from 'prop-types'
import { StyledTitle } from './styled'

const Title = (props) => {
  const { text } = props

  return (
    <StyledTitle>
      <h1>{text}</h1>
    </StyledTitle>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title
