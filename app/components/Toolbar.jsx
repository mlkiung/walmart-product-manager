import React, { Component } from 'react'
import { connect } from 'react-redux'

import AdvancedSearch from './AdvancedSearch'
import { getDataFromApi } from '../getDataFromApi'
import {receiveProducts} from '../redux/search'

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
      data: {},
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

    const query = this.state.query,
      brandName = this.state.brandName,
      results = this.state.results,
      startAt = this.state.startAt,
      sortOption = this.state.sortOption,
      queryObj = { query, brandName, results, startAt, sortOption }

    if (query && query !== '') {
      const data = getDataFromApi(queryObj)
      data.then((products) => {
        this.props.receiveProducts(products)
      })
        .catch(console.error)
    } else {
      window.alert('Please enter a query.')
    }
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="input-group col-lg-2">
              <input
                type="text"
                className="form-control"
                placeholder="Query (required)"
                aria-describedby="basic-addon1"
                value={this.state.query}
                name="query"
                onChange={this.handleChange} />
              <span className="input-group-btn"><button className="btn btn-default" type="button" onClick={this.handleSubmit}>Go!</button></span>
            </div>
            {
              this.state.showAdvanced ? <AdvancedSearch handleChange={this.handleChange} search={this.state} /> : null
            }
            <div className="col-lg-2">
              <button type="button" className="btn btn-link" onClick={this.handleClick}>{this.state.showAdvanced && this.state.showAdvanced ? 'Hide Advanced' : 'Advanced Search'}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mstp = (state) => ({})
const mdtp = (dispatch) => ({receiveProducts})

export default connect(mstp, mdtp)(Toolbar)

/*

<nav>
        <div className="container-fluid toolbar">
          <ul className="nav nav-pills">
            <li role="presentation">
              <div className="input-group col-lg-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Query (required)"
                  aria-describedby="basic-addon1"
                  value={this.state.query}
                  name="query"
                  onChange={this.handleChange} />
                <span className="input-group-btn"><button className="btn btn-default" type="button" onClick={this.handleSubmit}>Go!</button></span>
              </div></li>
            {
              this.state.showAdvanced ? <AdvancedSearch handleChange={this.handleChange} search={this.state} /> : null
            }
            <li>
              <button type="button" className="btn btn-link" onClick={this.handleClick}>{this.state.showAdvanced && this.state.showAdvanced ? 'Hide Advanced' : 'Advanced Search'}</button></li>
          </ul>
        </div>
        <hr />
      </nav>

*/
