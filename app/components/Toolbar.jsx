import React, { Component } from 'react'
import { connect } from 'react-redux'

import { receiveProducts } from '../redux/search'
import AdvancedSearch from './AdvancedSearch'

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
    setTimeout(() => { console.log('state', this.state) }, 1000)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value })
    console.log('STATE', this.state)
  }

  handleSubmit(event) {
    event.preventDefault()
    const query = this.state.query
    query && (query !== '' && query !== undefined) ? this.props.receiveProducts({ query: this.state.query }) : window.alert('Please enter a query.')
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
            <button onSubmit={this.handleSubmit} type="button" className="btn btn-primary">Add Products</button>
          </ul>
        </div>
        <hr />
      </nav>
    )
  }
}

const mstp = (state) => ({})
const mdtp = (dispatch) => ({ receiveProducts })

export default connect(mstp, mdtp)(Toolbar)
