import React, { Component } from 'react'
import { connect } from 'react-redux'
import {values} from 'lodash'

class SearchInput extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(event) {
    this.props.handleClick(event)
  }

  handleChange(event) {
    this.props.handleChange(event)
  }

  render() {
    return (
      <form className="form-inline bottom-margin">
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-addon" id="sizing-addon2">
              <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
            </div>
            <input
              type="text"
              value={this.props.inputValue}
              className="form-control"
              name="search-products"
              placeholder="Search within results"
              aria-describedby="sizing-addon2"
              onChange={this.handleChange} />
          </div>
        </div>
        <button
          className="btn btn-default left-margin"
          type="submit"
          name="delete-repository"
          onClick={this.handleClick}
        >Clear Table</button>
      </form>
    )
  }
}

export default SearchInput
