import React, { Component } from 'react'

class TableControlPanel extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    const localStorage = window.localStorage
    localStorage.clear()
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="input-group">
            <span className="input-group-addon" id="sizing-addon2">
              <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
            </span>
            <input type="text" className="form-control" placeholder="Search products" aria-describedby="sizing-addon2" />
          </div>
          <button
            className="btn btn-default"
            type="submit"
            onClick={this.handleClick}
          >Clear Table</button>
        </div>
      </div>
    )
  }
}

export default TableControlPanel
