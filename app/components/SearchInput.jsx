import React, { Component } from 'react'
import { connect } from 'react-redux'
import {values} from 'lodash'

class SearchInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

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
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="input-group">
            <span className="input-group-addon" id="sizing-addon2">
              <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
            </span>
            <input
              type="text"
              value={this.props.inputValue}
              className="form-control"
              name="search-products"
              placeholder="Search products"
              aria-describedby="sizing-addon2"
              onChange={this.handleChange} />
          </div>
          <button
            className="btn btn-default"
            type="submit"
            name="delete-repository"
            onClick={this.handleClick}
          >Clear Table (this cannot be undone)</button>
        </div>
      </div>
    )
  }
}

const mstp = (state) => ({products: state.products})

export default connect(mstp)(SearchInput)
