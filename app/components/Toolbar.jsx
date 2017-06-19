import React, { Component } from 'react'
import { connect } from 'react-redux'

import AdvancedSearch from './AdvancedSearch'
import { getProductsFromApi } from '../utils'
import { clearStorage } from '../../localStorage'

class Toolbar extends Component {
  constructor() {
    super()

    this.state = {
      showAdvanced: false,
      query: '',
      brandName: '',
      results: '',
      startAt: '',
      sortOption: 'relevance',
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({
      showAdvanced: !this.state.showAdvanced,
      brandName: '',
      results: '',
      startAt: '',
      sortOption: 'relevance',
    })
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()

    const query = this.state.query
    const brandName = this.state.brandName
    const results = this.state.results
    const startAt = this.state.startAt
    const sortOption = this.state.sortOption

    const queryObj = { query, brandName, results, startAt, sortOption }

    if (query && query !== '') {
      const products = getProductsFromApi(queryObj)
      clearStorage()
    } else {
      window.alert('Please enter a query.')
    }
  }

  render() {
    return (
      <nav>
        <div className="container-fluid">
          <ul className="nav nav-pills">
            <li role="presentation">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Query (required)"
                  aria-describedby="basic-addon1"
                  value={this.state.query}
                  name="query"
                  onChange={this.handleChange} />
              </div>
            </li>
            {
              this.state.showAdvanced ? <AdvancedSearch handleChange={this.handleChange} search={this.state} /> : null
            }
            <li>
              <a href="#" className="navbar-link" onClick={this.handleClick}>{this.state.showAdvanced && this.state.showAdvanced ? 'Hide Advanced' : 'Advanced Search'}</a>
            </li>
            <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Add Products</button>
          </ul>
        </div>
        <hr />
      </nav>
    )
  }
}

export default Toolbar
