import React from 'react'
import { StyledPreloader } from './styled'
import loading from './rings.svg'

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

export default Preloader
