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
    const queryObj = { ...this.state }
    const query = this.state.query

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
      <div className="page-header container">
        <div className="input-group" id="toolbar">
          <div className="row">
            <h1 className="col-sm-6" id="title">Walmart Product Manager</h1>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="col-sm-4 restrict-width">
                <input
                  type="text"
                  className="form-control center-rows-half"
                  placeholder="Search Walmart database"
                  aria-describedby="basic-addon1"
                  value={this.state.query}
                  name="query"
                  onChange={this.handleChange} />
              </div>
              <div className="col-sm-1">
                <span className="input-group-btn"><button className="btn btn-default center-rows-half" type="button" role="button" onClick={this.handleSubmit}>Go!</button></span>
              </div>
            </div>
          </div>
          <div className="row">
            {
              this.state.showAdvanced ? <AdvancedSearch handleChange={this.handleChange} search={this.state} /> : null
            }
          </div>
          <div className="row">
            <div className="col-sm-6">
              <button type="button" id="advanced-search" className="btn btn-link center-rows-half" onClick={this.handleClick}>{this.state.showAdvanced && this.state.showAdvanced ? 'Hide Advanced' : 'Advanced Search'}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mstp = () => ({})
const mdtp = (dispatch) => ({receiveProducts})

export default connect(mstp, mdtp)(Toolbar)
