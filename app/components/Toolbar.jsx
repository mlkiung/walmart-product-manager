import React, { Component } from 'react'

import AdvancedSearch from './AdvancedSearch'

class Toolbar extends Component {
  constructor() {
    super()

    this.state = {
      showAdvanced: false,
      value: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({ showAdvanced: !this.state.showAdvanced })
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({value: event.target.value})
  }

  render() {

    return (
      <nav>
        <div className="container-fluid">
          <ul className="nav nav-pills">
            <li role="presentation">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Query (required)" aria-describedby="basic-addon1" value={this.state.value} onChange={this.handleChange} />
              </div>
            </li>
            {
              this.state.showAdvanced ? <AdvancedSearch onChange={this.handleChange} /> : null
            }
            <li>
              <a href="#" className="navbar-link" onClick={this.handleClick}>{this.state.showAdvanced && this.state.showAdvanced ? 'Hide Advanced' : 'Advanced Search'}</a>
            </li>
            <button type="button" className="btn btn-primary">Add Products</button>
          </ul>
        </div>
        <hr />
      </nav>
    )
  }
}

export default Toolbar
