import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { StyledInput } from './styled.js'

class InputSearch extends PureComponent {
  constructor(props) {
    super(props)

    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    this.searchInput.focus()
  }

  handleInput(query) {
    const { onChange } = this.props
    onChange(query)
  }

  render() {

    return (
      <StyledInput>
        <Link className='close-search' to='/'>Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            ref={(input) => { this.searchInput = input }}
            onChange={(e) => this.handleInput(e.target.value)}
          />
        </div>
      </StyledInput>
    )
  }
}

InputSearch.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default InputSearch
