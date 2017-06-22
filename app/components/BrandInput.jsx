import React, { Component } from 'react'

class BrandInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      updatedBrandName: '',
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(event) {
    this.props.handleClick(event)
  }

  handleChange(event) {
    this.setState({updatedBrandName: event.target.value})
  }

  render(props) {
    const product = this.props.product

    return (
      <td>
        <form className="form-inline">
          <div className="form-group">
            <label className="sr-only" htmlFor="editable-brand">Brand</label>
            <input
              value={this.state.updatedBrandName}
              onChange={this.handleChange}
              type="text"
              name={product.itemId}
              className="form-control"
              id="editable-brand"
              placeholder="Brand"/>
            <input
              type="submit"
              className="btn btn-default"
              name={`input-brand-${product.itemId}`}
              onClick={this.handleClick}></input>
          </div>
        </form>
      </td>
    )
  }
}

export default BrandInput
