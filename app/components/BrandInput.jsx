import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    event.preventDefault()
    console.log('event.taret', event.target)
    this.props.handleClick(event, this.props.product.itemId, this.state.updatedBrandName)
  }

  handleChange(event) {
    this.setState({updatedBrandName: event.target.value})
  }

  render() {
    const product = this.props.product

    return (
      <td>
        <form className="form-inline">
          <div className="form-group">
            <label className="sr-only" htmlFor="editable-brand">Brand</label>
            <input
              value={this.state.updatedBrandName}
              onChange={this.handleChange}
              name={product.itemId}
              type="text"
              className="form-control"
              placeholder="Brand"/>
            <button
              type="submit"
              className="btn btn-default"
              id={`input-brand-${product.itemId}`}
              name={product.itemId}
              onClick={this.handleClick}>Update Brand</button>
          </div>
        </form>
      </td>
    )
  }
}

const mstp = (state, ownProps) => ({product: state.products[ownProps.product.itemId]})
const mdtp = (dispatch) => ({})

export default connect(mstp, mdtp)(BrandInput)
