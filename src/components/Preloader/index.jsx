import React from 'react'
import PropTypes from 'prop-types'
import { StyledPreloader } from './styled'
import loading from './assets/rings.svg'

const Preloader = (props) => {
  const { condition } = props

  return (
    <div>
      {condition &&
        <StyledPreloader>
          <span className="loading">
            <img src={loading} alt="loading" />
          </span>
        </StyledPreloader>
      }
    </div>
  )
}

Preloader.propTypes = {
  condition: PropTypes.bool.isRequired
}

export default Preloader
